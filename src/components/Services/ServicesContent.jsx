import React from 'react'
import MaintenanceImg from '../../assets/maintenance.jpeg'

const ServicesContent = () => {
    return (
        <div className='w-full flex flex-col p-8 '>
            <div className='grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <p className='content-title'> Maintenance</p>
                    <p>Restoring original color on the walls. Updating Colors and Wallcovering
                        for a more updated and unique look. Repairing any damages prior to
                        restoring surfaces.</p>
                    <p>*Image is Pantone Color of The Year - 2020</p>
                </div>

                <img src={MaintenanceImg} style={{ width: '400px' }} className='justify-self-center' />
            </div>
            <div className='grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <p className='content-title'> Maintenance</p>
                    <p>Restoring original color on the walls. Updating Colors and Wallcovering
                        for a more updated and unique look. Repairing any damages prior to
                        restoring surfaces.</p>
                    <p>*Image is Pantone Color of The Year - 2020</p>
                </div>

                <img src={MaintenanceImg} style={{ width: '400px' }} className='justify-self-center' />
            </div>
            <div className='grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <p className='content-title'> Maintenance</p>
                    <p>Restoring original color on the walls. Updating Colors and Wallcovering
                        for a more updated and unique look. Repairing any damages prior to
                        restoring surfaces.</p>
                    <p>*Image is Pantone Color of The Year - 2020</p>
                </div>

                <img src={MaintenanceImg} style={{ width: '400px' }} className='justify-self-center' />
            </div>
        </div>
    )
}

export default ServicesContent