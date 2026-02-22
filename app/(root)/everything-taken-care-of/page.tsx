import React from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero2 from '@/components/comen/hero/Hero2'
import Section3 from '@/components/comen/section/Section3'
import Section21 from '@/components/comen/section/Section21'
import Card27Carousel1 from '@/components/comen/carousel/Card27Carousel1'
import { Button } from '@/components/comen/button'
import Section6 from '@/components/comen/section/Section6'
import Card14 from '@/components/comen/card/Card14'
import Title2 from '@/components/comen/title/Title2'
import Card3 from '@/components/comen/card/Card3'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import { TOUR_DATA } from '@/data/tours.data'
import Card1Carousel1 from '@/components/comen/carousel/Card1Carousel1'
import Section19 from '@/components/comen/section/Section19'

export default function page() {

    const section21Data1 = [
        {
            title: "Private customisable trip",
        },
        {
            title: "Be My Guest experience",
        },
        {
            title: "Stays with Tales experience*",
        },
        {
            title: "Daily breakfast**",
        },
        {
            title: "Relaxed start in every tour",
        },
        {
            title: "Travel director & private chauffeur guide",
        },
        {
            title: "Entry to many must-see sights",
        },
        {
            title: "Travel Director and Driver team",
        },
        {
            title: "MAKE TRAVEL RESPONSIBLE Experiences",
        },
        {
            title: "Locally guided tours in many destinations",
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

    const optionalExperiences = [
        {
            id: 1,
            type: "1",
            image: "assets/images/everything-taken-care-of/experience-1.png",
            title: "Ancient Cave Temple Spiritual Immersion",
            title2: "Be My Guest",
            description: "Meditate with monks in sacred chambers, join chanting sessions, receive blessings, and explore ancient murals that have witnessed 2,000 years of spiritual transformation. Optional Experience on",
            link: "#",
            linkText: "Serenity Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            id: 2,
            type: "1",
            image: "assets/images/everything-taken-care-of/experience-2.png",
            title: "Village Ayurvedic Cooking and Nutrition",
            title2: "Be My Guest",
            description: "Learn ancestral cooking wisdom from village elders, using healing herbs and spices to create balanced, medicinal meals while sharing food and traditions with local families. Optional Experience on",
            link: "#",
            linkText: "Classic Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            id: 3,
            type: "1",
            image: "assets/images/everything-taken-care-of/experience-3.png",
            title: "Traditional Potter's Meditation and Mindfulness",
            title2: "Be My Guest",
            description: "Craft mindfulness through clay with master artisans, blending tactile meditation, breath awareness, and creative expression using centuries-old techniques passed down in Sri Lankan tradition. Optional Experience on",
            link: "#",
            linkText: "Classic Sri Lanka",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            id: 4,
            type: "1",
            image: "assets/images/everything-taken-care-of/experience-4.png",
            title: "Ancient Cave Temple Spiritual Immersion",
            title2: "Be My Guest",
            description: "Meditate with monks in sacred chambers, join chanting sessions, receive blessings, and explore ancient murals that have witnessed 2,000 years of spiritual transformation. Optional Experience on",
            link: "#",
            linkText: "Serenity Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            id: 5,
            type: "1",
            image: "assets/images/everything-taken-care-of/experience-5.png",
            title: "Village Ayurvedic Cooking and Nutrition",
            title2: "Be My Guest",
            description: "Learn ancestral cooking wisdom from village elders, using healing herbs and spices to create balanced, medicinal meals while sharing food and traditions with local families. Optional Experience on",
            link: "#",
            linkText: "Classic Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            id: 6,
            type: "1",
            image: "assets/images/everything-taken-care-of/experience-6.png",
            title: "Traditional Potter's Meditation and Mindfulness",
            title2: "Be My Guest",
            description: "Craft mindfulness through clay with master artisans, blending tactile meditation, breath awareness, and creative expression using centuries-old techniques passed down in Sri Lankan tradition. Optional Experience on",
            link: "#",
            linkText: "Classic Sri Lanka",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        }
    ]

    const tourCardCarousel1Data = TOUR_DATA;

    const card1Carousel1Data = [
        {
            image: "assets/images/everything-taken-care-of/experience-7.png",
            title: "Outdoor & Nature",
            description: "Adventure awaits, just step outside",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/everything-taken-care-of/experience-8.png",
            title: "Wellness & Healing",
            description: "Heal within, shine beyond",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/everything-taken-care-of/experience-9.png",
            title: "Oceanic Adventures",
            description: "Seas of soul, stories untold",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/everything-taken-care-of/experience-8.png",
            title: "Wellness & Healing",
            description: "Heal within, shine beyond",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
    ]

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className=' py-2 w-full'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Everything Taken Care Of" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='mx-auto w-full'>
                <Hero2
                    image="assets/images/everything-taken-care-of/hero.jpg"
                    title="Everything taken care of"
                    description="Just relax and enjoy"
                    type={2}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="font-figtree font-semibold"
                />
            </div>

            {/* Travel with absolute ease */}
            <div className='mt-12 w-full'>
                <Section3
                    title={'Travel with absolute ease'}
                    description1=""
                    description2={`Travelgate plans, checks, books, and arranges all before you begin. Your Travel Director and Driver team takes care of all your logistics, bookings, tickets, transportation, and more while you are on your tour, thus, all you have to do is enjoy your holiday and the freedom of living in the moment.`}
                    button=""
                    buttonLink=""
                    titleClassName="!not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            {/* What's included */}
            <div className='mt-12 w-full'>
                <Section3
                    title={"What's included"}
                    description1=""
                    description2={`Starting a trip where every element is taken care of guarantees a flawless and unforgettable adventure. Here's a brief overview of the travel necessities and experiences you'll love.`}
                    button=""
                    buttonLink=""
                    titleClassName="!not-italic"
                    description1ClassName=""
                    description2ClassName="max-w-[680px] mx-auto"
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            <div className='mt-12 my-container'>
                <Section21 data={section21Data1} />
            </div>

            <div className='mt-12 w-full'>
                <Card27Carousel1
                    number={7}
                    cards={card27Carousel1}
                    title="Your Local Experts"
                    description="Time and time again, guests like you tell us our Local Experts make every journey extraordinary. From arrival to farewell, they master every detail so you savor Sri Lanka freely untangled from logistics. Most of all, their passion is contagious.Meet a few you might explore with:"
                    bgColor1="bg-[#2D5A7B]"
                    bgColor2="bg-[#CCE9FF]"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                    classNameDescription=""
                />
                <div className='flex justify-center items-center mt-4 my-container'>
                    <Button variant="default" size={"lg"} className={`font-bold`} >Search Experiences</Button>
                </div>
            </div>

            <div className='w-full mt-12 bg-[#EAE6EA] py-12'>
                <div className='flex justify-center items-center my-container'>
                    <Section6
                        data={wayToTravel}
                        title="Simply the best and most relevant way to travel"
                        titleClassName=""
                    />
                </div>
            </div>

            <div className='mt-12 my-container'>
                <Card14
                    image="assets/images/everything-taken-care-of/transport-1.png"
                    title="Transport & Chauffeur Guide"
                    description="Forget about driving, parking, tolls, and navigation debates. Travelgate's private chauffeur and luxury vehicle ensure a smooth journey from A to B. Relax in premium leather seats, enjoy panoramic views through spotless windows, and stay connected with free WiFi and USB chargers. Every ride is elevated by climate control and bespoke amenities your journey will be as memorable as the destination.
                    <br>
                    From your private seat, you can gain an intimate understanding of the world. Explore Capri's turquoise grottoes, New Zealand's Milford Sound, or glide through Swiss Alps glaciers-all with a personal guide who will tailor the adventure to your preferences. Capture breathtaking views without crowds, schedules, or compromises. Pure freedom, designed specifically for your eyes.
                    <br><br>
                    Please keep in mind that vehicle amenities may differ in certain remote regions. Your Travelgate consultant will confirm all details prior to your trip."
                    classNameTitle="font-sourceSerif text-[22px] md:text-[28px] lg:text-[32px] !font-bold text-textcolor1"
                    classNameDescription=""
                    classNameImage=""
                />
            </div>

            <div className='mt-12 my-container'>
                <Title2 title="Complement your tour with Optional Experiences" className={`text-center text-textcolor1`} />
                <p className={`px-0 mt-2 text-sm text-center text-textcolor1 md:px-28`}>
                    Unlock even more with curated Optional Experiences available throughout your tour. Carefully crafted to elevate your included sightseeing and unique moments, at exclusive Travelgate prices. Selected by our local experts and organized seamlessly during your tour, relax knowing every detail is perfected for you. Here are a few to anticipate - find the "Optional Experience" tab on your itinerary.
                </p>

                <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3'>
                    {optionalExperiences.map((card) => (
                        <Card3
                            key={card.id}
                            type={card.type}
                            image={card.image}
                            title={card.title}
                            title2={card.title2}
                            description={card.description}
                            link={card.link}
                            linkText={card.linkText}
                            classNameTitle={card.classNameTitle}
                            classNameDescription={card.classNameDescription}
                            linkClassName={card.linkClassName}
                        />
                    ))}
                </div>
            </div>

            <div className='w-full bg-[#503454] mt-12 py-12'>
                <div className='my-container'>
                    <TourCardCarousel1
                        data={tourCardCarousel1Data}
                        title="Every trip, taken care of with ease"
                        description="Where will you choose to go? Book today to unlock the best experiences."
                        button="See More Trips"
                        classNameButton=""
                        classNameTitle="text-white"
                        classNameDescription="text-white"
                    />
                </div>
            </div>

            <div className='mt-12 w-full'>
                <Card1Carousel1
                    cards={card1Carousel1Data}
                    title="More one-of-a kind experiences"
                    description="You will also enjoy a Be My Guest experience and MAKE TRAVEL RESPONSIBLE® Experience on every tour in addition to Stays with Tales experiences on some."
                    bgColor1="!transparent"
                    bgColor2="!transparent"
                    classNameTitle="!text-textcolor1"
                    classNameDescription="!text-textcolor1"
                />
            </div>

            <div className='mt-12 w-full'>
                <Section19 />
            </div>
        </div>
    )
}
