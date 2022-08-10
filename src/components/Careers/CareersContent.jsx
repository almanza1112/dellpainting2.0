import React, {useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { FaCheck } from 'react-icons/fa'

const CareersContent = () => {

  const [didSend, setMessage] = useState(false);
  const [isSending, setSending] = useState(false);

  return (
    <div className='w-full bg-slate-50'>
      <div className='max-w-screen-xl w-full h-full mx-auto'>
        <div className='flex flex-col p-4 md:px-8 md:pb-16 w-full gap-16'>
            <div className='grid sm:grid-cols-2 gap-8 md:gap-32'>
              {/* New Jersey section  */}
              <div className='cari'>
                <p className='cari-title'>New Jersey</p>
                {/* Item */}
                <div className='cari-job'>
                  <div className='cari-job-title-wrapper'>
                    <p className='cari-job-title'>Painter</p>
                  </div>
                  <ul className='cari-job-list'>
                    <li>Experience</li>
                    <li>Salary</li>
                    <li>Full/Part Time</li>
                  </ul>
                </div>
              </div>

              {/* Florida Section */}
              <div className='cari'>
                <p className='cari-title'>Florida</p>
                {/* Item */}
                <div className='cari-job'>
                  <div className='cari-job-title-wrapper'>
                    <p className='cari-job-title'>Painter</p>
                  </div>
                  <ul className='cari-job-list'>
                    <li>Experience</li>
                    <li>Salary</li>
                    <li>Full/Part Time</li>
                  </ul>
                </div>

                {/* Item */}
                <div className='cari-job'>
                  <div className='cari-job-title-wrapper'>
                    <p className='cari-job-title'>Estimator</p>
                  </div>
                  <ul className='cari-job-list'>
                    <li>Experience</li>
                    <li>Salary</li>
                    <li>Full/Part Time</li>
                  </ul>
                </div>

                {/* Item */}
                <div className='cari-job'>
                  <div className='cari-job-title-wrapper'>
                    <p className='cari-job-title'>Office Admin</p>
                  </div>
                  <ul className='cari-job-list'>
                    <li>Experience</li>
                    <li>Salary</li>
                    <li>Full/Part Time</li>
                  </ul>
                </div>

              {/* Item */}
              <div className='cari-job'>
                <div className='cari-job-title-wrapper'>
                  <p className='cari-job-title'>Project Manager</p>
                </div>
                <ul className='cari-job-list'>
                  <li>Experience</li>
                  <li>Salary</li>
                  <li>Full/Part Time</li>
                </ul>
              </div>

            </div>
          </div>

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
                <input className='form-field' type="text" placeholder='(201) 555-5555' name='phone' required={true}/>
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
              <input className='form-field' name='upload' id='upload' type='file'/>
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
  )
}

export default CareersContent