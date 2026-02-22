"use client"

import React, { useState, useRef, useEffect } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function Section23({ data, search }: { data: any[], search: Boolean }) {

    const [openAccordions, setOpenAccordions] = useState<number[]>([]);
    const [isExpandAll, setIsExpandAll] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const prevCount = useRef(openAccordions.length);

    const toggleAccordion = (index: number) => {
        setOpenAccordions(prev =>
            prev.includes(index)
                ? prev.filter(item => item !== index)
                : [...prev, index]
        );
    };

    const handleExpandAll = () => {
        setIsExpandAll(!isExpandAll);
        if (isExpandAll) {
            setOpenAccordions([]);
        } else {
            setOpenAccordions(data?.map((_: any, index: number) => index) || []);
        }
    };

    useEffect(() => {
        if (openAccordions.length > prevCount.current) {
            const lastOpenedIndex = openAccordions[openAccordions.length - 1];
            const element = accordionRefs.current[lastOpenedIndex];

            if (element) {
                const stickyHeader = document.querySelector('.sticky-header');
                const headerHeight = stickyHeader?.clientHeight || 60;
                const startPosition = window.pageYOffset;
                const elementPosition = element.getBoundingClientRect().top;
                const targetPosition = elementPosition + startPosition - headerHeight;
                const duration = 1500; // ms
                let start: number | null = null;

                // Cubic-bezier timing function for smooth ease-in-out
                const easeInOutCubic = (t: number): number => {
                    return t < 0.5
                        ? 4 * t * t * t
                        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                };

                const animateScroll = (timestamp: number) => {
                    if (!start) start = timestamp;
                    const elapsed = timestamp - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = easeInOutCubic(progress);

                    window.scrollTo(0, startPosition + (targetPosition - startPosition) * easedProgress);

                    if (progress < 1) {
                        window.requestAnimationFrame(animateScroll);
                    }
                };

                window.requestAnimationFrame(animateScroll);
            }
        }
        prevCount.current = openAccordions.length;
    }, [openAccordions]);

    useEffect(() => {
        // Check if all items are expanded and update isExpandAll accordingly
        if (data && data.length > 0) {
            const allExpanded = openAccordions.length === data.length;
            setIsExpandAll(allExpanded);
        }
    }, [openAccordions, data]);

    const trimmedSearchTerm = searchTerm.trim();
    const hasSearchTerm = trimmedSearchTerm.length > 0;

    // Filter FAQ data based on search term
    const filteredData = React.useMemo(() => {
        if (!hasSearchTerm) return data;

        const searchLower = trimmedSearchTerm.toLowerCase();
        return data.filter(faq =>
            faq.question.toLowerCase().includes(searchLower) ||
            faq.answer.toLowerCase().includes(searchLower)
        );
    }, [data, trimmedSearchTerm, hasSearchTerm]);

    const hasFilteredResults = filteredData.length > 0;

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    return (
        <div className="flex flex-col">
            {/* search */}
            {search && (
                <div className='w-full '>
                    <div className='w-full flex justify-end items-center relative'>
                        <input
                            type="text"
                            placeholder='Search'
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                            className={`bg-e6 border border-transparent py-2 pl-4 pr-8 rounded-3xl placeholder:text-[#6B6B6B] text-sm h-8 transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] outline-none text-textcolor1 ${isSearchFocused ? 'sm:w-72 w-full' : 'sm:w-52 w-full'}`}
                        />
                        <div className='absolute right-3'>
                            <img src="/assets/icons/faq-search-dark.svg" alt="" />
                        </div>
                    </div>
                    {/*  */}
                    <div
                        className={`transition-all duration-1000 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] overflow-hidden ${hasSearchTerm ? 'max-h-[250px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0 pointer-events-none'}`}
                        aria-hidden={!hasSearchTerm}
                    >
                        <div className='w-full sm:flex block items-center flex-wrap gap-2'>
                            <div className=''>
                                <h2 className={`font-sourceSerif text-[20px] md:text-[26px] lg:text-[30px] font-bold text-textcolor1 break-all`}>Your search for "{trimmedSearchTerm}"</h2>

                            </div>
                            <div className=''>
                                <button
                                    type='button'
                                    onClick={handleClearSearch}
                                    className='description-2 !font-bold uppercase underline-1'
                                    tabIndex={hasSearchTerm ? 0 : -1}
                                >
                                    Clear Search
                                </button>
                            </div>
                        </div>
                        <p className='description font-sourceSerif whitespace-pre-line !font-normal lg:!text-lg !text-base'>
                            {hasFilteredResults
                                ? `${filteredData.length} item${filteredData.length !== 1 ? 's' : ''} matching the criteria`
                                : 'No items matching the criteria'
                            }
                        </p>
                    </div>
                </div>
            )}
            {!hasSearchTerm && (
                <button
                    onClick={handleExpandAll}
                    className={`text-base text-textcolor1 font-bold active:text-seletedred ms-auto self-end py-5 flex flex-nowrap items-center gap-1`}
                >
                    {isExpandAll ? '+ / – Collapse all' : '+ / – Expand all'}
                </button>
            )}
            <div className={`space-y-2 ${hasSearchTerm ? 'mt-4' : 'mt-4'}`}>
                {filteredData.map((faq, index) => (
                    <div
                        key={index}
                        ref={(el) => { accordionRefs.current[index] = el; }}
                        className={`border overflow-hidden transition-all ${openAccordions.includes(index) ? 'border-myblue' : 'border-e6'}`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={`
                                        w-full flex justify-between items-center p-5 text-left  transition-colors duration-300
                                        ${openAccordions.includes(index) ? 'bg-myblue text-white ' : 'bg-white text-textcolor1'}
                                     
                                    `}
                        >
                            <span className="font-bold text-lg ">{faq.question}</span>
                            <div className=' w-8 h-8 min-h-8 min-w-8 flex items-center justify-center bg-e6 rounded-full text-textcolor1'>
                                {openAccordions.includes(index) ? (
                                    <FaMinus
                                        size={20}
                                    />
                                ) : (
                                    <FaPlus
                                        size={20}
                                    />
                                )}
                            </div>
                        </button>

                        <div
                            className={`
                                    overflowx-hidden overflow-y-hidden transition-all duration-800 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]
                                    ${openAccordions.includes(index)
                                    ? 'max-h-[2000px] opacity-100 p-5'
                                    : 'max-h-0 opacity-0 p-0'}
                                `}
                        >
                            <p className="text-textcolor2 md:text-lg text-base whitespace-pre-line" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
