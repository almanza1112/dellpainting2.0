import React from 'react'
import UsaMap from 'react-usa-map'

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
        <div className='grid md:grid-cols-3 lg:grid-cols-4 p-4 md:px-8 md:divide-x py-4 md:py-16'>
          <div className='flex flex-row sm:flex-col justify-center md:justify-start items-center md:items-start pb-4'>
            <div className='main-title-top uppercase'>
              About
            </div>
            <div className='main-title-bottom uppercase'>
              Dell Painting
            </div>
          </div>
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

        {/* Where we operate section */}
        <div className='grid md:grid-cols-3 lg:grid-cols-4 p-4 md:px-8 md:divide-x py-4 md:py-16'>

          <div className='col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center'>
            <div className='max-w-[700px]'>
              <UsaMap customize={statesCustomConfig()} width="100%" />
            </div>
          </div>

          <div className='flex flex-row sm:flex-col justify-center md:justify-start items-center md:items-start pb-4 md:pl-8 order-first md:order-last'>
            <div className='main-title-top uppercase'>
              Where
            </div>
            <div className='main-title-bottom uppercase'>
              We Operate
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default HomeContent