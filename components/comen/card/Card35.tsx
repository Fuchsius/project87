import React from 'react';
import Link from 'next/link';

interface Card35Props {
    title: string;
    description: string;
    icon?: string;
    classNameTitle?: string;
    classNameDescription?: string;
}

export default function Card35({
    title,
    description,
    icon,
    classNameTitle,
    classNameDescription,
}: Card35Props) {
    return (
        <div className='w-full h-full shadow-shadow1 overflow-hidden rounded-md flex flex-col'>
            <div className='p-4 relative flex flex-col flex-1'>
                {icon &&
                    <div className='w-full flex justify-center mb-4 '>
                        <img
                            src={icon}
                            alt=""
                            className='w-[44px] h-[44px] object-contain  box-content'
                        />
                    </div>
                }
                <h1 className={`text-center md:text-[24px] text-[22px] font-sourceSerif font-bold text-textcolor1  ${classNameTitle || ''}`}>
                    {title}
                </h1>
                <p className={`mt-3 text-center text-textcolor1 !text-sm ${classNameDescription || ''}`}>
                    {description}
                </p>
               
            </div>
        </div>
    );
}
