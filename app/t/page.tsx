'use client'

import { useEffect, useRef, useContext, useState } from 'react'
import ChattingArea from "@/components/ChattingArea";
import ContactsArea from "@/components/ContactsArea";
import ProfileArea from "@/components/ProfileArea";
import { AppData, user } from '@/context/AppContext';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';

export default function Home() {

  const { setCurrentUser, currentChat, currentUser } = useContext(AppData)
  const socket = useRef<any>(null)
  const router = useRouter()
  useEffect(() => {
    !localStorage.getItem('access_token') && router.push('/login')
  }, [])
  useEffect(() => {
    const getUser = async () => {

      const cookie = localStorage.getItem('access_token')
      try {

        const res = await fetch('http://localhost:8080/api/users/me/profile', {
          headers: {
            'authorization': `Bearer ${cookie}`
          }
        })

        const data = await res.json()

        if (data.status) {
          setCurrentUser({
            _id: data.currentUser?._id,
            names: data?.currentUser?.names,
            messages: []
          })
          return
        }
      } catch (error: any) {
        alert(error.message)
      }
    }
    getUser()

  }, [])

  useEffect(() => {
    async function getMessages() {
      try {
        const res = await fetch(`http://localhost:8080/api/messages/${currentUser?._id}`)
        const data = await res.json()
        if (data.status) {

          setCurrentUser((prev: user) => ({ ...prev, messages: data.messages }))
          return
        }
      } catch (error: any) {
        console.log('error', error.message)
      }
    }

    currentUser?._id && getMessages()
  }, [currentUser])

  if (localStorage.getItem('access_token')) {

    return (
      <div className="w-full h-screen flex justify-between">
        <ContactsArea />
        <ChattingArea />
        {currentChat && <ProfileArea />}
      </div>
    )
  } else {
    return <Loading />
  }


}
