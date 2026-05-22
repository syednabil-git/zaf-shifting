import React from 'react'

const ReviewsCard = ({review}) => {

    const { userName, review: testimonial, user_photoURL  } = review;
  return (
    <div className='max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200 mx-auto'>
        <div className="bg-[#f4f4f4] p-6 rounded-[30px] max-w-[500px]">
  {/* Quote Icon */}
  <div className="text-[70px] leading-none text-[#c7dede] font-bold">
    “
  </div>

  {/* Description */}
  <p className="text-[#4a4a4a] text-[18px] leading-[1.8] mt-2 border-b border-dashed border-[#0b5c63] pb-8">
   {testimonial}
  </p>

  {/* User Info */}
  <div className="flex items-center gap-4 pt-6">
    <div className="w-14 h-14 rounded-full bg-[#004d56]">
        <img src={user_photoURL}></img>
    </div>

    <div>
      <h3 className="text-[28px] font-bold text-[#004d56] leading-none">
        {userName}
      </h3>

      <p className="text-gray-500 text-[18px] mt-2">
        Senior Product Designer
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default ReviewsCard