import React, {useState } from 'react'
import { Link } from 'react-scroll'
import { ImSpinner2 } from 'react-icons/im'
import { FaCheck } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const CareersContent = () => {

  const [didSend, setMessage] = useState(false);
  const [isSending, setSending] = useState(false);

  return (
    <div className='w-full bg-slate-50'>
      <div className='max-w-screen-xl w-full h-full mx-auto'>
        <div className='flex flex-col p-4 md:px-8 md:pb-16 w-full gap-16'>

          {/* Our Available Positions */}
          <div className='grid md:grid-cols-3 lg:grid-cols-4 md:divide-x gap-8'>
            {/* content section */}
            <div className='col-span-1 md:col-span-2 lg:col-span-3 grid sm:grid-cols-2 gap-16 lg:gap-24'>
              {/* New Jersey section  */}
              <div className='cari'>
                {/* Item */}
                <div className='cari-job'>
                  <div className='cari-job-hs-wrapper'>
                    <div className='cari-job-hourly'>hourly</div>
                    <p className='cari-job-location'><MdLocationOn size={14} color='#666699' />New Jersey</p>
                  </div>
                  <p className='cari-job-title'>Painter</p>
                  <p className='cari-job-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas minima, ducimus debitis rem modi illum fugit tenetur iste?</p>
                  <Link to='application' smooth={true} offset={-50} className='cari-job-apply'>Apply</Link>
                </div>

                {/* Item */}
                <div className='cari-job'>
                  <div className='cari-job-hs-wrapper'>
                    <div className='cari-job-full-time'>full-time</div>
                    <p className='cari-job-location'><MdLocationOn size={14} color='#666699' />New Jersey</p>
                  </div>
                  <p className='cari-job-title'>Secretary</p>
                  <p className='cari-job-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas minima, ducimus debitis rem modi illum fugit tenetur iste?</p>
                  <Link to='application' smooth={true} offset={-50} className='cari-job-apply'>Apply</Link>
                </div>

                {/* Item */}
                <div className='cari-job'>
                  <div className='cari-job-hs-wrapper'>
                    <div className='cari-job-full-time'>full-time</div>
                    <p className='cari-job-location'><MdLocationOn size={14} color='#666699' />New Jersey</p>
                  </div>
                  <p className='cari-job-title'>Estimator</p>
                  <p className='cari-job-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas minima, ducimus debitis rem modi illum fugit tenetur iste?</p>
                  <Link to='application' smooth={true} offset={-50} className='cari-job-apply'>Apply</Link>
                </div>
              </div>

              {/* Florida Section */}
              <div className='cari'>
                {/* Item */}
                <div className='cari-job'>
                  <div className='cari-job-hs-wrapper'>
                    <div className='cari-job-hourly'>hourly</div>
                    <p className='cari-job-location'><MdLocationOn size={14} color='#666699' />Florida</p>
                  </div>
                  <p className='cari-job-title'>Painter</p>
                  <p className='cari-job-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas minima, ducimus debitis rem modi illum fugit tenetur iste?</p>
                  <Link to='application' smooth={true} offset={-50} className='cari-job-apply'>Apply</Link>
                </div>

                {/* Item */}
                <div className='cari-job'>
                  <div className='cari-job-hs-wrapper'>
                    <div className='cari-job-part-time'>part-time</div>
                    <p className='cari-job-location'><MdLocationOn size={14} color='#666699' />Florida</p>
                  </div>
                  <p className='cari-job-title'>Secretary</p>
                  <p className='cari-job-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas minima, ducimus debitis rem modi illum fugit tenetur iste?</p>
                  <Link to='application' smooth={true} offset={-50} className='cari-job-apply'>Apply</Link>
                </div>

                {/* Item */}
                <div className='cari-job'>
                  <div className='cari-job-hs-wrapper'>
                    <div className='cari-job-full-time'>full-time</div>
                    <p className='cari-job-location'><MdLocationOn size={14} color='#666699' />Florida</p>
                  </div>
                  <p className='cari-job-title'>Office Admin</p>
                  <p className='cari-job-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas minima, ducimus debitis rem modi illum fugit tenetur iste?</p>
                  <Link to='application' smooth={true} offset={-50} className='cari-job-apply'>Apply</Link>
                </div>

                {/* Item */}
                <div className='cari-job'>
                  <div className='cari-job-hs-wrapper'>
                    <div className='cari-job-full-time'>full-time</div>
                    <p className='cari-job-location'><MdLocationOn size={14} color='#666699' />Florida</p>
                  </div>
                  <p className='cari-job-title'>Project Manager</p>
                  <p className='cari-job-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas minima, ducimus debitis rem modi illum fugit tenetur iste?</p>
                  <Link to='application' smooth={true} offset={-50} className='cari-job-apply'>Apply</Link>
                </div>

              </div>
            </div>
            {/* title section */}
            <div className='flex flex-col justify-center md:justify-start items-center md:items-start pb-4 md:pl-8 order-first md:order-last'>
              <div className='main-title-top uppercase'>
                Our
              </div>
              <div className='main-title-bottom uppercase'>
                Available Positions
              </div>
            </div>
          </div>



          {/* Application Section */}
          <div id='application' className='grid md:grid-cols-3 lg:grid-cols-4 px-4 py-8 md:px-8 md:divide-x md:py-16'>
            {/* title section */}
            <div className='flex flex-row sm:flex-col justify-center md:justify-start items-center md:items-start pb-4'>
              <div className='main-title-top uppercase'>
                Apply
              </div>
              <div className='main-title-bottom uppercase'>
                Here Today
              </div>
            </div>
            {/* description section */}
            <div className='col-span-1 md:col-span-2 lg:col-span-3 md:pl-8'>
              {/* Form */}
              <form id='' method='POST' action='' className='flex flex-col w-full md:gap-4'>
                <div className={didSend ? 'mb-8 border border-gray-800 py-4 grid grid-cols-5' : 'hidden'}>
                  <div className='flex justify-center items-center'>
                    <div className='border-2 border-primary rounded-full p-2 md:p-4 '>
                      <FaCheck size={25} color='#5ce1e6' />
                    </div>
                  </div>
                  <div className='col-span-4 flex items-center'>
                    <p className='text-xl md:text-2xl '>
                      Application sent! We will get back to you soon.
                    </p>
                  </div>
                </div>
                {/* Actual Form */}
                {/* Name input */}
                <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
                  <div>
                    <label className='form-label-title' htmlFor='firstName'>First Name</label>
                    <input className='form-field w-full' type="text" placeholder='John' name='firstName' id='firstName' required={true} />
                  </div>
                  <div>
                    <label className='form-label-title' htmlFor='lastName'>Last Name</label>
                    <input className='form-field w-full' type="text" placeholder='Doe' name='lastName' id='lastName' required={true} />
                  </div>
                </div>

                {/* Email + phone input */}
                <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
                  <div>
                    <label className='form-label-title' htmlFor='firstName'>Email</label>
                    <input className='form-field w-full' type="email" placeholder='*****@example.com' name='email' id='email' required={true} />
                  </div>

                  <div>
                    <label className='form-label-title' htmlFor='phone'>Phone</label>
                    <input className='form-field' type="text" placeholder='(201) 555-5555' name='phone' required={true} />
                  </div>
                </div>

                {/* Location + Position selector */}
                <div className='grid md:grid-cols-2 gap-4 md:gap-8'>
                  <div>
                    <label className='form-label-title' htmlFor='location'>Location</label>
                    <select className='form-field' id='location'>
                      <option>New Jersey</option>
                      <option>Florida</option>=
                    </select>
                  </div>

                  <div>
                    <label className='form-label-title' htmlFor='position'>Position</label>
                    <select className='form-field' id='position'>
                      <option>Painter</option>
                      <option>Estimator</option>
                      <option>Office Admin</option>
                      <option>Project Manager</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className='form-label-title' htmlFor='upload'>Upload Resume</label>
                  <input className='form-field' name='upload' id='upload' type='file' />
                </div>

                <div>
                  <label className='form-label-title' htmlFor='skills'>Skills</label>
                  <textarea className='form-field' name="skills" rows="5" placeholder='Please write any experince or skills' required={true}></textarea>
                </div>

                <div className=''>
                  <button className='flat-btn my-4 '>SUBMIT<ImSpinner2 className={isSending ? 'animate-spin h-5 w-5 ml-3' : 'hidden'} viewBox="0 0 16 16" /></button>
                </div>
              </form> 

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CareersContent