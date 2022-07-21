import React from 'react'
import bgVideo from '../assets/home_vid_bg.mp4'

const Home = () => {
  return (
    <div name='home' className='section-style'>

      {/* Container */}
      <div className='w-full justify-center h-full'>
        <video src={bgVideo} autoPlay loop muted playsInline />
        <div className='home-content'>

          <p className='text-xl sm:text-4xl text-[#f2486a] font-bold'>Hello! My name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Bryant Almanza</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Full Stack Developer.</h2>
        </div>


      </div>
    </div>
    // <div className='home'>
    //   <div className='overlay'></div>
    //   <video src={bgVideo} autoPlay loop muted playsInline />
    //   <div className='home-content'>
    //     <div className='text-2xl sm:text-4xl md:text-6xl font-bold'>TESTING TESTING 123</div>
    //     <div className=' my-4'>Sub text does here</div>
    //     <div>
    //       <button className='flat-btn my-2'>LEARN MORE ABOUT US</button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Home