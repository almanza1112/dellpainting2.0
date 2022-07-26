import React, { useEffect, useRef, useState } from 'react'
import { VscClose } from 'react-icons/vsc'
import ApartmentsCover from '../../assets/Portfolio/Apartments/apartments_cover.jpg'
import Img1 from '../../assets/Portfolio/Apartments/carraway_apartments/ca1.jpeg'
import Img2 from '../../assets/Portfolio/Apartments/carraway_apartments/ca2.jpeg'
import Img3 from '../../assets/Portfolio/Apartments/carraway_apartments/ca3.jpeg'
import Img4 from '../../assets/Portfolio/Apartments/the_ridge_at_north_arlington/trana1.jpeg'
import Img5 from '../../assets/Portfolio/Apartments/the_ridge_at_north_arlington/trana2.jpeg'
import Img6 from '../../assets/Portfolio/Apartments/vermella_kearny/vk1.jpeg'
import Img7 from '../../assets/Portfolio/Apartments/vermella_kearny/vk2.jpeg'
import Footer from '../../components/Footer'


const Apartments = () => {

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
      <img src={ApartmentsCover} className='main-bg-img' />

      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>APARTMENTS PORTFOLIO</p>
        </div>

        <div className='main-desc-section'>
          <p>
            Something about apartments will go here
          </p>
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto px-4 py-8 md:px-8 md:pb-16'>
        <div className={model ? 'model open' : 'model'}>
          <img src={tempImgSrc} />
          <VscClose size={40} color='#FFFFFF' onClick={() => setModel(false)} />
        </div>

        <div className='gallery'>
          {data.map((item, index) => {
            return (
              <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} style={{ width: '100%' }} />
              </div>
            )
          })}
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Apartments