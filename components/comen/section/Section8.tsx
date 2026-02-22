'use client'

import React, { useState } from 'react'

// card
import Title2 from '../title/Title2';
import Card3 from '../card/Card3';
import { Button } from '@/components/comen/button'

export default function Section8({ data, title, description, bgColor1, bgColor2, button, classNameTitle, classNameDescription, classNameButton }: { data: any[]; title: string; description: string; bgColor1: string | undefined; bgColor2: string | undefined; button: string; classNameTitle: string; classNameDescription: string; classNameButton: string }) {
    const [showAll, setShowAll] = useState(false);
    const displayedData = showAll ? data : data.slice(0, 3);

    return (
        <>
            <div className="relative -mt-[100px]">
                {/* Background (only top half) */}
                <div className="relative top-[100px] left-0 w-full">
                    <div className={`w-full pt-12 pb-20 ${bgColor1 ? bgColor1 : 'bg-[#0b5d56]'} -z-10`}>
                        {/* Title */}
                        <div className='my-container'>
                            <Title2 title={title} className={`text-white text-center ${classNameTitle}`} />
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
                <div className="max-w-7xl mx-auto px-4 text-center relative">
                    {/* Cards */}
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {displayedData.map((item: any, index: number) => (
                            <Card3
                                key={index}
                                type={item.type}
                                image={item.image}
                                title={item.title}
                                title2={item.title2}
                                description={item.description}
                                link={item.link}
                                linkText={item.linkText}
                                classNameTitle={item.classNameTitle}
                                classNameDescription={item.classNameDescription}
                                linkClassName={item.linkClassName}
                            />
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
