import Image from 'next/image'
import React from 'react'
import { FaFacebookMessenger } from 'react-icons/fa'

type Props = {}

function LandingPage({}: Props) {
  return (
      <div>
          <div className='flex p-2 items-center justify-around shadow-sm' >
              <div className='flex items-center gap-4'>
                  <h1 className='text-blue-300 text-[2rem]'>
                      <FaFacebookMessenger />
                  </h1>
                  <h1 className='font-verdana text-[1.6rem] tracking-wider '>Twitchat</h1>
              </div>
              <ul className='flex items-center gap-2'>
                  <li className='list-item'>developers</li>
                  <li className='list-item'>about us</li>
                  <li className='list-item'>Contact us</li>
              </ul>
          </div>

          <div>
              <h1>Sociala Chat</h1>
              <p>Chat easily with your friends on sociala here ...</p>

              <div>
                  <Image
                      src={'/login-avatar.png'}
                      width={'100'}
                      height={'100'}
                      alt='avatar'
                  />
              </div>
          </div>
    </div>
  )
}

export default LandingPage