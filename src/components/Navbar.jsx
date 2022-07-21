import React from 'react'
import Logo from '../assets/logo.png'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center px-4 '>
            <img src={Logo} style={{ width: '100px' }} />

            {/* Menu */}
            <ul className='flex'>
                <CustomLink to='/'>HOME</CustomLink>

                <CustomLink to='/services'>SERVICES</CustomLink>
                <CustomLink to='/portfolio'>PORTFOLIO</CustomLink>
                <CustomLink to='/careers'>CAREERS</CustomLink>
                <CustomLink to='/associates'>ASSOCIATES</CustomLink>
                <CustomLink to='/contact'>CONTACT</CustomLink>
            </ul>

        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvesPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvesPath.pathname, end: true })
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}


export default Navbar
