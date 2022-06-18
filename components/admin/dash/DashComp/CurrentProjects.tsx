import React from 'react'

export const CurrentProjects = () => {
    return (
        <div className='w-[400px] py-4 pl-2 shadow bg-white rounded m-10'>
            <div className='ml-4 space-y-3'>
                <h1 className='text-2xl font-semibold font-poppins'>0</h1>
                <h1 className='font-poppins text-gray-400'>Current Projects</h1>
            </div>
            <div className='flex py-3 mt-3'>
                <div className='w-1/2 space-y-2'>
                    <div className='flex items-center ml-4 space-x-3'>
                        <div className='rounded w-3 h-1 bg-blue-500'></div>
                        <h1 className='font- text-gray-400'>Active</h1>
                    </div>
                    <div className='flex items-center ml-4 space-x-3'>
                        <div className='rounded w-3 h-1 bg-green-500'></div>
                        <h1 className='font-poppins text-gray-400'>Completed</h1>
                    </div>
                    <div className='flex items-center ml-4 space-x-3'>
                        <div className='rounded w-3 h-1 bg-gray-500'></div>
                        <h1 className='font-poppins text-gray-400'>Yet to start</h1>
                    </div>
                </div>
                <div className='w-1/2 flex'>
                    <div className='ml-auto space-y-2 mr-4 font-poppins'>
                        <h1>30</h1>
                        <h1>30</h1>
                        <h1>30</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
