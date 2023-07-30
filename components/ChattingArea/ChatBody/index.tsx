import React from 'react'
import { MdPerson } from 'react-icons/md'

type Props = {}

function ChatBody({ }: Props) {
    return (
        <div className='flex-grow relative'>
            <div className='flex flex-col absolute bottom-10 w-full items-center gap-4 '>
                <div className='w-[100px] h-[100px] bg-gray-100 mt-5 rounded-full'>

                </div>
                <h1 className='font-extrabold tracking-wider text-center text-[1.3rem]'>Full name</h1>
                <button className='btn border rounded-full'>
                    <MdPerson />
                </button>
            </div>
        </div>
    )
}

export default ChatBody