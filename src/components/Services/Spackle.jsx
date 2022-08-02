import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import SpackleImg from '../../assets/spackle.png'

const Spackle = () => {

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

    </div>
  )
}

export default Spackle