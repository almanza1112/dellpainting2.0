import React,{useEffect } from 'react'
import MaintenanceImg from '../../assets/Services/maintenance.png'
import Footer from '../Footer';

const Maintenance = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='sss-style'>
      <div className='sss-container'>
        
        <div className='sss-content'>
          <div className='sss-text'>
            <p className='sss-title'>Maintenance</p>
            <p>Restoring original color on the walls. Updating Colors and Wallcovering for a 
              more updated and unique look. Repairing any damages prior to restoring 
              surfaces.
            </p>
          </div>
          <div className='sss-image'>
            <img src={MaintenanceImg} />
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Maintenance