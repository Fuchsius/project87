import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect } from "react";
// import '@/css/carousel2.css'

const TravelResponsibleCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: false,
    dragFree: false,
  });

  // Update carousel settings based on screen size
  useEffect(() => {
    const updateCarouselOptions = () => {
      if (emblaApi) {
        // Set number of slides visible based on screen size
        if (window.innerWidth >= 1024) { // lg breakpoint
          emblaApi.reInit({
            align: "start",
            slidesToScroll: 1,
            containScroll: "trimSnaps",
            loop: false,
            dragFree: false,
          });
        } else {
          emblaApi.reInit({
            align: "start",
            slidesToScroll: 1,
            containScroll: "trimSnaps",
            loop: false,
            dragFree: false,
          });
        }
      }
    };

    // Initial setup
    updateCarouselOptions();

    // Add resize listener
    window.addEventListener('resize', updateCarouselOptions);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCarouselOptions);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const carouselItems = [
    {
      image: "/assets/images/tour-images/boutique-sri-lanka.png",
      title: "MAKE TRAVEL MATTER® Experiences",
      description:
        "Every one of our tours includes at least one conscious travel experience that supports one or more of the United Nations Sustainable Development Goals (SDGS). Look out for yours within the day-by-day trip itinerary.",
      altText: "Traditional weavers in colorful clothing",
    },
    {
      image: "/assets/images/tour-images/boutique-sri-lanka.png",
      title: "Net-zero by 2050",
      description:
        "Travel knowing our 4-point climate action plan will ensure net-zero greenhouse gas emissions by 2050.",
      altText: "Hands planting a seedling in soil",
    },
    {
      image: "/assets/images/tour-images/boutique-sri-lanka.png",
      title: "Support Local",
      description:
        "Your tour directly supports local communities by visiting family-run businesses, UNESCO sites and places of cultural significance.",
      altText: "Person working in a herb garden",
    },
    {
      image: "/assets/images/tour-images/boutique-sri-lanka.png",
      title: "Support Local",
      description:
        "Your tour directly supports local communities by visiting family-run businesses, UNESCO sites and places of cultural significance.",
      altText: "Person working in a herb garden",
    },
    {
      image: "/assets/images/tour-images/boutique-sri-lanka.png",
      title: "Support Local",
      description:
        "Your tour directly supports local communities by visiting family-run businesses, UNESCO sites and places of cultural significance.",
      altText: "Person working in a herb garden",
    },
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      <div className=" bg-e6 rounded-t-lg h-1/2 mx-auto max-w-[1536px] absolute top-0 left-0 right-0 translate-y-24" />
      <div className=" bg-mygreen rounded-t-lg h-1/2 mx-auto max-w-[1536px] absolute top-0 left-0 right-0" />
      <div className=" relative my-container">
        <div className="text-center mb-8 flex flex-col z-50">
          <h1 className=" text-white text-center font-oswald text-4xl lg:text-[40px] mb-6">
            WE MAKE TRAVEL RESPONSIBLE
          </h1>
          <h5 className="text-white text-center text-lg">
            You'll make positive impact to people, planet and wildlife
            throughout this tour
          </h5>
        </div>

        <div className="relative">
          {/* Add custom CSS for reduced gap */}
          <style jsx>{`
            @media (min-width: 1024px) {
              .embla__container {
                gap: 0.5rem; /* Reduced gap between slides */
              }
              .embla__slide {
                flex: 0 0 calc(33.333% - 0.35rem); /* Slightly less than 1/3 to account for gap */
                max-width: calc(33.333% - 0.35rem);
              }
            }
          `}</style>
          <div className="embla overflow-x-hidden" ref={emblaRef}>
            <div className="embla__container flex h-full lg:gap-2">
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className="embla__slide flex-grow-0 flex-shrink-0 min-h-full lg:w-1/3 pr-4 lg:pr-2 ps-4 lg:ps-2 pb-5"
                >
                  <div className="bg-white w-full h-full rounded-lg overflow-hidden shadow-lg flex flex-col">
                    <div className=" w-full aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.altText}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-5 md:p-6 text-textcolor1 flex flex-col text-center w-full flex-1">
                      <h3 className="text-xl font-bold mb-4 font-sourceSerif ">
                        {item.title}
                      </h3>
                      <p className="mt-2 mb-5 text-sm">{item.description}</p>
                      <div className="mt-auto text-textcolor1 text-sm underline underline-offset-4 decoration-myred decoration-dotted hover:decoration-solid cursor-pointer">
                        Find out more
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -top-12 transform -translate-y-1/2 w-full hidden lg:flex items-center justify-end gap-x-5 ">
            <button
              onClick={scrollPrev}
              className="bg-white/50 hover:bg-white/75 rounded-full p-2"
            >
              <ChevronLeft className="text-textcolor1" />
            </button>
            <button
              onClick={scrollNext}
              className="bg-white/50 hover:bg-white/75 rounded-full p-2"
            >
              <ChevronRight className="text-textcolor1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelResponsibleCarousel;