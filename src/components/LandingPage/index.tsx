import React from 'react'
import Nav from "../Nav"
import { MdOutlineArrowOutward } from 'react-icons/md'
import Hero from './Hero'
import Features from './features'
import Testimonial from './testimonial'

const LandingPage = () => {
  return (
    <div>
      <div className='h-screen flex justify-center items-center'>
        <Nav />
        <Hero />
      </div>
      <Features />
      <Testimonial />
        
    </div>
  )
}

export default LandingPage