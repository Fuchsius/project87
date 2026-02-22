"use client";

import React, { useState } from "react";
import { Button } from "@/components/comen/button";
import { CalendarDays, Flag } from "lucide-react";
import Image from "next/image";
import { FaPlusCircle } from "react-icons/fa";
import { BsZoomIn } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { useCompareTripsStore } from "@/stores/compareTripsStore";
import { CgClose } from "react-icons/cg";
import { TripPopup } from "@/components/Popup/TripPopup";
import { useRouter } from "next/navigation";
import RenderStar from "@/components/RenderStar";

const TourCard = ({ tour, isShowMap, isPricePerDay }: any) => {
  const { clearTrips, compareTrips, hasTrip, addTrip, removeTrip } =
    useCompareTripsStore();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="rounded-lg overflow-hidden bg-white flex flex-1 flex-col drop-shadow-md max-w-xl mx-auto w-full !h-full">
        <div className="aspect-video w-full overflow-hidden relative">
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
            <BsZoomIn strokeWidth={0.7} className="ml-1" />
            <span className="ml-1 text-sm font-medium">Quick View</span>
          </button>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex flex-col gap-[10px] mb-4">
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
            <p className="font-sourceSerif font-semibold text-textcolor2 leading-5">
              {tour.description}
            </p>
          </div>

          <div className="w-full mt-auto ">
            {tour.saveUpTo ? (
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-medium text-45">From</span>
                <span className="text-base font-semibold text-myred">
                  US$ {isPricePerDay ? Math.floor((tour.price - tour.saveUpTo) / tour.days).toLocaleString() + " per day" : (tour.price - tour.saveUpTo).toLocaleString()}
                </span>

                <span className="text-xs text-textcolor1 line-through ms-2 font-extralight">
                  Was US$ {isPricePerDay ? Math.floor(tour.price / tour.days).toLocaleString() + " per day" : tour.price.toLocaleString()}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-medium text-45">From</span>
                <span className="text-base font-semibold text-textcolor1">
                  US$ {isPricePerDay ? Math.floor(tour.price / tour.days).toLocaleString() + " per day" : tour.price.toLocaleString()}
                </span>
              </div>
            )}
            <div className="flex gap-4 mt-2">
              <Button
                variant="outline"
                size="lg"
                className="w-full font-semibold text-base px-0"
                onClick={() => {
                  setIsPopupOpen(true);
                }}
              >
                Easy Quote
              </Button>
              <Button
                variant="default"
                size="lg"
                className="w-full font-semibold text-base px-0 "
                onClick={() => {
                  router.push(`/tours/${tour.slug}`);
                }}
              >
                View Trip
              </Button>
            </div>

            {compareTrips.length > 0 && hasTrip(tour.id) ? (
              <button
                className="flex text-sm font-bold text-textcolor1 items-center gap-2 mr-auto mt-3"
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
                className="flex text-sm font-bold text-textcolor1 items-center gap-2 mr-auto mt-3 disabled:cursor-not-allowed disabled:opacity-50 disabled:text-seletedred"
                onClick={() => {
                  addTrip(tour);
                }}
              >
                <FaPlusCircle />
                Add to compare
              </button>
            )}
          </div>
        </div>
      </div>

      <TripPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        tripData={tour}
      />
    </>
  );
};

export default TourCard;
