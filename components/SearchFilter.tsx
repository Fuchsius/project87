import React from "react";
import PriceRangeSelector from "./PriceRangeSelector";
import {
  destinations,
  MY_TRIP_LENGTH,
  SPECIAL_OFFERS,
  THEMES,
  TOUR_STYLES,
} from "@/data/filters.data";
import DestinationSelector from "./search-filter/DestinationSelector";

const SearchFilter = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="p-5">
        <div className=" flex items-center justify-between">
          <div className=" text-lg font-bold font-sourceSerif text-textcolor1">
            Filter search results
          </div>
          <button className=" bg-e6 text-textcolor1 py-[6px] font-medium px-4 hover:brightness-95">
            Reset
          </button>
        </div>
      </div>

      <div className=" w-full border-t border-e1" />

      <div className="p-5 flex flex-col flex-1 gap-5">
        <div className=" flex flex-col gap-3">
          <div className=" text-lg font-bold font-sourceSerif text-textcolor1">
            My destinations
          </div>
          <DestinationSelector destinations={destinations} />
        </div>

        <div className=" w-full border-t border-e1" />

        <div className=" flex flex-col gap-3">
          <div className=" text-lg font-bold font-sourceSerif text-textcolor1">
          Holiday Style
          </div>
          <div className=" flex flex-col">
            {TOUR_STYLES.map((tourStyle, index) => (
              <label
                key={index}
                className={`flex items-center space-x-3 ${index === 0 ? "border": " border-x border-b"} py-2 px-3 border-e1`}
              >
                <input name={`tourStyle-${index}`} type="checkbox" className="w-6 h-6 rounded-none" />
                <span className="text-sm font-medium text-textcolor1">
                  {tourStyle.title}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className=" w-full border-t border-e1" />

        <div className=" flex flex-col gap-3">
          <div className=" text-lg font-bold font-sourceSerif text-textcolor1">
            Themes
          </div>
          <div className=" flex flex-col">
            {THEMES.map((theme, index) => (
              <label
                key={index}
                className={`flex items-center space-x-3 ${index === 0 ? "border": " border-x border-b"} py-2 px-3 border-e1`}
              >
                <input name={`theme-${index}`} type="checkbox" className="w-6 h-6 rounded-none" />
                <span className="text-sm font-medium text-textcolor1">
                  {theme.title}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className=" w-full border-t border-e1" />

        <div className=" flex flex-col gap-3">
          <div className=" text-lg font-bold font-sourceSerif text-textcolor1">
            Special offers
          </div>
          <div className=" flex flex-col">
            {SPECIAL_OFFERS.map((theme, index) => (
              <label
                key={index}
                className={`flex items-center space-x-3 ${index === 0 ? "border": " border-x border-b"} py-2 px-3 border-e1`}
              >
                <input name={`specialOffer-${index}`} type="checkbox" className="w-6 h-6 rounded-none" />
                <span className="text-sm font-medium text-textcolor1">
                  {theme.title}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className=" w-full border-t border-e1" />

        <div className=" flex flex-col gap-3">
          <div className=" text-lg font-bold font-sourceSerif text-textcolor1">
            My trip Length
          </div>
          <div className=" flex flex-col">
            {MY_TRIP_LENGTH.map((theme, index) => (
              <label
                key={index}
                className={`flex items-center space-x-3 ${index === 0 ? "border": " border-x border-b"} py-2 px-3 border-e1`}
              >
                <input name={`tripLength-${index}`} type="checkbox" className="w-6 h-6 rounded-none" />
                <span className="text-sm font-medium text-textcolor1">
                  {theme.title}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className=" w-full border-t border-e1" />

        <div className=" flex flex-col gap-3">
          <div className=" text-lg font-bold font-sourceSerif text-textcolor1">
            Per person budget
          </div>
          <PriceRangeSelector defaultMin={500} defaultMax={10000} />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
