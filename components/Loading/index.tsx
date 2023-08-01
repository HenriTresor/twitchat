import React from 'react'
import { FaFacebookMessenger } from 'react-icons/fa'

type Props = {}

function Loading({}: Props) {
  return (
      <div className='w-full min-h-screen flex items-center justify-center'>
          <h1 className='text-[3rem] text-blue-300'><FaFacebookMessenger /></h1>
    </div>
  )
}

export default Loading