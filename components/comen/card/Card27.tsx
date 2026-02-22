import React from 'react'
import { Button } from '@/components/comen/button'

export default function Card27({ image, title, title2, description, button, classNameTitle, classNameDescription, classNameButton }: { image: string, title: string, title2: string, description: string, button: string, classNameTitle?: string, classNameDescription?: string, classNameButton?: string }) {
    return (
        <div className='w-full h-full shadow-shadow1 overflow-hidden rounded-md flex flex-col'>
            {image &&
                <div className='w-full aspect-[16/9] overflow-hidden'>
                    <img src={image} alt="" className='w-full h-full object-cover' />
                </div>
            }
            <div className='p-4 bg-white relative flex flex-col flex-1'>
                <h1 className={`text-center lg:text-[24px] md:text-lg text-base font-sourceSerif font-bold text-textcolor1 ${classNameTitle}`}>{title}</h1>
                <h3 className={`mt-2 text-center font-semibold font-sourceSerif text-textcolor2 lg:text-lg md:text-[17px] text-base`}>{title2}</h3>
                <p className={`mt-2 description text-center text-textcolor1 font-noraml !text-sm ${classNameDescription} `}>{description}</p>

                <div className='mt-auto pt-4 flex justify-center'>
                    <Button variant="outline" size={"lg"} className={` !font-bold ${classNameButton} `}>
                        {button}
                    </Button>
                </div>
            </div>
        </div>
    )
}
