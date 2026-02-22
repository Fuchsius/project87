'use client'

import React, { useState } from 'react'

// card
import Title2 from '../title/Title2';
import { Button } from '@/components/comen/button'
import Card11 from '../card/Card11';

export default function Section14({ data, title1, title2, description, bgColor1, bgColor2, button, classNameTitle1, classNameTitle2, classNameDescription, classNameButton }: { data: any[]; title1: string; title2: string; description: string; bgColor1: string | undefined; bgColor2: string | undefined; button: string; classNameTitle1: string; classNameTitle2: string; classNameDescription: string; classNameButton: string }) {
    const [showAll, setShowAll] = useState(false);
    const displayedData = showAll ? data : data.slice(0, 3);

    return (
        <>
            <div className="relative -mt-[100px]">
                {/* Background (only top half) */}
                <div className="relative top-[120px] left-0 w-full">
                    <div className={`w-full pt-12 pb-20 ${bgColor1 ? bgColor1 : 'bg-[#0b5d56]'} -z-10`}>
                        {/* Title */}
                        <div className='my-container'>
                            <h3 className={`text-white text-center font-semibold md:text-lg text-base ${classNameTitle1}`}>{title1}</h3>
                            <Title2 title={title2} className={`text-white text-center ${classNameTitle2}`} />
                            <div className='w-full flex items-center relative'>
                                {/* description */}
                                <div className='w-full '>
                                    <p className={`text-center mt-2 text-white ${classNameDescription}`}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`relative w-full h-[50px] ${bgColor2 ? bgColor2 : 'bg-bggray4'}`}></div>
                </div>

                {/* Content container */}
                <div className="my-container mx-auto px-4 text-center relative">
                    {/* Cards */}
                    <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
                        {displayedData.map((item, index) => (
                            <div key={item.id || `item-${index}`} className="w-full lg:w-[calc(33.333%-(16px*2/3))] md:w-[calc(50%-8px)] flex">
                                <Card11
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    classNameTitle={item.classNameTitle}
                                    classNameDescription={item.classNameDescription}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {button && (
                    <div className='w-full flex items-center justify-center mt-8'>
                        <Button
                            variant="default"
                            size={"lg"}
                            className={` ${classNameButton}`}
                        // onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? 'Show Less' : button}
                        </Button>
                    </div>
                )}
            </div>
        </>
    )
}
