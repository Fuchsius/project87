'use client'

import React from 'react'
import { Button } from '../button'

const Section5 = ({ image, description, button , searchIcon, descriptionClassName }: { image: string; description: string; button: string; descriptionClassName?: string; searchIcon?: string }) => {
    return (
        <div className='w-full h-[300px] relative flex items-center justify-center'>
            {image && (
                <div className='w-full h-full'>
                    <img src={image} alt="" className='w-full h-full object-cover filter brightness-[0.6]' />
                </div>
            )}
            <div className='my-container absolute w-full md:grid md:grid-cols-12'>
                <div className={`col-span-8 col-start-3`}>
                    <p className={`description text-center !text-white font-normal ${descriptionClassName}`} >{description}</p>
                    <div className='flex justify-center'>
                        <Button variant="default" size={"lg"} className="mt-4" >
                            {searchIcon && (
                                <img src={searchIcon} alt="" className='w-4 h-4' />
                            )}
                            {button}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5