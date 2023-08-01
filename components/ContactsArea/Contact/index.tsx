    import Image from 'next/image'
import React from 'react'
    
type Props = {
    names: string,
    profile: string
    }
    
    function Contact({names, profile}: Props) {
      return (
          <div
          className='p-2 w-full flex items-center justify-between cursor-pointer hover:bg-slate-50'
          >
              <div className='flex gap-4'> 
                  <div className='w-[50px] overflow-hidden rounded-full h-[50px] bg-slate-100'>
                      <Image
                          src={profile}
                          alt=''
                          width={'100'}
                          height={'100'}
                          className='w-full h-full object-cover'
                      />
                  </div>
                  <div>
                      <h1 className='font-bold tracking-wider'>{ names}</h1>
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