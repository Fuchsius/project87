"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "../EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './handpickhotel.css'

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const HandPickedHotels: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 4000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className=" flex items-end justify-between gap-x-5 mb-12">
        <div className=" flex flex-col w-full">
          <div className=" text-textcolor1 text-2xl lg:text-3xl font-bold font-sourceSerif tracking-tight">
            Stylish Hand-picked Hotels
          </div>
          <div className=" text-textcolor2 leading-normal mt-3">
            Stay at top rated hotels in desirable locations with great service
            and comfortable beds. Hotel of comparable standard and location may
            be utilized.
          </div>
        </div>

        <div className="flex w-auto gap-5">
          <button
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className=" w-10 h-10 flex items-center justify-center bg-bggray1 rounded-full text-textcolor2 hover:shadow-lg"
          >
            <ChevronLeft size={24} strokeWidth={3} className="self-center" />
          </button>
          <button
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className=" w-10 h-10 flex items-center justify-center bg-bggray1 rounded-full text-textcolor2 hover:shadow-lg"
          >
            <ChevronRight size={24} strokeWidth={3} className="self-center" />
          </button>
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className=" flex flex-col rounded-lg relative border overflow-hidden">
                <div className=" w-full aspect-[3/4] overflow-hidden relative">
                  <img
                    src="/assets/images/tour-images/image01.png"
                    alt="hotel-image"
                    className=" w-full object-cover object-center h-full"
                  />
                </div>
                <div className=" flex items-center justify-between py-4 px-2">
                  <div className=" font-bold text-textcolor1 text-base">
                    Hotel Taj Samudra
                  </div>
                  <div className=" flex flex-nowrap gap-[2px]">
                    <div className=" w-4 h-4 border-2 border-textcolor1 bg-textcolor1 rounded-full"></div>
                    <div className=" w-4 h-4 border-2 border-textcolor1 bg-textcolor1 rounded-full"></div>
                    <div className=" w-4 h-4 border-2 border-textcolor1 bg-textcolor1 rounded-full"></div>
                    <div className=" w-4 h-4 border-2 border-textcolor1 bg-textcolor1 rounded-full"></div>
                    <div className=" w-4 h-4 border-2 border-textcolor1 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HandPickedHotels;
