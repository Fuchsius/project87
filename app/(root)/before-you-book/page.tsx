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

    const faq3 = [
        {
            question: "Are complimentary airport transfers included in my Travelgate tour and how do I find these?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "What are all my airport transfer options with Travelgate, and how do I add these to my booking?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "What will happen to my Travelgate airport transfers if I book my own flights and the time changes?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const faq4 = [
        {
            question: "What are my room options as a solo traveller on a Travelgate tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Where can I find solo pricing with Travelgate?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const faq5 = [
        {
            question: "What are my room options as a solo traveller on a Travelgate tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Where can I find solo pricing with Travelgate?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const faq6 = [
        {
            question: "Does Travelgate offer discounts?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "How do I use my past guest discount?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "I've signed up for your newsletter. How do I use my travel credit?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Is there a discount for group bookings?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const faq7 = [
        {
            question: "How much are Travelgate deposits and when is full payment due?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Is the tour deposit refundable once I've paid?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Once I've booked my Travelgate tour, when will I get my invoice/bill?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "How can I make a payment towards my Travelgate tour booking?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "What payment methods can I use to pay for my Travelgate tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "How do I gift my Travel Credits to somebody else?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const faq8 = [
        {
            question: "Can I change or cancel my Travelgate tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "What should I do if I need to change or cancel my trip?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Are there any cancellation fees if I need to cancel my tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "If I need to change my name on a booking, how do I do that?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Can I transfer my booking to someone else?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const faq9 = [
        {
            question: "I have limited mobility and specific requirements for travel; can I book on (or travel on) on a Travelgate tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Will my Travel Director be able to help me with my mobility and medical requirements on tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Can I bring a CPAP Machine on tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Can I bring a service animal on my Travelgate tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "How much walking is involved in your trips?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "I have special dietary requirements, can I travel on a Travelgate tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "I have other specific requirements that aren't listed here, who can I speak to about these?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const faq10 = [
        {
            question: "Do I need travel insurance?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Can I purchase Travel Insurance through Travelgate?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Can I add Travel Insurance after I've booked my tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const faq11 = [
        {
            question: "Can I book a group trip?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "Can I book a custom trip for a group?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const faq12 = [
        {
            question: "Once I've booked, how will I know that my Travelgate tour booking is confirmed?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "How do I get a copy of a Travelgate brochure",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "How can I contact Travelgate's customer service for further assistance?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: "What words or phrases I will hear on my Travelgate tour?",
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    return (

        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full  py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Frequently Asked Questions", href: "/" },
                    { label: "Before you go" },
                ]} />
            </div>

            <div className='w-full bg-[#4B6B35]'>
                <div className='my-container py-12'>
                    <Title2 title='Frequently Asked Questions' className='text-center text-white' ></Title2>
                    <p className='text-center lg:text-[22px] md:text-[20px] text-lg text-white !font-semibold'>Giving you the answers to your questions about travelling with Travelgate</p>
                </div>
            </div>

            <div className='mt-12 my-container'>
                <Title2 title='Before you go' className='text-center ' ></Title2>
                <p className='mt-2 description text-center font-sourceSerif whitespace-pre-line'>You may have some questions about what to expect when you travel before you leave on your Travelgate tour. To help you feel completely at ease before your next trip with us, here are the questions we get asked the most.</p>
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Trip pricing and inclusions' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq1} search={true} />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Flights' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq2} search={true} />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Airport transfers' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq3} search={true} />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Solo travel options' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq4} search={true} />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Solo travel options' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq5} search={true} />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Discounts and offers' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq6} search={true} />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Deposits and payments' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq7} search={true} />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Changes and cancellations' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq8} search={true} />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Mobility accessibility and medical' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq9} search={true} />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Travel insurance' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq10} search={true} />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Groups of 9+ travellers' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq11} search={true} />
            </div>

            <div className='my-container mt-12'>
                <Title2 title='Other' className='md:mb-0 mb-2' ></Title2>
                <Section23 data={faq12} search={true} />
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

            <div className='w-full mt-12'>
                <Section19 />
            </div>


        </div>

    )
}
