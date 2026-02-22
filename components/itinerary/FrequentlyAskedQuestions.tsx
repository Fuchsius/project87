import React, { useEffect, useState, useRef } from 'react'
import Title2 from '../comen/title/Title2'
import { ChevronDown } from 'lucide-react'
import { FaPlus, FaMinus } from "react-icons/fa6";

interface FAQItem {
    question: string;
    answer: string;
}

export default function FrequentlyAskedQuestions() {
    const [openAccordions, setOpenAccordions] = useState<number[]>([]);
    const [isExpandAll, setIsExpandAll] = useState(false);
    const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const prevCount = useRef(openAccordions.length);

    const faqData: FAQItem[] = [
        {
            question: 'What is a definite departure?',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.\n\nWe update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.\n\nIf there are ever any changes to your departure, we will contact you.'
        },
        {
            question: 'How can I book flights for my tour? What about extra hotel nights?',
            answer: 'Details about booking flights and extra hotel nights would be explained here.'
        },
        {
            question: 'How much is the deposit for a Trafalgar tour?',
            answer: 'Information about the tour deposit would be provided in this section.'
        },
        {
            question: 'What are the different kinds of experiences available?',
            answer: 'Each Trafalgar tour has a carefully-selected range of included experiences to help immerse yourself in a destination. But did you know that every tour also has a Be My Guest and MAKE TRAVEL MATTER® Experience?'
        },
        {
            question: 'Can I join a Trafalgar tour as a solo traveller?',
            answer: 'Details for solo travellers would be explained in this section.'
        },
        {
            question: 'Where can I find room options?',
            answer: 'Information about room options would be provided here.'
        }
    ];

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
            setOpenAccordions(faqData.map((_, index) => index));
        }
    };

    useEffect(() => {
        // Only scroll when expanding items, not collapsing
        if (openAccordions.length > prevCount.current) {
            const lastOpenedIndex = openAccordions[openAccordions.length - 1];
            const element = accordionRefs.current[lastOpenedIndex];

            if (element) {
                const stickyHeader = document.querySelector('.sticky-header');
                const headerHeight = stickyHeader?.clientHeight || 60;

                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
        prevCount.current = openAccordions.length;
    }, [openAccordions]);

    useEffect(() => {
        // Check if all items are expanded and update isExpandAll accordingly
        if (faqData && faqData.length > 0) {
            const allExpanded = openAccordions.length === faqData.length;
            setIsExpandAll(allExpanded);
        }
    }, [openAccordions, faqData]);

    return (
        <div className="my-container flex flex-col mt-12">
            <Title2 title="Frequently Asked Questions" />
            <button
                onClick={handleExpandAll}
                className={`text-base text-textcolor1 font-bold active:text-seletedred ms-auto self-end py-5 flex flex-nowrap items-center gap-1`}
            >
                {isExpandAll ? 'Collapse All' : 'Expand all'}
                <img src="/assets/icons/arrow-down-1.svg" alt="" className={`${isExpandAll ? 'rotate-180' : 'rotate-0'} transition-all`} />
            </button>
            <div className="space-y-2 mt-4">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        ref={(el) => { accordionRefs.current[index] = el; }}
                        className={`border  overflow-hidden transition-all ${openAccordions.includes(index) ? 'border-myblue' : 'border-e6'}`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={`
                                    w-full flex justify-between items-center p-5 text-left 
                                    ${openAccordions.includes(index) ? 'bg-myblue text-white' : 'bg-white text-textcolor1'}
                                 transition-colors duration-200
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
                                    overflowx-hidden overflow-y-hidden transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]
                                    ${openAccordions.includes(index)
                                    ? 'max-h-[2000px] opacity-100 p-5'
                                    : 'max-h-0 opacity-0 p-0'}
                                `}
                        >
                            <p className="text-textcolor2 md:text-lg text-base whitespace-pre-line">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
