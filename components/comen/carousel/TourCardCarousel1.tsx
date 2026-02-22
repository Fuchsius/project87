'use client'

import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// card
import Title2 from '../title/Title2';
import TourCard from '../card/TourCard';
import { Button } from '@/components/comen/button';

export default function TourCardCarousel1({ data, title, description, button, classNameTitle, classNameDescription, classNameButton }: { data: any[]; title?: string; description?: string; button: string; classNameTitle: string; classNameDescription: string; classNameButton: string }) {

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const handleSlideChange = (swiper: any) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
        console.log('slide change');
    };

    const swiperRef = useRef<any>(null);

    const handleSwiperInit = (swiper: any) => {
        swiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);

        // Update navigation after a small delay to ensure DOM is ready
        setTimeout(() => {
            if (swiperRef.current && prevRef.current && nextRef.current) {
                swiperRef.current.params.navigation.prevEl = prevRef.current;
                swiperRef.current.params.navigation.nextEl = nextRef.current;
                swiperRef.current.navigation.destroy();
                swiperRef.current.navigation.init();
                swiperRef.current.navigation.update();
            }
        }, 100);
    };

    return (
        <div className='w-full tour-card-carousel-1'>
            {/* title and button */}
            <div className='w-full relative '>
                {description && <Title2 title={title || ''} className={`text-center ${classNameTitle}`} />}
                <div className='w-full flex items-center relative'>
                    {/* button */}
                    <div className='absolute right-0 md:block hidden'>
                        <div className="flex items-center gap-3">
                            <button
                                ref={prevRef}
                                className={`w-10 h-10 flex items-center justify-center rounded-full bg-e6 swiper-button-lock:flex disabled:opacity-50 ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <img src="/assets/icons/arrow-right-2.svg" alt="" className="rotate-180" />
                            </button>
                            <button
                                ref={nextRef}
                                className={`w-10 h-10 flex items-center justify-center rounded-full bg-e6 swiper-button-lock:flex disabled:opacity-50 ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <img src="/assets/icons/arrow-right-2.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    {/* description */}
                    <div className='w-full md:px-28 px-0'>
                        {description ? (
                            <p className={`text-center font-sourceSerif font-medium lg:text-[22px] md:text-[20px] text-lg mt-2 ${classNameDescription}`}>
                                {description}
                            </p>
                        ) :
                            <Title2 title={title || ''} className={`text-center ${classNameTitle}`} />
                        }
                    </div>
                </div>

            </div>
            {/* cards */}
            <div className='w-full h-full mt-8'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={16}
                    speed={600}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                        disabledClass: 'opacity-50 cursor-not-allowed',
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className='w-full h-full'
                    onSwiper={handleSwiperInit}
                    onSlideChange={handleSlideChange}
                    observer={true}
                    observeParents={true}
                    updateOnWindowResize={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.1,
                        },
                        576: {
                            slidesPerView: 1.5,
                        },
                        640: {
                            slidesPerView: 2.1,
                        },
                        768: {
                            slidesPerView: 2.1,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                        1440: {
                            slidesPerView: 4,
                        }
                    }}
                >
                    {data.map((data: any, index: number) => (

                        <SwiperSlide key={index}>
                            <TourCard tour={data} />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
            <div className='w-full flex items-center justify-center mt-4'>
                <Button variant="default" size={"lg"} className={` ${classNameButton}`} >
                    {button}
                </Button>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                   

                    .tour-card-carousel-1 .swiper-wrapper{
                            padding-bottom: 16px;
                    }

                    .tour-card-carousel-1 .swiper-wrapper{
                            padding-bottom: 46px;
                    }

                    .tour-card-carousel-1 .swiper-slide{
                            height: auto;
                            display: flex;
                    }

                    .tour-card-carousel-1 .swiper-slide > *{
                        width: 100%;
                        height: 100%;
                    }

                    .tour-card-carousel-1 .swiper-pagination-bullet-active {
                        width: 50px;
                        height: 50px;
                        background: #414141 !important;
                    }
                        
                ` }} />
        </div>
    )
}
