import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import FRPPanelsImg from '../../assets/frp_panels.jpg'

const FRPPanels = () => {

  const myRef = useRef()
  const executeScroll = () => myRef.current.scrollIntoView();
  // Makes sure page starts on top of section when rendered
  useEffect(() => {
    executeScroll()
  }, [])

  return (
    <div ref={myRef} className='sss-style'>
      <div className='sss-container'>
        <Link to={'/services'} className='sss-back'>
          <MdOutlineArrowBackIosNew size={20} /><span className='sss-back-text'>Other Services</span>
        </Link>
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

    </div>
  )
}

export default FRPPanels