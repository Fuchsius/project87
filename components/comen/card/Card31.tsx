import React from 'react'
import Title2 from '../title/Title2'

export default function Card31({ number, title, description, classNameTitle, classNameDescription }: {number:string, title: string, description: string, classNameTitle: string, classNameDescription?: string, }) {
    return (
        <div className='flex overflow-hidden flex-col w-full h-full rounded-md shadow-shadow1'>
            <div className='flex relative flex-col flex-1 p-4 bg-white'>
                <div className='w-full flex justify-center'>
                    <div className='w-20 h-20 flex justify-center items-center bg-myred rounded-full border-[#E6E6E6] border-2'>
                        <h1 className='text-white font-oswald text-[32px] font-medium'>{number}</h1>
                    </div>
                </div>
                <h1 className={`mt-4 font-bold text-center lg:text-[28px] md:text-[24px] text-lg font-sourceSerif text-textcolor1 ${classNameTitle}`}>{title}</h1>
                <p className={`mt-2 description text-center text-textcolor1 font-noraml md:!text-base !text-sm ${classNameDescription} `}>{description}</p>
            </div>
        </div>
    )
}


function test(){
    
}