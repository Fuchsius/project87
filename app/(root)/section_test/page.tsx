"use client";

import React, { useState } from 'react'
import Section1 from '@/components/comen/section/Section1'
import Section2 from '@/components/comen/section/Section2'
import Section3 from '@/components/comen/section/Section3'
import Section4 from '@/components/comen/section/Section4'
import Section5 from '@/components/comen/section/Section5'
import Section6 from '@/components/comen/section/Section6'
import Section7 from '@/components/comen/section/Section7'
import Section8 from '@/components/comen/section/Section8'
import Section9 from '@/components/comen/section/Section9'
import Section10 from '@/components/comen/section/Section10'
import Section11 from '@/components/comen/section/Section11'
import Section12 from '@/components/comen/section/Section12'
import Section13 from '@/components/comen/section/Section13'
import Section14 from '@/components/comen/section/Section14'
import Section15 from '@/components/comen/section/Section15'
import Section16 from '@/components/comen/section/Section16'
import Section17 from '@/components/comen/section/Section17'
import Section18 from '@/components/comen/section/Section18'
import Section19 from '@/components/comen/section/Section19'
import Section20 from '@/components/comen/section/Section20'
import Section21 from '@/components/comen/section/Section21'
import Section22 from '@/components/comen/section/Section22'
import Section23 from '@/components/comen/section/Section23'
import Section24 from '@/components/comen/section/Section24'
import Section25 from '@/components/comen/section/Section25'
import Section26 from '@/components/comen/section/Section26'
import Section27 from '@/components/comen/section/Section27'
import Section28 from '@/components/comen/section/Section28'
import Section29 from '@/components/comen/section/Section29'

const section6Data = [
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

const section7Data = [
    {
        image: "assets/images/by-destination.png",
        title: "MAKE TRAVEL RESPONSIBLE",
        description: "Connecting you with and supporting local communities.",
        linkLabel: "Find out more",
        linkHref: "#",
    },
    {
        image: "assets/images/by-destination.png",
        title: "EXPERIENCE THE FINESSE",
        description: "Experience the finest in TGT’s Collection! ranging from Ultimate Luxury to Comfort. Discover carefully selected boutique hotels, villas, and luxurious accommodations throughout Asia, designed for unforgettable experiences of luxury.",
        linkLabel: "Find out more",
        linkHref: "#",
    },
    {
        image: "assets/images/by-destination.png",
        title: "BE MY GUEST",
        description: "Experience the finest in TGT’s Collection! ranging from Ultimate Luxury to Comfort. Discover carefully selected boutique hotels, villas, and luxurious accommodations throughout Asia, designed for unforgettable experiences of luxury.",
        linkLabel: "Find out more",
        linkHref: "#",
    },
    {
        image: "assets/images/by-destination.png",
        title: "BE MY GUEST",
        description: "Experience the finest in TGT’s Collection! ranging from Ultimate Luxury to Comfort. Discover carefully selected boutique hotels, villas, and luxurious accommodations throughout Asia, designed for unforgettable experiences of luxury.",
        linkLabel: "Find out more",
        linkHref: "#",
    },
];

const section8Data = [
    {
        type: "2",
        image: "assets/images/by-destination.png",
        title: "Meet your host Sheril in at Colombo, Sri Lanka",
        title2: "Be My Guest",
        description: "With Mohara Dole in her immersive three-hour cooking class in Rajagiriya, explore the rich tastes of Sri Lanka. Cooking is her art; it combines self-expression with play and worship. She leads foodies on a vibrant tour of rices and curries, each bursting with taste and scent. Come cook with her at the stove, make real food, and leave equipped to replicate it at home. Experience on ",
        link: "#",
        linkText: "Classic Sri Lankan Delights.",
        classNameTitle: "",
        classNameDescription: "",
        linkClassName: ""
    },
    {
        type: "2",
        image: "assets/images/by-destination.png",
        title: "Meet your host Sheril in at Colombo, Sri Lanka",
        title2: "Be My Guest",
        description: "With Mohara Dole in her immersive three-hour cooking class in Rajagiriya, explore the rich tastes of Sri Lanka. Cooking is her art; it combines self-expression with play and worship. She leads foodies on a vibrant tour of rices and curries, each bursting with taste and scent. Come cook with her at the stove, make real food, and leave equipped to replicate it at home. Experience on ",
        link: "#",
        linkText: "Classic Sri Lankan Delights.",
        classNameTitle: "",
        classNameDescription: "",
        linkClassName: ""
    },
    {
        type: "2",
        image: "assets/images/by-destination.png",
        title: "Meet your host Sheril in at Colombo, Sri Lanka",
        title2: "Be My Guest",
        description: "With Mohara Dole in her immersive three-hour cooking class in Rajagiriya, explore the rich tastes of Sri Lanka. Cooking is her art; it combines self-expression with play and worship. She leads foodies on a vibrant tour of rices and curries, each bursting with taste and scent. Come cook with her at the stove, make real food, and leave equipped to replicate it at home. Experience on ",
        link: "#",
        linkText: "Classic Sri Lankan Delights.",
        classNameTitle: "",
        classNameDescription: "",
        linkClassName: ""
    },
    {
        type: "2",
        image: "assets/images/by-destination.png",
        title: "Meet your host Sheril in at Colombo, Sri Lanka",
        title2: "Be My Guest",
        description: "With Mohara Dole in her immersive three-hour cooking class in Rajagiriya, explore the rich tastes of Sri Lanka. Cooking is her art; it combines self-expression with play and worship. She leads foodies on a vibrant tour of rices and curries, each bursting with taste and scent. Come cook with her at the stove, make real food, and leave equipped to replicate it at home. Experience on ",
        link: "#",
        linkText: "Classic Sri Lankan Delights.",
        classNameTitle: "",
        classNameDescription: "",
        linkClassName: ""
    }
];

const section10Data = [
    {
        question: 'What is a definite departure?',
        answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.\n\nWe update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.\n\nIf there are ever any changes to your departure, we will contact you.'
    },
    {
        question: 'How can I book flights for my tour? What about extra hotel nights?',
        answer: 'Details about booking flights and extra hotel nights would be explained here.'
    },
    {
        question: 'How much is the deposit for a Trafalgar tour?',
        answer: 'Information about the tour deposit would be provided in this section.'
    },
    {
        question: 'What are the different kinds of experiences available?',
        answer: 'Each Trafalgar tour has a carefully-selected range of included experiences to help immerse yourself in a destination. But did you know that every tour also has a Be My Guest and MAKE TRAVEL MATTER® Experience?'
    },
    {
        question: 'Can I join a Trafalgar tour as a solo traveller?',
        answer: 'Details for solo travellers would be explained in this section.'
    },
    {
        question: 'Where can I find room options?',
        answer: 'Information about room options would be provided here.'
    }
];

const section9Data = [
    {
        population: "22 million",
        languages: "Sinhala, Tamil, English",
        callingCode: "+94",
        timeZone: "(GMT+05:30) Sri Jayawardenepura",
        currency: "Rupee (LKR)",
        capital: "Colombo",
        electricity: "Type D (Old British 3-pin) Type G (British 3-pin)"
    }
];

const section11Data = [
    {
        destinations: "Nepal",
    },
    {
        destinations: "India",
    },
    {
        destinations: "Bhutan",
    },
    {
        destinations: "Sri Lanka",
    },
    {
        destinations: "Maldives",
    }
];

const section13Data = [
    {
        image: "assets/icons/hand-shake-1.svg",
        title: "Must-sees to local secrets",
    },
    {
        image: "assets/icons/hand-sustainable-1.svg",
        title: "One-of-a-kind experiences",
    },
    {
        image: "assets/icons/scope-1.svg",
        title: "Everything taken care of",
    },
    {
        image: "assets/icons/hand-shake-1.svg",
        title: "Responsible  travel",
    },
]

const section14Data = [
    {
        image: "assets/images/by-destination.png",
        title: "See the real thing",
        description: "Through our well designed sacred trips, let Sri Lanka's spiritual legacy envelop you. See the revered Temple of the Tooth in Kandy housing Buddha's holy relic, enjoy the peace of old cave temples at Dambulla, or take part in a traditional puja celebration at a nearby Buddhist temple. These deep events gently, contemplatively link you to the island's rich spiritual legacy.",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/by-destination.png",
        title: "See the real thing",
        description: "Through our well designed sacred trips, let Sri Lanka's spiritual legacy envelop you. See the revered Temple of the Tooth in Kandy housing Buddha's holy relic, enjoy the peace of old cave temples at Dambulla, or take part in a traditional puja celebration at a nearby Buddhist temple. These deep events gently, contemplatively link you to the island's rich spiritual legacy.",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/by-destination.png",
        title: "See the real thing",
        description: "Through our well designed sacred trips, let Sri Lanka's spiritual legacy envelop you. See the revered Temple of the Tooth in Kandy housing Buddha's holy relic, enjoy the peace of old cave temples at Dambulla, or take part in a traditional puja celebration at a nearby Buddhist temple. These deep events gently, contemplatively link you to the island's rich spiritual legacy.",
        classNameTitle: "",
        classNameDescription: ""
    },
]

const section16Data = [
    {
        title: "What makes ClassicHolidays unique?",
        description: "Perfect fusion of culture, wildlife, and leisure is offered by Classic Holidays. Discover local customs, colourful celebrations, and historic temples at leisurely pace. Every schedule is meticulously designed to provide significant events and enough of time to fully appreciate the beauties of Sri Lanka. Classic Holidays guarantees unique experiences catered to your interests and needs whether your travel is for leisure on immaculate beaches, guided safaris, or exploration of famous sites.",
    },
    {
        title: "What makes ClassicHolidays unique?",
        description: "Perfect fusion of culture, wildlife, and leisure is offered by Classic Holidays. Discover local customs, colourful celebrations, and historic temples at leisurely pace. Every schedule is meticulously designed to provide significant events and enough of time to fully appreciate the beauties of Sri Lanka. Classic Holidays guarantees unique experiences catered to your interests and needs whether your travel is for leisure on immaculate beaches, guided safaris, or exploration of famous sites.",
    },
    {
        title: "What makes ClassicHolidays unique?",
        description: "Perfect fusion of culture, wildlife, and leisure is offered by Classic Holidays. Discover local customs, colourful celebrations, and historic temples at leisurely pace. Every schedule is meticulously designed to provide significant events and enough of time to fully appreciate the beauties of Sri Lanka. Classic Holidays guarantees unique experiences catered to your interests and needs whether your travel is for leisure on immaculate beaches, guided safaris, or exploration of famous sites.",
    },
    {
        title: "What makes ClassicHolidays unique?",
        description: "Perfect fusion of culture, wildlife, and leisure is offered by Classic Holidays. Discover local customs, colourful celebrations, and historic temples at leisurely pace. Every schedule is meticulously designed to provide significant events and enough of time to fully appreciate the beauties of Sri Lanka. Classic Holidays guarantees unique experiences catered to your interests and needs whether your travel is for leisure on immaculate beaches, guided safaris, or exploration of famous sites.",
    },
]

const section20Data = [
    {
        question: '*Note on our hotels',
        answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.\n\nWe update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.\n\nIf there are ever any changes to your departure, we will contact you.'
    },
];

const section21Data = [
    {
        title: "Private customisable trip",
    },
    {
        title: "Be My Guest experience",
    },
    {
        title: "Stays with Tales experience*",
    },
    {
        title: "Daily breakfast**",
    },
    {
        title: "Relaxed start in every tour",
    },
    {
        title: "Travel director & private chauffeur guide",
    },
    {
        title: "Entry to many must-see sights",
    },
    {
        title: "Travel Director and Driver team",
    },
    {
        title: "MAKE TRAVEL RESPONSIBLE Experiences",
    },
    {
        title: "Locally guided tours in many destinations",
    },
]

const section22Data1 = [
    {
        question: '*Note on our hotels',
        answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.\n\nWe update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.\n\nIf there are ever any changes to your departure, we will contact you.'
    },
];

const section24Data1 = [
    {
        image: "assets/images/by-destination.png",
        title: "Be My Guest",
        description: "'From Jaffna's curry pots to Galle's cinnamon gardens, I connect you with flavors and stories. Your joy tasting a hopper fresh off the fire? That's my why'.",
        button: "Search Offers",
        classNameTitle: "",
        classNameDescription: "",
        classNameButton: ""
    },
    {
        image: "assets/images/by-destination.png",
        title: "Be My Guest",
        description: "'From Jaffna's curry pots to Galle's cinnamon gardens, I connect you with flavors and stories. Your joy tasting a hopper fresh off the fire? That's my why'.",
        button: "Search Offers",
        classNameTitle: "",
        classNameDescription: "",
        classNameButton: ""
    },
    {
        image: "assets/images/by-destination.png",
        title: "Be My Guest",
        description: "'From Jaffna's curry pots to Galle's cinnamon gardens, I connect you with flavors and stories. Your joy tasting a hopper fresh off the fire? That's my why'.",
        button: "Search Offers",
        classNameTitle: "",
        classNameDescription: "",
        classNameButton: ""
    },
    {
        image: "assets/images/by-destination.png",
        title: "Be My Guest",
        description: "'From Jaffna's curry pots to Galle's cinnamon gardens, I connect you with flavors and stories. Your joy tasting a hopper fresh off the fire? That's my why'.",
        button: "Search Offers",
        classNameTitle: "",
        classNameDescription: "",
        classNameButton: ""
    },
];

const section25Data1 = [
    {
        image: "assets/images/by-destination.png",
        title: "Be My Guest",
        description: "Travel knowing you're helping to advance 17 of the United Nations' Sustainable Development Goals, which serve as a global blueprint for sustainable development. Each MAKE TRAVEL RESPONSIBLE® Experience contributes to up to two United Nations Sustainable Development Goals.",
        link: "",
        linkText: "",
        classNameTitle: "",
        classNameDescription: "",
        classNameLink: "",
    },
    {
        image: "assets/images/by-destination.png",
        title: "Be My Guest",
        description: "Travel knowing you're helping to advance 17 of the United Nations' Sustainable Development Goals, which serve as a global blueprint for sustainable development. Each MAKE TRAVEL RESPONSIBLE® Experience contributes to up to two United Nations Sustainable Development Goals.",
        link: "",
        linkText: "",
        classNameTitle: "",
        classNameDescription: "",
        classNameLink: "",
    },
    {
        image: "assets/images/by-destination.png",
        title: "Be My Guest",
        description: "Travel knowing you're helping to advance 17 of the United Nations' Sustainable Development Goals, which serve as a global blueprint for sustainable development. Each MAKE TRAVEL RESPONSIBLE® Experience contributes to up to two United Nations Sustainable Development Goals.",
        link: "",
        linkText: "",
        classNameTitle: "",
        classNameDescription: "",
        classNameLink: "",
    },
    {
        image: "assets/images/by-destination.png",
        title: "Be My Guest",
        description: "Travel knowing you're helping to advance 17 of the United Nations' Sustainable Development Goals, which serve as a global blueprint for sustainable development. Each MAKE TRAVEL RESPONSIBLE® Experience contributes to up to two United Nations Sustainable Development Goals.",
        link: "",
        linkText: "",
        classNameTitle: "",
        classNameDescription: "",
        classNameLink: "",
    },
];

const section27Data = [
    {
        image: "assets/images/by-destination.png",
        title: "Nutrition",
        description: "Does the animal have access to a diet that is both healthy and balanced, and where it is similar to what it would consume in the wild? Of course, in addition to clean water?",
        icon: "assets/icons/nutrition.svg",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/by-destination.png",
        title: "Nutrition",
        description: "Does the animal have access to a diet that is both healthy and balanced, and where it is similar to what it would consume in the wild? Of course, in addition to clean water?",
        icon: "assets/icons/nutrition.svg",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/by-destination.png",
        title: "Nutrition",
        description: "Does the animal have access to a diet that is both healthy and balanced, and where it is similar to what it would consume in the wild? Of course, in addition to clean water?",
        icon: "assets/icons/nutrition.svg",
        classNameTitle: "",
        classNameDescription: ""
    }
];

const section28Data = [
    {
        image: "",
        title: "Multi tour Discount",
        title2: "Save 2.5%",
        description: "Save money by booking two Travelgate tours that last seven days or more. Take three tours and save two.",
        button: "Contact Us",
        classNameTitle: "",
        classNameTitle2: "font-noraml lg:text-lg  not-italic",
        classNameDescription: "",
        classNameButton: "",
    },
    {
        image: "",
        title: "Multi tour Discount",
        title2: "Save 2.5%",
        description: "Save money by booking two Travelgate tours that last seven days or more. Take three tours and save two.",
        button: "Contact Us",
        classNameTitle: "",
        classNameTitle2: "font-noraml lg:text-lg  not-italic",
        classNameDescription: "",
        classNameButton: "",
    },
    {
        image: "",
        title: "Multi tour Discount",
        title2: "Save 2.5%",
        description: "Save money by booking two Travelgate tours that last seven days or more. Take three tours and save two.",
        button: "Contact Us",
        classNameTitle: "",
        classNameTitle2: "font-noraml lg:text-lg  not-italic",
        classNameDescription: "",
        classNameButton: "",
    },
    {
        image: "",
        title: "Multi tour Discount",
        title2: "Save 2.5%",
        description: "Save money by booking two Travelgate tours that last seven days or more. Take three tours and save two.",
        button: "Contact Us",
        classNameTitle: "",
        classNameTitle2: "font-noraml lg:text-lg  not-italic",
        classNameDescription: "",
        classNameButton: "",
    },
    {
        image: "",
        title: "Multi tour Discount",
        title2: "Save 2.5%",
        description: "Save money by booking two Travelgate tours that last seven days or more. Take three tours and save two.",
        button: "Contact Us",
        classNameTitle: "",
        classNameTitle2: "font-noraml lg:text-lg  not-italic",
        classNameDescription: "",
        classNameButton: "",
    }
]

export default function page() {
    const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

    const reviews = [
        {
            id: 1,
            author: "numpy264",
            location: "Hong Kong, China",
            date: "April 2025",
            rating: 5,
            title: "Camellia Hills just became my new favorite hotel",
            content: "Camellia Hills may have just become my favorite hotel I think I've ever stayed in. The location, after a bumpy and windy drive in, is absolutely breathtaking. The property itself is of a high, high standard. The staff are fantastic and accommodating. The food, amazing. It reminded me",
        },
        {
            id: 2,
            author: "numpy264",
            location: "Hong Kong, China",
            date: "April 2025",
            rating: 5,
            title: "Perfection!",
            content: "This is an absolute gem of a hotel! I could not recommend it more! It is peaceful, ridiculously beautiful and with fantastic food and service. We stayed for three nights in the Dicoya Suite, as a family of four. The view from our room was unbelievable and we all slept very well. We",
        },
        {
            id: 3,
            author: "numpy264",
            location: "Hong Kong, China",
            date: "April 2025",
            rating: 5,
            title: "Dont be on a diet",
            content: "Now this place is ridiculous in the best possible way. From the moment you arrive, you feel like a multi-millionaire. You have an enormous private home, perched on a hillside all to yourself, with breathtaking views in every direction. Everything about it screams luxury. The Now this place is ridiculous in the best possible way. From the moment you arrive, you feel like a multi-millionaire. You have an enormous private home",
        },
    ];

    const ratingData = [
        { label: "Excellent", count: 4 },
        { label: "Very good", count: 100 },
        { label: "Average", count: 30 },
        { label: "Poor", count: 0 },
        { label: "Terrible", count: 0 },
    ];

    return (
        <div className='w-full py-[100px]'>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 1</h1>
                <Section1
                    title="Find your ideal trip"
                    description="
                        TravelGate will help you find your ideal trip whether your travel is family exploring Sri Lanka or an adventurous solo trip. With more than 50 all-inclusive excursions, your choices span the misty heights of Ella to visiting historic towns like Anuradhapura
                        
                        <br/>
                        <br/>
                        
                        TravelGate enjoys all kinds of travel, thus we will find the ideal trip plan for you whether your preferred destination is a thrilling safari in Yala National Park or a laid-back golden beach in Mirissa. Enjoy hiking? Explore the picturesque paths found on Adam's Peak or Horton Plains. Dreaming of a celebration escape? Celebrate with our unique holiday trips highlighting the rich culture and verdant scenery of Sri Lanka. Your travel theme will not matter; you will find real connections to the people and locations that define Sri Lanka as unforgettable. Of course, you will also always travel effortlessly—because we handle everything."
                    button=""
                    titleClassName=""
                    descriptionClassName=""
                    buttonClassName=""
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 2</h1>
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

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 3</h1>
                <Section3
                    title="Why TravelGate is Your Trusted Travel Partner"
                    description1={`From curated cultural tours to private coastal retreats, our travel specialists craft itineraries that reflect your pace and passions.Experience Sri Lanka through authentic encounters, boutique stays, and seamless logistics handled end-to-end.`}
                    description2={`Unsure where to start? Tell us about your dream getaway and we'll pair expert planning with 24/7 support so every moment feels effortless.`}
                    button="Plan My Journey"
                    buttonLink="/contact"
                    titleClassName=""
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 4</h1>
                <Section4
                    title="Included In Your Tour"
                    data={[
                        "Discover the creative path, inspirations, and great influence Sri Lanka's most eminent architect made on sustainable architecture all around by walking through his life and works.",
                        "Encounter the artistic genius of Bawa's closest friends, Barbara Sansoni, Minette de Silva, and Ena de Silva, who used batik, textiles, and innovative architecture to help to define Sri Lanka's landscape. Their contributions deepen this immersive trip.",
                        "Find out Bawa's personal haven where tropical modernism exists everywhere. Discover the house where his great architectural ideas came to life from its peaceful courtyard to well chosen interior design.",
                        "Look at how Bawa combined architecture with environment in Colombo's famous sites. Discover sustainability at its best in every design element from the calm Seema Malaka Temple to the vibrant Gallery Café.",
                    ]}
                    colsLg="2"
                    colsMd="2"
                    colsSm="1"
                    titleClassName=""
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 5</h1>
                <Section5
                    image="assets/images/by-destination.png"
                    description="Experience the finest in TGT’s Collection! ranging from Ultimate Luxury to Comfort. Discover carefully selected boutique hotels, villas, and luxurious accommodations throughout Asia, designed for unforgettable experiences of luxury."
                    button='Search Accommodation'
                    searchIcon="assets/icons/search-white.svg"
                    descriptionClassName=""
                />
            </div>
            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 6</h1>
                <Section6
                    data={section6Data}
                    title="Your advantages of booking with Travel Gate"
                    titleClassName=""
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 7</h1>
                <Section7
                    data={section7Data}
                    title="Welcome to Premium Touring"
                    description=""
                    bgColor=""
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 8</h1>
                <Section8
                    data={section8Data}
                    title="Sri Lanka experiences with Travelgate"
                    description="Travelgate takes you deep into the heart of each destination. Be My Guest allows you to interact with locals, whereas MAKE TRAVEL RESPONSIBLE® Experiences allow you to positively impact communities. Plus, on many tours, you will spend the night in Stays with Stories accommodations, which have stories just as fascinating as the locations you visit. Here are a few of the unforgettable experiences on a Travelgate Sri Lanka tour."
                    bgColor1="bg-[#305A7A]"
                    bgColor2="bg-[#CBE8FF]"
                    button="Learn More About Experiences"
                    classNameTitle=""
                    classNameDescription=""
                    classNameButton=""
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 9</h1>
                <Section9
                    data={section9Data}
                    title="What to Know Before You Travel to Sri Lanka"
                    classNameTitle=""
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 10</h1>
                <Section10
                    data={section10Data}
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 11</h1>
                <Section11
                    data={section11Data}
                    title="All Asia Destinations"
                    classNameTitle=""
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 12</h1>
                <Section12 />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 13</h1>
                <Section13
                    data={section13Data}
                    title="Your best Sri Lanka tour starts here"
                    description="Your best place to easily arrange and book Sri Lanka holidays."
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>
            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 14</h1>
                <Section14
                    data={section14Data}
                    title1="Classic holidays inspiration"
                    title2="Sacred experiences, ancient traditions & local artisans"
                    description="Explore Sri Lanka's sacred temples, rich traditions, and skilled artisans. Enjoy immersive experiences designed to connect you with the island's enchanting heritage, ranging from spiritual serenity to cultural wonders."
                    bgColor1="bg-myred"
                    bgColor2="bg-[#F4D7DB]"
                    button=""
                    classNameTitle1=""
                    classNameTitle2=""
                    classNameDescription=""
                    classNameButton=""
                />
            </div>
            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 15</h1>
                <Section15
                    title="The best local culture unlocked for you"
                    description="Whether you're admiring Sri Lanka's breathtaking scenery or relaxing in a quaint, historic tea lounge, you'll feel a new sense of calm and ease. Slow Holidays - where the adventure is as rewarding as the destination itself."
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 16</h1>
                <Section16
                    data={section16Data}
                    title="All you need to know about Classic Tours"
                />
            </div>
            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 17</h1>
                <Section17
                    title="Meet your hosts"
                    description="You'll find out pretty quickly that it's really the people and the stories that make Be My Guest such a unique experience. With over 100 experiences that offer a sneak peek into the stories and memories you'll cherish long after your tour tour has ended."
                    videoId="nxWNyTiE7J0"
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 18</h1>
                <Section18
                    title="Looking for inspiration?"
                    button="View All Ways to Travel"
                    classNameButton=""
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 19</h1>
                <Section19 />
            </div>


            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 20</h1>
                <Section20
                    data={section20Data}
                    partner1="Partner 1"
                    partner2="Partner 2"
                    partner3="Partner 3"
                    partner4="Partner 4"
                    partner1Logo="assets/images/trusted-partners/partner1.svg"
                    partner2Logo="assets/images/trusted-partners/partner2.svg"
                    partner3Logo="assets/images/trusted-partners/partner3.svg"
                    partner4Logo="assets/images/trusted-partners/partner4.svg"
                    title="Partner Title"
                    description="Partner Description"
                    descriptionClassName=""
                    titleClassName=""
                />
            </div>


            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 21</h1>
                <Section21 data={section21Data} />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 22</h1>
                <Section22 data={section22Data1} />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 23</h1>
                <Section23 data={section22Data1} search={false} />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 24</h1>
                <Section24
                    data={section24Data1}
                    title1=""
                    title2="Experience Sri Lanka Through Their Eyes"
                    description="Connect with passionate locals who know every hidden gem and cultural secret"
                    bgColor1="bg-[#0b5d56]"
                    bgColor2="bg-bggray4"
                    button="View All Experts"
                    classNameTitle1=""
                    classNameTitle2=""
                    classNameDescription=""
                    classNameButton=""
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 25</h1>
                <Section25
                    data={section25Data1}
                    title1=""
                    title2="Here's what our guests have to say about our tours"
                    description="Discover the Travelgate difference by exploring our iconic destinations, unique experiences, and local secrets. Exactly like these guests."
                    bgColor1="bg-[#0b5d56]"
                    bgColor2="bg-bggray4"
                    button="View All Experts"
                    classNameTitle1=""
                    classNameTitle2=""
                    classNameDescription=""
                    classNameButton=""
                />
            </div>

            <div className='mt-12 w-full'>
                <h1 className='mb-4 text-center'>Section 26</h1>
                <Section26></Section26>
            </div>

            <div className='w-full mt-12'>
                <h1 className='text-center mb-4'>Section 27</h1>
                <Section27
                    cards={section27Data}
                    title="domains of animal welfare"
                    description="The Five Domains of Animal Welfare are a set of criteria that are recognised all over the world and primarily concentrate on the mental state of the animal. If these conditions are satisfied, then the animal is able to enjoy the quality of life that it is entitled to."
                    bgColor1=""
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            <div className='w-full mt-12'>
                <h1 className='text-center mb-4'>Section 28</h1>
                <Section28
                    cards={section28Data}
                    title="Here are our 11 HWR goals and commitment"
                    description=""
                    bgColor1=""
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            <div className='w-full mt-12'>
                <h1 className='text-center mb-4'>Section 29</h1>
                <Section29 reviews={reviews} ratingData={ratingData} expandedReviews={expandedReviews} setExpandedReviews={setExpandedReviews} />
            </div>
        </div>
    )
}
