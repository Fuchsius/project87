import React from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero1 from '@/components/comen/hero/Hero1'
import Section1 from '@/components/comen/section/Section1'
import Section24 from '@/components/comen/section/Section24'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import { TOUR_DATA } from '@/data/tours.data'
import Section25 from '@/components/comen/section/Section25'
import Card30 from '@/components/comen/card/Card30'
import Title2 from '@/components/comen/title/Title2'

export default function page() {

    const section24Data1 = [
        {
            image: "assets/images/tour-differently/travelgate-unique-1.png",
            title: "Unlock 2026 Travel",
            description: "Whether it's your first trip or you're an experienced traveller looking for something new, we want you to feel confident at every turn. From our Local Travel Specialists to our 24/7 support team, we ensure that everything is taken care of all you have to do is show up and relax.",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/tour-differently/travelgate-unique-2.png",
            title: "Tour Locally",
            description: "With almost 7 years of experience, we have built a strong global local network. This is why you'll find a Be My Guest experience on every trip. an invitation into the homes and hearts of real locals.",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/tour-differently/travelgate-unique-3.png",
            title: "Tour Responsibly",
            description: "We at Travelgate believe in being responsible travellers and helping the places we visit. Our MAKE TRAVEL RESPONSIBLE Experiences, which are available on 96% of our tours, do just that. You'll meet amazing indigenous communities, work on environmental projects, and support charitable organisations.",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/tour-differently/travelgate-unique-4.png",
            title: "Tour Passionately",
            description: "The best trips make us feel things. That's why we show you both the famous sights and the lesser known ones, why we pick hotels with interesting histories (our Stays With Tales), and why so many of our past guests have made friends for life.",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
    ];

    const tourCardCarousel1Data = TOUR_DATA;

    const section25Data1 = [
        {
            image: "assets/images/tour-differently/our-tours-1.png",
            title: "Tour Confidently",
            description: "'Travelgate really goes above and beyond, making us feel like royalty. They're spoiling us with goodies and experiences we wouldn't have had otherwise Jacob",
            link: "",
            linkText: "",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: "",
        },
        {
            image: "assets/images/tour-differently/our-tours-2.png",
            title: "Tour Responsibly",
            description: "'It's great to see how everyone is really engaged in the social and economic growth of the country. Local people own the businesses around here. What really matters to me is giving back,”- Generva",
            link: "",
            linkText: "",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: "",
        },
        {
            image: "assets/images/tour-differently/our-tours-3.png",
            title: "Tour Locally",
            description: "We don't just want to see things. We want to help the people in the area and learn about their culture. Trafalgar gives us the chance to do that with these one of a kind experiences' - Sharon",
            link: "",
            linkText: "",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: "",
        },
        {
            image: "assets/images/tour-differently/our-tours-4.png",
            title: "Tour Sociably",
            description: "'I don't talk to many people. This trip has changed how I see life and how much fun it can be to step out of your comfort zone. - JJ",
            link: "",
            linkText: "",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: "",
        },
    ];

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

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/" },
                    { label: "Tour Differently" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='w-full mx-auto'>
                <Hero1
                    image="assets/images/tour-differently/hero.jpg"
                    title="Tour Differently"
                    description="From real connections to exciting new experiences, here's how you can see the world differently."
                    imageClassName="md:h-[600px] h-[330px]"
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/* Here's how Travelgate approaches things differently */}
            <div className='w-full mt-12'>
                <Section1
                    title="Here's how Travelgate approaches things differently"
                    description="Whatever your reason for travelling, we will take care of everything. From bucket list destinations to meeting locals to spending quality time with family and friends. More than a hundred satisfied guests from all over the world have created memories that will last a lifetime with Travelgate."
                    button=""
                    titleClassName=""
                    descriptionClassName=""
                    buttonClassName=""
                />
            </div>

            <div className='mt-12 w-full'>
                <Section24
                    data={section24Data1}
                    title1=""
                    title2="What makes Travelgate unique?"
                    description="Explore Sri Lanka's sacred temples, rich traditions, and skilled artisans. Enjoy immersive experiences designed to connect you with the island's enchanting heritage, ranging from spiritual serenity to cultural wonders."
                    bgColor1="bg-[#B3013B]"
                    bgColor2="bg-[#F4D6DA]"
                    button="View All Experts"
                    classNameTitle1=""
                    classNameTitle2=""
                    classNameDescription=""
                    classNameButton=""
                />
            </div>

            <div className='my-container mt-12'>
                <TourCardCarousel1
                    data={tourCardCarousel1Data}
                    title="Our most loved trips for groups of family and friends"
                    description="Save up to $1,500* for each couple on some awesome Asia trips during the Big Tour Sale"
                    button="See More Trips"
                    classNameButton=""
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            <div className='mt-12 w-full'>
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

            {/* Ready to get going? */}
            <div className='w-full mt-12'>
                <div className='my-container'>
                    <Title2 title='Ready to get going?' className='text-center'></Title2>
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

        </div>

    )
}
