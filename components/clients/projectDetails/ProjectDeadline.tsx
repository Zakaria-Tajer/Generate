/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RooteState } from "store/store";
import { clientProjectDataManaging } from "slices/ClientProjectData";
export const ProjectDeadline = () => {

  const Project = useSelector((state: RooteState) => state.projectData)
  const CLientId = useSelector((state: RooteState) => state.Data.uniqueId)
  const CompletedTasks = useSelector((state: RooteState) => state.projectData.CompletedTasks)
  const progress = useSelector((state: RooteState) => state.projectData.Progress)
  const starter_Tasks = useSelector((state: RooteState) => state.projectData.starter_Tasks)
  const projectIndexID = useSelector((state: RooteState) => state.projectData.projectIndexID)

  const [projectDes, setProjectDes] = useState<string>('')
  const [tempId, setTempId] = useState<string>('')
  const [deliveryProjects, setDeliveryProjects] = useState<any>([])
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/projectClient`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let datas = JSON.parse(req.response.trim())
          console.log(datas);
          if (datas.data) {
            const { data: { birefProjectDesc } } = datas
            setProjectDes(birefProjectDesc)

          }
        }
      };

    }
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send(`CLientId=${CLientId}`);
  }, [CLientId]);

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/clientFinalProjectDetails`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          if (req.response.trim()) {
            let datas = req.response.trim()
            setTempId(datas)
            // console.log(datas);

          }
        }
      };

    }
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send(`projectId=${projectIndexID}`);

  }, [dispatch, projectIndexID])
  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/PrsuFinalProjects`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          const datas = JSON.parse(req.response.trim())

          if (datas.data) {
            const { data: { logo, FirstName, LastName, img } } = datas
            dispatch(clientProjectDataManaging({ logo: logo, FirstName: FirstName, LastName: LastName, img: img }))
          }
        }
      };

    }
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send(`developerID=${tempId}`);

  }, [dispatch, tempId]) 


  let AllTasks = (+CompletedTasks! + (+progress!) + (+starter_Tasks!))
  console.log(AllTasks    );
  
  const projectData = useSelector((state: RooteState) => state.projectData)
  return (
    <>
      {Project.isProject ?
        <div className="2xl:w-3/4 xl:w-5/6 lg:w-11/12 xl:py-10 2xl:flex lg:ml-4 rounded bg-white py-8">
          <div className="2xl:flex xl:flex-nowrap flex-wrap space-y-4  py-2 xl:py-0 space-x-8 xl:space-x-0">
            
            <div className="w-36 2xl:w-52 mx-auto h-36 bg-purple-900 2xl:ml-4 rounded">
              <img src={`http://localhost:8000/projectLogos/${projectData.logo}`} alt="" className="w-full h-full rounded object-cover" />
            </div>
            <div className="space-y-4 w-full  ml-4 xl:pl-10 xl:pr-10">
              <div className="flex h-5 xl:space-x-24 items-center justify-between">
                <h1 className="text-xl uppercase font-poppins">{Project.projectName}</h1>
                <div className="px-10 rounded bg-green-500/70 text-white mr-10 xl:mr-0">Done</div>
              </div>
              <h1 className="font-poppins text-gray-400">#1 {projectDes}</h1>
              <div className="flex space-x-4">
                <div className="w-36 border-2 py-2 space-y-1 border-dashed rounded pl-2">
                  <h1 className="text-xl font-poppins">{Project.ProjectDeadline}</h1>
                  <h1 className="text-gray-400 font-poppins">Due Date</h1>
                </div>
                <div className="w-36 border-2 border-dashed space-y-1 py-2 rounded pl-2">
                  <h1 className="text-xl font-poppins">{AllTasks}</h1>
                  <h1 className="text-gray-400 font-poppins">All Tasks</h1>
                </div>
                <div className='flex items-center space-x-4'>
                  <div className='w-10 h-10 rounded-full shadow-sm'>
                    <img src={`http://localhost:8000/adminUploads/${projectData.img}`} alt="" className="rounded-full w-10 h-10 object-cover" />
                  </div>
                  <h1 className="font-poppins">{projectData.FirstName}{" "}{projectData.LastName}</h1>

                </div>
              </div>
            </div>
          </div>
          <div className="xl:py-2 2xl:w-1/3 mx-auto w-full 2xl:ml-auto  flex justify-center py-4 2xl:justify-end mr-3 ">
            <div className=" flex items-center font-poppins">
              <button className="bg-blue-500 text-white px-10 flex items-center rounded py-2 hover:duration-700 hover:bg-blue-600">proceed to checkout
                <CheckOutlined className="ml-3" />
              </button>

            </div>
          </div>
        </div> : <div>

        </div>
      }

    </>

  );
};
