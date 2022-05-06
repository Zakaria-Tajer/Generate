import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Layouts/Navbar";
import { Sidebar } from "@/components/Layouts/Sidebar";
import { NextPage } from "next";
import Cookies from "js-cookie";
import { UserContext } from "context/AuthContext";
import axios from "axios";
import { Loading } from "@/components/Layouts/Loading";

const Home: NextPage = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
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

          console.log(datas);
          setEmail(datas);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");

    req.send(`token=${token}`);
  }, []);

  useEffect(() => {
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
  }, [email]);

  return (
    <UserContext.Provider value={{ fName, lName, img }}>
      {loaded ? (
        <div className="min-h-screen flex bg-gray-400 w-full">
          <div className="w-full bg-blue-400 flex">
            <Sidebar />
            <div className="bg-white h-[65px] mx-auto w-1/2 rounded mt-4">
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

export default Home;
