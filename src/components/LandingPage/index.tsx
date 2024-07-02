import React from 'react'
import Nav from "../Nav"
import { MdOutlineArrowOutward } from 'react-icons/md'
import Hero from './Hero'
import Features from './features'
import Testimonial from './testimonial'
import FAQ from './faqs'

const LandingPage = () => {
  return (
    <div>
      <div className='h-screen flex justify-center items-center'>
        <Nav />
        <Hero />
      </div>
      <Features />
      <Testimonial />
      <FAQ />
        
    </div>
  )
}

export default LandingPage