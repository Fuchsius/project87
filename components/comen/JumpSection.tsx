'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface JumpSectionItem {
    id: string;
    name: string;
}

interface JumpSectionProps {
    items: JumpSectionItem[];
    className?: string;
}

const JumpSection: React.FC<JumpSectionProps> = ({ items, className = '' }) => {
    const swiperRef = useRef<any>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const [activeIndex, setActiveIndex] = useState(-1);
    const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 });
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    const handleSwiperInit = (swiper: any) => {
        swiperRef.current = swiper;
        updateVisibleRange(swiper);

        setTimeout(() => {
            if (swiperRef.current && prevRef.current && nextRef.current &&
                swiperRef.current.params.navigation &&
                typeof swiperRef.current.params.navigation === 'object') {
                swiperRef.current.params.navigation.prevEl = prevRef.current;
                swiperRef.current.params.navigation.nextEl = nextRef.current;
                swiperRef.current.navigation.destroy();
                swiperRef.current.navigation.init();
                swiperRef.current.navigation.update();
            }
        }, 100);
    };

    const handleSlideChange = (swiper: any) => {
        updateVisibleRange(swiper);
    };

    const updateVisibleRange = (swiper: any) => {
        let slidesPerView = 2;
        const width = window.innerWidth;
        if (width >= 480) slidesPerView = 3;
        if (width >= 640) slidesPerView = 4;
        if (width >= 768) slidesPerView = 5;
        if (width >= 1024) slidesPerView = 6;

        const start = swiper.activeIndex;
        const end = Math.min(start + slidesPerView - 1, items.length - 1);
        setVisibleRange({ start, end });

        setPrevDisabled(swiper.isBeginning);
        setNextDisabled(swiper.isEnd);
    };

    useEffect(() => {
        const handleResize = () => {
            if (swiperRef.current) {
                updateVisibleRange(swiperRef.current);
            }
        };

        if (swiperRef.current) {
            updateVisibleRange(swiperRef.current);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [items]);

    useEffect(() => {
        let ticking = false;
        let rafId: number;

        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                rafId = requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY + 100;
                    let foundSection = false;

                    for (let i = 0; i < items.length; i++) {
                        const element = document.getElementById(items[i].id);
                        if (element) {
                            const elementTop = element.offsetTop;
                            const elementBottom = elementTop + element.offsetHeight;

                            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                                setActiveIndex(i);
                                foundSection = true;
                                break;
                            }
                        }
                    }

                    if (!foundSection) {
                        setActiveIndex(-1);
                    }

                    ticking = false;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [items]);



    return (
        <div className={`w-full ${className} sm:flex hidden`}>
            <div className='w-full flex items-center justify-center sticky top-0 z-50 bg-white shadow-tb'>
                <div className='lg:my-container w-full'>
                    <div className='w-full flex items-center justify-center relative'>
                        {/* Previous Button */}
                        <button
                            ref={prevRef}
                            disabled={prevDisabled}
                            className={`absolute left-2 z-20 w-5 h-5 flex items-center justify-center rounded-full border border-textcolor1 text-textcolor1 bg-white transition-colors ${prevDisabled ? 'opacity-50 cursor-not-allowed' : ' cursor-pointer'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Swiper */}
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={2}
                            breakpoints={{
                                480: {
                                    slidesPerView: 3,
                                },
                                640: {
                                    slidesPerView: 4,
                                },
                                768: {
                                    slidesPerView: 5,
                                },
                                1024: {
                                    slidesPerView: 6,
                                },
                            }}
                            navigation={false}
                            // loop={true}
                            className='w-full overflow-hidden !p-0 !px-0 !py-0 swiper-no-padding'
                            style={{ padding: '0px !important' }}
                            onSwiper={handleSwiperInit}
                            onSlideChange={handleSlideChange}
                            observer={true}
                            observeParents={true}
                        >
                            {items.map((item, index) => (
                                <SwiperSlide key={item.id} className="">
                                    <div className='flex gap-1 justify-center items-center relative mt-1'>
                                        <div className='w-full relative ml-1'>
                                            <div
                                                className={`text-center px-4 py-5 w-full whitespace-nowrap overflow-hidden text-ellipsis rounded-md transition-all duration-200 cursor-pointer text-textcolor2 relative ${(index === visibleRange.start || index === visibleRange.end) ? ' ' : 'hover:bg-[#ededed]'
                                                    } ${index === visibleRange.start ? 'gradient-btn-bg-left' : ''
                                                    } ${index === visibleRange.end ? 'gradient-btn-bg-right' : ''
                                                    }`}
                                                onClick={() => {
                                                    // Immediate visual feedback
                                                    setActiveIndex(index);

                                                    // Ignore header scroll events during navigation
                                                    if ((window as any).ignoreScrollFor) {
                                                        (window as any).ignoreScrollFor(1000);
                                                    }

                                                    // Optimized smooth scroll
                                                    const element = document.getElementById(item.id);
                                                    if (element) {
                                                        const headerHeight = 80;
                                                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                                        const offsetPosition = Math.max(0, elementPosition - headerHeight - 20);

                                                        // Use requestAnimationFrame for smoother scroll
                                                        requestAnimationFrame(() => {
                                                            window.scrollTo({
                                                                top: offsetPosition,
                                                                behavior: 'smooth'
                                                            });
                                                        });

                                                        // Update URL hash after scroll starts
                                                        requestAnimationFrame(() => {
                                                            window.history.replaceState(null, '', `#${item.id}`);
                                                        });
                                                    }
                                                }}
                                            >
                                                {item.name}
                                            </div>
                                            <div className={`w-full h-[4px] rounded-md transition-all duration-300 ease-out  ${activeIndex === index ? 'bg-myred' : 'bg-transparent'} ${activeIndex === index && index === visibleRange.start ? 'jump-section-btn-left' : ''} ${activeIndex === index && index === visibleRange.end ? 'jump-section-btn-right' : ''}`}></div>
                                        </div>
                                        {index !== items.length - 1 && !(index === visibleRange.end) && <span className='w-[1px] h-6 bg-[#ededed]'></span>}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Next Button */}
                        <button
                            ref={nextRef}
                            disabled={nextDisabled}
                            className={`absolute right-2 z-20 w-5 h-5 flex items-center justify-center rounded-full border border-textcolor1 text-textcolor1 bg-white transition-colors ${nextDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JumpSection;