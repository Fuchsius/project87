import React from 'react'
import Link from 'next/link'

export default function Card10({ image, title, description, link, classNameTitle, classNameDescription }: { image: string, title: string, description: string, link: string, classNameTitle?: string, classNameDescription?: string }) {
    return (
        <Link href={link} className='w-full overflow-hidden rounded-md flex '>
            <div className='w-full items-start justify-between'>
                <div className='flex items-center relative'>
                    <img src={image} alt="" className='object-cover w-full aspect-video rounded-md filter brightness-[.88]' />
                    <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
                        <h1 className={`lg:text-[40px] md:text-[30px] text-[24px] text-center font-bold font-sourceSerif text-white ${classNameTitle}`}>{title}</h1>
                    </div>
                </div>
                <div className='relative h-full mt-4'>
                    <p className={`font-normal text-base text-textcolor1 ${classNameDescription}`}>{description} {">"}</p>
                </div>
            </div>
        </Link>
    )
}
