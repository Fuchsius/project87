import React from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero2 from '@/components/comen/hero/Hero2'
import Section3 from '@/components/comen/section/Section3'
import { Button } from '@/components/comen/button'
import Title2 from '@/components/comen/title/Title2'
import Section19 from '@/components/comen/section/Section19'
import Card30Carousel1 from '@/components/comen/carousel/Card30Carousel1'
import Card30 from '@/components/comen/card/Card30'
import Section22 from '@/components/comen/section/Section22'
import Card18Carousel1 from '@/components/comen/carousel/Card18Carousel1'
import Section10 from '@/components/comen/section/Section10'

export default function page() {

    const card30Carousel1 = [
        {
            image: "assets/images/travel-deals/discount-1.png",
            title: "Unlock 2026 Travel",
            title2: "",
            description: "Book early with TravelGate Discover Sri Lanka's trending destinations, enjoy best availability and save 10% on tours. Limited time.",
            button: "View Deals",
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/travel-deals/discount-2.png",
            title: "Today's Best Travel Deals",
            title2: "",
            description: "Ready to escape? Today's hottest travel steals are here. Pack your bags and save big time.",
            button: "View Deals",
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/travel-deals/discount-3.png",
            title: "Groups of 9+",
            title2: "",
            description: "If you are a group of nine or more you could benefit from our fantastic savings and offers. Beginning with a further 5% discount per person, or free of charge tickets for bigger bookings.",
            button: "View Deals",
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/travel-deals/discount-4.png",
            title: "Refer Family & Friends",
            title2: "",
            description: "Share the love, earn travel credits. Refer friends to our tours and get. rewarded for spreading wanderlust vibes.",
            button: "View Deals",
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            classNameButton: ""
        }
    ]

    const faq = [
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

    const section22Data1 = [
        {
            question: 'Global Tour Rewards',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.\n\nWe update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.\n\nIf there are ever any changes to your departure, we will contact you.'
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

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='py-2 w-full'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Travel Deals" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='mx-auto w-full'>
                <Hero2
                    image="assets/images/travel-deals/hero.jpg"
                    title="Travel Deals"
                    description="We cover wherever or whenever you decide to travel. Find the top travel 
offers for your next trip right now on trips all around the world."
                    type={1}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="lg:!text-[24px] md:!text-[20px] !text-[16px] font-semibold font-figtree"
                />
            </div>

            {/* Travel with absolute ease */}
            <div className='relative z-10 mt-12 w-full'>
                <Section3
                    title={'Save on your next tour with Travelgate Travel Deals'}
                    description1=""
                    description2={`Travelling is even more fantastic when it comes with savings. From The Big Tour Sale to past guest discounts and our most recent limited-time offers. Travelgate vacation packages offer many ways to save.`}
                    button="Search All Deals"
                    buttonLink=""
                    titleClassName="!not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            <div className='mt-12 w-full'>
                <div className="relative -mt-[140px] card-30-carousel-1">
                    {/* Background (only top half) */}
                    <div className="relative top-[140px] left-0 w-full">
                        <div className={`w-full pt-12 pb-20 bg-[#D29829] -z-10`}>
                            {/* Title */}
                            <div className='my-container'>
                                {/* Title */}
                                <Title2 title="Top offers & discounts" className={`text-center text-white`} />
                            </div>
                        </div>
                        <div className={`relative w-full h-[50px] transparent`}></div>
                    </div>

                    {/* Content container */}
                    <div className='relative mx-auto mt-8 my-container'>
                        <div className="flex flex-wrap gap-4 justify-center mx-auto mt-8">
                            {card30Carousel1.map((card, index) => (
                                <div
                                    key={index}
                                    className="w-full lg:w-[calc(((100%-(16px*3))/4))] md:w-[calc(((100%-(16px*2))/2))]"
                                >
                                    <Card30
                                        image={card.image}
                                        title={card.title}
                                        title2={card.title2}
                                        description={card.description}
                                        button={card.button}
                                        classNameTitle={card.classNameTitle}
                                        classNameTitle2={card.classNameTitle2}
                                        classNameDescription={card.classNameDescription}
                                        classNameButton={card.classNameButton}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Rewards Banner */}
            <div className='mt-12 my-container'>
                <div className="flex relative w-full bg-top bg-cover rounded-md"
                    style={{
                        backgroundImage: "url('/assets/images/travel-deals/rewards-banner.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="flex relative z-10 justify-center items-center px-4 py-6 w-full bg-transparent md:py-16 xl:px-[280px] lg:px-[160px]">
                        <div className='p-8 w-full bg-white rounded-md'>
                            <Title2 title="Year Round Savings" className={`text-center text-textcolor1`} />

                            <h1 className={`mt-4 !text-[#6B6B6B] lg:text-[24px] md:text-[22px] text-lg font-semibold text-center italic font-sourceSerif`}>Discover how you can save every time you tour</h1>

                            <p className="mt-2 text-sm text-center text-textcolor1">TravelGate offers year round benefits, from TGT Tour Rewards savings to group booking discounts.</p>

                            <div className='flex justify-center items-center mt-4'>
                                <Button variant="default" size={"lg"} className={`font-bold`} >Find Out More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className='mt-12 w-full'>
                <div className='my-container'>
                    <Section10
                        data={faq}
                    />
                </div>
            </div>

            <div className='mt-12 w-full'>
                <Section19 />
            </div>
        </div>
    )
}
