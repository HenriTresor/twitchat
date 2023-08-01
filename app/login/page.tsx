'use client'
import Image from 'next/image'
import React, {useEffect} from 'react'

type Props = {}

export interface error {
    state?: boolean,
    message?: string
}

export interface state {
    loading?: boolean,
    error?: error,
    data?: string
}
export interface action {
    payload?: object,
    type?: string
}

const reducer = (state: state, action: action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return { ...state, loading: true }
        case 'LOGIN_SUCCESS':
            return { ...state, loading: false, data: action.payload }
        case 'LOGIN_ERROR':
            return { ...state, loading: false, error: { state: true, message: action.payload } }
        default:
            return { ...state, error: { state: false, message: null }, loading: false }
    }
}

function Login({ }: Props){


    const handleSubmit = (): void => {

    }
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
                            className='border w-full p-2 outline-none focus:border-4'
                            type="email" placeholder='enter your email' id='email' name='email' />
                    </div>
                    <div className='w-full h-auto p-2 flex flex-col gap-2'>
                        <label htmlFor="password">Password: </label>
                        <input
                            className='border w-full p-2 outline-none focus:border-4'
                            type="password" placeholder='enter your password' id='password' name='password' />
                    </div>
                    <div className='p-2 mt-4'>
                        <button className='btn p-2 border border-blue-300 rounded-md'>Continue...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login