import React from 'react'
import { Button } from '@/components/comen/button'

export default function Card30({ image, title, title2, description, button, classNameTitle, classNameTitle2, classNameDescription, classNameButton }: { image: string, title: string, title2: string, description: string, button: string, classNameTitle?: string, classNameTitle2?: string, classNameDescription?: string, classNameButton?: string }) {
    return (
        <div className='flex overflow-hidden flex-col w-full h-full rounded-md shadow-shadow1'>
            {image &&
                <div className='w-full aspect-[16/9] overflow-hidden'>
                    <img src={image} alt="" className='object-cover w-full h-full' />
                </div>
            }
            <div className='flex relative flex-col flex-1 p-4 bg-white'>
                {title &&
                    <h1 className={`text-base font-bold text-center lg:text-[24px] md:text-lg font-sourceSerif text-textcolor1 ${classNameTitle}`}>{title}</h1>
                }
                {title2 &&
                    <h3 className={`mt-2 text-sm italic font-semibold text-center font-sourceSerif text-textcolor2 md:text-base ${classNameTitle2}`}>{title2}</h3>
                }
                {description &&
                    <p className={`mt-2 description text-center text-textcolor1 font-noraml !text-sm ${classNameDescription} `}>{description}</p>
                }

                {button &&
                    <div className='flex justify-center pt-4 mt-auto'>
                        <Button variant="default" size={"lg"} className={` !font-bold ${classNameButton} `}>
                            {button}
                        </Button>
                    </div>
                }
            </div>
        </div>
    )
}
