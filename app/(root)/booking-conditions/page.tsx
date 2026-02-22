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
import { Button } from '@/components/comen/button'

export default function page() {


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

    const faq2 = [
        {
            question: "Are flights included in Travelgate's tour prices?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Can I book flights through Travelgate?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "If I book my flights with Travelgate and the flight times change, do I need to do anything?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "If flights are booked with Travelgate, is my airline seat number guaranteed?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "If I need to change my flights, what do I do?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Are there any fees if I need to change my flights?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];



    return (

        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/" },
                    { label: "Booking Conditions" },
                ]} />
            </div>

            <div className='w-full bg-[#4B6B35]'>
                <div className='my-container py-12'>
                    <Title2 title='Booking Conditions' className='text-center text-white' ></Title2>
                    <p className='text-center lg:text-[22px] md:text-[20px] text-lg text-white !font-semibold'>& Other Important Information</p>
                </div>
            </div>

            <div className='mt-12 my-container'>
                <Title2 title='Payment and Cancellation' className='' ></Title2>
                <p className='mt-1 description font-sourceSerif whitespace-pre-line lg:!text-lg md:!text-base !text-base'>Payment and cancelation terms vary by tour so please review this tour deposit level table to view the terms that will apply</p>
                <div className='mt-2 inline-flex items-center gap-2 cursor-pointer'>
                    <img src="assets/icons/copy.svg" alt="" />
                    <h4 className='text-base font-semibold uppercase text-textcolor1'>PAYMENT AND CANCELATION TABLE (THE "TABLE")</h4>
                </div>
            </div>

            <div className='my-container mt-12 bg-[#F5F5F5] py-12'>
                <h1 className='mb-2 font-sourceSerif text-[16px] md:text-[18px] lg:text-[24px] font-bold text-textcolor1 text-center' >Here Are Our Terms for Payment and Cancellation</h1>
                <Section23 data={faq1} search={true} />
                <p className='mt-12 text-center lg:text-lg text-base font-normal text-textcolor1'>Last updated on 04 December 2024</p>
            </div>

            <div className='mt-12 my-container'>
                <Title2 title='Important Information' className='' ></Title2>
                <p className='mt-1 description font-sourceSerif whitespace-pre-line lg:!text-lg md:!text-base !text-base'>Travel is different for everyone, and their goals and experiences may be different too. The Provider will not be responsible for any description, photo, representation, or warranty made by or given by an independent third-party sales representative, travel agent, or other person or business about any holiday offered by the Provider.</p>
            </div>

            <div className='my-container mt-12 bg-[#F5F5F5] py-12'>
                <h1 className='mb-2 font-sourceSerif text-[16px] md:text-[18px] lg:text-[24px] font-bold text-textcolor1' >A quick guide to all the information you need to know before you book your vacation</h1>
                <Section23 data={faq2} search={true} />

                <p className='mt-12 text-center lg:text-lg text-base font-normal text-textcolor1'>Last updated on 04 December 2024</p>
            </div>

            <div className='my-container'>
                <div className='mt-12 w-full bg-[#503454] px-8 py-6 rounded-md'>
                    <div className='md:flex block items-center gap-4'>
                        <div className='flex-1'>
                            <h2 className={`font-sourceSerif text-[22px] md:text-[26px] lg:text-[30px] font-bold text-white`}>Download Booking Conditions PDF</h2>
                            <p className={`mt-2 description font-sourceSerif whitespace-pre-line !font-normal !text-white lg:!text-lg md:!text-base !text-base`}>Get a PDF of our Booking Terms and Other Important Information</p>
                        </div>
                        <div className='flex justify-center md:mt-0 mt-4'>
                            <Button
                                variant="outline"
                                size={"lg"}
                                className={`md:ml-4 bg-transparent text-white border-white hover:shadow-white font-bold`}
                            >
                                <img src="assets/icons/document-white.svg" alt="" />
                                DOWNLOAD PDF
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-12'>
                <Section19 />
            </div>


        </div>

    )
}
