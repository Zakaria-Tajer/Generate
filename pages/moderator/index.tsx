import { ComposeEmail } from "@/components/clients/email/ComposeEmail";
import { ClientProjectRequests } from "@/components/moderator/ClientProjectRequests";
import { ModeLayout } from "@/components/moderator/Layouts/ModeLayout";
import { Datas } from "interfaces/User";
import Cookies from "js-cookie";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotificationsDataHandler } from "slices/NotificationSlice";
import { confirmingProject } from "slices/ProjectSlice";
import { getSuperUsersInfo } from "slices/SuperUsersSlice";
import { AppDispatch, RooteState } from "store/store";

export interface ProjectDetails {
  projectName: string;
  Delivery: string;
  birefProjectDesc: string;
  Project_unique_id: string;
  id: string;
  ProjectDetails: string
}

function Home() {
  const dispatch: AppDispatch = useDispatch();
  const [confirmedData, setConfirmedData] = useState<any>([]);
  const [isData, setIsData] = useState<boolean>(false);
  const isOpening = useSelector(
    (state: RooteState) => state.ComposeEmail.Compose
  );

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open(
      "POST",
      `${process.env.NEXT_PUBLIC_API_URL_Generate}api/selectConfirmedProj`,
      true
    );
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let data = JSON.parse(req.response.trim());

          setConfirmedData(data);
          setIsData(true);
          console.log(data);
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send();
    // dispatch(confirmingProject({ isConfirmed: false }));

  }, [])
  useEffect(() => {
    const unique_id = Cookies.get("unique_id");
    const req = new XMLHttpRequest();
    req.open(
      "POST",
      `${process.env.NEXT_PUBLIC_API_URL_Generate}api/SupersUsersInfo`,
      true
    );
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

  const isConfirmed = useSelector(
    (state: RooteState) => state.ProjectDetails.isConfirmed
  );


  if (isConfirmed == true) {
  }


  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      {isOpening && <ComposeEmail />}
      {isConfirmed ||
        (isData && (
          <>
            {confirmedData.map(({ projectName, id, Project_unique_id, birefProjectDesc, ProjectDetails, Delivery }: ProjectDetails) => (
              <>
                <ClientProjectRequests key={id} projectName={projectName} Project_unique_id={Project_unique_id} birefProjectDesc={birefProjectDesc} ProjectDetails={ProjectDetails} Delivery={Delivery} id={""} />
              </>
            ))}
          </>
        ))}
    </>
  );
}

Home.PageLayout = ModeLayout;

export default Home;
