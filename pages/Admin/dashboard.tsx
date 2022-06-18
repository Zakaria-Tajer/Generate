import { AdminNav } from '@/components/admin/Layouts/AdminNav'
import Head from 'next/head'
import React from 'react'
import { motion } from "framer-motion"
import { Stats } from '@/components/admin/dash/Stats'
import { AllProjects } from '@/components/admin/dash/AllProjects'

function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Stats />
      <AllProjects />
    </div>
  )
}

Dashboard.PageLayout = AdminNav

export default Dashboard
