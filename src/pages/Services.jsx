import React from 'react'
import ServicesImg from '../assets/services.jpg'

const Services = () => {
  return (
    <div className='w-full md:h-screen'>
      <img src={ServicesImg} className='w-full h-[60vh] object-cover grayscale' />
      <div className='max-w-screen-2xl w-full h-[40vh] bottom-0 grid md:grid-cols-3 xl:grid-cols-4 p-4 md:p-8 mx-auto'>
        <div className='flex flex-col justify-center items-center md:items-start'>
          <p className='text-red-600 text-xl md:text-4xl md:pb-4'>OUR</p>
          <p className='text-black text-3xl md:text-6xl'>SERVICES</p>
        </div>

        <div className='col-span-1 md:col-span-2 flex flex-col justify-center md:pl-8'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem id aspernatur, quibusdam accusantium repellendus officiis. Tempora ipsa itaque, dignissimos molestias at doloribus quas, id et, cumque deserunt odio! Consectetur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services