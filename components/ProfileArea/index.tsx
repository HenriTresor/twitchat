import React, { useContext, useEffect, useState } from 'react'
import { MdPerson, MdBlock } from 'react-icons/md'
import { FaVolumeMute } from 'react-icons/fa'
import { AppData } from '@/context/AppContext'
import Image from 'next/image'

type Props = {}

function ProfileArea({ }: Props) {

    const { currentUser } = useContext(AppData)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        currentUser?._id && setLoading(false)
    }, [currentUser])
    return (
        <div className='w-[20%] aside border-l-4 hidden flex-col items-center  overflow-auto gap-5 lg:flex'>
            <div className='w-[100px] h-[100px] bg-gray-100 mt-5 rounded-full overflow-hidden'>
                {
                    !loading && (
                        <Image
                            src={currentUser?.profile}
                            alt=''
                            width={'100'}
                            height={'100'}
                            className='w-full h-full object-cover'
                        />
                    )
                }
            </div>
            {
                loading ? <div className='w-[200px] h-auto p-2 bg-gray-100'></div> : <h1>{currentUser?.names}</h1>
           }
            <div className='flex items-center gap-2'>
                <button className='btn border rounded-full'>
                    <MdPerson />
                </button>
                <button className='btn border rounded-full'>
                    <FaVolumeMute />
                </button>
            </div>
            <ul className='list-none w-full'>
                <li className='action-btn'><MdPerson /> Sociala profile</li>
                <li className='action-btn border-red-500 text-red-500'><MdBlock /> Block</li>
            </ul>
        </div>
    )
}

export default ProfileArea