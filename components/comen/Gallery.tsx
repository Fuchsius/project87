import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Popup } from '../Popup/Popup';
import Image from 'next/image';

interface GalleryProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    activeImageIndex: number;
    setActiveImageIndex: (index: number) => void;
    gallerySwiper: any;
    setGallerySwiper: (swiper: any) => void;
    thumbnailRef: React.RefObject<HTMLDivElement | null>;
}

const Gallery = memo(function Gallery({ isOpen, onClose, images, activeImageIndex, setActiveImageIndex, gallerySwiper, setGallerySwiper, thumbnailRef }: GalleryProps) {
    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}
            title="Gallery"
            className="bg-textcolor1"
            fullscreen={true}
            hideHeader={true}
        >
            <div className="relative h-screen bg-textcolor1 flex flex-col m-0 p-0 justify-center">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 text-white p-2 rounded-full transition-all duration-200"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className='w-full h-full flex-col items-center justify-center py-16 px-[110px] hidden md:flex'>
                    <div className="flex w-full h-[calc(100%-180px)] items-center justify-center">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            navigation={{
                                nextEl: '.swiper-button-next-gallery',
                                prevEl: '.swiper-button-prev-gallery',
                                disabledClass: 'swiper-button-disabled'
                            }}
                            loop={true}
                            className="w-full h-full swiper-no-padding"
                            initialSlide={activeImageIndex}
                            onSwiper={setGallerySwiper}
                            onSlideChange={(swiper) => {
                                setActiveImageIndex(swiper.realIndex);
                            }}
                        >
                            {images.map((src: string, index: number) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full h-full bg-black rounded-md overflow-hidden">
                                        <Image
                                            src={src}
                                            alt={`Gallery image ${index}`}
                                            fill
                                            className="object-cover"
                                            sizes="100vw"
                                            quality={80}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <button className="swiper-button-prev-gallery absolute left-10 top-1/2 -translate-y-1/2 z-10 ring-1 ring-white text-white p-2 rounded-full shadow-lg transition-all duration-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="swiper-button-next-gallery absolute right-10 top-1/2 -translate-y-1/2 z-10 ring-1 ring-white text-white p-2 rounded-full shadow-lg transition-all duration-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <div className="w-full h-[180px] overflow-hidden " ref={thumbnailRef}>
                        <div className="flex flex-row gap-4 h-[140px] items-center mt-[40px]">
                            {images.map((src: string, index: number) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setActiveImageIndex(index);
                                        if (gallerySwiper) {
                                            gallerySwiper.slideToLoop(index);
                                        }
                                    }}
                                    className={`relative cursor-pointer flex-shrink-0 h-full w-[200px] ${index === activeImageIndex ? 'border-2 border-white rounded-md' : ''}`}
                                >
                                    <div className="h-full overflow-hidden rounded-md">
                                        <Image
                                            src={src}
                                            alt={`Thumbnail ${index}`}
                                            fill
                                            className="object-cover transition-transform rounded-md duration-300"
                                            sizes="200px"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full h-full overflow-y-auto md:hidden block py-16 px-12">
                    {images.map((src: string, index: number) => (
                        <div key={index} className="relative w-full aspect-video mb-4 rounded-md">
                            <Image
                                src={src}
                                alt={`Image ${index}`}
                                fill
                                className="object-cover rounded-md"
                                sizes="100vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Popup>
    );
});

export default Gallery;