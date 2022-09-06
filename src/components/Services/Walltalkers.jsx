import React, { useEffect } from 'react'
import WalltalkersImg from '../../assets/Services/walltalkers.png'
import Footer from '../Footer';

const Walltalkers = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='sss-style'>
      <div className='sss-container'>
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
      <Footer/>
    </div>
  )
}

export default Walltalkers