import React from 'react'
import Title2 from '../title/Title2'

export default function Section13({ data, title, description, classNameTitle, classNameDescription }: { data: any, title: string, description: string, classNameTitle?: string, classNameDescription?: string }) {
    return (
        <div className='w-full'>
            <Title2 title={title} className={`text-center ${classNameTitle}`} />
            <p className={`description-2 text-center !font-normal ${classNameDescription}`}>{description}</p>
            <div className='mt-8 w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                {data.map((item: any, index: number) => (
                    <div className='col-span-1' key={index}>
                        <div className='w-full flex items-center justify-center'>
                            <img src={item.image} alt="" className='w-12 h-12' />
                        </div>
                        <h2 className='mt-4 text-center font-sourceSerif lg:text-lg md:text-base text-sm text-textcolor1 font-bold'>{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
