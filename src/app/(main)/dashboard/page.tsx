import MainComponent from '@/components/Dashboard/MainComponent'
import SideBar from '@/components/Dashboard/SideBar'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-[1fr_4fr] '>
        <SideBar />
        <MainComponent />
    </div>
  )
}

export default page