import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Title3 from "@/components/comen/title/Title3";
import Title5 from "@/components/comen/title/Title5";
import Title4 from "@/components/comen/title/Title4";
import Card8 from "@/components/comen/card/Card8";

export default function ExperienceCarousel({ optionalExperiences, day }: {
    optionalExperiences: any,
    day: any
}) {
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
        { 
            id: 1, 
            title: "Experience 1", 
            description: "Led by your Local Specialist, explore the delightful Old Town Square and see the detailed Astronomical Clock that attracts onlookers each hour.",
            image: "/assets/images/tour-images/image01.png",
            classNameTitle: "",
            classNameDescription: ""
         },
         { 
            id: 2, 
            title: "Experience 2", 
            description: "Led by your Local Specialist, explore the delightful Old Town Square and see the detailed Astronomical Clock that attracts onlookers each hour.",
            image: "/assets/images/tour-images/image01.png",
            classNameTitle: "",
            classNameDescription: ""
         },
         { 
            id: 3, 
            title: "Experience 3", 
            description: "Led by your Local Specialist, explore the delightful Old Town Square and see the detailed Astronomical Clock that attracts onlookers each hour.",
            image: "/assets/images/tour-images/image01.png",
            classNameTitle: "",
            classNameDescription: ""
         },
         { 
            id: 4, 
            title: "Experience 4", 
            description: "Led by your Local Specialist, explore the delightful Old Town Square and see the detailed Astronomical Clock that attracts onlookers each hour.",
            image: "/assets/images/tour-images/image01.png",
            classNameTitle: "",
            classNameDescription: ""
         },
         { 
            id: 5, 
            title: "Experience 5", 
            description: "Led by your Local Specialist, explore the delightful Old Town Square and see the detailed Astronomical Clock that attracts onlookers each hour.",
            image: "/assets/images/tour-images/image01.png",
            classNameTitle: "",
            classNameDescription: ""
         },
       
    ];

    return (
        <div className="w-full">
            <div className="mt-8 flex items-center justify-between">
                <Title3 title="Included and optional experiences" />
                <div className="flex items-center gap-3">
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
                            <div key={slide.id} className="flex-[0_0_100%] md:flex-[0_0_33.333%] p-2">
                                <Card8
                                    image={slide.image}
                                    title={slide.title}
                                    description={slide.description}
                                    classNameTitle={slide.classNameTitle!}
                                    classNameDescription={slide.classNameDescription!}
                                />
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
    );
}