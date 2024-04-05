'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Carousel = () => {
  return (
    <Swiper
 
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    // spaceBetween={50}
    // slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className='w-[80%] h-[200px] md:w-[90%] md:h-[500px] rounded-2xl mt-20'
  >
    <SwiperSlide className='w-[100%] bg-gray-500'></SwiperSlide>
    <SwiperSlide className='w-[100%] bg-gray-500'></SwiperSlide>
    <SwiperSlide className='w-[100%] bg-gray-500'></SwiperSlide>
    <SwiperSlide className='w-[100%] bg-gray-500'></SwiperSlide>
    <SwiperSlide className='w-[100%] bg-gray-500'></SwiperSlide>
    <SwiperSlide className='w-[100%] bg-gray-500'></SwiperSlide>
    <SwiperSlide className='w-[100%] bg-gray-500'></SwiperSlide>
    <SwiperSlide className='w-[100%] bg-gray-500'></SwiperSlide>
    <SwiperSlide className='w-[100%] bg-gray-500'> </SwiperSlide>
    ...
  </Swiper>
  )
}
