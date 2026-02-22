"use client";

import { useEffect, useState } from "react";
import Header from "./comen/header";
import { useScreenScrolledStore } from "@/stores/screenScrolledStore";

const HeaderContainer = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isHeaderPassed, setIsHeaderPassed] = useState(false); // Start with original header visible
    const { isScrolled, setIsScrolled, visible, setVisible } =
        useScreenScrolledStore();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        let ticking = false;
        let lastScrollY = 0;
        let rafId: number;
        let ignoreScrollUntil = 0;

        const updateScrollState = (currentScrollPos: number) => {
            const scrollDifference = Math.abs(currentScrollPos - prevScrollPos);
            const minScrollThreshold = 50; // Increased threshold to prevent flickering
            
            // Only update if scroll difference is significant enough
            if (scrollDifference < minScrollThreshold) {
                return;
            }
            
            const isScrollingDown = currentScrollPos > prevScrollPos;
            
            // Always show banner when near top of page (less than 50px)
            if (currentScrollPos < 50) {
                setIsHeaderPassed(false); // Show original header with banner
                setVisible(true);
                setPrevScrollPos(currentScrollPos);
                return;
            }
            
            // Show header when scrolling up (towards top), hide when scrolling down
            if (!isScrollingDown) {
                // Scrolling up - show header
                setIsHeaderPassed(true);
                setVisible(true);
            } else {
                // Scrolling down - hide header  
                setIsHeaderPassed(false);
                setVisible(false);
            }

            setPrevScrollPos(currentScrollPos);
        };

        const handleHumanScroll = () => {
            // Skip if we're ignoring scroll events (navigation in progress)
            if (Date.now() < ignoreScrollUntil) return;

            lastScrollY = window.scrollY;

            if (!ticking) {
                ticking = true;
                rafId = requestAnimationFrame(() => {
                    updateScrollState(lastScrollY);
                    ticking = false;
                });
            }
        };

        // Only listen to human scroll events
        const handleWheel = (e: WheelEvent) => handleHumanScroll();
        const handleTouchMove = (e: TouchEvent) => handleHumanScroll();
        const handleKeyDown = (e: KeyboardEvent) => {
            // Only keyboard navigation keys that cause scroll
            if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
                handleHumanScroll();
            }
        };

        // Listen only to human interaction events
        window.addEventListener("wheel", handleWheel, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        window.addEventListener("keydown", handleKeyDown, { passive: true });

        // Global function to ignore scroll events during navigation
        (window as any).ignoreScrollFor = (milliseconds: number) => {
            ignoreScrollUntil = Date.now() + milliseconds;
        };

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("keydown", handleKeyDown);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [prevScrollPos]);

    return (
        <>
            <div
                className={`transition-transform duration-300 ease-out ${
                    isHeaderPassed ? "-translate-y-full" : "translate-y-0"
                }`}
            >
                <Header isBannerShow={true} />
            </div>
            <div
                className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-out ${
                    isHeaderPassed && visible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <Header isBannerShow={false} />
            </div>
        </>
    );
};

export default HeaderContainer;
