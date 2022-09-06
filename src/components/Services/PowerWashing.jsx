import React, { useEffect } from 'react'
import PowerWashingImg from '../../assets/Services/power_washing.png'
import Footer from '../Footer';

const PowerWashing = () => {

    // Makes sure page starts on top when rendered
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='sss-style'>
            <div className='sss-container'>
                <div className='sss-content'>
                    <div className='sss-text'>
                        <p className='sss-title'>Power Washing</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi maxime repellendus, nulla voluptates non ea nemo porro aliquid quibusdam, laboriosam odio ad facilis labore impedit temporibus consectetur eveniet consequuntur officiis.
                        </p>
                    </div>
                    <div className='sss-image'>
                        <img src={PowerWashingImg} />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PowerWashing