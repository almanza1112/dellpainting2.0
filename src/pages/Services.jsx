import React from 'react'
import ServicesImg from '../assets/services.jpg'

const Services = () => {
  return (
    <div className='section-style '>
      <img src={ServicesImg} className='w-full h-full object-cover grayscale' />
      <div className='absolute w-full h-full top-0 flex flex-col justify-center p-4 md:p-8 items-center md:items-start'>
        <p className='text-white text-4xl tracking-widest drop-shadow-lg'>OUR</p>
        <p className='text-white text-7xl drop-shadow-lg'>SERVICES</p>
      </div>

    </div>
  )
}

export default Services