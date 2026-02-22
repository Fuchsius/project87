"use client";

import React, { useState } from "react";
import { Button } from "@/components/comen/button";
import { CalendarDays, Flag } from "lucide-react";
import Image from "next/image";
import { FaPlusCircle, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { BsZoomIn } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { TripPopup } from "@/components/Popup/TripPopup";
import RenderStar from "@/components/RenderStar";
import { useCompareTripsStore } from "@/stores/compareTripsStore";
import { CgClose } from "react-icons/cg";

import { TOUR_DATA } from "@/data/tours.data";

type TripPopupData = React.ComponentProps<typeof TripPopup>["tripData"];

const TourCardList = ({ tour, isShowMap, isPricePerDay }: any) => {
  const { clearTrips, compareTrips, hasTrip, addTrip, removeTrip } =
    useCompareTripsStore();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const popupTripData: TripPopupData = {
    title: tour.title ?? "",
    subtitle: tour.subtitle ?? "",
    rating: tour.rating ?? 0,
    days: tour.days ?? 0,
    locations: tour.locationsCount ?? 0,
    isCounty: tour.isCounty ?? false,
    price: tour.price ?? 0,
    oldPrice: tour.oldPrice,
    itinerary: tour.itinerary ?? [],
    mapImageSrc: tour.mapImageSrc ?? "",
    image: tour.image ?? "",
  };

  return (
    <>
      <div className="rounded-lg overflow-hidden bg-white flex flex-1 drop-shadow-md mx-auto w-full min-h-[300px]">
        <div className="h-full w-[28%] overflow-hidden relative">
          <img
            src={isShowMap ? tour.mapImageSrc : tour.image}
            alt={tour.title}
            className={`w-full h-full object-center ${isShowMap ? "object-contain" : "object-cover"}`}
          />

          {tour.saveUpTo && (
            <div className=" w-full absolute top-2 flex items-center justify-between gap-5">
              <div className="bg-[url(/assets/images/bg/bglabel.svg)] bg-cover bg-right text-white flex items-center justify-center ps-5 pe-6 py-1 cursor-default">
                <FaTag />
                <span className="ml-2 text-base text-start font-medium">
                  Save up to ${tour.saveUpTo}
                </span>
              </div>

              <Badge
                variant={"red"}
                className=" mr-4 text-xs text-nowrap font-medium"
              >
                Big Tour Sale
              </Badge>
            </div>
          )}

          <button
            className="absolute bottom-3 left-3 bg-white text-textcolor1 flex items-center justify-center rounded-md p-1"
            onClick={() => setIsPopupOpen(true)}
          >
            <BsZoomIn strokeWidth={1} className="ml-1" />
            <span className="ml-1 text-sm font-medium">Quick View</span>
          </button>
        </div>
        <div className="p-5 flex flex-1">
          <div className="flex flex-col gap-2 w-full">
            {/* Render the rating stars dynamically */}
            <RenderStar rating={tour.rating} />

            <h4 className="font-sourceSerif text-lg font-bold text-textcolor1">
              {tour.title}
            </h4>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-textcolor1">
                <CalendarDays size={16} />
                <div className="text-xs mt-auto font-medium">
                  {tour.duration}
                </div>
              </div>

              <div className="flex items-center gap-2 text-textcolor1">
                <Image
                  src={"/assets/icons/send.svg"}
                  alt={tour.title}
                  width={16}
                  height={16}
                />
                <div className="text-xs mt-auto font-medium">
                  {tour.locations}
                </div>
              </div>

              <div className="flex items-center gap-2 text-textcolor1">
                <Flag size={16} />
                <p className="text-xs mt-auto font-medium">{tour.country}</p>
              </div>
            </div>
            <p className="font-sourceSerif font-semibold text-textcolor2 leading-5 max-w-sm">
              {tour.description}
            </p>

            {/* <button
              className="flex text-sm font-medium text-textcolor1 items-center gap-2
           mr-auto mt-auto"
              onClick={() => {
                addTrip(tour);
              }}
            >
              <FaPlusCircle />
              Add to compare
            </button> */}

            {hasTrip(tour.id) ? (
              <button
                className="flex text-sm font-medium text-textcolor1 items-center gap-2 mr-auto mt-auto"
                onClick={() => {
                  removeTrip(tour.id);
                }}
              >
                <div className=" bg-seletedred rounded-full h-4 w-4 flex items-center justify-center overflow-hidden text-white p-[3px]">
                  <CgClose strokeWidth={1} />
                </div>
                Remove from compare
              </button>
            ) : (
              <button
                disabled={compareTrips.length >= 4}
                className="flex text-sm font-medium text-textcolor1 items-center gap-2 mr-auto mt-auto disabled:cursor-not-allowed disabled:opacity-50 disabled:text-seletedred"
                onClick={() => {
                  addTrip(tour);
                }}
              >
                <FaPlusCircle />
                Add to compare
              </button>
            )}
          </div>

          <div className="min-w-60 max-w-60 my-auto bg-[#F2F2F2] p-5 h-full flex flex-col justify-center rounded-lg">
            {tour.saveUpTo ? (
              <div className="flex flex-col items-center gap-2 mb-3">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs font-medium text-45">From</span>
                  <span className="text-xl font-semibold text-myred">
                    US$ {isPricePerDay ? Math.floor((tour.price - tour.saveUpTo) / tour.days) + " per day" : tour.price - tour.saveUpTo}
                  </span>
                </div>

                <span className="text-xs text-textcolor1 line-through font-extralight">
                  Was US$ {isPricePerDay ? Math.floor(tour.price / tour.days) + " per day" : tour.price}
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-xs font-medium text-45">From</span>
                <span className=" text-xl font-semibold text-textcolor1">
                  US$ {isPricePerDay ? Math.floor(tour.price / tour.days) + " per day" : tour.price}
                </span>
              </div>
            )}
            <div className="flex flex-col gap-4 mt-2">
              <Button
                variant="outline"
                size="lg"
                className="w-full font-semibold text-base"
              >
                Easy Quote
              </Button>
              <Button
                variant="default"
                size="lg"
                className="w-full font-semibold text-base"
              >
                View Trip
              </Button>
            </div>
          </div>
        </div>
      </div>

      <TripPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        tripData={popupTripData}
      />
    </>
  );
};

export default TourCardList;
