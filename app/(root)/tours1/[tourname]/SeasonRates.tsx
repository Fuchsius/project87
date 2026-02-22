import React, { useState } from "react";
import Image from "next/image";

const SeasonRates = () => {
  const weatherType = [
    { id: 1, colorCode: "#18746F", label: "Best" },
    { id: 2, colorCode: "#75A454", label: "Good" },
    { id: 3, colorCode: "#B86E2F", label: "Mixed" },
    { id: 4, colorCode: "#E32F52", label: "Poor" },
  ];

  const monthswithWeatherType = [
    { month: "January", weatherType: 1 },
    { month: "February", weatherType: 1 },
    { month: "March", weatherType: 1 },
    { month: "April", weatherType: 2 },
    { month: "May", weatherType: 2 },
    { month: "June", weatherType: 2 },
    { month: "July", weatherType: 2 },
    { month: "August", weatherType: 2 },
    { month: "September", weatherType: 3 },
    { month: "October", weatherType: 4 },
    { month: "November", weatherType: 1 },
    { month: "December", weatherType: 1 },
  ];

  const [activeYear, setActiveYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("Feb");

  // Function to get color based on month and weather type
  const getMonthColor = (monthName: any) => {
    const month = monthswithWeatherType.find(
      (m) => m.month.slice(0, 3) === monthName
    );
    if (!month) return "#gray";
    return (
      weatherType.find((type) => type.id === month.weatherType)?.colorCode ||
      "#gray"
    );
  };

  return (
    <div>
      <div className="my-container py-24">
        <div className="flex flex-col items-end">
          <button className="border text-textcolor1 font-bold px-6 py-3 border-textcolor1 rounded-none">
            Our lowest price is US$ 4,600
          </button>
        </div>

        <div className="flex flex-col items-center justify-center mt-10">
          <div className="flex flex-col max-w-6xl w-full">
            <h5 className="text-textcolor1 font-bold text-center text-[22px] mb-7">
              Best weather conditions for this tour
            </h5>

            {/* Weather indicator bar */}
            <div className="flex gap-x-[10px] items-center justify-center">
              {monthswithWeatherType.map((month, index) => {
                const color =
                  weatherType.find((type) => type.id === month.weatherType)
                    ?.colorCode || "#gray";
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <div
                      className="h-2 self-stretch"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-textcolor1 px-3 text-center leading-3">
                      {month.month.slice(0, 3)}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Weather type indicators */}
            <div className="flex items-center justify-center gap-5 mt-[18px] mb-6">
              {weatherType.map((type, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4"
                    style={{ backgroundColor: type.colorCode }}
                  />
                  <div className="text-textcolor1">{type.label}</div>
                </div>
              ))}
            </div>

            {/* Tour guide avatar and year selection */}
            <div className="flex justify-center items-center mb-6">
              <div className="flex">
                <button
                  onClick={() => setActiveYear("2025")}
                  className={`px-4 py-2 border border-myblue rounded-l-md font-bold ${
                    activeYear === "2025"
                      ? "bg-myblue text-white"
                      : "bg-white text-my-blue"
                  }`}
                >
                  2025
                </button>
                <button
                  onClick={() => setActiveYear("2026")}
                  className={`px-4 py-2 border border-myblue rounded-r-md font-bold ${
                    activeYear === "2026"
                      ? "bg-myblue text-white"
                      : "bg-white text-my-blue"
                  }`}
                >
                  2026
                </button>
              </div>
            </div>

            {/* Month selection buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {monthswithWeatherType.map((month, index) => {
                const monthAbbr = month.month.slice(0, 3);
                const isActive = selectedMonth === monthAbbr;
                const monthColor = getMonthColor(monthAbbr);

                return (
                  <button
                    key={index}
                    onClick={() => setSelectedMonth(monthAbbr)}
                    className={`px-6 py-2 min-w-[60px] border font-bold text-sm rounded-sm ${
                      isActive ? "border-myblue" : "border-myblue"
                    }`}
                    style={
                      isActive
                        ? { backgroundColor: monthColor, color: "#fff" }
                        : {}
                    }
                  >
                    {monthAbbr}
                  </button>
                );
              })}
            </div>

            {/* Selected month details section - can be expanded based on your requirements */}
            <div className="border-t pt-4 mt-4">
              <p className="text-center text-textcolor1">
                {selectedMonth} {activeYear} - Tour details will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonRates;
