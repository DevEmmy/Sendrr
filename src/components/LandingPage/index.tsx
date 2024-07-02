import React from 'react'
import Nav from "../Nav"
import { MdOutlineArrowOutward } from 'react-icons/md'
import Hero from './Hero'
import Features from './features'

const LandingPage = () => {
  return (
    <div>
      <div className='h-screen flex justify-center items-center'>
        <Nav />
        <Hero />
      </div>
      <Features />
        
    </div>
  )
}

export default LandingPage