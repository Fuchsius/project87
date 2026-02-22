"use client"

import React, { useState, useRef, useEffect } from 'react'
import Title2 from '../title/Title2'
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function Section20({ title, description, partner1, partner2, partner3, partner4, partner1Logo, partner2Logo, partner3Logo, partner4Logo, descriptionClassName, titleClassName, data }: { title: string, description: string, partner1: string, partner2: string, partner3: string, partner4: string, partner1Logo: string, partner2Logo: string, partner3Logo: string, partner4Logo: string, descriptionClassName?: string, titleClassName?: string, data: any[] }) {

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

    return (
        <div className='w-full'>
            <div className='my-container'>
                <Title2 title={title} className={`text-center ${titleClassName}`} />
                {/* description */}
                <p className={`mt-2 description !text-sm text-center font-sourceSerif whitespace-pre-line ${descriptionClassName}`} dangerouslySetInnerHTML={{ __html: description }}></p>

                <div className='flex flex-row flex-wrap gap-12 justify-center mt-8'>
                    <div className='flex justify-center'>
                        <img className='w-full' src={partner1Logo} alt={partner1} />
                    </div>
                    <div className='flex justify-center'>
                        <img className='w-full' src={partner2Logo} alt={partner2} />
                    </div>
                    <div className='flex justify-center'>
                        <img className='w-full' src={partner3Logo} alt={partner3} />
                    </div>
                    <div className='flex justify-center'>
                        <img className='w-full' src={partner4Logo} alt={partner4} />
                    </div>
                </div>

                <div className="mt-12 space-y-2">
                    {data.map((faq: any, index: number) => (
                        <div
                            key={index}
                            ref={(el) => { accordionRefs.current[index] = el; }}
                            className={`border overflow-hidden transition-all ${openAccordions.includes(index) ? 'border-myred' : 'border-[#EBE7EB]'}`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`
                                                    w-full flex justify-between items-center p-5 text-left 
                                                    ${openAccordions.includes(index) ? 'bg-myred text-white' : 'bg-[#EBE7EB] text-myred'}
                                                 transition-colors duration-200
                                                `}
                            >
                                <span className="text-lg font-bold">{faq.question}</span>
                                <div className={`w-8 h-8 min-h-8 min-w-8 flex items-center justify-center rounded-full  ${openAccordions.includes(index) ? 'text-white' : 'text-myred'}`}>
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
                                <p className="text-base whitespace-pre-line text-textcolor2 md:text-lg">{faq?.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
