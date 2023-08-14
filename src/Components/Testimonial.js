import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';

import data from '../Data/data.json'; // Adjust the path accordingly

export default function Testimonial() {
    const testimonials = data.Testimonial;

    return (
        <div className="testimonials">
            <div className="trusted-head black">What Our Clients Says</div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {testimonials.map((imageUrl, index) => (
                    <SwiperSlide key={index}>
                        <img src={imageUrl} alt={`Slide ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
