import React from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero2 from '@/components/comen/hero/Hero2'
import Section3 from '@/components/comen/section/Section3'
import Section17 from '@/components/comen/section/Section17'
import Card3Carousel1 from '@/components/comen/carousel/Card3Carousel1'
import Card22 from '@/components/comen/card/Card22'
import Card23 from '@/components/comen/card/Card23'
import Section6 from '@/components/comen/section/Section6'
import Card1Carousel1 from '@/components/comen/carousel/Card1Carousel1'
import Section19 from '@/components/comen/section/Section19'

export default function page() {


    const card3Carousel1Data1 = [
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/colombo-experience-1.png",
            title: "Sunset Paddles Through Urban Mangrove Mysteries",
            title2: "",
            description: "Glide silently across Colombo's secret mangrove tunnels while the sky turns gold, spotting kingfishers and water monitors sunbathing on twisted roots. Dock on a small island for a spicy kadala and woodapple juice picnic where city noise disappears into bird conversation. Local legends of smugglers from the colonial era who used to hide here. The wild heart of Sri Lanka thrives even where mangroves and towers share the horizon. Experience on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/colombo-experience-2.png",
            title: "Hidden Wetland Trails & Feathered Encounters",
            title2: "",
            description: "Minutes from the city, wander a peaceful marshland refuge carrying binoculars. Spot iridescent bee-eaters flitting over reeds, migrant ducks, and purple herons, Cinnamon-laced tea is served in a rustic hut while guides relate stories of ancient irrigation systems still tending to the earth. The secret Eden of Colombo is where winged wonders dance in the breeze alongside history and ecology. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/colombo-experience-3.png",
            title: "Oceanfront Strolls and Salt-Kissed Street Feasts",
            title2: "",
            description: "Join residents at evening on a breezy promenade, dodging kite-flyers and laughing children. From a cart, grab crispy isso wade (shrimp fritters) then wade into warm waves as fishermen repair nets close by. Find out how this stretch once carried colonial parades. and royal processions, Lanka's soul? Here in salt-sprayed sunsets, chilli heat, and the ceaseless rhythm of land meeting sea is found. Experience on",
            link: "#",
            linkText: "Discover Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        }
    ]

    const card3Carousel1Data2 = [
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/kandy-experience-1.png",
            title: "Dawn Walks Through Royal Orchid Forests",
            title2: "",
            description: "Starting at sunrise in a botanical paradise designated by UNESCO, mist hangs from tall palms and technicolor orchids. Trail hidden past century-old. spice trees and whispering bamboo groves, then picnic beside a lily-strewn pond. Local guides tell stories of kings who presented foreign dignitaries rare saplings. The wild grace of Sri Lanka? It is here—untamed, fragrant, anchored in royal territory. Experience on",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/kandy-experience-2.png",
            title: "Sacred Groves and Squirrel Serenades",
            title2: "",
            description: "Explore a lesser-known sanctuary where emerald canopies protect purple-faced langurs and chattering giant squirrels. Discover cliffside caves once used by meditating monks and now filled with birdsong. Pack herbal tea for a break at a secluded waterfall, whose waters are said to contain ancient blessings. Kandy's wilderness is more than just preserved, it's a living, breathing representation of the island's soul.Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/kandy-experience-3.png",
            title: "Misty Tea Trails and Waterfall Plunges",
            title2: "",
            description: "Where tea pluckers sing Tamil harvest songs, their baskets full of jade leaves, cycle terraced hillsides. After a bracing swim at a secret cascade, sip a freshly made cup in a bungalow designed in colonial times. Watch carefully for peacocks straying across emerald rows. The hills of Sri Lanka create magic, mist, and monsoon-kissed memories, not only tea. Experience on",
            link: "#",
            linkText: "Sri Lanka's Must See Gems.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data3 = [
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/ella-experience-1.png",
            title: "Sunrise Hikes Through Cloud Kissed Tea Trails",
            title2: "",
            description: "Explore Ella's misty ridges at dawn, passing tea pickers singing Tamil harvest songs. Navigate secret trails to a vantage point where the Nine Arch Bridge emerges from swirling clouds. Treat yourself to a hilltop breakfast of kottu roti and ginger tea served in a planter's colonial-era bungalow. Sri Lanka's hills do more than just inspire; they breathe, steeped in mist and a thousand untold stories. Experience on",
            link: "#",
            linkText: "Serenity Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/ella-experience-2.png",
            title: "Jungle Ravines & Hidden Infinity Pool Plunges",
            title2: "",
            description: "Drop into a less known gorge where emerald abysses are created from natural infinity pools. Swim under waterfalls surrounded by wild orchids; then, picnic on mango achcharu and coconut roti. Local guides tell stories of yakas (spirits) watching over these rivers. Ella's wild pulse? It is unvarnished, unprocessed, and rife with jungle secrets. Experience on",
            link: "#",
            linkText: "Classic Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/ella-experience-3.png",
            title: "Moonlit Train Tracks & Canyon Star Stories",
            title2: "",
            description: "Walk abandoned railway tunnels under a torch, then emerge to view the Mahaweli River slinking beneath cliffs. Sip cinnamon chai accompanied by a retired stationmaster who decodes constellations—Sinhalese stories spun into star maps. What beauty exists in Sri Lanka? Mountains meet mythologies here, and every rail tie hums with cosmic whispers and colonial echoes. Experience on",
            link: "#",
            linkText: "Classic Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/ella-experience-2.png",
            title: "Jungle Ravines & Hidden Infinity Pool Plunges",
            title2: "",
            description: "Drop into a less known gorge where emerald abysses are created from natural infinity pools. Swim under waterfalls surrounded by wild orchids; then, picnic on mango achcharu and coconut roti. Local guides tell stories of yakas (spirits) watching over these rivers. Ella's wild pulse? It is unvarnished, unprocessed, and rife with jungle secrets. Experience on",
            link: "#",
            linkText: "Classic Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data4 = [
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/matale-experience-1.png",
            title: "Summit Secrets in the Misty Knuckles Range",
            title2: "",
            description: "Trek through the UNESCO listed Knuckles Range, where cloud forests shroud jagged peaks and endemic birds flit between ancient trees. Navigate trails used by Vedda tribes, pausing at hidden waterfalls for cinnamon stick brewed tea. Local guides share tales of colonial era explorers who vanished in these mists. Sri Lanka's wild soul? It's here untamed, rugged, and humming with the whispers of forgotten trails. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/matale-experience-2.png",
            title: "Spice Gardens and Herbal Wisdom Walks",
            title2: "",
            description: "Wander terraced gardens bursting with cardamom, vanilla, and turmeric, their scents mingling with the chatter of parrots, Learn to craft Ayurvedic balms with healers who decode leaves' hidden powers, then taste curry cooked in clay pots over coconut husk fires. The island's essence? Rooted in soil, spice, and generations of green-thumbed wisdom.Experience on",
            link: "#",
            linkText: "Contrasts of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        }
    ]

    const card3Carousel1Data5 = [
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/habarana-experience-1.png",
            title: "Sunset Safari in Forgotten Marshlands",
            title2: "",
            description: "Riding a bicycle or pedalling past reflected lakes where water buffalo wallow and painted storks stalk prey, explore Habarana's less well-known wetlands. A local farmer-guide breaks down bird calls and offers techniques for locating elusive fishing cats. Cap it with a kottu lunch by the lake covered in lotus leaves. The wild soul of Sri Lanka? Untamed, unscripted, and humming with twilight secrets here is. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/habarana-experience-2.png",
            title: "Village Bullock Cart Journeys & Starry Paddy Feasts",
            title2: "",
            description: "Riding in a wooden bullock cart across emerald rice fields, cicadas syncopated the rhythm. Help farmers plant heirloom seeds using age old techniques; then, feast under the stars on clay pot curries and palm sugar sweets. Stories of old harvest ceremonies abound in arrack toddies. The heart of the island thrashes in muddy fields, monsoon clouds, and centuries old knowledge. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/habarana-experience-3.png",
            title: "Jungle Night Walks & Firefly Canopy Magic",
            title2: "",
            description: "Trek silent forest trails with a tracker's flashlight, spotting mouse deer and civets in the beam. Climb a watchtower to witness fireflies turn trees into constellations. A Vedda elder shares creation myths under a jackfruit tree, his voice merging with frog choruses. Sri Lanka's wildness isn't just seen it's felt, a primal whisper in the dark. Experience on",
            link: "#",
            linkText: "Contrasts of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        }
    ]

    const card3Carousel1Data6 = [
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/kithulgala-experience-1.png",
            title: "White Water Rafting & Riverside Spice Feasts",
            title2: "",
            description: "Tackle the Kelani River's rapids, dodging boulders as hornbills screech overhead. Post adrenaline, feast riverside on fiery kukul mas curry cooked in banana leaves, with tales of British planters' reckless rubber schemes. A villager demonstrates how to weave rafts from jungle vines. The island's pulse? It's in frothy rapids, chili heat, and rivers that rewrite history. Experience on",
            link: "#",
            linkText: "Incredible Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/outdoor-nature-experience/kithulgala-experience-2.png",
            title: "Sunrise Jungle Trails & Secret Waterfall Plunges",
            title2: "",
            description: "Hike mist wrapped trails through Kitulgala's rainforest, where dawn light filters through giant ferns. Follow a local forager to hidden cascades, leaping into natural pools where the Bridge on the River Kwai was filmed. Dry off with wild mango plucked mid hike, juice dripping down your chin. Sri Lanka's wild heart? It's here untamed, drenched, and buzzing with Jurassic vibes. Experience on",
            link: "#",
            linkText: "Contrasts of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
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

    const card1Carousel1Data = [
        {
            image: "assets/images/outdoor-nature-experience/experiences-1.png",
            title: "Oceanic Adventures",
            description: "Let the ocean set you free ",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/outdoor-nature-experience/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/outdoor-nature-experience/experiences-3.png",
            title: "Wild Frontiers",
            description: "Experience the thrill of wildlife up close",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/outdoor-nature-experience/experiences-1.png",
            title: "Oceanic Adventures",
            description: "Let the ocean set you free ",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },

    ]

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Be My Guest" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='w-full mx-auto'>
                <Hero2
                    image="assets/images/outdoor-nature-experience/hero.png"
                    title="Outdoor & Nature"
                    description="Find epic views, get back to nature, live the adventure"
                    type={2}
                    rating={4.9}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/* Wild scenery, big adventures */}
            <div className='w-full mt-12'>
                <Section3
                    title="Wild scenery, big adventures"
                    description1=""
                    description2={`Are you willing to give the screens a break for sunsets? The crisp mountain air and crunch of the trail underfoot added to the tension in the trade. Let the sound of wild rivers fill your days, the stories you tell around the campfire light up your evenings, and the sight of the night sky remind you how fortunate you are to be alive. Let us go outside and feel the thrill of adventure.`}
                    button="Search Tours"
                    buttonLink="/search"
                    titleClassName="not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            {/* Roam, roots and revel */}
            <div className='w-full mt-12'>
                <Section17
                    title="Roam, roots and revel"
                    description="Every amazing view, every step into the wild, and every moment spent in nature will tell a tale you will carry long after your trip ends. Explore the fantastic outdoors of Sri Lanka, where scenes, species, and pure adventure abound."
                    videoId="nxWNyTiE7J0"
                />
            </div>

            {/* A few of Colombo, Sri Lanka Outdoor & Nature experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data1}
                    title="A few of Colombo, Sri Lanka Outdoor & Nature experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Kandy, Sri Lanka Outdoor & Nature experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data2}
                    title="A few of Kandy, Sri Lanka Outdoor & Nature experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* testimonial 1 */}
            <div className='w-full mt-12 bg-[#C8CCD7] py-12'>
                <div className='my-container'>
                    <Card22
                        image="assets/images/be-my-guest/testimonial-1.png"
                        title="“Magical”"
                        feedback="In 2024, we set off an amazing trip through Sri Lanka, fully absorbing its stunning scenery and kind hospitality. The highlight was an outdoor and nature experience in Kandy, where an echo of laughter and spices welcomed us from a hillside house. My son and our host's daughter found their common name a perfect, serendipitous link that made this moment absolutely magical, as we gathered for a traditional meal. Surrounded by the splendour of nature, we sensed the soul of Sri Lanka in every contact, always carrying these memories with us."
                        feedbackAuthor="Generva Hertig"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>

            {/* A few of Ella, Sri Lanka Outdoor & Nature experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data3}
                    title="A few of Ella, Sri Lanka Outdoor & Nature experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Matale, Sri Lanka Outdoor & Nature experiences  */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data4}
                    title="A few of Matale, Sri Lanka Outdoor & Nature experiences "
                    size0={1}
                    size768={2}
                    size1024={2}
                    size1280={2}
                    minSize={2}
                    classNameTitle=""
                />
            </div>

            {/* testimonial 2 */}
            <div className='w-full mt-12 bg-[#C3CCCB] py-12'>
                <div className='my-container'>
                    <Card23
                        image="assets/images/be-my-guest/testimonial-2.png"
                        title="“Simply outstanding”"
                        feedback="Sri Lanka's Cultural Triangle becomes a vibrant dialogue between eras in “Chronicles of Culture” In Anuradhapura, monks' chants match rustling leaves older than empires at the Bodhi Tree. Moonlit bicycle rides past stone queens and lotus tanks in Polonnaruwa feel like time travel. Sigiriya's frescoed damsels smile at Instagram photos, while Dambulla's spice markets bustle with turmeric-stained haggling."
                        feedbackAuthor="Jose and Donna G"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>

            {/* A few of Habarana, Sri Lanka Outdoor & Nature experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data5}
                    title="A few of Habarana, Sri Lanka Outdoor & Nature experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Kithulgala, Sri Lanka Outdoor & Nature experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data6}
                    title="A few of Kithulgala, Sri Lanka Outdoor & Nature experiences"
                    size0={1}
                    size768={2}
                    size1024={2}
                    size1280={2}
                    minSize={2}
                    classNameTitle=""
                />
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

            <div className='w-full mt-12'>
                <Card1Carousel1
                    cards={card1Carousel1Data}
                    title="More one-of-a kind experiences"
                    description="You will also enjoy a Be My Guest experience and MAKE TRAVEL RESPONSIBLE® Experience on every tour in addition to Stays with Tales experiences on some."
                    bgColor1="bg-[#0b5d56]"
                    bgColor2="bg-bggray4"
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
