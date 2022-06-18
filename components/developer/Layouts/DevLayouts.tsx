/* eslint-disable @next/next/no-img-element */
import {
    BellOutlined,
    MessageOutlined,
    DownOutlined,
    SettingOutlined,
    NotificationOutlined,
    AlignLeftOutlined,
    PoweroffOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import { Layouts } from "interfaces/Layouts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RooteState } from "store/store";
import { showNotifications } from "slices/filterSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Composing } from "slices/switchSlice";
import { useMediaQuery } from "react-responsive";
import { NotificationsDev } from "../NotificationsDev";
import { getDevNoti } from "slices/SuperUsersSlice";
import { ComposeEmail } from "@/components/clients/email/ComposeEmail";

export function DevLayouts({ children }: Layouts) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [image, setImage] = useState<string>("");
    const [isNav, setIsNav] = useState<boolean>(false)

    const router = useRouter();
    useEffect(() => {
        const devImg = sessionStorage.getItem("devImg") || ""
        setImage(devImg);
    }, []);
    


    const img = useSelector((state: RooteState) => state.handleDev.img);

    const Logout = () => {
        Cookies.remove("token");
        router.push("/Admin");
    };
    const dispatch: AppDispatch = useDispatch();
    const Mobile = useMediaQuery({ query: "(max-width: 1024px)" });

    const composing = useSelector((state: RooteState) => state.ComposeEmail.Compose)

    return (
        <div className="min-h-screen bg-PureGrey z-10">
            {composing && <ComposeEmail />}

            {Mobile ? <div className=" w-full bg-white h-[70px] flex justify-between items-center relative">
                <div className="bg-gray-400 w-28 h-full">
                    <h1>Logo here</h1>
                </div>
                <AlignLeftOutlined className="mr-4 text-xl" onClick={() => setIsNav(true)} />

                {isNav && <motion.div
                    className="w-full z-10 bg-white min-h-screen top-0 absolute"
                    initial={{ x: "-100vh" }}
                    animate={{ x: "0vh" }}
                    transition={{ type: "spring", delay: 0.6 }}

                >
                    <div className=" w-full py-2 flex items-center justify-between" onClick={() => setIsNav(false)}>
                        <div className="w-14 h-14 rounded-full ml-5">
                            <img src={`http://localhost:8000/adminUploads/${img ? img : image}`} className="w-full h-full object-cover rounded-full" alt="profile" />
                        </div>
                        <CloseOutlined className="mr-4" />
                    </div>

                    <div className="w-full bg-white py-2 flex flex-col items-center space-y-4" >
                        <Link href="/developer" passHref>
                            <div className="cursor-pointer space-x-2 px-10 py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex">
                                <Image
                                    src="/images/icons/dashboard-5481.svg"
                                    width="20"
                                    height="20"
                                    alt="idk"
                                    className="pr-2"
                                />
                                <h1 className="font-poppins">Dashboard</h1>
                            </div>
                        </Link>

                        <Link href="/developer/settings" passHref>
                            <div className="cursor-pointer space-x-2 px-10 py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex items-center justify-center">
                                <SettingOutlined className="text-gray-500" />
                                <h1 className="font-poppins">Settings</h1>
                            </div>
                        </Link>
                        
                        <div className="cursor-pointer space-x-2 px-10 py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex items-center justify-center" onClick={() => dispatch(Composing(true))}>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-lg text-gray-500" />
                            <h1 className="font-poppins">Emails</h1>
                        </div>
                        <div className="cursor-pointer  px-10 pb-2 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex items-center justify-center list-none">
                            <PoweroffOutlined />
                            <li
                                className="w-full bg-white py-2 px-4 hover:bg-gray-100 hover:duration-700 cursor-pointer"
                                onClick={Logout}
                            >
                                <a className="font-poppins">Logout</a>
                            </li>
                        </div>
                    </div>

                </motion.div>}
            </div> :
                <><div className="bg-white h-[70px] flex  justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="bg-gray-400 w-28">
                            <h1>Logo here</h1>
                        </div>
                        <div className="pl-10 flex">
                            <Link href="/developer" passHref>
                                <div className="cursor-pointer space-x-2 px-10 py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex">
                                    <Image
                                        src="/images/icons/dashboard-5481.svg"
                                        width="20"
                                        height="20"
                                        alt="idk"
                                        className="pr-2" />
                                    <h1 className="font-poppins">Dashboard</h1>
                                </div>
                            </Link>
                            <Link href="/developer/settings" passHref>
                                <div className="cursor-pointer space-x-2 px-10 py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex items-center justify-center">
                                    <SettingOutlined className="text-gray-500" />
                                    <h1 className="font-poppins">Settings</h1>
                                </div>
                            </Link>
                            <div className="cursor-pointer space-x-2 px-10 py-2.5 rounded-md  hover:duration-700 hover:bg-gray-200/75 flex items-center justify-center" onClick={() => dispatch(Composing(true))}>
                                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-lg text-gray-500" />
                                <h1 className="font-poppins">Emails</h1>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-end space-x-4">
                        <div className="flex w-44 h-full items-center justify-evenly relative">
                            <div className="bg-gray-400 w-14 h-14 rounded-full">
                                <img src={`http://localhost:8000/adminUploads/${img ||image }`} className="w-full h-full object-cover rounded-full" alt="profile" />
                            </div>
                            <DownOutlined
                                className="text-gray-500 cursor-pointer"
                                onClick={() => setIsOpen(!isOpen)} />
                            {isOpen && (
                                <div className="bg-white shadow-lg py-2 w-full right-8 rounded absolute top-[4.4rem] list-none space-y-3">
                                    <li
                                        className="w-full bg-white py-2 px-4 hover:bg-gray-100 hover:duration-700 cursor-pointer"
                                        onClick={Logout}
                                    >
                                        <a className="font-poppins">Logout</a>
                                    </li>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                </>}

            <div className="w-full">{children}</div>

        </div>
    );
}
