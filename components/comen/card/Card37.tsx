import React from 'react'

export default function Card37({ image, title, description, icon, classNameTitle, classNameDescription }: { image: string, title: string, description: string, icon: string, classNameTitle?: string, classNameDescription?: string }) {
  return (
    <div className='w-full shadow-shadow1 overflow-hidden rounded-md'>
      <div className='w-full relative flex items-center justify-center'>
        <img src={image} alt="" className='w-full object-cover md:aspect-[1/1] aspect-[1/1.1] filter brightness-[0.8]' />
        <div className='absolute flex items-center justify-center px-4'>
          <div className='flex flex-col items-center justify-center gap-2 w-full'>
            <div className='w-full flex justify-center items-center'>
              <img src={icon} alt="" className='sm:w-[85px] sm:h-[85px] w-[60px] h-[60px]' />
            </div>
            <h1 className={`text-center mt-2 lg:text-[32px] md:text-[28px] text-[22px]  font-bold font-sourceSerif text-white ${classNameTitle}`}>{title}</h1>
            <p className={`text-center lg:text-lg md:text-base text-sm  font-semibold text-white ${classNameDescription}`}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
