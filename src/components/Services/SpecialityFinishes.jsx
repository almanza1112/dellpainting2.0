import React, { useEffect } from 'react'
import SpecialityImg from '../../assets/Services/speciality.jpg'
import Footer from '../Footer';

const SpecialityFinishes = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='sss-style'>
      <div className='sss-container'>
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
      <Footer/>
    </div>  
  )
}

export default SpecialityFinishes