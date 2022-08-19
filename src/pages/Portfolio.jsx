import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import PortfolioImg from '../assets/Portfolio/portfolio_main.jpg'


const Portfolio = () => {
  
  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-full bg-slate-50'>
      <img src={PortfolioImg} className='main-bg-img' />
      <Outlet />
    </div>
    )
}

export default Portfolio