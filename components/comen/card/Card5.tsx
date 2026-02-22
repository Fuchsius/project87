import React from 'react'

export default function Card5({ image, title, description, experience, classNameTitle, classNameDescription }: { image: string, title: string, description: string, experience: string, classNameTitle?: string, classNameDescription?: string }) {
  return (
    <div className='w-full shadow-shadow1 overflow-hidden rounded-md'>
        <div className='w-full relative flex items-center justify-center'>
            <img src={image} alt="" className='w-full object-cover aspect-video filter brightness-[0.8]' />
            <div className='absolute flex items-center justify-center px-4'>
            <h1 className={`text-center mt-2 text-[30px] font-bold font-sourceSerif text-white ${classNameTitle}`}>{title}</h1>
            </div>
        </div>
        <div className='p-4'>
            <p className={`description-2 text-left mt-2 ${classNameDescription}`}>{description}</p>
            <h4 className='text-left mt-2 text-base font-bold text-textcolor1'>Experience on: {" "}{experience}{" >"}</h4>
        </div>
    </div>
  )
}
