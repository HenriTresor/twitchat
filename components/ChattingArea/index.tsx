import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import {MdSend} from 'react-icons/md'
import { AppData } from '@/context/AppContext'

type Props = {}

function ChattingArea({ }: Props) {

    const {currentChat, currentUser} = React.useContext(AppData)
    return (
        <div className='flex-grow flex flex-col'>
            {currentChat && <ChatHeader />}
            <ChatBody />
            {
                currentChat && (
                    <div className='w-full flex border-t-2 p-2 justify-start items-start'>
                        <textarea name="message" id="message" rows={1.2} className='flex-grow border-2 border-slate-500 mr-2 resize-y p-2 outline-none' placeholder={`try, "hello ${currentChat?.sender?.names || currentChat?.users[0]?._id !== currentUser?._id && currentChat?.users[0]?.names}"`}></textarea>
                        <button className='btn bg-blue-500 text-white rounded-sm p-2'>
                            <MdSend />
                        </button>
                    </div>
                )
           }
        </div>
    )
}

export default ChattingArea