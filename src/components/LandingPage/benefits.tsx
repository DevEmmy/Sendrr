import React from 'react';
import Image from 'next/image';
import img1 from '../../../public/benefit1.png'
import img2 from '../../../public/benefit2.png'
import img3 from '../../../public/benefit3.png'

const benefits = [
  {
    img: img1,
    benefit: "Cross-Platform Compatibility",
    description: "Transfer files between any devices, whether you're on Windows, macOS, Android, or iOS."
  },
  {
    img: img2,
    benefit: "Save Time",
    description: "Streamline your workflow with fast and efficient file transfers, saving you valuable time."
  },
  {
    img: img3,
    benefit: "Enhanced Productivity",
    description: "Keep your work synchronized across devices, ensuring you always have the latest files at your fingertips."
  }
];

const Benefits = () => {
  return (
    <div className='flex flex-col items-center py-32 px-5 gap-20'>
        <h1 className='font-bold text-4xl text-center'>The benefits you get.</h1>
        <div className='grid grid-cols-3 md:grid-cols-1 gap-5 '>
            {benefits.map((item, index) => (
                <div key={index} className='rounded-xl py-7 px-3 flex flex-col items-center text-center '>
                    <Image src={item.img} alt="" className='w-[200px]'/>
                <h3 className='font-bold text-xl'>{item.benefit}</h3>
                <p className='text-gray-500 w-[75%]'>{item.description}</p>
                </div>
            ))}
        </div>
      
    </div>
  );
};

export default Benefits;
