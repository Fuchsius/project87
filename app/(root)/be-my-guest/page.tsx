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
            image: "assets/images/be-my-guest/colombo-host-1.png",
            title: "Meet Mohara Dole, from Colombo, Sri Lanka",
            title2: "",
            description: "With Mohara Dole in her immersive three-hour cooking class in Rajagiriya, explore the rich tastes of Sri Lanka. Cooking is her art; it combines self-expression with play and worship. She leads foodies on a vibrant tour of rices and curries, each bursting with taste and scent. Come cook with her at the stove, make real food, and leave equipped to replicate it at home. Experience on ",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/be-my-guest/colombo-host-2.png",
            title: "Meet Harsha & Nadeesha, from Colombo, Sri Lanka",
            title2: "",
            description: "Learn the craft of Sri Lankan mask painting under the direction of talented Colombo artists Harsha & Nadeesha. Enter their energetic workshop, where they impart knowledge of the background and methods underlying classic wooden masks. As you create your own work, learn about age-old customs, legends, and handcrafted skills handed down over years. An unforgettable fusion of legacy and imagination! Experience on ",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/be-my-guest/colombo-host-3.png",
            title: "Meet Kasun, from Colombo, Sri Lanka",
            title2: "",
            description: "Set off a street food adventure with local foodie Kasun, who knows every secret gem in Colombo. Wander through busy markets, sample famous Sri Lankan cuisine including kottu, hoppers, and fiery achcharu, and learn the history behind each mouthful. From cosy cafés to sizzling street-side grills, this tour is a sensory feast and ideal approach to discover Colombo's tastes. Experience on ",
            link: "#",
            linkText: "Discover Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },

    ]

    const card3Carousel1Data2 = [
        {
            type: "1",
            image: "assets/images/be-my-guest/kandy-host-1.png",
            title: "Meet Priya, from Kandy, Sri Lanka",
            title2: "",
            description: "Starting a spiritual path with Kandy's meditation guide, Priya See historic temples, go to mindfulness courses, and study Buddhist traditions. This experience provides a quiet haven from the bustle of the city regardless of your level of experience with meditation or search for greater spiritual insight.Experience on ",
            link: "#",
            linkText: "Serendib Explorer.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/be-my-guest/kandy-host-2.png",
            title: "Meet the Hanthana House Family, from Kandy, Sri Lanka",
            title2: "",
            description: "Enter Hanthana House, a home stay arrangement tucked away in the picturesque Hanthana Hills. Here you will live with a local family, savour Sri Lankan home cuisine, and even pick up some cooking skills for making classic meals yourself. Nestled with breathtaking mountain views, this retreat is meant for leisure, introspection and a deeply cultural immersion.Experience on ",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/be-my-guest/kandy-host-3.png",
            title: "Meet Nimal, from Kandy, Sri Lanka",
            title2: "",
            description: "With Nimal, a driven botanist, explore the Royal Botanic Gardens in Peradeniya. Discover rare tropical plants, stroll across verdant settings, and learn about Sri Lanka's great biodiversity. This garden tour provides a revitalising experience right in the middle of Kandy, regardless of your inclination towards the natural world or just a quiet haven. Experience on ",
            link: "#",
            linkText: "Sri Lanka's Must See Gems.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        }
    ]

    const card3Carousel1Data3 = [
        {
            type: "1",
            image: "assets/images/be-my-guest/galle-host-1.png",
            title: "Meet the Ifthikar Mahuroof Family, from Galle, Sri Lanka",
            title2: "",
            description: "Arrive at noon at Ifthikar's cosy home, 5 minutes from Galle Fort, where time stops. Philosophy and philanthropy have taken Ifthikar around the world, and his family has been involved in diplomacy and trade since the 17th century. As ‘Sri Lanka’s Gem King’ and the world’s greatest traveler, Ifthikar has had an amazing journey. His wife Shahira prepares a delicious home cooked meal of fresh, delicate seafood. Experience on ",
            link: "#",
            linkText: "Serenity Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/be-my-guest/galle-host-2.png",
            title: "Meet Anjali, from Galle, Sri Lanka",
            title2: "",
            description: "Come see Anjali in the verdant Galle countryside for a tea and spice plantation tour. Wander through aromatic gardens, discover the world-known tea and spices from Sri Lanka, and see the leaf to cup process. Taste newly made tea while learning about the rich agricultural customs of the island. There is a sensory trip through taste, scent, and history just waiting, Experience on ",
            link: "#",
            linkText: "Classic Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/be-my-guest/galle-host-3.png",
            title: "Meet Suren, from Galle, Sri Lanka",
            title2: "",
            description: "Suren, a local expert on Galle's vibrant nightlife, will show you around the city's hidden bars and breweries. Wander through historic streets, discover century old bars, and sip local arrack while hearing fascinating stories about Galle's history. With breathtaking ocean views and a lively atmosphere, this experience is the ideal blend of history, culture, and fun!  Experience on ",
            link: "#",
            linkText: "Classic Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        }
    ]

    const card3Carousel1Data4 = [
        {
            type: "1",
            image: "assets/images/be-my-guest/nuwara-eliya-host-1.png",
            title: "Meet Fernando, from Nuwara Eliya, Sri Lanka",
            title2: "",
            description: "Enter the world of Ceylon tea with Nuwara Eliya's driven tea planter Ruwan. Wander over verdant fields, pick tea, and see the trip from leaf to cup. Sip freshly made tea while listening to tales of Sri Lankan tea history. A calm and absorbing encounter right in the middle of the hill country. Experience on ",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/be-my-guest/nuwara-eliya-host-2.png",
            title: "Meet Suresh, from Nuwara Eliya, Sri Lanka",
            title2: "",
            description: "Set off a nature trip with Suresh, a native guide familiar with every secret treasure in Nuwara Eliya. Trek across Horton Plains, stop at World's End, and see unusual species all along. Nature enthusiasts looking for an amazing trip across Sri Lanka's highlands will find ideal fit in this experience with its stunning scenery and interesting insights. Experience on ",
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
            image: "assets/images/be-my-guest/negombo-host-1.png",
            title: "Meet Ravi, from Negombo, Sri Lanka",
            title2: "",
            description: "Join Ravi, an experienced fisherman, for an authentic lagoon fishing experience in Negombo. Step onto a traditional boat, cast your net, and discover the secrets of Sri Lanka's coastal fishing heritage. After the catch, enjoy a fresh seafood meal prepared in the traditional manner. A perfect combination of adventure, tradition, and delicious flavours! Experience on ",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/be-my-guest/negombo-host-2.png",
            title: "Meet the Fernando Family, from Negombo, Sri Lanka",
            title2: "",
            description: "Experience Sri Lankan village life with the Fernando family, who will welcome you into their home near Negombo Lagoon. Learn traditional cooking methods, visit local markets, and hear stories about their heritage. Share a meal with the family that includes home cooked dishes passed down through generations. A warm cultural experience full of hospitality and flavour. Experience on ",
            link: "#",
            linkText: "Best of Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/be-my-guest/negombo-host-3.png",
            title: "Meet Waruna, from Negombo, Sri Lanka",
            title2: "",
            description: "See Negombo's colonial past with the enthusiastic storyteller Waruna. Wander through old streets, see sites from the Dutch era, and learn about the past of the city. From historic churches to busy markets, this trip provides an interesting window into Negombo's rich legacy and active local life. For history buffs, a must do. Experience on ",
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
            image: "assets/images/be-my-guest/ella-host-1.png",
            title: "Meet Saman, from Ella, Sri Lanka",
            title2: "",
            description: "Join Saman, a local trekking guide, on a breathtaking sunrise hike to Ella Rock.  Walk through misty tea plantations, hear local stories, and arrive at the summit just in time for spectacular views.  As the sun rises over the hills, sip a warm cup of Ceylon tea and take in the beauty of Sri Lanka's highlands. Experience on ",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "1",
            image: "assets/images/be-my-guest/ella-host-2.png",
            title: "Meet Rajani, from Ella, Sri Lanka",
            title2: "",
            description: "Come see Rajani in her outdoor kitchen for a classic Sri Lankan cooking session. Using locally grown fresh food, learn to make dishes including hoppers, coconut sambal, and fiery curries. Rajani offers insights on Sri Lankan cuisine and the health advantages of indigenous spices as you cook. Savour the dinner you have made to wrap up the conference. Experience on ",
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
            image: "assets/images/be-my-guest/experiences-1.png",
            title: "Chronicles of Culture",
            description: "Where ancient traditions come alive",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/be-my-guest/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/be-my-guest/experiences-3.png",
            title: "Wild Frontiers",
            description: "Experience the thrill of wildlife up close",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/be-my-guest/experiences-2.png",
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
            <div className='w-full  py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Be My Guest" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='w-full mx-auto'>
                <Hero2
                    image="assets/images/be-my-guest/hero.png"
                    title="Be My Guest"
                    description="The authentic local travel experience"
                    type={2}
                    rating={4.9}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/* Connect with locals */}
            <div className='w-full mt-12'>
                <Section3
                    title="Connect with locals"
                    description1=""
                    description2={`We excel at connecting you to experiences you would not have had otherwise. On all of our tours, you will be invited into locals' homes and businesses for an exclusive Be My Guest experience, as well as a MAKE TRAVEL RESPONSIBLE® Experience. Many itineraries also include a Stays with Tales accommodation experience in some of the world's most interesting locations.`}
                    button="Search Tours"
                    buttonLink="/search"
                    titleClassName="not-italic"
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            {/* Meet your hosts */}
            <div className='w-full mt-12'>
                <Section17
                    title="Meet your hosts"
                    description="You'll find out pretty quickly that it's really the people and the stories that make Be My Guest such a unique experience. With over 100 experiences that offer a sneak peek into the stories and memories you'll cherish long after your tour tour has ended."
                    videoId="nxWNyTiE7J0"
                />
            </div>

            {/* A few of your Colombo hosts */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data1}
                    title="A few of your Colombo hosts"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of your Kandy hosts */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data2}
                    title="A few of your Kandy hosts"
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
                        feedback="We started an amazing trip through Sri Lanka in 2024, personally feeling its warmth and beauty. The touching “Be My Guest” event in Kandy was among the most treasured memories. We were invited into the hillside house of a local family, where the air smelt of spices and laughter abound. My son struck up a conversation with our host's young daughter as we were gathering to eat a traditional meal—only to learn their names matched! We shall treasure this experience always because of the delight, the connection, and the one perfect serendipitous moment."
                        feedbackAuthor="Generva Hertig"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>

            {/* A few of your Galle hosts */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data3}
                    title="A few of your Galle hosts"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of your Nuwara Eliya hosts */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data4}
                    title="A few of your Nuwara Eliya hosts "
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
                        feedback="Paradise of culture, adventure, and friendly hospitality is Sri Lanka. Every moment was enchanted from breathtaking scenery to rich customs. The high point is The Be My Guest experience dining, dancing, and interacting with residents on a farm to create memories we will carry with us always."
                        feedbackAuthor="Jose and Donna G"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>

            {/* A few of your Negombo hosts */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data5}
                    title="A few of your Negombo hosts"
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                />
            </div>

            {/* A few of your Ella hosts */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data6}
                    title="A few of your Ella hosts"
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
