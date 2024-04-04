import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from '../../images/carouselimg1.jpeg'
import Image2 from '../../images/carouselimg2.jpeg'
import Image4 from '../../images/carouselimg3.jpeg'
import Image5 from '../../images/carouselimg4.jpeg'
import Image6 from '../../images/carouselimg5.jpeg'
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import './carousel.css'

const Carousel = () => {
  return (
   <div className='swiper-div'>
   <Swiper
      effect= {'coverflow'}
      grabCursor= {true}
      centeredSlides= {true}
      loop={true}
      slidesPerView= {2.70}
      spaceBetween={0}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        scale: 1,
        depth: 75,
        modifier: 0.9,
        slideShadows: true,
      }}
      autoplay={{
        delay:3000,
        disableOnInteraction:false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className='collection-swiper'
   >
    <SwiperSlide className='content-swiper'> <img className='image-carousel' src={Image1} alt="" /> </SwiperSlide>
    <SwiperSlide className='content-swiper'> <img className='image-carousel' src={Image2} alt="" /> </SwiperSlide>
    <SwiperSlide className='content-swiper'> <img className='image-carousel' src={Image6} alt="" /> </SwiperSlide>
    <SwiperSlide className='content-swiper'> <img className='image-carousel' src={Image4} alt="" /> </SwiperSlide>
    <SwiperSlide className='content-swiper'> <img className='image-carousel' src={Image5} alt="" /> </SwiperSlide>
    <SwiperSlide className='content-swiper'> <img className='image-carousel' src={Image6} alt="" /> </SwiperSlide>
   </Swiper>
   
   </ div>
  )
}

export default Carousel