import React from 'react'
import {Link} from 'react-router-dom'
import MaintenanceThmb from '../../assets/Services/maintenance_thmb.png'
import WallcoveringThmb from '../../assets/Services/wallcovering_thmb.png'
import MinwaxThmb from '../../assets/Services/minwax_thmb.png'
import SpecialityThmb from '../../assets/Services/speciality_thmb.jpg'
import SpackleThmb from '../../assets/Services/spackle_thmb.png'
import WalltalkersThmb from '../../assets/Services/walltalkers_thmb.png'
import SkimThmb from '../../assets/Services/skim.png'
import NewConstructiong from '../../assets/Services/new_construction_thmb.jpg'
import FRPPanelsThmb from '../../assets/Services/frp_panels_thmb.jpg'

const ServicesContent = () => {
    return (
        <div className='w-full flex flex-col p-4 md:px-8 md:pb-16 bg-slate-50'>
            <div className='max-w-screen-xl w-full h-full mx-auto'>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16'>
                    {/* Item */}
                    <Link to={'maintenance'}>
                        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceThmb})` }} className='card services-card-img'>
                            <span className='card-title'>Maintenance</span>
                        </div>
                    </Link>

                    {/* Item */}
                    <Link to={'newconstruction'}>
                        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${NewConstructiong})` }} className='card services-card-img'>
                            <span className='card-title'>New Construction</span>
                        </div>
                    </Link>
    
                    {/* Item */}
                    <Link to={'wallcovering'}>
                        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${WallcoveringThmb})` }} className='card services-card-img'>
                            <span className='card-title'>Wallcovering </span>
                        </div>
                    </Link>
                    
                    {/* Item */}
                    <Link to={'speciality'}>
                        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SpecialityThmb})` }} className='card services-card-img'>
                            <span className='card-title'>Speciality Finishes</span>
                        </div>
                    </Link>
                   
                    {/* Item */}
                    <Link to={'frppanels'}>
                        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${FRPPanelsThmb})` }} className='card services-card-img'>
                            <span className='card-title'>FRP Panels </span>
                        </div>
                    </Link>
                    
                    {/* Item */}
                    <Link to={'spackle'}>
                        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SpackleThmb})` }} className='card services-card-img'>
                            <span className='card-title'>Spackle </span>
                        </div>
                    </Link>
                    
                    {/* Item */}
                    <Link to={'minwax'}>
                        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MinwaxThmb})` }} className='card services-card-img'>
                            <span className='card-title'>Minwax Staining</span>
                        </div>
                    </Link>
                    
                    {/* Item */}
                    <Link to={'skim'}>
                        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SkimThmb})` }} className='card services-card-img'>
                            <span className='card-title'>Skim Coating / Level 5 Finish</span>
                        </div>
                    </Link>
                    
                    {/* Item */}
                    <Link to={'walltalkers'}>
                        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${WalltalkersThmb})` }} className='card services-card-img'>
                            <span className='card-title'>Walltalkers</span>
                        </div>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}

export default ServicesContent