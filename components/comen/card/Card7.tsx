import React from 'react'

export default function Card7({ image, title, title2,  description, facilities, classNameTitle, classNameTitle2, classNameDescription, hoverColor }: { image: string, title: string, title2: string, description: string, facilities: string[], classNameTitle?: string, classNameTitle2?: string, classNameDescription?: string, hoverColor?: string }) {
    return (
        <div className='w-full h-full shadow-shadow1 overflow-hidden rounded-md cursor-pointer group'>
            <div className=' aspect-ratio-16/9 relative'>
                <img src={image} alt="" className="w-full h-full object-cover absolute top-0 left-0" />
                <div className={`w-full h-full ${hoverColor} transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] opacity-0 group-hover:opacity-100 p-4 relative z-10`}>
                    <h2 className={`font-sourceSerif font-semibold italic text-white md:text-[20px] text-lg ${classNameTitle2}`}>{title2}</h2>
                    <p className='description !text-white !font-semibold mt-4'>Hotel Amenities</p>
                    <div className='mt-4 space-x-3'>
                        {facilities.map((facility, index) => (
                            <span key={index} className='text-white font-bold text-sm rounded-full '>{facility}</span>
                        ))}
                    </div>
                    {/* <p className='font-bold text-white text-sm mt-4'>24-hour Front Desk</p> */}
                    {/* about the hotel */}
                    <h4 className='font-semibold text-white md:text-base text-sm mt-8'>About the hotel</h4>
                    <div className='mt-4 h-[200px]'>
                        <p className={`description !text-white font-normal ${classNameDescription}`}>{description}</p>
                    </div>
                    {/* see more */}
                    <a href="#" className='underline-1 !decoration-solid !decoration-white mt-4 !text-white opacity-70'>See More</a>
                </div>
            </div>
            <div className='w-full flex justify-between items-center p-4 gap-1'>
                <div className='w-[60%]'>
                    <h3 className={`sub-title !font-bold text-textcolor1 ${classNameTitle}`}>{title}</h3>
                </div>
                <div className='flex items-center gap-1'>
                    <img src="/assets/icons/disk-1.svg" alt="" className="w-4 h-4" />
                    <img src="/assets/icons/disk-1.svg" alt="" className="w-4 h-4" />
                    <img src="/assets/icons/disk-1.svg" alt="" className="w-4 h-4" />
                    <img src="/assets/icons/disk-1.svg" alt="" className="w-4 h-4" />
                    <img src="/assets/icons/circle.svg" alt="" className="w-4 h-4" />
                </div>
            </div>
        </div>
    )
}
