import React from 'react'
import Link from 'next/link'

export default function Card4({ image, title, description, link, linkText, classNameTitle, classNameDescription, classNameLink }: { image: string, title: string, description: string, link: string, linkText: string, classNameTitle?: string, classNameDescription?: string, classNameLink?: string }) {
    return (
        <div className='w-full h-full shadow-shadow1 overflow-hidden rounded-md flex flex-col'>
            <img src={image} alt="" className='w-full object-cover aspect-video' />
           <div className='p-4 bg-white relative flex flex-col flex-1'>
                {/* title */}
                <h1 className={`text-center md:text-[24px] text-lg font-sourceSerif font-bold mt-2 text-textcolor1 ${classNameTitle}`}>{title}</h1>
                {/* description */}
                <p className={`description-2 text-center mt-2 ${classNameDescription}`}>{description}</p>
                {/* link */}
                <div className='mt-auto pt-4 flex justify-center'>
                    <div className='mt-3 flex items-center justify-center w-full'>
                        <Link href={link} className={`underline-1 text-base font-bold text-textcolor1 ${classNameLink}`}>{linkText}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
