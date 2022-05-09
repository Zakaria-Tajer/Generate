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
import { ProjectStatus } from "./projectDetails/ProjectStatus";
import { ProjectDeadline } from "./projectDetails/ProjectDeadline";
import { MainProject } from "./MainProject";

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
  const Lg = useMediaQuery({ query: "(max-width: 1024px)" });
  const Devices = useMediaQuery({ query: "(min-width: 1440px)" });

  const toggle = useSelector((state: RooteState) => state.ToggleBars.toggleBar);
  return (
    <UserContext.Provider value={{ fName, lName, img, loaded }}>
      {loaded ? (
        <div className="min-h-screen flex bg-gray-400 w-full">
          <div className="w-full flex">
            {isExpired && <Expired />}
            <div
              className={Mobile ? "-left-24 absolute" : isExpired ? "" : "z-10"}
            >
              {Devices ? (
                <Sidebar />
              ) : (
                <>
                  {Mobile ? (
                    <>{toggle ? <ResSidebar /> : <Sidebar />}</>
                  ) : (
                    <ResSidebar />
                  )}
                </>
              )}
            </div>
            <div className="w-full h-[75px] flex absolute">
              <div className="bg-white h-[65px] w-full md:w-3/5 max-w-2xl mx-auto rounded mt-4">
                <Navbar />
              </div>
            </div>
            <div className="w-full mt-24 bg-blue-900 ">
              <MainProject />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </UserContext.Provider>
  );
};
