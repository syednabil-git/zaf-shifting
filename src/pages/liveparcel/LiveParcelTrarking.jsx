import React from 'react'
import liveparcel from '../../assets/live-tracking.png'
import safedelivery from '../../assets/safe-delivery.png'
const LiveParcelTrarking = () => {
  return (
    <div className='p-2 my-15 border-b-2 border-dotted border-gray-400 pb-10 border-t-2 border-dotted border-gray-400 pt-15'>
        <div className='flex justify-center items-center gap-20 p-10 bg-white rounded-2xl mb-5 '>
            <div className='rounded-2xl w-[160px]'>
                <img src={liveparcel}></img>
            </div>
            <div className='border-l-2 border-dotted border-gray-400 pl-10'>
                <h1 className='font-semibold text-2xl mb-5'>Live Parcel Tracking</h1>
                <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-20 p-10 bg-white rounded-2xl  mb-5'>
            <div className='rounded-2xl w-[160px]'>
                <img src={safedelivery}></img>
            </div>
            <div className='border-l-2 border-dotted border-gray-400 pl-10'>
                <h1 className='font-semibold text-2xl mb-5'>100% Safe Delivery</h1>
                <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
            </div>
        </div>
        <div className='flex justify-center items-center gap-20 p-10 bg-white rounded-2xl  mb-5'>
            <div className='rounded-2xl w-[160px]'>
                <img src={safedelivery}></img>
            </div>
            <div className='border-l-2 border-dotted border-gray-400 pl-10'>
                <h1 className='font-semibold text-2xl mb-5'>24/7 Call Center Support</h1>
                <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns anytime you need us and you can return anytimes.</p>
            </div>
        </div>
        
    </div>
  )
}

export default LiveParcelTrarking