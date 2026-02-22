"use client";

import { NAV_DATA } from "@/data/header.data";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Search, ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import MobileNav from "./MobileNav";
import { CgClose } from "react-icons/cg";
import AnimatedSearch from "./AnimatedSearch";
import AnimatedNav from "./AnimatedNav";
import { useScreenScrolledStore } from "@/stores/screenScrolledStore";

const Header = ({ isBannerShow = true }: { isBannerShow: boolean }) => {
  const [isOpen, setIsOpen] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedSubHeader, setSelectedSubHeader] = useState<any>(null);
  const [isOfficeOpen, setIsOfficeOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const navRef = useRef<any>(null);
  const [expanded, setExpanded] = useState(false);
  const chatRef = useRef<any>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  // const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);
  const [isHeaderPassed, setIsHeaderPassed] = useState(false);
  const { isScrolled, setIsScrolled, visible, setVisible } =
    useScreenScrolledStore();

  useEffect(() => {
    if (isMobileMenuOpen || isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    // Cleanup function to reset scroll behavior if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280); // lg breakpoint (1280px and above)
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < 150) {
        // setVisible(true);
        setIsHeaderPassed(false);
      } else {
        setIsHeaderPassed(true);
      }
      const isScrollingUp = currentScrollPos < prevScrollPos;
      setVisible(isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleOutsideClick = (event: any) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsChatOpen(false);
      setIsOpen("");
      setSelectedSubHeader(null);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatRef.current &&
        !chatRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsChatOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (value: string) => {
    console.log("Search value:", value);
    // Handle search logic
  };

  return (
    <div className={` z-50 transition-all duration-200 select-none`}>
      {isOfficeOpen && isBannerShow && (
        <div
          className={` bg-[#2D5A7B] h-10 lg:h-12 transition-all text-center text-white font-medium flex items-center justify-center px-4 ${isOpen ? " brightness-50" : ""
            }`}
        >
          <p className="md:text-sm text-xs lg:text-base md:tracking-wider my-container">
            The Big Tour Sale | Save up to | 1,500* per couple on select trips |{" "}
            <span className="underline cursor-pointer text-wrap">
              See Deals
            </span>
          </p>

          <CgClose
            className=" absolute right-3 cursor-pointer hover:font-bold"
            onClick={() => setIsOfficeOpen(false)}
          />
        </div>
      )}
      <div className=" bg-white drop-shadow-md z-50">
        <div className="my-container flex items-center h-10">
          <div className="text-textcolor1 flex gap-3 ms-auto text-[12px] font-bold items-center ">
            <Link
              href="#"
              className="relative  after:absolute after:left-1/2 after:bottom-0 after:h-[0.8px] after:w-0 after:bg-myred after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2 font-figtree"
            >
              FAQs
            </Link>
            <Link
              href="#"
              className="relative after:absolute after:left-1/2 after:bottom-0 after:h-[0.8px] after:w-0 after:bg-myred after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2 font-figtree"
            >
              Contact us
            </Link>
            <button className=" bg-myred text-white px-1 py-[1px] hover:brightness-95">
              Get a Quote
            </button>
            <Link
              href="#"
              target="_blank"
              className="relative after:absolute after:left-1/2 after:bottom-0 after:h-[0.8px] after:w-0 after:bg-myred after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2 font-figtree"
            >
              My TravelGate
            </Link>
          </div>
        </div>
        <div className="my-container flex justify-between items-center h-20">
          <div className=" !w-[160px] flex gap-5 items-center">
            <MobileNav
              isMenuOpen={isMobileMenuOpen}
              // setIsMenuOpen={setIsMobileMenuOpen}
              onClick={() => {
                setIsChatOpen(false);
                setIsMobileMenuOpen((prev: boolean) => !prev);
              }}
            />

            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={163}
                height={36}
                className={` !w-42 object-cover object-center transition-all ${!isDesktop && expanded
                    ? " opacity-0"
                    : " opacity-100 delay-300"
                  }`}
                priority={true}
                quality={100}
                blurDataURL="data:image/jpeg..."
              />
            </Link>
          </div>
          <div
            className={`!transition-all  ${expanded ? " opacity-0 !w-0" : " opacity-100 delay-500 w-auto"
              } hidden xl:flex text-textcolor1 gap-7 text-sm`}
          >
            {NAV_DATA.map((item, index) => (
              <div
                key={index}
                className={`relative text-sm font-bold flex items-center gap-1 transition-all cursor-pointer ${expanded
                    ? " opacity-0 hidden"
                    : " opacity-100 delay-500 w-auto"
                  }`}
                onClick={() => {
                  if (isOpen === item.slug) {
                    setIsChatOpen(false);
                    setIsOpen("");
                    setSelectedSubHeader(null);
                  } else {
                    setIsChatOpen(false);
                    setIsOpen(item.slug);
                    setSelectedSubHeader(item.subheaders[0]);
                  }
                }}
              >
                {/* Apply animation only to the text */}
                <span
                  className={`relative after:absolute after:left-1/2 after:bottom-0 after:h-[0.8px] after:w-0 after:bg-myred after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2 ${isOpen === item.slug ? "after:w-full" : ""
                    }`}
                >
                  {item.title}
                </span>

                {/* Icon remains unaffected */}
                <ChevronDown
                  size={16}
                  className={`my-auto transition-all duration-300`}
                />
              </div>
            ))}
          </div>

          {/* Search and contact */}
          <div className="flex items-center sm:space-x-5 relative">
            {/* <div className="relative p-1 flex items-center justify-between xl:border xl:border-textcolor1 rounded-full xl:w-56 transition-all duration-200">
              <input
                type="text"
                placeholder="Where to or what trip?"
                className=" hidden xl:flex px-2 w-full bg-transparent focus:outline-none placeholder:text-textcolor1 placeholder:text-sm placeholder:text-center"
              />
              <button className="bg-myred hover:bg-myred/90 text-white flex flex-nowrap items-center justify-center min-w-8 w-8 min-h-8 h-8 rounded-full p-1 cursor-pointer">
                <Search />
              </button>
            </div> */}

            <AnimatedSearch
              placeholder="Where to or what trip?"
              onSearch={handleSearch}
              expanded={expanded}
              setExpanded={setExpanded}
            />

            <div className="flex relative items-center space-x-5 text-gray-700">
              <span className="font-semibold font-Halyard text-lg text-nowrap hidden sm:block">
                +94 701 696 699
              </span>
              <button
                className="flex items-center gap-2"
                ref={buttonRef}
                onClick={() => {
                  if (selectedSubHeader !== null || isOpen === "") {
                    setSelectedSubHeader(null);
                    setIsOpen("");
                    setIsMobileMenuOpen(false);
                  }
                  setIsChatOpen(!isChatOpen);
                }}
              >
                <Image
                  src={"/assets/icons/chat.svg"}
                  alt="chat"
                  width={16}
                  height={16}
                />
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isChatOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                ref={chatRef}
                className={`absolute z-30 top-10 right-0 bg-white flex flex-col gap-4 border border-textcolor1 rounded-md p-4 shadow-lg w-52 transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] transform ${isChatOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
              >
                <MenuItem
                  icon={
                    <Image
                      src="/assets/icons/1.svg"
                      width={20}
                      height={20}
                      alt=""
                      className=" w-full h-full object-cover object-center"
                    />
                  }
                  title="Call Us"
                  subtitle="+94 701 696 699"
                />
                <MenuItem
                  icon={
                    <Image
                      src="/assets/icons/2.svg"
                      width={20}
                      height={20}
                      alt=""
                      className=" w-full h-full object-cover object-center"
                    />
                  }
                  title="WhatsApp"
                  subtitle="+94 701 696 699"
                />
                <MenuItem
                  icon={
                    <Image
                      src="/assets/icons/3.svg"
                      width={20}
                      height={20}
                      alt=""
                      className=" w-full h-full object-cover object-center"
                    />
                  }
                  title="For Agents"
                  subtitle="+94 701 696 699"
                />
                <MenuItem
                  icon={
                    <Image
                      src="/assets/icons/4.svg"
                      width={20}
                      height={20}
                      alt=""
                      className=" w-full h-full object-cover object-center"
                    />
                  }
                  title="Request a Callback"
                  subtitle="Choose Date & Time"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isDesktop &&
        NAV_DATA.map(
          (item, index) =>
            isOpen === item.slug && (
              <div
                key={index}
                className="fixed left-0 right-0 z-50 w-full h-dvh bg-black/80 hidden xl:block"
                onClick={handleOutsideClick}
              >
                <div className="my-container">
                  <div
                    ref={navRef}
                    className={`bg-white drop-shadow-2xl max-h-[505px] overflow-hidden 
                transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]
                ${isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-5"
                      }
              `}
                  >
                    <div className="flex flex-1 w-full h-full">
                      {/* Left sidebar */}
                      <div className="w-60 bg-bggray1 p-4 overflow-y-auto">
                        {item.subheaders.map((subheader, index) => (
                          <div
                            key={index}
                            className={`flex font-semibold items-center justify-between 
                        ${selectedSubHeader === subheader
                                ? "text-seletedred"
                                : "text-textcolor1"
                              }  
                        cursor-pointer p-2 rounded transition duration-300`}
                            onClick={() => setSelectedSubHeader(subheader)}
                          >
                            <span>{subheader.title}</span>
                            <ChevronRight size={20} />
                          </div>
                        ))}
                      </div>

                      {/* Middle content */}
                      <div className="flex-1 p-5 overflow-y-auto">
                        {"button" in selectedSubHeader ? (
                          <Link
                            href={`#`}
                            className="text-lg font-bold text-textcolor1 font-sourceSerif hover:text-seletedred"
                          >
                            {selectedSubHeader.title || ""}
                          </Link>
                        ) : (
                          <h5 className="text-lg font-bold text-textcolor1 font-sourceSerif">
                            {selectedSubHeader.title || ""}
                          </h5>
                        )}

                        <div className="grid grid-cols-2 gap-x-5 gap-y-3 mt-5">
                          {selectedSubHeader.subsubheaders.map(
                            (subsubheader: any, index: any) =>
                              subsubheader.description && (
                                <div
                                  key={index}
                                  className="flex flex-col gap-[2px] text-textcolor1 "
                                >
                                  <h6 className="font-bold text-sm hover:underline decoration-1 decoration-seletedred cursor-pointer">
                                    {subsubheader.title}
                                  </h6>
                                  <p className="text-sm">
                                    {subsubheader.description}
                                  </p>
                                </div>
                              )
                          )}
                        </div>

                        <div className="grid grid-cols-3 gap-x-5 gap-y-3">
                          {selectedSubHeader.subsubheaders.map(
                            (subsubheader: any, index: any) =>
                              !subsubheader.description && (
                                <p
                                  key={index}
                                  className="text-sm text-textcolor1 hover:text-seletedred cursor-pointer"
                                >
                                  {subsubheader.title}
                                </p>
                              )
                          )}
                        </div>
                      </div>

                      {/* Right image section */}
                      <div className="w-96 h-[505px] overflow-hidden relative">
                        <img
                          key={selectedSubHeader.image} // Ensures re-render when the image changes
                          src={selectedSubHeader.image}
                          alt={selectedSubHeader.title || ""}
                          className="h-full w-full object-cover object-center transition-opacity duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] opacity-0"
                          onLoad={(e: any) =>
                            e.target.classList.remove("opacity-0")
                          }
                        />

                        {"button" in selectedSubHeader && (
                          <div className="w-full h-full top-0 absolute flex items-center justify-center">
                            <Button variant="default" size={"lg"}>
                              {selectedSubHeader.button}
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}

      {!isDesktop && isMobileMenuOpen && (
        <div
          className="absolute left-0 right-0 z-50 w-full h-dvh bg-black/80 pb-[160px]"
          onClick={handleOutsideClick}
        >
          <AnimatedNav
            NAV_DATA={NAV_DATA}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setIsChatOpen={setIsChatOpen}
            setSelectedSubHeader={setSelectedSubHeader}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            selectedSubHeader={selectedSubHeader}
            navRef={navRef}
          />
        </div>
      )}
    </div>
  );
};

const MenuItem = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div className="flex gap-2 items-center">
    <div className="bg-myred hover:bg-myred/90 text-white flex items-center justify-center min-w-10 h-10 rounded-full">
      {icon}
    </div>
    <div className="flex flex-col font-semibold ">
      <p className="text-nowrap text-sm leading-5">{title}</p>
      <span className="text-nowrap text-xs">{subtitle}</span>
    </div>
  </div>
);

export default Header;
