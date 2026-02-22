import React from 'react'
import Title2 from '../title/Title2'

export default function Section6({ data, title, titleClassName }: { data: any; title: string; titleClassName?: string }) {
    return (
        < div className="w-full" >
            <div className="text-center">
                <Title2 title={title} className={titleClassName} />
            </div>
            <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-16 gap-y-8">
                    {data.map((advantage: any, index: any) => (
                        <div key={index} className="flex gap-2 items-center">
                            <img
                                src={advantage.image}
                                alt={advantage.title}
                                className="w-[50px] h-[50px]"
                            />
                            <div className="flex flex-col">
                                <h2 className="sub-title">
                                    {advantage.title}
                                </h2>
                                <p className="!text-textcolor3 description">- {advantage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
