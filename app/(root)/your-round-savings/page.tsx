import React from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero2 from '@/components/comen/hero/Hero2'
import Section3 from '@/components/comen/section/Section3'
import { Button } from '@/components/comen/button'
import Title2 from '@/components/comen/title/Title2'
import Section19 from '@/components/comen/section/Section19'
import Card30Carousel1 from '@/components/comen/carousel/Card30Carousel1'
import Section22 from '@/components/comen/section/Section22'
import Card18Carousel1 from '@/components/comen/carousel/Card18Carousel1'
import Card30 from '@/components/comen/card/Card30'

export default function page() {

    const card30Carousel1 = [
        {
            image: "assets/images/your-round-savings/discount-1.png",
            title: "Multi tour Discount",
            title2: "Save 2.5%",
            description: "Save money by booking two Travelgate tours that last seven days or more. Take three tours and save two.",
            button: "Contact Us",
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/your-round-savings/discount-2.png",
            title: "Refer Family & Friends",
            title2: "Earn Travel Rewards",
            description: "Whenever you refer new customers to experience our tours, you will be rewarded with travel credits.",
            button: "Search Tours",
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/your-round-savings/discount-3.png",
            title: "Kids & Teens Savings (5-17 Years Old)",
            title2: "Save up to 10%",
            description: "Travelgate allows you to present your grandchildren's and your happy vacation memories to them",
            button: "Contact Us",
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/your-round-savings/discount-4.png",
            title: "Group Bookings 9+",
            title2: "Small Group Discount",
            description: "Save five percent, depending on availability. Travel with us and take advantage of free seats for larger groups or bookings involving nine or more passengers.",
            button: "Contact Us",
            classNameTitle: "",
            classNameTitle2: "",
            classNameDescription: "",
            classNameButton: ""
        }
    ]

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
                    { label: "Everything Taken Care Of" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='mx-auto w-full'>
                <Hero2
                    image="assets/images/your-round-savings/hero.jpg"
                    title=""
                    description=""
                    type={2}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="font-figtree font-semibold"
                />
            </div>

            {/* Travel with absolute ease */}
            <div className='relative z-10 mt-12 w-full'>
                <Section3
                    title={'Year Round Savings'}
                    description1=""
                    description2={`Use TravelGate to discover all the ways you can save money all year long. Our TGT Tour Rewards program provides special benefits to past visitors. Discounts are also applicable to groups and families.`}
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
                        backgroundImage: "url('/assets/images/your-round-savings/rewards-banner.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="flex relative z-10 justify-center items-center px-4 py-6 w-full bg-transparent md:py-16 xl:px-[280px] lg:px-[160px]">
                        <div className='p-8 w-full bg-white rounded-md'>
                            <Title2 title="TGT Tour Rewards" className={`text-center text-textcolor1`} />
                            <h1 className={`mt-4 !text-[#6B6B6B] lg:text-[24px] md:text-[22px] text-lg font-semibold text-center italic font-sourceSerif`}>Rewarding Past Guests</h1>
                            <p className="mt-2 text-sm text-center text-textcolor1">Use TravelGate to discover all the ways you can save money all year long. Our TGT Tour Rewards program provides special benefits to past visitors. Discounts are also applicable to groups and families.</p>

                            <div className='flex justify-center items-center mt-4'>
                                <Button variant="default" size={"lg"} className={`font-bold`} >Find Out More</Button>
                            </div>
                        </div>
                    </div>
                </div>
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
