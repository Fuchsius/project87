import React from 'react'

export default function Card11({image, title, description, classNameTitle, classNameDescription}: {image: string, title: string, description: string, classNameTitle?: string, classNameDescription?: string}) {
    return (
        <div className='w-full h-full shadow-shadow1 overflow-hidden rounded-md flex flex-col'>
            <div className='w-full object-cover'>
                <img src={image} alt="" className='w-full object-cover aspect-video'/>
            </div>
            <div className='p-4 w-full flex-1 flex flex-col'>
                <h1 className={`text-left md:text-[22px] text-lg font-sourceSerif font-bold text-textcolor1 ${classNameTitle}`}>
                    {title}
                </h1>
                <p className={`text-left text-textcolor1 mt-4 md:text-base text-sm ${classNameDescription}`}>
                    {description}
                </p>
            </div>
        </div>
    )
}
