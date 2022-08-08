import React, { useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { FaCheck } from 'react-icons/fa'

const ContactContent = () => {

  const [didSend, setMessage] = useState(false);
  const [isSending, setSending] = useState(false);

  return (
    <div className='w-full bg-slate-50'>
      <div className='max-w-screen-xl mx-auto w-full h-full flex flex-col justify-center items-center py-8'>
        <div className='grid md:grid-cols-2 gap-8 md:gap-16 p-4 md:px-8 w-full'>

          {/* Information */}
          <div className='grid sm:grid-cols-2 gap-8'>
            {/* Item */}
            <div className='ci-item'>
              <p className='ci-title'>Address</p>
              <p>420 River Road</p>
              <p>North Arlington, NJ 07031</p>
            </div>
            {/* Item */}
            <div className='ci-item'>
              <p className='ci-title'>Phone</p>
              <p>(201) 998-0700</p>
            </div>
            {/* Item */}
            <div className='ci-item'>
              <p className='ci-title'>Email</p>
              <p>info@dellpainting.com</p>
            </div>
            {/* Item */}
            <div className='ci-item'>
              <p className='ci-title'>Fax</p>
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
              <input className='form-field' type="text" placeholder='Name' name='name' required={true} />
              <input className='form-field' type="email" placeholder='Email' name='email' required={true} />
            </div>
            <input className='form-field' type="text" placeholder='Subject' name='subject' />

            <textarea className='form-field' name="message" rows="5" placeholder='Message' required={true}></textarea>
            <div className=''>
              <button className='flat-btn my-8 '>SUBMIT<ImSpinner2 className={isSending ? 'animate-spin h-5 w-5 ml-3' : 'hidden'} viewBox="0 0 16 16" /></button>
            </div>
          </form>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.2604638006314!2d-74.13694196526164!3d40.79888296866908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c255e863c7b6bf%3A0xee9f2284f5ba4790!2s420%20River%20Rd%2C%20North%20Arlington%2C%20NJ%2007031!5e0!3m2!1sen!2sus!4v1589060192333!5m2!1sen!2sus" className='p-4 md:px-8 py-4 md:my-16' width="100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>           

      </div>
      
    </div>
  )
}

export default ContactContent