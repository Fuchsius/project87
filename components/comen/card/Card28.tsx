import React from 'react';
import Link from 'next/link';

interface Card12Props {
    title: string;
    description: string;
    icon?: string;
    classNameTitle?: string;
    classNameDescription?: string;
}

export default function Card28({
    title,
    description,
    icon,
    classNameTitle,
    classNameDescription,
}: Card12Props) {
    return (
        <div className='w-full relative flex flex-row flex-wrap py-4'>
            <div className='w-full h-[44px] relative'>
                {icon &&
                    <div className='w-full flex justify-center mb-4'>
                        <div className='p-4 bg-bggray3 rounded-full'>
                            <img
                                src={icon}
                                alt=""
                                className='w-[44px] h-[44px] object-contain  box-content'
                            />
                        </div>
                    </div>
                }
            </div>
            <div className='w-full h-[calc(100%-44px)] shadow-shadow1 rounded-md bg-white '>
                <div className='p-4 w-full h-full relative'>
                    <h1 className={`text-center mt-[44px] md:text-[24px] text-[22px] font-sourceSerif font-bold text-textcolor1] ${classNameTitle || ''}`}>
                        {title}
                    </h1>
                    <div className='w-[70px] border-b-[1px] border-myblue mt-2 mx-auto'></div>
                    <p className={`mt-4 text-center text-textcolor1 md:text-base !text-sm ${classNameDescription || ''}`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
