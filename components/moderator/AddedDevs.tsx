import { SuperUsersData } from 'interfaces/SuperUsers';
import React, { useEffect, useState } from 'react'

export const AddedDevs = () => {
    const [list, setList] = useState<any>([])
    useEffect(() => {
        const req = new XMLHttpRequest();
        req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/selectWorkingDev`, true);
        req.onload = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    let response = JSON.parse(req.response);
                    setList(response);
                    console.log(response);

                }
            }
        };
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.setRequestHeader("Content-Type", "multipart/form-data");

        req.send();
    }, [])
    return (
        <>
            {list.map((item: SuperUsersData) => (
                <div className="flex items-center bg-white py-3 shadow-xl" key={item.unique_id}>
                    <div className="h-10 w-10 bg-gray-500 rounded-full">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL_Generate}adminUploads/${item.img}`} alt="profile pic" className="h-10 w-10 rounded-full object-cover" />
                    </div>
                    <h1 className="pl-3 font-poppins">{item.FirstName}{" "}{item.LastName}</h1>
                </div>
            ))}

        </>
    )
}
