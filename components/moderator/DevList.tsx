/* eslint-disable @next/next/no-img-element */
import { PlusOutlined } from '@ant-design/icons'
import { SuperUsersData } from 'interfaces/SuperUsers'
import React from 'react'

export const DevList = ({ data }) => {
    const getOnceDev = (e: any) => {
        let id = e.target.value
        const req = new XMLHttpRequest();
        req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/findDevs`, true);
        req.onload = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    let response = JSON.parse(req.response);
                    setData(response);
                }
            }
        };
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.setRequestHeader("Content-Type", "multipart/form-data");

        req.send(`id=${id}`);

        console.log();

    }
    return (
        <>
            {data?.map((item: SuperUsersData) => (
                <li className="flex mt-2 py-2 w-full bg-white justify-between items-center" key={item.id}>
                    <div className="flex items-center" >
                        <div className="h-10 w-10 bg-gray-500 rounded-full">
                            <img src={`${process.env.NEXT_PUBLIC_API_URL_Generate}adminUploads/${item.img}`} alt="profile pic" className="h-10 w-10 rounded-full object-cover" />
                        </div>
                        <h1 className="pl-3 font-poppins">{item.FirstName}{" "}{item.LastName}</h1>
                    </div>

                    <button className="text-white bg-blue-600 cursor-pointer py-2 px-4 font-poppins mr-2 rounded-md flex items-center" onClick={getOnceDev} value={item.id}>
                        <PlusOutlined className="mr-4" />
                        add
                    </button>
                </li>
            ))}
        </>
    )
}
