import Cookies from "js-cookie";
import { UserContext } from "context/AuthContext";
import axios from "axios";
import { Loading } from "@/components/Layouts/Loading";
import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Layouts/Navbar";
import { Sidebar } from "@/components/Layouts/Sidebar";
import { Expired } from "./Expired";
import { useMediaQuery } from "react-responsive";
import { RooteState } from "store/store";
import { useSelector } from "react-redux";
import { ResSidebar } from "../Layouts/Sidebar/ResSidebar";

export const MainSnc = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [expired, setExpired] = useState<boolean>(false);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [fName, setFname] = useState<string>("");
  const [lName, setLname] = useState<string>("");
  const [img, setImg] = useState<string>("");

  useEffect(() => {
    const token = Cookies.get("token");
    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8000/api/clientData", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          // Todo: implement parsing data
          let datas = req.response.trim();
          if (datas == "Expired token") {
            setExpired(true);
          }
          console.log(datas);
          setEmail(datas);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send(`token=${token}`);
  }, [expired]);

  useEffect(() => {
    if (expired == true) {
      if (email !== "") {
        let formdata = new FormData();
        formdata.append("email", email);
        axios
          .post("http://localhost:8000/api/clientCredential", formdata, {})
          .then((res) => {
            const data = res.data;
            console.log(data);
            setLoaded(true);
            setIsExpired(true);
          });
      }
    } else {
      if (email !== "") {
        let formdata = new FormData();
        formdata.append("email", email);
        axios
          .post("http://localhost:8000/api/clientCredential", formdata, {})
          .then((res) => {
            const data = res.data;
            console.log(data);
            if (data !== "") {
              const { first_name, last_name, image } = data.data;
              if (first_name || last_name !== "") {
                setFname(first_name);
                setLname(last_name);
                setImg(image);
                setLoaded(true);
              }
            }
          });
      }
    }
  }, [email]);

  const Mobile = useMediaQuery({ query: "(max-width: 425px)" });
  const Tablet = useMediaQuery({ query: "(max-width: 768px)" });
  const toggle = useSelector((state: RooteState) => state.ToggleBars.toggleBar);
  return (
    <UserContext.Provider value={{ fName, lName, img, loaded }}>
      {loaded ? (
        <div className="min-h-screen flex bg-gray-400 w-full">
          <div className="w-full bg-blue-400 flex relative">
            {isExpired && <Expired />}
            <div className={Mobile ? "-left-24 absolute": "absolute"}>
             {toggle ? <ResSidebar /> : <Sidebar />}
            </div>
            <div
              className={
                Tablet
                  ? "bg-white h-[65px] w-full md:w-3/5 mx-auto rounded mt-4"
                  : "max-w-2xl bg-white h-[65px] mx-auto lg:w-3/4 2xl:w-1/2 rounded mt-4"
              }
            >
              <Navbar />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </UserContext.Provider>
  );
};
