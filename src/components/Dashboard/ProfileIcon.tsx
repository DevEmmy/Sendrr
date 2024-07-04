import Image from 'next/image'
import React from 'react'

const ProfileIcon = () => {
    return (
        <div className='flex justify-end'>
            <div className='flex gap-3 items-center w-fit p-3 bg-[rgb(100,100,100)] rounded-xl cursor-pointer'>
                <Image alt='Profile Picture' src={"https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793877.jpg"} width={60} height={60} unoptimized className='rounded-full w-[40px] h-[40px] object-cover'/>
                <div>
                    <p className='line-clamp-1 text-sm'>Emmanuel Olaosebikan</p>
                    <p className='line-clamp-1 text-xs'>HP Elitebook</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileIcon