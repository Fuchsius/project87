'use client'

import React from 'react'
import { Button } from '@/components/comen/button'


export default function Section26() {

    return (
        <>
            <div className='w-full bg-[#503454] px-8 py-6'>
                <div className='md:flex block items-center gap-4'>
                    <div className='flex-1 text-center'>
                        <h2 className={`font-sourceSerif text-[20px] md:text-[26px] lg:text-[30px] font-bold text-white`}>Need a hand with your travel plans?</h2>
                        <p className={`mt-2 description-2 text-center font-sourceSerif whitespace-pre-line !font-normal !text-white `}>Our Local Travel Specialists would be happy to help. Please send us your contact information, and we will get in touch.</p>
                    </div>
                    <div className='flex justify-center md:mt-0 mt-4'>
                        <Button
                            variant="default"
                            size={"lg"}
                            className={`md:ml-4`}
                        >Create my itinerary </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
