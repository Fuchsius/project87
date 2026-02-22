import React from 'react'
import Title2 from '@/components/comen/title/Title2'
import { Button } from '@/components/comen/button'
import Link from 'next/link'

export default function Section1({ title, description, button, buttonLink, titleClassName, descriptionClassName, buttonClassName, sizeClassName }: { title?: string, description?: string, button?: string, buttonLink?: string, titleClassName?: string, descriptionClassName?: string, buttonClassName?: string, sizeClassName?: string }) {
    return (
        <div className='w-full md:grid md:grid-cols-12 px-4'>
            <div className={`col-span-8 col-start-3 ${sizeClassName}`}>
                {/* title */}
                {title && (
                    <Title2 title={title} className={`text-center mb-4 ${titleClassName}`} />
                )}
                {/* description */}
                {description && (
                    <p className={`description text-center font-sourceSerif whitespace-pre-line ${descriptionClassName}`} dangerouslySetInnerHTML={{ __html: description }}></p>
                )}
                {/* button */}
                <div className='w-full flex justify-center mt-4'>
                    {button && (
                        <Link href={buttonLink || '#'} className='no-underline'>
                            <Button variant="default" size={"lg"} className={` ${buttonClassName}`} >
                                {button}
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
