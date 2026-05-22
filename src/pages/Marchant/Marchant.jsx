import React from 'react'
import logo from '../../assets/location-merchant.png'
import light from '../../assets/be-a-merchant-bg.png'
const Marchant = () => {
  return (
    <div className='max-w-7xl mx-auto p-5 my-10 bg-[#03373D] text-white rounded-2xl bg-no-repeat' 
      style={{
        backgroundImage: `url(${logo}), url(${light})`,
         backgroundPosition: "right bottom, center top",
        backgroundSize: "600px, 1300px",
      }}>
        <div className='ml-10 mb-20 mt-20'>
            <h1 className='text-4xl font-semibold mb-5 mt-15'>Merchant and Customer Satisfaction is <br></br> Our First Priority</h1>
            <p className='text-gray-300'>We offer the lowest delivery charge with the highest value along with <br></br> 100% safety of your product. Pathao courier delivers your parcels in every <br></br> corner of Bangladesh right on time.</p>
            <div className='flex justify-start items-center mt-5'>
                <button className='btn rounded-4xl text-lg bg-[#CAEB66] px-5 py-6'>Become a Merchant</button>
                <button className=" ml-3 px-8 py-3 rounded-full border border-[#CAEB66]  text-[#CAEB66] text-lg font-semibold bg-transparent hover:bg-[#CAEB66] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(190,242,100,0.15)]">
                        Earn with ZapShift Courier
                </button>
            </div>
        </div>
    </div>
  )
}

export default Marchant