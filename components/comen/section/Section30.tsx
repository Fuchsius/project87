import React, { useState, useRef, useCallback, useEffect } from 'react'
import Title2 from '@/components/comen/title/Title2'
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Gallery from '@/components/comen/Gallery'

import 'swiper/css'
import 'swiper/css/navigation'

interface Room {
    id: number;
    images: string[];
    title: string;
    description: string;
    buttonLabel: string;
    amenities: string[];
}

interface Section30Props {
    roomsData: Room[];
    setRoomsGalleryImages: (images: string[]) => void;
    setRoomsActiveImageIndex: (index: number) => void;
    setIsRoomsGalleryOpen: (open: boolean) => void;
}

export default function Section30({ roomsData, setRoomsGalleryImages, setRoomsActiveImageIndex, setIsRoomsGalleryOpen }: Section30Props) {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = useCallback((direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const firstChild = scrollContainerRef.current.children[0] as HTMLElement;
            if (firstChild) {
                const gap = parseFloat(getComputedStyle(scrollContainerRef.current).gap) || 0;
                const scrollAmount = firstChild.offsetWidth + gap;
                scrollContainerRef.current.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    }, []);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            const updateArrows = () => {
                setShowLeftArrow(container.scrollLeft > 0);
                setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
            };
            container.addEventListener('scroll', updateArrows);
            updateArrows();
            return () => container.removeEventListener('scroll', updateArrows);
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] overflow-x-hidden">

            {/* Utility styles for hiding scrollbar but keeping functionality */}
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                display: none;
                }
                .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
                }
            `}</style>

            <div className="my-container select-none mx-auto px-4 py-12 lg:py-20 max-w-[1400px]">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">

                    {/* --- LEFT SECTION: Static Info --- */}
                    <div className="lg:w-1/3 w-full lg:shrink-0 flex flex-col justify-center z-10 lg:sticky lg:top-24 h-fit">
                        <Title2 title="Rooms" />

                        <div className="mt-4">
                            <p className="md:text-base text-sm text-textcolor1">
                                Just five bedrooms, each designed for the high life in Hill Country with hardwood floors, four-poster beds, lots of windows and cracking Castlereagh valley views. Every bedroom is interior design magazine-worthy, unique in layout and decor. Televisions are shunned in favour of scenery, but you will find one in the communal lounge. The Camellia Bedroom features twin beds and a private veranda and the Dickoya Suite is equipped with a connecting room for kids. Coming as a couple? You'll love the four-poster bed in the Lakeview Bedroom. Want the kids kept close? The Dickoya Suite has a connecting single room with a pull-out trundle
                            </p>
                        </div>
                        <div className="h-4 lg:hidden"></div>
                    </div>

                    {/* --- RIGHT SECTION: Custom Carousel --- */}
                    <div className="sm:block hidden lg:w-2/3 min-w-0 relative group">

                        <div className="absolute top-0 left-0 w-full md:w-[580px] max-w-[90vw] aspect-[4/3] pointer-events-none z-30">
                            {/* Left Arrow */}
                            <button
                                onClick={() => scroll('left')}
                                className={`
                                    absolute lg:left-0 left-1 top-1/2 -translate-y-1/2 -translate-x-1/2 
                                    lg:w-12 lg:h-12 w-8 h-8 rounded-full bg-[#305A7A] text-white flex items-center justify-center 
                                    transition-all duration-300 shadow-lg focus:outline-none transform active:scale-95 pointer-events-auto
                                    ${showLeftArrow ? 'opacity-100 visible' : 'opacity-0 invisible translate-x-[-100%]'}
                                `}
                                aria-label="Previous slide"
                                disabled={!showLeftArrow}
                            >
                                <ChevronLeft size={24} />
                            </button>

                            {/* Right Arrow */}
                            <button
                                onClick={() => scroll('right')}
                                className={`
                                    absolute lg:right-0 right-1 top-1/2 -translate-y-1/2 translate-x-1/2
                                    lg:w-12 lg:h-12 w-8 h-8 rounded-full bg-[#305A7A] text-white flex items-center justify-center 
                                    transition-all duration-300 shadow-lg focus:outline-none transform active:scale-95 pointer-events-auto
                                    ${showRightArrow ? 'opacity-100 visible' : 'opacity-0 invisible translate-x-[100%]'}
                                `}
                                aria-label="Next slide"
                                disabled={!showRightArrow}
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        <div
                            ref={scrollContainerRef}
                            className="flex lg:gap-8 md:gap-6 gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 lg:pb-0 pr-4 lg:pr-0 relative z-10"
                            style={{ scrollBehavior: 'smooth', cursor: isDragging ? 'grabbing' : 'grab' }}
                            onMouseDown={(e) => {
                                setIsDragging(true);
                                setStartX(e.pageX - scrollContainerRef.current!.offsetLeft);
                                setScrollLeft(scrollContainerRef.current!.scrollLeft);
                            }}
                            onMouseLeave={() => setIsDragging(false)}
                            onMouseUp={() => setIsDragging(false)}
                            onMouseMove={(e) => {
                                if (!isDragging) return;
                                e.preventDefault();
                                const x = e.pageX - scrollContainerRef.current!.offsetLeft;
                                const walk = (x - startX) * 2;
                                scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
                            }}
                        >
                            {roomsData.map((room) => (
                                <div
                                    key={room.id}
                                    className="flex-shrink-0 snap-start md:w-[580px] w-[calc(100%-80px)] max-w-[90vw]"
                                >
                                    {/* Card Container */}
                                    <div className="flex flex-col h-full group lg:bg-transparent overflow-hidden lg:overflow-visible pb-6 lg:pb-0">

                                        {/* Image Section */}
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md mb-6">
                                            <img
                                                src={room.images[0]}
                                                alt={room.title}
                                                className="w-full h-full object-cover transform transition-transform duration-700 ease-out"
                                                loading="lazy"
                                                draggable={false}
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Room+Image';
                                                }}
                                            />

                                            {/* Button Overlay */}
                                            <div className="absolute bottom-4 right-4">
                                                <button onClick={() => { setRoomsGalleryImages(room.images); setRoomsActiveImageIndex(0); setIsRoomsGalleryOpen(true); }} className="flex items-center gap-2 bg-myred/90 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium rounded-md transition-colors">
                                                    <Camera size={16} />
                                                    <span>{room.buttonLabel}</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex gap-4 lg:px-0 px-4">
                                            <div className='w-full flex flex-col gap-4'>
                                                <h3 className="text-2xl font-bold text-textcolor1 leading-tight">
                                                    {room.title}
                                                </h3>
                                                <p className="text-textcolor1 mt-1 leading-relaxed text-sm md:text-base min-h-[3rem]">
                                                    {room.description}
                                                </p>
                                            </div>
                                            <div className='w-full flex flex-col gap-4'>
                                                {/* Amenities Grid */}
                                                <ul className="grid grid-cols-1 gap-y-2 gap-x-4">
                                                    {room.amenities.map((item, index) => (
                                                        <li key={index} className="flex items-start text-sm text-textcolor1">
                                                            <span className="mt-1.5 mr-2 w-1 h-1 rounded-full bg-textcolor1 shrink-0"></span>
                                                            <span className="capitalize">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}

                            {/* Spacer for right padding in scroll view */}
                            <div className="w-4 flex-shrink-0 lg:hidden" />
                        </div>

                        <div className="mt-4 lg:mt-6 px-4 lg:px-0">
                            <p className="text-xs text-textcolor1 italic lg:text-start text-center">* Denotes local charge</p>
                        </div>

                    </div>


                </div>
            </div>

            {/* Mobile Swiper for Rooms */}
            <div className="sm:hidden block w-full relative">
                <div className="w-full mx-auto relative">
                    {/* Custom Navigation Arrows */}
                    <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#305A7A] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#254A62] transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#305A7A] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#254A62] transition-colors">
                        <ChevronRight size={20} />
                    </button>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={12}
                        slidesPerView={1.1}
                        centeredSlides={true}
                        loop={false}
                        grabCursor={true}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                            disabledClass: 'swiper-button-disabled'
                        }}
                        speed={600}
                        effect="slide"
                        className="w-full"
                        allowTouchMove={true}
                        simulateTouch={true}
                        touchRatio={1.2}
                        touchAngle={45}
                        longSwipes={true}
                        longSwipesRatio={0.3}
                        shortSwipes={true}
                        resistance={true}
                        resistanceRatio={0.85}
                        followFinger={true}
                        freeMode={false}
                        onSlideChange={(swiper) => {
                            const slides = swiper.slides;
                            const activeIndex = swiper.activeIndex;
                            slides.forEach((slide, index) => {
                                if (index === activeIndex) {
                                    slide.style.opacity = '1';
                                    slide.style.filter = 'brightness(1.1)';
                                    slide.style.transition = 'opacity 0.3s ease-out, filter 0.3s ease-out';
                                } else {
                                    slide.style.opacity = '0.6';
                                    slide.style.filter = 'brightness(0.9)';
                                    slide.style.transition = 'opacity 0.3s ease-out, filter 0.3s ease-out';
                                }
                            });
                        }}
                        onInit={(swiper) => {
                            const slides = swiper.slides;
                            const activeIndex = swiper.activeIndex;
                            slides.forEach((slide, index) => {
                                if (index === activeIndex) {
                                    slide.style.opacity = '1';
                                    slide.style.filter = 'brightness(1.1)';
                                    slide.style.transition = 'opacity 0.3s ease-out, filter 0.3s ease-out';
                                } else {
                                    slide.style.opacity = '0.6';
                                    slide.style.filter = 'brightness(0.9)';
                                    slide.style.transition = 'opacity 0.3s ease-out, filter 0.3s ease-out';
                                }
                            });
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1.1, spaceBetween: 12, centeredSlides: true },
                            640: { slidesPerView: 1.1, spaceBetween: 12, centeredSlides: true },
                            768: { slidesPerView: 1.1, spaceBetween: 12, centeredSlides: true },
                            1024: { slidesPerView: 1.1, spaceBetween: 12, centeredSlides: true }
                        }}
                    >
                        {roomsData.map((room, index) => (
                            <SwiperSlide key={room.id} className="transition-all duration-300 ease-out cursor-default">
                                <div className="flex flex-col h-full overflow-hidden  pb-6">
                                    {/* Image Section */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md mb-6">
                                        <img
                                            src={room.images[0]}
                                            alt={room.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Room+Image';
                                            }}
                                        />
                                        {/* Button Overlay */}
                                        <div className="absolute bottom-4 right-4">
                                            <button onClick={() => { setRoomsGalleryImages(room.images); setRoomsActiveImageIndex(0); setIsRoomsGalleryOpen(true); }} className="flex items-center gap-2 bg-myred/90 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium rounded-md transition-colors">
                                                <Camera size={16} />
                                                <span>{room.buttonLabel}</span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Content Section */}
                                    <div className="flex flex-col px-4">
                                        <h3 className="text-2xl font-bold text-textcolor1 mb-3 leading-tight">
                                            {room.title}
                                        </h3>
                                        <p className="text-textcolor1 mb-6 leading-relaxed text-sm md:text-base min-h-[3rem]">
                                            {room.description}
                                        </p>
                                        {/* Amenities Grid */}
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                                            {room.amenities.map((item, index) => (
                                                <li key={index} className="flex items-start text-sm text-textcolor1">
                                                    <span className="mt-1.5 mr-2 w-1 h-1 rounded-full bg-textcolor1 shrink-0"></span>
                                                    <span className="capitalize">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


        </div>
    )
}
