import React from 'react'
import { MdPerson } from 'react-icons/md'
import { FaVolumeMute } from 'react-icons/fa'
import { AppData } from '@/context/AppContext'
import Image from 'next/image'
type Props = {}

function ChatBody({ }: Props) {

    const { currentChat, currentUser } = React.useContext(AppData)
    console.log(currentUser)
    return (
        <div className='flex-grow relative'>
            {
                currentChat ? (
                    <div className='flex flex-col w-full items-center gap-4 '>
                        <div className='w-[100px] h-[100px] bg-gray-100 mt-5 rounded-full overflow-hidden'>
                            <Image
                                src={currentChat?.sender?.profile || currentChat?.users[0]?._id !== currentUser?._id && currentChat?.users[0]?.profile}
                                alt=''
                                width={'100'}
                                height={'100'}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <h1 className='font-extrabold tracking-wider text-center text-[1.3rem]'>{currentChat?.sender?.names || currentChat?.users[0]?._id !== currentUser?._id && currentChat?.users[0]?.names}</h1>
                        <div className='flex items-center gap-2'>
                            <button className='btn border rounded-full'>
                                <MdPerson />
                            </button>
                            <button className='btn border rounded-full'>
                                <FaVolumeMute />
                            </button>
                        </div>
                        <p className='font-sans tracking-wider'>This is the start of your legendary chat with {currentChat?.sender?.names || currentChat?.users[0]?._id !== currentUser?._id && currentChat?.users[0]?.names}</p>
                    </div>
                ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                            <p>{ `Hey ${currentUser?.names}`},select a chat to start!</p>
                    </div>
                )
            }
        </div>
    )
}

export default ChatBody