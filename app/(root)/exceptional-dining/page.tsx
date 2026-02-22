"use client"

import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Title2 from '@/components/comen/title/Title2'
import { Button } from '@/components/comen/button'
import Section6 from '@/components/comen/section/Section6'
import { TOUR_DATA } from '@/data/tours.data'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import Section26 from '@/components/comen/section/Section26'
import Section19 from '@/components/comen/section/Section19'
import Hero2 from '@/components/comen/hero/Hero2'
import Link from 'next/link'
import Card3 from '@/components/comen/card/Card3'
import Card22 from '@/components/comen/card/Card22'
import Card23 from '@/components/comen/card/Card23'
import Card27Carousel1 from '@/components/comen/carousel/Card27Carousel1'
import Card3Carousel1 from '@/components/comen/carousel/Card3Carousel1'
import Card3Carousel3 from '@/components/comen/carousel/Card3Carousel3'
import Card32 from '@/components/comen/card/Card32'
import Card33 from '@/components/comen/card/Card33'
import Card1Carousel1 from '@/components/comen/carousel/Card1Carousel1'


export default function page() {

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

    const tourCardCarousel1Data = TOUR_DATA;

    const card3Carousel1Data1 = [
        {
            type: "3",
            image: "assets/images/exceptional-dining/variety-1.png",
            title: "Goatfell",
            title2: "Kandapola, Nuwara Eliya, Sri Lanka",
            description: "Guests at Goatfell can enjoy authentic Sri Lankan food and international dishes on the garden terrace, which is a great place to eat. The cosy lounge has an open fireplace, which is great for relaxing with other travellers in the evening. Butlers who are dedicated to their work will be there for you the whole time. This high-end hotel in Nuwara Eliya's cool highlands offers great service and unforgettable meals. Experience on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/exceptional-dining/variety-2.png",
            title: "Kalkudah Beach House",
            title2: "Kalkudah Beach, Sri Lanka",
            description: "Guests at Goatfell can enjoy authentic Sri Lankan food and international dishes on the garden terrace, which is a great place to eat. The cosy lounge has an open fireplace, which is great for relaxing with other travellers in the evening. Butlers who are dedicated to their work will be there for you the whole time. This high-end hotel in Nuwara Eliya's cool highlands offers great service and unforgettable meals. Experience on",
            link: "#",
            linkText: "Explore Ceylon",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/exceptional-dining/variety-3.png",
            title: "Leopard Trails Yala",
            title2: "Yala, Sri Lanka",
            description: "Leopard Trails Yala's premium dining celebrates authentic Sri Lankan cuisine in its purest form. Skilled chefs craft traditional curries and sambols using fresh curry leaves, coconut, and aromatic spices. Each meal becomes an artistic palette of flavours, perfectly balanced to complement the tropical climate. Experience unhurried, labour intensive preparation that creates extraordinary local dishes, bringing together centuries old culinary traditions in an intimate jungle setting. Experience on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/exceptional-dining/variety-2.png",
            title: "Kalkudah Beach House",
            title2: "Kalkudah Beach, Sri Lanka",
            description: "Guests at Goatfell can enjoy authentic Sri Lankan food and international dishes on the garden terrace, which is a great place to eat. The cosy lounge has an open fireplace, which is great for relaxing with other travellers in the evening. Butlers who are dedicated to their work will be there for you the whole time. This high-end hotel in Nuwara Eliya's cool highlands offers great service and unforgettable meals. Experience on",
            link: "#",
            linkText: "Explore Ceylon",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel3Data1 = [
        {
            type: "3",
            image: "assets/images/exceptional-dining/demonstrations-1.png",
            title: "Cultural cooking immersion",
            title2: "Negombo, Sri Lanka",
            description: "Experience Sri Lankan village life with the Fernando family, who will welcome you into their home near Negombo Lagoon. Learn traditional cooking methods, visit local markets, and hear stories about their heritage. Share a meal with the family that includes home cooked dishes passed down through generations. A warm cultural experience full of hospitality and flavour. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/exceptional-dining/demonstrations-2.png",
            title: "Spice cooking masterclass",
            title2: "Colombo, Sri Lanka",
            description: "Mohara Dole's immersive three-hour cooking class in Rajagiriya will allow you to explore Sri Lanka's diverse flavours. Cooking is her art form, allowing her to express herself while also worshipping and playing. She leads foodies on a sensory journey through a variety of rices and curries, each bursting with flavour and aroma. Attend her cooking class, learn how to prepare authentic dishes, and leave with the knowledge to recreate them at home. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/exceptional-dining/demonstrations-3.png",
            title: "Cook the Lankan Way",
            title2: "Colombo, Sri Lanka",
            description: "Experience a hands on cooking class with a local host in a Colombo neighborhood. Experience the joy of cooking from scratch as you learn new skills like cracking a coconut and frying papadum. At each stage, your host will explain the key ingredients and their role in Sri Lankan cuisine. Eating your hard work on a banana leaf with your fingers is authentic. Keep your recipe card and cook these dishes at home. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/exceptional-dining/demonstrations-2.png",
            title: "Spice cooking masterclass",
            title2: "Colombo, Sri Lanka",
            description: "Mohara Dole's immersive three-hour cooking class in Rajagiriya will allow you to explore Sri Lanka's diverse flavours. Cooking is her art form, allowing her to express herself while also worshipping and playing. She leads foodies on a sensory journey through a variety of rices and curries, each bursting with flavour and aroma. Attend her cooking class, learn how to prepare authentic dishes, and leave with the knowledge to recreate them at home. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data2 = [
        {
            type: "3",
            image: "assets/images/exceptional-dining/evenings-1.png",
            title: "Lamp-Lit Seafood Hoppers",
            title2: "Galle, Sri Lanka",
            description: "After receiving a cold towel and drink, your hosts begin cooking a variety of dishes using roti, Sri Lanka's most versatile ingredient. As your feast is prepared, you can ask questions and help make hoppers, a bow! shaped pancake, a local favourite. Enjoy hoppers and freshly barbecued seafood while the band outside the mud-hut plays rhythmic Sri Lankan music. Listen to crickets as you enjoy a rustic hideaway dinner of hoppers with prawns, cuttlefish, and other seafood made for you. Experience on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/exceptional-dining/evenings-2.png",
            title: "Galle Fort Street Food Trail",
            title2: "Galle, Sri Lanka",
            description: "Galle's street food has many international influences. revealing its colonial past. The fort's oldest cafe serves Sinhalese sweets and tea. Visitors to the mosque can learn how local merchants changed traditional dishes. Must try fresh egg roti. Next, enjoy a unique cocktail and hot Sri Lankan hoppers on the ramparts. End the night with drinks and snacks at the antique Galle Services Club. While walking, your local host will explain the fort and stop at famous heritage sites. Experience on",
            link: "#",
            linkText: "Classic Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/exceptional-dining/evenings-3.png",
            title: "An Evening of Lagoon Fishing",
            title2: "Rathgama, Sri Lanka",
            description: "A night of fishing with the fishermen of Rathgama, who live just outside of Galle Fort, is certain to be an enjoyable experience. During the time that the sun is beginning to set, you will sail out onto the lagoon and learn how to throw the traditional nets. After that, make your way to the fishing harbour to take a look at the fresh catch that is being brought in and to choose some options for the seafood barbecue that you will be having on the beach. Experience on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },

    ]

    const card1Carousel1Data = [
        {
            image: "assets/images/exceptional-dining/experiences-1.png",
            title: "Be My Guest",
            description: "The authentic local travel experience",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/exceptional-dining/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE® Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/exceptional-dining/experiences-3.png",
            title: "Outdoor & Nature",
            description: "Wild scenery, big adventures",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
    ]

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/" },
                    { label: "Exceptional Dining" },
                ]} />
            </div>

            {/* Hero 2 */}
            <div className='w-full mx-auto'>
                <Hero2
                    image="assets/images/exceptional-dining/hero.jpg"
                    title="Exceptional Dining"
                    description="Curated south asian culinary journeys"
                    type={2}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/* Food adventures from every corner */}
            <div className='mt-12 my-container'>
                <Title2 title={"Food adventures from every corner"} className={`text-center mb-2`} />
                <p className={`description text-center font-sourceSerif whitespace-pre-line `}>Travel and food go well together. We think that amazing food is what makes a trip truly unforgettable, not just regular meals. That's why every carefully planned trip includes handpicked fine dining restaurants and authentic local food tours, which make memories that will last a lifetime. </p>
                <div className='w-full flex justify-center mt-8'>
                    <Link href={'#'} className='no-underline'>
                        <Button variant="default" size={"lg"} className={``} >Search Tours</Button>
                    </Link>
                </div>
            </div>

            {/* Gastronomic Variety */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data1}
                    title="Gastronomic Variety"
                    description="Sri Lanka's best boutique and luxury hotels let you experience Ceylon's culinary heritage. Award winning chefs create amazing dining experiences, from traditional curries with spices to modern fusion cuisine. Enjoy fresh seafood, tropical fruits, and top notch wines while looking out over beautiful beaches and tea plantations."
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* Hands-on Cooking Demonstrations */}
            <div className='w-full mt-12'>
                <Card3Carousel3
                    cards={card3Carousel3Data1}
                    title="Hands-on Cooking Demonstrations"
                    description="Hands on cooking is part of your journey into the flavours of the world. Demonstrations, lessons, and talks with local chefs who know a lot about food. Learn about the history and meaning of local foods, and get recipes, tips, and tricks to take home with you to remember your trip. Some of the guests' favourite things are."
                    bgColor1="bg-[#E2EBE6]"
                    classNameTitle=""
                    classNameDescription=""
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                />
            </div>

            {/* testimonial 1 */}
            <div className='w-full mt-12 bg-[#CBC2C9] py-12'>
                <div className='my-container'>
                    <Card23
                        image="assets/images/exceptional-dining/testimonial-1.png"
                        title="“We felt grateful”"
                        feedback="We actually lived like locals, tasted authentic curries, and learned about their traditions. Travel opens your eyes to new ways of life. We enjoyed every moment with our group exploring temples and beaches and returned home with precious memories of this incredible journey."
                        feedbackAuthor="Lisa T"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>

            {/* Dine-Around Evenings */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data2}
                    title="Dine-Around Evenings"
                    description="Our team of insiders always plans and chooses the perfect dining experiences for you, but Dine Around evenings let you customise your local dining experience even more. On certain nights, you can choose your favourite menu from a list of the best local restaurants and eat whatever you want."
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* In Room Breakfasts */}
            <div className='my-container mt-12'>
                <Card32
                    image="assets/images/exceptional-dining/breakfasts.png"
                    title="In Room Breakfasts"
                    description="Enjoy breakfast in bed with premium room service, included on every tour. On some days with Relaxed Starts, you can sleep in a little longer and have breakfast brought to your room. You don't have to rush to eateries or stick to strict meal times. Instead, relax in comfort while delicious breakfasts are delivered to your door, making the perfect start to your day's adventures."
                    button=""
                    buttonVariant="default"
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* Your Choice Dining */}
            <div className='my-container mt-12'>
                <Card33
                    image="assets/images/exceptional-dining/dining.png"
                    title="Your Choice Dining"
                    description="Experience dining freedom with Your Choice Dining, perfectly tailored to your preferences on every Travelgate tour. Your dedicated Travel Concierge handpicks exceptional restaurants serving authentic local specialties, all within comfortable walking distance of your hotel. This bespoke service gives you complete flexibility to explore Sri Lanka's culinary landscape at your own pace on select evenings. From traditional family run establishments to contemporary dining venues, each recommendation reflects your personal tastes and dietary requirements, ensuring memorable meals that complement your unique travel experience."
                    button=""
                    buttonVariant="default"
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* testimonial 2 */}
            <div className='w-full mt-12 bg-[#C8CCD7] py-12'>
                <div className='my-container'>
                    <Card22
                        image="assets/images/best-kept-local-secrets/testimonial-2.png"
                        title="“Thanks Travelgate”"
                        feedback="We started an amazing trip through Sri Lanka in 2024, personally feeling its warmth and beauty. The touching “Be My Guest” event in Kandy was among the most treasured memories. We were invited into the hillside house of a local family, where the air smelt of spices and laughter abound. My son struck up a conversation with our host's young daughter as we were gathering to eat a traditional meal-only to learn their names matched! We shall treasure this experience always because of the delight, the connection, and the one perfect serendipitous moment."
                        feedbackAuthor="Generva Hertig"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>


            {/* Some of our guests’ favourites */}
            <div className='w-full mt-12'>
                <div className='my-container'>
                    <TourCardCarousel1
                        data={tourCardCarousel1Data}
                        title="Some of our guests’ favourites"
                        description=""
                        button="See More Trips"
                        classNameButton=""
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>
            </div>

            <div className='w-full mt-12'>
                <Card1Carousel1
                    cards={card1Carousel1Data}
                    title="More one-of-a kind experiences"
                    description="You will also enjoy a Be My Guest experience and MAKE TRAVEL RESPONSIBLE® Experience on every tour in addition to Stays with Tales experiences on some."
                    bgColor1="bg-[#0b5d56]"
                    bgColor2="bg-bggray4"
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
