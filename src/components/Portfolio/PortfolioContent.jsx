import React from 'react'
import MaintenanceImg from '../../assets/maintenance.png'

const PortfolioContent = () => {
  return (
    <div className='w-full flex flex-col p-4 md:px-8 md:py-16 bg-slate-50'>
        <div className='max-w-screen-xl w-full h-full mx-auto'>
              {/* Container */}
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16'>
                  {/* Item */}
                  <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                      <span className='card-title'>Apartments</span>
                  </div>
                  {/* Item */}
                  <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                      <span className='card-title'>Senior Livings</span>
                  </div>
                  {/* Item */}
                  <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                      <span className='card-title'>Retail Stores</span>
                  </div>
                  {/* Item */}
                  <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                      <span className='card-title'>Hotels</span>
                  </div>
                  {/* Item */}
                  <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                      <span className='card-title'>Entertainment</span>
                  </div>
                  {/* Item */}
                  <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                      <span className='card-title'>Restaurants</span>
                  </div>
                  {/* Item */}
                  <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                      <span className='card-title'>Banks</span>
                  </div>
                  {/* Item */}
                  <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                      <span className='card-title'>Offices</span>
                  </div>
                  {/* Item */}
                  <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                      <span className='card-title'>Car Dealerships</span>
                  </div>
                  {/* Item */}
                  <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                      <span className='card-title'>Self Storage</span>
                  </div>
              </div>
        
        </div>
    </div>
  )
}

export default PortfolioContent