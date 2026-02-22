import React from 'react'
import { Button } from '@/components/comen/button'

export default function Card1({ image, title, description, button, classNameTitle, classNameDescription, classNameButton }: { image: string, title: string, description: string, button: string, classNameTitle?: string, classNameDescription?: string, classNameButton?: string }) {
    return (
        <div className='w-full h-full shadow-shadow1 overflow-hidden rounded-md flex flex-col'>
            <div className='w-full aspect-[16/9] overflow-hidden'>
                <img src={image} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='p-4 bg-white relative flex flex-col flex-1'>
                <p className={`description text-center text-textcolor1 font-semibold line-clamp-4 ${classNameDescription} `}>{description}</p>
                <h1 className={`text-center md:text-[24px] text-[20px] font-sourceSerif font-bold mt-2 text-textcolor1 ${classNameTitle}`}>{title}</h1>

                <div className='mt-auto pt-6'>
                    <Button variant="outline" size={"lg"} className={`w-full !font-bold ${classNameButton} `}>
                        {button}
                    </Button>
                </div>
            </div>
        </div>
    )
}
