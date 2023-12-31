'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaFacebookMessenger, FaGooglePlay, FaAppStore } from 'react-icons/fa'
import {useRouter} from 'next/navigation'

type Props = {}


function LandingPage({ }: Props) {
    const [loading, setLoading] = useState(false)
    const [names, setNames] = useState('')

    useEffect(() => {
        const getNames = async () => {
            try {
                const res = await fetch(`http://localhost:8080/api/users/me/profile`, {
                    method: 'GET',
                    headers: {
                        'authorization':`Bearer ${localStorage.getItem('access_token')}`
                    }
                })

                const data = await res.json()
                if (data.status) {
                    return setNames(data.currentUser.names)      }
              console.log(data.message)
            } catch (error: any) {
               return error.message
            }
        }
getNames()
    },[])
    const router = useRouter()
    return (
        <div>
            <div className='flex p-2 items-center justify-around shadow-sm' >
                <div className='flex items-center gap-4'>
                    <h1 className='text-blue-300 text-[2rem]'>
                        <FaFacebookMessenger />
                    </h1>
                    <h1 className='font-verdana text-[1.6rem] tracking-wider '>Twitchat</h1>
                </div>
                <ul className='md:flex items-center gap-2 hidden'>
                    <li className='list-item'>developers</li>
                    <li className='list-item'>about us</li>
                    <li className='list-item'>Contact us</li>
                </ul>
            </div>

            <div className='w-full  flex p-2 items-center min-h-screen justify-center'>
                <div className='w-[100%] p-5 md:w-[50%] ' >
                    <div className='flex items-center gap-4'>
                        <h1 className='text-blue-300 text-[2rem] md:text-[3rem]'>
                            <FaFacebookMessenger />
                        </h1>
                        <h1 className='font-mono text-[2rem] md:text-[3rem] tracking-wider text-blue-700'>Sociala Chat</h1>
                    </div>
                    <p className='font-sans mt-5  tracking-wider md:text-[1.5rem] text-[0.9rem]'>Chat easily with your friends on sociala here ...</p>
                    <p className='font-sans mt-5  tracking-wider md:text-[1.5rem] text-[0.9rem]'>Have all your chats in one place!</p>
                    <button className='btn  mt-10 p-4 pr-8 rounded-xl border-2 border-blue-500 text-verdana text-[1.2rem] tracking-widest' onClick={() => {
                        names ? router.push('/t') : router.push('/login')
                    }}>
                        {
                            names ? `Continue as ${names}` : 'Continue with Sociala'
                        }
                    </button>
                </div>
                <div className='w-[50%] md:block hidden'>
                    <Image
                        width={'100'}
                        src={'/login-avatar.png'}
                        height={'100'}
                        alt='avatar'
                        className='w-full h-full object-contain'
                    />
                </div>
            </div>

            <div className='w-full h-auto p-4 flex items-center flex-col md:flex-row gap-4 justify-around '>
                <div className='flex gap-2 flex-col items-start' >
                    <h4>Download Twitchat on:</h4>
                    <div className='flex gap-2'>
                        <button className=' flex items-center gap-2 p-2 rounded-md border-2 border-blue-200 text-verdana text-[1rem] tracking-wider'>
                            <FaGooglePlay />
                            Play Store
                        </button>
                        <button className=' flex items-center gap-2 p-2 rounded-md border-2 border-blue-200 text-verdana text-[1rem] tracking-wider'>
                            <FaAppStore />
                            App Store
                        </button>
                    </div>
                </div>

                <div>
                    <p>&copy; Twitchat Copyright, 2023</p>
                </div>
                <div>
                    <p>Sociala Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage