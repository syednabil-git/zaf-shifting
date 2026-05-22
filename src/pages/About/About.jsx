import React from 'react'

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-10 py-5'>
        <div className='border-b-2 border-dotted mb-10'>
            <h1 className='text-5xl font-extrabold mt-10 mb-5'>About Us</h1>
            <p className='text-gray-500 mb-10'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
                From personal <br></br> packages to business shipments — we deliver on time, every time.</p>
        </div>
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">
            <input type="radio" name="my_tabs_6" className="tab hover:bg-primary" aria-label="Story" />
            <div className="tab-content bg-base-100 border-base-300 p-6">
               <p>
                 We started with a simple promise — to make parcel delivery fast, reliable, 
                and stress-free. Over the years, our commitment to real-time tracking, 
                efficient logistics, and customer-first service has made us a trusted partner 
                for thousands. Whether it's a personal gift or a time-sensitive business 
                delivery, we ensure it reaches its destination — on time, every time.
               </p>
               <p className='my-5'>We started with a simple promise — to make parcel delivery fast, reliable, 
                and stress-free. Over the years, our commitment to real-time tracking, 
                efficient logistics, and customer-first service has made us a trusted partner 
                for thousands. Whether it's a personal gift or a time-sensitive business 
                delivery, we ensure it reaches its destination — on time, every time.
                </p>
                <p className='my-5'>
                    We started with a simple promise — to make parcel delivery fast, reliable, 
                    and stress-free. Over the years, our commitment to real-time tracking, efficient 
                    logistics, and customer-first service has made us a trusted partner for thousands. 
                    Whether it's a personal gift or a time-sensitive business delivery, 
                    we ensure it reaches its destination — on time, every time.
                </p>
            </div>

            <input type="radio" name="my_tabs_6" className="tab hover:bg-primary" aria-label="Mission" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
      🚗
    </div>
    <h3 className="text-xl font-bold mb-2">
      Smarter Mobility
    </h3>
    <p className="text-gray-500">
      To make everyday transportation faster, easier, and more efficient using modern technology.
    </p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
      🔒
    </div>
    <h3 className="text-xl font-bold mb-2">
      Safe Travel Experience
    </h3>
    <p className="text-gray-500">
      To ensure every ride is secure, comfortable, and trusted for both riders and drivers.
    </p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
      🌍
    </div>
    <h3 className="text-xl font-bold mb-2">
      Better Connectivity
    </h3>
    <p className="text-gray-500">
      To connect people and communities through a reliable and accessible ride-sharing platform.
    </p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
      💡
    </div>
    <h3 className="text-xl font-bold mb-2">
      Innovation First
    </h3>
    <p className="text-gray-500">
      To continuously improve our platform with smart features and modern solutions.
    </p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
      💰
    </div>
    <h3 className="text-xl font-bold mb-2">
      Affordable Transport
    </h3>
    <p className="text-gray-500">
      To provide cost-effective rides that fit everyday users’ budgets.
    </p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
      🤝
    </div>
    <h3 className="text-xl font-bold mb-2">
      Empower Drivers
    </h3>
    <p className="text-gray-500">
      To create flexible earning opportunities for drivers through our platform.
    </p>
  </div>

</div>
            </div>

            <input type="radio" name="my_tabs_6" className="tab hover:bg-primary" aria-label="Success" />
            <div className="tab-content bg-base-100 border-base-300 p-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="text-4xl font-extrabold text-primary mb-2">
      10K+
    </div>
    <h3 className="text-xl font-bold mb-2">
      Successful Rides
    </h3>
    <p className="text-gray-500">
      Thousands of completed rides with smooth and secure travel experiences.
    </p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="text-4xl font-extrabold text-primary mb-2">
      5K+
    </div>
    <h3 className="text-xl font-bold mb-2">
      Happy Customers
    </h3>
    <p className="text-gray-500">
      Trusted by riders who rely on ZapShift for daily transportation.
    </p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="text-4xl font-extrabold text-primary mb-2">
      1K+
    </div>
    <h3 className="text-xl font-bold mb-2">
      Verified Drivers
    </h3>
    <p className="text-gray-500">
      Professional and trusted drivers ensuring safe and comfortable rides.
    </p>
  </div>

  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="text-4xl font-extrabold text-primary mb-2">
      24/7
    </div>
    <h3 className="text-xl font-bold mb-2">
      Customer Support
    </h3>
    <p className="text-gray-500">
      Dedicated support available anytime to assist riders and drivers.
    </p>
  </div>

</div>
            </div>

            <input type="radio" name="my_tabs_6" className="tab hover:bg-primary" aria-label="Team & Others" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  
  <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      🛡️
    </div>
    <h3 className="text-xl font-bold mb-2">
      Safe and Secure Ride Experience
    </h3>
    <p className="text-gray-500">
      Your safety is our top priority with verified drivers and secure trips.
    </p>
  </div>

  <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      ⚡
    </div>
    <h3 className="text-xl font-bold mb-2">
      Fast and Easy Booking Process
    </h3>
    <p className="text-gray-500">
      Book your ride instantly with a smooth and user-friendly experience.
    </p>
  </div>

  <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      🚖
    </div>
    <h3 className="text-xl font-bold mb-2">
      Professional Drivers
    </h3>
    <p className="text-gray-500">
      Ride with experienced and trusted drivers anytime, anywhere.
    </p>
  </div>

  <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      💸
    </div>
    <h3 className="text-xl font-bold mb-2">
      Affordable Pricing
    </h3>
    <p className="text-gray-500">
      Enjoy budget-friendly transportation for your daily travel needs.
    </p>
  </div>

  <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      🎧
    </div>
    <h3 className="text-xl font-bold mb-2">
      24/7 Customer Support
    </h3>
    <p className="text-gray-500">
      Our support team is always ready to help whenever you need assistance.
    </p>
  </div>

  <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      📱
    </div>
    <h3 className="text-xl font-bold mb-2">
      User-Friendly Mobile Experience
    </h3>
    <p className="text-gray-500">
      Easily manage rides, payments, and bookings from your smartphone.
    </p>
  </div>

</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About