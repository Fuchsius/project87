import React from 'react'
import { Button, type ButtonProps } from '@/components/comen/button'

export default function Card38({  title, description, icon, classNameTitle, classNameDescription }: { title: string, description: string, icon: string, classNameTitle?: string, classNameDescription?: string }) {
  return (
    <div className='w-full shadow-shadow1 overflow-hidden rounded-md bg-[#D29829]'>
      <div className='w-full relative flex items-center justify-center'>
        <div className=' flex items-center justify-center px-4 md:aspect-[1/1] aspect-[1/1.1] '>
          <div className='flex flex-col items-center justify-center gap-2 w-full'>
            <div className='w-full flex justify-center items-center'>
               <img src={icon} alt="" className='sm:w-[85px] sm:h-[85px] w-[60px] h-[60px]' />
            </div>
            <h1 className={`text-center mt-2 lg:text-[32px] md:text-[28px] text-[22px]  font-bold font-sourceSerif text-white ${classNameTitle}`}>{title}</h1>
            <p className={`text-center lg:text-lg md:text-base text-sm  font-semibold text-white ${classNameDescription}`}>{description}</p>
            <Button variant="default" size={"lg"} className="font-bold text-myred bg-white hover:shadow-white/50" >
              Animal Welfare Policy
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
