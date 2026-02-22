"use client";
import React, { useId, useState } from "react";

const ToggleTest = () => {
  const [showMaps, setShowMaps] = useState<any>(true);

  // Right toggle (black/gray) starts OFF
  const [pricePerDay, setPricePerDay] = useState<any>(false);

  const uid = useId();
  const showMapsId = `${uid}-toggleShowMaps`;
  const pricePerDayId = `${uid}-togglePricePerDay`;

  return (
    <div className="flex items-center space-x-6 p-4">
      {/* ----- RED TOGGLE (ON) ----- */}
      <label
        htmlFor={showMapsId}
        className="inline-flex items-center cursor-pointer border border-red-500 rounded px-3 py-1 text-red-500"
      >
        <span className="mr-2 font-semibold text-nowrap">Show maps</span>
        <div className="relative">
          {/* Invisible checkbox for actual toggling */}
          <input
            id={showMapsId}
            type="checkbox"
            checked={showMaps}
            onChange={() => setShowMaps(!showMaps)}
            className="sr-only"
          />
          {/* The toggle track */}
          <div className="block w-10 h-6 rounded-full bg-white border border-red-500" />
          {/* The toggle circle */}
          <div
            className={`absolute left-1 top-1 w-4 h-4 rounded-full transition transform ${
              showMaps ? "bg-red-500 translate-x-4" : "bg-red-500 translate-x-0"
            }`}
          />
        </div>
      </label>

      {/* ----- BLACK TOGGLE (OFF) ----- */}
      <label
        htmlFor={pricePerDayId}
        className="inline-flex items-center cursor-pointer text-gray-800"
      >
        <span className="mr-2 font-semibold text-nowrap">Price Per Day</span>
        <div className="relative">
          {/* Invisible checkbox for actual toggling */}
          <input
            id={pricePerDayId}
            type="checkbox"
            checked={pricePerDay}
            onChange={() => setPricePerDay(!pricePerDay)}
            className="sr-only"
          />
          {/* The toggle track */}
          <div className="block w-10 h-6 rounded-full bg-gray-300" />
          {/* The toggle circle */}
          <div
            className={`absolute left-1 top-1 w-4 h-4 rounded-full transition transform ${
              pricePerDay ? "bg-black translate-x-4" : "bg-black translate-x-0"
            }`}
          />
        </div>
      </label>
    </div>
  );
};

export default ToggleTest;
