import React from 'react'

type Props = {}

function ChatHeader({}: Props) {
  return (
      <div className='w-full p-2 flex justify-between  border-b-2 h-auto border-slate-100 sticky top-0 z-999 backdrop-blur-sm bg-[rgb(0,0,0,.01)] items-end'>
          <div className='flex items-center gap-[2em]'> 
              <div className='p-3 w-[50px] h-[50px] bg-gray-100 rounded-full relative flex items-center justify-center'>
              <div className='absolute w-[10px] h-[10px] rounded-full bg-green-500 bottom-0 right-0'></div>    
              </div>
              <div>
                  <h1 className='font-extrabold tracking-wider'>Full name</h1>
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