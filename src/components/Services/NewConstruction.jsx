import React, { useEffect } from 'react'
import NewConstructionImg from '../../assets/Services/new_construction.jpg'
import Footer from '../Footer';

const NewConstruction = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='sss-style'>
      <div className='sss-container'>
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
      <Footer />
    </div>  
    )
}

export default NewConstruction