import Link from 'next/link'
import { title } from 'process'
import React from 'react'

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

  return (
    <div className='flex justify-between items-center px-[10%] py-5'>
        <div className='text-[20px] font-bold'>Sendrr.</div>

        <div className="flex gap-10">
            {
                navItems.map((item, i)=>{
                    return(
                        <Link href={item.link} className='text-sm'>
                            {item.title}
                        </Link>
                    )
                })
            }
        </div>

        <div className="flex gap-5 text-sm">
            <button>Log in</button>

            <button className='border py-2 px-4 rounded-md'>Register</button>
        </div>

    </div>
  )
}

export default Nav