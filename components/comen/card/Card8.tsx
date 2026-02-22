import React from 'react'
import Title4 from '@/components/comen/title/Title4';

export default function Card8({ image, title, description, classNameTitle, classNameDescription }: { image: string; title: string; description: string, classNameTitle?: string, classNameDescription?: string }) {
    return (
        <div className="w-full shadow-shadow1 overflow-hidden rounded-md">
            <div className="w-full h-48 relative">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                />
                {true ? (
                    <div className="absolute top-2 left-2 bg-myred py-1 px-2 rounded-sm sub-title-small !text-white">
                        Top Rated Highlights
                    </div>
                ) : false ? (
                    <div className="absolute top-2 left-2 bg-mygreen py-1 px-2 rounded-sm sub-title-small !text-white">
                        Top Rated Highlights
                    </div>
                ) : (
                    <div className="absolute top-2 left-2 bg-white py-1 px-2 rounded-sm sub-title-small !text-white">
                        Optional Experience
                    </div>
                )}
            </div>
            <div className="p-4">
                <Title4 title={title} className={` mb-2 ${classNameTitle}`} />
                <p className={`description-2 mb-4 line-clamp-3 ${classNameDescription}`}>
                    {description}
                </p>
                <div className="mt-4 w-full">
                    <a href="" className="underline-1 font-bold text-sm text-textcolor1">See more</a>
                </div>
                <div className="flex justify-between items-center mt-4">
                    {true ? (
                        <div className="flex items-center gap-2 text-myred">
                            <img src="/assets/icons/checkmark.svg" alt="" className="w-5 h-5" />
                            <span className="text-sm font-bold">Included with trip</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-textcolor1">
                            <span className="text-sm font-bold ">Additional Cost Applies</span>
                        </div>
                    )}
                    <div>
                        <img src="/assets/icons/question-mark.svg" alt="" className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}
