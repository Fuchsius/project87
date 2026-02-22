import React from 'react'

export default function Card19({ image, title, subTitle, description, classNameTitle, classNameSubTitle, classNameDescription }: { image: string, title: string, subTitle: string, description: string, classNameTitle?: string, classNameSubTitle?: string, classNameDescription?: string }) {
  return (

    <div className='w-full flex flex-row rounded-md overflow-hidden shadow-shadow1 '>
      <div className='w-full '>
        <img src={image} alt="" className='w-full object-cover aspect-video' />
        <div className='p-4'>
          <div className='w-full'>
            <h3 className={`text-center text-[20px] font-figtree font-bold text-myred ${classNameTitle}`}>{title}</h3>
            <h1 className={`text-center text-[30px] font-sourceSerif font-bold  text-textcolor1 ${classNameSubTitle}`}>{subTitle}</h1>
            <p className={`mt-2 text-center text-sm font-normal text-textcolor1 ${classNameDescription}`}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
