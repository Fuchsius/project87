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
            image: "assets/images/oceanic-adventures-experience/kalpitiya-experience-1.png",
            title: "Sail with Spinner Dolphins at Sunrise",
            title2: "",
            description: "Glide across Kalpitiya's turquoise waters as playful spinner dolphins leap beside your boat. Local guides lead dawn excursions where pods surf bow waves, their acrobatics lighting up the morning. Keep eyes peeled for turtles bobbing nearby. The blend of wild encounters and golden horizons feels timeless. Sri Lanka's coast thrums with life, where ocean and humanity hum in harmony. Experience on",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/kalpitiya-experience-2.png",
            title: "Kitesurf the Lagoons' Wind Whipped Playground",
            title2: "",
            description: "Kalpitiya's shallow lagoons are kitesurfing heaven, where steady winds and flat waters let you soar. Beginners learn basics with expert instructors, while pros carve waves near the reef's edge. Post-ride, sip king coconut water as fishermen haul nets nearby. Here, adventure meets tradition, a reminder of Sri Lanka's raw, sunlit coastal magic. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/kalpitiya-experience-3.png",
            title: "Snorkel Untouched Reefs Teeming with Life",
            title2: "",
            description: "Slip into Kalpitiya's Bar Reef, a marine sanctuary where parrotfish dart and neon corals ripple. Swim through underwater canyons, spotting moray eels and shy octopuses in crevices. Local conservation efforts keep these waters pristine, offering glimpses of a thriving ecosystem. Sri Lanka's oceanic charm isn't just seen, it's felt, in every current and creature that whispers this is paradise, unspoiled. Experience on",
            link: "#",
            linkText: "Sri Lanka's Must See Gems.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data2 = [
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/trincomalee-experience-1.png",
            title: "Swim Beside Gentle Giants in Blue Bay",
            title2: "",
            description: "Pull on a snorkel and slip into Trincomalee's sapphire waters, where whale sharks glide like silent submarines. These gentle giants feed near the surface, offering rare snorkeling encounters. Local spotters ensure respectful distances, blending thrill with conservation. Sri Lanka's coastal beauty isn't just postcard perfect, it's a living dance of life beneath the waves. Experience on",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/trincomalee-experience-2.png",
            title: "Dive into History on Sunken Ship Trails",
            title2: "",
            description: "Descend into Trinco's deep-blue embrace to explore WWII shipwrecks now teeming with parrotfish and barracuda. The HMS Hermes rests like a moss-covered monument, its hull a canvas for corals. Guides share tales of naval history while turtles drift by. Sri Lanka's oceanic charm lies where heritage and wild, untouched seas collide. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/trincomalee-experience-3.png",
            title: "Paddle Through Mangrove Labyrinths & Hidden Coves",
            title2: "",
            description: "Glide past tangled mangrove roots in a kayak, where sunlight filters through emerald canopies. Spot kingfishers diving and monitor lizards basking on shores. Secret lagoons open to empty beaches, inviting lazy swims. In Trincomalee, even quiet adventures echo the rhythm of the coast proof of Sri Lanka's timeless bond with its pristine, salt kissed wilderness. Experience on",
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
            image: "assets/images/oceanic-adventures-experience/galle-experience-1.png",
            title: "Sunset Fort Rambles & Secret Sea Caves",
            title2: "",
            description: "Stroll Galle's 17th century ramparts as the sky turns pink and waves crash below. Tidal pools teeming with neon fish await you behind a hidden arch. Local guides point out Dutch era tunnels carved into cliffs, which are now home to roosting bats. Finish with coconut sambol sandwiches on a quiet beach. Sri Lanka's magic? Where colonial grit meets wild beaches, and each sunset tells a new salt kissed story. Experience on",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/galle-experience-2.png",
            title: "Moonlit Bioluminescence Swims & Ghost Ship Legends",
            title2: "",
            description: "After dark, swim into a remote bay where plankton glow electric blue. Stories of 16th-century shipwrecks and phantom galleons reported to haunt these waters are told by a marine conservationist-guide. Quietly float, your strokes creating constellations under the surface. Here the ocean whispers pirate curses and moonlit miracles, not only shines. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/galle-experience-3.png",
            title: "Moonlight Beach Walks & Turtle Hatchling Tales",
            title2: "",
            description: "Join a conservationist-led night patrol along the dark sands, where baby turtles scramble towards phosphorescent waves. Learn how locals keep nests safe from prowling dogs and plastic tides. Drink ginger tea under the stars while fishermen's lanterns bob on the horizon. Sri Lanka's coast is more than just postcard perfect, it's a living, breathing dance of survival and moonlit wonders. Experience on",
            link: "#",
            linkText: "Sri Lanka's Must See Gems.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data4 = [
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/mirissa-experience-1.png",
            title: "Sunrise Whales & Ocean Giants at Play",
            title2: "",
            description: "Get on an early boat to see blue whales breaching in the golden dawn light, their misty blows painting rainbows. Crews tell stories of conservation victories and rogue dolphins racing the bow. After the sighting, snorkel the coral gardens where turtles graze. Sri Lanka's seas? A wild ballet in which leviathans and reef life interact in salty harmony. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/mirissa-experience-2.png",
            title: "Secret Beach Coves & Coconut Hammock Hangs",
            title2: "",
            description: "Trek past Coconut Tree Hill to hidden coves with turquoise waves kissing empty sands. Set up a hammock, eat spicy kottu at a beach hut, and watch fishermen mend nets with century old knots. During low tide, look for hermit crabs in tidal pools. Mirissa's shores are more than just beautiful; they are pages from an unwritten island odyssey. Experience on",
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
            image: "assets/images/oceanic-adventures-experience/weligama-experience-1.png",
            title: "Sunrise Stilt Fishing & Coastal Storytelling",
            title2: "",
            description: "Join weathered fishermen perched on wooden stilts at dawn as they learn to dance silently with the tides. Wade into the shallows to try your balance, then enjoy a beachside breakfast of spicy kottu while they tell stories about tsunamis and resilience. Nearby. baby turtles scramble towards the surf. Sri Lanka's essence? Salt-crusted traditions, turquoise horizons, and shores brimming with unending life. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/weligama-experience-2.png",
            title: "Secret Lagoon Paddles & Jungle Canopy Feasts",
            title2: "",
            description: "Kayak tea colored waters pass through mangroves where kingfishers dive and track lizards sunbathing. Lunch of jackfruit curry made in clay pots at a secret inlet under a banyan tree older than colonialism. Later swing from a rope into freshwater ponds. Here nature is a wild, green embrace that transcends time, not a view. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/weligama-experience-3.png",
            title: "Surf Swells Where Reef Meets Rhythm",
            title2: "",
            description: "Grab a board and carve Weligama's famous right-hand reef breaks, where waves roll in like liquid melody. Beginners learn stance on gentle rollers, while pros tackle hollow tubes. Post surf, swap stories with locals at beachside shacks grilling fresh catch. Sri Lanka's coastal beauty isn't just a backdrop, it's the pulse of sunlit days and salt sprayed stoke. Experience on",
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
            image: "assets/images/oceanic-adventures-experience/hikkaduwa-experience-1.png",
            title: "Seaside Strolls & Fishermen's Tales",
            title2: "",
            description: "Join beachside elders mending nets as they share stories of Hikkaduwa's fishing heyday. Wander golden sands where catamarans rest like sunbathing whales, then savor spicy crab curry at a lagoon side shack. This isn't just a coastal town, it's a living scrapbook of Sri Lanka's untamed shores, where salt, sweat, and sea breeze stitch together its wild, welcoming soul. Experience on",
            link: "#",
            linkText: "Incredible Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/oceanic-adventures-experience/hikkaduwa-experience-2.png",
            title: "Seaside Strolls & Fishermen's Tales",
            title2: "",
            description: "Glide through Hikkaduwa's marine sanctuary at dawn, your kayak slicing glassy waters above vibrant coral gardens. Look for parrotfish nibbling on reefs and elusive monkfish camouflaged in seagrass. A sandbar breakfast of curd and treacle is served alongside stories about stilt fishermen's ghostly ancestors. Sri Lanka's coast isn't just postcard perfect, it's a living kaleidoscope where reef meets rhythm. Experience on",
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
            image: "assets/images/oceanic-adventures-experience/experiences-1.png",
            title: "Be My Guest",
            description: "The authentic local travel experience",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/oceanic-adventures-experience/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/oceanic-adventures-experience/experiences-3.png",
            title: "Outdoor & Nature",
            description: "Wild scenery, big adventures",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/oceanic-adventures-experience/experiences-3.png",
            title: "Outdoor & Nature",
            description: "Wild scenery, big adventures",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },

    ]

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full  py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Be My Guest" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='w-full mx-auto'>
                <Hero2
                    image="assets/images/oceanic-adventures-experience/hero.jpg"
                    title="Oceanic Adventures"
                    description="Let the ocean set you free"
                    type={2}
                    rating={4.9}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/* One ocean, infinite adventures */}
            <div className='w-full mt-12'>
                <Section3
                    title="One ocean, infinite adventures"
                    description1=""
                    description2={`Set out on an adventure unlike any other and find hidden treasures and amazing coastlines of Sri Lanka. Our Oceanic Adventures promise pure exploration whether your trip is into the unspoiled beauty of Trincomalee, spotting dolphins off Kalpitiya, or gliding over the calm seas of Mirissa. Let the rhythm of the waves lead you to unforgettable experiences; relax, soak in the tropical vistas.`}
                    button="Search Tours"
                    buttonLink="/search"
                    titleClassName="not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            {/* Seashells, sunsets, and serenity */}
            <div className='w-full mt-12'>
                <Section17
                    title="Seashells, sunsets, and serenity"
                    description="Change your shoes for fins to let the ocean rewrite your story. Explore crystal coves, glide with curious sea turtles, and chase sunsets on hidden beaches. Every splash, whether freediving shipwrecks, snorkeling vibrant reefs, or laughing with dolphins, brings immense joy."
                    videoId="nxWNyTiE7J0"
                />
            </div>

            {/* A few of Kalpitiya, Sri Lanka Oceanic experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data1}
                    title="A few of Kalpitiya, Sri Lanka Oceanic experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Trincomalee, Sri Lanka Oceanic experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data2}
                    title="A few of Trincomalee, Sri Lanka Oceanic experiences"
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

            {/* A few of Galle, Sri Lanka Oceanic experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data3}
                    title="A few of Galle, Sri Lanka Oceanic experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Mirissa, Sri Lanka Oceanic experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data4}
                    title="A few of Mirissa, Sri Lanka Oceanic experiences"
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

            {/* A few of Weligama, Sri Lanka Oceanic experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data5}
                    title="A few of Weligama, Sri Lanka Oceanic experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Hikkaduwa, Sri Lanka Oceanic experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data6}
                    title="A few of Hikkaduwa, Sri Lanka Oceanic experiences"
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
