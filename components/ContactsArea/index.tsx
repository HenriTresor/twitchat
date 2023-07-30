import React from 'react'
import ChatHeader from '../ChattingArea/ChatHeader'
import SideBar from './SideBar'

type Props = {}

function ContactsArea({}: Props) {
  return (
    <div className='aside w-[30%] border-r-4 flex flex-row'>
      <SideBar />
      <div className='w-full'>
        <ChatHeader />
      </div>
    </div>
  )
}

export default ContactsArea