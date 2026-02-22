import React from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero2 from '@/components/comen/hero/Hero2'
import Section3 from '@/components/comen/section/Section3'
import Section19 from '@/components/comen/section/Section19'
import Card20Carousel1 from '@/components/comen/carousel/Card20Carousel1'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import Card12Carousel1 from '@/components/comen/carousel/Card12Carousel1'
import { Button } from '@/components/comen/button'
import Card25Carousel1 from '@/components/comen/carousel/Card25Carousel1'
import Card4Carousel1 from '@/components/comen/carousel/Card4Carousel1'
import Card28Carousel1 from '@/components/comen/carousel/Card28Carousel1'
import Card26Carousel1 from '@/components/comen/carousel/Card26Carousel1'
import Card27Carousel1 from '@/components/comen/carousel/Card27Carousel1'
import { TOUR_DATA } from '@/data/tours.data'
import Section10 from '@/components/comen/section/Section10'
import Card29Carousel1 from '@/components/comen/carousel/Card29Carousel1'

export default function page() {

    const card12Carousel1Data1 = [
        {
            image: "assets/images/truly-bespoke/holiday-style-1.png",
            title: "Luxury",
            description: "Experience pure elegance in which every element whispers uniqueness and sophistication >",
            icon: "assets/icons/diamond-1.png",
            linkText: "Find Out More",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/truly-bespoke/holiday-style-2.png",
            title: "Signature",
            description: "Experience travel uniquely yours, crafted with a touch of unique signature charm >",
            icon: "assets/icons/diamond-1.png",
            linkText: "Find Out More",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/truly-bespoke/holiday-style-3.png",
            title: "Premium",
            description: "Take your trip to the next level with top notch comforts that change the way you vacation >",
            icon: "assets/icons/diamond-1.png",
            linkText: "Find Out More",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/truly-bespoke/holiday-style-4.png",
            title: "Comfort",
            description: "Experience comfort that feels just right, uncomplicated, welcoming, and full of simple joys >",
            icon: "assets/icons/diamond-1.png",
            linkText: "Find Out More",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        }
    ]

    const card25Carousel1Data = [
        {
            image: "assets/images/truly-bespoke/activity-levels-1.png",
            title: "Leisurely",
            description: "Tours with some stairs and usually 1 to 2 miles of walking each day on mostly level surfaces >",
            classNameTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/truly-bespoke/activity-levels-2.png",
            title: "Balanced",
            description: "Tours spanning up to one to three miles of walking each day may feature some uneven terrain including stairs and cobblestones >",
            classNameTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/truly-bespoke/activity-levels-3.png",
            title: "Dynamic",
            description: "On some days, these walks can span more than four miles and include some steep hills >",
            link: "#",
            classNameTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/truly-bespoke/activity-levels-2.png",
            title: "Balanced",
            description: "Tours spanning up to one to three miles of walking each day may feature some uneven terrain including stairs and cobblestones >",
            classNameTitle: "",
            classNameDescription: ""
        },
    ]

    const card12Carousel1Data2 = [
        {
            image: "assets/images/truly-bespoke/holiday-style-1.png",
            title: "Ultimate Luxury",
            description: "Experience pure elegance in which every element whispers uniqueness and sophistication >",
            linkText: "Find Out More",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/truly-bespoke/holiday-style-2.png",
            title: "Boutique Luxury",
            description: "Experience travel uniquely yours, crafted with a touch of unique signature charm >",
            linkText: "Find Out More",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/truly-bespoke/holiday-style-3.png",
            title: "Premium",
            description: "Take your trip to the next level with top notch comforts that change the way you vacation >",
            linkText: "Find Out More",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/truly-bespoke/holiday-style-4.png",
            title: "Comfort",
            description: "Relax in luxury with top tier service, every time >",
            linkText: "Find Out More",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        }
    ]

    const card12Carousel1Data3 = [
        {
            image: "assets/images/truly-bespoke/group-size-1.png",
            title: "Solo",
            description: "Your journey, crafted just for you. Discover freely & connect deeply. Solo adventure awaits >",
            icon: "assets/icons/solo.svg",
            linkText: "",
            link: "",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/truly-bespoke/group-size-2.png",
            title: "Couple",
            description: "Travel intimately together. Share moments designed for just you two.Unforgettable romance >",
            icon: "assets/icons/couple.svg",
            linkText: "",
            link: "",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/truly-bespoke/group-size-3.png",
            title: "Family",
            description: "Bond effortlessly on adventures perfectly paced for all ages. Memories made easy >",
            icon: "assets/icons/family.svg",
            linkText: "",
            link: "",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/truly-bespoke/group-size-4.png",
            title: "Group",
            description: "Friends explore best together! Enjoy shared experiences, seamless coordination, pure fun >",
            icon: "assets/icons/group.svg",
            linkText: "",
            link: "",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        }
    ]

    const card4Carousel1Data = [
        {
            image: "assets/images/truly-bespoke/itinerary-1.png",
            title: "TravelGate Choice",
            description: "Travelgate Choice lets you choose your own adventure. Choose between two carefully selected experiences and go your own way.",
            link: "#",
            linkText: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/truly-bespoke/itinerary-2.png",
            title: "Optional Experiences",
            description: "Do more of your favourite things. Book Optional Experiences to improve your trip in the free time allocated for it.",
            link: "#",
            linkText: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/truly-bespoke/itinerary-1.png",
            title: "TravelGate Choice",
            description: "Travelgate Choice lets you choose your own adventure. Choose between two carefully selected experiences and go your own way.",
            link: "#",
            linkText: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
    ];

    const card26Carousel1Data = [
        {
            title: "Add Flights",
            description: "Via our travel consultants, flights can be booked through Travelgate for your convenience during the tour booking process.",
            icon: "assets/icons/flight-itinerary-card.svg",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            title: "Add Hotel Nights",
            description: "Would like to stay longer at either your starting or ending point? Your TravelGate hotel can reserve extra evenings either at the beginning and/or end of your trip.",
            icon: "assets/icons/hotel-itinerary-card.svg",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
    ]

    const card27Carousel1 = [
        {
            image: "assets/images/truly-bespoke/specialists-1.png",
            title: "Meet Ruzaina",
            title2: "Culinary & Community Expert",
            description: "'From Jaffna's curry pots to Galle's cinnamon gardens, I connect you with flavors and stories. Your joy tasting a hopper fresh off the fire? That's my why'.",
            button: "Search Tours",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/truly-bespoke/specialists-2.png",
            title: "Meet Ravisara",
            title2: "Wildlife & Heritage Expert",
            description: "'For 12 years, I've tracked leopards in Yala and decoded Sigiriya's frescoes. Nothing compares to seeing guests gasp as wild elephants cross their path it's why I share Sri Lanka's soul.'",
            button: "Search Tours",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/truly-bespoke/specialists-3.png",
            title: "Meet Asha",
            title2: "Sustainable Journeys Expert",
            description: "'Sri Lanka isn't just destinations; it's conversations with tea pluckers in Nuwara Eliya, cooking with Jaffna matriarchs, or planting mangroves together. My joy? Turning itineraries into human connections that honour our island.'",
            button: "Search Tours",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/truly-bespoke/specialists-2.png",
            title: "Meet Ravisara",
            title2: "Wildlife & Heritage Expert",
            description: "'For 12 years, I've tracked leopards in Yala and decoded Sigiriya's frescoes. Nothing compares to seeing guests gasp as wild elephants cross their path it's why I share Sri Lanka's soul.'",
            button: "Search Tours",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
    ];

    const tourCardCarousel1Data = TOUR_DATA;

    const card28Carousel1 = [
        {
            title: "Step 01",
            description: "Choose your dream location, dates, preferences, and any other requests for your ideal vacation to submit your request.",
            icon: "assets/icons/location-pin.svg",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            title: "Step 02",
            description: "We arrange for your personal local travel specialist to design a customised itinerary for you. Our TravelGate team will be by your side throughout the journey.",
            icon: "assets/icons/star-1.svg",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            title: "Step 03",
            description: "Emails or phone conversations with your local travel agent will allow you to change and improve your itinerary until you are completely satisfied.",
            icon: "assets/icons/thubsup-1.svg",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            title: "Step 04",
            description: "Booking your trip online is simple. Pay with Visa or MasterCard, and we guarantee that your money is safe with us. Knowing that you have a 24-hour emergency hotline to call will make your trip more enjoyable.",
            icon: "assets/icons/orion-beach-1.svg",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
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

    const section10Data = [
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

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Truly Bespoke" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='w-full mx-auto'>
                <Hero2
                    image="assets/images/truly-bespoke/hero.jpg"
                    title="Truly Bespoke"
                    description="Your travel, your way"
                    type={2}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="font-figtree font-semibold"
                />
            </div>

            {/* Where Serenity Feels Like Home */}
            <div className='w-full mt-12'>
                <Section3
                    title={'Travel bespoke to you'}
                    description1=""
                    description2={`Traveling with Travelgate starts with our itineraries but is not the end. We help you to personalise your vacation to fit you. An Travelgate trip is whatever you decide to reflect your own passions, whether that is the size of the group you travel with, the style of tour, or the optional experiences you add.`}
                    button=""
                    buttonLink=""
                    titleClassName="!not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            {/* OPTIONS TO PERSONALISE YOUR TOUR */}
            <div className="w-full mt-12">
                <div className="w-full flex p-4 relative bg-myblue overflow-hidden items-center justify-between">
                    <div className="w-full h-full flex items-center justify-center relative">
                        <span className="text-center text-white lg:text-[32px] md:text-[28px] text-[24px] font-normal font-oswald uppercase">
                            OPTIONS TO PERSONALISE YOUR TOUR
                        </span>
                    </div>
                </div>
            </div>

            {/* Holiday Style */}
            <div className='w-full mt-12'>
                <Card12Carousel1
                    number={1}
                    cards={card12Carousel1Data1}
                    title="Holiday Style"
                    description="Our Holiday Styles allow you to explore remarkable destinations in a variety of ways. We offer a variety of tour styles to suit your needs, whether you want to visit multiple destinations at once, take a different route, or explore at your own pace."
                    bgColor1="!transparent"
                    bgColor2="!transparent"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={4}
                    minSize={4}
                    classNameTitle="!text-textcolor1"
                    classNameDescription="!text-textcolor1"
                />
                <div className='my-container flex items-center justify-center mt-4'>
                    <Button variant="default" size={"lg"} className={`font-bold`} >Connect me with my local travel specialist</Button>
                </div>
            </div>

            {/* Activity Levels */}
            <div className='w-full mt-12'>
                <Card25Carousel1
                    number={2}
                    cards={card25Carousel1Data}
                    title="Activity Levels"
                    description="Our Activity Levels help you to understand what to expect from the physical side of a tour with us. Our brochures or the itinerary information online will show the Activity Level assigned to each of our tours."
                    bgColor1=""
                    bgColor2=""
                    classNameTitle=""
                    classNameDescription=""
                />
                <div className='my-container flex items-center justify-center mt-4'>
                    <Button variant="default" size={"lg"} className={`font-bold`} >I want to save time</Button>
                </div>
            </div>

            {/* Stays with Tales */}
            <div className='w-full mt-12'>
                <Card12Carousel1
                    number={3}
                    cards={card12Carousel1Data2}
                    title="Stays with Tales"
                    description="Our Holiday Styles allow you to explore remarkable destinations in a variety of ways. We offer a variety of tour styles to suit your needs, whether you want to visit multiple destinations at once, take a different route, or explore at your own pace."
                    bgColor1="!transparent"
                    bgColor2="!transparent"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={4}
                    minSize={4}
                    classNameTitle="!text-textcolor1"
                    classNameDescription="!text-textcolor1"
                />
            </div>

            {/* Group Size */}
            <div className='w-full mt-12'>
                <Card12Carousel1
                    number={4}
                    cards={card12Carousel1Data3}
                    title="Group Size"
                    description="Experience travel designed around you. Our Solo, Couple, Family, and Group options are kept intentionally small to ensure comfort, efficiency, and a truly personalized premium experience. Choose the size that best fits your holiday style and budget."
                    bgColor1="bg-[#2D5A7B]"
                    bgColor2="bg-[#CCE9FF]"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={4}
                    minSize={4}
                    classNameTitle=""
                    classNameDescription=""
                />
                <div className='my-container flex items-center justify-center mt-4'>
                    <Button variant="default" size={"lg"} className={`font-bold`} >Create my itinerary</Button>
                </div>
            </div>

            <div className='w-full mt-12'>
                <Card4Carousel1
                    number={5}
                    cards={card4Carousel1Data}
                    title="Itinerary"
                    description="We carefully plan our itineraries. But they are only a starting point! With Optional Experiences and TravelGate Choice, you can tailor your itinerary to your preferences. A truly personal experience."
                    bgColor1="!transparent"
                    bgColor2="!transparent"
                    size0={1}
                    size768={2}
                    size1024={2}
                    size1280={2}
                    minSize={2}
                    classNameTitle="!text-textcolor1"
                    classNameDescription="!text-textcolor1"
                />
            </div>


            <div className='w-full mt-12'>
                <Card26Carousel1
                    number={6}
                    cards={card26Carousel1Data}
                    title="More Options For Your Tour"
                    description=""
                    bgColor1="!transparent"
                    bgColor2="!transparent"
                    size0={1}
                    size768={2}
                    size1024={2}
                    size1280={2}
                    minSize={2}
                    classNameTitle="!text-textcolor1"
                    classNameDescription="!text-textcolor1"
                />
                <div className='my-container flex items-center justify-center mt-4'>
                    <Button variant="default" size={"lg"} className={`font-bold`} >Book your trip now</Button>
                </div>
            </div>



            <div className='w-full mt-12'>
                <Card27Carousel1
                    number={7}
                    cards={card27Carousel1}
                    title="Meet your local travel specialists"
                    description="Time and time again, guests like you tell us our Local Experts make every journey extraordinary. From arrival to farewell, they master every detail so you savor Sri Lanka freely untangled from logistics. Most of all, their passion is contagiousMeet a few you might explore with"
                    bgColor1="bg-[#503454]"
                    bgColor2="bg-[#CCE9FF]"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                    classNameDescription=""
                />
                <div className='my-container flex items-center justify-center mt-4'>
                    <Button variant="default" size={"lg"} className={`font-bold`} >Help me plan my trip</Button>
                </div>
            </div>

            <div className='my-container mt-12'>
                <TourCardCarousel1
                    data={tourCardCarousel1Data}
                    title="Every trip, taken care of with ease"
                    description="Where will you choose to go? Book today to unlock the best experiences."
                    button="See More Trips"
                    classNameButton=""
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* Itinerary */}
            <div className='w-full mt-12'>
                <Card28Carousel1
                    cards={card28Carousel1}
                    title="How it works"
                    description=""
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={4}
                    minSize={4}
                    classNameTitle=""
                    classNameDescription=""
                />
                <div className='my-container flex items-center justify-center mt-4'>
                    <Button variant="default" size={"lg"} className={`font-bold`} >Get your quote now</Button>
                </div>
            </div>

            {/* reviews */}
            <div className='w-full mt-12 bg-[#CCBBC8] py-12'>
                <div className='my-container'>
                    <Card20Carousel1
                        cards={reviewData}
                        title="Don't take our word for it, see what our travellers say"
                        classNameTitle=""
                        classNameButton=""
                        classNameDescription=""
                    />
                </div>
                <div className='my-container flex items-center justify-center mt-4'>
                    <Button variant="default" size={"lg"} className={`font-bold`} >Help me plan my trip</Button>
                </div>
            </div>


            <div className='my-container mt-12'>
                <Section10
                    data={section10Data}
                />
                <div className='my-container flex items-center justify-center mt-8'>
                    <Button variant="default" size={"lg"} className={`font-bold`} >Connect me with my local travel specialist</Button>
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
                <Section19 />
            </div>
        </div>
    )
}
