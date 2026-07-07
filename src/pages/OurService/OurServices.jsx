import React from 'react'
import logo from '../../assets/service.png'
const OurServices = () => {
  return (
    <div className='bg-[#03373D] py-15 px-10 max-w-7xl mx-auto rounded-2xl my-15'>
        <h1 className='text-4xl font-bold text-white text-center'>Our Services</h1>
        <p className='text-center mb-8 mt-2 text-gray-300'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br></br> business shipments — we deliver on time, every time.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
           <div className='rounded-2xl p-5 items-center bg-white'>
             <div className='flex items-center justify-center my-5'><img src={logo}></img></div>
             <h1 className='text-center text-xl font-semibold mb-5'>Express  & Standard Delivery</h1>
             <p className='text-center'>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
           </div>
           <div className='rounded-2xl p-5 items-center bg-white'>
            <div className='flex items-center justify-center my-5'><img src={logo}></img></div>

             <h1 className='text-center text-xl font-semibold mb-5 '>Nationwide Delivery</h1>
             <p className='text-center'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
           </div>
           <div className='rounded-2xl p-5 items-center bg-white'>
             <div className='flex items-center justify-center my-5'><img src={logo}></img></div>

             <h1 className='text-center text-xl font-semibold mb-5 '>Fulfillment Solution</h1>
             <p className='text-center'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
           </div>
           <div className='rounded-2xl p-5 items-center bg-white'>
            <div className='flex items-center justify-center my-5'><img src={logo}></img></div>

             <h1 className='text-center text-xl font-semibold mb-5 '>Cash on Home Delivery</h1>
             <p className='text-center'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
           </div>
           <div className='rounded-2xl p-5 items-center bg-white'>
            <div className='flex items-center justify-center my-5'><img src={logo}></img></div>

             <h1 className='text-center text-xl font-semibold mb-5'>Corporate Service / Contract In Logistics</h1>
             <p className='text-center'>Customized corporate services which includes warehouse and inventory management support.</p>
           </div>
           <div className='rounded-2xl p-5 items-center bg-white'>
            <div className='flex items-center justify-center my-5'><img src={logo}></img></div>

             <h1 className='text-center text-xl font-semibold mb-5'>Parcel Return</h1>
             <p className='text-center'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
           </div>
        </div>     
        </div>
  )
}

export default OurServices