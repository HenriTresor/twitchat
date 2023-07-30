import React from 'react'
import ChatHeader from './ChatHeader'

type Props = {}

function ChattingArea({}: Props) {
  return (
      <div className='flex-grow p-2'>
          <ChatHeader />
    </div>
  )
}

export default ChattingArea