"use client";

import BreadCrumb from "@/components/BreadCrumb";
import { Button } from "@/components/comen/button";
import { Toggle } from "@/components/comen/Toggle";
import CompareTripBar from "@/components/compare-trip-bar";
import Pagination from "@/components/Pagination";
import SearchFilter from "@/components/SearchFilter";
import SelectorDropdown from "@/components/SelectorDropdown";
import TourCard from "@/components/comen/card/TourCard";
import TourCardList from "@/components/comen/card/TourCardList";
import {
  sortingOptions,
} from "@/data/filters.data";
import { TOUR_DATA } from "@/data/tours.data";
import { usePublicStore } from "@/stores/publicStores";
import { useScreenScrolledStore } from "@/stores/screenScrolledStore";
import {
  ChevronLeft,
  ListFilter,
  Search,
} from "lucide-react";
import { Fragment, useEffect, useState, useMemo } from "react";
import { CgClose } from "react-icons/cg";
import { FaThList } from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";

const SearchItineraryPage = () => {
  const [searchText, setSearchText] = useState("");
  const [isCloseVisible, setIsCloseVisible] = useState(false);
  const {
    gridLayout,
    isShowMap,
    isPricePerDay,
    sortBy,
    selectedLocations,
    setIsShowMap,
    setIsPricePerDay,
    setGridLayout,
    setSortBy,
  } = usePublicStore();

  const totalResults = 181; // Example total
  const resultsPerPage = 10; // Show 10 results per page
  const [currentPage, setCurrentPage] = useState(1);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const { isScrolled, setIsScrolled, visible, setVisible } =
    useScreenScrolledStore();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isFilterPassed, setIsFilterPassed] = useState(false);

  const sortedTours = useMemo(() => {
    const tours = [...TOUR_DATA];
    switch (sortBy) {
      case "Price - High To Low":
        return tours.sort((a, b) => b.price - a.price);
      case "Price - Low To High":
        return tours.sort((a, b) => a.price - b.price);
      case "Saving Amount - High to Low":
        return tours.sort((a, b) => (b.saveUpTo || 0) - (a.saveUpTo || 0));
      case "Highest Rated":
        return tours.sort((a, b) => b.rating - a.rating);
      case "Earliest Departure":
        return tours.sort((a, b) => a.days - b.days);
      case "Most Relevant":
      default:
        return tours;
    }
  }, [sortBy]);

  const filteredTours = useMemo(() => {
    let tours = sortedTours;

    // Filter by search text
    if (searchText.trim()) {
      const lowerSearch = searchText.toLowerCase();
      tours = tours.filter(tour =>
        tour.title.toLowerCase().includes(lowerSearch) ||
        tour.description.toLowerCase().includes(lowerSearch) ||
        tour.locations.toLowerCase().includes(lowerSearch) ||
        tour.country.toLowerCase().includes(lowerSearch)
      );
    }

    // Filter by selected locations
    if (selectedLocations.length > 0) {
      tours = tours.filter(tour =>
        tour.itinerary.some(item => selectedLocations.includes(item.location))
      );
    }

    return tours;
  }, [sortedTours, searchText, selectedLocations]);

  const paginatedTours = useMemo(() => {
    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    return filteredTours.slice(start, end);
  }, [filteredTours, currentPage, resultsPerPage]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < 400) {
        setIsFilterPassed(false);
      } else {
        setIsFilterPassed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint (1024px and above)
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  useEffect(() => {
    setIsCloseVisible(searchText.length > 0);
  }, [searchText]);

  const handleClear = () => {
    setSearchText("");
    setIsCloseVisible(false);
  };

  const handleSelection = (selected: string) => {
    console.log("Selected:", selected);
    // Handle sorting logic here
    setSortBy(selected);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    // Add search logic here
  };

  const FilterResultsBtn = () => {
    return (
      <Button
        className=" text-nowrap w-full py-5"
        onClick={() => {
          if (!isFiltersOpen) {
            setIsFiltersOpen(true);
          }
        }}
      >
        <ListFilter />
        FILTER RESULTS
      </Button>
    );
  };

  return (
    <>
      <div className="bg-white">
        <div className="w-full flex flex-col items-center lg:items-start py-4">
          <BreadCrumb items={[
            { href: "/", label: "Home" },
            { label: "Search" },
          ]} />

          <h2 className="text-xl md:text-2xl lg:text-3xl text-textcolor1 font-bold font-sourceSerif mt-6 w-full max-w-3xl lg:max-w-5xl">
            Search results for
          </h2>

          <form
            onSubmit={handleSearch}
            className="w-full max-w-3xl text-center lg:max-w-5xl h-11 border border-e1 mt-4 flex items-center gap-2 px-1"
          >
            <input
              name="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Where to or what trip?"
              className="w-full focus:outline-none ps-4 placeholder:text-textcolor2 placeholder:font-extralight text-textcolor1"
              aria-label="Search trips"
            />

            {isCloseVisible && (
              <button
                type="button"
                className="transition-all duration-200 flex items-center justify-center rounded-full  text-textcolor1"
                onClick={handleClear}
                aria-label="Clear search"
              >
                <CgClose size={24} strokeWidth={1} />
              </button>
            )}

            <button
              type="submit"
              className="bg-textcolor1 hover:bg-textcolor1/95 transition-all duration-200 w-9 h-9 flex items-center justify-center text-white rounded-full p-1.5"
              aria-label="Search"
            >
              <Search strokeWidth={3} />
            </button>
          </form>

          <div className=" w-full mt-4 lg:hidden max-w-3xl text-center lg:max-w-5xl mx-auto lg:me-auto">
            <FilterResultsBtn />

          </div>

          <div
            className={`fixed w-full top-0 lg:hidden max-w-3xl text-center lg:max-w-5xl mx-auto lg:me-auto z-10 p-5 transition-all duration-200 -translate-y-full ${isFilterPassed && "translate-y-0"
              }`}
          >
            <FilterResultsBtn />
          </div>

          <div className=" mt-4 font-medium tracking-wide text-sm text-center lg:text-start text-textcolor1">
            {filteredTours.length} Trips Found
          </div>
        </div>
      </div>

      {isFiltersOpen && (
        <div
          className={` fixed w-vw h-dvh inset-0 z-50 bg-white overflow-y-auto`}
        >
          <div className={`flex flex-col flex-1 relative pb-20`}>
            <SearchFilter />
          </div>
          <div className=" fixed bottom-0 w-full mt-4 bg-white shadow-lg p-5">
            <Button
              className=" text-nowrap w-full py-5"
              variant={"outline"}
              onClick={() => {
                if (isFiltersOpen) {
                  setIsFiltersOpen(false);
                }
              }}
            >
              <ChevronLeft size={24} strokeWidth={3} />
              Close Filters
            </Button>
          </div>
        </div>
      )}

      <div className="bg-bggray1">
        <div className="my-container py-5 flex gap-5">
          <div
            className={`min-w-[330px] max-w-[330px] bg-white rounded-lg shadow-lg hidden xl:block`}
          >
            <SearchFilter />
          </div>

          <div className=" w-full flex flex-col gap-5">
            <div className=" grid grid-cols-1 lg:grid-cols-3 items-center gap-5 mx-auto w-full">
              <div className=" flex h-11 w-full max-w-xl mx-auto">
                <SelectorDropdown
                  label="Sort by:"
                  items={sortingOptions}
                  defaultSelected={sortBy}
                  onSelect={handleSelection}
                />
              </div>
              <div className="flex gap-x-5 h-11 max-w-xl mx-auto w-full">
                <Toggle
                  label="Show maps"
                  checked={isShowMap}
                  onChange={() => {
                    setIsShowMap(!isShowMap);
                  }}
                />

                <Toggle
                  label="Price per day"
                  checked={isPricePerDay}
                  onChange={() => {
                    setIsPricePerDay(!isPricePerDay);
                  }}
                />
              </div>
              <div className="items-center justify-end gap-1 h-11 hidden lg:flex">
                <span
                  className=" text-base text-textcolor1 font-bold
                 mr-2"
                >
                  View
                </span>
                <button
                  className={` ${!gridLayout ? "text-white bg-myblue" : "text-textcolor1"
                    } rounded-full h-8 w-8 flex items-center justify-center`}
                  onClick={() => setGridLayout(false)}
                >
                  <FaThList size={18} />
                </button>
                <button
                  className={` ${gridLayout ? "text-white bg-myblue" : "text-textcolor1"
                    } rounded-full h-8 w-8 flex items-center justify-center`}
                  onClick={() => setGridLayout(true)}
                >
                  <RiLayoutGridFill size={19} />
                </button>
              </div>
            </div>
            <div
              className={`grid grid-cols-1 ${gridLayout && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3"
                } gap-5`}
            >
              {paginatedTours.map((tour, index) => (
                <Fragment key={index}>
                  {index === 2 && (
                    <div
                      className={`rounded-lg overflow-hidden bg-mygreen flex flex-1 flex-col items-center justify-center drop-shadow-lg ${gridLayout && "max-w-xl"
                        } mx-auto w-full py-32 px-12 gap-y-5`}
                    >
                      <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold font-sourceSerif text-center">
                        The Big Tour Sale is here
                      </h2>
                      <div className="text-white text-lg text-center">
                        Save up to $1,500* on select tours worldwide.
                      </div>
                    </div>
                  )}
                  {isDesktop ? (
                    gridLayout ? (
                      <TourCard tour={tour} isShowMap={isShowMap} isPricePerDay={isPricePerDay} />
                    ) : (
                      <TourCardList tour={tour} isShowMap={isShowMap} isPricePerDay={isPricePerDay} />
                    )
                  ) : (
                    <TourCard tour={tour} isShowMap={isShowMap} isPricePerDay={isPricePerDay} />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col items-center">
          <Pagination
            totalResults={filteredTours.length}
            resultsPerPage={resultsPerPage}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      <div className=" py-16 bg-e6">
        <div className="my-container flex flex-col gap-12">
          <h2 className=" text-xl md:text-2xl lg:text-3xl text-textcolor1 font-bold font-sourceSerif">
            Your Recently Viewed Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {TOUR_DATA.slice(0, 3).map((tour, index) => (
              <TourCard key={index} tour={tour} />
            ))}
          </div>
        </div>
      </div>

      <CompareTripBar />
    </>
  );
};

export default SearchItineraryPage;
