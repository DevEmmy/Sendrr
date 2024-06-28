import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Hero = () => {
    return (
        <div className='w-2/3 m-auto my-24 text-center flex flex-col gap-2'>
            <h1 className='text-[70px] font-bold'>Transfer your files across multiple devices.</h1>
            <p className='text-sm w-4/5 m-auto'>Effortlessly send and receive files between your phone, tablet, and computer with our secure and fast file transfer service.</p>
            <button className=' my-2 bg-primary rounded-md px-5 py-3 text-sm text-white flex gap-2 items-center justify-center w-fit m-auto'>

                <p className='text-sm'>Get Started</p>
                <MdOutlineArrowOutward />
            </button>
        </div>
    )
}

export default Hero