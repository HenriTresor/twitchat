import Image from 'next/image'
import React from 'react'


type Props = {
    messages: [],
    users: []
    onClick: any
}

function Contact({ messages, users, onClick }: Props) {
    return (
        <div
            onClick={onClick}
            className='p-2 w-full flex items-center justify-between cursor-pointer hover:bg-slate-50'
        >
            <div className='flex gap-4'>
                <div className='w-[50px] overflow-hidden rounded-full h-[50px] bg-slate-100'>
                    <Image
                        src={messages?.sender?.profile}
                        alt=''
                        width={'100'}
                        height={'100'}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div>
                    <h1 className='font-bold tracking-wider'>{messages?.sender?.names}</h1>
                    <p>recent message</p>
                </div>
            </div>

            <div>
                1w
            </div>
        </div>
    )
}

export default Contact