"use client"
import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'

const SideBar = () => {
    const [active, setActive] = useState(0)
    const connectedDevices = [
        "Macbook M3",
        "HP 9470"
    ]
    return (
        <div className='off h-[100vh] p-5 flex flex-col gap-4'>
            <p>Sendrr</p>

            <div>
                <button className='flex gap-2 items-center rounded-md border-2 border-white w-full p-3 justify-center'>
                    <HiPlus />
                    <p className='text-sm'>Add New Device</p>
                </button>
            </div>

            <div>
                <p>Connected Devices:</p>

                <div className='flex gap-3 flex-col py-3'>
                    {
                        connectedDevices.map((item, i) => {
                            return (
                                <p key={i} className={`text-sm ${i == active && "bg-[#3d3a3a]"} p-3 rounded-md`}>{item}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default SideBar