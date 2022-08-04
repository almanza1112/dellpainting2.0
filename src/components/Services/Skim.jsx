import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import SkimImg from '../../assets/Services/skim.png'

const Skim = () => {

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
            <p className='sss-title'>SKIM COATING / LEVEL 5 FINISH</p>
            <p>A texturing technique use to make a wall smooth and hide any imperfect taping job, giving the wall or ceiling a 
              plaster-like appearance and in situation when only the smoothest surface will do. This finish is recommended where 
              the paint finish will be glossy and/or where light will be coming from an angle low enough to highlight bumps and 
              imperfections.
            </p>
          </div>
          <div className='sss-image'>
            <img src={SkimImg} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skim