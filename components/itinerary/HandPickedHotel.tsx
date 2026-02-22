import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Title3 from '@/components/comen/title/Title3';
import Title4 from '@/components/comen/title/Title4';
import Card7 from '@/components/comen/card/Card7';

export default function HandPickedHotel() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        slidesToScroll: 'auto',
        containScroll: "keepSnaps",
        align: "start",
        breakpoints: {
            '(min-width: 1024px)': { slidesToScroll: 4 },
            '(min-width: 768px)': { slidesToScroll: 3 },
            '(min-width: 640px)': { slidesToScroll: 2 },
        }
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

    return (
        <>

            <div className='my-container mt-12'>

                <div className="mt-8 flex items-center justify-between">
                    <div className='md:max-w-[60%] w-full'>
                        <Title3 title="Stylish Hand-picked Hotels" />
                        <p className="description-2 mt-2">Choose from our carefully selected hotels that offer a unique blend of comfort and style, ensuring you have a memorable stay.</p>
                    </div>
                    <div className=" items-center gap-3 mt-2 md:flex hidden">
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

                <div className="relative w-full mx-auto mt-4">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {slides.map((slide) => (
                                <div key={slide.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] p-2">
                                    <Card7 image="/assets/images/by-destination.png"
                                        title="Grand Hotel"
                                        title2="Colombo City Tour with Photographer Mark Forbes"
                                        description="The luxurious Mahoora Safari Camp is located on the border of Wilpattu National Park, known for its leopards. A quintessential glamping experience and satisfying blend of comfort and nature,"
                                        facilities={["Bar", "Room", "Service", "Laundry", "Gym", "Swimming Pool", "24-hour Front Desk"]} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="w-full mt-4 flex justify-center">
                        <div className="flex items-center gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        emblaApi?.scrollTo(index);
                                        setSelectedIndex(index);
                                    }}
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

        </>
    )
}
