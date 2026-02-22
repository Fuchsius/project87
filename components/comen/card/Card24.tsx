import React from 'react'

export default function Card24({ image, title, description, linkLabel, linkHref, classNameTitle, classNameDescription, classNameLink }: { image: string; title: string; description: string; linkLabel: string; linkHref: string; classNameTitle: string; classNameDescription: string; classNameLink: string }) {
    return (
        <div className='w-full flex gap-5'>
            <div className='w-[120px] flex-shrink-0'>
                <img src={image} alt={title} className='w-full aspect-square rounded-md object-cover' />
            </div>
            <div className='flex-1 h-full'>
                <div className='w-full min-h-[calc(100%-48px)]'>
                    <h1 className={`uppercase !text-white md:text-[20px] text-lg font-bold ${classNameTitle} `}>{title}</h1>
                    <div className='mt-2 bg-[#949494] h-[1px]'></div>
                    <p className={` description-2 !text-white mt-2 ${classNameDescription}`}>{description}</p>
                </div>
                {(linkLabel || linkHref) && (
                    <div className='w-full mt-4'>
                        <a href={linkHref || '#'} className={`underline-1 !decoration-white !decoration-solid hover:!no-underline !text-white !uppercase font-bold text-sm ${classNameLink}`}>{linkLabel || 'Find out more'}</a>
                    </div>
                )}
            </div>
        </div>
    )
}
