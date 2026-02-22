"use client";

import React, { useState, useRef } from "react";
import Title2 from "@/components/comen/title/Title2";
import Title3 from "@/components/comen/title/Title3";
import Title4 from "@/components/comen/title/Title4";
// import OptionalExperience from "../card/OptionalExperience";
import Carousel from "../Carousel";
import ExperienceCarousel from "./ExperienceCarousel";

// Define types for our data
type DayLocation = {
  day: number;
  location: string;
};

type ItineraryDay = {
  day: number;
  title: string;
  locations?: string[];
  subtitle?: string;
  description: string;
  image: string;
  hotel?: string;
  meals?: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
  };
  isRelaxedStart?: boolean;
  makeTravelResponsible?: boolean;
  beMyGuest?: boolean;
  travelGateDifference?: boolean;
  transfer?: {
    transferIcon: string;
    transferContent: string;
  }[];
};

type OptionalExperience = {
  title: string;
  description: string;
  image: string;
  cost: string;
};

const DayByDayItinerary = () => {
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);
  const [expandAllDays, setExpandAllDays] = useState<boolean>(false);
  const [isDayHovered, setIsDayHovered] = useState<number | null>(null);
  const dayNavigationRef = useRef<HTMLDivElement>(null);


  // Sample data for the itinerary days
  const dayLocations: DayLocation[] = [
    { day: 1, location: "Colombo" },
    { day: 2, location: "Colombo, Toledo, Madrid" },
    { day: 3, location: "Colombo, Wilpattu National Park" },
    { day: 4, location: "Wilpattu National Park" },
    { day: 5, location: "Wilpattu National Park, Sigiriya" },
    { day: 6, location: "Sigiriya" },
    { day: 7, location: "Sigiriya" },
  ];

  // Sample data for the daily itinerary
  const itineraryData: ItineraryDay[] = [
    {
      day: 1,
      title: "Welcome to Sri Lanka",
      locations: ["Colombo"],
      description:
        "Your journey begins with a warm welcome to the vibrant city of Colombo. Upon arrival, you'll be greeted by our local specialist who will escort you to your hotel. Take the rest of the day to relax and settle in before embarking on your Sri Lankan adventure.",
      image: "/assets/images/tour-images/itinerary1.png",
      hotel: "Hotel Taj Samudra",
      meals: {
        breakfast: false,
        lunch: false,
        dinner: false,
      },
    },
    {
      day: 2,
      title: "Explore the Heart of Colombo",
      locations: ["Colombo", "Toledo", "Madrid"],
      description:
        "We head to Toledo, the former capital of Spain, where we join a Local Specialist for a walking tour of this city that dates back to Roman times. We'll visit a traditional factory and Dive Into Culture, witnessing the age-old inlaid steel craft, before seeing one of El Greco's most famous paintings in the Church of Santo Tomé – 'The Burial of the Count of Orgaz'. We'll also visit the synagogue, before returning to Madrid where we'll admire the Royal Palace and Cibeles Fountain with our Local Specialist. Spend the evening on your own, or delve deeper into the heart of Madrid on an Optional Experience.",
      image: "/assets/images/tour-images/itinerary1.png",
      hotel: "Hotel Taj Samudra",
      meals: {
        breakfast: true,
        lunch: false,
        dinner: false,
      },
      isRelaxedStart: true,
      transfer: [
        {
          transferIcon: "/assets/icons/welcome.svg",
          transferContent: "Private Transfer",
        },
        {
          transferIcon: "/assets/icons/welcome.svg",
          transferContent: "Private Transfer",
        },
      ]

    },
    {
      day: 3,
      title: "Step into the Wild",
      subtitle: "Relaxed Start",
      locations: ["Colombo", "Wilpattu National Park"],
      description:
        "Today we venture into Wilpattu National Park, Sri Lanka's largest national park known for its diverse wildlife including leopards, sloth bears, and various bird species. Enjoy a guided safari tour through the lush landscapes and waterways.",
      image: "/assets/images/tour-images/itinerary1.png",
      hotel: "Wilpattu Safari Camp",
      meals: {
        breakfast: true,
        lunch: true,
        dinner: true,
      },
      travelGateDifference: true,
      beMyGuest: true,
    },
    {
      day: 4,
      title: "Adventure Awaits in the Wild",
      locations: ["Wilpattu National Park"],
      description:
        "Spend a full day exploring the wonders of Wilpattu National Park with morning and afternoon safari drives, offering the best chances to spot the park's elusive leopards and other wildlife in their natural habitat.",
      image: "/assets/images/tour-images/itinerary1.png",
      hotel: "Wilpattu Safari Camp",
      meals: {
        breakfast: true,
        lunch: true,
        dinner: true,
      },
      isRelaxedStart: true,
      makeTravelResponsible: true,


    },
  ];

  // Sample data for optional experiences
  const optionalExperiences: OptionalExperience[] = [
    {
      title: "Experience 0",
      description:
        "The incredible sounds of Toledo have attracted cities for centuries. Visit an inlaid steel factory in Toledo to see local craftsmen forging the high...",
      image: "/assets/images/tour-images/itinerary1.png",
      cost: "Additional Cost Applies",
    },
    {
      title: "Experience 1",
      description:
        "The incredible sounds of Toledo have attracted cities for centuries. Visit an inlaid steel factory in Toledo to see local craftsmen forging the high...",
      image: "/assets/images/tour-images/itinerary1.png",
      cost: "Included with trip",
    },
    {
      title: "Experience 2",
      description:
        "The incredible sounds of Toledo have attracted cities for centuries. Visit an inlaid steel factory in Toledo to see local craftsmen forging the high...",
      image: "/assets/images/tour-images/itinerary1.png",
      cost: "Additional Cost Applies",
    },
    {
      title: "Experience 3",
      description:
        "Explore the ancient cave temples of Dambulla, a UNESCO World Heritage site with stunning Buddha statues and frescoes from the 1st century BC.",
      image: "/assets/images/tour-images/itinerary1.png",
      cost: "Additional Cost Applies",
    },
    {
      title: "Experience 4",
      description:
        "Ascend the ancient rock fortress of Sigiriya, known as the 'Lion Rock', and discover its historical frescoes and palace ruins.",
      image: "/assets/images/tour-images/itinerary1.png",
      cost: "Included with trip",
    },
  ];

  const toggleDay = (day: number) => {
    const prevCount = expandedDays.length;
    setExpandedDays((prevState) => {
      if (prevState.includes(day)) {
        return prevState.filter((d) => d !== day);
      } else {
        setTimeout(() => {
          const element = document.getElementById(`day-${day}`);
          if (element) {
            // Check for sticky tab navigation (it becomes sticky on scroll)
            const stickyTab = document.querySelector('[class*="sticky top-0"]');
            const headerHeight = stickyTab?.clientHeight || 64; // Default to 64px for tab height

            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // Extra 20px padding

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 150);
        return [...prevState, day];
      }
    });
  };

  const toggleAllDays = () => {
    if (expandAllDays) {
      setExpandedDays([]);
    } else {
      // Use requestAnimationFrame to ensure state update happens before transition
      requestAnimationFrame(() => {
        setExpandedDays(itineraryData.map((day) => day.day));
      });
    }
    setExpandAllDays(!expandAllDays);
  };

  const isDayExpanded = (day: number) => {
    return expandedDays.includes(day);
  };

  // Function to scroll the day navigation left
  const scrollLeft = () => {
    if (dayNavigationRef.current) {
      dayNavigationRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Function to scroll the day navigation right
  const scrollRight = () => {
    if (dayNavigationRef.current) {
      dayNavigationRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <div className="my-container mt-10">
        {/* Day Navigation */}
        <div className="relative flex items-center mb-8">
          <button
            className="absolute top-4 left-0 z-10 flex items-center justify-center  "
            onClick={scrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-textcolor1"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="w-full px-12">
            <div
              ref={dayNavigationRef}
              className=" py-4 flex items-center w-full overflow-x-hidden scrollbar-hide"
            >
              <Carousel>
                {itineraryData.map((dayLoc, index) => (
                  <React.Fragment key={dayLoc.day}>
                    <div
                      className="flex flex-col cursor-pointer"
                      onMouseEnter={() => {
                        setIsDayHovered(dayLoc.day);
                      }}
                      onMouseLeave={() => {
                        setIsDayHovered(null);
                      }}
                      onClick={() => {
                        toggleDay(dayLoc.day);
                      }}
                    >
                      <div className="flex items-center w-full mb-3 ps-3">
                        <div
                          className={`w-5 h-5 min-w-5 min-h-5 max-w-5 max-h-5  rounded-full flex items-center justify-center 
                        ${expandedDays.includes(dayLoc.day)
                              ? "!bg-mydarkblue outline outline-[1px] outline-offset-4 outline-mydarkblue"
                              : "bg-mylightblue"
                            } ${isDayHovered === dayLoc.day
                              ? "bg-mydarkblue outline outline-[1px] outline-offset-4 outline-mydarkblue"
                              : ""
                            }`}
                        >
                        </div>
                        <div className=" font-medium text-nowrap text-textcolor1 px-4">
                          Day {dayLoc.day}
                        </div>
                        <div className="border w-full border-mylightblue" />
                      </div>
                      <div
                        className={` text-lg relative text-textcolor1 font-bold text-center whitespace-nowrap ${index === 0 ? "border-l " : ""
                          } border-t border-b border-mylightblue py-[12px] ps-10 pe-5 w-fit pr-6 
                ${expandedDays.includes(dayLoc.day) ? "bg-mylightblue" : ""} ${isDayHovered === dayLoc.day ? "bg-mylightblue" : ""
                          }`}
                      >
                        {dayLoc.locations?.map((location, locIndex) => (
                          <span key={locIndex}>
                            {location}
                            {dayLoc.locations &&
                              locIndex < dayLoc.locations.length - 1 &&
                              " > "}
                          </span>
                        ))}
                        <div
                          className={` ${expandedDays.includes(dayLoc.day)
                            ? "!bg-mylightblue"
                            : ""
                            } ${isDayHovered === dayLoc.day ? "!bg-mylightblue" : " "
                            } absolute h-full w-8 bg-white z-10 -right-8 top-0 border-r border-r-mylightblue rounded-r-full`}
                        ></div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </Carousel>
            </div>
          </div>

          <button
            className="absolute top-4 right-0 z-10 flex items-center justify-center"
            onClick={scrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-textcolor1"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="md:text-left text-center">
          <Title2 title="Day by day itinerary" />
        </div>
        <p className="text-textcolor2 mt-1 mb-7 text-sm md:text-left text-center">
          10 days itinerary trip from{" "}
          <span className=" text-textcolor3 font-bold">Colombo to Colombo</span>{" "}
          visiting 1 countries and 6 cities
        </p>
        {/* download section */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-6">
            <button className="flex items-center gap-2 text-myblue font-semibold md:text-base text-sm ">
              <img src="/assets/icons/file-down.svg" alt="" className="md:w-6 md:h-6 w-4 h-4" />
              Download Itinerary
            </button>
            <button className="md:flex hidden items-center gap-2 text-myblue font-semibold ">
              <img src="/assets/icons/printer.svg" alt="" className="md:w-6 md:h-6 w-4 h-4" />
              Print Itinerary
            </button>
          </div>
          <button
            className="flex items-center gap-1 text-textcolor1 font-semibold "
            onClick={toggleAllDays}
          >
            <p className="border-b border-dotted border-myred hover:border-solid md:text-base text-sm font-bold">Expand all days</p>
            <img src="/assets/icons/arrow-down-1.svg" alt="" className={`transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${expandAllDays ? "rotate-[180deg]" : "rotate-0"}`} />

          </button>
        </div>

      </div>
      {/* Day by Day Content */}
      <div className="w-full my-container-remove md:my-container md:mt-4 mt-6">
        <div className="w-full md:space-y-4 space-y-0">
          {itineraryData.map((day, index) => (
            <div key={day.day} className="w-full">
              <div className="w-full">
                {/* day section */}
                <div id={`day-${day.day}`} onClick={() => toggleDay(day.day)} className={`w-full flex max-h-[200px] items-center relative rounded-0 overflow-hidden border border-e6 cursor-pointer ${expandedDays.includes(day.day) ? "md:rounded-b-none md:!rounded-t-md" : "md:rounded-md"}`}>
                  {/* image */}
                  <div className={`absolute w-[200px] -left-[200px] transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]  ${expandedDays.includes(day.day) ? "md:!-left-[200px] opacity-0 bg-45 " : "md:!left-0"}`}>
                    <img src={day.image} alt="" className="w-full object-cover" />
                  </div>
                  {/* content */}
                  <div className={`relative h-fit md:w-[calc(100%-200px)] w-full left-0 transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] flex items-center lg:items-center ${expandedDays.includes(day.day) ? "!w-full md:!left-0 !bg-bggray1" : "md:!left-[200px]"}`}>
                    <div className="w-full p-5 ">
                      <div className="w-full">
                        {/* date */}
                        <h3 className="text-textcolor2 font-figtree font-bold md:text-base text-xs lg:flex block items-center ">
                          Day {day.day}
                          <div className={`flex items-center lg:mt-0 mt-2 lg:ml-2 ml-0 space-x-2 ${day.isRelaxedStart || day.travelGateDifference || day.makeTravelResponsible || day.beMyGuest ? "" : "hidden"}`}>
                            {day.isRelaxedStart && (
                              <div className="bg-bgcolor1 font-normal text-sm flex items-center px-2 py-1 rounded-md">
                                <span className="text-textcolor1 font-bold text-xs">Relaxed Start</span>
                              </div>
                            )}
                            {day.travelGateDifference && (
                              <div className="bg-goldenrod font-normal text-sm flex items-center px-2 py-1 rounded-md">
                                <span className="text-white font-bold text-xs">TravelGate Difference</span>
                              </div>
                            )}
                            {day.makeTravelResponsible && (
                              <div className="bg-mygreen font-normal text-sm flex items-center px-2 py-1 rounded-md">
                                <span className="text-white font-bold text-xs">Make Travel Responsible®</span>
                              </div>
                            )}
                            {day.beMyGuest && (
                              <div className="bg-darkpurple font-normal text-sm flex items-center px-2 py-1 rounded-md">
                                <span className="text-white font-bold text-xs">Be My Guest</span>
                              </div>
                            )}
                          </div>

                        </h3>
                        {/* title */}
                        <div className="lg:flex block items-center mt-2">
                          <Title4 title={day.title} />
                          <span className={`!text-textcolor2 description flex items-center lg:ml-2 lg:mt-0 mt-2 lg:space-x-0 md:space-x-2 ${day.locations ? "" : "!hidden"}`}>{day.locations?.map((location, locIndex) => (
                            <React.Fragment key={locIndex}>
                              {location}
                              <img src="/assets/icons/arrow-right-1.svg" alt="" className={`p-2 ${locIndex < day.locations!.length - 1 ? "block" : "hidden"}`} />
                            </React.Fragment>
                          ))}</span>
                        </div>
                        {/* transferInfo */}
                        <div className={`w-full mt-3 flex ${day.transfer ? "" : "!hidden"}`}>
                          {day.transfer && day.transfer.map((trans, index) => (
                            <div key={index} className="flex items-center gap-2 mr-2">
                              <img src={trans.transferIcon} alt="" className="w-6 h-6" />
                              <span className="description">{trans.transferContent}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* see more or less */}
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <h3 className="text-textcolor1 font-bold text-base md:flex hidden">See {expandedDays.includes(day.day) ? "less" : "more"}</h3>
                        <img src="/assets/icons/arrow-down-1.svg" alt="" className={`transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${expandedDays.includes(day.day) ? "rotate-[180deg]" : "rotate-0"}`} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* day content */}
                <div className={`transition-all duration-1000 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] md:!border border-1 border-e6 bg-white px-10 ${expandedDays.includes(day.day) ? "overflow-visible !w-full !left-0  rounded-b-md opacity-100 max-h-[5000px] translate-y-0 py-10" : "overflow-hidden max-h-0 opacity-0 -translate-y-2"}`}>
                  <div className="w-full md:flex block gap-8 ">
                    {/* image 1 */}
                    <div className="w-full aspect-video md:hidden block">
                      <img src={day.image} alt={day.title} className="w-full h-full object-cover rounded-md" />
                    </div>
                    {/* content */}
                    <div className={`lg:w-[600px] md:w-[500px] transition-all opacity-100 duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${expandedDays.includes(day.day) ? "" : "opacity-0"}`}>
                      <h3 className="text-textcolor2 font-figtree font-bold md:text-base text-xs lg:flex items-center md:block hidden">
                        Day {day.day}
                      </h3>
                      <div className="w-full md:mt-0 mt-8">
                        <Title3 title="Welcome to Munich" />
                      </div>
                      <p className="description text-textcolor2 md:mt-0 mt-2">
                        The sophisticated city streets of Munich are your launch pad to an adventure through the capitals of Imperial Europe. Join your fellow travellers and your Travel Director this afternoon on an orientation tour, and spend some free time immersing yourself in the sights and sounds of the Bavarian capital. View the Marienplatz, the centre of Munich city life since the 12th century, and its iconic Glockenspiel, before enjoying dinner together to kick-start your journey.
                      </p>
                      <div className="w-full mt-4 flex flex-col gap-4">
                        <div className="w-full flex items-center gap-2">
                          <img src="/assets/icons/overnight.svg" alt="" className="w-6 h-6" />
                          <h3 className="sub-title">Accommodation</h3>
                          <p className="description text-textcolor2 md:mt-0 mt-2">Holiday Inn Munich Westpark</p>
                        </div>
                        <div className="w-full flex items-center gap-2">
                          <img src="/assets/icons/meals-2.svg" alt="" className="w-6 h-6" />
                          <h3 className="sub-title">Included Meals</h3>
                          <p className="description text-textcolor2 md:mt-0 mt-2">Dinner</p>
                        </div>
                      </div>

                    </div>
                    {/* image 2 */}
                    <div className={`lg:w-[calc(100%-600px)] md:w-[calc(100%-500px)] hidden md:block transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${expandedDays.includes(day.day) ? "translate-y-0" : "-translate-y-[120%]"}`}>
                      <img src={day.image} alt={day.title} className="w-full aspect-video object-cover rounded-md" />
                    </div>
                  </div>

                  {/* experiences list carousel */}
                  <div className="w-full">
                    <ExperienceCarousel optionalExperiences={optionalExperiences} day={day} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayByDayItinerary;
