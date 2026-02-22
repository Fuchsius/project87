'use client'

import React from 'react'
import Title2 from '../title/Title2'

export default function Section11({ data, title, classNameTitle }: { data: any, title: string, classNameTitle: string }) {
    return (
        <div className="w-full">
            <div className="my-container text-center">
                <Title2 title={title} className={`text-textcolor1 ${classNameTitle}`} />
                <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-textcolor1 md:text-base text-sm font-semibold">

                    {data.map((item: any, index: number) => (
                        <div className='bg-[#E5E5E5] py-1 px-4 rounded-md cursor-pointer' key={index}>
                            <h4 className='text-textcolor1 text-sm font-bold'>{item.destinations}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}