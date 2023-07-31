import React from 'react'
import ChatHeader from '../ChattingArea/ChatHeader'
import Contact from './Contact'

type Props = {}

function ContactsArea({ }: Props) {
  return (
    <div className='aside border-r-4  flex-row flex w-auto md:w-[30%] xlg:hidden'>
      <div className='w-full overflow-auto bar hidden md:block'>
        <div className='w-full h-auto'>
          Twitchat
        </div>
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