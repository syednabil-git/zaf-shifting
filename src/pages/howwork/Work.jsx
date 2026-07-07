import React from 'react'
import logo from '../../assets/bookingIcon.png'
const Work = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex flex-col md:flex-row gap-4 '>
        <div className='rounded-2xl bg-white p-5 items-center w-3xl'>
        <img src={logo}></img>
        <h1 className='font-bold text-xl mt-5 mb-5'>Booking Pick & Drop</h1>
        <p>From personal packages to <br></br> business shipments — we deliver on time, every time.</p>
        </div>
        <div className='rounded-2xl bg-white p-5 items-center w-3xl'>
        <img src={logo}></img>
        <h1 className='font-bold text-xl mt-5 mb-5'>Cash On Delivery</h1>
        <p>From personal packages to <br></br> business shipments — we deliver on time, every time.</p>
        </div>
        <div className='rounded-2xl bg-white p-5 items-center w-3xl'>
        <img src={logo}></img>
        <h1 className='font-bold text-xl mt-5 mb-5'>Delivery Hub</h1>
        <p>From personal packages to <br></br> business shipments — we deliver on time, every time.</p>
        </div>
        <div className='rounded-2xl bg-white p-5 items-center w-3xl'>
        <img src={logo}></img>
        <h1 className='font-bold text-xl mt-5 mb-5'>Booking SME & Corporate</h1>
        <p>From personal packages to <br></br> business shipments — we deliver on time, every time.</p>
        </div>
   
      </div>
    </div>
  )
}

export default Work