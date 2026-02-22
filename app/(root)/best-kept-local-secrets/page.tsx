"use client"

import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Title2 from '@/components/comen/title/Title2'
import { Button } from '@/components/comen/button'
import Section6 from '@/components/comen/section/Section6'
import { TOUR_DATA } from '@/data/tours.data'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import Section26 from '@/components/comen/section/Section26'
import Section19 from '@/components/comen/section/Section19'
import Hero2 from '@/components/comen/hero/Hero2'
import Section1 from '@/components/comen/section/Section1'
import Link from 'next/link'
import Card3 from '@/components/comen/card/Card3'
import Card22 from '@/components/comen/card/Card22'
import Card23 from '@/components/comen/card/Card23'
import Card27Carousel1 from '@/components/comen/carousel/Card27Carousel1'


export default function page() {

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

    const card3Data1 = [
        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/iconic-must-sees-1.png",
            title: "Sunrise Whales & Ocean Giants at Play",
            title2: "",
            description: "Get on an early boat to see blue whales breaching in the golden dawn light, their misty blows painting rainbows. Crews tell stories of conservation victories and rogue dolphins racing the bow. After the sighting, snorkel the coral gardens where turtles graze. Sri Lanka's seas? A wild ballet in which leviathans and reef life interact in salty harmony. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },
        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/iconic-must-sees-2.png",
            title: "Birdwatch Among Endemic Canopy Dwellers",
            title2: "",
            description: "Pause beneath towering dipterocarps to glimpse flashes of color: crimson backed flamebacks or emerald-green hanging parrots. Sinharaja shelters 20+ bird species found nowhere else. Listen for mixed species flocks chattering like a symphony. Binoculars reveal miniature worlds, tree frogs, jewel-toned lizards. This biodiversity hotspot pulses with Sri Lanka's adventurous spirit, where every creature plays a role in preserving Earth's rarest rainforest. Experience on",
            link: "#",
            linkText: "Contrasts of Ceylon.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },

        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/iconic-must-sees-3.png",
            title: "Walk with Indigenous Guardians of the Forest",
            title2: "",
            description: "Join Vedda elders on trails their ancestors walked, learning to identify medicinal plants and track wildlife. Taste wild honey harvested sustainably or watch them craft tools from bark. Their stories around a crackling fire reveal a philosophy of coexistence. Gal Oya isn't just a park—it's a living classroom. Sri Lanka's adventurous soul lies in traditions that honor, never conquer, the untamed world. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },
        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/iconic-must-sees-4.png",
            title: "Monk Chants in Golden Cave Shadows",
            title2: "",
            description: "Ascend to the cave temple of Dambulla, where two thousand year old Buddha frescoes radiate in candlelight. Talk to saffron robed monks about customs unaltered for millennia; then, sip sweet kithul treacle tea at a hermitage buried in rock. Dambulla's past is in the flutter of oil lamps and the echoes of monks' laughter off old walls, not petrified. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },
        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/iconic-must-sees-5.png",
            title: "Moonlit Prayers at the Temple of the Tooth",
            title2: "",
            description: "Join saffron robed monks in the evening puja at Sri Dalada Maligawa under the illumination of oil lamps. The air thrums with drumbeats and the whisper of centuries-old chants Afterward, slip into the night market where spice merchants press fresh cinnamon oil into your palm and woodcarvers shape legendary creatures. Kandy's cardiac rate? Here is where daily life and loyalty merge under the same moon. Experience on",
            link: "#",
            linkText: "Contrasts of Ceylon.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },
        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/iconic-must-sees-6.png",
            title: "Forgotten Forts and Betel Leaf Tales",
            title2: "",
            description: "The crumbling Dutch ramparts of Climb Jaffna Fort whisper 30 years of silence through bullet scars. See betel sellers outside, their red stained smiles telling tales of love letters rolled in paan leaves. From a street cart, sip sulung porridge with an older recipe than the fort itself. War marks fade, but culture never does. Like a betel vine pushing through concrete, it is tenacious. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },
    ]

    const card27Carousel1 = [
        {
            image: "assets/images/best-kept-local-secrets/guidebooks-1.png",
            title: "Meet Ruzaina",
            title2: "Culinary & Community Expert",
            description: "'From Jaffna's curry pots to Galle's cinnamon gardens, I connect you with flavors and stories. Your joy tasting a hopper fresh off the fire? That's my why'.",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/best-kept-local-secrets/guidebooks-2.png",
            title: "Meet Ravisara",
            title2: "Wildlife & Heritage Expert",
            description: "'For 12 years, I've tracked leopards in Yala and decoded Sigiriya's frescoes. Nothing compares to seeing guests gasp as wild elephants cross their path it's why I share Sri Lanka's soul'.",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/best-kept-local-secrets/guidebooks-3.png",
            title: "Meet Asha",
            title2: "Sustainable Journeys Expert",
            description: "'Sri Lanka isn't just destinations; it's conversations with tea pluckers in Nuwara Eliya, cooking with Jaffna matriarchs, or planting mangroves together. My joy? Turning itineraries into human connections that honour our island'.",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/best-kept-local-secrets/guidebooks-2.png",
            title: "Meet Ravisara",
            title2: "Wildlife & Heritage Expert",
            description: "'For 12 years, I've tracked leopards in Yala and decoded Sigiriya's frescoes. Nothing compares to seeing guests gasp as wild elephants cross their path it's why I share Sri Lanka's soul'.",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
    ]

    const card3Data2 = [
        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/immersion-1.png",
            title: "Sacred Whispers Beneath the World's Oldest Tree",
            title2: "",
            description: "Sunlight dances through the leaves of the old Bodhi Tree as pilgrims lay lotus blossoms at dawn and monks chant. Track the cinnamon scent to hidden spice markets where vendors tell stories about royal Ayurvedic recipes. Decode fading temple frescoes with local storytellers, then sip Ceylon tea in a café with remnants of colonial era appeal. Faith here is a rhythm that still beats through every leaf and prayer. not a relic. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },
        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/immersion-2.png",
            title: "Cycling Through Time Ruins & Rustic Feasts",
            title2: "",
            description: "On two wheels glide past palaces in collapse and lotus cloaked tanks. Stop at the Quadrangle or look for artists working on palm leaf scrolls to interpret moonstone symbols. Feast on kottu roti under a family hut as fireflies rise; then, drum under banyan trees. Sitting here is history riding shotgun dusty sandaled and grinning. Experience on",
            link: "#",
            linkText: "Contrasts of Ceylon.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },

        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/immersion-3.png",
            title: "Experiencing Colombo's Thriving \ Art Scene",
            title2: "",
            description: "From modern galleries to traditional craft workshops, Colombo's art scene is vibrant with inventiveness. The National Art Gallery and Barefoot Gallery draw attention to Sri Lanka's changing creative character in which modern expression coexists peacefully with legacy. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },
        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/immersion-4.png",
            title: "Palmyra Groves and Temple Whispers",
            title2: "",
            description: "Wander across sun-dappled palmyra woods to Nallur Kandaswamy Kovil, where incense dances around gold-clad gods. See priests carry out centuries-old ceremonies, then sip palmyra toddy alongside farmers laughing in Tamil. Look for handwoven palm leaf baskets at little marketplaces in villages. The soul of Jaffria It is in the rustle of palmyra fronds and the clang of temple bells at evening. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },
        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/immersion-5.png",
            title: "Stone Whispers & Moonlit Kingdoms",
            title2: "",
            description: "Trace the Buddha carvings of Gal Vihara from the 12th century as evening transforms stone into gold. Pedal past Parakrama Samudra's glittering seas, where fishermen cast nets like old royals. Savour jackfruit curry at a lakefront farmhouse while listening to stories about kings under the stars. The ruins of Polonnaruwa reverberate with the echoes of empires and evening crickets, not silence. Experience on",
            link: "#",
            linkText: "Contrasts of Ceylon.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },
        {
            type: "1",
            image: "assets/images/best-kept-local-secrets/immersion-6.png",
            title: "Sacred Threads and Rebel Weavers",
            title2: "",
            description: "Deep in Kandy's backstreets, a collective of women dyes. handloom saris with jackfruit sap and crushed indigo. Thread by thread, they revive patterns banned during colonial rule secret maps to hidden temples. Wrap yourself in a Kandyan-era design, then join a rooftop lunch of kavum oil cakes and rebellion ballads. History here isn't worn—it's defiantly, dazzlingly rewoven. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "!text-left",
            classNameDescription: "!text-left",
            linkClassName: "",
        },
    ]

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full  py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/" },
                    { label: "Best kept local secrets" },
                ]} />
            </div>

            {/* Best kept local secrets */}
            <div className='w-full mx-auto'>
                <Hero2
                    image="assets/images/best-kept-local-secrets/hero.jpg"
                    title="Best kept local secrets"
                    description="Pure magic awaits"
                    type={2}
                    rating={4.9}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/*  All the Sights and Insights, Up Close and Personal*/}
            <div className='mt-12 my-container'>
                <Title2 title={"All the Sights and Insights, Up Close and Personal"} className={`text-center mb-2`} />
                <p className={`description text-center font-sourceSerif whitespace-pre-line `}>We show you the real heart of every place, from famous sights to hidden gems that only locals know about. Our expert curators and local insiders plan trips that blend famous sights with hidden gems. They tell the stories, flavours, and personal moments that turn travellers into storytellers and make for truly unforgettable adventures.</p>
                <div className='w-full flex justify-center mt-8'>
                    <Link href={'#'} className='no-underline'>
                        <Button variant="default" size={"lg"} className={``} >Search Tours</Button>
                    </Link>
                </div>
            </div>

            {/* Iconic Must-sees */}
            <div className='mt-12 my-container'>
                <Title2 title={"Iconic Must-sees"} className={`text-center mb-2`} />
                <p className={`description text-center font-sourceSerif whitespace-pre-line `}>You'll feel the difference when you skip the queues at famous attractions and uncover local treasures with your Personal Guide. Here are just six of the hundreds you can experience.</p>

                <div className='mt-4 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    {card3Data1.map((card, index) => (
                        <Card3
                            key={`${card.title}-${index}`}
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

            {/* testimonial 1 */}
            <div className='w-full mt-12 bg-[#CBC2C9] py-12'>
                <div className='my-container'>
                    <Card23
                        image="assets/images/best-kept-local-secrets/testimonial-1.png"
                        title="“We felt grateful”"
                        feedback="We actually lived like locals, tasted authentic curries, and learned about their traditions. Travel opens your eyes to new ways of life. We enjoyed every moment with our group exploring temples and beaches and returned home with precious memories of this incredible journey."
                        feedbackAuthor="Lisa T"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>

            {/* Cultural Immersion */}
            <div className='mt-12 my-container'>
                <Title2 title={"Cultural Immersion"} className={`text-center mb-2`} />
                <p className={`description text-center font-sourceSerif whitespace-pre-line `}>You'll find out that your Travelgate tour is more than just seeing the sights; it's also about tasting, smelling, and feeling the pulse of the place you're going. You'll feel like you've been a part of it for a short time when you leave. Here are a few cultural events in the area that you'll always remember.</p>
                <div className='mt-4 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    {card3Data2.map((card, index) => (
                        <Card3
                            key={`${card.title}-${index}`}
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

            {/* Simply the best and most relevant way to travel */}
            <div className='w-full mt-12 bg-[#EAE6EA] py-12'>
                <div className='my-container'>
                    <Section6
                        data={wayToTravel}
                        title="Simply the best and most relevant way to travel"
                        titleClassName=""
                    />
                </div>
            </div>

            {/* Beyond the Guidebooks */}
            <div className='w-full'>
                <Card27Carousel1
                    number={7}
                    cards={card27Carousel1}
                    title="Beyond the Guidebooks"
                    description="On your Travelgate trip, the places you visit are more than just postcard-perfect: every time you meet a local, it feels like you're catching up. with an old friend. Your Local Specialists will show you what the guidebooks can't: a real insider's look at the must sees and hidden gems in each place. They love to travel and their hometowns. These are just a few of the local events that will stick with you."
                    bgColor1="bg-transparent"
                    bgColor2="bg-transparent"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle="!text-textcolor1"
                    classNameDescription="!text-textcolor1"
                />
            </div>

            {/* testimonial 2 */}
            <div className='w-full mt-12 bg-[#C8CCD7] py-12'>
                <div className='my-container'>
                    <Card22
                        image="assets/images/best-kept-local-secrets/testimonial-2.png"
                        title="“Thanks Travelgate”"
                        feedback="We started an amazing trip through Sri Lanka in 2024, personally feeling its warmth and beauty. The touching “Be My Guest” event in Kandy was among the most treasured memories. We were invited into the hillside house of a local family, where the air smelt of spices and laughter abound. My son struck up a conversation with our host's young daughter as we were gathering to eat a traditional meal-only to learn their names matched! We shall treasure this experience always because of the delight, the connection, and the one perfect serendipitous moment."
                        feedbackAuthor="Generva Hertig"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>

            {/* Our most loved trips for groups of family and friends */}
            <div className='w-full bg-[#2D5A7C] py-12'>
                <div className='my-container'>
                    <TourCardCarousel1
                        data={tourCardCarousel1Data}
                        title="Our most loved trips for groups of family and friends"
                        description=""
                        button="See More Trips"
                        classNameButton=""
                        classNameTitle="!text-white"
                        classNameDescription=""
                    />
                </div>
            </div>

            <div className='w-full mt-12'>
                <Section19 />
            </div>
        </div>

    )
}
