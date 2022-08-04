import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import WalltalkersImg from '../../assets/Services/walltalkers.png'

const Walltalkers = () => {

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
            <p className='sss-title'>Walltalkers</p>
            <p>Transform one’s wall into a canvas for dry-erase writing, while simultaneously serving as a non-glare, magnetic 
              screen for projected content. Walltalkers offers innovative solutions for educational environments, conference rooms, 
              hospitals, training areas, restaurants and retail settings.
            </p>
          </div>
          <div className='sss-image'>
            <img src={WalltalkersImg} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Walltalkers