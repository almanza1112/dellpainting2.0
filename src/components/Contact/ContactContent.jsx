import React, { useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { FaCheck } from 'react-icons/fa'

const ContactContent = () => {

  const [didSend, setMessage] = useState(false);
  const [isSending, setSending] = useState(false);

  return (
    <div className='w-full bg-slate-50'>
      <div className='max-w-screen-xl mx-auto w-full h-full flex justify-center items-center'>
        <div className='grid md:grid-cols-2 gap-8 md:gap-16 p-4 md:px-8 md:divide-x py-4 md:py-32 w-full'>
          {/* Information */}
          <div className='grid grid-cols-2 gap-8'>
            <div className='flex flex-col items-start justify-center'>
              <p className='uppercase mb-4'>Address</p>
              <p>420 River Road</p>
              <p>North Arlington, NJ 07031</p>
            </div>
            <div className='flex flex-col'>
              <p className='uppercase mb-4'>Phone</p>
              <p>(201) 998-0700</p>
            </div>
            <div className='flex flex-col'>
              <p className='uppercase mb-4'>Email</p>
              <p>info@dellpainting.com</p>
            </div>
            <div className='flex flex-col'>
              <p className='uppercase mb-4'>Fax</p>
              <p>(201) 299-3776</p>
            </div>
          </div>


          {/* Form */}
          <form id='' method='POST' action='' className='flex flex-col w-full'>
            <div className={didSend ? 'mb-8 border border-gray-800 py-4 grid grid-cols-5' : 'hidden'}>
              <div className='flex justify-center items-center'>
                <div className='border-2 border-primary rounded-full p-2 md:p-4 '>
                  <FaCheck size={25} color='#5ce1e6' />
                </div>
              </div>
              <div className='col-span-4 flex items-center'>
                <p className='text-xl md:text-2xl '>
                  Message sent! We will get back to you soon.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-2 md:gap-4'>
              <input className='mb-4 p-2 bg-white text-black' type="text" placeholder='Name' name='name' required={true} />
              <input className='mb-4 p-2 bg-white text-black' type="email" placeholder='Email' name='email' required={true} />
            </div>
            <input className='mb-4 p-2 bg-white text-black' type="text" placeholder='Subject' name='subject' />

            <textarea className='bg-white text-black p-2' name="message" rows="5" placeholder='Message' required={true}></textarea>
            <div className=''>
              <button className='flat-btn my-8 '>SUBMIT<ImSpinner2 className={isSending ? 'animate-spin h-5 w-5 ml-3' : 'hidden'} viewBox="0 0 16 16" /></button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default ContactContent