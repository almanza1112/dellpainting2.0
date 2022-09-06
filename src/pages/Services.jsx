import React,{useEffect}from 'react'
import { Link } from 'react-router-dom'
import ServicesImg from '../assets/Services/services_main.jpg'
import MaintenanceThmb from '../assets/Services/maintenance_thmb.png'
import WallcoveringThmb from '../assets/Services/wallcovering_thmb.png'
import MinwaxThmb from '../assets/Services/minwax_thmb.png'
import SpecialityThmb from '../assets/Services/speciality_thmb.jpg'
import SpackleThmb from '../assets/Services/spackle_thmb.png'
import WalltalkersThmb from '../assets/Services/walltalkers_thmb.png'
import SkimThmb from '../assets/Services/skim.png'
import NewConstructiong from '../assets/Services/new_construction_thmb.jpg'
import FRPPanelsThmb from '../assets/Services/frp_panels_thmb.jpg'
import PowerWashingThmb from '../assets/Services/power_washing.png'
import Footer from '../components/Footer'


const Services = () => {

  // Makes sure page starts on top when rendered
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='w-full flex flex-col bg-slate-50'>
      <img src={ServicesImg} className='main-bg-img' />
      <div className='main-content'>
        <div className='main-title-section'>
          <p className='main-title-top'>OUR</p>
          <p className='main-title-bottom'>SERVICES</p>
        </div>

        <div className='main-desc-section'>
          <p>
            Throughout the many years of service, our amazing team has expanded to more than 
            just painting. We offer a diverse number services as you see below, each delivered 
            with top quality and expectactions. Please reach out to us if you are looking for
            something specific and do not see it here.   
          </p>
        </div>
      </div>
      <div className='max-w-screen-xl w-full h-full mx-auto p-4 md:px-8 md:pb-16'>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16'>
          {/* Item */}
          <Link to={'/services/maintenance'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceThmb})` }} className='card services-card-img'>
              <span className='card-title'>Maintenance</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/services/newconstruction'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${NewConstructiong})` }} className='card services-card-img'>
              <span className='card-title'>New Construction</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/services/wallcovering'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${WallcoveringThmb})` }} className='card services-card-img'>
              <span className='card-title'>Wallcovering </span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/services/speciality'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SpecialityThmb})` }} className='card services-card-img'>
              <span className='card-title'>Speciality Finishes</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/services/frppanels'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${FRPPanelsThmb})` }} className='card services-card-img'>
              <span className='card-title'>FRP Panels </span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/services/spackle'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SpackleThmb})` }} className='card services-card-img'>
              <span className='card-title'>Spackle </span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/services/minwax'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MinwaxThmb})` }} className='card services-card-img'>
              <span className='card-title'>Minwax Staining</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/services/skim'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SkimThmb})` }} className='card services-card-img'>
              <span className='card-title'>Skim Coating / Level 5 Finish</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/services/walltalkers'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${WalltalkersThmb})` }} className='card services-card-img'>
              <span className='card-title'>Walltalkers</span>
            </div>
          </Link>

          {/* Item */}
          <Link to={'/services/powerwashing'}>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${PowerWashingThmb})` }} className='card services-card-img'>
              <span className='card-title'>Power Washing</span>
            </div>
          </Link>

        </div>
      </div>
      <Footer/>            
    </div>
  )
}

export default Services