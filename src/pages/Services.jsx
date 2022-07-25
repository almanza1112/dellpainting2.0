import React from 'react'
import ServicesImg from '../assets/services.jpg'

const Services = () => {
  return (
    <div className='w-full h-screen'>
      <img src={ServicesImg} className='main-bg-img' />
      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>SERVICES</p>
        </div>

        <div className='main-desc-section'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem id aspernatur, quibusdam accusantium repellendus officiis. Tempora ipsa itaque, dignissimos molestias at doloribus quas, id et, cumque deserunt odio! Consectetur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services