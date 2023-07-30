import React from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'

type Props = {}

function ChattingArea({}: Props) {
  return (
      <div className='flex-grow flex flex-col'>
          <ChatHeader />
        <ChatBody />
          <div className='w-full flex border-t-2 p-2 justify-start'>
                <textarea name="message" id="message" rows={1.2} className='flex-grow border-2 border-slate-500 mr-2 resize-y p-2 outline-none'></textarea>
              <button className='btn bg-blue-500 text-white'>send</button>
          </div>
    </div>
  )
}

export default ChattingArea