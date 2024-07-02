import React from 'react';
import Image from 'next/image';
import img1 from '../../../public/testifier1.jpg'
import img2 from '../../../public/testifier2.jpg'

const testimonials = [
  {
    rating: 4,
    testimonial: "This service has revolutionized the way I transfer files between my phone and laptop. It's incredibly fast and reliable!",
    author: "James B.",
    type: "Data Scientist",
    image: img1,
  },
  {
    rating: 5,
    testimonial: "I love how easy it is to move files between my MacBook and Windows PC. The interface is so user-friendly!",
    author: "Thomas S.",
    type: "Web Developer",
    image: img2,
  }
];


const Testimonials = () => {


    const StarRating = (rating: number) => {
        const totalStars = 5;
        const filledStars = Math.round(rating); // Round the rating to the nearest integer
        const emptyStars = totalStars - filledStars;
      
        return (
          <div className="star-rating">
            {[...Array(filledStars)].map((_, index) => (
              <span key={`filled-${index}`} className="text-2xl text-primary">&#9733;</span>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
              <span key={`empty-${index}`} className="text-2xl text-primary">&#9734;</span>
            ))}
          </div>
        );
      };

      const testimonials = [
        {
          rating: 4,
          testimonial: "This service has revolutionized the way I transfer files between my phone and laptop. It's incredibly fast and reliable!",
          author: "James B.",
          type: "Data Scientist",
          image: img1,
        },
        {
          rating: 5,
          testimonial: "I love how easy it is to move files between my MacBook and Windows PC. The interface is so user-friendly!",
          author: "Thomas S.",
          type: "Web Developer",
          image: img2,
        }
      ];


  return (
    <div className='flex flex-col w-full items-center py-32 px-5 gap-10'>
        <h1 className='text-4xl font-bold text-center'>What our clients have to say</h1>

        <div className='grid grid-cols-2 md:grid-cols-1 gap-10'>
            {testimonials.map((item, index) => (
                    <div key={index} className="bg-white text-black w-[300px] md:w-[90vw] flex flex-col p-5 rounded-2xl justify-between testimonial-shadow">
                        <div className='pb-5 border-b-2'>
                            {StarRating(item.rating)}
                            <p className='font-normal'>{item.testimonial}</p>
                        </div>
                        
                        <div className='flex pt-5 gap-5'>
                            <Image src={item.image} alt="" className='w-14 rounded-full'/>
                            <div>
                                <h3 className='font-semibold'>{item.author}</h3>
                                <p className='text-slate-600'>{item.type}</p>
                            </div>
                            
                        </div>
                    
                    </div>
            ))}
        </div>
      
    </div>
  );
};

export default Testimonials;