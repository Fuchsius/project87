import React from 'react'

export default function Card22({ image, title, feedback, feedbackAuthor, city, classNameTitle, classNameFeedback }: { image: string; title: string; feedback: string; feedbackAuthor: string; city: string; classNameTitle?: string; classNameFeedback?: string }) {
    return (
        <div className='w-full'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2'>
                {/* Text content - appears second on mobile, first on desktop */}
                <div className='order-2 md:order-1 flex flex-col md:py-8 py-[20px]'>
                    <h1 className={`lg:text-[28px] md:text-[24px] text-[20px] font-bold text-textcolor1 font-sourceSerif ${classNameTitle}`}>{title}</h1>
                    <p className={`mt-2 description !text-sm whitespace-pre-line ${classNameFeedback}`} dangerouslySetInnerHTML={{ __html: feedback }}></p>
                    <p className='mt-2 text-sm font-bold !text-textcolor1'>- {feedbackAuthor}., <span className='underline-1'>Best of {city}</span></p>
                </div>
                
                {/* Image - appears first on mobile, second on desktop */}
                <div className='order-1 md:order-2 lg:pl-28 md:pl-12 pl-0'>
                    <img src={image} alt="" className='w-full aspect-video object-cover rounded-md' />
                </div>
            </div>
        </div>
    )
}
