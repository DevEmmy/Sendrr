import React from 'react';

const pricing = {
  plans: [
    {
      plan: "Free Plan",
      description: "Basic file transfers with limited features.",
      price: "$0"
    },
    {
      plan: "Pro Plan",
      description: "Advanced features with no file size limitations.",
      price: "$9.99"
    },
    {
      plan: "Business Plan",
      description: "Premium features for teams and businesses.",
      price: "$29.99"
    }
  ],
  cta: "Choose Your Plan"
};

const Pricing = () => {
  return (
    <div className='w-full flex flex-col gap-20 items-center py-32 px-5'>
        <h1 className='font-bold text-4xl text-center'>Choose the Perfect Plan for You.</h1>
        <div className='grid grid-cols-3 md:grid-cols-1 gap-5'>
            {pricing.plans.map((item, index) => (
                <div key={index} className='bg-white py-10 px-5 rounded-xl flex flex-col gap-2'>
                <h3 className='font-semibold text-lg'>{item.plan}</h3>
                <h1 className='font-bold text-4xl'>{item.price}<span className='font-medium text-[16px]'>/month</span></h1>
                <p className='w-[100%] text-sm text-gray-500'>{item.description}</p>
                <button className='bg-primary text-white rounded-lg py-2'>Subscribe to the plan</button>
                </div>
            ))}
        </div>
      
      <button className='bg-primary text-white py-2 px-5 rounded-lg'>{pricing.cta}</button>
    </div>
  );
};

export default Pricing;
