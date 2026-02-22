import React, { useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Title2 from '@/components/comen/title/Title2'
import Title3 from '@/components/comen/title/Title3';
import Title4 from '@/components/comen/title/Title4';

export default function WeMakeTravelResponsible() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        slidesToScroll: 1,
        containScroll: "keepSnaps",
        align: "start",
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        };

        emblaApi.on("select", onSelect);
        onSelect();

        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi]);

    const slides = [
        { id: 1, title: "Experience 1", description: "Led by your Local Specialist, explore the delightful Old Town Square and see the detailed Astronomical Clock that attracts onlookers each hour." },
        { id: 2, title: "Experience 2", description: "Led by your Local Specialist, explore the delightful Old Town Square and see the detailed Astronomical Clock that attracts onlookers each hour." },
        { id: 3, title: "Experience 3", description: "Led by your Local Specialist, explore the delightful Old Town Square and see the detailed Astronomical Clock that attracts onlookers each hour." },
        { id: 4, title: "Experience 4", description: "Led by your Local Specialist, explore the delightful Old Town Square and see the detailed Astronomical Clock that attracts onlookers each hour." },
        { id: 5, title: "Experience 5", description: "Led by your Local Specialist, explore the delightful Old Town Square and see the detailed Astronomical Clock that attracts onlookers each hour." },
    ];

    const divRef = useRef<HTMLDivElement>(null);
    const [divHeight, setDivHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (divRef.current) {
                setDivHeight(divRef.current.offsetHeight);
            }
        };

        updateHeight();

        window.addEventListener('resize', updateHeight);

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <>
            <div className="w-full mt-12 md:my-container mb-32" style={{ height: `${divHeight}px` }}>                <div className='w-full h-[280px] bg-mygreen md:rounded-t-md py-4 px-4'>
                <div className='w-full' ref={divRef}>
                    <h1 className='mt-8 text-4xl text-center font-bold text-white uppercase font-oswald'><span className='font-normal'>We</span> make travel responsible <sup >®</sup></h1>
                    <div className='w-full mt-4 flex items-center justify-center relative'>
                        <div className="md:max-w-[60%] w-full">
                            <p className=' text-sm text-center text-white '>You’ll make positive impact to people, planet and wildlife throughout this tour</p>
                        </div>
                        <div className="md:flex items-center gap-3 absolute right-4 hidden">
                            <button
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
                                onClick={scrollPrev}
                                disabled={!canScrollPrev}
                            >
                                <img src="/assets/icons/arrow-right-2.svg" alt="" className="rotate-180" />
                            </button>
                            <button
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
                                onClick={scrollNext}
                                disabled={!canScrollNext}
                            >
                                <img src="/assets/icons/arrow-right-2.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className='w-full min-h-[200px] relative mt-8 md:px-4'>
                        <div className="relative w-full mx-auto mt-4">
                            <div className="overflow-hidden" ref={emblaRef}>
                                <div className="flex">
                                    {slides.map((slide) => (
                                        <div key={slide.id} className="flex-[0_0_100%] md:flex-[0_0_33.333%] p-2">
                                            <div className="rounded-md overflow-hidden  shadow-lg">
                                                <div className="w-full md:h-48 sm:h-[300px] h-[250px] relative">
                                                    <img src="/assets/images/by-destination.png" alt="" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="p-4">
                                                    <Title4 title="MAKE TRAVEL MATTER® Experiences" className='text-center line-clamp-3' />
                                                    <p className='description-2 text-center line-clamp-3'>
                                                        Every one of our tours includes at least one conscious travel experience that supports one or more of the United Nations Sustainable Development Goals (SDGS).
                                                    </p>
                                                    <a href="" className='underline-1 font-normal text-sm text-center block mt-8 '>Find out more</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="w-full mt-4 flex justify-center">
                        <div className="flex items-center gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    className={`rounded-full transition-all duration-200 ${index === selectedIndex
                                        ? 'w-3 h-3 bg-myred'
                                        : 'w-2 h-2 bg-bggray2'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
                <div className='w-full h-[71.73px] bg-e6 '></div>


                            

            </div>
        </>
    )
}
