import React, { useState, useRef, useEffect } from 'react'
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
  
  const myRef = useRef()
  const executeScroll = () => myRef.current.scrollIntoView();
  // Makes sure page starts on top of section when rendered
  useEffect(() => {
    executeScroll()
  }, [])

  return (
    <div ref={myRef} className='w-full flex flex-col bg-slate-50'>
      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>SELF STORAGE PORTFOLIO</p>
        </div>

        <div className='main-desc-section'>
          <p>
            Something about self storage will go here
          </p>
        </div>
      </div>
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