import React from 'react'
import Title2 from '../title/Title2'
import RenderStar from '@/components/RenderStar'

export default function Hero3({ image, title1, title2, description, rating, imageClassName, title1ClassName, title2ClassName, descriptionClassName }: { image: string, title1: string, title2: string, description: string, rating?: number, imageClassName?: string, title1ClassName?: string, title2ClassName?: string, descriptionClassName?: string }) {
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
                    {title1 && <Title2 title={title1} className={`text-center mb-4 text-white ${title1ClassName}`} />}

                    {title2 && <h1 className={`mb-4 text-center text-white lg:text-5xl md:text-[40px] text-[28px] font-bold font-sourceSerif ${title2ClassName}`}>{title2}</h1>}
                    {/* description */}
                    {description && <p className={`text-center text-white lg:text-[28px] md:text-[24px] text-[18px] font-sourceSerif whitespace-pre-line ${descriptionClassName}`} dangerouslySetInnerHTML={{ __html: description }}></p>}
                    {rating && <div className="flex items-center justify-center my-4">
                        <RenderStar rating={rating} ratingClassName="hidden" />
                    </div>}
                </div>
                {/* map pin */}
                <button className='absolute bottom-4 right-4 flex items-center gap-2 bg-myred py-2 px-8 rounded-md'>
                    <img src="/assets/icons/map-pin-fill.svg" alt="" />
                    <p className='text-white font-bold'>Map</p>
                </button>
            </div>
        </div>
    )
}
