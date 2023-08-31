import React from 'react'
import { Link, useResolvedPath } from 'react-router-dom'
import SBELogo from '../assets/Footer/sbe.png'
import MBELogo from '../assets/Footer/mbe.png'
import OshaLogo from '../assets/Footer/osha.png'

const Footer = () => {
  return (
    <div className='w-full bg-black text-gray-200'>
      <div className='max-w-screen-xl w-full h-full mx-auto px-4 py-8 md:px-8 md:py-16 justify-center flex'>
        <div className='w-full grid md:grid-cols-3 gap-8 md:gap-16'>

          {/* Contact section */}
          <div className='fss-container'>
            <p className='fss-title'>Contact</p>
            <p className='text-sm mb-2 text-red-600 font-bold'>NEW JERSEY</p>
            <p>Dell Painting</p>
            <p>420 River Road</p>
            <p className='mb-4'>North Arlington, NJ 07031</p>
            <p>PHONE: (201) 998-0700</p>
            <p className='mb-4'>FAX: (201) 299-3776</p>
            <p className='text-sm mb-2 text-red-600 font-bold'>FLORIDA</p>
            <p>1975 E. Sunrise Blvd., Suite 523</p>
            <p className='mb-4'>Fort Lauderdale, FL 33305</p>
            <p className='mb-4'>PHONE: (754) 276-0059</p>
            <p>admin@dellpainting.com</p>
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
              <CustomLink to='/services/powerwashing'>Power Washing</CustomLink>
            </ul>
          </div>

          {/* About Us section */}
          <div className='fss-container'>
            <p className='fss-title'>About Us</p>
            <p>Dell Painting Corp. is a second generation painting contractor giving color
              to your projects with 25+ years of experience servicing clients and
              building relationships in the metro NY, NJ and PA area.</p>
            <div className='grid grid-cols-3 xs:gap-8 md:gap-4 lg:gap-8 pt-4 md:pt-8 '>
              <img src={SBELogo} className='max-w-[100px] w-full invert' />
              <img src={MBELogo} className='max-w-[100px] w-full invert' />
              <img src={OshaLogo} className='max-w-[100px] w-full h-auto self-center' />
            </div>
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
      <Link to={to} {...props} className='hover:text-red-600'>{children}</Link>
    </li>
  )
}

export default Footer