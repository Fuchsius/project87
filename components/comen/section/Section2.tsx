import React from 'react'
import Title2 from '@/components/comen/title/Title2'
import { Button } from '@/components/comen/button'
import Link from 'next/link'

export default function Section2({ title, description, button, buttonLink1, buttonLink2, button1Icon, bgColor = "bg-myred", titleClassName, descriptionClassName, sizeClassName, classNameButton1, classNameButton2 }: { title: string, description: string, button?: string, buttonLink1?: string, buttonLink2?: string, button1Icon?: string, bgColor?: string, titleClassName?: string, descriptionClassName?: string, sizeClassName?: string, classNameButton1: string, classNameButton2: string }) {
    return (
        <div className={`w-full md:grid md:grid-cols-12 ${bgColor} py-12 px-4`}>
            <div className={`col-span-8 col-start-3 ${sizeClassName}`}>
                {/* title */}
                <Title2 title={title} className={`text-center !text-white ${titleClassName}`} />
                {/* description */}
                <p className={`mt-2 description text-center font-sourceSerif whitespace-pre-line !text-white ${descriptionClassName}`} dangerouslySetInnerHTML={{ __html: description }}></p>
                {/* button */}
                <div className='w-full flex justify-center mt-4'>
                    <div className='flex gap-2 flex-col sm:flex-row justify-center'>
                        <div className='w-full sm:w-auto flex justify-center sm:block'>
                            <Link href={buttonLink1 || '#'} className='no-underline'>
                                <Button variant="default" size={"lg"} className={`bg-white text-myred sm:w-auto ${classNameButton1}`}>
                                    <img src={button1Icon || "/assets/icons/search-red.svg"} alt="" />
                                    {button || 'Search Tours'}
                                </Button>
                            </Link>
                        </div>
                        <div className='w-full sm:w-auto sm:mt-0 flex justify-center sm:block'>
                            <Link href={buttonLink2 || '#'} className='no-underline'>
                                <Button variant="outline" size={"lg"} className={`border-2 border-white bg-transparent text-white box-border py-[10px] sm:w-auto ${classNameButton2}`}>
                                    {button || 'Get a Quote'}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
