import React,{useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import MaintenanceImg from '../../assets/maintenance.png'

const Maintenance = () => {

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

    </div>
  )
}

export default Maintenance