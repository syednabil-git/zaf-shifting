import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import moonstar from '../../../assets/brands/moonstar.png'
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';


const brandLogos = [amazon, casio, randstad, star, start_people, moonstar];
const Brands = () => {
  return (
    <div className='max-w-7xl mx-auto md:p-5 my-5'>
        <div>
            <h1 className='text-center font-bold text-4xl my-5 md:my-10'>We've helped thousands of sales teams</h1>
        </div>
    
    <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
         autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
         modules={[Autoplay]}
    >
        {
            brandLogos.map((logo, index) => <SwiperSlide key={index}>
                <img src={logo}></img>
            </SwiperSlide>
                
             )
        }
         
       
    </Swiper>
    </div>
  )
}

export default Brands