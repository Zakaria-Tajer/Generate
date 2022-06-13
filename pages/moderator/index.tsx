import { ComposeEmail } from "@/components/clients/email/ComposeEmail";
import { ModeLayout } from "@/components/moderator/Layouts/ModeLayout";
import { Datas } from "interfaces/User";
import Cookies from "js-cookie";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotificationsDataHandler } from "slices/NotificationSlice";
import { getSuperUsersInfo } from "slices/SuperUsersSlice";
import { AppDispatch, RooteState } from "store/store";

function Home() {
  const dispatch: AppDispatch = useDispatch();
  const isOpening = useSelector((state:RooteState) => state.ComposeEmail.Compose)
  useEffect(() => {
    const unique_id = Cookies.get("unique_id");
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/SupersUsersInfo`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response.trim());
          const {
            data: { FirstName, LastName, img, id },
          } = data;
          dispatch(
            getSuperUsersInfo({
              FirstName: FirstName,
              LastName: LastName,
              img: img,
              id: id,
            })
          );
          const obj = {
            fname: FirstName,
            lname: LastName,
            id: id,
            image: img,
          };
          localStorage.setItem("dats", JSON.stringify(obj));
          console.log(data);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send(`unique_id=${unique_id}`);
  }, [dispatch]);

  
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
     
      {isOpening &&  <ComposeEmail />}
      {/* <ClientProjectRequests /> */}
    </>
  );
}

Home.PageLayout = ModeLayout;

export default Home;
