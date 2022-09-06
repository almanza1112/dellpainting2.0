import React, { useEffect } from 'react'
import SkimImg from '../../assets/Services/skim.png'
import Footer from '../Footer';

const Skim = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='sss-style'>
      <div className='sss-container'>
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
      <Footer/>
    </div>
  )
}

export default Skim