'use client'
import Image from 'next/image'
import React, { useEffect, useReducer } from 'react'
import { useRouter } from 'next/navigation'
import { FaFacebookMessenger } from 'react-icons/fa'
import { AppData } from '@/context/AppContext'
import { document } from 'postcss'
import Loading from '@/components/Loading'

type Props = {}

interface inputValues {
    email: string
    password: string
}

function Login({ }: Props) {

    useEffect(() => {
        localStorage.getItem('access_token') && router.push('/t')
    },[])
    const [inputValues, setInputValues] = React.useState<inputValues>({
        email: '',
        password: ''
    })

    const { setCurrentUser } = React.useContext(AppData)
    const router = useRouter()
    function handleChange(e: any): void {
        setInputValues((prev: inputValues) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (): Promise<any> => {
        try {

            const res = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(inputValues)
            })
            const data = await res.json()
            if (data.status) {
                setCurrentUser(data.user)
                localStorage.setItem('access_token', data?.access_token)
                router.push('/t')
                // location.assign('/t')
                return
            }
            alert(data.message)
        } catch (error: any) {
            alert(error.message)
        }
    }

    if (!localStorage.getItem('access_token')) {
        return (
            <div className='w-full min-h-screen flex items-center justify-center'>
                <div className='p-4 shadow-lg w-[50%] h-auto flex border-2'>
                    <div className='w-[50%] md:block hidden'>
                        <h1>Continue With Sociala</h1>
                        <Image
                            width={'100'}
                            src={'/login-avatar.png'}
                            height={'100'}
                            alt='avatar'
                            className='w-full h-full object-contain'
                        />
                    </div>
                    <div className='p-2 w-[50%]'>
                        <div className='w-full h-auto p-2 flex flex-col gap-2'>
                            <label htmlFor="email">Email address: </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                className='border w-full p-2 outline-none focus:border-4'
                                type="email" placeholder='enter your email' id='email' name='email' />
                        </div>
                        <div className='w-full h-auto p-2 flex flex-col gap-2'>
                            <label htmlFor="password">Password: </label>
                            <input
                                onChange={(e) => handleChange(e)}
                                className='border w-full p-2 outline-none focus:border-4'
                                type="password" placeholder='enter your password' id='password' name='password' />
                        </div>
                        <div className='p-2 mt-4'>
                            <button className='btn p-2 border border-blue-300 rounded-md' onClick={handleSubmit}>Continue...</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    } else {
        return <Loading /> 
    }
      
}

export default Login