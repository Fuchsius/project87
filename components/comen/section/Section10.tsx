'use client'

import React, { useEffect, useState, useRef } from 'react'
import Title2 from '@/components/comen/title/Title2'
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function Section10({ data, classNameTitle }: { data: any, classNameTitle?:string }) {
    const [openAccordions, setOpenAccordions] = useState<number[]>([]);
    const [isExpandAll, setIsExpandAll] = useState(false);
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
            setOpenAccordions(data.map((_: any, index: number) => index));
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

    return (
        <div className="flex flex-col ">
            <Title2 title="Frequently Asked Questions" className={`${classNameTitle}`} />
            <button
                onClick={handleExpandAll}
                className={`text-base text-textcolor1 font-bold active:text-seletedred ms-auto self-end py-5 flex flex-nowrap items-center gap-1`}
            >
                {isExpandAll ? 'Collapse All' : 'Expand all'}
                <img src="/assets/icons/arrow-down-1.svg" alt="" className={`${isExpandAll ? 'rotate-180' : 'rotate-0'} transition-all`} />
            </button>
            <div className="space-y-2 mt-4">
                {data.map((faq: any, index: number) => (
                    <div
                        key={index}
                        ref={(el) => { accordionRefs.current[index] = el; }}
                        className={`border overflow-hidden transition-all ${openAccordions.includes(index) ? 'border-myblue' : 'border-e6'}`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={`
                                    w-full flex justify-between items-center p-5 text-left 
                                    ${openAccordions.includes(index) ? 'bg-myblue text-white' : 'bg-white text-textcolor1'}
                                 transition-colors duration-200
                                `}
                        >
                            <span className="font-bold text-lg">{faq.question}</span>
                            <div className='w-8 h-8 min-h-8 min-w-8 flex items-center justify-center bg-e6 rounded-full text-textcolor1'>
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
                                    overflow-x-hidden overflow-y-auto transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]
                                    ${openAccordions.includes(index)
                                    ? 'max-h-96 opacity-100 p-5'
                                    : 'max-h-0 opacity-0 p-0'}
                                `}
                        >
                            <p className="text-textcolor2 md:text-lg text-base whitespace-pre-line">{faq?.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
