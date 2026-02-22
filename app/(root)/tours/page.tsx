"use client"

import React, { useCallback, useEffect, useRef, useState, Suspense } from "react";
import { MouseEvent, TouchEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import RenderStar from "@/components/RenderStar";
import Breadcrumb from "@/components/BreadCrumb";
import Important from "@/components/Important";
import { Button } from "@/components/comen/button";
import { FaInfoCircle, FaTag } from "react-icons/fa";
import useEmblaCarousel from 'embla-carousel-react';

// pages
import Youritinerary from "./Youritinerary";
import SeasonRate from "./SeasonRate";
import TourHighlights from "./TourHighlights";
import Review from "./Review";

import Title1 from "@/components/comen/title/Title1";


const advantages = [
  {
    image: "/assets/icons/tour01.svg",
    title: "Access travel knowledge",
    description: "of selected local experts",
  },
  {
    image: "/assets/icons/tour02.svg",
    title: "Save time & money",
    description: "let a local expert plan",
  },
  {
    image: "/assets/icons/tour03.svg",
    title: "Tailor your private holiday",
    description: "to your preferences",
  },
  {
    image: "/assets/icons/tour04.svg",
    title: "Book & travel securely",
    description: "money back guarantee & 24/7 support",
  },
];

const tabItems = [
  "Your itinerary",
  "Season & Rates",
  "Tour Highlights",
  "Reviews"
];

const MAPICONS = [
  { name: "Place visited", icon: "1.svg" },
  { name: "Optional place visited", icon: "2.svg" },
  { name: "Central Hotels + Nights", icon: "3.svg" },
  { name: "Scenic Hotels + Nights", icon: "4.svg" },
  { name: "UNESCO Heritage Site", icon: "5.svg" },
  { name: "Join/Leave Options", icon: "6.svg" },
  { name: "Internal Flight", icon: "7.svg" },
  { name: "Cruise", icon: "8.svg" },
  { name: "Train Route", icon: "9.svg" },
];

const ToursPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0); // Set first tab as active by default
  const tabListRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dragState = useRef({
    startX: 0,
    scrollLeft: 0
  });

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      const tabMapping: { [key: string]: number } = {
        'itinerary': 0,
        'season-rates': 1,
        'tour-highlights': 2,
        'reviews': 3
      };
      const tabIndex = tabMapping[tabParam.toLowerCase()];
      if (tabIndex !== undefined) {
        setActiveTab(tabIndex);
      }
    }
  }, [searchParams]);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    const tabNames = ['itinerary', 'season-rates', 'tour-highlights', 'reviews'];
    const newTab = tabNames[index];
    const newUrl = `?tab=${newTab}`;
    router.replace(newUrl, { scroll: false });
  };

  const startDrag = (pageX: number) => {
    if (!tabListRef.current) return;
    setIsDragging(true);
    dragState.current = {
      startX: pageX - tabListRef.current.offsetLeft,
      scrollLeft: tabListRef.current.scrollLeft
    };
    document.body.classList.add('no-select');
  };

  const handleDrag = (pageX: number) => {
    if (!isDragging || !tabListRef.current) return;
    const x = pageX - tabListRef.current.offsetLeft;
    const walk = (x - dragState.current.startX) * 2;
    tabListRef.current.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
    document.body.classList.remove('no-select');
  };

  const handleMouseDown = (e: React.MouseEvent) => startDrag(e.pageX);
  const handleTouchStart = (e: React.TouchEvent) => startDrag(e.touches[0].pageX);
  const handleMouseMove = (e: React.MouseEvent) => handleDrag(e.pageX);
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleDrag(e.touches[0].pageX);
  };

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const updateTabArrowVisibility = useCallback(() => {
    const container = tabListRef.current;
    if (!container) {
      setShowLeftArrow(false);
      setShowRightArrow(false);
      return;
    }

    const hasOverflow = container.scrollWidth - container.clientWidth > 1;
    if (!hasOverflow) {
      setShowLeftArrow(false);
      setShowRightArrow(false);
      return;
    }

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setShowLeftArrow(container.scrollLeft > 1);
    setShowRightArrow(container.scrollLeft < maxScrollLeft - 1);
  }, []);

  useEffect(() => {
    const container = tabListRef.current;
    if (!container) {
      setShowLeftArrow(false);
      setShowRightArrow(false);
      return;
    }

    updateTabArrowVisibility();

    const handleResize = () => {
      updateTabArrowVisibility();
    };

    const handleScroll = () => {
      updateTabArrowVisibility();
    };

    window.addEventListener("resize", handleResize);
    container.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [updateTabArrowVisibility]);

  useEffect(() => {
    const container = tabListRef.current;
    if (!container) {
      return;
    }

    const activeTabElement = container.querySelector<HTMLDivElement>(
      '[data-tab-active="true"]'
    );

    if (activeTabElement) {
      const leftEdge = activeTabElement.offsetLeft;
      const rightEdge = leftEdge + activeTabElement.offsetWidth;
      const visibleLeft = container.scrollLeft;
      const visibleRight = container.scrollLeft + container.clientWidth;

      if (leftEdge < visibleLeft || rightEdge > visibleRight) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }

    updateTabArrowVisibility();
  }, [activeTab, updateTabArrowVisibility]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveTab(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsSticky(true);
      } else if (currentScrollY < lastScrollY) {
        setIsSticky(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  return (
    <React.Fragment>
      {/* trip header */}
      <div className="w-full">
        <div className="w-full ">
          <div className="mt-2">
            <Breadcrumb items={[
              { href: "/", label: "Home" },
              { href: "/itinerary", label: "Itinerary" },
              { label: "Canvas of Ceylon" },
            ]} />
          </div>
          <div className="w-full grid grid-cols-12 gap-0 py-5">
            <div className="md:col-span-4 col-span-12 flex items-center">
              <div className="w-full">
                {/* review */}
                <div className="w-full flex items-center gap-2">
                  <RenderStar rating={4.5} fontSize="18px" />
                  <p className="text-textcolor2 text-sm underline decoration-myred decoration-dotted underline-offset-4 hover:decoration-solid cursor-pointer" onClick={() => { handleTabChange(3) }}>22 reviews</p>
                </div>
                {/* title */}
                <div className="w-full mt-2">
                  <Title1 title="Canvas of Ceylon" />
                </div>
                {/* trip type */}
                <div className="w-full mt-4">
                  <Important title="Private Customizable Trip" />
                </div>
                {/* trip type */}
                <div className="w-full mt-2">
                  <p className="font-sourceSerif text-textcolor2 font-semibold text-[22px]">Immersion & discovery</p>
                </div>
              </div>
            </div>
            <div className="hidden col-span-8 md:flex items-center ">
              <div className="flex flex-col items-end justify-center w-full gap-4">
                <div className="flex w-full gap-5">
                  <div className="flex flex-col w-full items-end justify-center gap-2">
                    <div className="flex items-center gap-1 text-sm text-textcolor1">
                      Last Minute Deal
                      <img src="/assets/icons/question-mark.svg" alt="" className='w-4 h-4' />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-textcolor1">From</span>
                      <span className="text-2xl font-bold text-seletedred">
                        US$ 6958
                      </span>
                    </div>

                    <div className=" flex items-center gap-2">
                      <span className=" text-textcolor3 line-through ms-2 font-light text-base">
                        Was US$ 9,470
                      </span>
                      <div className=" flex items-center justify-center gap-2 py-[2px] px-[8px] bg-seletedred text-white text-base font-semibold rounded-md">
                        <FaTag size={12} />
                        Save up to US$ 663
                      </div>
                    </div>

                    <div className="text-sm text-textcolor1 font-semibold underline decoration-dotted underline-offset-2 decoration-myred hover:decoration-solid cursor-pointer">
                      Find this price
                    </div>
                  </div>
                  <div className=" flex flex-col gap-4 justify-center">
                    <Button className=" px-5 text-nowrap h-11 w-40">
                      See Dates
                    </Button>
                    <Button
                      variant={"outline"}
                      className=" px-5 text-nowrap h-11 w-40"
                    >
                      Easy Quote
                    </Button>
                  </div>
                </div>
                <div className=" bg-bggray1 py-2 px-6 text-[10px] text-textcolor1 max-w-[470px] flex">
                  <FaInfoCircle className=" my-auto mr-2" size={20} />
                  To enquire in local currency, call or click the Easy Quote
                  button and enter your preferred currency in the Additional
                  Information box.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tab section */}
      <div className={`w-full bg-bggray1 select-none ${isSticky ? 'sticky top-0 z-[100]' : ''}`}>
        <div className="my-container relative select-none">
          <div
            ref={tabListRef}
            className="flex items-center h-16 overflow-x-hidden md:overflow-visible gap-2 scrollbar-hide select-none"
            onMouseDown={handleMouseDown}
            onMouseLeave={endDrag}
            onMouseUp={endDrag}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={endDrag}
          >
            {tabItems.map((tab, index) => (
              <React.Fragment key={tab}>
                <div
                  data-tab-active={activeTab === index}
                  className={`py-4 md:w-40 min-w-[140px] flex-none flex justify-center cursor-pointer rounded-md relative group ${activeTab === index
                    ? ''
                    : 'md:hover:bg-bggray2'
                    }`}
                  onClick={() => handleTabChange(index)}
                >
                  <h3 className="text-textcolor2 font-semibold md:text-lg text-sm ">{tab}</h3>
                  <div className={`absolute -bottom-[6px] md:-bottom-[2px] left-1/2 -translate-x-1/2 h-1 bg-myred transition-all duration-300 rounded-t-full ${activeTab === index
                    ? 'w-[calc(100%-1rem)]'
                    : 'w-0'
                    }`}></div>
                </div>
                {index < tabItems.length - 1 && (
                  <div className="w-[1px] h-5 bg-bggray2 mx-[2px] md:flex hidden"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        {activeTab === 0 && (
          <div className="w-full">
            <Youritinerary advantages={advantages} MAPICONS={MAPICONS} />
          </div>
        )}
        {activeTab === 1 && (
          <SeasonRate />
        )}
        {activeTab === 2 && (
          <TourHighlights />
        )}
        {activeTab === 3 && (
          <Review />
        )}
      </div>
      

    </React.Fragment>
  );
};

// Wrapper component to handle Suspense boundary
export default function ToursPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ToursPage />
    </Suspense>
  );
}
