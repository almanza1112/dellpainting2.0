import React from 'react'
import { Link } from 'react-router-dom'
import MaintenanceImg from '../../assets/Services/maintenance.png'

const PortfolioContent = () => {
  return (
    <div className='w-full flex flex-col p-4 md:px-8 md:pb-16 bg-slate-50'>
        <div className='max-w-screen-xl w-full h-full mx-auto'>
              {/* Container */}
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16'>
                  {/* Item */}
                  <Link to={'apartments'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Apartments</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'seniorlivings'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Senior Livings</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'retailstores'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Retail Stores</span>
                      </div>
                  </Link>
                 
                  {/* Item */}
                  <Link to={'hotels'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Hotels</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'entertainment'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Entertainment</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'restaurants'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Restaurants</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'banks'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Banks</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'offices'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Offices</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'cardealerships'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Car Dealerships</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'selfstorage'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceImg})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Self Storage</span>
                      </div>
                  </Link>
                  
              </div>
        
        </div>
    </div>
  )
}

export default PortfolioContent