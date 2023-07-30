    import React from 'react'
    
    type Props = {}
    
    function Contact({}: Props) {
      return (
          <div
          className='p-2 w-full flex items-center justify-between cursor-pointer hover:bg-slate-50'
          >
              <div className='flex gap-4'> 
                  <div className='w-[50px] rounded-full h-[50px] bg-slate-100'>

                  </div>
                  <div>
                      <h1 className='font-bold tracking-wider'>Full name</h1>
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