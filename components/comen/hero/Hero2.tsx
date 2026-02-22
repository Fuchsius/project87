import React from 'react'
import { Button } from '@/components/comen/button'
import RenderStar from '@/components/RenderStar'
import Image from 'next/image'

export default function Hero2({ image, title, description, rating, button, buttonLink, type, imageClassName, titleClassName, descriptionClassName }: { image: string, title: string, description: string, rating?: number, button?: string, buttonLink?: string, type?: number, imageClassName?: string, titleClassName?: string, descriptionClassName?: string }) {
    return (
        <div className='w-full'>
            <div className='w-full relative'>
                {/* image */}
                <div className='w-full'>
                    <img src={image} alt="" className={`w-full md:h-[450px] h-[330px] object-cover object-position-top object-center brightness-[.8] ${imageClassName}`} />
                </div>
                {/* title and description */}
                <div className='absolute w-full h-full flex items-center justify-center top-0 left-0 md:px-[6.5rem] py-4 px-4 '>
                    {type == 1 ? (
                        <div className='w-full'>
                            {/* title */}
                            {title && (
                                <h1 className={`text-center text-white lg:text-5xl md:text-[40px] text-[28px] font-bold font-sourceSerif max-w-[800px] mx-auto ${titleClassName}`}>{title}</h1>
                            )}
                            {/* description */}
                            {description && (
                                <p className={`mt-2 text-center text-white lg:text-[28px] md:text-[27px] text-[26px] font-sourceSerif whitespace-pre-line ${descriptionClassName}`} dangerouslySetInnerHTML={{ __html: description }}></p>
                            )}
                            {/* button */}
                            {button && (
                                <div className='w-full flex items-center justify-center mt-4'>
                                    <Button variant="default" size={"lg"} className="font-bold" >{button}</Button>
                                </div>
                            )}
                        </div>
                    ) : type == 2 ? (
                        <div className='w-full'>
                            {/* description */}
                            {description && (
                                <p className={`text-center text-white lg:text-[24px] md:text-[20px] text-[16px] font-sourceSerif whitespace-pre-line ${descriptionClassName}`} dangerouslySetInnerHTML={{ __html: description }}></p>
                            )}
                            {/* title */}
                            {title && (
                                <h1 className={`mt-2 text-center text-white lg:text-5xl md:text-[40px] text-[28px] font-bold font-sourceSerif max-w-[800px] mx-auto ${titleClassName}`}>{title}</h1>
                            )}
                            {/* button */}
                            {button && (
                                <div className='w-full flex items-center justify-center mt-4'>
                                    <Button variant="default" size={"lg"} className="font-bold" >{button}</Button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='w-full'>
                            {/* title */}
                            {title && (
                                <h1 className={`text-center text-white lg:text-5xl md:text-[40px] text-[28px] font-bold font-sourceSerif max-w-[800px] mx-auto ${titleClassName}`}>{title}</h1>
                            )}
                            {/* description */}
                            {description && (
                                <p className={`mt-2 text-center text-white lg:text-[28px] md:text-[27px] text-[26px] !font-sourceSerif whitespace-pre-line ${descriptionClassName}`} dangerouslySetInnerHTML={{ __html: description }}></p>
                            )}
                            {/* button */}
                            {button && (
                                <div className='w-full flex items-center justify-center mt-4'>
                                    <Button variant="default" size={"lg"} className="font-bold" >{button}</Button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {rating && (
                <div className='w-full py-4 bg-[#F1F1F1]'>
                    <div className='my-container'>
                        <div className='w-full flex flex-wrap items-center justify-center gap-x-4 text-sm text-textcolor1 uppercase'>
                            <span className='tracking-[1px] whitespace-nowrap'>TRAVELGATE IS RATED <span className='font-bold'>{rating || 0} / 5</span></span>
                            <RenderStar rating={rating || 0} ratingClassName="hidden" />
                            <span className='tracking-[1px] whitespace-nowrap'>BASED ON 1000+ VERIFIED REVIEWS</span>
                            <span className='hidden md:inline-block'>|</span>
                            <img src="/assets/icons/tripadvisor.svg" alt="" className='h-[20px]' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
