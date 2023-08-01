'use client'

import { useEffect, useRef, useContext, useState } from 'react'
import ChattingArea from "@/components/ChattingArea";
import ContactsArea from "@/components/ContactsArea";
import ProfileArea from "@/components/ProfileArea";
import useCookie from '@/hooks/useCookie';
import { AppData } from '@/context/AppContext';
import { FaFacebookMessenger } from 'react-icons/fa';

export default function Home() {

  const { cookie, loading } = useCookie()
  const { setCurrentUser } = useContext(AppData)
  const socket = useRef<any>(null)

  // useEffect(() => {
  //   !cookie && location.assign('/')
  // },[])
  useEffect(() => {
    const getUser = async () => {
      try {

        const res = await fetch('http://localhost:8080/api/users/me/profile', {
          headers: {
            'authorization': `Bearer ${cookie}`
          }
        })

        const data = await res.json()

        if (data.status) {
          setCurrentUser(data.currentUser)
          return
        }
        alert(data.message)
      } catch (error: any) {
        alert(error.message)
      }
    }
    cookie && getUser()

  }, [cookie])
 
  if (loading) {
    return (
      <div className='flex items-center min-h-screen w-full justify-center'>
        <h1 className='text-[3rem] text-blue-300'>
          <FaFacebookMessenger />
        </h1>
      </div>
    )
  }
  if (cookie) {
    return (

      <div className="w-full h-screen flex justify-between">
        <ContactsArea />
        <ChattingArea />
        <ProfileArea />
      </div>
    )
  }
}
