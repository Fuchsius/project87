'use client'

import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// card
import Title2 from '../title/Title2';
import Card29 from '../card/Card29';

export default function Card29Carousel1({ cards, title, trademark, description, bgColor1, bgColor2, size0, size768, size1024, size1280, minSize, classNameTitle, classNameDescription }: { cards: any[]; title: string; trademark: string; description: string; bgColor1: string | undefined; bgColor2: string | undefined; size0: number; size768: number; size1024: number; size1280: number; minSize: number; classNameTitle: string; classNameDescription: string }) {

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
        <>
            <div className="my-container relative mt-[-140px] card-29-carousel-1">
                {/* Background (only top half) */}
                <div className="relative top-[140px] left-0 w-full">
                    <div className={`w-full pt-12 pb-20 rounded-t-md ${bgColor1 ? bgColor1 : 'bg-[#0b5d56]'} -z-10`}>
                        {/* Title */}
                        <div className='my-container'>
                            {/* Title */}
                            <div className='w-full flex justify-center'>
                                <Title2 title={title} className={`text-white text-center font-oswald font-medium ${classNameTitle}`} />
                                <span className={`text-white text-xl ml-1 font-oswald font-normal ${classNameTitle}`}>{trademark}</span>
                            </div>
                            <div className='w-full flex items-center relative'>
                                {/* button */}
                                <div className={`absolute right-0 md:block hidden ${minSize > cards.length ? 'block' : 'hidden'}`}>
                                    <div className="flex items-center gap-3">
                                        <button
                                            ref={prevRef}
                                            className={`w-10 h-10 flex items-center justify-center rounded-full bg-[#F1F1F1] swiper-button-lock:flex disabled:opacity-50 ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <img src="/assets/icons/arrow-right-2.svg" alt="" className="rotate-180" />
                                        </button>
                                        <button
                                            ref={nextRef}
                                            className={`w-10 h-10 flex items-center justify-center rounded-full bg-[#F1F1F1] swiper-button-lock:flex disabled:opacity-50 ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <img src="/assets/icons/arrow-right-2.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                                {/* description */}
                                <div className='w-full md:px-28 px-0'>
                                    <p className={`text-center mt-2 text-sm text-white ${classNameDescription}`}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`relative w-full h-[50px] ${bgColor2 ? bgColor2 : 'bg-bggray4'}`}></div>
                </div>

                {/* Content container */}
                <div className="w-full mx-auto px-8 relative">
                    {/* Cards */}
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
                                    slidesPerView: size0,
                                },

                                768: {
                                    slidesPerView: size768,
                                },
                                1024: {
                                    slidesPerView: size1024,
                                },
                                1280: {
                                    slidesPerView: size1280,
                                },
                            }}
                        >
                            {cards.map((card: any, index: number) => (
                                <SwiperSlide key={index}>
                                    <Card29
                                        image={card.image}
                                        title={card.title}
                                        description={card.description}
                                        link={card.link}
                                        linkText={card.linkText}
                                        classNameTitle={card.classNameTitle}
                                        classNameDescription={card.classNameDescription}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                       
                        .card-29-carousel-1 .swiper-wrapper{
                            padding-bottom: 16px;
                        }

                        .card-29-carousel-1 .swiper-wrapper{
                            padding-bottom: 46px;
                        }
                   
                        .card-29-carousel-1 .swiper-slide{
                            height: auto;
                            display: flex;
                        }

                        .card-29-carousel-1 .swiper-slide > *{
                            width: 100%;
                            height: 100%;
                        }
                ` }} />

        </>
    )
}
