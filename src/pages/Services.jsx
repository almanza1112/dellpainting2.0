import React,{useEffect}from 'react'
import ServicesImg from '../assets/services.jpg'

const Services = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='w-full h-screen bg-slate-50'>
      <img src={ServicesImg} className='main-bg-img' />
      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>SERVICES</p>
        </div>

        <div className='main-desc-section'>
          <p>
            Throughout the many years of service, our amazing team has expanded to more than 
            just painting. We offer a diverse number services as you see below, each delivered 
            with top quality and expectactions. Please reach out to us if you are looking for
            something specific and do not see it here.   
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services