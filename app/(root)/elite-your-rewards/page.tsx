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
import Link from 'next/link'
import Section6 from '@/components/comen/section/Section6'
import Section2 from '@/components/comen/section/Section2'

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

    const section22Data1 = [
        {
            question: 'Elite Tour Rewards',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.\n\nWe update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.\n\nIf there are ever any changes to your departure, we will contact you.'
        },
    ];

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className=' py-2 w-full'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Deals", href: "/" },
                    { label: "Elite Your Rewards" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='mx-auto w-full'>
                <Hero2
                    image="assets/images/elite-your-rewards/hero.jpg"
                    title="The best travel loyalty program available globally"
                    description="Elite Tour Rewards"
                    type={2}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="lg:!text-[24px] md:!text-[20px] !text-[16px] font-semibold font-figtree "
                />
            </div>

            {/* Travel with absolute ease */}
            <div className='relative z-10 mt-12 w-full'>
                <Section3
                    title={'Exclusive benefits for our valued past guests'}
                    description1=""
                    description2={`When you book your first tour with Travelgate, you will automatically become a member of our Elite Tour Rewards program, which offers the best touring benefits worldwide. Discover and enjoy member benefits on your next tour.`}
                    button=""
                    buttonLink=""
                    titleClassName="!not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            {/* Rewards Banner */}
            <div className='mt-12 my-container'>
                <div className="flex relative w-full rounded-md overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center brightness-[.6]"
                        style={{
                            backgroundImage: "url('/assets/images/elite-your-rewards/rewards-banner.jpg')",
                            zIndex: -1
                        }}
                    ></div>
                    <div className="flex relative z-10 justify-center items-center w-full py-6 md:px-12 px-4">
                        <div className='w-full bg-transparent rounded-md'>
                            <Title2 title="Give €100, get €100*" className={`text-center text-white`} />

                            <p className="mt-2 text-sm text-center text-white">When you book your first tour with Travelgate, you will automatically become a member of our Elite Tour Rewards program, which offers the best touring benefits worldwide. Discover and enjoy member benefits on your next tour.</p>

                            <div className='flex justify-center items-center mt-4'>
                                <Link href="#" className={`text-center block text-white md:text-base !text-sm underline-1 font-bold `}>Start Referring {">"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-12 bg-[#eae6ea] py-12'>
                <div className='my-container'>
                    <Section6
                        data={wayToTravel}
                        title="Simply the best and most relevant way to travel"
                        titleClassName=""
                    />
                </div>
            </div>

            {/* Interested in One of Our Trips? */}
            <div className='w-full mt-12'>
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


            <div className='mt-12 my-container'>
                <Title2 title="Terms and Conditions:" className={`text-center text-textcolor1`} />
                <Section22 data={section22Data1} />
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
