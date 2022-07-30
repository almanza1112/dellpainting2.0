import React from 'react'
import UsaMap from 'react-usa-map'
import {FaAward, FaThumbsUp} from 'react-icons/fa'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {MdOutlineFamilyRestroom} from 'react-icons/md'

const HomeContent = () => {

  let mapHandler = (event) => {
    alert(event.target.dataset.name)
  }

  let statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "#CC0000",
      },
      "NY": {
        fill: "#CC0000"
      },
      "PA": {
        fill: "#CC0000"
      },
      "FL": {
        fill: "#CC0000"
      }
    };
  };

  return (
    <div className='w-full bg-slate-50'>
      <div className='max-w-screen-xl w-full h-full flex flex-col mx-auto'>
        {/* About Dell Painting section */}
        <div className='grid md:grid-cols-3 lg:grid-cols-4 p-4 md:px-8 md:divide-x py-4 md:py-32'>
          {/* title section */}
          <div className='flex flex-row sm:flex-col justify-center md:justify-start items-center md:items-start pb-4'>
            <div className='main-title-top uppercase'>
              About
            </div>
            <div className='main-title-bottom uppercase'>
              Dell Painting
            </div>
          </div>
          {/* description section */}
          <div className='col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:pl-8'>
            <p>
              Dell Painting is a <span className='font-bold'>Family Owned Business</span> providing Painting and Wallcovering services. 
              Founded by Marcial Delgado who has <span className='font-bold'>25+ years of experience</span> in the industry the New York 
              Metropolitan Area has trusted him and his team of professionals with their projects and 
              ensuring <span className='font-bold'>all expectations are met</span>. The painting application process requires a unique 
              level of skills and experience that we have perfected over the years. We recognize 
              what’s important to Owners, Architects, General Contractors, Construction Managers and 
              Property Managers when it comes to painting and our other services and we are completely 
              confident that <span className='font-bold'>you can count on Dell Painting</span> to address your specific needs while 
              delivering first-class results.          
            </p>

            <p className='pt-4 md:pt-8'>Get in touch with us today to recevie the best consultation and estimate from our experienced staff! </p>
          </div>
        </div>

        {/* Where We Operate section */}
        <div className='grid md:grid-cols-3 lg:grid-cols-4 p-4 md:px-8 md:divide-x py-4 md:py-16'>
          {/* title section */}
          <div className='col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center'>
            <div className='max-w-[700px]'>
              <UsaMap customize={statesCustomConfig()} width="100%" title="Map of Operation for Dell Painting" />
            </div>
          </div>
          {/* description section */}
          <div className='flex flex-row sm:flex-col justify-center md:justify-start items-center md:items-start pb-4 md:pl-8 order-first md:order-last'>
            <div className='main-title-top uppercase'>
              Where
            </div>
            <div className='main-title-bottom uppercase'>
              We Operate
            </div>
          </div>
        </div>

        {/* What Separates Us section */}
        <div className='grid md:grid-cols-3 lg:grid-cols-4 p-4 md:px-8 md:divide-x py-4 md:py-32'>
          {/* title section */}
          <div className='flex flex-row sm:flex-col justify-center md:justify-start items-center md:items-start pb-4'>
            <div className='main-title-top uppercase'>
              What
            </div>
            <div className='main-title-bottom uppercase'>
              Sets Us Apart
            </div>
          </div>
          {/* description section */}
          <div className='col-span-1 md:col-span-2 lg:col-span-3 grid md:grid-cols-2 md:pl-8 gap-8 md:gap-16'>
            <div className='p-4 flex flex-col justify-center items-center'>
              <FaAward size={40} color='#DC2626'/>
              <p className='text-xl pt-4 sm:pt-10 pb-2 uppercase'>Quality</p>
              <ul className='marker:text-red-600 list-outside list-disc ml-6 leading-8'>
                <li>100% satisfaction guaranteed</li>
                <li>We only use the best products</li>
                <li>Professional tools for optimal results</li>
              </ul>
            </div>
            <div className='p-4 flex flex-col justify-center items-center'>
              <FaThumbsUp size={40} color='#DC2626'/>
              <p className='text-xl pt-4 sm:pt-10 pb-2 uppercase'>Customer Satisfaction</p>
              <ul className='marker:text-red-600 list-outside list-disc ml-6 leading-8'>
                <li>Always meet project deadlines</li>
                <li>Consistent high standard results</li>
                <li>Regulary exceed job requirements</li>
              </ul>
            </div>
           
            <div className='p-4 flex flex-col justify-center items-center'>
              <MdOutlineFamilyRestroom size={40} color='#DC2626' />
              <p className='text-xl pt-4 sm:pt-10 pb-2 uppercase'>Family Owned</p>
              <ul className='marker:text-red-600 list-outside list-disc ml-6 leading-8'>
                <li>We treat you like family</li>
                <li>Hardworking and experienced</li>
                <li>First class results</li>
              </ul>
            </div>
            <div className='p-4 flex flex-col justify-center items-center'>
              <AiFillSafetyCertificate size={40} color='#DC2626' />
              <p className='text-xl pt-4 sm:pt-10 pb-2 uppercase'>Safety</p>
              <ul className='marker:text-red-600 list-outside list-disc ml-6 leading-8'>
                <li>We are OSHA certified</li>
                <li>Advocates Toolbox Talks</li>
                <li>Personal Protective Equipment</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default HomeContent