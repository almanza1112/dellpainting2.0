import React, { useState, useEffect, useRef } from 'react'
import { VscClose } from 'react-icons/vsc'
import BanksCover from '../../assets/Portfolio/Banks/banks_cover.jpg'
import Img1 from '../../assets/Portfolio/Banks/kearny_bank/kb1.jpeg'
import Footer from '../../components/Footer'


const Banks = () => {

  let data = [
    {
      id: 1,
      imgSrc: Img1,
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
      <img src={BanksCover} className='main-bg-img' />

      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>BANKS PORTFOLIO</p>
        </div>

        <div className='main-desc-section'>
          <p>
            Something about banks will go here
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

export default Banks