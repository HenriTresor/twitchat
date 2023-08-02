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
  const [loading, setLoading] = useState(true)
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
            links: []
          })
          setLoading(false)
          return
        }
        console.log(data.message)
      } catch (error: any) {
        return error.message
      }
    }
    getUser()

  }, [])

  useEffect(() => {
    async function getLinks() {
      try {
        const res = await fetch(`http://localhost:8080/api/links/${currentUser?._id}`)
        const data = await res.json()
        if (data.status) {
          setCurrentUser((prev: user) => ({ ...prev, links: data?.links }))
          return
        }
        console.log(data.message)
      } catch (error: any) {
        console.log('error', error.message)
      }
    }

     currentUser?._id && getLinks()
  }, [currentUser?._id])

  if (loading) {
    return <Loading />
  }
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
