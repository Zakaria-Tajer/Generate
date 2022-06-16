import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CloseOutlined } from '@ant-design/icons'
import { AppDispatch } from 'store/store'
import { useDispatch } from 'react-redux'
import { getDevNoti } from 'slices/SuperUsersSlice'
import Cookies from 'js-cookie'

export const NotificationsDev = () => {


    useEffect(() => {
        const uuid = Cookies.get('unique_id')
        const req = new XMLHttpRequest();
        req.open(
            "POST",
            `${process.env.NEXT_PUBLIC_API_URL_Generate}api/getAssignments`,
            true
        );
        req.onload = () => {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    let data = JSON.parse(req.response.trim());
                    console.log(data);

                }
            }
        };
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.setRequestHeader("Content-Type", "multipart/form-data");
        req.send(`uuid=${uuid}`);
    }, [])


    const dispatch: AppDispatch = useDispatch()
    const notificationController = () => {
        dispatch(getDevNoti({ isNotif: false }));
    };

    return (
        <div className="fixed z-10 inset-0 bg-black/10">
            <motion.div
                className="2xl:w-2/5 xl:w-3/5 md:w-3/4 overflow-y-auto overflow-x-hidden rounded-md mx-auto h-[600px] bg-white"
                initial={{ y: "-100vh" }}
                animate={{ y: "10vh" }}
                transition={{ type: "spring", delay: 0.5 }}
            >
                <div
                    className="w-10 h-10 rounded ml-auto cursor-pointer flex items-center justify-center"
                    onClick={notificationController}
                >
                    <CloseOutlined className="text-gray-500 font-bold" />
                </div>
                <div className=" pt-4 sapce-y-4">
                    {/* <ClientNotifications /> */}
                </div>
            </motion.div>
        </div>
    )
}
