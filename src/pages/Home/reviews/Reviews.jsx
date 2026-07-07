import React, { use } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from './ReviewsCard';
import logo from '../../../assets/customer-top.png';

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);
  return (
    <div>
        <div>
            <div className='flex justify-center items-center mt-10'>
                <img className='w-sm' src={logo}></img>
            </div>
            <h1 className='font-bold text-4xl text-center mt-10'>What our customers are sayings</h1>
            <p className='text-gray-700 text-center mb-10'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain,<br></br> and strengthen your body with ease!</p>
        </div>
        
     <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={3}
  breakpoints={{
    0: {
      slidesPerView: 1.2,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: 1,
        slideShadows: false,
      },
    },
    768: {
      slidesPerView: 3,
      coverflowEffect: {
        rotate: 10,
        stretch: "50%",
        depth: 500,
        modifier: 1,
        scale: 0.75,
        slideShadows: true,
      },
    },
  }}
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  pagination={true}
  modules={[EffectCoverflow, Pagination, Autoplay]}
>
  {reviews.map((review) => (
    <SwiperSlide key={review.id}>
      <ReviewsCard review={review} />
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  )
}

export default Reviews