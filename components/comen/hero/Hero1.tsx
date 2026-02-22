import React from 'react'

export default function Hero1({ image, title, description, imageClassName, titleClassName, descriptionClassName }: { image: string, title: string, description: string, imageClassName?: string, titleClassName?: string, descriptionClassName?: string }) {
  return (
    <div className='w-full relative'>
      {/* image */}
      <div className='w-full'>
        <img src={image} alt="" className={`w-full md:h-[450px] h-[330px] object-cover filter brightness-[.8] ${imageClassName}`} />
      </div>
      {/* title and description */}
      <div className='absolute w-full h-full flex items-center justify-center top-0 left-0 md:px-[6.5rem] py-4 px-4'>
        <div className='w-full'>
          {/* title */}
          {title && (
            <h1 className={`text-center text-white lg:text-5xl md:text-[40px] text-[28px] font-bold font-sourceSerif ${titleClassName}`}>{title}</h1>
          )}
          {/* description */}
          {description && (
            <p className={`mt-2 text-center text-white lg:text-[28px] md:text-[24px] text-[20px] font-sourceSerif whitespace-pre-line ${descriptionClassName}`} dangerouslySetInnerHTML={{ __html: description }}></p>
          )}
        </div>
      </div>
    </div>
  )
}
