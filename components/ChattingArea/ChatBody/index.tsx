import React from 'react'
import { MdPerson } from 'react-icons/md'
import { FaVolumeMute} from 'react-icons/fa'

type Props = {}

function ChatBody({ }: Props) {
    return (
        <div className='flex-grow relative'>
            <div className='flex flex-col w-full items-center gap-4 '>
                <div className='w-[100px] h-[100px] bg-gray-100 mt-5 rounded-full'>

                </div>
                <h1 className='font-extrabold tracking-wider text-center text-[1.3rem]'>Full name</h1>
                <div className='flex items-center gap-2'>
                    <button className='btn border rounded-full'>
                        <MdPerson />
                    </button>
                    <button className='btn border rounded-full'>
                        <FaVolumeMute />
                    </button>
               </div>
                <p className='font-sans tracking-wider'>This is the start of your legendary chat with {"Full name"}</p>
            </div>
        </div>
    )
}

export default ChatBody