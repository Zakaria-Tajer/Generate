import React, { useEffect, useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RooteState } from "store/store";
import Cookies from "js-cookie";
import { projectData } from "slices/ClientProjectData";
// Todo: Progress bar
// Todo: getserverSideProps => index => getData in page => redux => display it in Here
export const ProjectStatus = () => {
  const CLientId = useSelector((state: RooteState) => state.Data.uniqueId)
  const [projectNums, setProjectNums] = useState<string>('')
  const [plusProject, setPlusProject] = useState<string>('')
  const [projectClientId, setProjectCLientId] = useState<string>("")


  const [completedTasks, setCompletedTasks] = useState<string>("")
  const [tasksToStart, setTasksToStart] = useState<string>("")
  const [dateToFinnish, setDateToFinnish] = useState<any>("")
  const [inProgress, setInProgress] = useState<string>("")
  const [projectName, setProjectName] = useState<string>("")

  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    const proNums: any | undefined = Cookies.get('projectNums')
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/getProjectCount`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let datas = JSON.parse(req.response.trim())
          const { count } = datas
          const numbersPro: any = Object.values(count)
          setProjectNums(numbersPro)
          Cookies.set('projectNums', projectNums)

          if (numbersPro !== proNums) {
            setPlusProject(proNums)
          }
        }
      };

    }
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send(`clientId=${CLientId}`);
  }, [CLientId]);

  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/projectClient`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let datas = JSON.parse(req.response.trim())
          console.log(datas);
          if (datas.data) {
            const { data: { id, birefProjectDesc } } = datas
            setProjectCLientId(id)
            dispatch(projectData({ projectDescription: birefProjectDesc }))

          }
        }
      };

    }
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send(`CLientId=${CLientId}`);
  }, [CLientId, dispatch]);
  useEffect(() => {
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/pogressTracker`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          let datas = JSON.parse(req.response.trim())
          console.log(datas);
          if (datas.data) {
            const { data: { Completed_Tasks, Progress, Yet_to_start_Tasks, date_to_finnish, projectName, project_index_id } } = datas
            setCompletedTasks(Completed_Tasks)
            setInProgress(Progress)
            setTasksToStart(Yet_to_start_Tasks)
            setDateToFinnish(date_to_finnish)
            setProjectName(projectName)
            dispatch(projectData({ CompletedTasks: Completed_Tasks, Progress: Progress, starter_Tasks: Yet_to_start_Tasks, ProjectDeadline: date_to_finnish, isProject: true, projectName: projectName, projectIndexID: project_index_id }))
            // dispatch(projectData({ isProject: true, projectName: projectName }))
          }
        }
      };

    }
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");
    req.send(`projectId=${projectClientId}`);
  }, [dispatch, projectClientId]);


  return (
    <div className="space-y-4">
      <div className="lg:flex lg:w-11/12 lg:mx-auto xl:ml-4 2xl:max-w-4xl justify-between  bg-white 2xl:w-4/5 2xl:py-4 rounded lg:pl-10">
        <div className="flex flex-col lg:w-fit space-y-6 mb-7">
          <h1 className="pt-6 font-poppins pl-4 lg:pl-0">Project Status</h1>
          <div className="flex py-4 items-center mx-auto">
            <div className="py-3 p-4">
              <h1 className="text-6xl ">{projectNums}</h1>
            </div>
            <div className=" space-y-3 px-4 py-2">
              <h1 className="font-poppins">Total Projects</h1>
              <div className="flex space-x-4">
                <div className="bg-black w-6 rounded-full h-6 flex items-center justify-center">
                  <ArrowRightOutlined className="-rotate-45 text-white" />
                </div>
                <h1 className="font-poppins">+{plusProject == 0 as unknown ? projectNums : plusProject} New</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-2  lg:w-2/3  rounded flex items-center">
          <div className="flex md:mx-auto xl:ml-5 space-x-4">
            <div className="mt-[1rem]">
              <h1 className="font-poppins text-Teal"><span className="uppercase">{projectName}</span> Tasks progress</h1>
            </div>
            <div className="lg:w-56 bg-white p-4 space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 rounded-md h-2 bg-blue-400"></div>
                <h1>In Progress</h1>
                <h1 className="font-mono">{inProgress}</h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 rounded-md h-2 bg-purple-600"></div>
                <h1>Completed</h1>
                <h1 className="font-mono">{completedTasks}</h1>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 rounded-md h-2 bg-yellow-300"></div>
                <h1>Yet to start</h1>
                <h1 className="font-mono">{tasksToStart}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
