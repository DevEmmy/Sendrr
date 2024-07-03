import React from 'react';
import Image from 'next/image';
import img1 from '../../../public/data_7414609.png'
import img2 from '../../../public/cloud_2274440.png'
import img3 from '../../../public/shield_508281.png'
import img4 from '../../../public/mobile-friendly_2013614.png'

const features = [
  {
    feature: "Seamless Multi-Device Transfer",
    img: img1,
    description: "Easily move files between phones, laptops, tablets, and desktops, regardless of the operating system. Whether you're using Windows, macOS, Android, or iOS, our platform has you covered."
  },
  {
    feature: "High-Speed Transfers",
    img: img2,
    description: "Enjoy lightning-fast file transfers without compromising on security. Our service ensures your data is transferred quickly and safely."
  },
  {
    feature: "Secure and Reliable",
    img: img3,
    description: "We prioritize your data's security with end-to-end encryption, ensuring your files are always protected during transfer."
  },
  {
    feature: "User-Friendly Interface",
    img: img4,
    description: "Our intuitive interface makes file sharing a breeze, allowing you to transfer files with just a few clicks."
  }
];

const FeatureList = () => {
  return (
    <div className='w-full py-32 flex flex-col items-center justify-center px-10'>
        <div className='mb-20 text-center'>
            <h1 className='text-4xl font-bold'>More than just cool</h1>
            <p className='text-gray-500'>Explore what we can do for you</p>
        </div>
        <div className='grid grid-cols-4 md:grid-cols-1 gap-2'>
      {features.map((item, index) => (
        <div key={index} className='bg-white flex flex-col items-center text-center w-[300px] md:w-[80vw] h-[270px] px-5 justify-center rounded-xl feature-shadow'>
          <Image src={item.img} alt="" className='w-[50px]'/>
          <h3 className='font-bold text-lg'>{item.feature}</h3>
          <p className='text-xs text-gray-500'>{item.description}</p>
        </div>
      ))}
    </div>
    <button className='mt-20 py-3 px-5 border-2 rounded-lg bg-primary text-white text-sm'>
        View all features
    </button>
    </div>
    
  );
};

export default FeatureList;
