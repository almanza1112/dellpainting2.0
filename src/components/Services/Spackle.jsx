import React, { useEffect } from 'react'
import SpackleImg from '../../assets/Services/spackle.png'
import Footer from '../Footer';

const Spackle = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='sss-style'>
      <div className='sss-container'>
        <div className='sss-content'>
          <div className='sss-text'>
            <p className='sss-title'>Spackle</p>
            <p>Repairing smaller damage to drywall or plaster. Filling small dings and dents, like nail holes in walls. Repair 
              or fill a hole to produce a smooth surface.
            </p>
          </div>
          <div className='sss-image'>
            <img src={SpackleImg} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Spackle