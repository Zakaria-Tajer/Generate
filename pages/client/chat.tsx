import ChatSideBar from '@/components/Layouts/chat/HOC/ChatSideBar'
import { InfoSection } from '@/components/Layouts/chat/InfoSection'
import { MainChatSection } from '@/components/Layouts/chat/HOC/MainChatSection'
import { Persons } from '@/components/Layouts/chat/Persons'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { RightSidebar } from '@/components/Layouts/chat/RightSidebar'
import { useSelector } from 'react-redux'
import { RooteState } from 'store/store'
import { IndexLayout } from 'Layout'
import { Expired } from '@/components/clients/Expired'

function Chat(){
  const showSidebar = useSelector((state:RooteState) => state.Sidebar.showBar)
  const isExpired = useSelector((state:RooteState) => state.ExpiredSession.expiring)
  return (
    <div>
      {isExpired == true && <Expired />}
      <Head>
        <title>Chat</title>
      </Head>
      <div className='min-h-screen bg-gray-400 flex'>
        <ChatSideBar>
          <Persons />
        </ChatSideBar>

        <MainChatSection>
          <InfoSection />
        </MainChatSection>
        {showSidebar && <RightSidebar />}
      </div>
    </div>
  )
}

// Chat.PageLayout = IndexLayout;

export default Chat