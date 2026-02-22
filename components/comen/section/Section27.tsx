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

export default function Section27({ cards, title, description, bgColor1, classNameTitle, classNameDescription }: { cards: any[]; title: string; description: string; bgColor1: string | undefined; classNameTitle: string; classNameDescription: string }) {

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
                                <Title2 title={`${cards.length} ${title}`} className={`text-white text-center font-sourceSerif font-bold ${classNameTitle}`} />
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
                    {/* Cards */}
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 md:gap-y-24 gap-y-6'>
                        {cards.map((item: any, index: number) => (
                            <Card37 key={`${item?.id ?? item?.title ?? 'card'}-${index}`}
                                image="/assets/images/by-destination.png"
                                title="Nutrition"
                                description="Does the animal have access to a diet that is both healthy and balanced, and where it is similar to what it would consume in the wild? Of course, in addition to clean water?"
                                icon="/assets/icons/nutrition.svg"
                                classNameTitle=""
                                classNameDescription="" />
                        ))}

                        <Card38
                            title="Find out more"
                            description="Take a look at our comprehensive Animal Welfare Policy."
                            icon="/assets/icons/plus-3.svg"
                            classNameTitle=""
                            classNameDescription="" />
                    </div>
                </div>
            </div>


        </>
    )
}
