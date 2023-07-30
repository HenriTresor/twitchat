import React from 'react'
import {MdOutlineLogout} from 'react-icons/md'
type Props = {}

export default function SideBar({}: Props) {
  return (
      <div className='p-2 border-2 border-slate-100 flex flex-col justify-end'>
          <button className='btn border-2 rounded-sm border-red-400 text-red-400'>
                <MdOutlineLogout />
          </button>
    </div>
  )
}