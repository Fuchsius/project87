import React from 'react'
import Title2 from '@/components/comen/title/Title2'
import { Button } from '@/components/comen/button'
import Link from 'next/link'

export default function Section3({ title, description1, description2, button, buttonLink, titleClassName, description1ClassName, description2ClassName, buttonClassName, sizeClassName }: { title: string, description1: string, description2: string, button?: string, buttonLink?: string, titleClassName?: string, description1ClassName?: string, description2ClassName?: string, buttonClassName?: string, sizeClassName?: string }) {
    return (
        <div className='px-4 w-full md:grid md:grid-cols-12'>
            <div className={`col-span-10 col-start-2 ${sizeClassName}`}>
                {/* title */}
                <Title2 title={title} className={`italic text-center ${titleClassName}`} />
                {/* description 1 */}
                <p className={`mt-2 description lg:!text-[18px] md:!text-[16px] !text-[14px] text-center font-bold whitespace-pre-line ${description1ClassName}`} dangerouslySetInnerHTML={{ __html: description1 }}></p>
                {/* description 2 */}
                <p className={`mt-4 description !text-[14px] text-center whitespace-pre-line ${description2ClassName}`} dangerouslySetInnerHTML={{ __html: description2 }}></p>
                {/* button */}
                {button && (
                    <div className='flex justify-center mt-8 w-full'>
                        <Link href={buttonLink || '#'} className='no-underline'>
                            <Button variant="default" size={"lg"} className={`${buttonClassName}`} >
                                {button}
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
