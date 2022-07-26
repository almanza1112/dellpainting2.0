import React from 'react'
import MaintenanceImg from '../../assets/maintenance.jpeg'

const ServicesContent = () => {
    return (
        <div className='w-full flex flex-col p-4 md:px-8 md:py-16 bg-slate-50'>
            <div className='max-w-screen-xl w-full h-full mx-auto'>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16'>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${MaintenanceImg})` }} className='services-item group services-item-img'>
                        <span className='services-item-title'>MAINTENANCE</span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${MaintenanceImg})` }} className='services-item group services-item-img'>
                        <span className='services-item-title'>NEW CONSTRUCTION</span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${MaintenanceImg})` }} className='services-item group services-item-img'>
                        <span className='services-item-title'>WALLCOVERING </span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${MaintenanceImg})` }} className='services-item group services-item-img'>
                        <span className='services-item-title'>SPECIALiTY FINISHES</span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${MaintenanceImg})` }} className='services-item group services-item-img'>
                        <span className='services-item-title'>FRP PANELS </span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${MaintenanceImg})` }} className='services-item group services-item-img'>
                        <span className='services-item-title'>SPACKLE </span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${MaintenanceImg})` }} className='services-item group services-item-img'>
                        <span className='services-item-title'>MINWAX STAINING </span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${MaintenanceImg})` }} className='services-item group services-item-img'>
                        <span className='services-item-title'>SKIM COATING/LEVEL 5 FINISH </span>
                    </div>
                    {/* Item */}
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${MaintenanceImg})` }} className='services-item group services-item-img'>
                        <span className='services-item-title'>WALL TALKERS </span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ServicesContent