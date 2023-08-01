'use client'

import { useEffect, useRef } from 'react'
import ChattingArea from "@/components/ChattingArea";
import ContactsArea from "@/components/ContactsArea";
import ProfileArea from "@/components/ProfileArea";
import AppContext from '@/context/AppContext'; 
import useCookie from '@/hooks/useCookie';

export default function Home() {

  const { cookie } = useCookie()

  const socket = useRef<any>(null)
  useEffect(() => {
    console.log(cookie)
  },[cookie])
  return (
    <AppContext>
      <div className="w-full h-screen flex justify-between">
        <ContactsArea />
        <ChattingArea />
        <ProfileArea />
      </div>
    </AppContext>
  )
}
