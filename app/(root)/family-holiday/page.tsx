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
import Section10 from '@/components/comen/section/Section10'

export default function page() {


    const tourData = TOUR_DATA;

    const inspirationData = [
        {
            image: "assets/images/family-holiday/inspiration-1.png",
            title: "Adventure for all ages",
            description: "From young children to teenagers and adults, Sri Lanka's family vacations offer a variety of experiences to keep everyone happy. Set off on thrilling jeep safaris through Yala National Park, visit the ancient rock fortress of Sigiriya, or whitewater raft in Kitulgala. Whale watching in Mirissa or snorkelling in Hikkaduwa can be life changing experiences for beach lovers.",
            linkLabel: "Discover Sri Lanka.",
            linkHref: "#",
        },
        {
            image: "assets/images/family-holiday/inspiration-2.png",
            title: "Enriching experiences",
            description: "Give your family rich experiences that inspire your children's imaginations to help them to feel wonder. Discover turtle conservation in Kosgoda, stay in a lovely tea plantation bungalow, or visit a small town to personally experience Sri Lankan culture. These pinch me moments create lifetime of memories.",
            linkLabel: "Discover Sri Lanka.",
            linkHref: "#",
        },
        {
            image: "assets/images/family-holiday/inspiration-3.png",
            title: "Taking the stress out of travel",
            description: "With all of the logistics and must do experiences taken care of, you can spend quality time together. Sri Lanka's family vacations provide comfortable lodging, dependable transportation, and delectable meals to keep everyone satisfied. Expert guides and chauffeur drivers ensure a smooth journey, allowing you to relax and soak up the magic of this beautiful island.",
            linkHref: "#",
        },
    ]

    const localCultureData = [
        {
            title1: "Unlock the best...",
            title2: "What are the best wildlife adventures for families?",
            description: "Of Sri Lanka’s heritage by exploring sacred templates",
            image: "assets/images/family-holiday/video-thumbnail-1.png",
            videoId: "",
            classNameTitle1: "",
            classNameDescription: "",
            classNameTitle2: ""
        },
        {
            title1: "Unlock the best...",
            title2: "How does Sigiriya fortress create lasting memories?",
            description: "Of Sri Lanka’s heritage by exploring sacred templates",
            image: "assets/images/family-holiday/video-thumbnail-2.png",
            videoId: "",
            classNameTitle1: "",
            classNameDescription: "",
            classNameTitle2: ""
        },
        {
            title1: "Unlock the best...",
            title2: "What makes Sri Lanka family trips fun for all ages?",
            description: "Of Sri Lanka’s heritage by exploring sacred templates",
            image: "assets/images/family-holiday/video-thumbnail-3.png",
            videoId: "",
            classNameTitle1: "",
            classNameDescription: "",
            classNameTitle2: ""
        }
    ]

    const aboutSlowToursData = [
        {
            title: "How can I travel with my family on a budget?",
            description: "Sri Lanka family holidays include family friendly accommodations, meals and transport, allowing you to stay within your budget and focus on having fun. Many tours also include must see experiences, and optional activities are disclosed upfront, ensuring no unexpected expenses during your holiday.",
        },
        {
            title: "What's the best family holiday destination?",
            description: "Sri Lanka, as an island nation, has a diverse range of family friendly vacation destinations, including breathtaking beaches, verdant hill country, and wildlife parks. In addition to the Cultural Triangle of Kandy, Anuradhapura, and Polonnaruwa, some of Sri Lanka's most popular destinations are Yala National Park, the Kosgoda Turtle Hatchery and Hikkaduwa Beach.",
        },
        {
            title: "What are good family trips?",
            description: "The best family vacations in Sri Lanka include activities suitable for all ages. Families may visit turtle hatcheries in Kosgoda, whitewater raft in Kitulgala, go on jeep safaris in Yala National Park, or tour historic temples in Dambulla. Whale-watching trips and beach holidays are also popular in Hikkaduwa.",
        },
        {
            title: "Why is family travel important?",
            description: "Travel is one of life's most valuable teachers. From grandparents to children, everyone will learn new skills and discover a world of cultures and new ideas while spending quality time together, which only family vacations can provide. Your journey will also inspire a sense of wonder and connection in everyone, and we believe that is one of the most valuable things you can have in life.",
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

    return (
        <div className='w-full'>

            {/* Bread crumb */}
            <div className=' py-2 w-full'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Family Holidays" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='mx-auto w-full'>
                <Hero1
                    image="assets/images/family-holiday/hero.png"
                    title="Family Holidays"
                    description="For those who go further, together"
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/* section 1 */}
            <div className='mt-12 w-full'>
                <div className='my-container'>
                    <p className='description-2 !font-normal !tracking-[.5px] !text-sm text-center'>Sri Lanka is a fantastic place for a family holiday. there is no exaggeration here. From sandy beaches and historic cities to wildlife safaris and jungle excursions, a small island presents enough of interest for everyone. This is the perfect balance between learning and leisure. Though it can be challenging, our area of expertise is organizing a trip fit for every member of the family. Let us start that once in a lifetime family adventure.</p>
                </div>
            </div>

            {/* Trending Sri Lanka Tours */}
            <div className='mt-12 w-full'>
                <div className='my-container'>
                    <TourCardCarousel1
                        data={tourData}
                        title="Top Family Tours"
                        description=""
                        button="See More Trips"
                        classNameButton=""
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>
            </div>

            {/* Slow holidays inspiration */}
            <div className='mt-12 w-full'>
                <Section14
                    data={inspirationData}
                    title1="Family tours inspiration"
                    title2="Family-friendly adventures & stress free travel"
                    description="Just because you have children does not mean your travel days are over. We'll take you to the best family vacation destinations and beyond, with family friendly stays and experiences that will rekindle the joy of travel, foster genuine connections and excite the entire family."
                    bgColor1="bg-myred"
                    bgColor2="bg-[#F4D6DA]"
                    button=""
                    classNameTitle1=""
                    classNameTitle2=""
                    classNameDescription=""
                    classNameButton=""
                />
            </div>

            {/* The best slow holidays unlocked for you */}
            <div className='mt-12 w-full'>
                <Card21Carousel1
                    cards={localCultureData}
                    title="The best slow holidays unlocked for you"
                    description="Whether you're admiring Sri Lanka's breathtaking scenery or relaxing in a quaint, historic tea lounge, you'll feel a new sense of calm and ease. Slow Holidays - where the adventure is as rewarding as the destination itself."
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            <div className='mt-12 w-full'>
                <Section16
                    data={aboutSlowToursData}
                    title="All you need to know about Family Tours"
                />
            </div>

            {/*  Your advantages of booking with Travel Gate  */}
            <div className='w-full mt-12 py-12 bg-[#EAE6EA]'>
                <div className='my-container'>
                    <Section6
                        data={wayToTravel}
                        title="Simply the best and most relevant way to travel"
                        titleClassName=""
                    />
                </div>
            </div>

            {/* Welcome to Premium Touring */}
            <div className='mt-12 w-full'>
                <div className='my-container'>
                    <div className='hidden w-full md:block'>
                        <Section7
                            data={premiumTouring}
                            title="Welcome to Premium Touring"
                            description=""
                            bgColor=""
                            classNameTitle=""
                            classNameDescription=""
                        />
                    </div>
                    <div className='block w-full md:hidden'>
                        <Card24Carousel1
                            cards={premiumTouring}
                            title="Welcome to Premium Touring"
                            description=""
                            bgColor=""
                            classNameTitle=""
                            classNameDescription=""
                        />
                    </div>
                </div>
            </div>

            <div className='mt-12 w-full'>
                <Section18
                    title="Looking for inspiration?"
                    button="View All Ways to Travel"
                    classNameButton=""
                />
            </div>

            {/* offers */}
            <div className='mt-12 w-full'>
                <div className='my-container'>
                    <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
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
