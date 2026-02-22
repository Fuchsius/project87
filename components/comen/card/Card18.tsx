import React from 'react'
import { Button } from '@/components/comen/button'

export default function Card18({ image, title, description, buttonText, classNameTitle, classNameDescription, classNameButton, bgColor }: { image: string, title: string, description: string, buttonText: string, classNameTitle?: string, classNameDescription?: string, classNameButton?: string, bgColor?: string }) {
    return (
        <div className={`w-full shadow-shadow1 overflow-hidden rounded-md ${bgColor ? 'bg-[#315A7A]' : 'bg-mygreen3'}`}>
            <div className='w-full p-4 lg:grid lg:grid-cols-2 gap-4 flex flex-col '>
                <div className='w-full lg:min-h-[220px] lg:order-none order-2'>
                    <div className='h-[calc(100%-65px)]'>
                        <h1 className={`text-left lg:text-[32px] md:text-[28px] text-[22px] font-sourceSerif font-bold text-white leading-[1] ${classNameTitle}`}>
                            {title}
                        </h1>
                        <p className={`!text-left mt-4 !text-white text-sm ${classNameDescription}`}>
                            {description}
                        </p>
                    </div>
                    <Button variant="outline" size={"lg"} className={`mt-4 w-auto !font-bold border-none ${bgColor ? '!text-[#315A7A]' : '!text-mygreen3'} opacity-80 hover:opacity-100 !shadow-none ${classNameButton}`}>
                        {buttonText}
                    </Button>
                </div>
                <div className='w-full lg:order-none order-1'>
                    <img src={image} alt="" className='rounded-md overflow-hidden w-full aspect-video object-cover ' />
                </div>
            </div>
        </div>
    )
}
