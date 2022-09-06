import React, { useEffect } from 'react'
import WallcoveringImg from '../../assets/Services/wallcovering.png'
import Footer from '../Footer';

const Wallcovering = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='sss-style'>
      <div className='sss-container'>
        <div className='sss-content'>
          <div className='sss-text'>
            <p className='sss-title'>Wallcovering</p>
            <ul className='marker:text-red-600 list-outside list-disc ml-6 leading-8'>
              <li>
                Commercial Wallcovering: Type I and Type II classified Wallpaper for both commercial and residential projects. 
                The types will vary depending on higher or lower traffic areas.
              </li>
              <li>
                Type I: Light Duty, Commercial Grade Vinyl Wallcovering
              </li>
              <li>
                Type II: Most widely used for Commercial Interiors.
              </li>
              <li>
                Silk: Luxurious and rich colored.
              </li>
              <li>
                Wall Murals: Digital images from Photographs or Illustrations that will stand out while still fitting the style and 
                décor of a room. The prints are large, as not to be repetitive like wallcovering.
              </li>
              <li>
                Fabric Wrapped Panels: Cloth wrapped sound absorbing wall panels that are designed to absorb unwelcome background 
                noise inside you space, reducing the echoes, and delivering premium sound quality back to your room.
              </li>
            </ul>
          </div>
          <div className='sss-image'>
            <img src={WallcoveringImg} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>  
  )
}

export default Wallcovering