"use client";

import React from 'react'
import Title4 from '../title/Title4';

export default function Card9({ image, title, description, linkText, classNameTitle, classNameDescription, linkClassName, backgroundColor }: { image: string, title: string, description: string, linkText?: string, classNameTitle?: string, classNameDescription?: string, linkClassName?: string, backgroundColor?: string }) {
    return (
        <div className={`w-full shadow-shadow1 overflow-hidden rounded-md group ${backgroundColor}`}>
            <div className='w-full p-4 grid lg:grid-cols-2 grid-cols-1 gap-4 items-start justify-between '>
                <div className='flex items-center lg:order-1 order-2'>
                    <img src={image} alt="" className='object-cover w-full aspect-video rounded-md' />
                </div>
                <div className='relative h-full lg:order-2 order-1'>
                    <div className='h-[calc(100%-48px)]'>
                        {/* <h2 className={`sub-title !font-bold text-textcolor1  ${classNameTitle}`}>{title}</h2> */}
                        <Title4 title={title} className={`text-textcolor1 lg:!text-[24px] md:!text-[20px] !text-lg ${classNameTitle}`} />
                        <p className={`description mt-4 text-textcolor1 lg:!text-base !text-sm ${classNameDescription}`}>{description}</p>
                    </div>
                    {linkText && (
                        <div className={`mt-4 relative`}>
                            <div className='flex'>
                                <a href="" className={`underline-1 block !text-base !font-normal !decoration-solid text-myred hover:no-underline uppercase ${linkClassName}`}>{linkText}</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
