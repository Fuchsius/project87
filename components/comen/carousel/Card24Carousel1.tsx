'use client'

import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// card
import Title2 from '../title/Title2';
import Card24 from '../card/Card24';

export default function Card24Carousel1({ cards, title, description, bgColor, classNameTitle, classNameDescription }: { cards: any[]; title: string; description: string; bgColor: string; classNameTitle: string; classNameDescription: string; }) {

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
            <div className={`relative card-24-carousel-1 ${bgColor ? bgColor : 'bg-[#513755]'} pt-12 pb-12`}>
                <div className='w-full'>
                    <div className="w-full px-4">
                        <Title2 title={title} className={` text-white text-center ${classNameTitle}`} />
                        <p className={`description mt-2 md:!text-sm !text-white text-center ${classNameDescription}`}>{description}</p>
                    </div>
                    {/* Content container */}
                    <div className=" my-container mx-auto px-4 relative">
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
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                    },
                                    1280: {
                                        slidesPerView: 2,
                                    },
                                }}
                            >
                                {cards.map((card: any, index: number) => (

                                    <SwiperSlide key={index}>
                                        <Card24
                                            image={card.image}
                                            title={card.title}
                                            description={card.description}
                                            linkLabel={card.linkLabel}
                                            linkHref={card.linkHref}
                                            classNameTitle={card.classNameTitle}
                                            classNameDescription={card.classNameDescription}
                                            classNameLink={card.classNameLink}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                   @media (min-width: 768px) { 
                        .card-24-carousel-1 .swiper-pagination { 
                            display: none; 
                        }
                    }

                    .card-24-carousel-1 .swiper-wrapper{
                            padding-bottom: 16px;
                        }

                    @media(max-width:768px){
                        .card-24-carousel-1 .swiper-wrapper{
                            padding-bottom: 46px;
                        }
                    }

                    .card-24-carousel-1 .swiper-pagination-bullet {
                        background: #fff !important;
                    }

                    .card-24-carousel-1 .swiper-pagination-bullet-active {
                        background: #fff !important;
                    }
                ` }} />

        </>
    )
}
