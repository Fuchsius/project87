"use client";

import React, { useId, useRef } from "react";
import { ChevronLeft, Search } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

interface AnimatedSearchProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimatedSearch: React.FC<AnimatedSearchProps> = ({
  placeholder = "Where to or what trip?",
  onSearch,
  expanded,
  setExpanded,
}) => {
  const router = useRouter();
  const searchContainerRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchIconRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  useGSAP(() => {
    if (window.innerWidth < 1280) {
      if (expanded) {
        // Expand animation to the left
        gsap.to(searchContainerRef.current, {
          width: "220px",
          right: "0",
          duration: 0.3,
          // ease: "power2.out",
        });
        gsap.to(inputRef.current, {
          opacity: 1,
          duration: 0.2,
          delay: 0.2,
          display: "block",
        });
        gsap.to(searchIconRef.current, {
          rotate: 90,
          duration: 0.3,
        });
      } else {
        // Collapse animation
        gsap.to(inputRef.current, {
          opacity: 0,
          duration: 0.2,
          display: "none",
        });
        gsap.to(searchContainerRef.current, {
          width: "32px",
          right: "0",
          duration: 0.3,
          delay: 0.1,
          // ease: "power2.in",
        });
        gsap.to(searchIconRef.current, {
          rotate: 0,
          duration: 0.3,
        });
      }
    }
  }, [expanded]);

  const handleSearchClick = () => {
    if (window.innerWidth < 1440) {
      setExpanded(!expanded);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current && onSearch) {
      onSearch(inputRef.current.value);
      router.push('/search')
    }
  };

  return (
    <>
      {expanded && (
        <ChevronLeft
          strokeWidth={2}
          size={24}
          className="cursor-pointer text-textcolor1 hover:text-myred"
          onClick={() => {
            setExpanded(false);
          }}
        />
      )}

      <form
        onSubmit={handleSubmit}
        ref={searchContainerRef}
        className={`relative p-1 flex items-center justify-between rounded-full transition-colors duration-200
        ${expanded ? "bg-white border border-textcolor1" : ""}
        2xl:border 2xl:border-textcolor1 2xl:w-64
        ${!expanded && "w-8"}`}
      >
        <input
          ref={inputRef}
          type="text"
          name="headerSearch"
          id={`${uid}-headerSearch`}
          placeholder={placeholder}
          className={`px-2 w-full bg-transparent focus:outline-none placeholder:text-textcolor2 placeholder:font-light placeholder:text-sm placeholder:text-center
          hidden 2xl:flex
          ${expanded && "!block"}`}
        />
        <button
          type="button"
          onClick={handleSearchClick}
          className="bg-myred hover:bg-myred/90 text-white flex flex-nowrap items-center justify-center min-w-8 w-8 min-h-8 h-8 rounded-full p-1 cursor-pointer"
        >
          <div ref={searchIconRef}>
            <Search className="w-4 h-4" strokeWidth={3} />
          </div>
        </button>
      </form>
    </>
  );
};

export default AnimatedSearch;
