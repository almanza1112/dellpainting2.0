import React, { useEffect } from 'react'
import FRPPanelsImg from '../../assets/Services/frp_panels.jpg'
import Footer from '../Footer';

const FRPPanels = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='sss-style'>
      <div className='sss-container'>
        <div className='sss-content'>
          <div className='sss-text'>
            <p className='sss-title'>FRP Panels</p>
            <p>Fiberglass reinforced plastic panels that are ideal for new or retrofit construction. FRP 
              panels are specially engineered to provide durability, easy maintenance and sanitation with 
              exceptional physical and mechanical properties.
            </p>
          </div>
          <div className='sss-image'>
            <img src={FRPPanelsImg} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FRPPanels