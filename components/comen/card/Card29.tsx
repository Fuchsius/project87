import React from 'react'
import Link from 'next/link'

export default function Card29({ image, title, description, link, linkText, classNameTitle, classNameDescription, classNameLink }: { image: string, title: string, description: string, link: string, linkText: string, classNameTitle?: string, classNameDescription?: string, classNameLink?: string }) {
    return (
        <div className='w-full h-full shadow-shadow1 overflow-hidden rounded-md flex flex-col'>
            <div className='w-full aspect-[16/9] overflow-hidden'>
                <img src={image} alt="" className='w-full h-full object-cover' />
            </div>
           <div className='p-4 bg-white relative flex flex-col flex-1'>
                <h1 className={`text-center lg:text-[24px] md:text-lg text-base font-sourceSerif font-bold text-textcolor1 ${classNameTitle}`}>{title}</h1>
                <p className={`mt-2 description text-center text-textcolor1 font-noraml line-clamp-4 !text-sm ${classNameDescription} `}>{description}</p>

                <div className='mt-auto pt-4 flex justify-center'>
                    <Link href={link} className={`text-center block text-textcolor1 md:text-base text-sm underline-1 font-normal hover:text-myblue transition-colors ${classNameLink || ''}`}>
                        {linkText}
                    </Link>
                </div>
            </div>
        </div>
    )
}
