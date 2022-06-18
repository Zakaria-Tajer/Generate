import { PlusOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import React from 'react'

export const OurClients = () => {
    const router = useRouter()

    return (
        <div className='w-1/4 bg-white rounded py-3 pl-4 space-y-3 m-10'>
            <div className='space-y-3'>
                <h1 className='font-poppins text-2xl font-semibold'>0</h1>
                <h1 className='font-poppins text-gray-400'>Our Clients</h1>
            </div>
            <div className='flex -space-x-3 py-4'>
                <div className='w-12 h-12 rounded-full bg-blue-400 py-2'>

                </div>
                <div className='w-12 h-12 rounded-full bg-blue-400'></div>
                <div className='w-12 h-12 rounded-full bg-blue-400'></div>
                <div className='w-12 h-12 rounded-full bg-black flex items-center justify-center font-semibold text-white'>
                    <PlusOutlined className='font-bold' />
                    <h1 className=''>22</h1>
                </div>
            </div>
            <button className='font-poppins hover:duration-500 hover:bg-blue-600 text-white bg-blue-500 w-32 py-2 rounded-md' onClick={() => router.push('/Admin/user')}>All Clients</button>
        </div>
    )
}
