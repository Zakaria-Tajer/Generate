import { ComposeEmail } from "@/components/clients/email/ComposeEmail";
import { AssignedTeams } from "@/components/moderator/AssignedTeams";
import { ClientProjectRequests } from "@/components/moderator/ClientProjectRequests";
import { ModeLayout } from "@/components/moderator/Layouts/ModeLayout";
import { AnimatePresence, motion } from "framer-motion";
import { Datas } from "interfaces/User";
import Cookies from "js-cookie";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
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
              unique_id: ""
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
  const Mobile = useMediaQuery({ query: "(max-width: 1800px)" });


  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      {isOpening && <ComposeEmail />}
      <div className="2xl:flex w-fullrelative pt-16 space-y-4">
        <div className="w-3/4 space-y-3">
          {isConfirmed ||
            (isData && (
              <>
                {confirmedData.map(({ projectName, id, Project_unique_id, birefProjectDesc, ProjectDetails, Delivery }: ProjectDetails) => (
                  <>
                    <AnimatePresence>
                      <motion.div
                        transition={{ type: "spring", delay: 0.5 }}

                      >
                        <div className="2xl:full relative h-fit mx-auto 2xl:mx-0">

                          <ClientProjectRequests key={id} projectName={projectName} Project_unique_id={Project_unique_id} birefProjectDesc={birefProjectDesc} ProjectDetails={ProjectDetails} Delivery={Delivery} id={id} />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </>
                ))}

              </>
            ))}

        </div>
        <div className="2xl:w-1/4">
          <div className='w-5/6 mx-auto bg-white py-2 rounded-md top-12 2xl:mr-4 space-y-3 right-2'>
            <h1 className="text-center py-1 font-poppins">Available Developers</h1>
            <AssignedTeams />
          </div>

        </div>

      </div>
    </>
  );
}

Home.PageLayout = ModeLayout;

export default Home;
