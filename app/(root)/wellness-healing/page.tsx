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
            image: "assets/images/wellness-healing/kandy-experience-1.png",
            title: "Sacred Temple Healing Ceremonies and Blessings",
            title2: "",
            description: "Immerse yourself in authentic spiritual healing at the Temple of the Sacred Tooth Relic, where Buddhist monks perform blessing ceremonies that have continued for centuries. Participate in traditional paritta chanting sessions, receive blessed water, and witness ancient healing rituals that connect mind, body, and spirit through sacred vibrations and community prayer. Experience on",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/kandy-experience-2.png",
            title: "Meditation Retreats in Mountain Monasteries",
            title2: "",
            description: "Join resident monks for daily meditation sessions in centuries old mountain monasteries, learning Vipassana and loving kindness techniques passed down through generations. These silent retreats combine walking meditation through cloud forests, dharma discussions, and contemplative practices that clear mental clutter while connecting with Sri Lanka's Buddhist heritage. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/kandy-experience-3.png",
            title: "Forest Bathing and Nature Immersion",
            title2: "",
            description: "Practice mindful forest therapy in the Udawattekele Sanctuary, where towering trees create natural meditation halls for contemplative walking and breathing exercises. This Japanese inspired practice combines with Sri Lankan forest wisdom, encouraging slow, intentional movement through diverse ecosystems while absorbing the healing properties of phytoncides and negative ions. Experience on",
            link: "#",
            linkText: "Sri Lanka's Must See Gems.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/kandy-experience-2.png",
            title: "Meditation Retreats in Mountain Monasteries",
            title2: "",
            description: "Join resident monks for daily meditation sessions in centuries old mountain monasteries, learning Vipassana and loving kindness techniques passed down through generations. These silent retreats combine walking meditation through cloud forests, dharma discussions, and contemplative practices that clear mental clutter while connecting with Sri Lanka's Buddhist heritage. Experience on",
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
            image: "assets/images/wellness-healing/galle-experience-1.png",
            title: "Historic Fort Yoga and Wellness Walking",
            title2: "",
            description: "Practice sunrise yoga sessions atop the UNESCO World Heritage Galle Fort ramparts, where ocean breezes enhance traditional Hatha yoga sequences. Local instructors incorporate Sri Lankan breathing techniques and philosophical teachings while you move through asanas overlooking the Indian Ocean, combining physical practice with cultural immersion and historical reflection. Experience on",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/galle-experience-2.png",
            title: "Cinnamon Garden Aromatherapy Sessions",
            title2: "",
            description: "Participate in therapeutic aromatherapy treatments using locally harvested cinnamon, cardamom, and cloves in historic spice gardens. These sessions combine essential oil inhalation, gentie massage, and meditation while learning about medicinal properties of indigenous spices. Practitioners guide you through sensory awareness exercises that enhance mood and reduce anxiety. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/galle-experience-3.png",
            title: "Ocean Sound Healing and Meditation",
            title2: "",
            description: "Experience guided sound healing sessions on secluded beaches, where Tibetan singing bowls, traditional drums, and ocean waves create therapeutic soundscapes. These sessions incorporate breathing techniques, visualization practices, and gentle movement, while the natural rhythm of waves enhances relaxation and promotes deep meditative states for stress relief. Experience on",
            link: "#",
            linkText: "Sri Lanka's Must See Gems.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/galle-experience-2.png",
            title: "Cinnamon Garden Aromatherapy Sessions",
            title2: "",
            description: "Participate in therapeutic aromatherapy treatments using locally harvested cinnamon, cardamom, and cloves in historic spice gardens. These sessions combine essential oil inhalation, gentie massage, and meditation while learning about medicinal properties of indigenous spices. Practitioners guide you through sensory awareness exercises that enhance mood and reduce anxiety. Experience on",
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
            image: "assets/images/wellness-healing/dambulla-experience-1.png",
            title: "Ancient Cave Temple Spiritual Immersion",
            title2: "",
            description: "Explore the sacred Dambulla Cave Temple complex with local monks who share meditation techniques practiced in these hallowed chambers for over 2,000 years. Participate in traditional chanting sessions, receive Buddhist blessings, and practice mindfulness. meditation surrounded by ancient murals and statues that have witnessed countless spiritual transformations. Experience on",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/dambulla-experience-2.png",
            title: "Village Ayurvedic Cooking and Nutrition",
            title2: "",
            description: "Learn traditional Ayurvedic cooking principles from village elders who demonstrate how to prepare healing meals using indigenous herbs, spices, and organic ingredients. These hands-on sessions teach constitutional eating, food combining principles, and medicinal properties of local produce while sharing meals with families who maintain ancestral culinary wisdom. Experience on",
            link: "#",
            linkText: "Classic Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/dambulla-experience-3.png",
            title: "Traditional Potter's Meditation and Mindfulness",
            title2: "",
            description: "Engage in meditative pottery sessions with master craftsmen who demonstrate how creating clay vessels becomes a mindfulness practice. These therapeutic workshops combine tactile meditation, breathing awareness, and creative expression while learning traditional techniques that have been passed down through generations of Sri Lankan artisans. Experience on",
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
            image: "assets/images/wellness-healing/nuwara-eliya-experience-1.png",
            title: "Highland Tea Estate Mindfulness Walks",
            title2: "",
            description: "Join tea pluckers in the rolling hills of Ceylon tea estates, learning mindful harvesting techniques that have been practiced for generations. These meditative walking sessions combine gentle physical activity with awareness practices, teaching presence and gratitude while breathing crisp mountain air and understanding the cultural significance of Sri Lanka's tea heritage. Experience",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/nuwara-eliya-experience-2.png",
            title: "Highland Yoga and Pranayama Practice",
            title2: "",
            description: "Practice altitude-adapted yoga sequences and breathing exercises in mountain meadows, where thin air enhances pranayama techniques and deepens meditative states. Local instructors modify traditional asanas for highland conditions while teaching how elevation affects energy flow, creating unique opportunities for advanced breathing practices and spiritual development. Experience on",
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
            image: "assets/images/wellness-healing/colombo-experience-1.png",
            title: "Urban Temple Meditation and City Retreat ",
            title2: "",
            description: "Discover tranquil meditation spaces within Colombo's bustling temples, where monks teach traditional techniques for finding peace amid urban chaos. Participate in early morning meditation sessions, learn breathing practices that counter city stress, and experience how ancient wisdom adapts to modern metropolitan life through community sangha and mindful urban living. Experience on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/colombo-experience-2.png",
            title: "Ayurvedic Spa and Wellness Centers",
            title2: "",
            description: "Experience comprehensive Ayurvedic treatments at established wellness centers, where qualified practitioners provide personalized consultations, dosha assessments, and therapeutic treatments. These modern facilities maintain traditional healing methods while offering contemporary comfort, combining herbal steam baths, specialized massages, and dietary guidance for urban wellness seekers. Experience on",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/colombo-experience-3.png",
            title: "Ayurvedic Cooking and Herbal Baths",
            title2: "",
            description: "Explore Colombo's museums, galleries, and cultural sites through mindful walking tours that combine artistic appreciation with meditation practice. Local guides teach awareness techniques while viewing traditional artwork, discussing how cultural heritage connects to spiritual development, and practicing contemplative observation that deepens appreciation for Sri Lankan artistic traditions. Experience on",
            link: "#",
            linkText: "Contrasts of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/wellness-healing/colombo-experience-2.png",
            title: "Ayurvedic Spa and Wellness Centers",
            title2: "",
            description: "Experience comprehensive Ayurvedic treatments at established wellness centers, where qualified practitioners provide personalized consultations, dosha assessments, and therapeutic treatments. These modern facilities maintain traditional healing methods while offering contemporary comfort, combining herbal steam baths, specialized massages, and dietary guidance for urban wellness seekers. Experience on",
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
            image: "assets/images/wellness-healing/tangalle-experience-1.png",
            title: "Pristine Beach Morning Yoga Practice ",
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
            image: "assets/images/wellness-healing/tangalle-experience-2.png",
            title: "Coconut Palm Ayurvedic Oil Treatments",
            title2: "",
            description: "Receive traditional Ayurvedic massages using fresh coconut oil extracted from local palms, delivered by skilled practitioners in beachfront pavilions cooled by ocean breezes. These therapeutic sessions incorporate warm oil applications, gentle stretching, and marma point stimulation while surrounded by swaying palms and rhythmic wave sounds. Experience on",
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
            image: "assets/images/wellness-healing/experiences-1.png",
            title: "Be My Guest",
            description: "The authentic local travel experience",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/wellness-healing/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/wellness-healing/experiences-3.png",
            title: "Outdoor & Nature",
            description: "Wild scenery, big adventures",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/wellness-healing/experiences-2.png",
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
                    image="assets/images/wellness-healing/hero.jpg"
                    title="Wellness & Healing"
                    description="Find stillness, feed your soul, and heal completely"
                    type={2}
                    rating={4.9}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/* Journey toward inner healing */}
            <div className='w-full mt-12'>
                <Section3
                    title="Journey toward inner healing"
                    description1=""
                    description2={`Travel should, in Travelgate's opinion, change you rather than merely get you somewhere. Our Sri Lanka Wellness & Healing events thus invite you to slow down and really connect with this holy island. Here you will find stillness, feed your soul, and heal totally using ancient Ayurvedic knowledge, conscious moments, and Sri Lanka's natural healing ability.`}
                    button="Search Tours"
                    buttonLink="/search"
                    titleClassName="not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            {/* Listen within, find peace. */}
            <div className='w-full mt-12'>
                <Section17
                    title="Listen within, find peace."
                    description="The Wellness & Healing experience of Sri Lanka invites you to find stillness, feed your soul, and heal totally. Enter Ayurveda, meditation, and the embrace of nature. Rejuvenate using age-old healing customs, relaxing resorts, and holistic treatments meant to bring inner peace and balance back."
                    videoId="nxWNyTiE7J0"
                />
            </div>

            {/* A few of Kandy, Sri Lanka Wellness & Healing experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data1}
                    title="A few of Kandy, Sri Lanka Wellness & Healing experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Galle, Sri Lanka Wellness & Healing experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data2}
                    title="A few of Galle, Sri Lanka Wellness & Healing experiences"
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

            {/* A few of Dambulla, Sri Lanka Wellness & Healing experiences  */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data3}
                    title="A few of Dambulla, Sri Lanka Wellness & Healing experiences"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Nuwara Eliya, Sri Lanka Wellness & Healing experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data4}
                    title="A few of Nuwara Eliya, Sri Lanka Wellness & Healing experiences"
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

            {/* A few of Colombo, Sri Lanka Wellness & Healing experiences  */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data5}
                    title="A few of Colombo, Sri Lanka Wellness & Healing experiences "
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of Tangalle, Sri Lanka Wellness & Healing experiences */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data6}
                    title="A few of Tangalle, Sri Lanka Wellness & Healing experiences"
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
