import React, { useState, useRef, useEffect } from 'react'
import { VscClose } from 'react-icons/vsc'
import RestaurantsCover from '../../assets/Portfolio/Restaurants/restaurants_cover.jpg'
import Img1 from '../../assets/Portfolio/Restaurants/applebees/ab1.jpeg'
import Img2 from '../../assets/Portfolio/Restaurants/applebees/ab2.jpeg'
import Img3 from '../../assets/Portfolio/Restaurants/applebees/ab3.jpeg'
import Img4 from '../../assets/Portfolio/Restaurants/applebees/ab4.jpeg'
import Img5 from '../../assets/Portfolio/Restaurants/chik_fil_a/cf1.jpeg'
import Img6 from '../../assets/Portfolio/Restaurants/chik_fil_a/cf2.jpeg'
import Img7 from '../../assets/Portfolio/Restaurants/chik_fil_a/cf3.jpeg'
import Footer from '../Footer'


const Restaurants = () => {

  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    }
  ]

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  const myRef = useRef()
  const executeScroll = () => myRef.current.scrollIntoView();
  // Makes sure page starts on top of section when rendered
  useEffect(() => {
    executeScroll()
  }, [])

  return (
    <div ref={myRef} className='w-full flex flex-col bg-slate-50'>
      <img src={RestaurantsCover} className='main-bg-img' />

      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>RESTAURANTS PORTFOLIO</p>
        </div>

        <div className='main-desc-section'>
          <p>
            Something about restaurants will go here
          </p>
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto px-4 py-8 md:px-8 md:pb-16'>
        <div className={model ? 'model open' : 'model'}>
          <img src={tempImgSrc} alt='' />
          <VscClose size={40} color='#FFFFFF' onClick={() => setModel(false)} />
        </div>

        <div className='gallery'>
          {data.map((item, index) => {
            return (
              <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} style={{ width: '100%' }} alt='' />
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Restaurants