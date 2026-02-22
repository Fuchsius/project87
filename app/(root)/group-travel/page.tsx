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
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import { TOUR_DATA } from '@/data/tours.data'

export default function page() {

    const tourCardCarousel1Data = TOUR_DATA;

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
            <div className=' py-2 w-full'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Group Travel" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='mx-auto w-full'>
                <Hero2
                    image="assets/images/group-travel/hero.jpg"
                    title="Group Travel"
                    description="Savings for groups of nine or more"
                    type={2}
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
                    description2={`If you are a travel group of 9 or more looking to enjoy one of our 50+ current trips, take advantage of our excellent savings and benefits. Starting with an additional 5% discount per person or free seats when booking larger groups, we have the perfect trip and offer for you. For more information, please call or contact one of our dedicated Group Travel Specialists.`}
                    button="Search Trips"
                    buttonLink=""
                    titleClassName="!not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            <div className='mt-12 w-full'>
                <div className='my-container'>
                    <TourCardCarousel1
                        data={tourCardCarousel1Data}
                        title="Our most loved trips for groups of family and friends"
                        description=""
                        button="See More Trips"
                        classNameButton=""
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>
            </div>

            {/* We're here to help. */}
            <div className='relative z-10 mt-12 w-full bg-[#2C5A7B] py-12'>
                <Section3
                    title={"We're here to help."}
                    description1=""
                    description2={`Our Group Travel Specialists are experts at what they do and can help you choose the best group travel destination.Call +65 6922 5965 or contact us to schedule a free consultation.`}
                    button="Get In Touch"
                    buttonLink=""
                    titleClassName="!not-italic !text-white"
                    description1ClassName=""
                    description2ClassName="!text-white"
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>


            {/* Are you a group trip organiser? */}
            <div className='relative z-10 mt-12 w-full'>
                <Section3
                    title={'Are you a group trip organiser?'}
                    description1=""
                    description2={`We are then ready to assist. We work with business, athletic, and affinity travel planners to provide seamless, unforgettable travel experiences.`}
                    button="Get In Touch"
                    buttonLink=""
                    titleClassName="!not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
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

            <div className='mt-12 w-full'>
                <Section19 />
            </div>
        </div>
    )
}
