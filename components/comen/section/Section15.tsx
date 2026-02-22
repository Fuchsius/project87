import React from 'react'
import Card21 from '../card/Card21'
import Title2 from '../title/Title2'

export default function Section15({title, description}: {title: string, description: string}) {
    return (
        <div className='w-full bg-mygreen py-12'>
            <div className='w-full px-4'>
                <Title2 title={title} className='text-center text-white'/>
                <p className=' description-2 text-center !font-normal !text-white'>{description}</p>
            </div>
            <div className='mt-4 my-container grid md:grid-cols-3 grid-cols-1 gap-4'>
                <Card21
                    title1="Unlock the best..."
                    title2="Why is Sri Lanka ideal for spiritual journeys?"
                    description="Of Sri Lanka’s heritage by exploring sacred templates"
                    image="/assets/images/tour-images/boutique-sri-lanka.png"
                    videoId=""
                    classNameTitle1=""
                    classNameDescription=""
                    classNameTitle2=""
                />
                <Card21
                    title1="Unlock the best..."
                    title2="How can you experience Sri Lanka's cultural traditions?"
                    description="Of cultural traditions"
                    image="/assets/images/tour-images/boutique-sri-lanka.png"
                    videoId=""
                    classNameTitle1=""
                    classNameDescription=""
                    classNameTitle2=""
                />
                <Card21
                    title1="Unlock the best..."
                    title2="Why is relaxation key in Classic Tours?"
                    description="Of relaxation by unwinding on pristine beaches"
                    image="/assets/images/tour-images/boutique-sri-lanka.png"
                    videoId=""
                    classNameTitle1=""
                    classNameDescription=""
                    classNameTitle2=""
                />
            </div>
        </div>
    )
}
