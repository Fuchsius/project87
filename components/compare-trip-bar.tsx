"use client";

import Link from "next/link";
import { Button } from "./comen/button";
import { useState } from "react";
import { useCompareTripsStore } from "@/stores/compareTripsStore";
import { CgClose } from "react-icons/cg";
import { ChevronUp } from "lucide-react";

const CompareTripBar = () => {
  const { clearTrips, compareTrips, hasTrip, addTrip, removeTrip } =
    useCompareTripsStore();
  const [isCompareVisible, setIsCompareVisible] = useState(false);

  return (
    <>
      <div
        className={` bg-white w-full fixed transition-all duration-300  ${
          isCompareVisible && compareTrips.length > 0
            ? "translate-y-0 visible"
            : "translate-y-full invisible"
        } bottom-24 xl:hidden`}
      >
        <div className=" flex items-center justify-end p-4">
          <Button
            variant="outline"
            size="sm"
            className=" rounded-none text-base xl:hidden"
            onClick={() => {
              clearTrips();
            }}
          >
            Clear All
          </Button>
        </div>
        {compareTrips.length > 0 &&
          compareTrips.map((trip) => (
            <div
              key={trip.id}
              className="h-16 w-full gap-x-4 flex items-center p-3 text-sm text-textcolor1 relative border-t"
            >
              <div className=" h-full aspect-video">
                <img
                  src={trip?.image}
                  className=" w-full h-full object-cover rounded-sm object-center"
                />
              </div>
              <div className=" font-bold text-base">{trip.title}</div>
              <button
                className="flex bg-seletedred rounded-full h-5 w-5 items-center justify-center overflow-hidden text-white p-[3px] ml-auto"
                onClick={() => {
                  removeTrip(trip.id);
                }}
              >
                <CgClose strokeWidth={1} />
              </button>
            </div>
          ))}
      </div>
      <div
        className={` transition-all duration-200 ${
          compareTrips.length > 0 ? " visible" : " translate-y-full invisible"
        } fixed bottom-0 left-0 right-0 bg-white h-24 drop-shadow-lg p-2 xl:px-8 xl:py-4 flex flex-col xl:flex-row items-center justify-between`}
      >
        <div className="flex gap-5 h-8 xl:h-full max-w-md xl:max-w-none">
          {compareTrips.length > 0 &&
            compareTrips.map((trip) => (
              <div
                key={trip.id}
                className="h-full aspect-video w-16 xl:w-48 flex shadow-lg drop-shadow-lg gap-x-2 rounded-md items-center p-[2px] xl:px-2 xl:py-3 text-sm text-textcolor1 relative border"
              >
                <div className=" h-full aspect-video">
                  <img
                    src={trip?.image}
                    className=" w-full h-full object-cover rounded-sm object-center"
                  />
                </div>
                <div className="hidden xl:block">{trip.title}</div>
                <button
                  className="absolute hidden xl:flex -top-2 -right-2 bg-seletedred rounded-full h-4 w-4 items-center justify-center overflow-hidden text-white p-[3px]"
                  onClick={() => {
                    removeTrip(trip.id);
                  }}
                >
                  <CgClose strokeWidth={1} />
                </button>
              </div>
            ))}
          {[...Array(4 - compareTrips.length)].map((_, index) => (
            <div
              key={index}
              className="h-full aspect-video w-16 xl:w-48 flex shadow-lg drop-shadow-lg rounded-md items-center 
            relative border border-dashed border-myred bg-gray-50"
            ></div>
          ))}

          <div className=" ml-full my-auto xl:hidden">
            <ChevronUp
              size={20}
              className={` my-auto text-textcolor1 cursor-pointer ${
                isCompareVisible && "rotate-180"
              }`}
              onClick={() => setIsCompareVisible(!isCompareVisible)}
            />
          </div>
        </div>
        <div className="flex gap-5 w-full xl:w-auto max-w-sm xl:max-w-none">
          <Button
            variant="outline"
            size="lg"
            className=" w-full hidden xl:block"
            onClick={() => {
              clearTrips();
            }}
          >
            Clear All
          </Button>
          <Button
            variant="default"
            size="lg"
            className=" w-full hidden xl:block whitespace-nowrap"
            asChild
          >
            <Link
              href={`/compare?tourOptionIds=${compareTrips.map(
                (trip) => trip.id
              )}`}
            >
              Compare Trips
            </Link>
          </Button>
          <Button
            variant="default"
            size="sm"
            className="rounded-none w-full text-base xl:hidden whitespace-nowrap"
            asChild
          >
            <Link
              href={`/compare?tourOptionIds=${compareTrips.map(
                (trip) => trip.id
              )}`}
            >
              Compare Trips
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CompareTripBar;
