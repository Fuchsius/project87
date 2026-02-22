import React from 'react'
import { Button, type ButtonProps } from '@/components/comen/button'

export default function Card16({ image, title, locations, description, button, buttonVariant = "outline", classNameTitle, classNameDescription }: { image: string; title: string; locations: string; description: string; button: string; buttonVariant?: ButtonProps['variant']; classNameTitle?: string; classNameDescription?: string }) {
    return (
        <div className='w-full'>
            <div className='w-full flex flex-col md:grid md:grid-cols-2'>
                <div className='w-full lg:pr-24 md:pr-12 pr-0 md:mt-0 mt-8 md:order-none order-2 flex flex-col justify-evenly gap-4'>
                     <div>
                        <h1 className={`lg:text-[24px] md:text-[20px] text-lg font-bold text-textcolor1 uppercase ${classNameTitle}`}>{title}</h1>
                        <h2 className='mt-2 lg:text-[20px] md:text-lg text-base font-semibold text-textcolor1 italic font-sourceSerif'>{locations}</h2>
                        <p className={`mt-2 description-2 !font-normal whitespace-pre-line ${classNameDescription}`} dangerouslySetInnerHTML={{ __html: description }}></p>
                    </div>
                    <div>
                        <Button variant={buttonVariant} size={"lg"} className="font-bold" >
                            {button}
                        </Button>
                    </div>
                </div>
                <div className='w-full md:order-none order-1'>
                    <img src={image} alt="" className='w-full aspect-video object-cover rounded-md' />
                </div>
            </div>
        </div>
    )
}
