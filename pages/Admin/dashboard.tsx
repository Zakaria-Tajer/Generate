import { AdminNav } from '@/components/admin/Layouts/AdminNav'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

function Dashboard(){
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>

    </div>
  )
}

Dashboard.PageLayout = AdminNav

export default Dashboard
