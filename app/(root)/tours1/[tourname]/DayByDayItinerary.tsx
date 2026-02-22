// "use client";

// import React, { useState, useRef } from "react";
// import Image from "next/image";
// import { ChevronDown, ChevronUp, Bed, Apple } from "lucide-react";
// import { FaArrowRight } from "react-icons/fa";

// // Define types for our data
// type DayLocation = {
//   day: number;
//   location: string;
// };

// type ItineraryDay = {
//   day: number;
//   title: string;
//   locations?: string[];
//   subtitle?: string;
//   description: string;
//   image: string;
//   hotel?: string;
//   meals?: {
//     breakfast: boolean;
//     lunch: boolean;
//     dinner: boolean;
//   };
//   isRelaxedStart?: boolean;
// };

// type OptionalExperience = {
//   title: string;
//   description: string;
//   image: string;
//   cost: string;
// };

// const DayByDayItinerary = () => {
//   const [expandedDays, setExpandedDays] = useState<number[]>([1]);
//   const [expandAllDays, setExpandAllDays] = useState<boolean>(false);
//   const [isDayHovered, setIsDayHovered] = useState<number | null>(null);
//   const dayNavigationRef = useRef<HTMLDivElement>(null);

//   // Sample data for the itinerary days
//   const dayLocations: DayLocation[] = [
//     { day: 1, location: "Colombo" },
//     { day: 2, location: "Colombo, Toledo, Madrid" },
//     { day: 3, location: "Colombo, Wilpattu National Park" },
//     { day: 4, location: "Wilpattu National Park" },
//     { day: 5, location: "Wilpattu National Park, Sigiriya" },
//     { day: 6, location: "Sigiriya" },
//     { day: 7, location: "Sigiriya" },
//   ];

//   // Sample data for the daily itinerary
//   const itineraryData: ItineraryDay[] = [
//     {
//       day: 1,
//       title: "Welcome to Sri Lanka",
//       locations: ["Colombo"],
//       description:
//         "Your journey begins with a warm welcome to the vibrant city of Colombo. Upon arrival, you'll be greeted by our local specialist who will escort you to your hotel. Take the rest of the day to relax and settle in before embarking on your Sri Lankan adventure.",
//       image: "/assets/images/tour-images/itinerary1.png",
//       hotel: "Hotel Taj Samudra",
//       meals: {
//         breakfast: false,
//         lunch: false,
//         dinner: false,
//       },
//     },
//     {
//       day: 2,
//       title: "Explore the Heart of Colombo",
//       locations: ["Colombo", "Toledo", "Madrid"],
//       description:
//         "We head to Toledo, the former capital of Spain, where we join a Local Specialist for a walking tour of this city that dates back to Roman times. We'll visit a traditional factory and Dive Into Culture, witnessing the age-old inlaid steel craft, before seeing one of El Greco's most famous paintings in the Church of Santo Tomé – 'The Burial of the Count of Orgaz'. We'll also visit the synagogue, before returning to Madrid where we'll admire the Royal Palace and Cibeles Fountain with our Local Specialist. Spend the evening on your own, or delve deeper into the heart of Madrid on an Optional Experience.",
//       image: "/assets/images/tour-images/itinerary1.png",
//       hotel: "Hotel Taj Samudra",
//       meals: {
//         breakfast: true,
//         lunch: false,
//         dinner: false,
//       },
//       isRelaxedStart: true,
//     },
//     {
//       day: 3,
//       title: "Step into the Wild",
//       subtitle: "Relaxed Start",
//       locations: ["Colombo", "Wilpattu National Park"],
//       description:
//         "Today we venture into Wilpattu National Park, Sri Lanka's largest national park known for its diverse wildlife including leopards, sloth bears, and various bird species. Enjoy a guided safari tour through the lush landscapes and waterways.",
//       image: "/assets/images/tour-images/itinerary1.png",
//       hotel: "Wilpattu Safari Camp",
//       meals: {
//         breakfast: true,
//         lunch: true,
//         dinner: true,
//       },
//     },
//     {
//       day: 4,
//       title: "Adventure Awaits in the Wild",
//       locations: ["Wilpattu National Park"],
//       description:
//         "Spend a full day exploring the wonders of Wilpattu National Park with morning and afternoon safari drives, offering the best chances to spot the park's elusive leopards and other wildlife in their natural habitat.",
//       image: "/assets/images/tour-images/itinerary1.png",
//       hotel: "Wilpattu Safari Camp",
//       meals: {
//         breakfast: true,
//         lunch: true,
//         dinner: true,
//       },
//     },
//   ];

//   // Sample data for optional experiences
//   const optionalExperiences: OptionalExperience[] = [
//     {
//       title: "Colombo City Tour with Mark Forbes",
//       description:
//         "The incredible sounds of Toledo have attracted cities for centuries. Visit an inlaid steel factory in Toledo to see local craftsmen forging the high...",
//       image: "/assets/images/tour-images/itinerary1.png",
//       cost: "Additional Cost Applies",
//     },
//     {
//       title: "Colombo City Tour with Mark Forbes",
//       description:
//         "The incredible sounds of Toledo have attracted cities for centuries. Visit an inlaid steel factory in Toledo to see local craftsmen forging the high...",
//       image: "/assets/images/tour-images/itinerary1.png",
//       cost: "Included with trip",
//     },
//     {
//       title: "Colombo City Tour with Mark Forbes",
//       description:
//         "The incredible sounds of Toledo have attracted cities for centuries. Visit an inlaid steel factory in Toledo to see local craftsmen forging the high...",
//       image: "/assets/images/tour-images/itinerary1.png",
//       cost: "Additional Cost Applies",
//     },
//   ];

//   const toggleDay = (day: number) => {
//     setExpandedDays((prevState) => {
//       if (prevState.includes(day)) {
//         return prevState.filter((d) => d !== day);
//       } else {
//         return [...prevState, day];
//       }
//     });
//   };

//   const toggleAllDays = () => {
//     if (expandAllDays) {
//       setExpandedDays([]);
//     } else {
//       setExpandedDays(itineraryData.map((day) => day.day));
//     }
//     setExpandAllDays(!expandAllDays);
//   };

//   const isDayExpanded = (day: number) => {
//     return expandedDays.includes(day);
//   };

//   // Function to scroll the day navigation left
//   const scrollLeft = () => {
//     if (dayNavigationRef.current) {
//       dayNavigationRef.current.scrollBy({ left: -200, behavior: "smooth" });
//     }
//   };

//   // Function to scroll the day navigation right
//   const scrollRight = () => {
//     if (dayNavigationRef.current) {
//       dayNavigationRef.current.scrollBy({ left: 200, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="w-full pt-28 pb-16">
//       <div className="my-container">
//         {/* Day Navigation */}
//         <div className="relative flex items-center mb-8">
//           <button
//             className="absolute left-0 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow"
//             onClick={scrollLeft}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="text-textcolor1"
//             >
//               <path d="M15 18l-6-6 6-6" />
//             </svg>
//           </button>

//           <div
//             ref={dayNavigationRef}
//             className="overflow-x-auto py-4 px-12 flex items-center w-full"
//           >
//             {itineraryData.map((dayLoc, index) => (
//               <React.Fragment key={dayLoc.day}>
//                 <div
//                   className="flex flex-col min-w-[100px] cursor-pointer"
//                   onMouseEnter={() => {
//                     setIsDayHovered(dayLoc.day);
//                   }}
//                   onMouseLeave={() => {
//                     setIsDayHovered(null);
//                   }}
//                   onClick={() => {
//                     toggleDay(dayLoc.day);
//                     setExpandedDays([dayLoc.day]);
//                     document
//                       .getElementById(`day-${dayLoc.day}`)
//                       ?.scrollIntoView({ behavior: "smooth" });
//                   }}
//                 >
//                   <div className=" flex items-center w-full mb-3 ps-3">
//                     <div
//                       className={`w-5 h-5 min-w-5 min-h-5 max-w-5 max-h-5  rounded-full flex items-center justify-center 
//                         ${expandedDays.includes(dayLoc.day)
//                           ? "!bg-mydarkblue outline outline-[1px] outline-offset-4 outline-mydarkblue"
//                           : ""
//                         } ${isDayHovered === dayLoc.day
//                           ? "bg-mydarkblue outline outline-[1px] outline-offset-4 outline-mydarkblue"
//                           : ""
//                         }`}
//                     >
//                       {/* {dayLoc.day} */}
//                     </div>
//                     <div className=" font-medium text-nowrap text-textcolor1 px-4">
//                       Day {dayLoc.day}
//                     </div>
//                     <div className="border w-full border-mylightblue" />
//                   </div>
//                   <div
//                     className={`text-lg relative text-textcolor1 font-bold text-center whitespace-nowrap ${index === 0 ? "border-l" : ""
//                       } border-t border-b border-mylightblue py-[12px] ps-10 pe-5 w-fit
//                 ${expandedDays.includes(dayLoc.day) ? "bg-mylightblue" : ""} ${isDayHovered === dayLoc.day ? "bg-mylightblue" : ""
//                       }`}
//                   >
//                     {dayLoc.locations?.map((location, locIndex) => (
//                       <span key={locIndex}>
//                         {location}
//                         {dayLoc.locations &&
//                           locIndex < dayLoc.locations.length - 1 &&
//                           " > "}
//                       </span>
//                     ))}
//                     <div
//                       className={` ${expandedDays.includes(dayLoc.day)
//                         ? "!bg-mylightblue"
//                         : ""
//                         } ${isDayHovered === dayLoc.day ? "!bg-mylightblue" : " "
//                         } absolute h-full w-8 bg-white z-10 -right-6 top-0 border-r border-r-mylightblue rounded-r-full`}
//                     ></div>
//                   </div>
//                 </div>
//               </React.Fragment>
//             ))}
//           </div>

//           <button
//             className="absolute right-0 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow"
//             onClick={scrollRight}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="text-textcolor1"
//             >
//               <path d="M9 18l6-6-6-6" />
//             </svg>
//           </button>
//         </div>

//         <h2 className="text-textcolor1 font-sourceSerif font-bold text-[32px]">
//           Day by day itinerary
//         </h2>
//         <p className="text-textcolor2 mt-1 mb-7 text-sm">
//           10 days itinerary trip from{" "}
//           <span className=" text-textcolor3 font-bold">Colombo to Colombo</span>{" "}
//           visiting 1 countries and 6 cities
//         </p>

//         <div className="flex justify-between items-center mb-4">
//           <div className="flex space-x-6">
//             <button className="flex items-center gap-2 text-myblue font-semibold">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                 <polyline points="7 10 12 15 17 10"></polyline>
//                 <line x1="12" y1="15" x2="12" y2="3"></line>
//               </svg>
//               Download Itinerary
//             </button>
//             <button className="flex items-center gap-2 text-myblue font-semibold">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="6 9 6 2 18 2 18 9"></polyline>
//                 <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
//                 <rect x="6" y="14" width="12" height="8"></rect>
//               </svg>
//               Print Itinerary
//             </button>
//           </div>
//           <button
//             className="flex items-center gap-1 text-textcolor1 font-semibold"
//             onClick={toggleAllDays}
//           >
//             Expand all days{" "}
//             {expandAllDays ? (
//               <ChevronUp size={16} />
//             ) : (
//               <ChevronDown size={16} />
//             )}
//           </button>
//         </div>

//         {/* Day by Day Content */}
//         <div className="space-y-6">
//           {itineraryData.map((day) => (
//             <div
//               key={day.day}
//               className={`border border-e1 rounded-md overflow-hidden`}
//             >
//               <div
//                 className="flex  items-center bg-white cursor-pointer h-32"
//                 onClick={() => toggleDay(day.day)}
//               >
//                 <div className="flex-shrink-0 h-32 w-auto aspect-video border">
//                   <Image
//                     src={day.image}
//                     alt={day.title}
//                     width={120}
//                     height={80}
//                     className=" h-full w-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="flex items-center px-5 w-full h-full justify-between gap-4">
//                   <div className="flex flex-col justify-center">
//                     <div className=" flex items-center gap-2 mb-3">
//                       <div className="text-textcolor3 font-semibold">
//                         Day {day.day}
//                       </div>
//                     </div>
//                     <div className=" flex flex-col lg:flex-row lg:items-center lg:gap-4 gap-2">
//                       <h3 className="text-textcolor1 font-sourceSerif text-lg font-bold">
//                         {day.title}
//                       </h3>
//                       <div className="text-textcolor3 flex items-center gap-2">
//                         {day.locations?.map((location, index) => (
//                           <span
//                             key={index}
//                             className=" flex items-center gap-2"
//                           >
//                             {index === 0 ? "" : <FaArrowRight />}
//                             {location}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <button className="flex items-center text-textcolor1 font-bold  gap-2">
//                     See {isDayExpanded(day.day) ? "less" : "more"}{" "}
//                     {isDayExpanded(day.day) ? (
//                       <ChevronUp size={20} />
//                     ) : (
//                       <ChevronDown size={20} />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {isDayExpanded(day.day) && (
//                 <div className="p-6 lg:p-12 border-t border-e1 bg-white">
//                   {/* Accommodation and Meals */}
//                   <div className="flex lg:flex-row gap-24 mb-6">
//                     <div className=" flex flex-col  w-full lg:w-1/2">
//                       <div className=" text-textcolor3 font-semibold">
//                         Day {day.day}
//                       </div>
//                       <h2 className=" font-sourceSerif text-[28px] font-bold text-textcolor1 mb-2">
//                         {day.title}
//                       </h2>
//                       {day.subtitle && (
//                         <div className="mb-4 text-mygreen font-semibold">
//                           {day.subtitle}
//                         </div>
//                       )}
//                       {day.isRelaxedStart && (
//                         <div className="mb-4 text-mygreen font-semibold">
//                           Relaxed Start
//                         </div>
//                       )}
//                       <div className="text-textcolor2 mb-6">
//                         {day.description}
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <div className="flex items-center gap-2 text-textcolor1">
//                           <Bed size={16} />
//                           <span className="font-semibold">Accommodation</span>
//                           <span className="text-textcolor3">{day.hotel}</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-textcolor1">
//                           <Apple size={16} />
//                           <span className="font-semibold">Included Meals</span>
//                           <span className="text-textcolor3">
//                             {day.meals?.breakfast ? "Breakfast" : ""}
//                             {day.meals?.lunch
//                               ? day.meals.breakfast
//                                 ? ", Lunch"
//                                 : "Lunch"
//                               : ""}
//                             {day.meals?.dinner
//                               ? day.meals.breakfast || day.meals.lunch
//                                 ? ", Dinner"
//                                 : "Dinner"
//                               : ""}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className=" w-full lg:w-1/2 flex items-center justify-end rounded-md overflow-hidden border aspect-video">
//                       <Image
//                         src={day.image}
//                         alt={day.title}
//                         width={300}
//                         height={200}
//                         className="w-full h-full object-cover object-center"
//                       />
//                     </div>
//                   </div>

//                   {/* Optional Experiences - Only show for day 2 */}
//                   {day.day === 2 && (
//                     <div className="mt-8">
//                       <h4 className="text-textcolor1 font-sourceSerif text-xl font-semibold mb-4">
//                         Included and optional experiences
//                       </h4>
//                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         {optionalExperiences.map((exp, idx) => (
//                           <div
//                             key={idx}
//                             className="border border-e1 rounded-md overflow-hidden"
//                           >
//                             <div className="relative">
//                               <Image
//                                 src={exp.image}
//                                 alt={exp.title}
//                                 width={300}
//                                 height={200}
//                                 className="w-full h-48 object-cover"
//                               />
//                               <div className="absolute top-2 left-2 bg-myred text-white text-xs py-1 px-2 rounded-sm">
//                                 {idx === 0
//                                   ? "Top Rated Highlights"
//                                   : idx === 1
//                                     ? "Top Rated Highlights"
//                                     : "Optional Experience"}
//                               </div>
//                             </div>
//                             <div className="p-4">
//                               <h5 className="text-textcolor1 font-semibold mb-2">
//                                 {exp.title}
//                               </h5>
//                               <p className="text-textcolor2 text-sm mb-4">
//                                 {exp.description}
//                               </p>
//                               <div className="flex justify-between items-center">
//                                 <div
//                                   className={`flex items-center gap-2 ${idx === 1 ? "text-myred" : "text-textcolor1"
//                                     }`}
//                                 >
//                                   {idx === 1 ? (
//                                     <svg
//                                       width="16"
//                                       height="16"
//                                       viewBox="0 0 24 24"
//                                       fill="none"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                       <path
//                                         d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
//                                         stroke="#B4013B"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                       />
//                                     </svg>
//                                   ) : null}
//                                   <span className="text-sm">{exp.cost}</span>
//                                 </div>
//                                 <button className="text-textcolor1 text-sm">
//                                   See more
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DayByDayItinerary;
