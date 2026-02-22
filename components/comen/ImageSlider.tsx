import React, { useState, useRef, useEffect, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('./Gallery'), { ssr: false });

interface ImageSliderProps {
    images: string[];
}

const ImageSlider = memo(function ImageSlider({ images }: ImageSliderProps) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [gallerySwiper, setGallerySwiper] = useState(null);
    const thumbnailRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (thumbnailRef.current) {
            const container = thumbnailRef.current;
            const itemWidth = 200; // w-32 = 128px
            const gap = 16; // gap-4 = 16px
            const padding = 16; // p-4 = 16px
            const scrollLeft = activeImageIndex * (itemWidth + gap) + padding - container.clientWidth / 2 + itemWidth / 2;
            container.scrollLeft = Math.max(0, scrollLeft);
        }
    }, [activeImageIndex]);

    return (
        <div className="w-full py-10 bg-gray-50 relative">
            <div className="w-full mx-auto relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
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
                        0: { slidesPerView: .95, spaceBetween: 0, centeredSlides: true },
                        640: { slidesPerView: 1.2, spaceBetween: 15, centeredSlides: true },
                        768: { slidesPerView: 1.2, spaceBetween: 15, centeredSlides: true },
                        1024: { slidesPerView: 1.2, spaceBetween: 20, centeredSlides: true }
                    }}
                >
                    {images.map((src: string, index: number) => (
                        <SwiperSlide key={index} className="transition-all duration-300 ease-out transform cursor-default">
                            <div className="relative aspect-[1/.48] sm:rounded-md rounded-none overflow-hidden group">
                                <Image
                                    src={src}
                                    alt={`Slide ${index}`}
                                    fill
                                    className="object-cover transition-transform duration-300"
                                    loading={index < 2 ? 'eager' : 'lazy'}
                                    sizes="(max-width: 768px) 95vw, (max-width: 1024px) 1200px, 1440px"
                                    quality={80}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0  transition-opacity duration-300" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-100  transition-opacity duration-300">
                                    <button
                                        onClick={() => {
                                            setActiveImageIndex(index);
                                            setIsGalleryOpen(true);
                                        }}
                                        className="
                                            bg-myred/90 text-white px-6 py-[11px] rounded-md 
                                            flex items-center gap-2 transition-all duration-200
                                            shadow-lg font-bold text-base
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
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Gallery
                isOpen={isGalleryOpen}
                onClose={() => {
                    setIsGalleryOpen(false);
                    setActiveImageIndex(0);
                }}
                images={images}
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
                gallerySwiper={gallerySwiper}
                setGallerySwiper={setGallerySwiper}
                thumbnailRef={thumbnailRef}
            />
        </div>
    );
});

export default ImageSlider;
