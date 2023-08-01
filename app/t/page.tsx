'use client'

import { useEffect, useRef, useContext } from 'react'
import ChattingArea from "@/components/ChattingArea";
import ContactsArea from "@/components/ContactsArea";
import ProfileArea from "@/components/ProfileArea";
import useCookie from '@/hooks/useCookie';
import { AppData } from '@/context/AppContext';

export default function Home() {

  const { cookie } = useCookie()
  const { setCurrentUser } = useContext(AppData)
  const socket = useRef<any>(null)
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
  return (

    <div className="w-full h-screen flex justify-between">
      <ContactsArea />
      <ChattingArea />
      <ProfileArea />
    </div>
  )
}
