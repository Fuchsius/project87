'use client'

import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// card
import Title2 from '../title/Title2';
import Card37 from '../card/Card37';
import Card38 from '../card/Card38';
import Card30 from '../card/Card30';

export default function Section28({ cards, title, description, bgColor1, classNameTitle, classNameDescription }: { cards: any[]; title: string; description: string; bgColor1: string | undefined; classNameTitle: string; classNameDescription: string }) {

    const [showAll, setShowAll] = useState(false);

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
                    <div className={`w-full pt-12 pb-20 rounded-md ${bgColor1 ? bgColor1 : 'bg-[#0b5d56]'} -z-10`}>
                        {/* Title */}
                        <div className='my-container'>
                            {/* Title */}
                            <div className='w-full flex justify-center'>
                                <Title2 title={`${title}`} className={`text-white text-center font-sourceSerif font-bold ${classNameTitle}`} />
                            </div>
                            <div className='w-full flex items-center relative'>
                                {/* description */}
                                <div className='w-full md:px-28 px-0'>
                                    <p className={`text-center mt-2 text-sm text-white ${classNameDescription}`}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content container */}
                <div className="w-full mx-auto md:px-8 px-8 mt-20 relative">
                   <div className="mt-8 flex flex-wrap justify-center gap-4 mx-auto">
                        {cards.map((item, index) => (
                            <div key={index} className="w-full lg:w-[calc(((100%-(16px*3))/4))] md:w-[calc(((100%-(16px*2))/2))] sm:w-full">
                                <Card30
                                    image={item.image}
                                    title={item.title}
                                    title2={item.title2}
                                    description={item.description}
                                    button={item.button}
                                    classNameTitle={item.classNameTitle ?? ''}
                                    classNameTitle2={item.classNameTitle2 ?? ''}
                                    classNameDescription={item.classNameDescription ?? ''}
                                    classNameButton={item.classNameButton ?? ''}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
