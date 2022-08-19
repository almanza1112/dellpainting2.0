import React from 'react'
import { Link } from 'react-router-dom'
import ApartmentsThmb from '../../assets/Portfolio/thumbnails/apartments_thumbnail.jpg'
import SeniorLivingsThmb from '../../assets/Portfolio/thumbnails/senior_living_thumbnail.jpg'
import RetailStores from '../../assets/Portfolio/thumbnails/retail_thumbnail.jpg'
import HotelsThmb from '../../assets/Portfolio/thumbnails/hotel_thumbnail.jpg'
import EntertainmentThmb from '../../assets/Portfolio/thumbnails/entertainment_thumbnail.jpg'
import RestaurantsThmb from '../../assets/Portfolio/thumbnails/restaurants_thumbnail.jpg'
import BanksThmb from '../../assets/Portfolio/thumbnails/banks_thumbnail.jpg'
import OfficesThmb from '../../assets/Portfolio/thumbnails/offices_thumbnail.jpg'
import CarDealershipThmb from '../../assets/Portfolio/thumbnails/car_dealerships_thumbnail.jpg'
import SelfStorageThmb from '../../assets/Portfolio/thumbnails/self_storage_thumbnail.jpg'


const PortfolioContent = () => {
  return (
    <div className='w-full flex flex-col bg-slate-50'>
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
          <div className='max-w-screen-xl w-full h-full mx-auto p-4 md:px-8 md:pb-16'>
             
              {/* Container */}
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16'>
                  {/* Item */}
                  <Link to={'apartments'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${ApartmentsThmb})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Apartments</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'seniorlivings'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SeniorLivingsThmb})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Senior Livings</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'retailstores'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${RetailStores})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Retail Stores</span>
                      </div>
                  </Link>
                 
                  {/* Item */}
                  <Link to={'hotels'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${HotelsThmb})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Hotels</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'entertainment'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${EntertainmentThmb})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Entertainment</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'restaurants'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${RestaurantsThmb})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Restaurants</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'banks'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${BanksThmb})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Banks</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'offices'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${OfficesThmb})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Offices</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'cardealerships'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${CarDealershipThmb})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Car Dealerships</span>
                      </div>
                  </Link>
                  
                  {/* Item */}
                  <Link to={'selfstorage'}>
                      <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SelfStorageThmb})` }} className='card portfolio-card-img'>
                          <span className='card-title'>Self Storage</span>
                      </div>
                  </Link>
                  
              </div>
        
        </div>
    </div>
  )
}

export default PortfolioContent