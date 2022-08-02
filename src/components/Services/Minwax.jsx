import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import MinwaxImg from '../../assets/minwax.png'

const Minwax = () => {

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

    </div>
  )
}

export default Minwax