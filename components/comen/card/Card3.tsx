
import React from 'react'

export default function Card3({ image, title, title2, type, description, link, linkText, classNameTitle, classNameDescription, linkClassName }: { image: string, title: string, title2: string, type: string, description: string, link: string, linkText: string, classNameTitle?: string, classNameDescription?: string, linkClassName?: string }) {
  return (
    <div className='card-3 w-full shadow-shadow1 overflow-hidden rounded-md bg-white'>
      <img src={image} alt="" className='w-full object-cover aspect-video' />
      <div className='p-4'>

        {type == "1" && (
          <div className='w-full'>
            <h1 className={`text-center md:text-[24px] text-lg font-sourceSerif font-bold  text-textcolor1 ${classNameTitle}`}>{title}</h1>
          </div>
        )}

        {type == "2" && (
          <div className='w-full'>
            <h3 className='text-center text-sm font-figtree font-semibold text-textcolor1'>{title2}</h3>
            <h1 className={`mt-2 text-center md:text-[24px] text-lg font-sourceSerif font-bold  text-textcolor1 ${classNameTitle}`}>{title}</h1>
          </div>
        )}

        {type == "3" && (
          <div className='w-full'>
            <h1 className={`text-center md:text-[24px] text-lg font-sourceSerif font-bold text-textcolor1 ${classNameTitle}`}>{title}</h1>
            <h3 className='mt-2 text-center text-sm font-figtree font-semibold text-textcolor1'>{title2}</h3>
          </div>
        )}

        <p className={`description-2 text-center mt-2 ${classNameDescription}`}>{description}{" "}<a href={link} className={`underline-1 font-bold text-textcolor1 ${linkClassName}`}>{linkText}</a></p>
      </div>
    </div>
  )
}
