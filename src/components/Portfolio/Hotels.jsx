import React, { useState } from 'react'
import { VscClose } from 'react-icons/vsc'
import Img1 from '../../assets/Portfolio/Hotels/hilton/Hilton1.jpeg'
import Img2 from '../../assets/Portfolio/Hotels/hilton/Hilton2.jpeg'
import Img3 from '../../assets/Portfolio/Hotels/hilton/Hilton3.jpeg'

const Hotels = () => {

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
    }
  ]

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <div className='w-full bg-slate-50'>
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
    </div>
  )
}

export default Hotels