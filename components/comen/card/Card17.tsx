import React from 'react'
import { Button } from '@/components/comen/button'

export default function Card17({ title, title2, description, experience, buttonText, darkLight, classNameTitle, classNameTitle2, classNameDescription, backgroundColor, classNameExperience, classNameButton, image }: { title: string, title2: string, description: string, experience: string, buttonText: string, darkLight?: string, classNameTitle?: string, classNameTitle2?: string, classNameDescription?: string, backgroundColor?: string, classNameExperience?: string, classNameButton?: string, image?: string }) {
    return (
        <div className={`w-full h-full flex flex-col shadow-shadow1 rounded-md ${backgroundColor}`}>
            <div className='flex-1 flex flex-col p-6'>
                <div className='flex justify-center'>
                    {/* image */}
                    <img src={image} alt="" className='w-[70px] h-[70px] rounded-full object-cover' />
                </div>
                <div className='mt-4 flex-1 flex flex-col'>
                    {/* title */}
                    <h3 className={`sub-title !font-bold text-center !text-lg italic !font-sourceSerif ${darkLight == "dark" ? "!text-white" : "!text-textcolor1"} ${classNameTitle}`}>
                        {title}
                    </h3>

                    {/* title2 */}
                    <h1 className={`!font-bold md:text-[22px] text-[20px] text-center mt-2 ${darkLight == "dark" ? "!text-white" : "!text-textcolor1"} ${classNameTitle2}`}>
                        {title2}
                    </h1>

                    {/* description */}
                    <p className={`description-2 mt-2 text-center text-sm ${darkLight == "dark" ? "!text-white" : "!text-textcolor1"} ${classNameDescription}`}>
                        {description}
                    </p>

                    {/* experience */}
                    <p className={`text-center mt-2 text-sm ${darkLight == "dark" ? "!text-white" : "!text-textcolor1"} mt-auto`}>
                        Experience on:
                        <span className={`text-sm font-bold underline decoration-1 underline-offset-2 ml-1 hover:no-underline cursor-pointer ${darkLight == "dark" ? "!text-white !decoration-white" : "!text-textcolor1 !decoration-textcolor1"} ${classNameExperience}`}>
                            {experience}
                        </span>
                    </p>
                </div>

                {/* button */}
                <div className='mt-6 w-full flex justify-center'>
                    <Button
                        variant="outline"
                        size={"lg"}
                        className={`w-auto !font-bold ${darkLight == "dark" ? "text-mygreen3 !border-none" : "bg-transparent !text-textcolor1 !border-2 border-textcolor1"} ${classNameButton}`}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>

        </div>
    )
}
