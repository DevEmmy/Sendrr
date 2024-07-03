import React from 'react'
import Nav from "../Nav"
import { MdOutlineArrowOutward } from 'react-icons/md'
import Hero from './Hero'
import Features from './features'
import Benefits from './benefits'
import Testimonial from './testimonial'
import Pricing from './pricing'
import FAQ from './faqs'
import ContactForm from './contact'
import Footer from './footer'

const LandingPage = () => {
  return (
    <div>
      <div className='h-screen flex justify-center items-center'>
        <Nav />
        <Hero />
      </div>
      <Features />
      <Benefits />
      <Testimonial />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer/>
        
    </div>
  )
}

export default LandingPage