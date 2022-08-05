import React, {useEffect} from 'react'
import ContactImg from '../assets/Contact/contact_main.jpg'

const Contact = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='w-full h-screen'>
      <img src={ContactImg} className='main-bg-img' />
      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>CONTACT INFO</p>
        </div>

        <div className='main-desc-section'>
          <p>
            Reach out to us by phone, email, or submit the form below and we will get back you within a business day!
          </p>
        </div>
      </div>
    </div>
    )
}

export default Contact