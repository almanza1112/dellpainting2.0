import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import PowerWashingImg from '../../assets/Services/power_washing.png'

const PowerWashing = () => {

    const myRef = useRef()
    const executeScroll = () => myRef.current.scrollIntoView();
    // Makes sure page starts on top of section when rendered
    useEffect(() => {
        executeScroll()
    }, [])

    return (
        <div ref={myRef} className='sss-style'>
            <div className='sss-container'>
                <Link to={'/services'} className='sss-back'>
                    <MdOutlineArrowBackIosNew size={20} /><span className='sss-back-text'>Other Services</span>
                </Link>
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

        </div>
    )
}

export default PowerWashing