import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export default function TemplateCarousel() {

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const prevButtonRef = useRef<HTMLDivElement>(null);
    const nextButtonRef = useRef<HTMLDivElement>(null);

    const handleSlideChange = (swiper: any) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
        console.log('slide change');
    };

    const handleSwiperInit = (swiper: any) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
        console.log(swiper);
    };

    return (
        <div className='w-full'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={16}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                className='w-full '
                onSwiper={handleSwiperInit}
                onSlideChange={handleSlideChange}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    // 640: {
                    //     slidesPerView: 2,
                    // },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            <div
                ref={prevButtonRef}
                className={`swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full transition-opacity ${isBeginning ? 'opacity-50 cursor-not-allowed' : 'bg-gray-800 text-white'
                    }`}
            >
                ‹
            </div>
            <div
                ref={nextButtonRef}
                className={`swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full transition-opacity ${isEnd ? 'opacity-50 cursor-not-allowed' : 'bg-gray-800 text-white'
                    }`}
            >
                ›
            </div>
        </div>
    )
}
