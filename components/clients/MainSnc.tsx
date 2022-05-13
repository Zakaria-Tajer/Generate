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
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { updateCred } from "slices/DataSlice";

export const MainSnc = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [expired, setExpired] = useState<boolean>(false);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [fName, setFname] = useState<string>("");
  const [lName, setLname] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [uniqueId, setUniqueId] = useState<string>("");

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
              const { first_name, last_name, image,id } = data.data;
              if (first_name !== undefined || last_name !== undefined) {
                setFname(first_name);
                setLname(last_name);
                setImg(image);
                setUniqueId(id);
                setLoaded(true);

              }else {
                setIsExpired(true);
              }
            }
          });
      }
    }
    dispatch(updateCred({ fName, lName,img,uniqueId }));
  }, [dispatch, email, expired, fName, img, lName, uniqueId]);

  const Mobile = useMediaQuery({ query: "(max-width: 425px)" });
  const Devices = useMediaQuery({ query: "(min-width: 1440px)" });
  const toggle = useSelector((state: RooteState) => state.ToggleBars.toggleBar);
  return (
    <>
      {loaded ? (
        <>
          {isExpired && <Expired />}
          <div
            className={
              Mobile ? "z-10 absolute -left-24" : isExpired ? "" : "z-10"
            }
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
            <div className="bg-white h-[65px] w-full md:w-3/5 max-w-2xl mx-auto rounded mt-4 shadow-xl">
              <Navbar />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
      </>
    
  );
};
