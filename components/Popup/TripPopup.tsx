// Usage example component (TripPopup.tsx)
import React, { useEffect, useMemo, useState } from "react";
import { Popup } from "./Popup";
import Image from "next/image";
import RenderStar from "@/components/RenderStar";
import { CalendarDays } from "lucide-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Button } from "@/components/comen/button";

interface TripPopupProps {
  isOpen: boolean;
  onClose: () => void;
tripData: {
    title: string;
    subtitle: string;
    rating: number;
    days: number;
    locations: number;
    isCounty: boolean;
    price: number;
    oldPrice?: number;
    itinerary: {
      day: number;
      location: string;
      activities?: string;
      droppins?: string[];
    }[];
    mapImageSrc: string;
    image: string | string[];
  };
}

export const TripPopup: React.FC<TripPopupProps> = ({
  isOpen,
  onClose,
  tripData,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = useMemo(() => {
    const unique = new Set<string>();

    if (tripData.mapImageSrc) {
      unique.add(tripData.mapImageSrc);
    }

    const tripImages = tripData.image;

    if (Array.isArray(tripImages)) {
      tripImages.forEach((src) => {
        if (src) {
          unique.add(src);
        }
      });
    } else if (tripImages) {
      unique.add(tripImages);
    }

    return Array.from(unique);
  }, [tripData]);

  const currentImage = images[currentIndex] ?? tripData.mapImageSrc;

  useEffect(() => {
    setCurrentIndex(0);
  }, [tripData, isOpen]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < images.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Quick View"
      className="max-w-3xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="md:col-span-3 relative">
          <div className="relative h-[300px] md:h-[420px] w-full overflow-hidden mb-4">
            <div
              className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="relative w-full h-[300px] md:h-[420px] flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`${tripData.title} slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="select-none"
                  />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 md:flex hidden items-center justify-between p-6 ">
              <button
                type="button"
                className={`pointer-events-auto bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center transition-opacity ${currentIndex === 0 ? "opacity-60 cursor-not-allowed" : "hover:opacity-80"}`}
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous image"
              >
                <IoIosArrowBack
                  size={24}
                  className={` ${currentIndex === 0 ? "text-[#00000040]" : "text-[#000000]"}`}
                />
              </button>
              <button
                type="button"
                className={`pointer-events-auto bg-[#F2F2F2] w-10 h-10 rounded-full flex items-center justify-center transition-opacity ${currentIndex === images.length - 1 ? "opacity-60 cursor-not-allowed" : "hover:opacity-80"}`}
                onClick={handleNext}
                disabled={currentIndex === images.length - 1}
                aria-label="Next image"
              >
                <IoIosArrowForward
                  size={24}
                  className={` ${currentIndex === images.length - 1 ? "text-[#00000040]" : "text-[#000000]"}`}
                />
              </button>
            </div>
          </div>

          <div className="flex mt-4 space-x-3 overflow-x-auto pb-2 ps-3">
            {images.map((thumbSrc, index) => (
              <div
                key={`${thumbSrc}-${index}`}
                className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden relative cursor-pointer border-2 transition-colors ${currentIndex === index ? "shadow-md" : "border-transparent bg-gray-200"}`}
                onClick={() => setCurrentIndex(index)}
              >
                <Image
                  src={thumbSrc}
                  alt={`${tripData.title} thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 p-4 flex flex-col border-l-[2px] border-e6">
          <div className="flex items-center mb-3">
            <RenderStar rating={tripData.rating} fontSize="16px"/>
          </div>

          <h2 className="text-2xl font-sourceSerif font-bold text-textcolor1">
            {tripData.title}
          </h2>
          <p className="text-lg font-semibold font-sourceSerif text-textcolor2 mb-3">
            {tripData.subtitle}
          </p>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2 text-textcolor1">
              <CalendarDays size={14} />
              <div className="text-xs mt-auto font-semibold">
                {tripData.days} Days
              </div>
            </div>

            <div className="flex items-center gap-2 text-textcolor1">
              <Image
                src={"/assets/icons/send.svg"}
                alt="Locations"
                width={14}
                height={14}
              />
              <div className="text-xs mt-auto font-semibold">
                {tripData.locations} Locations
              </div>
            </div>

            <div className="flex items-center gap-2 text-textcolor1">
              <Image
                src={"/assets/icons/flag.svg"}
                alt="Locations"
                width={14}
                height={14}
              />
              <p className="text-xs mt-auto font-semibold">1 County</p>
            </div>
          </div>

          <h3 className="font-bold text-lg font-sourceSerif text-textcolor1 mb-2">
            Itinerary
          </h3>
          <div className="space-y-0 flex-grow overflow-y-auto max-h-[200px] mb-4">
            {tripData.itinerary.map((item, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 ml-1 mr-3 relative">
                  <div
                    className={`h-3 w-3 rounded-full bg-textcolor1 ${index === 0 || index === tripData.itinerary.length - 1
                      ? "ring-1 ring-offset-1 ring-textcolor1"
                      : ""
                      } flex items-center justify-center text-xs font-medium mt-1`}
                  />
                  {item.day < tripData.itinerary.length && (
                    <div
                      className={`absolute ${index == 0 ? "top-2" : "top-0"
                        } bottom-0 left-1/2 w-[0.5px] -ml-px bg-textcolor1`}
                    />
                  )}
                </div>
                <div className="pb-2">
                  <div className="text-sm font-bold text-textcolor1">
                    Day {item.day}: {item.location}
                  </div>
                  {item.droppins && (
                    <div className="text-xs text-textcolor2">
                      {item.droppins.join(" -> ")}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto border-t-2 border-e8 pt-4">
            <div className=" flex items-center justify-between">
              <div className=" flex flex-col">
                <div className="flex items-center mb-1">
                  <span className="text-sm font-semibold mr-1 text-myred">
                    Offers Available
                  </span>
                  <Image
                    src={"/assets/icons/quesionmark.svg"}
                    width={16}
                    height={16}
                    alt="Questions"
                    className="ml-1"
                  />
                </div>
                <div className=" flex items-center gap-2">
                  <div className="text-sm font-normal text-textcolor1">
                    From
                  </div>
                  <div className="flex items-baseline text-2xl font-bold text-myred">
                    <span className="mr-1">US$</span>
                    <span>{tripData.price.toLocaleString()}</span>
                  </div>
                </div>
                {tripData.oldPrice && (
                  <div className="text-xs line-through font-light text-color3 mr-1">
                    <span className="mr-1">Was US$</span>
                    {tripData.oldPrice.toLocaleString()}
                  </div>
                )}
              </div>
              <div className="flex items-center">
                <Button className="" size={"lg"}>
                  View Trip
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};
