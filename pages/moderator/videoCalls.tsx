

/* eslint-disable @next/next/no-img-element */
import { ModeLayout } from '@/components/moderator/Layouts/ModeLayout'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { io } from "socket.io-client";
import Peer from "simple-peer";
import { CopyOutlined, PhoneOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRouter } from 'next/router';

const socket = io("http://localhost:5000");


function VideoCalls() {
    const [stream, setStream] = useState<any>();
    const [me, setMe] = useState<string>("");
    const [call, setCall] = useState<any>({});
    const [callAccepted, setCallAccepted] = useState<boolean>(false);
    const [callEnded, setCallEnded] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [idToCall, setIdToCall] = useState<string>('')
    const myVideo = useRef<any>(null);
    const userVideo = useRef<any>(null);
    const connectionRef = useRef<any>(null);

    const router = useRouter()
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                setStream(currentStream);
                console.log(currentStream);

                myVideo.current.srcObject = currentStream;
            });

        socket.on('me', (id) => setMe(id));

        socket.on('callUser', ({ from, name: callerName, signal }) => {
            setCall({ isReceivingCall: true, from, name: callerName, signal });
        });

    }, []);

    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('answerCall', { signal: data, to: call.from });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        console.log(peer);

        peer.signal(call.signal);

        connectionRef.current = peer;
    };

    const callUser = (id: any) => {

        console.log(id);

        const peer = new Peer({ initiator: true, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        socket.on('accepted', (signal) => {

            peer.signal(signal);
        });

        connectionRef.current = peer;
    };

    const leaveCall = () => {
        setCallEnded(true);

        connectionRef.current.destroy();

        // window.location.reload();
        router.reload()
    };
    return (
        <div className='relative flex justify-center'>
            <img src="/images/Blue Zoom Bkgd.png" alt="" className='fixed ' />

            <div className='absolute w-full  mt-20 rounded py-3'>
                <h1 className='text-white text-4xl text-center font-poppins'>Video Call</h1>
                <div className='xl:flex w-full justify-center  py-2 xl:space-x-10'>

                    {
                        stream && (
                            <div className='xl:w-1/3 rounded bg-white p-2 pb-4'>
                                <h1 className='text-left font-poppins text-xl mb-2 xl:ml-12'>{name || 'Name'}</h1>
                                <div className='flex justify-center items-center'>
                                    <video playsInline ref={myVideo} autoPlay className='w-[100%] xl:h-[400px]' />
                                </div>
                            </div>


                        )
                    }

                    {
                        callAccepted && !callEnded && (
                            <div className='xl:w-1/3 rounded  bg-white p-2'>
                                <h1 className='text-left font-poppins text-xl mb-2'>{name || 'Name'}</h1>
                                <div className='flex justify-center items-center'>
                                    <video playsInline ref={userVideo} autoPlay className='w-[100%] xl:h-[400px]' />
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='xl:w-1/2 space-x-2 p-4 mx-auto  rounded'>
                    <h1 className='font-poppins ml-2 text-xl mb-2'>Account </h1>
                    <div className='lg:flex lg:items-center  '>
                        <div className='lg:w-1/2  p-2 relative'>
                            <input type="text" id="floating_filled" className="bg-transparent block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer" value={name} onChange={e => setName(e.target.value)} placeholder=" " />
                            <label htmlFor="floating_filled" className="absolute text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Name</label>
                            <CopyToClipboard text={me} >
                                <div className='flex mt-5 items-center space-x-2 justify-center text-white rounded bg-Teal py-3' onClick={() => console.log(me)}>
                                    <CopyOutlined className='' />
                                    <h1 className='font-poppins cursor-pointer'>Copy Your id</h1>
                                </div>
                            </CopyToClipboard>
                        </div>
                        <div className='lg:w-1/2  p-2 relative'>
                            <input type="text" id="floating_filled" className="bg-transparent block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  dark:bg-gray-700 border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer" value={name} onChange={e => setName(e.target.value)} placeholder=" " />
                            <label htmlFor="floating_filled" className="absolute text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Id to Call</label>
                            {callAccepted && !callEnded ?
                                <button className='w-full bg-red-600 py-3 font-poppins text-white mt-5 rounded ' onClick={leaveCall}>
                                    Hang Up
                                </button>
                                :
                                <div className='flex mt-5 items-center space-x-2 justify-center text-white rounded bg-Teal py-3 cursor-pointer' onClick={() => callUser(idToCall)}>
                                    <PhoneOutlined />
                                    <h1 className='font-poppins'>Call</h1>
                                </div>

                            }

                        </div>
                    </div>
                </div>
                <div className=' py-2 md:w-1/2 2xl:w-1/3 mx-auto flex items-center justify-between'>
                    <h1 className='font-poppins text-xl ml-6 md:ml-4'>{call.name} is Calling: </h1>
                    <button onClick={answerCall} className="px-10 py-2 bg-Teal mr-4 md:mr-10 text-white rounded font-poppins">Answer</button>
                </div>
            </div>

        </div>
    )
}



VideoCalls.PageLayout = ModeLayout
export default VideoCalls








