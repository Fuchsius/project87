"use client";

import BreadCrumb from "@/components/BreadCrumb";
import BackButton from "@/components/comen/BackButton";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import { TOUR_DATA } from "@/data/tours.data";

// components
import MainDetails from "./MainDetails";
import CompareBasicInfo from "./BasicInfo";
import TripSummary from "./TripSummary";
import Itinerary from "./Itinerary";
import OverviewMap from "./OverviewMap";
import Facilites from "./Facilites";

const ComparePage = () => {

  const [basicInfo, setBasicInfo] = React.useState(true);
  const [tripDetails, setTripDetails] = React.useState(true);

  const [compare, setCompare] = React.useState<boolean[]>([true, true, true, true]);
  const [tripData, setTripData] = React.useState(TOUR_DATA.slice(0, 4));
  const [itineraryShowAll, setItineraryShowAll] = React.useState(false);

  // mobile selects: keep two distinct selected indices among visible comparisons
  const [firstSelected, setFirstSelected] = React.useState<number>(0);
  const [secondSelected, setSecondSelected] = React.useState<number>(1);

  // keep selections valid when compare state changes (e.g., item removed)
  React.useEffect(() => {
    const available = [0, 1, 2, 3].filter((i) => compare[i]);
    if (available.length === 0) return;
    let a = firstSelected;
    if (!available.includes(a)) a = available[0];
    let b = secondSelected;
    if (!available.includes(b) || b === a) {
      // pick the first available that's not a
      const next = available.find((i) => i !== a);
      b = typeof next === 'number' ? next : a; // if only one available, duplicate is acceptable visually
    }
    if (a !== firstSelected) setFirstSelected(a);
    if (b !== secondSelected) setSecondSelected(b);
  }, [compare]);

  // single remove handler shifts items left and clears the clicked slot
  const handleRemove = (idx: number) => {
    setCompare((prev) => {
      const comp = [...prev];
      const data = [...tripData];
      // clear clicked slot
      comp[idx] = false;
      // shift left for subsequent visible slots
      let i = idx;
      while (i < 3 && comp[i + 1]) {
        data[i] = data[i + 1];
        comp[i] = true;
        comp[i + 1] = false;
        i++;
      }
      setTripData(data);
      return comp;
    });
  };

  const slots = [0, 1, 2, 3];
  // order the visible indices so that selected ones come first for rendering
  const activeIndices = React.useMemo(() => {
    const available = slots.filter((i) => compare[i]);
    const ordered = [firstSelected, secondSelected].filter(
      (i, pos, arr) => compare[i] && arr.indexOf(i) === pos
    );
    const rest = available.filter((i) => !ordered.includes(i));
    const combined = [...ordered, ...rest];
    // pad to 4 with any remaining indices to keep mapping stable
    const remaining = slots.filter((i) => !combined.includes(i));
    return [...combined, ...remaining].slice(0, 4);
  }, [compare, firstSelected, secondSelected]);

  return (
    <>
      <div className="bg-white ">
        <div className=" flex flex-col items-center lg:items-start pt-4 pb-11">
          <BreadCrumb items={[
            { href: "/", label: "Home" },
            { label: "Compare" },
          ]} />

          <h2 className="text-xl md:text-2xl lg:text-3xl text-textcolor1 font-bold font-sourceSerif mt-8 w-full ">
            Compare
          </h2>

          <h3 className=" text-xl md:text-[22px] text-textcolor2 font-semibold font-sourceSerif w-full mt-2">
            Compare up to 4 trips before making your decision.
          </h3>
        </div>
      </div>

      <div className=" w-full pb-24 ">
        <div className="my-container ">
          <BackButton />
          <div className="block xl:hidden mt-2">
            <h1 className="font-sourceSerif font-bold text-lg text-textcolor1">Selected Tours</h1>
          </div>

          {(compare[2] || compare[3]) && (
            <div className="w-full mt-2 flex-row gap-4 xl:hidden flex">
              <div className="flex-1">
                <select
                  name="firstSelected"
                  className="w-full h-[40px] outline-none"
                  value={firstSelected}
                  onChange={(e) => {
                    const idx = Number(e.target.value);
                    setFirstSelected(idx);
                    // if second equals new first, try to move second to another available
                    if (idx === secondSelected) {
                      const options = [0, 1, 2, 3].filter((i) => compare[i] && i !== idx);
                      if (options.length > 0) setSecondSelected(options[0]);
                    }
                  }}
                >
                  {[0, 1, 2, 3]
                    .filter((i) => compare[i] && i !== secondSelected)
                    .map((i) => (
                      <option key={`first-${i}`} value={i}>
                        {tripData[i]?.title}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex-1">
                <select
                  name="secondSelected"
                  className="w-full h-[40px] outline-none"
                  value={secondSelected}
                  onChange={(e) => setSecondSelected(Number(e.target.value))}
                >
                  {[0, 1, 2, 3]
                    .filter((i) => compare[i] && i !== firstSelected)
                    .map((i) => (
                      <option key={`second-${i}`} value={i}>
                        {tripData[i]?.title}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          )}
          <div className="w-full h-full relative">

            {/* main details */}
            <div className="w-full flex flex-row gap-4 mt-[25px] overflow-hidden">
              <div className="flex-1 hidden xl:block">
                <h1 className="font-sourceSerif font-bold text-lg text-textcolor1">Selected Tours</h1>
              </div>

              {slots.map((i) => (
                <div key={`md-${i}`} className={`flex-1 bg-white ${i >= 2 ? "hidden xl:block" : ""}`}>
                  <MainDetails trip={tripData[activeIndices[i]]} compare={compare[activeIndices[i]]} onRemove={() => handleRemove(activeIndices[i])} />
                </div>
              ))}
            </div>

            {/* basic information */}
            <div className="w-full flex flex-row gap-4 mt-1">
              <div className="flex-1 hidden xl:block">
                <button className="font-figtree font-bold text-base p-[7px] bg-bggray4 w-full rounded-md flex items-center justify-between text-textcolor2" onClick={() => setBasicInfo(!basicInfo)}>Basic Information <IoIosArrowDown size={20} className={`text-black transition-all duration-300 ${basicInfo ? 'rotate-180' : ''}`} /></button>
                {basicInfo && (
                  <ul>
                    <li className="font-figtree font-medium text-base pl-[7px] pr-[7px] pt-[10px] pb-[10px] text-textcolor3">Number of days</li>
                    <li className="font-figtree font-medium text-base pl-[7px] pr-[7px] pt-[10px] pb-[10px] border-t border-border2 text-textcolor3">Number of places</li>
                    <li className="font-figtree font-medium text-base pl-[7px] pr-[7px] pt-[10px] pb-[10px] border-t border-border2 text-textcolor3">Countries visited</li>
                  </ul>
                )}
              </div>
              {slots.map((i) => (
                <div key={`bi-${i}`} className={`flex-1 ${i >= 2 ? "hidden xl:block" : ""}`}>
                  <CompareBasicInfo basicInfo={basicInfo} compare={compare[activeIndices[i]]} />
                </div>
              ))}
            </div>

            {/* trip summery  */}
            <div className="w-full flex flex-row gap-4 mt-1">

              <div className="flex-1 hidden xl:block">
                <button className="font-figtree font-bold text-base p-[7px] bg-bggray4 w-full rounded-md flex items-center justify-between text-textcolor2" onClick={() => setTripDetails(!tripDetails)}>Trip Details <IoIosArrowDown size={20} className={`text-black transition-all duration-300 ${tripDetails ? 'rotate-180' : ''}`} /></button>
                {tripDetails && (
                  <ul>
                    <li className="font-figtree font-medium text-base pl-[7px] pr-[7px] pt-[10px] pb-[10px] text-textcolor3">Trip Summary</li>
                  </ul>
                )}
              </div>
              {slots.map((i) => (
                <div key={`ts-${i}`} className={`flex-1 ${i >= 2 ? "hidden xl:block" : ""}`}>
                  <TripSummary tripDetails={tripDetails} compare={compare[activeIndices[i]]} />
                </div>
              ))}
            </div>

            {/* itinerary  */}
            <div className={`w-full flex flex-row gap-4 overflow-hidden ${tripDetails ? 'block' : 'h-0'}`}>
              <div className="flex-1 hidden xl:block">
                <ul>
                  <li className="font-figtree font-medium text-base pl-[7px] pr-[7px] pt-[10px] pb-[10px] border-t border-border2 text-textcolor3">Itinerary</li>
                </ul>
              </div>
              {slots.map((i) => (
                <div key={`it-${i}`} className={`flex-1 ${i >= 2 ? "hidden xl:block" : ""}`}>
                  <Itinerary compare={compare[activeIndices[i]]} showAll={itineraryShowAll} onToggle={() => setItineraryShowAll(v => !v)} />
                </div>
              ))}
            </div>

            {/* overview map  */}
            <div className={`w-full flex flex-row gap-4 overflow-hidden ${tripDetails ? 'block' : 'h-0'}`}>

              <div className="w-full flex-1 hidden xl:block">
                <ul>

                  <li className="font-figtree font-medium text-base pl-[7px] pr-[7px] pt-[10px] pb-[10px] border-t border-border2 text-textcolor3">Overview Map</li>
                </ul>
              </div>
              {slots.map((i) => (
                <div key={`om-${i}`} className={`w-full flex-1 ${i >= 2 ? "hidden xl:block" : ""}`}>
                  <OverviewMap trip={tripData[activeIndices[i]]} compare={compare[activeIndices[i]]} />
                </div>
              ))}
            </div>

            {/* facilities */}
            <div className={`w-full flex flex-row gap-4  overflow-hidden ${tripDetails ? 'block' : 'h-0'}`}>

              <div className="flex-1 hidden xl:block">
                <ul>
                  <li className="font-figtree font-medium text-base pl-[7px] pr-[7px] pt-[10px] pb-[10px] border-t border-border2 text-textcolor3">Included Meals</li>
                </ul>
              </div>
              {slots.map((i) => (
                <div key={`fc-${i}`} className={`flex-1 ${i >= 2 ? "hidden xl:block" : ""}`}>
                  <Facilites compare={compare[activeIndices[i]]} />
                </div>
              ))}
            </div>

            <div className="absolute top-[0] left-0  w-full h-full flex flex-row gap-4 user-select-none pointer-events-none">
              <div className="flex-1  hidden xl:block">
              </div>
              <div className={`flex-1 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-md border-dashed ${compare[0] ? '' : 'border-[1px] border-myred'}`}>
              </div>
              <div className={`flex-1 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-md border-dashed ${compare[1] ? '' : compare[0] ? 'border-[1px] border-myred' : 'border-[1px] border-textcolor3'}`}>
              </div>
              <div className={`flex-1 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-md hidden xl:block border-dashed ${compare[2] ? '' : compare[1] ? 'border-[1px] border-myred' : 'border-[1px] border-textcolor3'}`}>
              </div>
              <div className={`flex-1 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-md hidden xl:block border-dashed ${compare[3] ? '' : compare[2] ? 'border-[1px] border-myred' : 'border-[1px] border-textcolor3'}`}>
              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  );
};

export default ComparePage;

