import React from 'react'
import { Button, type ButtonProps } from '@/components/comen/button'
import Title2 from '../title/Title2';

export default function Card32({ image, title, description, button, buttonVariant = "default", classNameTitle, classNameDescription }: { image: string; title: string; description: string; button: string; buttonVariant?: ButtonProps['variant']; classNameTitle?: string; classNameDescription?: string }) {
    return (
        <div className='w-full'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='order-2 md:order-1 w-full lg:pr-24 md:pr-12 pr-0 md:mt-0 mt-8'>
                    <div className='w-full'>
                        {/* <h1 className={`lg:text-[24px] md:text-[20px] text-lg font-bold text-textcolor1 uppercase ${classNameTitle}`}>{title}</h1> */}
                        <Title2 title={title} className=''></Title2>

                        <p className={`mt-2 description-2 !font-normal whitespace-pre-line ${classNameDescription}`} dangerouslySetInnerHTML={{ __html: description }}></p>
                    </div>
                    {button &&
                        <div className='w-full mt-4'>
                            <Button variant={buttonVariant} size={"lg"} className="font-bold" >
                                {button}
                            </Button>
                        </div>
                    }
                </div>
                <div className='w-full order-1 md:order-2'>
                    <img src={image} alt="" className='w-full aspect-video object-cover rounded-md' />
                </div>
            </div>
        </div>
    )
}
