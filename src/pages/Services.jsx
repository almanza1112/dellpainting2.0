import React from 'react'
import ServicesImg from '../assets/services.jpg'

const Services = () => {
  return (
    <div className='section-style'>
      <div className='overlay' />
      <img src={ServicesImg} className='w-full h-full object-cover blur-xl' />

    </div>
  )
}

export default Services