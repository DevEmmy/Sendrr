import React from 'react';
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
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
    <footer className="bg-primary text-white py-8 px-14 sm:px-7 flex flex-col gap-3 ">
      <div className="flex sm:flex-col justify-between items-center pb-3 border-b-2 sm:text-center">
            <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Sendrr.</h2>
            <p className="w-[40%] sm:w-[100%] sm:text-center">
              Effortlessly send and receive files between your phone, tablet, and computer with our secure and fast file transfer service.
            </p>
            
            </div>
           
            <div className="flex flex-col items-end gap-3 min-w-[120px] sm:items-center">
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
           
    </div>
    <div className='flex justify-between items-center'>
        <p className="">© All Rights Reserved</p>
        <div className="flex space-x-4">
          <a href="#" className=" hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className=" hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className=" hover:text-white">
            <FaTwitter />
          </a>
        </div>
        
    </div>
    </footer>
  );
};

export default Footer;
