"use client";

// import { useState } from "react";

const MobileNav = ({ isMenuOpen, setIsMenuOpen,onClick }:any) => {
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className=" xl:hidden">
      <div
        className=" flex flex-col gap-[3px] cursor-pointer"
        onClick={onClick}
      >
        <div
          className={` w-5 h-1 bg-textcolor1 rounded-sm ${
            isMenuOpen ? " rotate-45" : ""
          } origin-left ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] duration-500`}
        />
        <div
          className={` w-5 h-1 bg-textcolor1 rounded-sm ${
            isMenuOpen ? " opacity-0" : ""
          } ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] duration-500`}
        />
        <div
          className={` w-5 h-1 bg-textcolor1 rounded-sm ${
            isMenuOpen ? " -rotate-45" : ""
          } origin-left ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] duration-500`}
        />
      </div>
    </div>
  );
};

export default MobileNav;
