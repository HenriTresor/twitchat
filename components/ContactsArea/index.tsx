'use client'

import React from 'react'
import Contact from './Contact'
import { MdMoreHoriz } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'
import { AppData } from '@/context/AppContext'

type Props = {}

function ContactsArea({ }: Props) {

  const { currentUser, setCurrentChat } = React.useContext(AppData)
  return (
    <div className='aside border-r-4  flex-row flex w-auto md:w-[30%] xlg:hidden'>
      <div className='w-full overflow-auto bar hidden md:block'>
        <div className='w-full h-auto p-2 border-b-2 sticky top-0 backdrop-blur-sm flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <h1 className='text-blue-300 text-[2rem]'>
              <FaFacebookMessenger />
            </h1>
            <h1 className='font-verdana text-[1.6rem] tracking-wider '>Twitchat</h1>
          </div>
          <button className='border-2 rounded-full p-2'>
            <MdMoreHoriz />
          </button>
        </div>
        <div className=''>
          {
            currentUser?.links?.map((link: any) => {
              console.log(link)
              return <Contact key={link?._id} {...link} onClick={()=>setCurrentChat(link)} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ContactsArea