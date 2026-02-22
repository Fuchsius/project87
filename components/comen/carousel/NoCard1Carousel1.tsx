'use client'

import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// card
import Title2 from '../title/Title2';

export default function NoCardCarousel1({ cards, image, title, description, classNameTitle, classNameDescription, meals }: { cards: any[]; image: string; title: string; description: string; classNameTitle: string; classNameDescription: string; meals: string[] }) {

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

    const cardPairs = Array.from({ length: Math.ceil(cards.length / 2) }, (_, pairIndex) =>
        cards.slice(pairIndex * 2, pairIndex * 2 + 2)
    );

    return (
        <>
            <div className='w-full no-card-1-carousel-1'>
                {/* title and button */}
                <div className='w-full relative '>
                    <Title2 title={title} className={classNameTitle} />
                    <div className='flex items-center'>
                        <h2 className='font-sourceSerif text-2xl italic text-textcolor1'>
                            {meals.join(', ')}
                        </h2>
                    </div>
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
                            <p className='text-left mt-2 text-textcolor1'>
                                {description}
                            </p>
                        </div>
                    </div>

                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                    <div className="w-full">
                        <img src={image} alt="" className='rounded-md w-full aspect-video object-cover' />
                    </div>
                    <div className='w-full'>
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
                            {cardPairs.map((pair: any[], slideIndex: number) => (
                                <SwiperSlide key={slideIndex}>
                                    <div className='grid xl:grid-cols-2 gap-4 '>
                                        {pair.map((card: any, cardIndex: number) => (
                                            <div className='w-full' key={cardIndex}>
                                                <h1 className='text-lg font-bold text-textcolor1'>{card.title}</h1>
                                                <p className='text-base mt-4 text-textcolor1'>{card.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
                <style dangerouslySetInnerHTML={{
                    __html: `
                   

                    .no-card-1-carousel-1 .swiper-wrapper{
                            padding-bottom: 46px;
                        }

                   
                ` }} />
            </div>
        </>
    )
}
