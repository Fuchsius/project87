import React from 'react'
import { INCLUDED_IN_YOUR_TOUR } from '@/data/tours.data'
import { FaCheck } from 'react-icons/fa'
import Title2 from '../comen/title/Title2'

export default function IncludedInYourTour() {
    return (
        <>
            <div className='w-full mt-12'>
                <div className=" py-9 bg-myred2">
                    <div className=" my-container text-white">
                        <Title2 title="Included In Your Tour" className="text-center !text-white" />
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-2 mt-8">
                            {INCLUDED_IN_YOUR_TOUR.map((item, index) => (
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
        </>
    )
}
