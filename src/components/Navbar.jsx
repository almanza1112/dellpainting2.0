import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {

    // Setting mobile view
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    // Change navbar when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 80) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <nav className='w-full h-20 flex justify-between items-center p-4 md:p-8 fixed z-10 bg-slate-50/[.9] '>
            <img src={Logo} style={{ width: '100px' }}  className='z-20'/>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/services'>SERVICES</CustomLink>
                <CustomLink to='/portfolio'>PORTFOLIO</CustomLink>
                <CustomLink to='/careers'>CAREERS</CustomLink>
                <CustomLink to='/associates'>ASSOCIATES</CustomLink>
                <CustomLink to='/contact'>CONTACT</CustomLink>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-20'>
                {!nav ? <HiMenuAlt4 /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={nav ? 'absolute top-0 right-0 pt-[80px] w-full h-screen bg-slate-50 duration-500 border-l-8 border-black z-10' : 'absolute right-[-100%] pt-4 h-screen w-full '}>
                <CustomLink onClick={nav === true} to='/'>HOME</CustomLink>
                <CustomLink onClick={nav === true} to='/services'>SERVICES</CustomLink>
                <CustomLink onClick={nav === true} to='/portfolio'>PORTFOLIO</CustomLink>
                <CustomLink onClick={nav === true} to='/careers'>CAREERS</CustomLink>
                <CustomLink onClick={nav === true} to='/associates'>ASSOCIATES</CustomLink>
                <CustomLink onClick={nav === true} to='/contact'>CONTACT</CustomLink>
            </ul>
        </nav >
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvesPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvesPath.pathname, end: true })
    return (
        <li >
            <Link to={to} {...props} className={isActive ? 'border-b-4 border-red-600 pb-1' : ''}>{children}</Link>
        </li>
    )
}

export default Navbar
