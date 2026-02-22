import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero2 from '@/components/comen/hero/Hero2'
import Section3 from '@/components/comen/section/Section3'
import Title2 from '@/components/comen/title/Title2'
import { Button } from '@/components/comen/button'
import Card19Carousel1 from '@/components/comen/carousel/Card19Carousel1'
import Card3Carousel3 from '@/components/comen/carousel/Card3Carousel3'
import Card3Carousel1 from '@/components/comen/carousel/Card3Carousel1'
import Card23 from '@/components/comen/card/Card23'
import Section7 from '@/components/comen/section/Section7'
import { TOUR_DATA } from '@/data/tours.data'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import Card1Carousel1 from '@/components/comen/carousel/Card1Carousel1'
import Section19 from '@/components/comen/section/Section19'

export default function page() {

    const card19Carousel1Data1 = [
        {
            image: "assets/images/travel-styles-signature/what-to-expect-1.png",
            title: "SIGNATURE",
            subTitle: "Experiences",
            description: "Luxury trips pack in more experiences than any other style, featuring included cultural and culinary activities. The pace is relaxed and refined-less rushing, more soaking it all in through immersive encounters that reveal authentic local traditions.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/travel-styles-signature/what-to-expect-2.png",
            title: "MORE",
            subTitle: "Meals",
            description: "Luxury trips pack in more experiences than any other style, featuring included cultural and culinary activities. The pace is relaxed and refined-less rushing, more soaking it all in through immersive encounters that reveal authentic local traditions.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/travel-styles-signature/what-to-expect-3.png",
            title: "RELAXED",
            subTitle: "Starts",
            description: "Luxury trips pack in more experiences than any other style, featuring included cultural and culinary activities. The pace is relaxed and refined-less rushing, more soaking it all in through immersive encounters that reveal authentic local traditions.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },

    ]

    const card3Carousel3Data1 = [
        {
            type: "3",
            image: "assets/images/travel-styles-signature/where-you-stay-1.png",
            title: "Langdale",
            title2: "Upper Lake, Nuwara Eliya, Sri Lanka",
            description: "This sophisticated hill country villa features contemporary design with traditional elements and pristine lake views that reflect mountain clouds. Personalized hiking experiences reveal hidden waterfalls and endemic birds, while spa treatments use mountain herbs that grow wild. It's luxury accommodation where stunning natural beauty meets modern comfort in perfect harmony. Stay",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/travel-styles-signature/where-you-stay-2.png",
            title: "W15 Lake Gregory",
            title2: "Lake Drive, Nuwara Eliya, Sri Lanka",
            description: "An exquisite master suite and spacious rooms make this lakeside lodge a luxurious and comfortable choice. Architecturally significant spaces blend historical design with modern styling and premium amenities, creating an exclusive hill country sanctuary for discerning travellers seeking serenity just steps from Lake Gregory and Galway Forest Reserve. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data1 = [
        {
            type: "3",
            image: "assets/images/travel-styles-luxury/gastronomic-variety-1.png",
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
            image: "assets/images/travel-styles-luxury/gastronomic-variety-2.png",
            title: "Kalkudah Beach House",
            title2: "Galle, Sri Lanka",
            description: "Kalkudah Beach House has amazing ocean to table dining experiences that show off the lively food of Sri Lanka's east coast. Local fishermen bring in fresh seafood every day, and they drop it off right in front of the hotel, Guests enjoy delicious crab and perfectly grilled reef fish, which are made with fresh, local ingredients and served with fresh salads and fragrant Sri Lankan curries. You can have a laid-back picnic on the beach or a fancy dinner by the pool with candles. Experience on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/travel-styles-luxury/gastronomic-variety-3.png",
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
            image: "assets/images/travel-styles-luxury/gastronomic-variety-2.png",
            title: "Kalkudah Beach House",
            title2: "Galle, Sri Lanka",
            description: "Kalkudah Beach House has amazing ocean to table dining experiences that show off the lively food of Sri Lanka's east coast. Local fishermen bring in fresh seafood every day, and they drop it off right in front of the hotel, Guests enjoy delicious crab and perfectly grilled reef fish, which are made with fresh, local ingredients and served with fresh salads and fragrant Sri Lankan curries. You can have a laid-back picnic on the beach or a fancy dinner by the pool with candles. Experience on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const premiumTouring = [
        {
            image: "assets/images/sri-lanka/premium-touring-1.png",
            title: "MAKE TRAVEL RESPONSIBLE ®",
            description: "Connecting you with and supporting local communities.",
            linkLabel: "Find out more",
            linkHref: "#",
        },
        {
            image: "assets/images/sri-lanka/premium-touring-2.png",
            title: "BE MY GUEST",
            description: "Dining is an experience on our tours, with great food at the heart of every journey.",
            linkLabel: "Find out more",
            linkHref: "#",
        },
        {
            image: "assets/images/sri-lanka/premium-touring-3.png",
            title: "PERSONALISE YOUR TOUR",
            description: "Connecting you with and supporting local communities.",
            linkLabel: "Find out more",
            linkHref: "#",
        },
        {
            image: "assets/images/sri-lanka/premium-touring-4.png",
            title: "STAYS WITH TALES",
            description: "Connecting you with and supporting local communities.",
            linkLabel: "Find out more",
            linkHref: "#",
        },
    ];

    const tourCardCarousel1Data = TOUR_DATA;

    const card1Carousel1Data = [
        {
            image: "assets/images/travel-styles-signature/travel-styles-1.png",
            title: "Luxury",
            description: "Unforgettable, private, truly extraodinary",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/travel-styles-signature/travel-styles-2.png",
            title: "Premium",
            description: "The Original real life adventure",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/travel-styles-signature/travel-styles-3.png",
            title: "Comfort",
            description: "Adventure awaits, just step outside",
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
                    { label: "Ways To Travel", href: "/" },
                    { label: "Signature" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='mx-auto w-full'>
                <Hero2
                    image="assets/images/travel-styles-signature/hero.jpg"
                    title="Signature"
                    description="Explore travel's softer side"
                    type={1}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="lg:!text-[24px] md:!text-[20px] !text-[16px] !font-semibold font-figtree "
                />
            </div>

            {/* Connect with locals */}
            <div className='w-full mt-12'>
                <Section3
                    title="Where luxury meets authentic moments"
                    description1=""
                    description2={`There is a story waiting to be told on every journey, and our Signature collection is where those stories come to life. We have chosen unique experiences that capture the essence of each place, bringing you closer to what makes it truly special. These trips are for people who want more than just the usual. They are places where meaningful connections happen naturally and moments turn into memories that stay with you long after your trip is over.`}
                    button=""
                    buttonLink=""
                    titleClassName=""
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            <div className='my-container mt-12'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center'>
                    <div className='order-2 md:order-1 w-full lg:pr-24 md:pr-12 pr-0 md:mt-0 mt-8'>
                        <div className='w-full'>
                            <Title2 title="What is Signature" className='text-center'></Title2>

                            <div className=''>
                                <p
                                    className={`mt-2 description-2 !font-normal whitespace-pre-line text-center`}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            "Finding the right balance between adventure and comfort is what our Signature trips are all about. It's like travel that feels just right, not too fancy, but definitely special. These carefully planned trips are meant to make travel easier by giving you more time to enjoy where you are. When it matters, you'll have private transport, stay in boutique luxury hotels with real personality, and enjoy meals that highlight local flavours. Each property makes you feel like family by going the extra mile. It's about enjoying real experiences while being more comfortable so you can focus on making memories."
                                    }}
                                ></p>
                            </div>

                            <div className='w-full flex justify-center mt-4'>
                                <Button variant="default" size={"lg"} className="font-bold" >Find Your Trip</Button>
                            </div>

                        </div>

                    </div>
                    <div className='w-full order-1 md:order-2'>
                        <img src="assets/images/travel-styles-signature/signature-travel.png" alt="" className='w-full aspect-video object-cover rounded-md' />
                    </div>
                </div>
            </div>

            {/* What to expect */}
            <div className='my-container mt-12'>
                <Card19Carousel1
                    cards={card19Carousel1Data1}
                    title="What to expect"
                    description=""
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            <div className='w-full mt-12'>
                <Card3Carousel3
                    cards={card3Carousel3Data1}
                    title="Where you'll stay"
                    description="Your stay in carefully chosen Ultimate Luxury boutique properties keeps you deeply connected to the local culture and community. These luxury hotels combine high-end amenities with real charm, Feature Stays, on the other hand, create unique experiences that help local communities. Each property has its own story to tell, which makes for immersive escapes that are more than just regular luxury travel."
                    bgColor1="bg-[#E4EAF6]"
                    classNameTitle=""
                    classNameDescription=""
                    size0={1}
                    size768={2}
                    size1024={2}
                    size1280={2}
                    minSize={2}
                />

                <div className='my-container flex items-center justify-center mt-4'>
                    <Button variant="default" size={"lg"} className={`font-bold`} >See More Stays with Tales</Button>
                </div>
            </div>

            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data1}
                    title="Gastronomic variety"
                    description="Your luxury stays show off amazing culinary traditions through award winning chefs who make amazing meals just for you. Imagine classic spiced dishes full of local flavours and modern fusion cuisine that is always changing, all made with the best seasonal ingredients in stunning settings."
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* testimonial 1 */}
            <div className='w-full mt-12 bg-[#EBE7EB] py-12'>
                <div className='my-container'>
                    <Card23
                        image="assets/images/travel-styles-luxury/testimonial-1.png"
                        title="“We felt grateful”"
                        feedback="We actually lived like locals, tasted authentic curries, and learned about their traditions. Travel opens your eyes to new ways of life. We enjoyed every moment with our group exploring temples and beaches and returned home with precious memories of this incredible journey."
                        feedbackAuthor="Jacob T"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>

            <div className='mt-12 my-container'>
                <Section7
                    data={premiumTouring}
                    title="Welcome to Luxury Touring"
                    description=""
                    bgColor=""
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            <div className='w-full mt-12'>
                <div className='my-container'>
                    <TourCardCarousel1
                        data={tourCardCarousel1Data}
                        title="Top Luxury Tours"
                        description=""
                        button="See More Trips"
                        classNameButton=""
                        classNameTitle=""
                        classNameDescription="!text-sm"
                    />
                </div>
            </div>

            {/* More one-of-a kind experiences */}
            <div className='w-full mt-12'>
                <Card1Carousel1
                    cards={card1Carousel1Data}
                    title="Explore other  travel styles"
                    description=""
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
