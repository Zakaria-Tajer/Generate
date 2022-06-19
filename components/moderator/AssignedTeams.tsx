/* eslint-disable @next/next/no-img-element */
import { SuperUsersData } from 'interfaces/SuperUsers';
import React, { useEffect, useState } from 'react'

export const AssignedTeams = () => {
    const [devs, setDevs] = useState<any>([])
    const [isEmpty, setIsEmpty] = useState<boolean>(false)

    useEffect(() => {
        const req = new XMLHttpRequest();
        req.open("POST", `${process.env.NEXT_PUBLIC_API_URL_Generate}api/isWorkingDev`, true);
        req.onload = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    let response = JSON.parse(req.response.trim());
                    const { bodyMessage } = response
                    if (bodyMessage == '') {
                        setIsEmpty(true)
                    } else {
                        setDevs(response)
                    }
                }
            }
        };
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.setRequestHeader("Content-Type", "multipart/form-data");

        req.send();
    }, [])

    return (

        <div className='flex flex-col space-y-3 bg-gray-100 py-3 mt-2 px-3 items-center justify-between' >
            {isEmpty ? <h1 className='font-poppins'>No developer is available</h1> : <>
                {devs.map(({ FirstName, LastName, id }: SuperUsersData) => (
                    <div key={id} className=" w-full py-2">
                        <div className='flex items-center space-x-2'>
                            <h1 className='font-poppins'>{FirstName}{" "}{LastName}</h1>
                            <h1 className='font-poppins'>Not Assigned to a project</h1>
                        </div>
                    </div>
                ))}
            </>}

        </div>
    )
}
