import React from 'react'

export default function Card14({ title, description, image, classNameTitle, classNameDescription, classNameImage }: { title: string; description: string; image: string; classNameTitle?: string; classNameDescription?: string; classNameImage?: string }) {
    return (
        <div className='w-full'>
            <div className='w-full flex flex-col md:grid md:grid-cols-2'>
                <div className='w-full lg:pr-24 md:pr-12 pr-0 md:mt-0 mt-8 md:order-none order-2'>
                    <h1 className={`lg:text-[24px] md:text-[20px] text-lg font-semibold text-textcolor1 ${classNameTitle}`}>{title}</h1>
                    <p className={`mt-4 description !text-sm whitespace-pre-line ${classNameDescription}`} dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
                <div className='w-full md:order-none order-1'>
                    <img src={image} alt="" className={`w-full aspect-video object-cover rounded-md ${classNameImage}`} />
                </div>
            </div>
        </div>
    )
}
