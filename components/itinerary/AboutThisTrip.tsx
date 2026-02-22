import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Title2 from '@/components/comen/title/Title2'

export default function AboutThisTrip() {
    return (
        <>
            <div className='mt-12'>
                <div className=" w-full">
                    <div className=" my-container">
                        <div className='flex justify-center md:block'>
                            <Title2 title="About this trip" className="text-[28px]" />
                        </div>
                        <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-12 mt-4">
                            <div className="text-mygreen2 font-bold text-2xl font-sourceSerif text-center md:text-start mb-5">
                                <h3 className='text-mygreen2 text-[24px] md:text-[18px] lg:text-[24px] font-bold '>Sightseeing highlights</h3>
                            </div>
                            <div className=" gap-y-8 md:gap-y-10 flex flex-col">
                                <div className=" flex items-start gap-6">
                                    <FaMapMarkerAlt size={32} className="text-mygreen2" />
                                    <div className='flex items-center'>
                                        <h3 className='sub-title !font-bold !text-sm'>Explore
                                            <span className='text-textcolor2 text-sm ml-1 !description !font-normal'>Colombo, Gangarama Temple and Kandy
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                                <div className=" flex items-start gap-6">
                                    <FaMapMarkerAlt size={32} className="text-mygreen2" />
                                    <div className='flex items-center'>
                                        <h3 className='sub-title !font-bold !text-sm'>Discover
                                            <span className='text-textcolor2 text-sm ml-1 !description !font-normal'>Sigiriya, Wilpattu National Park, Kandy, Nuwara Eliya</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className=" flex items-start gap-6">
                                    <FaMapMarkerAlt size={32} className="text-mygreen2" />
                                    <div className='flex items-center'>
                                        <h3 className='sub-title !font-bold !text-sm'>Visit
                                            <span className='text-textcolor2 text-sm ml-1 !description !font-normal'>Kandy Sacred Tooth Relic Temple and Sigiriya Fortress</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className=" gap-y-8 md:gap-y-10 flex flex-col">
                                <div className=" flex items-start gap-6">
                                    <FaMapMarkerAlt size={32} className="text-mygreen2" />
                                    <div className='flex items-center'>
                                        <h3 className='sub-title !font-bold !text-sm'>View
                                            <span className='text-textcolor2 text-sm ml-1 !description !font-normal'>the Wonders of Polonnaruwa Archaeological Park</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className=" flex items-start gap-6">
                                    <FaMapMarkerAlt size={32} className="text-mygreen2" />
                                    <div className='flex items-center'>
                                        <h3 className='sub-title !font-bold !text-sm'>See
                                            <span className='text-textcolor2 text-sm ml-1 !description !font-normal'>the Raja Maha Vihara Cave Temple</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className=" flex items-start gap-6">
                                    <FaMapMarkerAlt size={32} className="text-mygreen2" />
                                    <div className='flex items-center'>
                                        <h3 className='sub-title !font-bold !text-sm'>Experience
                                            <span className='text-textcolor2 text-sm ml-1 !description !font-normal'>pure Ceylon tea during a tea plantation visit in Nuwara Eliya</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
