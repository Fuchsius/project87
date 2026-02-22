"use client";
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/comen/button';

const ReviewSlider = () => {
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            slidesToScroll: 1,
        },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    );

    const reviews = [
        {
            title: 'Sri Lanka - Paradise Found!',
            rating: 5,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            author: 'Lorem Ipsum is simply dummy text'
        },
        {
            title: 'Sri Lanka - Paradise Found!',
            rating: 5,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            author: 'Lorem Ipsum is simply dummy text'
        },
        {
            title: 'Amazing Experience in Sri Lanka!',
            rating: 5,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            author: 'Lorem Ipsum is simply dummy text'
        },
        {
            title: 'Beautiful Island Adventure',
            rating: 5,
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            author: 'Lorem Ipsum is simply dummy text'
        },
    ];

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi) emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const Star = () => (
        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );

    return (
        <div className="bg-bggray5 py-16">
            <div className="my-container">
                <div className="text-center mb-8">
                    <h2 className="text-[32px] font-bold font-sourceSerif text-textcolor1 mb-2">Unedited reviews</h2>
                    <div className="flex items-center justify-center">
                        <span className="text-sm text-textcolor1">Verified by</span>
                        <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="TripAdvisor" className="h-4 ml-2" />
                    </div>
                </div>

                <div className="relative">
                    {/* Arrow Navigation */}
                    <div className="absolute -top-12 -translate-y-1/2 right-2 hidden md:flex items-center justify-end gap-4 w-full z-10">
                        <button
                            onClick={scrollPrev}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none hover:bg-gray-100"
                            aria-label="Previous"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={scrollNext}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none hover:bg-gray-100"
                            aria-label="Next"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Carousel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {reviews.map((review, index) => (
                                <div key={index} className="min-w-full md:min-w-[50%] p-4">
                                    <div className="p-6 h-full text-center text-textcolor1">
                                        <h3 className="font-bold text-2xl">{review.title}</h3>
                                        <div className="flex items-center justify-center my-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} />
                                            ))}
                                        </div>
                                        <p className="text-sm mb-6">{review.content}</p>
                                        <p className="text-sm font-bold">- {review.author}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-6">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${index === selectedIndex ? 'bg-myred scale-110' : 'bg-gray-300'
                                    }`}
                                onClick={() => scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <Button size={'lg'}>
                        Read All Reviews
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;