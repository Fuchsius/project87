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
            image: "assets/images/chronicles-of-culture/anuradhapura-experience-1.png",
            title: "Sacred Whispers Beneath the World's Oldest Tree",
            title2: "",
            description: "Sunlight dances through the leaves of the old Bodhi Tree as pilgrims lay lotus blossoms at dawn and monks chant. Track the cinnamon scent to hidden spice markets where vendors tell stories about royal Ayurvedic recipes. Decode fading temple frescoes with local storytellers, then sip Ceylon tea in a café with remnants of colonial era appeal. Faith here is a rhythm that still beats through every leaf and prayer. not a relic. Experience on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/anuradhapura-experience-2.png",
            title: "Golden Stupas and Starlit Silhouettes",
            title2: "",
            description: "Join barefoot pilgrims circling the stupa's base as evening illuminates its dome and their whispers blend with the breeze. Street vendors nearby fry hoppers over roaring fires with pans that echo centuries of tradition. Discover hidden courtyards where craftspeople make oil lamps, or climb historic stairs to see starlit ruins. Every flame and step in Anuradhapura carries a piece of its history. It's not silent. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/anuradhapura-experience-3.png",
            title: "Clay, Rhythm, and Moonstone Carvers",
            title2: "",
            description: "Pressing history into every curve, potters in rice field villages shape clay like their forebears. Find monsoon calling drummers who are teaching visitors to follow their rhythms now. Elders roll coconut roti in palm thatched houses and tell warrior queen stories. Finish days of meditation by a private tank at sunset. Here, life is messy and wonderful; culture is lived, not seen. Experience on",
            link: "#",
            linkText: "Discover Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/anuradhapura-experience-2.png",
            title: "Golden Stupas and Starlit Silhouettes",
            title2: "",
            description: "Join barefoot pilgrims circling the stupa's base as evening illuminates its dome and their whispers blend with the breeze. Street vendors nearby fry hoppers over roaring fires with pans that echo centuries of tradition. Discover hidden courtyards where craftspeople make oil lamps, or climb historic stairs to see starlit ruins. Every flame and step in Anuradhapura carries a piece of its history. It's not silent. Experience on",
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
            image: "assets/images/chronicles-of-culture/polonnaruwa-experience-1.png",
            title: "Stone Whispers & Moonlit Kingdoms",
            title2: "",
            description: "Trace the Buddha carvings of Gal Vihara from the 12th century as evening transforms stone into gold. Pedal past Parakrama Samudra's glittering seas, where fishermen cast nets like old royals. Savour jackfruit curry at a lakefront farmhouse while listening to stories about kings under the stars. The ruins of Polonnaruwa reverberate with the echoes of empires and evening crickets, not silence. Experience on",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/polonnaruwa-experience-2.png",
            title: "Cycling Through Time Ruins & Rustic Feasts",
            title2: "",
            description: "On two wheels glide past palaces in collapse and lotus cloaked tanks. Stop at the Quadrangle or look for artists working on palm leaf scrolls to interpret moonstone symbols. Feast on kottu roti under a family hut as fireflies rise; then, drum under banyan trees. Sitting here is history riding shotgun dusty sandaled and grinning. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/polonnaruwa-experience-3.png",
            title: "Sunset Boat Ride on Parakrama Samudra",
            title2: "",
            description: "Drift across Parakrama Samudra as the golden sun sets below the horizon to paint the heavens fiery hues. Fishermen throw their nets; birds fly above, the gentle ripples whisper tales of an ancient kingdom. This is a quiet moment when the natural world and history entwine to form a close relationship to Sri Lanka's soul. Experience on",
            link: "#",
            linkText: "Sri Lanka's Must See Gems.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/polonnaruwa-experience-2.png",
            title: "Cycling Through Time Ruins & Rustic Feasts",
            title2: "",
            description: "On two wheels glide past palaces in collapse and lotus cloaked tanks. Stop at the Quadrangle or look for artists working on palm leaf scrolls to interpret moonstone symbols. Feast on kottu roti under a family hut as fireflies rise; then, drum under banyan trees. Sitting here is history riding shotgun dusty sandaled and grinning. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data3 = [
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/kandy-experience-1.png",
            title: "Moonlit Prayers at the Temple of the Tooth",
            title2: "",
            description: "Join saffron robed monks in the evening puja at Sri Dalada Maligawa under the illumination of oil lamps. The air thrums with drumbeats and the whisper of centuries-old chants. Afterward, slip into the night. market where spice merchants press fresh cinnamon oil into your palm and woodcarvers shape legendary creatures. Kandy's cardiac rate? Here is where daily life and loyalty merge under the same moon. Experience on",
            link: "#",
            linkText: "Serenity Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/kandy-experience-2.png",
            title: "Dancing Flames of the Kandyan Dance",
            title2: "",
            description: "Come see Anjali in the verdant Galle countryside for a tea and spice plantation tour. Wander through aromatic gardens, discover the world-known tea and spices from Sri Lanka, and see the leaf to cup process. Taste newly made tea while learning about the rich agricultural customs of the island. There is a sensory trip through taste, scent, and history just waiting, Experience on",
            link: "#",
            linkText: "Classic Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/kandy-experience-3.png",
            title: "Sacred Threads and Rebel Weavers",
            title2: "",
            description: "Deep in Kandy's backstreets, a collective of women dyes handloom saris with jackfruit sap and crushed indigo. Thread by thread, they revive patterns banned during colonial rule secret maps to hidden temples. Wrap yourself in a Kandyan era design, then join a rooftop lunch of kavum oil cakes and rebellion ballads. History here isn't worn-it's defiantly, dazzlingly rewoven. Experience on",
            link: "#",
            linkText: "Classic Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/kandy-experience-2.png",
            title: "Dancing Flames of the Kandyan Dance",
            title2: "",
            description: "Come see Anjali in the verdant Galle countryside for a tea and spice plantation tour. Wander through aromatic gardens, discover the world-known tea and spices from Sri Lanka, and see the leaf to cup process. Taste newly made tea while learning about the rich agricultural customs of the island. There is a sensory trip through taste, scent, and history just waiting, Experience on",
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
            image: "assets/images/chronicles-of-culture/jaffna-experience-1.png",
            title: "Palmyra Groves and Temple Whispers",
            title2: "",
            description: "Wander across sun-dappled palmyra woods to Nallur Kandaswamy Kovil, where incense dances around gold-clad gods. See priests carry out centuries old ceremonies, then sip palmyra toddy alongside farmers laughing in Tamil. Look for handwoven palm leaf baskets at little marketplaces in villages. The soul of Jaffna It is in the rustle of palmyra fronds and the clang of temple bells at evening. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/jaffna-experience-2.png",
            title: "Forgotten Forts and Betel Leaf Tales",
            title2: "",
            description: "The crumbling Dutch ramparts of Climb Jaffna Fort whisper 30 years of silence through bullet scars. See betel sellers outside, their red stained smiles telling tales of love letters rolled in paan leaves. From a street cart, sip sulung porridge with an older recipe than the fort itself. War marks fade, but culture never does. Like a betel vine pushing through concrete, it is tenacious. Experience on",
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
            image: "assets/images/chronicles-of-culture/dambulla-experience-1.png",
            title: "Monk Chants in Golden Cave Shadows",
            title2: "",
            description: "Ascend to the cave temple of Dambulla, where two thousand year old Buddha frescoes radiate in candlelight. Talk to saffron robed monks about customs unaltered for millennia; then, sip sweet kithul treacle tea at a hermitage buried in rock. Dambulla's past is in the flutter of oil lamps and the echoes of monks' laughter off old walls, not petrified. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/dambulla-experience-2.png",
            title: "Twilight Markets and Peacock Oil Lamps",
            title2: "",
            description: "Dodge bicycles piled with jasmine garlands at Dambulla's evening market. Bargain for brass oil lamps fashioned like peacocks, then indulge in coconut oil fried vadai doughnuts. Techniques from his great grandfather's colonial shop help a cobbler fix leather sandals. The beating pulse of the town? It is in haggling grins, sizzling pans, and soles polished by pilgrimage. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/dambulla-experience-3.png",
            title: "Muddy Feet Rice Field Serenades",
            title2: "",
            description: "Join barefoot moonlit rice planting under mud squelching between toes as farmers sing kamath harvest songs. Fireflies misting the fields feast on hoppers and coconut sambol on a palm-leaf mat. A grandmother sorts stories of rice goddesses and demon droughs. Here, history is planted, picked, and presented steaming on banana leaves. It isn't written. Experience on",
            link: "#",
            linkText: "Contrasts of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/dambulla-experience-3.png",
            title: "Muddy Feet Rice Field Serenades",
            title2: "",
            description: "Join barefoot moonlit rice planting under mud squelching between toes as farmers sing kamath harvest songs. Fireflies misting the fields feast on hoppers and coconut sambol on a palm-leaf mat. A grandmother sorts stories of rice goddesses and demon droughs. Here, history is planted, picked, and presented steaming on banana leaves. It isn't written. Experience on",
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
            image: "assets/images/chronicles-of-culture/colombo-experience-1.png",
            title: "Lotus Towers and Hidden Temple Bells",
            title2: "",
            description: "Clutch the lift Asia's highest skyscraper to view from above the moonstone carvings of Gangaramaya Temple. Descend to hallways as thin as incense to bless cellphones with saffron threads. Outside trade jasmine garlands for TikHub reels street vendors, the duality of Colombo? Prayer flags tangoing in the breeze and steel giants. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/chronicles-of-culture/colombo-experience-2.png",
            title: "Experiencing Colombo's Thriving Art Scene",
            title2: "",
            description: "From modern galleries to traditional craft workshops, Colombo's art scene is vibrant with inventiveness. The National Art Gallery and Barefoot Gallery draw attention to Sri Lanka's changing creative character in which modern expression coexists peacefully with legacy. Experience on",
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
            image: "assets/images/chronicles-of-culture/experiences-1.png",
            title: "Chronicles of Culture",
            description: "Where ancient traditions come alive",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/chronicles-of-culture/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/chronicles-of-culture/experiences-3.png",
            title: "Wild Frontiers",
            description: "Experience the thrill of wildlife up close",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/chronicles-of-culture/experiences-2.png",
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
                    image="assets/images/chronicles-of-culture/hero.png"
                    title="Chronicles of Culture"
                    description="Explore diverse heritage, rich traditions, and vibrant cultures"
                    type={2}
                    rating={4.9}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/* A Journey Through Time & Tradition */}
            <div className='w-full mt-12'>
                <Section3
                    title="A Journey Through Time & Tradition"
                    description1=""
                    description2={`Discover the rich cultural fabric Sri Lanka presents! Our Chronicles of Culture events will transport you to the core of the island, including a broad spectrum of cultural attractions ranging from historic temples and colonial monuments to energetic dance performances and local handicapped crafts. Are you prepared to see art, history, and legacy once in a lifetime chance? Let's create one-of-a-kind together.`}
                    button="Search Tours"
                    buttonLink="/search"
                    titleClassName="not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            {/* Timeless Soul, Hands of History */}
            <div className='w-full mt-12'>
                <Section17
                    title="Timeless Soul, Hands of History"
                    description="Sri Lanka's heart beats through its traditions. Explore ancient temples, colonial whispers, and bustling markets filled with artisans weaving heritage. Dance to drumbeats, share stories over meals, and meet legacy keepers. Chronicles of Culture is more than just a look at history, it is an experience."
                    videoId="nxWNyTiE7J0"
                />
            </div>

            {/* A few Anuradhapura, Sri Lanka cultural experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data1}
                    title="A few Anuradhapura, Sri Lanka cultural experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few Polonnaruwa, Sri Lanka cultural experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data2}
                    title="A few Polonnaruwa, Sri Lanka cultural experiences"
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
                        title="“Unforgettable”"
                        feedback="“Chronicles of Culture” masterfully threads Sri Lanka's Cultural Triangle into a living tapestry of history and humanity. From Anuradhapura's sacred Bodhi Tree, where dawn rituals hum with unbroken devotion, to Sigiriya's sky-piercing frescoes whispering royal intrigue, every step echoes millennia. In Polonnaruwa, bicycle trails wind through stone kingdoms, while Dambulla's cave temples glow with monk-chanted lore."
                        feedbackAuthor="Generva Hertig"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>

            {/* A few Kandy, Sri Lanka cultural experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data3}
                    title="A few Kandy, Sri Lanka cultural experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few Jaffna, Sri Lanka cultural experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data4}
                    title="A few Jaffna, Sri Lanka cultural experiences"
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

            {/* A few Dambulla, Sri Lanka cultural experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data5}
                    title="A few Dambulla, Sri Lanka cultural experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few Colombo, Sri Lanka cultural experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data6}
                    title="A few Colombo, Sri Lanka cultural experiences"
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
