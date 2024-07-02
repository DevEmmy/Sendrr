'use client'

import Link from 'next/link'
import { title } from 'process'
import React from 'react'
import { MdMenuOpen } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Nav = () => {

    const navItems = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About Us",
            link: "/about-us"
        },
        {
            title: "Features",
            link: "Pricing"
        },
        {
            title: "Pricing",
            link: "/pricing"
        }
    ]

    const [menu, setMenu] = React.useState(false)

    const toggleMenu = () =>{
        setMenu(prev => !prev)
    }

  return (
    <div className='flex justify-between items-center px-[10%] py-5 absolute top-0 left-0 w-full'>
        <div className='text-[20px] font-bold'>Sendrr.</div>

        <div className="flex items-center gap-10 md:hidden">
            {
                navItems.map((item, i)=>{
                    return(
                        <Link href={item.link} className='text-sm hover:border-b-[3px] hover:border-primary' key={i}>
                            {item.title}
                        </Link>
                    )
                })
            }
        </div>

        <div className="flex items-center gap-5 text-sm md:hidden">
            <button className='hover:border-b-[3px] hover:border-primary pb-[1px]'>Log in</button>

            <button className='border py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-colors'>Register</button>
        </div>

        <MdMenuOpen className='text-5xl md:block hidden hover:text-primary' onClick={toggleMenu}/>
        {menu && 
        <div className='absolute bg-white w-[80%] h-screen top-0 right-0 flex flex-col items-end py-5 px-[10%]'>
            <div className='mb-20'>
            <MdClose className='text-5xl ml-auto' onClick={toggleMenu} />
            </div>
            <div className='flex flex-col gap-4 text-2xl items-end'>
                {
                navItems.map((item, i)=>{
                    return(
                        <Link href={item.link} className='' key={i}>
                            {item.title}
                        </Link>
                    )
                })
            }
            </div>
            <div className="flex flex-col items-end gap-3 text-2xl mt-20">
                <button className=''>Log in</button>
                <button className='border py-2 px-4 rounded-md hover:bg-primary hover:text-white transition-colors'>Register</button>
            </div>
            
        </div>}

    </div>
  )
}

export default Nav