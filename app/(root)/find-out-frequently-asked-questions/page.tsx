"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Title2 from '@/components/comen/title/Title2'
import Section1 from '@/components/comen/section/Section1'
import Card27Carousel2 from '@/components/comen/carousel/Card27Carousel2'
import Link from 'next/link'
import Section6 from '@/components/comen/section/Section6'
import Section2 from '@/components/comen/section/Section2'

export default function page() {

    const card27Carousel2 = [
        {
            image: "",
            title: "Before You Book",
            title2: "",
            description: "Useful topics to think about before you book include flights, transfers, extra hotel nights, travelling alone, payments, deposits, and more.",
            button: "See FAQs",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "",
            title: "Before You Go",
            title2: "",
            description: "Helpful information about payments, visas, dietary needs, what to pack, your travel documents, and more before you leave.",
            button: "See FAQs",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "",
            title: "On Your Trip",
            title2: "",
            description: "Things you need to know before your tour, like where to meet on the first day, who you'll be travelling with, your private chauffeur guide, your accommodations, and more.",
            button: "See FAQs",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "",
            title: "After Your Trip",
            title2: "",
            description: "You can look over your tour, your Elite Tour Rewards member benefits, and how to stay in touch after your holiday.",
            button: "See FAQs",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        }
    ]

    const wayToTravel = [
        {
            image: "/assets/icons/tour01.svg",
            title: "Access travel knowledge",
            description: "of selected local experts",
        },
        {
            image: "/assets/icons/tour02.svg",
            title: "Save time & money",
            description: "let a local expert plan",
        },
        {
            image: "/assets/icons/tour03.svg",
            title: "Tailor your private holiday",
            description: "to your preferences",
        },
        {
            image: "/assets/icons/tour04.svg",
            title: "Book & travel securely",
            description: "money back guarantee & 24/7 support",
        },
    ];


    return (

        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Frequently Asked Questions" },
                ]} />
            </div>

            <div className='w-full bg-myblue'>
                <div className='my-container py-12'>
                    <p className='text-center lg:text-[22px] md:text-[20px] text-lg text-white font-semibold'>Booking + Travel</p>
                    <Title2 title='Frequently Asked Questions' className='text-center text-white' ></Title2>
                </div>
            </div>

            <div className='mt-12 w-full'>
                <Section1
                    title=""
                    description="We have put together complete guides that cover everything you need to know before, during, and after your tour. From important things to do before you leave and answers to common questions about the tour experience to our most recent advice on how to stay healthy while travelling. Find out more about Elite Tour Rewards, the special loyalty program from Travelgate that gives you discounts on future tours. Giving you all the answers and help you need for your entire Travelgate trip from beginning to end."
                    button=""
                    titleClassName=""
                    descriptionClassName=""
                    buttonClassName=""
                />
            </div>

            <div className='w-full mt-12'>
                <Card27Carousel2
                    number={1}
                    cards={card27Carousel2}
                    title="Look through a topic"
                    description=""
                    bgColor1=""
                    bgColor2=""
                    size0={1}
                    size768={2}
                    size1024={4}
                    size1280={4}
                    minSize={4}
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* Rewards Banner */}
            <div className='mt-12 my-container'>
                <div className="flex relative w-full rounded-md overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center brightness-[.6]"
                        style={{
                            backgroundImage: "url('/assets/images/elite-your-rewards/rewards-banner.jpg')",
                            zIndex: -1
                        }}
                    ></div>
                    <div className="flex relative z-10 justify-center items-center w-full py-6 md:px-12 px-4">
                        <div className='w-full bg-transparent rounded-md'>
                            <Title2 title="Give €100, get €100*" className={`text-center text-white`} />

                            <p className="mt-2 text-sm text-center text-white">When you book your first tour with Travelgate, you will automatically become a member of our Elite Tour Rewards program, which offers the best touring benefits worldwide. Discover and enjoy member benefits on your next tour.</p>

                            <div className='flex justify-center items-center mt-4'>
                                <Link href="#" className={`text-center block text-white md:text-base !text-sm underline-1 font-bold `}>Start Referring {">"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-12 '>
                <div className='flex justify-center items-center my-container'>
                    <Section6
                        data={wayToTravel}
                        title="Simply the best and most relevant way to travel"
                        titleClassName=""
                    />
                </div>
            </div>

            <div className='mt-12 w-full'>
                <Section2
                    title="Interested in One of Our Trips?"
                    description="Booking your 'Business Class' tour is easy. Find your perfect tour today to discover Premium Experiences, Premium Dining and Premium Service. Or request a quote to receive more information from one of our Travel Experts."
                    buttonLink1="/search"
                    buttonLink2="/quote"
                    titleClassName=""
                    descriptionClassName=""
                    classNameButton1=""
                    classNameButton2=""
                />
            </div>

        </div>

    )
}
