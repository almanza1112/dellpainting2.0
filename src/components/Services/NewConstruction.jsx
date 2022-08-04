import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import NewConstructionImg from '../../assets/Services/new_construction.jpg'

const NewConstruction = () => {

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
            <p className='sss-title'>New Construction</p>
            <p>Interior Painting - Walls, Ceilings, Baseboard, Crown-Molding, Chair-rails, Doors and Frames, 
              Shoe- molding, Wainscoting, Window Trims.
            </p>
          </div>
          <div className='sss-image'>
            <img src={NewConstructionImg} />
          </div>
        </div>
      </div>

    </div>  
    )
}

export default NewConstruction