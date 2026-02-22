import React from 'react'
import Title2 from '@/components/comen/title/Title2'

export default function Section4({ title, data, colsLg, colsMd, colsSm, titleClassName }: { title: string, data: string[], colsLg?: string, colsMd?: string, colsSm?: string, titleClassName?: string }) {
    return (
        <div className='w-full mt-12'>
            <div className=" py-9 bg-myred2">
                <div className=" my-container text-white">
                    {/* title */}
                    <Title2 title={title} className={`text-center !text-white ${titleClassName}`} />
                    {/* data */}
                    <div className={`grid grid-cols-1 gap-y-10 gap-x-2 mt-8  
                        ${colsLg ? 'lg:grid-cols-' + colsLg : 'lg:grid-cols-4'} ${colsMd ? 'md:grid-cols-' + colsMd : 'md:grid-cols-3'} ${colsSm ? 'sm:grid-cols-' + colsSm : 'sm:grid-cols-2'}`}>
                        {data.map((item, index) => (
                            <div key={index} className=" flex gap-6 items-start">
                                <div className=" flex items-center justify-center min-w-10 min-h-10">
                                    <img src="/assets/icons/checkmark-white.svg" alt="" />
                                </div>
                                <p className=" text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
