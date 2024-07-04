import React from 'react'
import { RiAttachment2, RiFile2Line } from 'react-icons/ri'

const FileSender = () => {
    return (
        <div className=' fixed bottom-10 w-[75%]'>
            <div className='flex gap-3 items-center w-full m-auto justify-center bg-[rgb(100,100,100)] rounded-2xl'>
                <RiAttachment2 size={24} className='m-5 cursor-pointer'/>
                <input type="text" className='w-4/5 bg-transparent p-3' placeholder='Enter Text'/>
                <button className='bg-primary p-3 m-2 rounded-2xl px-10'>Send</button>
            </div>
        </div>
    )
}

export default FileSender