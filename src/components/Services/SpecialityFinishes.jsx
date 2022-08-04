import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import SpecialityImg from '../../assets/Services/speciality.jpg'

const SpecialityFinishes = () => {

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
            <p className='sss-title'>Speciality Finishes</p>
            <ul className='marker:text-red-600 list-outside list-disc ml-6 leading-8'>
              <li>
                Scuffmaster Paint-better performance than regular latex epoxy paints with a product that's waterbased, LEED 
                compliant, easier to use and much better looking.
              </li>
              <li>
                Mathew’s Paint - provide a long-lasting, UV resistant finish that boasts unsurpassed color and gloss retention. With 
                three different lines to choose from-including the environmentally friendly MAP Ultra Low VOC- and unlimited color 
                options, there is a topcoat to meet any project requirement.
              </li>
              <li>
                Field Master - Field Master features great color and gloss retention and excellent weathering properties. Compatible 
                over steel, aluminum, photopolymer, acrylic and wood.
              </li>
            </ul>
          </div>
          <div className='sss-image'>
            <img src={SpecialityImg} />
          </div>
        </div>
      </div>

    </div>  
  )
}

export default SpecialityFinishes