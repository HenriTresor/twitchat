import React from 'react'
import ChatHeader from '../ChattingArea/ChatHeader'
import SideBar from './SideBar'
import Contact from './Contact'

type Props = {}

function ContactsArea({}: Props) {
  return (
    <div className='aside w-[30%] border-r-4 flex flex-row'>
      <SideBar />
      <div className='w-full overflow-auto bar'>
        <ChatHeader />
        <div className=''> 
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default ContactsArea