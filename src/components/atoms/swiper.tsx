import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
// import 'src/styles/swiper.css';

SwiperCore.use([Pagination]);

const SwiperSlider: React.FC = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <Swiper
      style={{height: '236px'}}
      // direction={"vertical"}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      navigation
      pagination={{clickable: true}}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
