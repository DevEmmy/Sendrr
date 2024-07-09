import Image from 'next/image'
import React, { useState } from 'react'

const ConnectionComponent = () => {
    const [connectionDey, setConnectionDey] = useState<Boolean>(false)
    return (
        <div className='flex flex-col gap-10'>
            <div className='connectionOption'>
                <div className='connectionNumber'>1</div>

                <div className='flex flex-col gap-1'>
                    <p>To create a connection over a LAN network, scan the QR code below:</p>
                    <Image src={"https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"} alt='qr code' width={150} height={150} unoptimized />
                    <p>or</p>
                    <p>use this connection url: <span className='font-bold underline'>https://192.168.42.122:4994</span></p>
                </div>
            </div>

            <div className='connectionOption'>
                <div className='connectionNumber'>2</div>

                <div className='flex flex-col gap-1'>
                    {
                        connectionDey
                            ?
                            <>
                                <div className='flex  gap-2'>
                                    <input type="tel" className='w-[100px] p-2 text-black rounded-md' name="" id="" />
                                    <button className='bg-primary px-3 py-2 text-sm text-white rounded-md w-fit'>join</button>
                                </div>
                                <p>or</p>
                                <div>
                                    <p>I don't have a connection Code, <span className='font-bold underline cursor-pointer' onClick={()=> setConnectionDey(false)}>create Connection</span></p>
                                </div>
                            </>
                            :

                            <>
                                <p>To connect remotely, use the connection  code: <span className='font-bold underline'>499423</span></p>
                                <p>or</p>
                                <div>
                                    <p>I have a connection Code, <span className='font-bold underline cursor-pointer' onClick={()=> setConnectionDey(true)}>Join Connection</span></p>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ConnectionComponent