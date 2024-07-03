'use client'
import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import Image from 'next/image';
import img from '../../../public/faq-image.jpg'
import mobileImg from '../../../public/faq-image-mobile.jpg'

const faqs = [
  {
    index: 'faq1',
    question: "How secure is my data during transfer?",
    answer: "Your data is protected with end-to-end encryption, ensuring it remains secure throughout the transfer process."
  },
  {
    index: 'faq2',
    question: "Are there any file size limitations?",
    answer: "No, our platform supports files of all sizes, allowing you to transfer large videos, documents, and more."
  },
  {
    index: 'faq3',
    question: "Can I transfer files between different operating systems?",
    answer: "Yes, our service supports cross-platform transfers between Windows, macOS, Android, and iOS."
  }
];

const FAQ = () => {
    const [faqState, setFaqState] = React.useState<{ [key: string]: boolean }>({
        faq1: false,
        faq2: false,
        faq3: false,
      })
  
      const toggleFaq = (faq: string) => {
        setFaqState((prevState) => ({
          ...prevState,
          [faq]: !prevState[faq],
        }));
      }
  return (
    <div className='w-full flex justify-center items-center py-20 px-[23%] md:px-3'>
        <div className='flex md:flex-col bg-white rounded-xl faq-shadow'>
            <picture className='w-[50%] md:w-[100%]'>
                <source media="(max-width: 768px)" srcSet={mobileImg.src} />
                <Image src={img} alt="" className='rounded-l-xl md:rounded-l-none md:rounded-t-xl'/>
            </picture>
            
            <div className='p-7 w-[50%] md:w-[100%]'>
                <h1 className='text-3xl md:text-2xl md:text-center font-semibold mb-10'>Frequently Asked Questions</h1>
                {faqs.map(faq=>(
            <>
              <div className=' flex flex-col py-4 border-gray-100 cursor-pointer' key={faq.index} onClick={()=> toggleFaq(faq.index)}>
                <div className='flex justify-between items-center'>
                  <h3 className='md:text-xs'>{faq.question}</h3>
                <div>
                    {faqState[faq.index] ? <FaCircleMinus />: <FaPlusCircle />}
                </div>
                </div>
                
                {
                  faqState[faq.index] &&
                  <div className='md:text-xs py-2 text-gray-600 '>
                    {faq.answer}
                  </div>
                }
              </div>
                
            </>
          ))}
            </div>
        </div>

      
    </div>
  );
};

export default FAQ;