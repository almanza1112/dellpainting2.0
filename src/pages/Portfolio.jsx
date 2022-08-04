import React, {useEffect} from 'react'
import PortfolioImg from '../assets/portfolio.jpg'


const Portfolio = () => {
  
  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-full h-screen bg-slate-50'>
      <img src={PortfolioImg} className='main-bg-img' />
      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>PORTFOLIO</p>
        </div>

        <div className='main-desc-section'>
          <p>
            From office buildings to restuarants, we have done it all and our clients have always 
            been more than 100% satisfied. Here is just a small sample of our work over the years.
          </p>
        </div>
      </div>
    </div>
    )
}

export default Portfolio