import React from 'react'
import bgVideo from '../assets/home_vid_bg.mp4'

const Home = () => {
  return (
    <div name='home' className='section-style'>

      {/* Container */}
      <div className='w-full justify-center h-full'>
        <div className='overlay'></div>
        <video src={bgVideo} autoPlay loop muted playsInline />
        <div className='absolute w-full h-full top-0 flex flex-col justify-center p-4 md:p-8'>
          <p className='text-3xl md:text-6xl font-bold text-gray-200'>PAINTERS YOU CAN TRUST</p>
          <p className='md:text-3xl my-4 text-gray-200 uppercase'>Over 25 years of experience at the your service </p>
          <div className=''>
            <button className='border-2 border-black p-2 hover:bg-red-600 hover:border-red-600 hover:text-gray-200'>GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home