"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Title2 from '@/components/comen/title/Title2'
import { Button } from '@/components/comen/button'
import Card32 from '@/components/comen/card/Card32'
import Card33 from '@/components/comen/card/Card33'
import Card34 from '@/components/comen/card/Card34'
import Card35 from '@/components/comen/card/Card35'
import Card20Carousel1 from '@/components/comen/carousel/Card20Carousel1'
import Card29Carousel1 from '@/components/comen/carousel/Card29Carousel1'
import Section18 from '@/components/comen/section/Section18'
import Card30 from '@/components/comen/card/Card30'
import Card18Carousel1 from '@/components/comen/carousel/Card18Carousel1'
import Section6 from '@/components/comen/section/Section6'
import { TOUR_DATA } from '@/data/tours.data'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import Section26 from '@/components/comen/section/Section26'
import Section19 from '@/components/comen/section/Section19'

export default function page() {

    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [isMuted, setIsMuted] = useState(true)

    useEffect(() => {
        if (!videoRef.current) return
        videoRef.current.muted = isMuted

        if (!isMuted) {
            videoRef.current.play().catch(() => {
                setIsMuted(true)
            })
        }
    }, [isMuted])

    const toggleMute = () => {
        setIsMuted((prev) => !prev)
    }

    const card34Data1 = [
        {
            id: 1,
            number: 1,
            image: "assets/images/about-us/facilities-1.png",
            title: "Magnificent Stays",
            description: "High end hotels that take care of all your needs. Great places with glamorous properties. To find excellence, you need great service. Partner hotels and one of a kind boutique hotels for luxurious stays.",
            icon: "assets/icons/bed-red.svg",
            linkText: "Find Out More",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            id: 2,
            number: 1,
            image: "assets/images/about-us/facilities-2.png",
            title: "Magnificent Stays",
            description: "High end hotels that take care of all your needs. Great places with glamorous properties. To find excellence, you need great service. Partner hotels and one of a kind boutique hotels for luxurious stays.",
            icon: "assets/icons/plate-red.png",
            linkText: "Find Out More",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            id: 3,
            number: 1,
            image: "assets/images/about-us/facilities-3.png",
            title: "Magnificent Stays",
            description: "High end hotels that take care of all your needs. Great places with glamorous properties. To find excellence, you need great service. Partner hotels and one of a kind boutique hotels for luxurious stays.",
            icon: "assets/icons/map-red.svg",
            linkText: "Find Out More",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        }
    ];

    const card35Data1 = [
        {
            id: 1,
            title: "100% Financial Protection",
            description: "Book in the confidence your money is 100% safe. All Travelgate holidays are fully bonded by Sri Lanka's top tourism authority (SLTDA). So go ahead and plan that unmatched, once in a lifetime trip. We are here for you.",
            icon: "assets/icons/check-box.svg",
            classNameTitle: "",
            classNameDescription: "",
        },
        {
            id: 2,
            title: "Guaranteed Price Promise",
            description: "Book early, save smart. We never do last minute fire sales because your dream trip shouldn't feel like a rushed bargain bin. The earlier you plan with us, the sweeter the deal you'll get. Simple",
            icon: "assets/icons/check-box.svg",
            classNameTitle: "",
            classNameDescription: "",
        },
        {
            id: 3,
            title: "Freedom To Evolve",
            description: "Pay 20% to start. Then tweak, upgrade, or totally reimagine your holiday, free of charge until your balance is due. Fancy swapping mountains for beaches? Adding a catamaran? Your trip, your rules. No fees. Ever.",
            icon: "assets/icons/check-box.svg",
            classNameTitle: "",
            classNameDescription: "",
        }
    ];

    const reviewData = [
        {
            title: "The places we visited were well chosen",
            rating: 4.2,
            content: "“You can really see Sri Lanka's beauty with Travelgate's Ultimate Luxury boutique hotels. We picked each stay with a focus on elegance and comfort. 'The service was exceptional, everything was organized seamlessly, and the experiences were unforgettable, making this journey truly remarkable.'",
            feedbackAuthor: "Franziska Dietrich",
            link: "#",
            linkText: "Classic Sri Lanka",
            classNameTitle: "",
            classNameDescription: "",
            classNameAuthor: "",
            classNameLink: ""
        },
        {
            title: "An experience of a lifetime",
            rating: 5,
            content: "'Staying in TGT's fantastic boutique hotels while exploring rich culture was an unforgettable experience. Every retreat had a touch of luxury, great locations, and excellent service. The guides and staff were fantastic, making this adventure feel luxurious and something I'll never forget.'",
            feedbackAuthor: "Grace Campbell",
            link: "#",
            linkText: "Boutique Sri Lanka",
            classNameTitle: "",
            classNameDescription: "",
            classNameAuthor: "",
            classNameLink: ""
        },
        {
            title: "The places we visited were well chosen",
            rating: 4.2,
            content: "“You can really see Sri Lanka's beauty with Travelgate's Ultimate Luxury boutique hotels. We picked each stay with a focus on elegance and comfort. 'The service was exceptional, everything was organized seamlessly, and the experiences were unforgettable, making this journey truly remarkable.'",
            feedbackAuthor: "Franziska Dietrich",
            link: "#",
            linkText: "Classic Sri Lanka",
            classNameTitle: "",
            classNameDescription: "",
            classNameAuthor: "",
            classNameLink: ""
        },
        {
            title: "An experience of a lifetime",
            rating: 5,
            content: "'Staying in TGT's fantastic boutique hotels while exploring rich culture was an unforgettable experience. Every retreat had a touch of luxury, great locations, and excellent service. The guides and staff were fantastic, making this adventure feel luxurious and something I'll never forget.'",
            feedbackAuthor: "Grace Campbell",
            link: "#",
            linkText: "Boutique Sri Lanka",
            classNameTitle: "",
            classNameDescription: "",
            classNameAuthor: "",
            classNameLink: ""
        },
    ]

    const card29Carousel1 = [
        {
            image: "assets/images/truly-bespoke/experience-1.png",
            title: "MAKE TRAVEL RESPONSIBLE® Experiences",
            description: "conscious travel experience that supports one or more of the United Nations Sustainable Development Goals (SDGS). Look out for yours",
            link: "#",
            linkText: "Find out more",
            classNameTitle: "",
            classNameDescription: "",
        },
        {
            image: "assets/images/truly-bespoke/experience-2.png",
            title: "Net-zero by 2050",
            description: "Travel knowing out 40point climate action plan will ensure net-zero greenhouse gas emissions by 2050.",
            link: "#",
            linkText: "Find out more",
            classNameTitle: "",
            classNameDescription: "",
        },
        {
            image: "assets/images/truly-bespoke/experience-3.png",
            title: "Support Local",
            description: "Your tour directly support local communities by visiting family-run businesses, UNESCO sites and places cultural significance.",
            link: "#",
            linkText: "Find out more",
            classNameTitle: "",
            classNameDescription: "",
        },
        {
            image: "assets/images/truly-bespoke/experience-2.png",
            title: "Net-zero by 2050",
            description: "Travel knowing out 40point climate action plan will ensure net-zero greenhouse gas emissions by 2050.",
            link: "#",
            linkText: "Find out more",
            classNameTitle: "",
            classNameDescription: "",
        },
    ]

    const readyToGetGoing = [
        {
            id: 1,
            image: "assets/images/ways-to-travel/offers-1.png",
            title: "Get inspiring contect sent to your inbox",
            title2: "",
            description: "",
            button: "Sign Up",
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            classNameButton: "",
        },
        {
            id: 2,
            image: "assets/images/ways-to-travel/offers-2.png",
            title: "Get brochure and get ready to start  daydreaming",
            title2: "",
            description: "",
            button: "Sign Up",
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            classNameButton: "",
        },
        {
            id: 3,
            image: "assets/images/ways-to-travel/offers-3.png",
            title: "Unlock the ideal tour for you",
            title2: "",
            description: "",
            button: "Sign Up",
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            classNameButton: "",
        },
    ]

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

    const tourCardCarousel1Data = TOUR_DATA;

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full px-4 py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "About Us" },
                ]} />
            </div>

            <div className='w-full relative'>
                {/* image */}
                <div className='w-full relative'>
                    <div className="w-full">
                        <video
                            className="w-full h-auto object-cover filter brightness-[.8]"
                            id="video-bg"
                            autoPlay
                            loop
                            muted
                            playsInline
                            ref={videoRef}
                        >
                            <source src="/assets/images/about-us/hero.mp4" type="video/mp4" />
                        </video>
                    </div>
                    {/* mute button */}
                    <div className='absolute right-12 bottom-12'>
                        <button
                            type='button'
                            onClick={toggleMute}
                            className='flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-sm font-semibold uppercase tracking-wide text-mygreen transition hover:bg-white'
                            aria-pressed={!isMuted}
                        >
                            <span className='sr-only'>{isMuted ? 'Unmute audio' : 'Mute audio'}</span>
                            <Image
                                src={isMuted ? '/assets/icons/ummute.svg' : '/assets/icons/mute.svg'}
                                alt=""
                                width={18}
                                height={18}
                                aria-hidden='true'
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-full'>
                <div className='w-full md:grid md:grid-cols-12 px-4 mt-12'>
                    <div className={`col-span-8 col-start-3 `}>
                        <Title2 title="Ahead of you are moments that truly matter" className={`text-center mb-4 `} />

                        <p className={`mt-2 description text-center !font-bold whitespace-pre-line`} dangerouslySetInnerHTML={{ __html: "TravelGate crafts journeys around the moments that change you, because travel should never feel mass produced." }}></p>

                        <p className={`mt-2 description text-center font-sourceSerif whitespace-pre-line`} dangerouslySetInnerHTML={{ __html: "Our personalised approach will change the way you travel. Since our founding, many brave people have found out what makes Travelgate special. You will visit carefully chosen places, see amazing landmarks, and have access to unique cultural experiences. All of this will be taken care of by our dedicated team. You'll also learn about MAKE TRAVEL RESPONSIBLE and how to make sure your travels help local communities in a real way. Make meaningful connections, travel with a purpose, and make memories that will last a lifetime." }}></p>
                    </div>
                </div>

                <div className='w-full flex items-center justify-center mt-4'>
                    <Button variant="default" size={"lg"} className={`font-bold`} >Search Tours</Button>
                </div>
            </div>

            <div className='my-container mt-12'>
                <Card32
                    image="assets/images/about-us/why-choose-us.png"
                    title="Why choose us?"
                    description="Meet our lively makers and creators, as well as the local storytellers who love to tell you about the best things about these one of a kind places. Enjoy unique food experiences that will delight your senses, and let your expert guide show you the famous sights that will leave you in awe. Your trip will be expertly planned, with every detail taken care of, so that your adventure goes smoothly, without stress, and at the right time. We have more than 10 years of experience showcasing these amazing places, and we've learned a lot and developed a lot of passion that lets us make your trip unforgettable."
                    button="Find Your Trip"
                    buttonVariant="default"
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            <div className='my-container mt-12'>
                <Card33
                    image="assets/images/about-us/better-place.png"
                    title="Making the world a better place"
                    description="We are all about responsible travel because being mindful on a trip changes both the traveller and the destination. For TGT, it means creating unique experiences that respect places, give communities power, and protect wildlife through our sustainability strategy, Amity Gate. We don't just leave smaller footprints; we also leave positive legacies. Every itinerary is made to help travellers connect with each other, not to consume. This planned approach makes sure that your trips help protect fragile cultures and ecosystems while also making memories that last. Because journeys that change you, like those we craft, should make the world a better place, not take advantage of it. Travel with purpose. Return changed."
                    button="Learn More"
                    buttonVariant="default"
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* facilities */}
            <div className='w-full mt-12'>
                <div className='mt-8 my-container'>
                    <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
                        {card34Data1.map((data, index) => (
                            <div key={`${data.id}`} className="w-full lg:w-[calc(((100%-(16px*2))/3))] md:w-[calc(((100%-(16px*1))/2))]">
                                <Card34
                                    image={data.image}
                                    title={data.title}
                                    description={data.description}
                                    icon={data.icon}
                                    linkText={data.linkText}
                                    link={data.link}
                                    classNameTitle={data.classNameTitle}
                                    classNameDescription={data.classNameDescription}
                                    classNameLink={data.classNameLink}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Travel With Confidence */}
            <div className='w-full mt-12'>
                <Title2 title='Travel With Confidence' className='text-center italic'></Title2>
                <div className='mt-4 my-container'>
                    <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
                        {card35Data1.map((data) => (
                            <div key={data.id} className="w-full lg:w-[calc(((100%-(16px*2))/3))] md:w-[calc(((100%-(16px*1))/2))]">
                                <Card35
                                    title={data.title}
                                    description={data.description}
                                    icon={data.icon}
                                    classNameTitle={data.classNameTitle}
                                    classNameDescription={data.classNameDescription}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Don't take our word for it, see what our travellers say */}
            <div className='w-full mt-12 bg-bggray5 py-12'>
                <div className='my-container'>
                    <Card20Carousel1
                        cards={reviewData}
                        title="Don't take our word for it, see what our travellers say"
                        button="Help me plan my trip"
                        classNameTitle=""
                        classNameButton=""
                        classNameDescription=""
                    />
                </div>
            </div>

            <div className='w-full mt-12'>
                <Card29Carousel1
                    cards={card29Carousel1}
                    title="WE MAKE TRAVEL RESPONSIBLE "
                    trademark="®"
                    description="You’ll make positive impact to people, planet and wildlife throughout this tour"
                    bgColor1="bg-[#125A55]"
                    bgColor2="bg-[#E7EFEE]"
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
                <Section18
                    title="Looking for inspiration?"
                    button="View All Ways to Travel"
                    classNameButton=""
                />
            </div>

            {/* Ready to get going? */}
            <div className='w-full mt-12'>
                <div className='my-container'>
                    <Title2 title='' className='text-center'></Title2>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 mx-auto">
                        {readyToGetGoing.map((item) => (
                            <div key={item.id} className="w-full lg:w-[calc(((100%-(16px*2))/3))] md:w-[calc(((100%-(16px*1))/2))]">
                                <Card30
                                    image={item.image}
                                    title={item.title}
                                    title2={item.title2}
                                    description={item.description}
                                    button={item.button}
                                    classNameTitle={item.classNameTitle}
                                    classNameTitle2={item.classNameTitle2}
                                    classNameDescription={item.classNameDescription}
                                    classNameButton={item.classNameButton}
                                />
                            </div>
                        ))}
                    </div>
                </div>
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

            <div className='w-full mt-12'>
                <div className='my-container'>
                    <TourCardCarousel1
                        data={tourCardCarousel1Data}
                        title="Every trip, taken care of with ease"
                        description="Where will you choose to go? Book today to unlock the best experiences."
                        button="See More Trips"
                        classNameButton=""
                        classNameTitle=""
                        classNameDescription="!text-sm"
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
