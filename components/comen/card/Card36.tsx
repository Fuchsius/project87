import React from 'react'

export default function Card36({ image, title, description, classNameTitle, classNameDescription }: { image: string, title: string, description: string[],  classNameTitle?: string, classNameDescription?: string }) {
  return (
    <div className='w-full shadow-shadow1 overflow-hidden rounded-md'>
      <div className='w-full relative flex items-center justify-center'>
        <img src={image} alt="" className='w-full object-cover aspect-video filter brightness-[0.8]' />
        <div className='absolute flex items-center justify-center px-4'>
          <h1 className={`text-center mt-2 lg:text-[30px] md:text-[26px] text-[20px]  font-bold font-sourceSerif text-white ${classNameTitle}`}>{title}</h1>
        </div>
      </div>
      <div className='p-4'>
        <ul>
          {description?.map((item, index) => (
            <li key={index} className={`ml-4 list-disc list-outside text-left mt-2 text-textcolor1 !text-sm ${classNameDescription || ''}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
