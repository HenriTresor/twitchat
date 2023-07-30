import React from 'react'
import {MdPerson, MdBlock} from 'react-icons/md'

type Props = {}

function ProfileArea({ }: Props) {
    return (
        <div className='w-[20%] aside border-l-4 hidden flex-col items-center  overflow-auto gap-5 lg:flex'>
            <div className='w-[100px] h-[100px] bg-gray-100 mt-5 rounded-full'>

            </div>
            <h1 className='font-extrabold tracking-wider text-center text-[1.3rem]'>Full name</h1>

            <ul className='list-none w-full'>
                <li className='action-btn'><MdPerson /> Sociala profile</li>
                <li className='action-btn border-red-500 text-red-500'><MdBlock /> Block</li>
            </ul>
        </div>
    )
}

export default ProfileArea