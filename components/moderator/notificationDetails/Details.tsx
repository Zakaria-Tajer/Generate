import { NotificationModerator } from 'interfaces/User';
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';
import { RooteState } from 'store/store';

export const Details = () => {
    const Notifications = useSelector(
        (state: NotificationModerator) => state
      );
      console.log(Notifications);
      
  return (
    <div className='w-full max-w-md p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300'>
        <div className='py-3 border-b-[1px] flex space-x-3'>
            <div className='w-14 h-14 rounded-full'>
            <Image  className='w-14 h-14 object-cover' width='14' height='14' alt='profile pic' src='/images/icons/5107639.png'/>
            </div>
            <div className=''>
                <h1 className='text-lg font-poppins'>Name</h1>
                <p className='text-sm font-normal font-poppins'>CLient</p>
            </div>
        </div>
    </div>
  )
}
