import React, { useEffect } from 'react'
import MinwaxImg from '../../assets/Services/minwax.png'
import Footer from '../Footer'

const Minwax = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='sss-style'>
      <div className='sss-container'>
        <div className='sss-content'>
          <div className='sss-text'>
            <p className='sss-title'>Minwax Staining</p>
            <p>From furniture to floors, Minwax products will beautify and protect wood. For superior durability and long-lasting 
              beauty, the choice is clear protective clear.
            </p>
          </div>
          <div className='sss-image'>
            <img src={MinwaxImg} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Minwax