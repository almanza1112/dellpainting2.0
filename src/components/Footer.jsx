import React from 'react'
import { Link, useResolvedPath } from 'react-router-dom'
import SBELogo from '../assets/Footer/sbe.png'
import MBELogo from '../assets/Footer/mbe.png'

const Footer = () => {
  return (
    <div className='w-full bg-black text-gray-200'>
      <div className='max-w-screen-xl w-full h-full mx-auto px-4 py-8 md:px-8 md:py-16 justify-center flex'>
        <div className='w-full grid md:grid-cols-3 gap-8 md:gap-16'>

         {/* About Us section */}
          <div className='fss-container'>
            <p className='fss-title'>About Us</p>
            <p>Dell Painting is a second generation painting contractor giving color
              to your projects with 25+ years of experience servicing clients and
              building relationships in the metro NY, NJ and PA area.</p>
            <div className='flex flex-row pt-4 md:pt-8'>
              <img src={SBELogo} className='w-[100px] invert' />
              <img src={MBELogo} className='w-[100px] invert' />
            </div>
          </div>

          {/* Services  */}
          <div className='fss-container'>
            <p className='fss-title'>Services</p>
            <ul>
              <CustomLink to='/services/maintenance'>Maintenance</CustomLink>
              <CustomLink to='/services/newconstruction'>New Construction</CustomLink>
              <CustomLink to='/services/wallcovering'>Wallcovering</CustomLink>
              <CustomLink to='/services/speciality'>Speciality Finishes</CustomLink>
              <CustomLink to='/services/frppanels'>FRP Panels</CustomLink>
              <CustomLink to='/services/spackle'>Spackle</CustomLink>
              <CustomLink to='/services/minwax'>Minwax Staining</CustomLink>
              <CustomLink to='/services/skim'>Skim Coating / Level 5 Finish</CustomLink>
              <CustomLink to='/services/walltalkers'>Wall Talkers</CustomLink>
            </ul>
          </div>

          {/* Contact section */}
          <div className='fss-container'>
            <p className='fss-title'>Contact</p>
            <p>Dell Painting</p>
            <p>420 River Road</p>
            <p className='mb-4'>North Arlington, NJ 07031</p>
            <p>PHONE: (201) 998-0700</p>
            <p className='mb-4'>FAX: (201) 299-3776</p>
            <p>admin@dellpainting.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvesPath = useResolvedPath(to)
  return (
    <li >
      <Link to={to} {...props} className=''>{children}</Link>
    </li>
  )
}

export default Footer