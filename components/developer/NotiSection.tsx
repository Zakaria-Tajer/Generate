import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { RooteState } from 'store/store'
import axios from 'axios'

export const NotiSection = () => {
    const nanoids = nanoid(10)
    const [id, setIsId] = useState<string>('')
    const [projectName, setProjectName] = useState<string>('')
    const [projectUuid, setProjectUuid] = useState<string>('')
    const [projectTime, setProjectTime] = useState<string>('')
    const [isNanCompleted, setIsNanCompleted] = useState<boolean>(false)
    const [isNanYet, setIsNanYet] = useState<boolean>(false)
    const [isNanProgress, setIsNanProgress] = useState<boolean>(false)

    const [completed, setIsCompleted] = useState<string>('')
    const [Yet, setIsYet] = useState<string>('')
    const [Progress, setIsProgress] = useState<string>('')
    const [files, setFile] = useState<string>("");
    const [devId, setDevId] = useState<string>("");

    const getRandID = () => {
        setIsId(nanoids)
        console.log(id);
    }
    const indexId = useSelector((state: RooteState) => state.handleDev.projectId)
    console.log(indexId);

    const verifyCompleted = (e: any) => {
        if (isNaN(e.target.value)) {
            setIsNanCompleted(true)
        } else {
            setIsCompleted(e.target.value)
            setIsNanCompleted(false)
        }
    }
    const verifyYet = (e: any) => {
        if (isNaN(e.target.value)) {
            setIsNanYet(true)
        } else {
            setIsYet(e.target.value)
            setIsNanYet(false)
        }
    }
    const verifyProgress = (e: any) => {
        if (isNaN(e.target.value)) {
            setIsNanProgress(true)
        } else {
            setIsNanProgress(false)
            setIsProgress(e.target.value)
        }
    }
    useEffect(()=> {
        const id = sessionStorage.getItem("id") || ""
        setDevId(id)
    },[])

    const submit = () => {
        console.log(indexId);

        const req = new XMLHttpRequest();
        req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/getProjectDetails`, true);
        req.onload = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    // let data = JSON.parse(req.response.trim());
                    // const { bodyMessage } = data
                    // if (bodyMessage == 'success') {
                    //     toast.success(bodyMessage)
                    // } else {
                    //     toast.error(bodyMessage)
                    // }
                    console.log(req.response.trim());


                }
            }
        };
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.setRequestHeader("Content-Type", "multipart/form-data");

        req.send(`projectName=${projectName}&projectTime=${projectTime}&projectUuid=${id}&projectIndex=${indexId}`);
    }

    const updateProject = () => {
        const req = new XMLHttpRequest();
        req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/updateProgress`, true);
        req.onload = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    let data = JSON.parse(req.response.trim());
                    const { bodyMessage } = data
                    if (bodyMessage == 'success') {
                        toast.success(bodyMessage)
                    } else {
                        toast.error(bodyMessage)
                    }
                    console.log(req.response.trim());


                }
            }
        };
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.setRequestHeader("Content-Type", "multipart/form-data");

        req.send(`completedTaskes=${completed}&yet=${Yet}&Progress=${Progress}&projectId=${indexId}`);

    }

    const fileSave = (e: any) => {
        setFile(e.target.files[0]);
    };

    const save = () => {
        let formdata = new FormData();
        formdata.append("file", files);
        formdata.append("projectName", projectName);
        formdata.append("projectId", indexId as string);
        formdata.append("devId", devId);

        axios
            .post(
                `${process.env.NEXT_PUBLIC_API_URL_Generate}api/devliveryProject`,
                formdata,
                {}
            )
            .then((res) => {
                const { data } = res;
                console.log(data);

            });
    }

    return (
        <div className='xl:w-1/2  p-5 mt-10'>
            <div className='bg-white shadow-md  py-3 pb-5 md:pl-5 md:mx-auto space-y-6 md:w-5/6 xl:w-5/6 2xl:w-3/4 mt-4 rounded '>
                <div className='md:flex '>
                    <div className='pl-4 space-y-4 md:space-y-2  md:mb-0 mb-3 md:w-1/2'>
                        <label htmlFor="" className='block font-poppins '>Project name</label>
                        <input type="text" className='md:w-3/4 w-5/6 py-2 pl-3 font-poppins rounded bg-gray-100 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Teal focus:duration-500' onChange={e => setProjectName(e.target.value)} />
                    </div>
                    <div className='pl-4 space-y-4 mb-3 md:mb-0 md:space-y-2 md:w-1/2'>
                        <label htmlFor="" className='block font-poppins '>Estimated time to complete</label>
                        <input type="date" className='md:w-3/4 w-5/6 py-1 rounded font-poppins bg-gray-100 pl-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Teal focus:duration-500' onChange={e => setProjectTime(e.target.value)} />
                    </div>
                </div>
                <div className='md:flex mt-4 md:items-center'>

                    <div className='pl-4 space-y-3 md:space-y-2 md:w-1/2'>
                        <label htmlFor="" className='block font-poppins'>Project uuid</label>
                        <div className='md:w-3/4 w-5/6 bg-gray-100 py-2 rounded flex items-center justify-between'>
                            <h1 className='ml-4 font-poppins'>{id ? id : ''}</h1>
                            <a className='text-blue-600 font-semibold text-sm mr-4 font-poppins cursor-pointer' onClick={getRandID}>Auto</a>
                        </div>
                    </div>
                    <button className='bg-Teal text-white w-5/6 md:w-44 mt-8 py-2 ml-5 rounded font-poppins' onClick={submit}>Submit</button>

                </div>
            </div>
            <div className='bg-white shadow-md  py-3 pb-5 md:pl-5 md:mx-auto space-y-6 md:w-5/6 xl:w-5/6 2xl:w-3/4 mt-4 rounded '>
                <h1 className='ml-5 font-poppins uppercase text-Teal text-xl'>Update project progress</h1>
                <div className='md:flex md:space-y-0 space-y-3'>
                    <div className='md:w-1/2 ml-5 space-y-2'>
                        <label htmlFor="" className='block font-poppins'>Completed Tasks</label>
                        <input type="text" className='w-5/6 outline-none pl-4 py-2 focus:ring-2 focus:ring-offset-2 rounded bg-gray-100 focus:ring-Teal focus:duration-500' onChange={verifyCompleted} />
                        {isNanCompleted && <p className='text-red-500'>Please enter a number</p>}
                    </div>
                    <div className='md:w-1/2 ml-5 space-y-2'>
                        <label htmlFor="" className='block font-poppins'>Yet to start Tasks</label>
                        <input type="text" className='outline-none w-5/6 pl-4 py-2 focus:ring-2 focus:ring-offset-2 rounded bg-gray-100 focus:ring-Teal focus:duration-500 ' onChange={verifyYet} />
                        {isNanYet && <p className='text-red-500'>Please enter a number</p>}
                    </div>
                </div>
                <div className='md:flex md:items-center ml-5 space-y-2'>
                    <div className='w-1/2'>
                        <label htmlFor="" className='block font-poppins'>Progress in %</label>
                        <input type="text" className='w-5/6 outline-none pl-4 py-2 focus:ring-2 focus:ring-offset-2 rounded bg-gray-100 focus:ring-Teal focus:duration-500' onChange={verifyProgress} />
                        {isNanProgress && <p className='text-red-500'>Please enter a number</p>}
                    </div>
                    <div className='md:w-1/2'>
                        <button className='bg-Teal text-white w-5/6 md:w-44 mt-4 py-2 ml-3 rounded font-poppins' onClick={updateProject}>update</button>
                    </div>
                </div>
            </div>
            <div className='bg-white shadow-md  py-3 pb-5 md:pl-5 md:mx-auto space-y-6 md:w-5/6 xl:w-5/6 2xl:w-3/4 mt-4 rounded'>
                <h1 className='ml-5 font-poppins uppercase text-Teal text-xl'>Project delivery</h1>
                <div className='md:flex '>
                    <div className='pl-4 space-y-4 md:space-y-2  md:mb-0 mb-3 md:w-1/2'>
                        <label htmlFor="" className='block font-poppins '>Project name</label>
                        <input type="text" className='md:w-3/4 w-5/6 py-2 pl-3 font-poppins rounded bg-gray-100 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Teal focus:duration-500' onChange={e => setProjectName(e.target.value)} />
                    </div>
                    <div className='pl-4 space-y-4 mb-3 md:mb-0 md:space-y-2 md:w-1/2'>
                        <label htmlFor="" className='block font-poppins '>Project Logo</label>
                        <input type="file"
                            name="upload_file"
                            onChange={fileSave}
                            multiple
                            className='md:w-3/4 w-5/6 py-1 rounded font-poppins  pl-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Teal focus:duration-500' />
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <button className='bg-Teal text-white w-5/6 md:w-44 ml-5 mt-4 py-2  rounded font-poppins' onClick={save}>save</button>
                </div>
            </div>
        </div>
    )
}
