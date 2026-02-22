import React from 'react'

export default function Card25({ image, title, description, classNameTitle, classNameDescription }: { image: string, title: string, description: string, classNameTitle?: string, classNameDescription?: string }) {
    return (
        <div className='w-full overflow-hidden rounded-md flex shadow-shadow1 flex-row flex-wrap'>
            <div className='w-full items-start justify-between'>
                <div className='flex items-center relative'>
                    <img src={image} alt="" className='object-cover w-full aspect-video filter brightness-[.88]' />
                </div>
                <div className='relative p-4'>
                    <h2 className={`font-bold text-base text-textcolor1 text-center font-sourceSerif lg:text-[24px] text-[22px] ${classNameTitle}`}>{title}</h2>
                    <p className={`mt-4 font-normal text-textcolor1 text-center !text-sm ${classNameDescription}`}>{description}</p>
                </div>
            </div>
        </div>
    )
}
