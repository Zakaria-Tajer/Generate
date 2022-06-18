import React, { useEffect, useState } from "react";
import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RooteState } from "store/store";
export const ProjectDeadline = () => {

  const Project = useSelector((state: RooteState) => state?.projectData)
  const CLientId = useSelector((state: RooteState) => state.Data.uniqueId)
  const CompletedTasks = useSelector((state: RooteState) => state?.projectData?.CompletedTasks)
  const progress = useSelector((state: RooteState) => state.projectData.Progress)
  const starter_Tasks = useSelector((state: RooteState) => state.projectData.starter_Tasks)
  const [projectDes, setProjectDes] = useState<string>('')
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


  const AllTasks = parseInt((+CompletedTasks) + (+progress) + (+starter_Tasks))
  console.log(AllTasks);

  return (
    <>
      {Project.isProject ?
        <div className="w-3/4 flex ml-4 rounded bg-white py-3">
          <div className="flex">
            <div className="w-36 h-36 bg-purple-900 ml-4 rounded"></div>
            <div className="space-y-4  ml-4">
              <div className="flex h-5 space-x-24 items-center">
                <h1 className="text-xl uppercase font-poppins">{Project.projectName}</h1>
                <div className="px-10 rounded bg-green-500/70 text-white">Done</div>
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
                <div className='flex -space-x-2'>
                  <div className='w-10 h-10 rounded-full py-2 bg-black'></div>
                  <div className='w-10 h-10 rounded-full py-2 bg-purple-500'></div>
                  <div className='w-10 h-10 rounded-full py-2 bg-yellow-500'></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-2 w-1/3 ml-auto flex justify-end mr-3 ">
            <div className=" flex items-center font-poppins">
              <button className="bg-blue-500 text-white px-10 flex items-center rounded py-2 hover:duration-700 hover:bg-blue-600">proceed to checkout
              <CheckOutlined className="ml-3"/>
              </button>
              
            </div>
          </div>
        </div> : <div>hello</div>
      }

    </>

  );
};
