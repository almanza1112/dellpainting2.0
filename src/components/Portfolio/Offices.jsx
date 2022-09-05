import React, { useState, useRef, useEffect } from 'react'
import { VscClose } from 'react-icons/vsc'
import OfficesCover from '../../assets/Portfolio/Offices/offices_cover.jpg'
import Img1 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip1.jpeg'
import Img2 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip2.jpeg'
import Img3 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip3.jpeg'
import Img4 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip4.jpeg'
import Img5 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip5.jpeg'
import Img6 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip6.jpeg'
import Img7 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip7.jpeg'
import Img8 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip8.jpeg'
import Img9 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip9.jpeg'
import Img10 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip10.jpeg'
import Img11 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip11.jpeg'
import Img12 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip12.jpeg'
import Img13 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip13.jpeg'
import Img14 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip14.jpeg'
import Img15 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip15.jpeg'
import Img16 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip16.jpeg'
import Img17 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip17.jpeg'
import Img18 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip18.jpeg'
import Img19 from '../../assets/Portfolio/Offices/insmed_pharmaceutical/ip19.jpeg'
import Img20 from '../../assets/Portfolio/Offices/solvay/s1.jpeg'
import Img21 from '../../assets/Portfolio/Offices/solvay/s2.jpeg'
import Img22 from '../../assets/Portfolio/Offices/solvay/s3.jpeg'
import Img23 from '../../assets/Portfolio/Offices/solvay/s4.jpeg'
import Img24 from '../../assets/Portfolio/Offices/solvay/s5.jpeg'
import Footer from '../Footer'


const Offices = () => {

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
    },
    {
      id: 13,
      imgSrc: Img13,
    },
    {
      id: 14,
      imgSrc: Img14,
    },
    {
      id: 15,
      imgSrc: Img15,
    },
    {
      id: 16,
      imgSrc: Img16,
    },
    {
      id: 17,
      imgSrc: Img17,
    },
    {
      id: 18,
      imgSrc: Img18,
    },
    {
      id: 19,
      imgSrc: Img19,
    },
    {
      id: 20,
      imgSrc: Img20,
    },
    {
      id: 21,
      imgSrc: Img21,
    }
    ,
    {
      id: 22,
      imgSrc: Img22,
    },
    {
      id: 23,
      imgSrc: Img23,
    },
    {
      id: 24,
      imgSrc: Img24,
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
      <img src={OfficesCover} className='main-bg-img' />

      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>OFFICES PORTFOLIO</p>
        </div>

        <div className='main-desc-section'>
          <p>
            Something about offices will go here
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
      <Footer/>
    </div>
  )
}

export default Offices