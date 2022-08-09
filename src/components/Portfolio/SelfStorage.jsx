import React, { useState } from 'react'
import {VscClose} from 'react-icons/vsc'
import Img1 from '../../assets/Portfolio/SelfStorage/cube_smart_self_storage/csss1.jpg'
import Img2 from '../../assets/Portfolio/SelfStorage/cube_smart_self_storage/csss2.jpg'
import Img3 from '../../assets/Portfolio/SelfStorage/extraspace_self_storage_ridgefield/essr1.jpg'
import Img4 from '../../assets/Portfolio/SelfStorage/extraspace_self_storage_ridgefield/essr2.jpg'


const SelfStorage = () => {

  let data =[
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
          <img src={tempImgSrc} />
          <VscClose size={40} color='#FFFFFF' onClick={()=>setModel(false)}/>
        </div>

        <div className='gallery'>
          {data.map((item, index)=>{
            return(
              <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
                <img src={item.imgSrc} style={{width: '100%'}}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SelfStorage