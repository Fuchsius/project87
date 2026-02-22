import React from 'react'
import { Button } from '@/components/comen/button'

export default function Card2({ image, title, description, button, classNameTitle, classNameDescription, classNameButton }: { image: string, title: string, description: string, button: string, classNameTitle?: string, classNameDescription?: string, classNameButton?: string }) {
  return (
    <div className='w-full shadow-shadow1 overflow-hidden rounded-md'>
        <img src={image} alt="" className='w-full h-full object-cover aspect-video' />
        <div className='p-4'>
            <h1 className={`text-center lg:text-[20px] md:text-lg text-base font-sourceSerif font-bold mt-2 text-textcolor1 ${classNameTitle}`}>{title}</h1>
            <p className={`description text-center md:text-base text-sm mt-2 ${classNameDescription}`}>{description}</p>

            <div className='w-full flex items-center justify-center mt-4'>
                <Button variant="default" size={"lg"} className={`font-bold ${classNameButton}`} >
                    {button}
                </Button>
            </div>
        </div>
    </div>
  )
}
