import React from 'react'
import { CurrentProjects } from './DashComp/CurrentProjects'
import { Moderators } from './DashComp/Moderators'
import { OurClients } from './DashComp/OurClients'

export const Stats = () => {
    return (
        <div className='w-full bg-gray-400 flex justify-center'>
            <CurrentProjects />
            <Moderators />
            <OurClients />
        </div>
    )
}
