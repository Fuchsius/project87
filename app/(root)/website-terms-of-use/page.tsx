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
import Section23 from '@/components/comen/section/Section23'
import Section19 from '@/components/comen/section/Section19'
import Card18Carousel1 from '@/components/comen/carousel/Card18Carousel1'
import Section26 from '@/components/comen/section/Section26'

export default function page() {

    const card27Carousel2 = [
        {
            image: "",
            title: "FAQs home",
            title2: "",
            description: "Read about your trip, your travel documents, and airport rules, as well as some of our Travel Directors' best tips for making your trip as easy as possible.",
            button: "See FAQs",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "",
            title: "Before you go",
            title2: "",
            description: "Helpful information about payments, visas, dietary needs, what to pack, your travel documents, and more before you leave.",
            button: "See FAQs",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "",
            title: "On Your trip",
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

    const faq1 = [
        {
            question: "What is and isn't included in Travelgate's tour pricing?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "What does it mean if a departure is labelled 'Call Us'?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "What does it mean if a departure is 'On Request'?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Does Travelgate offer booking holds?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Can children travel on Travelgate tours?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Can I book a triple room?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Does twin-share mean there are two twin beds?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const card18Carousel1Data = [
        {
            image: "assets/images/classic-holiday/free-brochure.png",
            title: "Get your free brochure",
            description: "Find your next escape with the Asia's leading travel brand",
            buttonText: "Request A Brochure",
            bgColor: "",
            linkLabel: "Classic Sri Lankan Delights.",
            linkHref: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/classic-holiday/award-winning.png",
            title: "Award winning tours ",
            description: "From the TripAdvisor to the SLTDA Agent's Choice Awards",
            buttonText: "Search Our Tours",
            bgColor: "[#315A7A]",
            linkHref: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
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
                    { label: "Resources", href: "/" },
                    { label: "Website Terms Of Use" },
                ]} />
            </div>

            <div className='w-full bg-myred2'>
                <div className='my-container md:h-[396px] h-[163px] flex items-center justify-center'>
                    <h1 className={`text-center text-white lg:text-5xl md:text-[40px] text-[28px] font-bold font-sourceSerif `}>Website Terms Of Use</h1>
                </div>
            </div>

            {/* Make unforgettable memories */}
            <div className='w-full mt-12'>
                <Section1
                    title="Last updated: 21st December 2024"
                    description="Age Restriction: Our websites are intended for use by those 18 years old or over. No one under that age should use our websites. If you are under the age of 18 years please leave our websites immediately."
                    button=""
                    titleClassName=""
                    descriptionClassName=""
                    buttonClassName=""
                />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='What are you looking for?' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq1} search={true} />
            </div>


            <div className='mt-12 w-full'>
                <div className='my-container'>
                    <Card18Carousel1
                        cards={card18Carousel1Data}
                        title=""
                        description=""
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>
            </div>

            <div className='w-full mt-12 bg-[#EAE6EA] py-12'>
                <div className='my-container'>
                    <Section6
                        data={wayToTravel}
                        title="Simply the best and most relevant way to travel"
                        titleClassName=""
                    />
                </div>
            </div>

            <div className='mt-12 my-container'>
                <Section26></Section26>
            </div>

            <div className='w-full mt-12'>
                <Section19 />
            </div>


        </div>

    )
}
