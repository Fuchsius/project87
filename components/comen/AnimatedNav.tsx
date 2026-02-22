"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
// import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useGSAP } from '@gsap/react';
import { Button } from './button';

interface SubSubHeader {
  title: string;
  description?: string;
}

interface SubHeader {
  title: string;
  slug: string;
  subsubheaders: SubSubHeader[];
  image?: string;
  button?: string;
}

interface NavItem {
  title: string;
  slug: string;
  subheaders: SubHeader[];
}

interface Props {
  NAV_DATA: NavItem[];
  isOpen: string;
  setIsOpen: (value: string) => void;
  setIsChatOpen: (value: boolean) => void;
  setSelectedSubHeader: (value: SubHeader | null) => void;
  setIsMobileMenuOpen: (value: boolean) => void;
  selectedSubHeader: SubHeader | null;
  navRef: any;
}

const AnimatedNav: React.FC<Props> = ({
  NAV_DATA,
  isOpen,
  setIsOpen,
  setIsChatOpen,
  setSelectedSubHeader,
  setIsMobileMenuOpen,
  selectedSubHeader,
  navRef
}) => {
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const subMenuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mainMenu = mainMenuRef.current;
    const subMenu = subMenuRef.current;

    if (!mainMenu || !subMenu) return;

    // Reset any existing animations
    gsap.killTweensOf([mainMenu, subMenu]);

    if (isOpen) {
      // Going to submenu
      // Main menu slides left
      gsap.to(mainMenu, {
        x: '-100%',
        duration: 0.3,
        ease: 'power2.inOut'
      });
      // Submenu slides in from right
      gsap.fromTo(subMenu,
        { x: '100%' },
        {
          x: 0,
          duration: 0.3,
          ease: 'power2.inOut'
        }
      );
    } else {
      // Going back to main menu
      // Main menu slides in from left
      gsap.fromTo(mainMenu,
        { x: '-100%' },
        {
          x: 0,
          duration: 0.3,
          ease: 'power2.inOut'
        }
      );
      // Submenu slides out to right
      gsap.to(subMenu, {
        x: '100%',
        duration: 0.3,
        ease: 'power2.inOut'
      });
    }
  }, [isOpen]);

  return (
    <div ref={navRef} className="bg-white shadow-lg overflow-hidden w-full h-full max-w-sm relative">
      <div ref={mainMenuRef} className="absolute w-full h-full overflow-y-auto">
        <div className="flex flex-col p-5 gap-y-5">
          {NAV_DATA.map((item, index) => (
            <div
              key={index}
              className={`font-medium text-lg text-textcolor1 flex items-center justify-between transition-all duration-300 cursor-pointer ${isOpen === item.slug ? "text-seletedred" : ""
                }`}
              onClick={() => {
                if (isOpen === item.slug) {
                  setIsChatOpen(false);
                  setIsOpen("");
                  setSelectedSubHeader(null);
                  setIsMobileMenuOpen(false);
                } else {
                  setIsChatOpen(false);
                  setIsOpen(item.slug);
                  setSelectedSubHeader(item.subheaders[0]);
                }
              }}
            >
              <span>{item.title}</span>
              <ChevronRight size={24} strokeWidth={2} className="my-auto" />
            </div>
          ))}
        </div>
      </div>

      <div ref={subMenuRef} className="absolute w-full h-full overflow-y-auto">
        <div className="flex flex-col h-full">
          {NAV_DATA.map(
            (item, index) =>
              isOpen === item.slug && (
                <div key={index} className="flex flex-col flex-1">
                  <div
                    className="font-medium text-xl text-textcolor1 px-5 py-3 gap-2 bg-gray-100 flex cursor-pointer sticky top-0 z-10"
                    onClick={() => {
                      setIsOpen("");
                    }}
                  >
                    <ChevronLeft size={24} strokeWidth={2} />
                    <span className="mt-auto">{item.title}</span>
                  </div>
                  <div className="px-5 flex flex-col gap-y-5 flex-1">
                    {item.subheaders.map((subheader, index) => (
                      <div key={index}>
                        <Accordion type="single" collapsible>
                          <AccordionItem value={subheader.slug}>
                            <AccordionTrigger>{subheader.title}</AccordionTrigger>
                            <AccordionContent>
                              <div className="grid grid-cols-1 gap-y-3">
                                {subheader.subsubheaders.map(
                                  (subsubheader, index) =>
                                    subsubheader.description && (
                                      <div
                                        key={index}
                                        className="flex flex-col gap-1"
                                      >
                                        <h6 className="font-medium text-textcolor1">
                                          {subsubheader.title}
                                        </h6>
                                        <p className="text-sm font-light text-textcolor2">
                                          {subsubheader.description}
                                        </p>
                                      </div>
                                    )
                                )}
                              </div>

                              <div className="grid grid-cols-1 gap-y-3 text-textcolor2">
                                {subheader.subsubheaders.map(
                                  (subsubheader, index) =>
                                    !subsubheader.description && (
                                      <p
                                        key={index}
                                        className="text-sm"
                                      >
                                        {subsubheader.title}
                                      </p>
                                    )
                                )}
                              </div>

                              <div className="w-full flex items-center justify-content-center aspect-video mt-5 overflow-hidden relative">
                                {"image" in subheader && (
                                  <Image
                                    src={subheader.image || ""}
                                    alt={subheader.title}
                                    width={500}
                                    height={300}
                                    className="object-cover object-center"
                                  />
                                )}

                                {"button" in subheader && selectedSubHeader?.button && (
                                  <div className="w-full h-full absolute flex items-center justify-center">
                                    <Button variant="default" size="lg">
                                      {selectedSubHeader.button}
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimatedNav;