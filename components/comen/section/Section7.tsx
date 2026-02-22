import React from 'react'
import Title2 from '../title/Title2'
import Card24 from '../card/Card24';


export default function Section7({ data, title, description, bgColor, classNameTitle, classNameDescription }: { data: any[]; title: string; description: string; bgColor: string; classNameTitle: string; classNameDescription: string }) {
    return (
        <div className={`py-12 px-6 ${bgColor ? bgColor : 'bg-[#513755]'}`}>
            <div className='text-center space-y-4'>
                <Title2 title={title} className={`text-white text-center ${classNameTitle}`} />
                {description && (
                    <p className={`description-2 !text-white ${classNameDescription}`}>{description}</p>
                )}
            </div>

            <div className='w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {data.map((item, index) => (
                    <Card24
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        linkLabel={item.linkLabel}
                        linkHref={item.linkHref}
                        classNameTitle={item.classNameTitle}
                        classNameDescription={item.classNameDescription}
                        classNameLink={item.classNameLink}
                    />
                ))}
            </div>
        </div>
    )
}
