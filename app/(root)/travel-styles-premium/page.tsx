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
            image: "assets/images/travel-styles-premium/what-to-expect-1.png",
            title: "PREMIUM",
            subTitle: "Experiences",
            description: "Premium experiences include cultural immersion, culinary discoveries, and gentle adventures, all carefully planned. The pace stays calm and sophisticated, with fewer people rushing around and more meaningful connections.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/travel-styles-premium/what-to-expect-2.png",
            title: "MORE",
            subTitle: "Meals",
            description: "Several meals are included, such as regular breakfasts and carefully planned meals at local restaurants that serve authentic regional dishes. Every meal gives you a taste of the area's food history and traditions.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/travel-styles-premium/what-to-expect-3.png",
            title: "RELAXED",
            subTitle: "Starts",
            description: "Enjoy leisurely mornings with Relaxed Start days, giving you extra time to sleep in or explore at your own pace. Every itinerary includes this feature, ensuring a stress free experience with flexibility to make the most of your journey",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/travel-styles-premium/what-to-expect-2.png",
            title: "MORE",
            subTitle: "Meals",
            description: "Several meals are included, such as regular breakfasts and carefully planned meals at local restaurants that serve authentic regional dishes. Every meal gives you a taste of the area's food history and traditions.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },

    ]

    const card3Carousel3Data1 = [
        {
            type: "3",
            image: "assets/images/travel-styles-premium/where-you-stay-1.png",
            title: "Santani Wellness",
            title2: "Werapitiya Village, Kandy, Sri Lanka",
            description: "The Kandy hills host this award winning wellness retreat with minimalist luxury accommodations, panoramic mountain views, and world class spa facilities. The property's design emphasises nature and offers cutting edge wellness programs and healthy food. Pavilion style rooms are private retreats where guests can reconnect with nature. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/travel-styles-premium/where-you-stay-2.png",
            title: "Earl's Regency Hotel",
            title2: "Tennekumbura Village, Kandy, Sri Lanka",
            description: "This elegant property provides modern luxury and Sri Lankan hospitality on a hilltop overlooking Kandy Lake and the mountains. The spacious rooms and suites have private balconies with stunning views, and multiple restaurants offer diverse dining While near Kandy's cultural attractions, the property's elevated location offers peace and quiet. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/travel-styles-premium/where-you-stay-2.png",
            title: "Earl's Regency Hotel",
            title2: "Tennekumbura Village, Kandy, Sri Lanka",
            description: "This elegant property provides modern luxury and Sri Lankan hospitality on a hilltop overlooking Kandy Lake and the mountains. The spacious rooms and suites have private balconies with stunning views, and multiple restaurants offer diverse dining While near Kandy's cultural attractions, the property's elevated location offers peace and quiet. Stay here on",
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
            image: "assets/images/travel-styles-premium/travel-styles-1.png",
            title: "Luxury",
            description: "Unforgettable, private, truly extraodinary",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/travel-styles-premium/travel-styles-2.png",
            title: "Signature",
            description: "Explore travel’s softer side",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/travel-styles-premium/travel-styles-3.png",
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
                    { label: "Luxury" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='mx-auto w-full'>
                <Hero2
                    image="assets/images/travel-styles-premium/hero.jpg"
                    title="Premium"
                    description="The Original real life adventure"
                    type={1}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="lg:!text-[24px] md:!text-[20px] !text-[16px] font-semibold font-figtree "
                />
            </div>

            {/* Connect with locals */}
            <div className='w-full mt-12'>
                <Section3
                    title="Modern luxury, perfectly in rhythm"
                    description1=""
                    description2={`Premium knows exactly what your rhythm is like at every destination. It's not just about nice rooms or cool amenities, it's also about finding places that make your natural travel style better. Our collection is all about places where the design tells stories, the service feels natural instead of rehearsed, and the space itself makes you feel welcome and encourages you to explore. Premium makes the perfect setting for your adventures, making sure that every moment feels both perfectly planned and wonderfully spontaneous.`}
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
                            <Title2 title="What is Premium" className='text-center'></Title2>

                            <div className=''>
                                <p
                                    className={`mt-2 description-2 !font-normal whitespace-pre-line text-center`}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            "Premium is the sweet spot where modern luxury and real authenticity meet. It's the level that has won hearts since day one. These carefully chosen 4 and 5-star hotels offer a perfect mix of modern comfort and local charm, giving you the right amount of sophistication and soul. You'll find hand picked places to stay that each have their own story to tell. They all have their own charm and comfort, without being stuffy. It's luxury that feels like it's within reach, experiences that feel real, and those little things that make you wonder. So you can really connect with each place and enjoy real hospitality that feels just right."
                                    }}
                                ></p>
                            </div>

                            <div className='w-full flex justify-center mt-4'>
                                <Button variant="default" size={"lg"} className="font-bold" >Find Your Trip</Button>
                            </div>

                        </div>

                    </div>
                    <div className='w-full order-1 md:order-2'>
                        <img src="assets/images/travel-styles-premium/luxury-travel.png" alt="" className='w-full aspect-video object-cover rounded-md' />
                    </div>
                </div>
            </div>

            {/* Our exceptional standards */}
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
                    description="Your stays in carefully chosen Premium accommodations keep you deeply connected to local culture and community. We choose these 4-and 5-star modern luxury properties because they are unique, very comfortable, and offer real experiences. Every hotel has its own story to tell, making for immersive escapes that go beyond regular luxury travel and help the communities where they are located."
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
