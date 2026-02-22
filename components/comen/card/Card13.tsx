import React from 'react'

export default function Card13({ image, title, description, classNameTitle, classNameDescription, classNameImage }: { image: string; title: string; description: string; classNameTitle?: string; classNameDescription?: string; classNameImage?: string }) {
    return (
        <div className='w-full'>
            <div className='w-full md:grid md:grid-cols-2 block'>
                <div className='w-full'>
                    <img src={image} alt="" className={`w-full aspect-video object-cover rounded-md ${classNameImage}`} />
                </div>
                <div className='w-full lg:pl-24 md:pl-12 pl-0 md:mt-0 mt-8'>
                    <h1 className={`lg:text-[24px] md:text-[20px] text-lg font-semibold text-textcolor1 ${classNameTitle}`}>{title}</h1>
                    <p className={`mt-4 description !text-sm whitespace-pre-line ${classNameDescription}`} dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
            </div>
        </div>
    )
}
