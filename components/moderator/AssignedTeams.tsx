/* eslint-disable @next/next/no-img-element */
import { SuperUsersData } from 'interfaces/SuperUsers';
import React, { useEffect, useState } from 'react'

export const AssignedTeams = () => {
    const [devs, setDevs] = useState<any>([])
    useEffect(() => {
        const req = new XMLHttpRequest();
        req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/getDeves`, true);
        req.onload = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    let response = JSON.parse(req.response.trim());
                    console.log(response);
                    setDevs(response)

                }
            }
        };
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.setRequestHeader("Content-Type", "multipart/form-data");

        req.send();
    }, [])

    return (

        <div className='flex bg-gray-100 py-3 mt-2 px-3 items-center justify-between' >
            {devs.map(({ FirstName, LastName, id }: SuperUsersData) => (
                <><div className='flex items-center space-x-2' key={id}>
                    <h1 className='font-poppins'>{FirstName}{" "}{LastName}</h1>
                </div><h1 className='font-poppins'>Not Assigned to a project</h1></>
            ))}

        </div>
    )
}
