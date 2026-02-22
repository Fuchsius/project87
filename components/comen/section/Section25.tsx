'use client'

import React from 'react'

// card
import Title2 from '../title/Title2';
import Card4 from '../card/Card4';

type Section25Card = {
    image: string;
    title: string;
    description: string;
    link?: string;
    linkText?: string;
    classNameTitle?: string;
    classNameDescription?: string;
    classNameLink?: string;
};

type Section25Props = {
    data: Section25Card[];
    title1: string;
    title2: string;
    description: string;
    bgColor1?: string;
    bgColor2?: string;
    button: string;
    classNameTitle1?: string;
    classNameTitle2?: string;
    classNameDescription?: string;
    classNameButton?: string;
};

export default function Section25({ data, title1, title2, description, bgColor1, bgColor2, button, classNameTitle1, classNameTitle2, classNameDescription }: Section25Props) {
    const displayedData = data;

    return (
        <>
            <div className="relative -mt-[100px]">
                {/* Background (only top half) */}
                <div className="relative top-[120px] left-0 w-full">
                    <div className={`w-full pt-12 pb-20 ${bgColor1 ? bgColor1 : 'bg-[#0b5d56]'} -z-10`}>
                        {/* Title */}
                        <div className='my-container'>
                            {title1 &&
                                <h3 className={`text-white text-center font-semibold md:text-lg text-base ${classNameTitle1}`}>{title1}</h3>
                            }
                            {title2 &&
                                <Title2 title={title2} className={`text-white text-center ${classNameTitle2}`} />
                            }
                            {description &&
                                <div className='w-full flex items-center relative'>
                                    {/* description */}
                                    <div className='w-full '>
                                        <p className={`text-center mt-2 text-white ${classNameDescription}`}>
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`relative w-full h-[50px] ${bgColor2 ? bgColor2 : 'bg-bggray4'}`}></div>
                </div>

                {/* Content container */}
                <div className="my-container mx-auto px-4 text-center relative">
                    {/* Cards */}
                    <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
                        {displayedData.map((item, index) => (
                            <div key={`item-${index}`} className="w-full sm:w-full md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] flex">
                                <Card4
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    link={item.link ?? ''}
                                    linkText={item.linkText ?? ''}
                                    classNameTitle={item.classNameTitle ?? ''}
                                    classNameDescription={item.classNameDescription ?? ''}
                                    classNameLink={item.classNameLink ?? ''}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}
