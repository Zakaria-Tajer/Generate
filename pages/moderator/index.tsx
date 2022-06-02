import { ClientProjectRequests } from "@/components/moderator/ClientProjectRequests";
import { ModeLayout } from "@/components/moderator/Layouts/ModeLayout";
import axios from "axios";
import { Layouts } from "interfaces/Layouts";
import Cookies from "js-cookie";
import { revalidate } from "lib/revalidating";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSuperUsersInfo } from "slices/SuperUsersSlice";
import { AppDispatch } from "store/store";

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch("http://localhost:8000/api/ModNotifications" , {
    method: "POST",
    headers: {
      "Content-Type": 'multipart/form-data'
    },
    body: JSON.stringify('37')
  });
  const posts = await res.json();
  console.log(posts);
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 5, // In seconds
  };

};

function Home({ posts }: any) {
  console.log(posts);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    revalidate();
    const unique_id = Cookies.get("unique_id");
    const req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8000/api/SupersUsersInfo", true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          // Todo: implement parsing data
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
      {/* <ClientProjectRequests /> */}
    </>
  );
}

Home.PageLayout = ModeLayout;

export default Home;
