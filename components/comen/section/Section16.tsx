import React from 'react'
import Title3 from '../title/Title3'
import Title4 from '../title/Title4'
import Title2 from '../title/Title2'

export default function Section16({data, title}: {data: any, title: string}) {
    return (
        <div className='w-full bg-myred py-12'>
            <div className='w-full px-4'>
                <Title2 title={title} className='text-center text-white'/>
            </div>
            <div className='my-container grid lg:grid-cols-4 grid-cols-1 gap-8 mt-4'>
                {data.map((item: any, index: number) => (
                    <div key={index} className='w-full'>
                        <h3 className='text-white font-sourceSerif font-bold lg:text-[24px] md:text-lg text-base'>{item.title}</h3>
                        <p className='mt-2 description-2 !font-normal !text-white'>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
