import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full bg-black text-gray-200'>
      <div className='max-w-screen-2xl w-full h-full mx-auto px-4 py-4 md:py-16 md:px-8 justify-center flex'>
        <div className='w-full grid md:grid-cols-3 gap-8'>
          <div className='flex flex-col'>
            <p className='text-gray-400 mb-8'>CONTACT</p>
            <p>Dell Painting</p>
            <p>420 River Road</p>
            <p className='mb-4'>North Arlington, NJ 07031</p>
            <p>PHONE: (201) 998-0700</p>
            <p>FAX: (201) 299-3776</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-gray-400'>SERVICES</p>
          </div>
          <div className='flex flex-col'>
            <p className='text-gray-400 mb-8'>ABOUT US</p>
            <p className='text-gray-200'>Dell Painting is a second generation painting contractor giving color
              to your projects with 25+ years of experience servicing clients and
              building relationships in the metro NY, NJ and PA area.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer