import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import {
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
} from '../assets'
import './Carousel2.css'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
const Carousel2 = () => {
  const projects = [
    { id: 1, title: 'review 1', img: review1},
    { id: 2, title: 'review 2', img: review2 },
    { id: 3, title: 'review 3', img: review3 },
    { id: 4, title: 'review 4', img: review4 },
    { id: 5, title: 'review 5', img:review5 },
    { id: 6, title: 'review 6', img: review6 },
  ]
  return (
    <div className="Carousel2-container">
      <Swiper
        className="swiper-container"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          enabled: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {projects.map((pro) => (
          <SwiperSlide key={pro.id} className="swiper-item max-h[20rem]">
            <img className="object-cover text-center ml-[4rem] sm:m-0" src={pro.img} alt={pro.title} />
          </SwiperSlide>
        ))}

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <FaArrowCircleLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaArrowCircleRight />
          </div>
          <div className="swiper-pagination sm:block"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Carousel2
