'use client'

import { useEffect, useRef } from 'react'
import ChattingArea from "@/components/ChattingArea";
import ContactsArea from "@/components/ContactsArea";
import ProfileArea from "@/components/ProfileArea";
import { io } from 'socket.io-client';

export default function Home() {

  const socket = useRef<any>(null)
  useEffect(() => {
    socket.current = io('http://localhost:8080')
  }, [])
  return (
    <div className="w-full h-screen flex justify-between">
      <ContactsArea />
      <ChattingArea />
      <ProfileArea />
    </div>
  )
}
