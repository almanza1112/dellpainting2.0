import React, { useRef } from 'react'
import bgVideo from '../assets/compressed.mp4'

const Home = () => {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 2.5;
  }

  return (
    <div name='home' className='section-style'>

      {/* Container */}
      <div className='w-full justify-center h-full'>
        <video autoPlay loop muted playsInline><source src={bgVideo}/></video>
        <div className='absolute w-full h-full top-0 flex flex-col justify-center p-4 md:p-8 items-center md:items-start'>
          <div className='backdrop-blur-lg p-8'>
            <p className='text-2xl md:text-6xl font-bold text-white drop-shadow-xl'>PAINTERS YOU CAN TRUST</p>
            <p className='md:text-3xl my-4 text-white drop-shadow-xl'>Over 25 years of experience at your service </p>
            <div className=''>
              <button className='border-2 border-white font-semibold text-white p-3 hover:bg-red-600 hover:border-red-600 hover:text-gray-200 drop-shadow-xl'>GET IN TOUCH</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Home