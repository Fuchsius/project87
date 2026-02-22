"use client";

import dynamic from 'next/dynamic';
import JumpSection from '@/components/comen/JumpSection';
import Image from 'next/image';

import TourCard from '@/components/comen/card/TourCard'
import Hero3 from '@/components/comen/hero/Hero3'
import Section3 from '@/components/comen/section/Section3'
import Section4 from '@/components/comen/section/Section4'
import { TOUR_DATA } from '@/data/tours.data'
import { Button } from '@/components/comen/button'
import { useState, useRef, useEffect, useCallback } from 'react'
import Title2 from '@/components/comen/title/Title2'
import Card9Carousel1 from '@/components/comen/carousel/Card9Carousel1'
import Card7Carousel1 from '@/components/comen/carousel/Card7Carousel1'
import Section6 from '@/components/comen/section/Section6'
import Card1Carousel1 from '@/components/comen/carousel/Card1Carousel1'
import Section5 from '@/components/comen/section/Section5'
import Section19 from '@/components/comen/section/Section19'
import Section29 from '@/components/comen/section/Section29'
import Section30 from '@/components/comen/section/Section30'
import Breadcrumb from '@/components/BreadCrumb'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Thumbs, Scrollbar, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/scrollbar'
import { Popup } from '@/components/Popup/Popup'

import ImageSlider from '@/components/comen/ImageSlider';
import Gallery from '@/components/comen/Gallery';
import { ChevronDown, ChevronUp, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

export default function page() {

    const whyWeLove = [
        "When it comes to views, Sri Lanka's Central Highlands are the stuff of magic. And Camellia Hills has the crème de la crème of all the views.",
        "Special add-on moments include traditional canoe rides with local fishermen, naturalist-led late-night wilderness walks in search of Sambar deer, a trek across tea plantations and lessons in how to cook the perfect Sri Lankan curry.",
        "We're sworn to secrecy on the exact location of the hotel's favourite sundowner spot, but when you go you'll know. You'll be greeted by a butler, a picnic feast and G&T's as you watch sun beams disappear behind emerald hills.",
        "Rooms are designed to suit every type of traveller. Choose from twin beds or a romantic four-poster, add a crib or pack everyone into the Dickoya Suite which has an interconnecting room with pull-out trundle."
    ];

    const tourData = TOUR_DATA;

    const card9Carousel1Data = [
        {
            image: "assets/images/single-hotel/Top-Things-to-Do-Nearby1.png",
            title: "Late Night Wilderness Walk",
            description: "This guided walk along tea estate routes is a special experience for wildlife enthusiasts.",
            linkText: "Find Out More >",
            linkClassName: "",
            classNameTitle: "!italic",
            classNameDescription: "lg:!text-sm md:!text-sm !text-sm",
            backgroundColor: "bg-bggray1"
        },
        {
            image: "assets/images/single-hotel/Top-Things-to-Do-Nearby2.png",
            title: "Real Life Stories Behind Your Cup of Tea",
            description: "A visit to the Tea Leaf Centre gives you a different perspective to the story of Ceylon tea.",
            linkText: "Find Out More",
            linkClassName: "",
            classNameTitle: "!italic",
            classNameDescription: "lg:!text-sm md:!text-sm !text-sm",
            backgroundColor: "bg-bggray1"
        },
    ];

    const card7Carousel1Data = [
        {
            image: "assets/images/single-hotel/all-hotels-1.png",
            title: "Grand Hotel",
            title2: "Colombo City Tour with Photographer Mark Forbes",
            description: "The luxurious Mahoora Safari Camp is located on the border of Wilpattu National Park, known for its leopards. A quintessential glamping experience and satisfying blend of comfort and nature.",
            facilities: ["Bar", "Room", "Service", "Laundry", "Gym", "Swimming Pool", "24-hour Front Desk"],
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            hoverColor: "bg-mybluehover"
        },
        {
            image: "assets/images/single-hotel/all-hotels-2.png",
            title: "Ceylon Tea Trails",
            title2: "Colombo City Tour with Photographer Mark Forbes",
            description: "The luxurious Mahoora Safari Camp is located on the border of Wilpattu National Park, known for its leopards. A quintessential glamping experience and satisfying blend of comfort and nature.",
            facilities: ["Bar", "Room", "Service", "Laundry", "Gym", "Swimming Pool", "24-hour Front Desk"],
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            hoverColor: "bg-mybluehover"
        },
        {
            image: "assets/images/single-hotel/all-hotels-3.png",
            title: "Heritance Tea Factory",
            title2: "Colombo City Tour with Photographer Mark Forbes",
            description: "The luxurious Mahoora Safari Camp is located on the border of Wilpattu National Park, known for its leopards. A quintessential glamping experience and satisfying blend of comfort and nature.",
            facilities: ["Bar", "Room", "Service", "Laundry", "Gym", "Swimming Pool", "24-hour Front Desk"],
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            hoverColor: "bg-mybluehover"
        },
        {
            image: "assets/images/single-hotel/all-hotels-4.png",
            title: "Goatfell",
            title2: "Colombo City Tour with Photographer Mark Forbes",
            description: "The luxurious Mahoora Safari Camp is located on the border of Wilpattu National Park, known for its leopards. A quintessential glamping experience and satisfying blend of comfort and nature.",
            facilities: ["Bar", "Room", "Service", "Laundry", "Gym", "Swimming Pool", "24-hour Front Desk"],
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            hoverColor: "bg-mybluehover"
        },
    ];

    const wayToTravel = [
        {
            image: "/assets/icons/tour01.svg",
            title: "Access travel knowledge",
            description: "of selected local experts",
        },
        {
            image: "/assets/icons/tour02.svg",
            title: "Save time & money",
            description: "let a local expert plan",
        },
        {
            image: "/assets/icons/tour03.svg",
            title: "Tailor your private holiday",
            description: "to your preferences",
        },
        {
            image: "/assets/icons/tour04.svg",
            title: "Book & travel securely",
            description: "money back guarantee & 24/7 support",
        },
    ];

    const experiences = [
        {
            image: "assets/images/single-hotel/experiences-1.png",
            title: "Be My Guest",
            description: "The original local travel experience",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/single-hotel/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/single-hotel/experiences-3.png",
            title: "Wild Frontiers",
            description: "Experience the thrill of wildlife up close",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/single-hotel/experiences-1.png",
            title: "Grand Hotel4",
            description: "The luxurious Mahoora Safari Camp is located on the.",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        }
    ];

    const images = [
        "https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    ];

    const [selectedTab, setSelectedTab] = useState(0);

    const tabsScrollRef = useRef<HTMLDivElement>(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [gallerySwiper, setGallerySwiper] = useState<any>(null);
    const thumbnailRef = useRef<HTMLDivElement>(null);

    const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

    const checkScroll = () => {
        if (tabsScrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = tabsScrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    useEffect(() => {
        checkScroll();
    }, []);

    const tabs = [
        { icon: '/assets/icons/map-pin-fill.svg', text: 'Restaurants & bars' },
        { icon: '/assets/icons/map-pin-fill.svg', text: 'Board' },
        { icon: '/assets/icons/map-pin-fill.svg', text: 'Spas & wellness' },
        { icon: '/assets/icons/map-pin-fill.svg', text: 'Sustainability' },
        { icon: '/assets/icons/map-pin-fill.svg', text: 'Families' },
        { icon: '/assets/icons/map-pin-fill.svg', text: 'Good to Know' },
    ];

    const restaurant = [
        { icon: '/assets/images/by-destination.png' },
        { icon: '/assets/images/tailor-your-tour.png' },
        { icon: '/assets/images/by-destination.png' },
    ];

    const reviews = [
        {
            id: 1,
            author: "numpy264",
            location: "Hong Kong, China",
            date: "April 2025",
            rating: 5,
            title: "Camellia Hills just became my new favorite hotel",
            content: "Camellia Hills may have just become my favorite hotel I think I've ever stayed in. The location, after a bumpy and windy drive in, is absolutely breathtaking. The property itself is of a high, high standard. The staff are fantastic and accommodating. The food, amazing. It reminded me",
        },
        {
            id: 2,
            author: "numpy264",
            location: "Hong Kong, China",
            date: "April 2025",
            rating: 5,
            title: "Perfection!",
            content: "This is an absolute gem of a hotel! I could not recommend it more! It is peaceful, ridiculously beautiful and with fantastic food and service. We stayed for three nights in the Dicoya Suite, as a family of four. The view from our room was unbelievable and we all slept very well. We",
        },
        {
            id: 3,
            author: "numpy264",
            location: "Hong Kong, China",
            date: "April 2025",
            rating: 5,
            title: "Dont be on a diet",
            content: "Now this place is ridiculous in the best possible way. From the moment you arrive, you feel like a multi-millionaire. You have an enormous private home, perched on a hillside all to yourself, with breathtaking views in every direction. Everything about it screams luxury. The Now this place is ridiculous in the best possible way. From the moment you arrive, you feel like a multi-millionaire. You have an enormous private home",
        },
    ];

    const ratingData = [
        { label: "Excellent", count: 4 },
        { label: "Very good", count: 100 },
        { label: "Average", count: 30 },
        { label: "Poor", count: 0 },
        { label: "Terrible", count: 0 },
    ];

    const TripAdvisorLogo = () => <div className="text-sm font-bold">TripAdvisor</div>;

    const RatingDots = ({ count }: { count: number }) => {
        const circles = Array.from({ length: 5 }, (_, i) => {
            const isFull = count >= i + 1;
            const isHalf = count >= i + 0.5 && count < i + 1;
            const isEmpty = count < i + 0.5;
            return (
                <div key={i} className="w-4 h-4 rounded-full border border-[#00AA6C] relative overflow-hidden">
                    {isFull && <div className="absolute inset-0 bg-[#00AA6C] rounded-full"></div>}
                    {isHalf && <div className="absolute inset-0  rounded-full half-circle"></div>}
                    {isEmpty && <div className="absolute inset-0 border-[#00AA6C] rounded-full"></div>}
                </div>
            );
        });
        return (
            <>
                <style>{`
                    .half-circle::before {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background: #00AA6C;
                        border-radius: 50%;
                        clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
                    }
                `}</style>
                <div className="flex gap-1">{circles}</div>
            </>
        );
    };

    const RatingBar = ({ label, count, total }: { label: string, count: number, total: number }) => {
        const percentage = (count / total) * 100;
        return (
            <tr className="pb-4">
                <td className="text-textcolor1 text-xs text-left">{label}</td>
                <td className="text-center px-2">
                    <div className="border-[1px] border-textcolor1 w-32 bg-transparent">
                        <div className="bg-textcolor1 h-[14px]" style={{ width: `${percentage}%` }}></div>
                    </div>
                </td>
                <td className="text-textcolor1 text-xs text-left">{count}</td>
            </tr>
        );
    };

    const roomsData = [
        {
            id: 1,
            title: 'Luxury Panoramic Room',
            description: 'With views of Dambulla rock from the balcony.',
            images: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop'],
            amenities: ['Air-conditioning', 'King-size or twin beds', 'Balcony', 'Television', 'Rain shower', '23m²'],
            buttonLabel: 'More images'
        },
        {
            id: 2,
            title: 'Deluxe Sigiriya Room',
            description: 'Similar to the Luxury Rooms and located on the fourth and fifth floors of the Sigiriya wing. These rooms have a Jacuzzi bath with lake and forest views.',
            images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop'],
            amenities: ['Air-conditioning', 'King-size or twin beds', 'Balcony', 'Jacuzzi bath', 'Forest views', '23m²'],
            buttonLabel: 'More images'
        },
        {
            id: 3,
            title: 'Lakeview Suite',
            description: 'Open plan suites on the lower ground floor with a seating area and a terrace that leads to a lawn area.',
            images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1616594039964-40891a909d93?q=80&w=1000&auto=format&fit=crop'],
            amenities: ['Ceiling Fan', 'Veranda', 'King-size Bed', 'Tea/Coffee Facilities', 'En Suite Bath', '34m²'],
            buttonLabel: 'More images'
        },
        {
            id: 4,
            title: 'Camellia Bedroom',
            description: 'A cosy bedroom with dark wood accents and twin beds and a private terrace.',
            images: ['https://images.unsplash.com/photo-1616594039964-40891a909d93?q=80&w=1000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop'],
            amenities: ['Ceiling Fan', 'Veranda', 'Twin Beds', 'Garden View', 'Wi-Fi', 'En Suite'],
            buttonLabel: 'More images'
        },
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

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
        if (!container) return;

        const checkArrows = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        };

        checkArrows();
        container.addEventListener('scroll', checkArrows);
        return () => container.removeEventListener('scroll', checkArrows);
    }, []);

    const [isRoomsGalleryOpen, setIsRoomsGalleryOpen] = useState(false);
    const [roomsGalleryImages, setRoomsGalleryImages] = useState<string[]>([]);
    const [roomsActiveImageIndex, setRoomsActiveImageIndex] = useState(0);
    const [roomsGallerySwiper, setRoomsGallerySwiper] = useState<any>(null);
    const roomsThumbnailRef = useRef<HTMLDivElement>(null);

    return (
        <>
            {/* Bread crumb */}
            <div className='w-full py-2'>
                <Breadcrumb
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Single Hotel" },
                    ]}
                />
            </div>

            {/* hero section */}
            <div className='w-full'>
                <Hero3
                    image="assets/images/single-hotel/hero.png"
                    title1="Boutique Luxury"
                    title2="Camellia Hills"
                    description="Nuwaraeliya, Sri Lanka"
                    rating={4.5}
                />
            </div>

            {/* A brew with a view */}
            <div className='w-full mt-12'>
                <Section3
                    title='"A brew with a view"'
                    description1="This is that place. The one where they talk about the breathtaking views and they really turn out to be breathtaking. The one where you sip Ceylon tea with singing birds and swim alongside mountains."
                    description2="The moment you step through Camellia Hills' doors you'll get a feeling of floating on air. You're high in Sri Lanka's Hill Country sky close to cloud forests and Adam's Peak. Just five bedrooms run the length of this boutique bungalow, guaranteeing a pristine and private retreat. Heck, we won't even tell anyone if you pretend it's your second home. Inside design is calm and streamlined with hardwood floors, high beams, roaring fires and guest rooms eschewing televisions in place of views. Outside is a dramatic reveal, eye-to-eye with the monastery-quiet lake and misty mountains. This blissful hotel celebrates everything we love about switching off in style. Morning birdsong and wilderness walks. An outdoor infinity pool and G&Ts on the terrace. A low mile menu at the farm-to-table restaurant and a butler serving Ceylon tea."
                />

            </div>


            <div className="w-full mt-12 sticky top-0 z-40">
                <JumpSection
                    items={[
                        { id: 'our-trips', name: "Our Trips" },
                        { id: 'our-reviews', name: "Our Reviews" },
                        { id: 'at-a-glance', name: "At a Glance" },
                        { id: 'things-to-do', name: "Things to Do" },
                        { id: 'best-museums', name: "Best Museums" },
                        { id: 'best-food', name: "Best Food" },
                        { id: 'travel-tips', name: "Travel Tips" },
                        { id: 'hotels', name: "Hotels" }
                    ]}
                />
            </div>

            {/* Why we love */}
            <div className='w-full mt-12' id="our-trips">
                <Section4
                    title="Why we love Camellia Hills"
                    data={whyWeLove}
                    colsLg="2"
                    colsMd="2"
                    colsSm="1"
                    titleClassName=""
                />
            </div>

            <ImageSlider images={images} />

            <Section30 roomsData={roomsData} setRoomsGalleryImages={setRoomsGalleryImages} setRoomsActiveImageIndex={setRoomsActiveImageIndex} setIsRoomsGalleryOpen={setIsRoomsGalleryOpen} />

            <div className="w-full ">
                <Title2 title='Facilities' className='text-center text-textcolor1' ></Title2>
                <div className='my-container mt-8'>
                    <div className='w-full relative items-center justify-center flex'>
                        <div className='absolute z-30 bottom-0 w-full border-b-4 border-[#CD0F4F]'></div>
                        {canScrollLeft && (
                            <button
                                className="sm:flex hidden absolute left-0 top-0 h-10 w-10 z-40 bg-textcolor1  items-center justify-center shadow-md  transition-colors rounded-full"
                                onClick={() => tabsScrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' })}
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}
                        <div className='select-none md:w-auto w-full flex-row overflow-x-hidden cursor-pointer relative flex ' ref={tabsScrollRef} onScroll={checkScroll}
                            onMouseDown={(e) => {
                                setIsDragging(true);
                                setStartX(e.pageX);
                                setEndX(e.pageX);
                            }}
                            onMouseLeave={() => setIsDragging(false)}
                            onMouseUp={() => {
                                if (isDragging && Math.abs(endX - startX) > 20) {
                                    const direction = endX < startX ? 'right' : 'left';
                                    const scrollAmount = 200;
                                    tabsScrollRef.current!.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
                                }
                                setIsDragging(false);
                            }}
                            onMouseMove={(e) => {
                                if (!isDragging) return;
                                e.preventDefault();
                                setEndX(e.pageX);
                            }}
                            onTouchStart={(e) => {
                                setIsDragging(true);
                                setStartX(e.touches[0].clientX);
                                setEndX(e.touches[0].clientX);
                            }}
                            onTouchMove={(e) => {
                                if (!isDragging) return;
                                e.preventDefault();
                                setEndX(e.touches[0].clientX);
                            }}
                            onTouchEnd={() => {
                                if (isDragging && Math.abs(endX - startX) > 20) {
                                    const direction = endX < startX ? 'right' : 'left';
                                    const scrollAmount = 200;
                                    tabsScrollRef.current!.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
                                }
                                setIsDragging(false);
                            }}
                            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                        >
                            <div className='sm:h-[48px] h-[36px] bg-white mb-1 flex min-w-max relative'>
                                <div className='w-12 h-full bg-white rounded-br-lg'></div>

                                {/* content list */}
                                {tabs.map((tab, index) => (
                                    <div
                                        key={index}
                                        className={`h-full ${selectedTab === index ? 'bg-[#CD0F4F] ' : 'bg-white'} rounded-t-lg flex items-center justify-center px-4 relative ${selectedTab === index ? 'z-10' : 'z-0'} before:content-[""] before:absolute before:w-[15px] before:h-[15px] before:bottom-0 before:left-[-15px] before:rounded-br-[10px] before:shadow-[8px_0px_0_0px_var(--tab-color)] before:pointer-events-none after:content-[""] after:absolute after:w-[15px] after:h-[15px] after:bottom-0 after:right-[-15px] after:rounded-bl-[10px] after:shadow-[-8px_0px_0_0px_var(--tab-color)] after:pointer-events-none cursor-pointer`}
                                        style={{ '--tab-color': selectedTab === index ? '#CD0F4F ' : '#ffffff' } as React.CSSProperties}
                                        onClick={() => setSelectedTab(index)}
                                    >
                                        <img src={tab.icon} alt="" className='sm:w-5 w-4' />
                                        <h1 className={`ml-[10px] md:text-base text-sm  ${selectedTab === index ? 'text-white font-bold' : 'text-textcolor1 font-normal'}`}>{tab.text}</h1>
                                    </div>
                                ))}

                                <div className='w-12 h-full bg-white rounded-bl-lg'></div>
                            </div>

                        </div>
                        {canScrollRight && (
                            <button
                                className="sm:flex hidden absolute right-0 top-0 h-10 w-10 z-40 bg-textcolor1 items-center justify-center shadow-md  transition-colors rounded-full"
                                onClick={() => tabsScrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' })}
                            >
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
                {selectedTab === 0 && (
                    <div className='w-full lg:p-0 lg:my-container mt-12'>
                        <div className='w-full grid lg:grid-cols-9 grid-cols-1 gap-12'>
                            <div className='lg:col-span-4 col-span-1 lg:order-1 order-2'>
                                {/* desktop size */}
                                <div className='lg:w-full lg:p-0 my-container lg:block hidden'>
                                    {/* main image */}
                                    <div className='w-full relative'>
                                        <img src={restaurant[0].icon} alt="" className='w-full object-cover aspect-video rounded-md' />
                                        <div className="absolute bottom-2 left-2">
                                            <button
                                                onClick={() => setIsGalleryOpen(true)}
                                                className="
                                               bg-myred/90 text-white px-6 py-[6px] rounded-md 
                                                flex items-center gap-2 transition-all duration-200
                                                shadow-lg font-bold md:text-base text-sm
                                            " >
                                                <Image
                                                    src="/assets/icons/camera-1.svg"
                                                    alt="camera"
                                                    width={20}
                                                    height={20}
                                                />
                                                More images
                                            </button>
                                        </div>
                                    </div>
                                    {/* sub images */}
                                    <div className='w-full grid grid-cols-2 gap-4 mt-4'>
                                        {restaurant.slice(1).map((img, index) => (
                                            <img key={index} src={img.icon} alt="" className='w-full object-cover aspect-video rounded-md' />
                                        ))}
                                    </div>
                                </div>
                                {/* mobile size 1 */}
                                <div className='lg:w-full lg:p-0 my-container lg:hidden sm:block hidden'>
                                    <div
                                        className='overflow-hidden select-none'
                                        ref={containerRef}
                                        onMouseDown={(e) => {
                                            setIsDragging(true);
                                            setStartX(e.pageX - containerRef.current!.offsetLeft);
                                            setScrollLeft(containerRef.current!.scrollLeft);
                                        }}
                                        onMouseLeave={() => setIsDragging(false)}
                                        onMouseUp={() => setIsDragging(false)}
                                        onMouseMove={(e) => {
                                            if (!isDragging) return;
                                            e.preventDefault();
                                            const x = e.pageX - containerRef.current!.offsetLeft;
                                            const walk = (x - startX) * 2;
                                            containerRef.current!.scrollLeft = scrollLeft - walk;
                                        }}
                                        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                                    >
                                        <div className="flex flex-row gap-4 h-[140px] items-center">
                                            {restaurant.map((img, index) => (
                                                <div key={index} className={`relative cursor-pointer flex-shrink-0 h-full w-[300px]`}>
                                                    <img src={img.icon} alt={`Restaurant ${index + 1}`} className='w-full h-full object-cover rounded-md select-none' draggable={false} />
                                                    {index === 0 && (
                                                        <div className="absolute left-2 bottom-2 opacity-100 transition-opacity duration-300">
                                                            <button
                                                                onClick={() => {
                                                                    setActiveImageIndex(index);
                                                                    setIsGalleryOpen(true);
                                                                }}
                                                                className="
                                                                                bg-myred/90 text-white px-6 py-[8px] rounded-md 
                                                                flex items-center gap-2 transition-all duration-200
                                                                shadow-lg font-bold md:text-base text-sm
                                                                            "
                                                            >
                                                                <Image
                                                                    src="/assets/icons/camera-1.svg"
                                                                    alt="camera"
                                                                    width={20}
                                                                    height={20}
                                                                />
                                                                View gallery
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* mobile size 2 */}
                                <div className="w-full relative sm:hidden block">
                                    <div className="w-full mx-auto relative">
                                        <Swiper
                                            modules={[Navigation]}
                                            spaceBetween={0}
                                            slidesPerView={1.020}
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
                                                0: { slidesPerView: 1.02, spaceBetween: 0, centeredSlides: true },
                                                640: { slidesPerView: 1.02, spaceBetween: 0, centeredSlides: true },
                                                768: { slidesPerView: 1.02, spaceBetween: 0, centeredSlides: true },
                                                1024: { slidesPerView: 1.02, spaceBetween: 0, centeredSlides: true }
                                            }}
                                        >
                                            {restaurant.map((item, index: number) => (
                                                <SwiperSlide key={index} className="transition-all duration-300 ease-out transform cursor-default">
                                                    <div className={`relative aspect-[1/.48] overflow-hidden group ${index === 0 ? 'rounded-l-md' : index === restaurant.length - 1 ? 'rounded-r-md' : ''}`}>
                                                        <Image
                                                            src={item.icon}
                                                            alt={`Slide ${index}`}
                                                            fill
                                                            className="object-cover transition-transform duration-300"
                                                            loading={index < 2 ? 'eager' : 'lazy'}
                                                            sizes="(max-width: 768px) 95vw, (max-width: 1024px) 1200px, 1440px"
                                                            quality={80}
                                                        />

                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300" />

                                                        {index === 0 && (
                                                            <div className="absolute left-2 bottom-2 opacity-100 transition-opacity duration-300">
                                                                <button
                                                                    onClick={() => {
                                                                        setActiveImageIndex(index);
                                                                        setIsGalleryOpen(true);
                                                                    }}
                                                                    className="
                                                                           bg-myred/90 text-white px-6 py-[8px] rounded-md 
                                                                            flex items-center gap-2 transition-all duration-200
                                                                            shadow-lg font-bold md:text-base text-sm
                                                                        "
                                                                >
                                                                    <Image
                                                                        src="/assets/icons/camera-1.svg"
                                                                        alt="camera"
                                                                        width={20}
                                                                        height={20}
                                                                    />
                                                                    View gallery
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>

                                    <Gallery
                                        isOpen={isGalleryOpen}
                                        onClose={() => setIsGalleryOpen(false)}
                                        images={restaurant.map(item => item.icon)}
                                        activeImageIndex={activeImageIndex}
                                        setActiveImageIndex={setActiveImageIndex}
                                        gallerySwiper={gallerySwiper}
                                        setGallerySwiper={setGallerySwiper}
                                        thumbnailRef={thumbnailRef}
                                    />
                                </div>

                            </div>
                            <div className=' lg:col-span-5 col-span-1 lg:order-2 order-1'>
                                <div className='lg:w-full lg:p-0 my-container'>
                                    <p className='md:text-base text-sm text-textcolor1'>Camellia Hills is a boutique bungalow hotel located in the heart of Sri Lanka's Hill Country. Nestled in a stunning natural setting, the hotel offers a unique blend of comfort and luxury, making it the perfect destination for those seeking a peaceful retreat.</p>

                                    <div className='w-full mt-8 grid grid-cols-2 gap-8'>
                                        <div className='w-full'>
                                            <h1 className="md:text-base text-sm font-semibold text-textcolor1">Focus</h1>
                                            <p className='mt-1 md:text-base text-sm text-textcolor1'>Camellia Hills is a boutique bungalow hotel located in the heart of Sri Lanka's Hill Country. Nestled in a stunning natural setting, the hotel offers a unique blend of comfort and luxury, making it the perfect destination for those seeking a peaceful retreat.</p>
                                        </div>
                                        <div className='w-full'>
                                            <h1 className="md:text-base text-sm font-semibold text-textcolor1">Focus</h1>
                                            <p className='mt-1 md:text-base text-sm text-textcolor1'>Camellia Hills is a boutique bungalow hotel located in the heart of Sri Lanka's Hill Country. Nestled in a stunning natural setting, the hotel offers a unique blend of comfort and luxury, making it the perfect destination for those seeking a peaceful retreat.</p>
                                        </div>
                                    </div>

                                    <div className='w-full mt-8 bg-bggray3 p-6 flex items-start gap-4 rounded-md'>
                                        <div className='w-6'>
                                            <img src="assets/icons/award-1.svg" alt="" className='w-full' />
                                        </div>
                                        <div className='w-full'>
                                            <h1 className="md:text-base text-sm font-semibold text-textcolor1">Our pick</h1>
                                            <p className='mt-1 text-sm text-textcolor1'>If you're looking for a romantic evening for two, the private dining experiences here are a must. From 'Shipwrecked in Style' to a 'Candlelit Jungle Waterfall' find yourself in a secluded spot and select a menu to be prepared by your very own private chef.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Board */}
                {selectedTab === 1 && (
                    <div className='my-container lg:p-0 lg:my-container mt-12'>
                        <div className='w-full'>
                            <h1 className='text-textcolor1 md:text-[32px] text-[28px] font-bold'>What's Included</h1>
                            <p className='mt-1 text-textcolor1 md:text-base text-sm'><span className='font-bold'>Breakfast</span> at Kanchana Restaurant.</p>
                        </div>

                        <div className='w-full mt-6'>
                            <h1 className='text-textcolor1 md:text-[32px] text-[28px] font-bold'>Upgrade Options</h1>
                            <p className='text-textcolor1 md:text-base text-sm'><span className='font-bold'>Half Board</span> Breakfast and dinner or breakfast and lunch at Kanchana Restaurant.</p>
                            <p className='mt-1 text-textcolor1 md:text-base text-sm'><span className='font-bold'>Full Board</span> Breakfast, lunch and dinner at Kanchana Restaurant.</p>
                        </div>
                    </div>
                )}
                {/* Spas & wellness */}
                {selectedTab === 2 && (
                    <div className='my-container lg:p-0 lg:my-container mt-12'>
                        <p className='md:text-base text-sm text-textcolor1'>
                            The Coco Spa has a steam room, a sauna and a tempting list of massage, ayurveda and massage rituals. Opt for the 90-minute signature Coco Spa massage which combines shiatsu, Balinese and acupressure techniques to serenity-inducing effect.
                            <br /><br />
                            There’s a small 24-hour gym equipped with treadmills, cycling machines, a step machine, a rowing machine and free weights. Outside, there’s a jogging track, tennis courts and bicycles to rent.
                            <br /><br />
                            Group and private yoga sessions can be arranged via the spa.
                        </p>
                    </div>
                )}
                {/* Sustainability */}
                {selectedTab === 3 && (
                    <div className='my-container lg:p-0 lg:my-container mt-12'>
                        <p className='md:text-base text-sm text-textcolor1'>
                            At the hotel’s Eco Park, there’s a paper recycling facility, a sewage treatment plant, a plant nursery, a herb garden and beehives. The extensive grounds include a 193-acre section of protected forest where bio-diversity is promoted. Purchasing is as environmentally friendly as possible, with local suppliers and biodegradable or recyclable packaging favourekd. To support the local community, more than half of the staff come from within 20km.
                        </p>
                    </div>
                )}
                {/* Families */}
                {selectedTab === 4 && (
                    <div className='my-container lg:p-0 lg:my-container mt-12'>
                        <p className='md:text-base text-sm text-textcolor1'>
                            Families will appreciate the option of interconnecting rooms and facilities including babysitting, the children’s menu and the under-12s playground.
                        </p>
                    </div>
                )}
                {/* Good to Know */}
                {selectedTab === 5 && (
                    <div className='my-container lg:p-0 lg:my-container mt-12'>
                        <p className='md:text-base text-sm text-textcolor1'>
                            Compulsory Christmas Eve and New Year's Eve gala dinners, supplements apply.
                        </p>
                    </div>
                )}
            </div>


            {/* Guest Reviews */}
            <Section29 reviews={reviews} ratingData={ratingData} expandedReviews={expandedReviews} setExpandedReviews={setExpandedReviews} />



            {/* Top Tours Featuring This Hotel */}
            <div className='w-full mt-12' id="our-reviews">
                <div className='my-container'>
                    <TourCardCarousel1
                        data={tourData}
                        title="Trending Sri Lanka Tours"
                        description=""
                        button="See More Trips"
                        classNameButton=""
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>
            </div>

            {/* Top Things to Do Nearby */}
            <div className='w-full mt-12' id="at-a-glance">
                <div className='my-container' >
                    <Card9Carousel1
                        cards={card9Carousel1Data}
                        title="Top Things to Do Nearby"
                        description="The bungalow sits amidst acres of lush green tea bushes, and a drive through the tea plantations to a colonial-era tea factory, where. you can observe the age old art of tea production, is included in your stay."
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>
            </div>

            {/* All Hotels in Nuwara Eliya */}
            <div className='w-full mt-12'>
                <div className='my-container'>
                    <Card7Carousel1
                        cards={card7Carousel1Data}
                        title="All Hotels in Nuwara Eliya"
                        description="Stay in very esteemed hotels with first rate comfort and service. Discover under cover of clouds the energetic cities, historic sites and lush tea estates of Hill Country. Like minded fine hotels ensure your perfect holiday."
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>
            </div>

            {/* Simply the best and most relevant way to travel */}
            <div className='w-full mt-12 py-12 bg-[#EAE6EA]'>
                <div className='my-container'>
                    <Section6
                        data={wayToTravel}
                        title="Simply the best and most relevant way to travel"
                        titleClassName=""
                    />
                </div>
            </div>

            {/* More one-of-a kind experiences */}
            <div className='w-full mt-12'>
                <div className='w-full'>
                    <Card1Carousel1
                        cards={experiences}
                        title="More one-of-a kind experiences"
                        description="You will also enjoy a Be My Guest experience and MAKE TRAVEL RESPONSIBLE Experience on every tour in addition to Stays with Tales experiences on some"
                        bgColor1="bg-[#125A55]"
                        bgColor2="bg-[#C3CCCB]"
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>
            </div>

            {/* Search Accommodation */}
            <div className='w-full mt-12'>
                <div className='w-full'>
                    <Section5
                        image="assets/images/by-destination.png"
                        description="Experience the finest in TGT’s Collection! ranging from Ultimate Luxury to Comfort. Discover carefully selected boutique hotels, villas, and luxurious accommodations throughout Asia, designed for unforgettable experiences of luxury."
                        button='Search Accommodation'
                        searchIcon="assets/icons/search-white.svg"
                        descriptionClassName=""
                    />
                </div>
            </div>

            {/* back to top */}
            <div className='w-full mt-12'>
                <Section19 />
            </div>

            <Gallery
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
                images={restaurant.map(item => item.icon)}
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
                gallerySwiper={gallerySwiper}
                setGallerySwiper={setGallerySwiper}
                thumbnailRef={thumbnailRef}
            />

            <Gallery
                isOpen={isRoomsGalleryOpen}
                onClose={() => setIsRoomsGalleryOpen(false)}
                images={roomsGalleryImages}
                activeImageIndex={roomsActiveImageIndex}
                setActiveImageIndex={setRoomsActiveImageIndex}
                gallerySwiper={roomsGallerySwiper}
                setGallerySwiper={setRoomsGallerySwiper}
                thumbnailRef={roomsThumbnailRef}
            />

        </>
    )
}
