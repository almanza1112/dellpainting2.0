import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import PortfolioImg from '../assets/Portfolio/portfolio_main.jpg'
import ApartmentsThmb from '../assets/Portfolio/Apartments/apartments_cover.jpg'
import SeniorLivingsThmb from '../assets/Portfolio/SeniorLivings/senior_livings_cover.jpg'
import RetailStores from '../assets/Portfolio/RetailStores/retail_stores_cover.jpg'
import HotelsThmb from '../assets/Portfolio/Hotels/hotels_cover.jpg'
import EntertainmentThmb from '../assets/Portfolio/Entertainment/entertainment_cover.jpg'
import RestaurantsThmb from '../assets/Portfolio/Restaurants/restaurants_cover.jpg'
import BanksThmb from '../assets/Portfolio/Banks/banks_cover.jpg'
import OfficesThmb from '../assets/Portfolio/Offices/offices_cover.jpg'
import CarDealershipThmb from '../assets/Portfolio/CarDealerships/car_dealerships_cover.jpg'
import SelfStorageThmb from '../assets/Portfolio/SelfStorage/self_storage_cover.png'
import Footer from '../components/Footer'


const Portfolio = () => {
  
  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-full flex flex-col bg-slate-50'>
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
      <div className='max-w-screen-xl w-full h-full mx-auto p-4 md:px-8 md:pb-16'>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16'>
          {/* Item */}
          <Link to={'/portfolio/apartments'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${ApartmentsThmb})` }} className='card portfolio-card-img'>
              <span className='card-title'>Apartments</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/portfolio/seniorlivings'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SeniorLivingsThmb})` }} className='card portfolio-card-img'>
              <span className='card-title'>Senior Livings</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/portfolio/retailstores'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${RetailStores})` }} className='card portfolio-card-img'>
              <span className='card-title'>Retail Stores</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/portfolio/hotels'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${HotelsThmb})` }} className='card portfolio-card-img'>
              <span className='card-title'>Hotels</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/portfolio/entertainment'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${EntertainmentThmb})` }} className='card portfolio-card-img'>
              <span className='card-title'>Entertainment</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/portfolio/restaurants'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${RestaurantsThmb})` }} className='card portfolio-card-img'>
              <span className='card-title'>Restaurants</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/portfolio/banks'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${BanksThmb})` }} className='card portfolio-card-img'>
              <span className='card-title'>Banks</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/portfolio/offices'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${OfficesThmb})` }} className='card portfolio-card-img'>
              <span className='card-title'>Offices</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/portfolio/cardealerships'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${CarDealershipThmb})` }} className='card portfolio-card-img'>
              <span className='card-title'>Car Dealerships</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/portfolio/selfstorage'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SelfStorageThmb})` }} className='card portfolio-card-img'>
              <span className='card-title'>Self Storage</span>
            </div>
          </Link>

        </div>

      </div>
      <Footer/>
    </div>
    )
}

export default Portfolio