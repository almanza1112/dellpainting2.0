import React, {useEffect} from 'react'
import CareersImg from '../assets/Careers/careers_main.jpg'

const Careers = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='w-full h-screen'>
      <img src={CareersImg} className='main-bg-img' />
      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>CAREERS</p>
        </div>

        <div className='main-desc-section'>
          <p>
            Dell Painting is an equal opportunity employer and everyone is welcome. Every position 
            is open for entry level to senior level, and there is always space to grow. Our working 
            environment is a friendly and a strong team player company where we all work together 
            to achieve Dell Painting's goals. Anyone interested in any of our available  positions
            are welcome to fill out the form below or submit your resume to 
            <span className='font-bold'> info@dellpainting.com</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Careers