import React,{useEffect} from 'react'
import bgVideo from '../assets/Home/dellpainting-bg-vid.mp4'

const Home = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div name='home' className='section-style'>

      {/* Container */}
      <div className='w-full justify-center h-full'>
        <video src={bgVideo} autoPlay loop muted playsInline/>
        <div className='absolute w-full h-full top-0 flex flex-col justify-center '>
          <div className='max-w-screen-xl w-full mx-auto backdrop-blur-lg p-8'>
            <p className='text-2xl md:text-6xl font-bold text-white drop-shadow-xl'>PAINTERS YOU CAN TRUST</p>
            <p className='md:text-3xl my-4 text-white drop-shadow-xl'>Over 25 years of experience at your service </p>
            <div className=''>
              <button className='flat-btn-home'>GET IN TOUCH</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Home