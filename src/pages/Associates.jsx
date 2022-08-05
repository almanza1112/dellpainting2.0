import React, {useEffect} from 'react'
import AssociatesImg from '../assets/Associates/associates_main.jpg'

const Associates = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='w-full h-screen'>
      <img src={AssociatesImg} className='main-bg-img' />
      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>ASSOCIATES</p>
        </div>

        <div className='main-desc-section'>
          <p>
            After so many years of business, we have worked with many clients that 
            have been left nothing less than 100% satisfied as well as trusted 
            manufactures that we do daily business with and help us deliver quality 
            products to our new and recurring clients.
          </p>
        </div>
      </div>
    </div>
    )
}

export default Associates