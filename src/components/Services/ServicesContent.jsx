import React from 'react'
import MaintenanceThmb from '../../assets/maintenance_thmb.png'
import WallcoveringThmb from '../../assets/wallcovering_thmb.png'
import MinwaxThmb from '../../assets/minwax_thmb.png'
import SpecialityThmb from '../../assets/speciality_thmb.jpg'
import SpackleThmb from '../../assets/spackle_thmb.png'
import WalltalkersThmb from '../../assets/walltalkers_thmb.png'
import SkimThmb from '../../assets/skim.png'
import NewConstructiong from '../../assets/new_construction_thmb.jpg'

const ServicesContent = () => {
    return (
        <div className='w-full flex flex-col p-4 md:px-8 md:py-16 bg-slate-50'>
            <div className='max-w-screen-xl w-full h-full mx-auto'>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16'>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceThmb})` }} className='card services-card-img'>
                        <span className='card-title'>MAINTENANCE</span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${NewConstructiong})` }} className='card services-card-img'>
                        <span className='card-title'>NEW CONSTRUCTION</span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${WallcoveringThmb})` }} className='card services-card-img'>
                        <span className='card-title'>WALLCOVERING </span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SpecialityThmb})` }} className='card services-card-img'>
                        <span className='card-title'>SPECIALITY FINISHES</span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MaintenanceThmb})` }} className='card services-card-img'>
                        <span className='card-title'>FRP PANELS </span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SpackleThmb})` }} className='card services-card-img'>
                        <span className='card-title'>SPACKLE </span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${MinwaxThmb})` }} className='card services-card-img'>
                        <span className='card-title'>MINWAX STAINING </span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${SkimThmb})` }} className='card services-card-img'>
                        <span className='card-title'>SKIM COATING/LEVEL 5 FINISH </span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${WalltalkersThmb})` }} className='card services-card-img'>
                        <span className='card-title'>WALLTALKERS </span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ServicesContent