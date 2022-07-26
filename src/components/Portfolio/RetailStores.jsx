import React, { useState, useRef, useEffect } from 'react'
import { VscClose } from 'react-icons/vsc'
import RetailStoresCover from '../../assets/Portfolio/RetailStores/retail_stores_cover.jpg'
import Img1 from '../../assets/Portfolio/RetailStores/kohls/k1.jpeg'
import Img2 from '../../assets/Portfolio/RetailStores/kohls/k2.jpeg'
import Img3 from '../../assets/Portfolio/RetailStores/kohls/k3.jpeg'
import Img4 from '../../assets/Portfolio/RetailStores/kohls/k4.jpeg'
import Img5 from '../../assets/Portfolio/RetailStores/kohls/k5.jpeg'
import Img6 from '../../assets/Portfolio/RetailStores/kohls/k6.jpeg'
import Img7 from '../../assets/Portfolio/RetailStores/kohls/k7.jpeg'
import Img8 from '../../assets/Portfolio/RetailStores/maxmara/mm1.jpeg'
import Img9 from '../../assets/Portfolio/RetailStores/molton_brown/mb1.jpeg'
import Img10 from '../../assets/Portfolio/RetailStores/molton_brown/mb2.jpeg'
import Img11 from '../../assets/Portfolio/RetailStores/molton_brown/mb3.jpeg'
import Img12 from '../../assets/Portfolio/RetailStores/molton_brown/mb4.jpeg'
import Footer from '../Footer'

const RetailStores = () => {

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
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
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
      <img src={RetailStoresCover} className='main-bg-img' />

      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>RETAIL STORES PORTFOLIO</p>
        </div>

        <div className='main-desc-section'>
          <p>
            Something about retail stores will go here
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

export default RetailStores