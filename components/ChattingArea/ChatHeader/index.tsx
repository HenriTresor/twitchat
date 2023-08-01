import React, { useContext } from 'react'
import { AppData } from '@/context/AppContext'
import Image from 'next/image'

type Props = {}

function ChatHeader({ }: Props) {

    const { currentChat } = useContext(AppData)
    return (
        <div className='w-full p-2 flex justify-between  border-b-2 h-auto border-slate-100 sticky top-0 z-50 backdrop-blur-sm bg-[rgb(0,0,0,.01)] items-end'>
            <div className='flex items-center gap-[2em]'>
                <div className='overflow-hidden w-[50px] h-[50px] bg-gray-100 rounded-full relative flex items-center justify-center'>
                    <Image
                        src={currentChat?.profile}
                        alt=''
                        width={'100'}
                        height={'100'}
                        className='w-full h-full object-cover'
                    />
                    <div className='absolute w-[10px] h-[10px] rounded-full bg-green-500 bottom-0 right-0'></div>
                </div>
                <div>
                    <h1 className='font-extrabold tracking-wider'>{currentChat?.names}</h1>
                    <p className='font-mono'>active</p>
                </div>
            </div>
            <div className='p-3 cursor-pointer border border-neutral-950 flex items-center justify-center rounded-full w-[20px] h-[20px]'>
                <span className='font-mono'>i</span>
            </div>
        </div>
    )
}

export default ChatHeader