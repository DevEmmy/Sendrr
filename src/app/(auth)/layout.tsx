
import Image from 'next/image';
import React from 'react'

const RootLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='grid grid-cols-2 gap-2 justify-center'>
        {children}
        <Image src={"https://e0.pxfuel.com/wallpapers/416/806/desktop-wallpaper-dark-aesthetic-cool-dark-aesthetic-thumbnail.jpg"} alt='bg image' width={0} height={0} className='w-full h-[100vh] object-cover' unoptimized/>
    </div>
  )
}

export default RootLayout