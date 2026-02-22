import React from 'react';
import Link from 'next/link';

interface Card12Props {
    image: string;
    title: string;
    description: string;
    icon?: string;
    linkText: string;
    link: string;
    classNameTitle?: string;
    classNameDescription?: string;
    classNameLink?: string;
}

export default function Card12({
    image,
    title,
    description,
    icon,
    linkText,
    link,
    classNameTitle,
    classNameDescription,
    classNameLink
}: Card12Props) {
    return (
        <div className='w-full h-full shadow-shadow1 overflow-hidden rounded-md flex flex-col'>
            <div className='w-full object-cover'>
                <img
                    src={image}
                    alt={title}
                    className='w-full object-cover aspect-video'
                />
            </div>
            <div className='p-4 relative flex flex-col flex-1'>
                {icon &&
                    <div className='w-full flex justify-center mb-4 '>
                        <div className='p-4 bg-bggray3 rounded-full'>
                            <img
                                src={icon}
                                alt=""
                                className='w-[44px] h-[44px] object-contain  box-content'
                            />
                        </div>
                    </div>
                }
                <h1 className={`text-center md:text-[24px] text-[22px] font-sourceSerif font-bold text-textcolor1 underline decoration-solid decoration-[1px] decoration-myblue underline-offset-[12px] ${classNameTitle || ''}`}>
                    {title}
                </h1>
                <p className={`mt-3 text-center text-textcolor1 !text-sm ${classNameDescription || ''}`}>
                    {description}
                </p>
                {linkText &&
                    <div className='mt-auto pt-4 flex justify-center'>
                        <Link href={link} className={`text-center block text-textcolor1 md:text-base text-sm underline-1 font-bold hover:text-myblue transition-colors ${classNameLink || ''}`}>
                            {linkText}
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
}
