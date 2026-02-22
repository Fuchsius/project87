'use client'

import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// card
import Card13 from '../card/Card13';
import Title2 from '../title/Title2';

export default function Card13Carousel1({ cards }: { cards: any[] }) {

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
        <div className='w-full card-13-carousel-1'>
            {/* title and button */}
            <div className='w-full relative '>
                <Title2 title="Make Travel Responsible® Experiences" className='' />
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
                    <div className='w-full md:pr-28 pr-0'>
                        <p className='text-left mt-2'>
                            Our MAKE TRAVEL RESPONSIBLE® experiences connect you with people, the environment, and wildlife while promoting the principles of sustainable tourism
                        </p>
                    </div>
                </div>

            </div>
            {/* cards */}
            <div className='w-full mt-8'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={16}
                    speed={600}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className='w-full'
                    onSwiper={handleSwiperInit}
                    onSlideChange={handleSlideChange}
                    observer={true}
                    observeParents={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        // 640: {
                        //     slidesPerView: 2,
                        // },
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 1,
                        },
                        1280: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {cards.map((card: any, index: number) => (

                        <SwiperSlide key={index}>
                            <Card13
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                classNameTitle={card.classNameTitle}
                                classNameDescription={card.classNameDescription} />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `

                        .card-13-carousel-1 .swiper-wrapper{
                            padding-bottom: 46px;
                        }
                ` }} />
        </div>
    )
}
