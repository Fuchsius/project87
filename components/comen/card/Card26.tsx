import React from 'react';
import Link from 'next/link';

interface Card12Props {
    title: string;
    description: string;
    icon?: string;
    classNameTitle?: string;
    classNameDescription?: string;
}

export default function Card26({
    title,
    description,
    icon,
    classNameTitle,
    classNameDescription,
}: Card12Props) {
    return (
        <div className='w-full shadow-shadow1 overflow-hidden rounded-md bg-white'>
            <div className='p-4 w-full'>
                {icon &&
                    <div className='w-full flex justify-center mb-8'>
                        <div className='p-4 bg-bggray3 rounded-full'>
                            <img
                                src={icon}
                                alt=""
                                className='w-[44px] h-[44px] object-contain  box-content'
                            />
                        </div>
                    </div>
                }
                <h1 className={`text-center md:text-[24px] text-[22px] font-sourceSerif font-bold text-textcolor1 ${classNameTitle || ''}`}>
                    {title}
                </h1>
                <p className={`mt-3 text-center text-textcolor1 md:text-base !text-sm ${classNameDescription || ''}`}>
                    {description}
                </p>
            </div>
        </div>
    );
}
