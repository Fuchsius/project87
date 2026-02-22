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
            image: "assets/images/wild-frontiers/yala-experience-1.png",
            title: "Track Leopards Through Rustling Dry Zone Jungles",
            title2: "",
            description: "On a jeep safari through Yala's sun-dappled thickets, a knowledgeable guide deciphers animal tracks and bird calls. Elephants trumpeting near waterholes, sloth bears running through scrub, or leopards lounging on rocks. Reserve binoculars for iridescent peacocks. No other excitement compares to wild meetings. Wild Sri Lanka invites adventurers to witness nature's unscripted drama. Experience on",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/yala-experience-2.png",
            title: "Coastal Treks and Saltwater Lagoons Discovery",
            title2: "",
            description: "Wander Yala's windswept coastline, where turquoise waves hit golden sands. Crocodiles, flamingos, and herons live in brackish lagoons with mangroves. Look for gently bobbing fishing catamarans. This mix of rugged shorelines and tranquil wetlands shows Sri Lanka's ecological harmony, a place where adventure and preservation coexist. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/yala-experience-3.png",
            title: "Village Life and Wilderness Conservation Immersion",
            title2: "",
            description: "Learn traditional farming methods or share stories over spicy kottu roti with Yala communities. Help restore endemic species' habitats by planting trees. This cultural exchange shows how ecology and tradition are linked. Sri Lanka's wild spirit thrives in its jungles and in the hearts of those protecting it, a journey that balances humanity and nature Experience on",
            link: "#",
            linkText: "Sri Lanka's Must See Gems.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/yala-experience-2.png",
            title: "Coastal Treks and Saltwater Lagoons Discovery",
            title2: "",
            description: "Wander Yala's windswept coastline, where turquoise waves hit golden sands. Crocodiles, flamingos, and herons live in brackish lagoons with mangroves. Look for gently bobbing fishing catamarans. This mix of rugged shorelines and tranquil wetlands shows Sri Lanka's ecological harmony, a place where adventure and preservation coexist. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data2 = [
        {
            type: "1",
            image: "assets/images/wild-frontiers/minneriya-experience-1.png",
            title: "Witness the Great Elephant Gathering by Jeep",
            title2: "",
            description: "Cruise Minneriya's sunbaked plains during dry season, when hundreds of elephants converge at the reservoir. Watch calves playfully splash while matriarchs guard the herd. Spot painted storks perched in treetops or monitor lizards basking on rocks. Guides share insights into their social dynamics.",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/minneriya-experience-2.png",
            title: "Cycle Through Rural Villages and Ancient Tank Systems",
            title2: "",
            description: "Pedal past emerald paddy fields and crumbling reservoirs built by ancient kings. Chat with farmers tending crops or weaving palm leaf handicrafts. Stop at a village home for smoky black tea and kavum (sweet rice cakes). These timeless landscapes reveal Sri Lanka's ecological ingenuity, where human history and nature's rhythms coexist, inviting travelers to embrace slow, purposeful adventure. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/minneriya-experience-3.png",
            title: "Discover Hidden Forest Trails and Birdwatching Havens",
            title2: "",
            description: "Trek Minneriya's lesser known paths, where dappled sunlight filters through ironwood trees. Listen for the metallic call of Sri Lankan junglefowl or spot emerald green bee eaters darting overhead. Quiet corners of the park teem with life, from butterflies to macaques. This mosaic of forests and wetlands embodies Sri Lanka's adventurous spirit untouched, unpredictable, and fiercely protective of its wild soul. Experience on",
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
            image: "assets/images/wild-frontiers/bundala-experience-1.png",
            title: "Safari Among Flamingos and Saltwater Crocodiles",
            title2: "",
            description: "Explore Ella's misty ridges at dawn, passing tea pickers singing Tamil harvest songs. Navigate secret trails to a vantage point where the Nine Arch Bridge emerges from swirling clouds. Treat yourself to a hilltop breakfast of kottu roti and ginger tea served in a planter's colonial-era bungalow. Sri Lanka's hills do more than just inspire; they breathe, steeped in mist and a thousand untold stories. Experience on",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/bundala-experience-2.png",
            title: "Coastal Treks Through Windswept Dunes and Lagoons",
            title2: "",
            description: "Stroll Bundala's rugged coastline, where turquoise waves meet golden dunes. Explore tidal pools teeming with crabs or watch olive ridley turtles nest (seasonally). Chat with fisherfolk mending nets in weathered catamarans. This mosaic of sea and savannah proves Sri Lanka's adventurous spirit lies in landscapes shaped equally by untamed forces and human hands working gently within nature's rhythms Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/bundala-experience-3.png",
            title: "Village Life and Traditional Fishing Traditions",
            title2: "",
            description: "Join a conservationist-led night patrol along the dark sands, where baby turtles scramble towards phosphorescent waves. Learn how locals keep nests safe from prowling dogs and plastic tides. Drink ginger tea under the stars while fishermen's lanterns bob on the horizon. Sri Lanka's coast is more than just postcard perfect, it's a living, breathing dance of survival and moonlit wonders. Experience on",
            link: "#",
            linkText: "Sri Lanka's Must See Gems.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/bundala-experience-2.png",
            title: "Coastal Treks Through Windswept Dunes and Lagoons",
            title2: "",
            description: "Stroll Bundala's rugged coastline, where turquoise waves meet golden dunes. Explore tidal pools teeming with crabs or watch olive ridley turtles nest (seasonally). Chat with fisherfolk mending nets in weathered catamarans. This mosaic of sea and savannah proves Sri Lanka's adventurous spirit lies in landscapes shaped equally by untamed forces and human hands working gently within nature's rhythms Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data4 = [
        {
            type: "1",
            image: "assets/images/wild-frontiers/sinharaja-experience-1.png",
            title: "Trek Mist Covered Trails in Primeval Rainforest",
            title2: "",
            description: "Wander Sinharaja's mossy paths, where tangled vines and ancient trees drip with endemic ferns. Spot purple faced langurs leaping through canopies or hear the shrill call of Sri Lanka's national bird, the junglefowl. Local guides reveal medicinal plants and hidden waterfalls. Every step immerses you in a living relic of evolution. Sri Lanka's untamed wilderness thrives here, raw, mysterious, and fiercely alive. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/sinharaja-experience-2.png",
            title: "Birdwatch Among Endemic Canopy Dwellers",
            title2: "",
            description: "Pause beneath towering dipterocarps to glimpse flashes of color crimson-backed flamebacks or emerald-green hanging parrots. Sinharaja shelters 20+ bird species found nowhere else. Listen for mixed species flocks chattering like a symphony. Binoculars reveal miniature worlds, tree frogs, jewel-toned lizards. This biodiversity hotspot pulses with Sri Lanka's adventurous spirit, where every creature plays a role in preserving Earth's rarest rainforest. Experience on",
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
            image: "assets/images/wild-frontiers/gal-oya-experience-1.png",
            title: "Boat Safaris Among Swimming Elephants and Islands",
            title2: "",
            description: "Glide across Gal Oya's vast reservoir, where elephants swim between forested islands, trunks raised like snorkels. Spot crocodiles sunning on banks or painted storks wading in shallows. Local guides share tales of the Vedda people's bond with the land. This watery wilderness feels timeless, a rare chance to witness giants in their element. Sri Lanka's untamed spirit thrives where nature writes its own wild rules. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/gal-oya-experience-2.png",
            title: "Walk with Indigenous Guardians of the Forest",
            title2: "",
            description: "Join Vedda elders on trails their ancestors walked, learning to identify medicinal plants and track wildlife. Taste wild honey harvested sustainably or watch them craft tools from bark. Their stories around a crackling fire reveal a philosophy of coexistence. Gal Oya isn't just a park—it's a living classroom. Sri Lanka's adventurous soul lies in traditions that honor, never conquer, the untamed world. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/gal-oya-experience-3.png",
            title: "Trek to Whispering Waterfalls and Hidden Caves",
            title2: "",
            description: "Hike through dry zone forests to secluded waterfalls cascading into jade pools. Spot sambar deer drinking at dusk or hornbills perched in fig trees. Explore caves etched with ancient rock art, silent witnesses to millennia of wild history. Every trail here feels like a secret. Sri Lanka's untouched landscapes challenge you to wander deeper, where preservation and raw beauty exist in unspoken harmony.Experience on",
            link: "#",
            linkText: "Contrasts of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/gal-oya-experience-2.png",
            title: "Walk with Indigenous Guardians of the Forest",
            title2: "",
            description: "Join Vedda elders on trails their ancestors walked, learning to identify medicinal plants and track wildlife. Taste wild honey harvested sustainably or watch them craft tools from bark. Their stories around a crackling fire reveal a philosophy of coexistence. Gal Oya isn't just a park—it's a living classroom. Sri Lanka's adventurous soul lies in traditions that honor, never conquer, the untamed world. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data6 = [
        {
            type: "1",
            image: "assets/images/wild-frontiers/horton-experience-1.png",
            title: "Trek to the Edge of the World's End",
            title2: "",
            description: "Hike Horton Plains' iconic cliff, where misty chasms plunge 880 meters. Spot sambar deer grazing in golden grasslands or endemic lizards darting through dwarf forests. Guides point out rare orchids and twisted, cloud-kissed trees. This high altitude realm feels suspended between earth and sky. Sri Lanka's untamed wilderness dares you to stand where ancient geology and raw, elemental beauty collide, untouched and unapologetically wild. Experience on",
            link: "#",
            linkText: "Incredible Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wild-frontiers/horton-experience-2.png",
            title: "Wander Mossy Forests and Secret Waterfall Trails",
            title2: "",
            description: "Follow trails to Baker's Falls, where icy streams cascade through emerald ferns. Listen for yellow eared bulbuls or spot twisted rhododendrons shaped by fierce winds. Discover pitcher plants and lichen cloaked rocks, micro worlds thriving in mist. Horton Plains' magic lies in its fragile details. Sri Lanka's adventurous spirit blooms where nature's artistry defies human scale, urging explorers to tread softly and marvel deeply. Experience on",
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
            image: "assets/images/wild-frontiers/experiences-1.png",
            title: "Be My Guest",
            description: "The authentic local travel experience",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/wild-frontiers/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/wild-frontiers/experiences-3.png",
            title: "Outdoor & Nature",
            description: "Adventure awaits, just step outside",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/wild-frontiers/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
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
                    image="assets/images/wild-frontiers/hero.png"
                    title="Wild Frontiers"
                    description="Discover hidden trails, find wild joy"
                    type={2}
                    rating={4.9}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/* Into the wild, into the unknown */}
            <div className='w-full mt-12'>
                <Section3
                    title="Into the wild, into the unknown"
                    description1=""
                    description2={`Few travel experiences compare to seeing Sri Lanka's incredible animals up close. Our Wild Frontiers experiences take you closer to the heart of the island, through the vast plains and lush rainforests. Leopards roam freely in Yala, elephants can be spotted in Minneriya National Park, and the elusive sloth bear can be found in Wilpattu. These encounters with Sri Lanka's wild beauty will remain treasured memories for a lifetime.`}
                    button="Search Tours"
                    buttonLink="/search"
                    titleClassName="not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            {/* Nature calls, go discover */}
            <div className='w-full mt-12'>
                <Section17
                    title="Nature calls, go discover"
                    description="Every path leads to amazing scenery, every interaction reveals the beauties of nature, and every trip leaves a lasting effect. From wild plains to misty jungles, Sri Lanka's wild heart invites you to explore, live, and treasure unique experiences."
                    videoId="nxWNyTiE7J0"
                />
            </div>

            {/* A few of Yala, Sri Lanka Wild frontier experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data1}
                    title="A few of Yala, Sri Lanka Wild frontier experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Minneriya, Sri Lanka Wild frontier experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data2}
                    title="A few of Minneriya, Sri Lanka Wild frontier experiences"
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

            {/* A few of Bundala, Sri Lanka Wild frontier experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data3}
                    title="A few of Bundala, Sri Lanka Wild frontier experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Sinharaja, Sri Lanka Wild frontier experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data4}
                    title="A few of Sinharaja, Sri Lanka Wild frontier experiences"
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
                        title="“Simply scenery”"
                        feedback="Combining adventure with peace and friendly hospitality, Sri Lanka is a paradise of outdoor and natural experiences. From amazing scenery to immersive interactions with Sri Lanka's unspoiled beauty, every moment seemed magical. The highlight was dining under the open sky, dancing beneath the stars, and getting to know residents on a picturesque farm. Surrounded by the beauty of the country, we made lifelong memories embracing Sri Lanka's energetic outdoor attitude."
                        feedbackAuthor="Jose and Donna G"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>

            {/* A few of Gal Oya, Sri Lanka Wild frontier experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data5}
                    title="A few of Gal Oya, Sri Lanka Wild frontier experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Horton Plains, Sri Lanka Wild frontier experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data6}
                    title="A few of Horton Plains, Sri Lanka Wild frontier experiences"
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
