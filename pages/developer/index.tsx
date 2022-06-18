import { ComposeEmail } from "@/components/clients/email/ComposeEmail";
import { DevLayouts } from "@/components/developer/Layouts/DevLayouts";
import { NotiSection } from "@/components/developer/NotiSection";
import { ProjectDescription } from "interfaces/SuperUsers";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDevId } from "slices/DeveloperSlice";
import { AppDispatch, RooteState } from "store/store";

function DeveloperHome() {
  const id = useSelector((state: RooteState) => state.handleDev.id)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [isData, setIsData] = useState<any>([])
  const [uniqueId, setUniqueId] = useState<string>('')
  const [ids, setIds] = useState<string>('')
  const dispatch: AppDispatch = useDispatch()
  const displayMore = () => {
    const req = new XMLHttpRequest();
    req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/DevAssignements`, true);
    req.onload = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          if (req.response.trim() == '') {
            setIsError(true)
          } else {
            let datas = JSON.parse(req.response.trim());
            setIsData(datas)
            setUniqueId(datas.Project_unique_id)
            dispatch(getDevId({ projectName: datas.projectName }))
            const { id } = datas[0]
            console.log(datas[0]);
            dispatch(getDevId({ projectId: id }))
            sessionStorage.setItem('projectId', datas[0].id)
            console.log(req.response.trim());
          }
        }
      }
    };
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Type", "multipart/form-data");

    req.send(`id=${id || ids}`);
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const Ids = sessionStorage.getItem('id') || "{}"
    setIds(Ids)
  }, [])
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="xl:flex h-fit">

        <div className='xl:w-1/2 py-5 mt-10 relative'>
          <div className='py-4 w-96 mx-auto rounded md:mt-4 md:w-11/12 flex flex-col items-center space-y-2 justify-center bg-white md:flex-row md:justify-between relative lg:justify-between lg:pr-5 lg:pl-5'>
            <h1 className="py-2 font-poppins md:ml-2">You Have been assigned in a project </h1>
            <button className=" font-poppins bg-Teal w-3/4 md:w-2/5 md:mr-2 shadow-md text-white rounded-md py-3" onClick={displayMore}>Display more details</button>
            {isOpen && <div className="w-full absolute bg-white shadow-lg top-20 py-3 left-0 rounded-b">
              {isError ? <h1>Nop</h1> : <>
                {isData.map((item: any) => (
                  <div key={item.id}>
                    <div className="md:space-x-3 pl-2 mb-2 md:flex space-y-2 md:space-y-0">
                      <div className="py-2 bg-Teal text-white md:w-1/4 w-5/6 pl-2 rounded font-poppins">Project Id: #{item.Project_unique_id}</div>
                      <div className="py-2 bg-Teal text-white md:w-1/4 w-5/6 pl-2 rounded font-poppins">Project Name: {item.projectName}</div>
                      <div className="py-2 bg-Teal text-white md:w-1/4 w-5/6 pl-2 rounded font-poppins">Project Delivery: {item.Delivery}</div>
                    </div>
                    <div className="mt-6">
                      <h1 className="font-poppins ml-3 nb-2">Project Description</h1>
                      <div className="w-3/4 rounded overflow-auto overflow-x-hidden bg-gray-100 p-2 h-28 ml-3">{item.birefProjectDesc}</div>
                    </div>
                  </div>
                ))}
              </>}

            </div>}

          </div>
        </div>
        <NotiSection />
      </div>
    </>
  );
}


DeveloperHome.PageLayout = DevLayouts
export default DeveloperHome;
