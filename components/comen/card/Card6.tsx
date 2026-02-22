import React from 'react'

export default function Card6({ image, title, day, description, classNameTitle, classNameDescription, hoverColor }: { image: string, title: string, day: string, description: string, classNameTitle?: string, classNameDescription?: string, hoverColor?: string }) {
    const showReadMore = description.length > 200;
    return (
        <div className='w-full shadow-shadow1 overflow-hidden rounded-md group cursor-pointer'>
            <div className='w-full h-[315px] relative flex items-center justify-center '>
                <img src={image} alt="" className='h-full w-full object-cover aspect-video filter brightness-[0.8]' />
                <div className={`absolute top-0 left-0 ${hoverColor} w-full h-full px-4 py-12 opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                    <p className={`text-white line-clamp-4 ${classNameDescription}`}>
                        {description}
                    </p>
                    {showReadMore && <a href="#" className='hover:underline hover:decoration-solid hover:decoration-white mt-4 block text-base !text-white '>Read More</a>}
                </div>
            </div>
            <div className='p-4 min-h-[80px] flex items-start justify-between mt-2 gap-2'>
                <div className=''>
                    <p className={`description-2 text-left !font-semibold text-sm ${classNameTitle}`}>
                        {title}
                    </p>
                </div>
                <div className='ml-[2px]'>
                    <p className='description-2 text-right !font-normal text-sm text-nowrap '>
                        {day}
                    </p>
                </div>
            </div>
        </div>
    )
}


