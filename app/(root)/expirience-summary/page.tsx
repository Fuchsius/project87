import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero1 from '@/components/comen/hero/Hero1'
import React from 'react'
import { TOUR_DATA } from '@/data/tours.data'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import Section14 from '@/components/comen/section/Section14'
import Card21Carousel1 from '@/components/comen/carousel/Card21Carousel1'
import Section16 from '@/components/comen/section/Section16'
import Section6 from '@/components/comen/section/Section6'
import Card24Carousel1 from '@/components/comen/carousel/Card24Carousel1'
import Section7 from '@/components/comen/section/Section7'
import Card2 from '@/components/comen/card/Card2'
import Section19 from '@/components/comen/section/Section19'
import Section18 from '@/components/comen/section/Section18'
import Card18Carousel1 from '@/components/comen/carousel/Card18Carousel1'
import Hero2 from '@/components/comen/hero/Hero2'
import Section1 from '@/components/comen/section/Section1'
import Card1Carousel1 from '@/components/comen/carousel/Card1Carousel1'
import Section5 from '@/components/comen/section/Section5'

export default function page() {


    const tourData = TOUR_DATA;

    const inspirationData = [
        {
            image: "assets/images/classic-holiday/inspiration-1.png",
            title: "See the real thing",
            description: "Through our well designed sacred trips, let Sri Lanka's spiritual legacy envelop you. See the revered Temple of the Tooth in Kandy housing Buddha's holy relic, enjoy the peace of old cave temples at Dambulla, or take part in a traditional puja celebration at a nearby Buddhist temple. These deep events gently, contemplatively link you to the island's rich spiritual legacy.",
            linkLabel: "Discover Sri Lanka.",
            linkHref: "#",
        },
        {
            image: "assets/images/classic-holiday/inspiration-2.png",
            title: "Witness powerful cultural rituals",
            description: "which range from rhythmic Kandyan dance performances to temple Poya Day ceremonies. Witness the Esala Perahera festival's elephant and dancer procession, or interact with village elders who are preserving ancient Sinhalese rituals. Combine cultural exploration with exciting wildlife safaris in Yala or Udawalawe, led by knowledgeable guides.",
            linkLabel: "Discover Sri Lanka.",
            linkHref: "#",
        },
        {
            image: "assets/images/classic-holiday/inspiration-3.png",
            title: "Connect with locals",
            description: "craftspeople from Sri Lanka. See master mask carvers in Ambalangoda honing their centuries old craft, learn the delicate batik textile making technique in coastal villages, find ancient pottery techniques passed dowr through generations, or visit Ceylon tea estates where seasoned tea pluckers show their exacting skills while sharing stories of island life.",
            linkHref: "#",
        },
    ]

    const localCultureData = [
        {
            title1: "Unlock the best...",
            title2: "Why is Sri Lanka ideal for spiritual journeys?",
            description: "Of Sri Lanka’s heritage by exploring sacred templates",
            image: "assets/images/classic-holiday/video-thumbnail-1.png",
            videoId: "",
            classNameTitle1: "",
            classNameDescription: "",
            classNameTitle2: ""
        },
        {
            title1: "Unlock the best...",
            title2: "How can you experience Sri Lanka's cultural traditions?",
            description: "Of Sri Lanka’s heritage by exploring sacred templates",
            image: "assets/images/classic-holiday/video-thumbnail-2.png",
            videoId: "",
            classNameTitle1: "",
            classNameDescription: "",
            classNameTitle2: ""
        },
        {
            title1: "Unlock the best...",
            title2: "Why is relaxation key in Classic Tours?",
            description: "Of Sri Lanka’s heritage by exploring sacred templates",
            image: "assets/images/classic-holiday/video-thumbnail-3.png",
            videoId: "",
            classNameTitle1: "",
            classNameDescription: "",
            classNameTitle2: ""
        }
    ]

    const aboutClassicToursData = [
        {
            title: "What makes Classic Holidays unique?",
            description: "Perfect fusion of culture, wildlife, and leisure is offered by Classic Holidays. Discover local customs, colourful celebrations, and historic temples at leisurely pace. Every schedule is meticulously designed to provide significant events and enough of time to fully appreciate the beauties of Sri Lanka. Classic Holidays guarantees unique experiences catered to your interests and needs whether your travel is for leisure on immaculate beaches, guided safaris, or exploration of famous sites.",
        },
        {
            title: "What cultural experiences are offered?",
            description: "Classic Holidays fully transports you to the rich cultural legacy of Sri Lanka. Discover holy sites like the Temple of the Tooth, see amazing Kandyan dance performances, and participate in customs. See neighbourhood artists creating masterfully carved masks or batik fabrics. Every encounter links you to the core of Sri Lankan society and provides a greater respect of the island's ancient customs and contemporary creativity",
        },
        {
            title: "Can I customize my tour for relaxation?",
            description: "Absolutely! Classic Holidays strikes a balance between exploration and relaxation, resulting in a refreshing getaway. After exploring Sri Lanka's cultural landmarks and wildlife, relax on golden beaches with breathtaking coastal views. Experience the tranquil atmosphere of tea estates or indulge in spa treatments inspired by traditional Ayurveda. Whether you prefer calm beaches or tranquil hill country, relaxation is an essential part of your journey",
        },
        {
            title: "How does Classic Tours promote sustainability?",
            description: "Classic Holidays encourages ethical and sustainable travel by means of eco friendly practices. We promise eco friendly accommodation, help nearby towns, and back initiatives for the protection of animals. Our travels help to preserve cultural legacy and natural surroundings, so enhancing the communities and surroundings of Sri Lanka. Travellers have great experiences while helping to protect the unique ecosystems and traditions of the island for next generations.",
        },
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



    const card1Carousel1Data = [
        {
            image: "assets/images/expirience-summary/unique-opportunity-1.png",
            title: "Be My Guest",
            description: "The original local travel experience",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/expirience-summary/unique-opportunity-2.png",
            title: "Do good, feel good",
            description: "MAKE TRAVEL RESPONSIBLE®Experiences",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/expirience-summary/unique-opportunity-3.png",
            title: "Experience the thrill of wildlife up close",
            description: "Wild Frontiers",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/expirience-summary/unique-opportunity-3.png",
            title: "Experience the thrill of wildlife up close",
            description: "Wild Frontiers",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        }
    ]

    const offers = [
        {
            id: 1,
            image: "assets/images/ways-to-travel/offers-1.png",
            title: "Sri Lanka Travel Deals",
            description: "Our guided tours to Sri Lanka offer great savings and discounts year-round",
            button: "Search Offers"
        },
        {
            id: 2,
            image: "assets/images/ways-to-travel/offers-2.png",
            title: "Money Off Your First Trip",
            description: "Sign up for our newsletter and save EUR€250 per couple on your first trip.",
            button: "Sign-Up Now"
        },
        {
            id: 3,
            image: "assets/images/ways-to-travel/offers-3.png",
            title: "Special Offers",
            description: "Experience The TravelGate Difference at cheaper rates with our current special offers",
            button: "Search Offers"
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


    return (
        <div className='w-full'>

            {/* Bread crumb */}
            <div className='w-full py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Experiences" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='w-full mx-auto'>
                <Hero2
                    image="assets/images/expirience-summary/hero.png"
                    title="Only with TravelGate"
                    description="One-of-a-kind experiences"
                    type={2}
                    rating={4.5}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/* Make unforgettable memories */}
            <div className='w-full mt-12'>
                <Section1
                    title="Make unforgettable memories"
                    description="We excel at connecting you to experiences you would not have had otherwise. On all of our tours, you will be invited into locals' homes and businesses for an exclusive Be My Guest experience, as well as an MAKE TRAVEL RESPONSIBLE® Experience. Many itineraries also include a Stays with Tales accommodation experience in some of the world's most interesting locations."
                    button=""
                    titleClassName=""
                    descriptionClassName=""
                    buttonClassName=""
                />
            </div>

            {/* A glimpse of what you can look forward to */}
            <div className='w-full mt-12'>
                <Card1Carousel1
                    cards={card1Carousel1Data}
                    title="A glimpse of what you can look forward to"
                    description="The unique opportunity to interact with people, visit places, and have experiences all over the asia."
                    bgColor1="bg-[#0b5d56]"
                    bgColor2="bg-bggray4"
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


            {/* offers */}
            <div className='w-full mt-12'>
                <div className='my-container'>
                    <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
                        {offers.map((offer) => (
                            <div key={offer.id} className="w-full lg:w-[calc(((100%-(16px*2))/3))] md:w-[calc(((100%-(16px*1))/2))]">
                                <Card2
                                    image={offer.image}
                                    title={offer.title}
                                    description={offer.description}
                                    button={offer.button}
                                    classNameTitle=""
                                    classNameDescription=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='w-full mt-12'>
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

            {/* Search Accommodation */}
            <div className='w-full mt-12'>
                <div className='w-full'>
                    <Section5
                        image="assets/images/expirience-summary/footer-banner.png"
                        description="Experience the finest in TGT’s Collection! ranging from Ultimate Luxury to Comfort. Discover carefully selected boutique hotels, villas, and luxurious accommodations throughout Asia, designed for unforgettable experiences of luxury."
                        button='Search Experiences'
                        searchIcon="assets/icons/search-white.svg"
                        descriptionClassName=""
                    />
                </div>
            </div>

            <div className='w-full mt-12'>
                <Section19 />
            </div>

        </div>
    )
}
