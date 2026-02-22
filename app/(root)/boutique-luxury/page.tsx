import React from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero2 from '@/components/comen/hero/Hero2'
import Section3 from '@/components/comen/section/Section3'
import Section17 from '@/components/comen/section/Section17'
import Card3Carousel1 from '@/components/comen/carousel/Card3Carousel1'
import Card23 from '@/components/comen/card/Card23'
import Card1Carousel1 from '@/components/comen/carousel/Card1Carousel1'
import Section19 from '@/components/comen/section/Section19'
import Card3Carousel3 from '@/components/comen/carousel/Card3Carousel3'
import Card20Carousel1 from '@/components/comen/carousel/Card20Carousel1'
import Card19Carousel1 from '@/components/comen/carousel/Card19Carousel1'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import Section20 from '@/components/comen/section/Section20'

export default function page() {

    const card3Carousel3Data1 = [
        {
            type: "3",
            image: "assets/images/boutique-luxury/galle-1.png",
            title: "Taru Villas Rampart Street",
            title2: "Galle Fort, Sri Lanka",
            description: "A meticulously restored colonial mansion within Galle Fort offering eight elegantly appointed suites with period furnishings and modern luxuries. Each room features original Dutch architecture, private courtyards, and personalized butler service, while guests enjoy exclusive access to rooftop terraces overlooking fort ramparts, curated cultural experiences, and intimate dining in heritage settings. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/galle-2.png",
            title: "Niyagama House",
            title2: "Talpe, Galle, Sri Lanka",
            description: "An intimate eco luxury retreat set within tropical gardens, featuring seven uniquely designed suites with private terraces and traditional Sri Lankan architecture. This sustainable sanctuary offers organic cuisine from estate gardens, ayurvedic spa treatments, yoga pavilions, and personalized experiences including turtle watching, traditional fishing excursions, and guided spice garden tours with resident naturalists. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/galle-3.png",
            title: "The Sandhya",
            title2: "Balapitiya, Sri Lanka",
            description: "Your own beachfront hideaway where the infinity pool melts into the ocean horizon like a dream. The staff remember your coffee preferences by day two, and they'll arrange anything from sunrise yoga to midnight beach walks. It's the kind of place where you actually unwind instead of just checking Instagram spots. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/galle-2.png",
            title: "Niyagama House",
            title2: "Talpe, Galle, Sri Lanka",
            description: "An intimate eco luxury retreat set within tropical gardens, featuring seven uniquely designed suites with private terraces and traditional Sri Lankan architecture. This sustainable sanctuary offers organic cuisine from estate gardens, ayurvedic spa treatments, yoga pavilions, and personalized experiences including turtle watching, traditional fishing excursions, and guided spice garden tours with resident naturalists. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data1 = [
        {
            type: "3",
            image: "assets/images/boutique-luxury/bentota-1.png",
            title: "Nisala Arana",
            title2: "Bentota River, Sri Lanka",
            description: "This enchanting colonial-era boutique hotel gracefully sits beside the Bentota River, offering twenty one individually designed rooms and suites within lush tropical gardens. Guests enjoy personalized service, exceptional cuisine blending Sri Lankan and international flavors, tranquil spa treatments, private beach access, and enchanting sunset river cruises, where timeless colonial elegance seamlessly blends with Aman's signature luxury hospitality standards. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/bentota-2.png",
            title: "Villa 700 by Amaya",
            title2: "Bentota, Sri Lanka",
            description: "It is ideal for groups of friends or family members who want to have their very own private beach paradise without having to worry about planning everything. It is a breathtaking villa with five bedrooms that comes with a butler who anticipates your needs before you even voice them. Additionally, the infinity pool gives the impression that you are swimming into the ocean itself. When the urge for adventure strikes, water sports equipment is always ready to go. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/bentota-3.png",
            title: "Shinagawa Beach Villa",
            title2: "Shinagawa Bay, Bentota, Sri Lanka",
            description: "Your own private cove where traditional fishing boats bob alongside your infinity pool creates the perfect Sri Lankan tableau. The villa's traditional architecture feels rooted in place while modern amenities ensure comfort, and personalized spa treatments happen in pavilions where ocean breezes provide natural air conditioning and therapeutic sounds. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/bentota-2.png",
            title: "Villa 700 by Amaya",
            title2: "Bentota, Sri Lanka",
            description: "It is ideal for groups of friends or family members who want to have their very own private beach paradise without having to worry about planning everything. It is a breathtaking villa with five bedrooms that comes with a butler who anticipates your needs before you even voice them. Additionally, the infinity pool gives the impression that you are swimming into the ocean itself. When the urge for adventure strikes, water sports equipment is always ready to go. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

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

    const card3Carousel1Data2 = [
        {
            type: "3",
            image: "assets/images/boutique-luxury/kandy-1.png",
            title: "Taru Villas Kandy",
            title2: "Heerassagala, Kandy, Sri Lanka",
            description: "Charming boutique villa blending luxury comfort with authentic Sri Lankan hospitality in pristine hilltop setting. This intimate property offers personalized cultural experiences, panoramic mountain views, and easy access to Kandy's sacred sites, creating perfect harmony between modern luxury and traditional charm. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/kandy-2.png",
            title: "Mountbatten Bungalow",
            title2: "Kandy, Sri Lanka",
            description: "Historic colonial bungalow offering panoramic mountain views with modern luxury amenities and personalized service. This intimate retreat features original architectural details, private gardens, and exclusive cultural experiences, providing sophisticated accommodation with authentic period charm and contemporary comfort. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data3 = [
        {
            type: "3",
            image: "assets/images/boutique-luxury/negombo-1.png",
            title: "Dickman Resort",
            title2: "Lewis Place, Negombo, Sri Lanka",
            description: "Just 150 meters from beautiful Negombo Beach, this adults only boutique property feels like a sophisticated seaside retreat where every detail has been carefully considered. The outdoor pool and private beach access create perfect coastal relaxation, while personalized attention from passionate staff makes every moment feel special Modern amenities blend seamlessly with authentic Sri Lankan hospitality warmth. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/negombo-2.png",
            title: "Villa Araliya",
            title2: "Kochchikade, Negombo, Sri Lanka",
            description: "This sophisticated beachfront villa offers stunning. ocean views with your own private pool that seems to blend into the horizon. Personalized butler service feels like having a caring local friend, and authentic Sri Lankan cuisine prepared by your personal chef tells stories through every aromatic spice. Direct beach access makes sunrise walks a daily ritual. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/negombo-3.png",
            title: "Belmont Boutique Hotel",
            title2: "Wellaweediya, Negombo, Sri Lanka",
            description: "This elegant property offers complimentary airport shuttle service, making arrival incredibly convenient while maintaining boutique luxury throughout your stay. The outdoor pool surrounded by tropical gardens creates a peaceful oasis, and exclusive cultural experiences connect you with authentic local traditions. It's sophisticated accommodation where convenience meets genuine hospitality and authentic cultural connections. Stay here on",
            link: "#",
            linkText: "Ceylon Serendib.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/negombo-2.png",
            title: "Villa Araliya",
            title2: "Kochchikade, Negombo, Sri Lanka",
            description: "This sophisticated beachfront villa offers stunning. ocean views with your own private pool that seems to blend into the horizon. Personalized butler service feels like having a caring local friend, and authentic Sri Lankan cuisine prepared by your personal chef tells stories through every aromatic spice. Direct beach access makes sunrise walks a daily ritual. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel1Data4 = [
        {
            type: "3",
            image: "assets/images/boutique-luxury/colombo-1.png",
            title: "Residence on Park Street",
            title2: "Mount Lavinia, Sri Lanka",
            description: "An intimate boutique hotel featuring eleven luxurious suites within a restored colonial mansion in Colombo's heart. This sophisticated property offers personalized concierge services, rooftop dining, spa treatments, private courtyards, and exclusive experiences, including art gallery tours, heritage walks, cultural performances, and access to Colombo's most exclusive shopping and dining establishments. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/colombo-2.png",
            title: "Colombo Court Hotel & Spa",
            title2: "Ward Place, Colombo, Sri Lanka",
            description: "This restored colonial villa features beautiful private courtyards where frangipani blooms perfume evening air with tropical romance. Exclusive city experiences reveal Colombo's hidden gems, and private spa treatments provide perfect relaxation after urban exploration. It's sophisticated accommodation where traditional charm meets contemporary comfort in the most tasteful and authentic way. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/colombo-3.png",
            title: "Casa Colombo Collection",
            title2: "Colombo, Sri Lanka",
            description: "This sophisticated property perfectly balances contemporary design with authentic Sri Lankan cultural elements in the most tasteful way. Rooftop dining offers incredible city views, and they arrange exclusive shopping experiences at places locals actually frequent. It's urban luxury that gives you genuine access to Colombo's vibrant contemporary culture and authentic experiences. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/colombo-2.png",
            title: "Colombo Court Hotel & Spa",
            title2: "Ward Place, Colombo, Sri Lanka",
            description: "This restored colonial villa features beautiful private courtyards where frangipani blooms perfume evening air with tropical romance. Exclusive city experiences reveal Colombo's hidden gems, and private spa treatments provide perfect relaxation after urban exploration. It's sophisticated accommodation where traditional charm meets contemporary comfort in the most tasteful and authentic way. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card3Carousel3Data2 = [
        {
            type: "3",
            image: "assets/images/boutique-luxury/nuwara-eliya-1.png",
            title: "Langdale",
            title2: "Upper Lake, Nuwara Eliya, Sri Lanka",
            description: "This sophisticated hill country villa features contemporary design with traditional elements and pristine lake views that reflect mountain clouds. Personalized hiking experiences reveal hidden waterfalls and endemic birds, while spa treatments use mountain herbs that grow wild. It's luxury accommodation where stunning natural beauty meets modern comfort in perfect harmony. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/nuwara-eliya-2.png",
            title: "W15 Lake Gregory",
            title2: "Lake Drive, Nuwara Eliya, Sri Lanka",
            description: "An exquisite master suite and spacious rooms make this lakeside lodge a luxurious and comfortable choice. Architecturally significant spaces blend historical design with modern styling and premium amenities, creating an exclusive hill country sanctuary for discerning travellers seeking serenity just steps from Lake Gregory and Galway Forest Reserve. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/boutique-luxury/nuwara-eliya-1.png",
            title: "Langdale",
            title2: "Upper Lake, Nuwara Eliya, Sri Lanka",
            description: "This sophisticated hill country villa features contemporary design with traditional elements and pristine lake views that reflect mountain clouds. Personalized hiking experiences reveal hidden waterfalls and endemic birds, while spa treatments use mountain herbs that grow wild. It's luxury accommodation where stunning natural beauty meets modern comfort in perfect harmony. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card19Carousel1Data1 = [
        {
            image: "assets/images/boutique-luxury/exceptional-1.png",
            title: "HANDPICKED",
            subTitle: "Hotels",
            description: "Whether in a chic city boutique hotel or a quiet villa, discover the best in hospitality. Every stay promises flawless service, opulent rooms, and an unforgettable ambiance, so combining comfort with elegance for the ideal vacation. Savish simple elegance.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/boutique-luxury/exceptional-2.png",
            title: "EXCELLENT",
            subTitle: "Service",
            description: "Relax and enjoy a smooth journey with expert coordination from your Travel Director, coach driver, and hotel staff. Enjoy easy check ins, quick service, and the convenience of having your luggage delivered right to your door. Luxury travel made simple.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/boutique-luxury/exceptional-3.png",
            title: "RELAXED",
            subTitle: "Starts",
            description: "Enjoy leisurely mornings with Relaxed Start days, giving you extra time to sleep in or explore at your own pace. Every itinerary includes this feature, ensuring a stress free experience with flexibility to make the most of your journey.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/boutique-luxury/exceptional-2.png",
            title: "EXCELLENT",
            subTitle: "Service",
            description: "Relax and enjoy a smooth journey with expert coordination from your Travel Director, coach driver, and hotel staff. Enjoy easy check ins, quick service, and the convenience of having your luggage delivered right to your door. Luxury travel made simple.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
    ]

    const card1Carousel1Data = [
        {
            image: "assets/images/boutique-luxury/experiences-1.png",
            title: "Oceanic Adventures",
            description: "Let the ocean set you free ",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/boutique-luxury/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/boutique-luxury/experiences-3.png",
            title: "Outdoor & Nature",
            description: "Adventure awaits, just step outside",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/boutique-luxury/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
    ]

    const tourCardCarousel1Data1 = [
        {
            id: 1,
            title: "Boutique Sri Lanka",
            slug: "boutique-sri-anka",
            rating: 4.8,
            reviews: 42,
            duration: "8 Days",
            locations: "5 Locations",
            locationsCount: 5,
            excursions: 9,
            country: "1 Country",
            description: "8 Day Boutique Tour of Kandy, Yala, Galle and Tinkanbawa",
            price: 6958,
            oldPrice: 93400,
            subtitle: "End Colombo",
            days: 8,
            image: "/assets/images/tour-images/golfing-in-sri-lanka.png",
            mapImageSrc: "/assets/images/tour-images/maps/3.png",
            isCounty: true,
            itinerary: [
                { day: 1, location: "Colombo" },
                { day: 2, location: "Colombo", activities: "Sightseeing", droppins: ["Breakfast", "Dinner"] },
                { day: 3, location: "Kandy" },
                { day: 4, location: "Yala" },
                { day: 5, location: "Yala", activities: "Sightseeing", droppins: ["Yala", "Galle"] },
                { day: 6, location: "Galle", activities: "Beach, Shopping", droppins: ["Galle", "Hikkaduwa"] },
                { day: 7, location: "Hikkaduwa" },
            ],
            quickView: true,
            isBigTourSale: true,
            saveUpTo: 335,
            actions: {
                hasCompare: true,
                hasQuote: true,
                hasViewTrip: true,
            },
        },
        {
            id: 2,
            title: "Family Safari, Surf and Turf",
            slug: "family-safari-surf-and-turf",
            rating: 4.2,
            reviews: 42,
            duration: "10 Days",
            locations: "3 Locations",
            locationsCount: 3,
            excursions: 12,
            country: "1 Country",
            description:
                "10 Day Family Safari Tour to Negombo, Kaudulla National Park, Yala, and Galle",
            price: 12430,
            oldPrice: 13990,
            subtitle: "End Colombo",
            days: 10,
            image: "/assets/images/tour-images/family-safari-surf-and-turf.png",
            mapImageSrc: "/assets/images/tour-images/maps/1.jpg",
            isCounty: true,
            itinerary: [
                { day: 1, location: "Negombo" },
                { day: 2, location: "Kaudulla National Park" },
                { day: 3, location: "Yala" },
                { day: 4, location: "Galle" },
                { day: 5, location: "Galle" },
                { day: 6, location: "Galle" },
                { day: 7, location: "Galle" },
                { day: 8, location: "Galle" },
                { day: 9, location: "Galle" },
                { day: 10, location: "Colombo" },
            ],
            quickView: true,
            actions: {
                hasCompare: true,
                hasQuote: true,
                hasViewTrip: true,
            },
        },
        {
            id: 3,
            title: "Golfing in Sri Lanka",
            slug: "golfing-in-sri-lanka",
            rating: 4.2,
            reviews: 42,
            duration: "10 Days",
            locations: "5 Locations",
            locationsCount: 5,
            excursions: 8,
            country: "1 Country",
            description: "10 Day Golf Tour from Kandy to Nuwara Eliya and Colombo",
            price: 8940,
            oldPrice: 9240,
            subtitle: "End Colombo",
            days: 10,
            image: "/assets/images/tour-images/golfing-in-sri-lanka.png",
            mapImageSrc: "/assets/images/tour-images/maps/3.png",
            isCounty: true,
            itinerary: [
                { day: 1, location: "Kandy" },
                { day: 2, location: "Kandy" },
                { day: 3, location: "Nuwara Eliya" },
                { day: 4, location: "Nuwara Eliya" },
                { day: 5, location: "Colombo" },
                { day: 6, location: "Colombo" },
                { day: 7, location: "Colombo" },
                { day: 8, location: "Colombo" },
                { day: 9, location: "Colombo" },
                { day: 10, location: "Colombo" },
            ],
            quickView: true,
            isBigTourSale: true,
            saveUpTo: 485,
            actions: {
                hasCompare: true,
                hasQuote: true,
                hasViewTrip: true,
            },
        },
        {
            id: 4,
            title: "Luxury Surfing in Sri Lanka",
            slug: "luxury-surfing-in-sri-lanka",
            rating: 4.2,
            reviews: 42,
            duration: "9 Days",
            locations: "5 Locations",
            locationsCount: 5,
            excursions: 7,
            country: "1 Country",
            description: "9 Day Luxury Surfing Tour from Weligama to Tangalle",
            price: 6800,
            oldPrice: 7490,
            subtitle: "End Colombo",
            days: 9,
            image: "/assets/images/tour-images/luxury-surfing-in-sri-lanka.png",
            mapImageSrc: "/assets/images/tour-images/maps/3.png",
            isCounty: true,
            itinerary: [
                { day: 1, location: "Weligama" },
                { day: 2, location: "Weligama" },
                { day: 3, location: "Tangalle" },
                { day: 4, location: "Tangalle" },
                { day: 5, location: "Tangalle" },
                { day: 6, location: "Tangalle" },
                { day: 7, location: "Tangalle" },
                { day: 8, location: "Tangalle" },
                { day: 9, location: "Colombo" },
            ],
            quickView: true,
            isBigTourSale: true,
            actions: {
                hasCompare: true,
                hasQuote: true,
                hasViewTrip: true,
            },
        },
        {
            id: 5,
            title: "Luxury Surfing in Sri Lanka",
            slug: "luxury-surfing-in-sri-lanka",
            rating: 3,
            reviews: 42,
            duration: "9 Days",
            locations: "5 Locations",
            locationsCount: 5,
            excursions: 7,
            country: "1 Country",
            description: "9 Day Luxury Surfing Tour from Weligama to Tangalle",
            price: 6800,
            oldPrice: 7100,
            subtitle: "End Colombo",
            days: 9,
            image: "/assets/images/tour-images/luxury-surfing-in-sri-lanka.png",
            mapImageSrc: "/assets/images/tour-images/maps/3.png",
            isCounty: true,
            itinerary: [
                { day: 1, location: "Weligama" },
                { day: 2, location: "Weligama" },
                { day: 3, location: "Tangalle" },
                { day: 4, location: "Tangalle" },
                { day: 5, location: "Tangalle" },
                { day: 6, location: "Tangalle" },
                { day: 7, location: "Tangalle" },
                { day: 8, location: "Tangalle" },
                { day: 9, location: "Colombo" },
            ],
            quickView: true,
            isBigTourSale: true,
            actions: {
                hasCompare: true,
                hasQuote: true,
                hasViewTrip: true,
            },
        },
    ]

    const section20Data = [
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.\n\nWe update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.\n\nIf there are ever any changes to your departure, we will contact you.'
        },
    ];
    
    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Boutique Luxury" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='w-full mx-auto'>
                <Hero2
                    image="assets/images/boutique-luxury/hero.jpg"
                    title="Boutique Luxury"
                    description="Find intimate escapes boutique hotels and exquisitely crafted villas"
                    type={2}
                    button=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="font-figtree font-semibold"
                />
            </div>

            {/* Find your happy place */}
            <div className='w-full mt-12'>
                <Section3
                    title={'"Find your happy place"'}
                    description1=""
                    description2={`Enjoy lovely boutique stays in Sri Lanka that feel just right not too fancy, but definitely special. Each place has its own personality and treats you like family, giving you those little extras that make all the difference.`}
                    button="Search Tours"
                    buttonLink="/search"
                    titleClassName=""
                    description1ClassName=""
                    description2ClassName=""
                    buttonClassName=""
                    sizeClassName=""
                />
            </div>

            {/* Meet your hosts */}
            <div className='w-full mt-12'>
                <Section17
                    title=""
                    description=""
                    videoId="nxWNyTiE7J0"
                />
            </div>

            {/* A few of your Galle, Sri Lanka Stays with Tales */}
            <div className='w-full mt-12'>
                <Card3Carousel3
                    cards={card3Carousel3Data1}
                    title="A few of your Galle, Sri Lanka Stays with Tales"
                    description="Galle Fort stands as Sri Lanka's most captivating colonial treasure, where cobblestone streets wind past Dutch architecture and ocean ramparts. This UNESCO World Heritage site offers intimate luxury within historic walls, where boutique properties blend centuries old heritage with contemporary sophistication, creating unforgettable experiences steps from pristine beaches and cultural landmarks."
                    bgColor1="bg-[#E2EBE6]"
                    classNameTitle=""
                    classNameDescription=""
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                />
            </div>

            {/* A few of your Bentota, Sri Lanka Stays with Tales */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data1}
                    title="A few of your Bentota, Sri Lanka Stays with Tales"
                    description="Bentota's golden coastline offers the perfect blend of pristine beaches and tropical luxury, where the Bentota River meets the Indian Ocean. This southern paradise features world-class boutique resorts perched on dramatic clifftops, providing intimate retreats with private beaches, infinity pools, and spa sanctuaries that redefine coastal elegance and personalized hospitality."
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* reviews */}
            <div className='w-full mt-12 bg-[#E4EAF6] py-12'>
                <div className='my-container'>
                    <Card20Carousel1
                        cards={reviewData}
                        title="What our guests say"
                        classNameTitle=""
                        classNameButton=""
                        classNameDescription=""
                    />
                </div>
            </div>

            {/* A few of your Kandy, Sri Lanka Stays with Tales */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data2}
                    title="A few of your Kandy, Sri Lanka Stays with Tales"
                    description="Kandy, Sri Lanka's cultural capital, nestles around the sacred Temple of the Tooth amid emerald hills and tea plantations. This ancient kingdom offers boutique luxury within restored colonial manors and heritage properties, where traditional Kandyan architecture meets contemporary comfort, providing exclusive access to cultural ceremonies, spice gardens, and scenic mountain landscapes."
                    size0={1}
                    size768={2}
                    size1024={2}
                    size1280={2}
                    minSize={2}
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* A few of your Negombo, Sri Lanka Stays with Tales */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data3}
                    title="A few of your Negombo, Sri Lanka Stays with Tales"
                    description="Negombo's strategic location near Bandaranaike International Airport makes it the perfect gateway destination, featuring pristine beaches and rich fishing heritage. This coastal town offers boutique luxury resorts designed by renowned architects, where contemporary tropical design meets traditional Sri Lankan hospitality, providing beachfront sanctuaries with world-class spas and authentic cultural experiences."
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* testimonial 1 */}
            <div className='w-full mt-12 bg-[#E2EBE6] py-12'>
                <div className='my-container'>
                    <Card23
                        image="assets/images/ultimate-luxury/testimonial-1.png"
                        title="“I felt spoiled by Travelgate!”"
                        feedback="I have to say, Bellwood Manor is hands down the most beautiful and luxurious boutique hotel I've ever stayed at! It brings together elegance and a cosy, homely vibe, making every moment feel special and welcoming."
                        feedbackAuthor="Vanessa G"
                        city="Serendib"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>
            </div>

            {/* A few of your Colombo, Sri Lanka Stays with Tales */}
            <div className='my-container mt-12'>
                <Card3Carousel1
                    cards={card3Carousel1Data4}
                    title="A few of your Colombo, Sri Lanka Stays with Tales"
                    description="Colombo pulses as Sri Lanka's vibrant commercial capital, where colonial elegance meets modern sophistication in the prestigious Cinnamon Gardens district. The city's boutique luxury scene features intimate urban sanctuaries in heritage buildings, offering personalized concierge services, fine dining experiences, and exclusive access to art galleries, cultural sites, and high-end shopping districts."
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* A few of your Nuwara Eliya, Sri Lanka Stays with Tales */}
            <div className='w-full mt-12'>
                <Card3Carousel3
                    cards={card3Carousel3Data2}
                    title="A few of your Nuwara Eliya, Sri Lanka Stays with Tales"
                    description="Nuwara Eliya, known as 'Little England,' sits majestically in Sri Lanka's central highlands, surrounded by rolling tea plantations and misty mountains. This cool climate retreat offers boutique luxury in converted heritage buildings and tea factories, where colonial charm meets mountain serenity, providing intimate experiences with tea cultivation traditions and breathtaking panoramic valley views."
                    bgColor1="bg-[#E4EAF6]"
                    classNameTitle=""
                    classNameDescription=""
                    size0={1}
                    size768={2}
                    size1024={2}
                    size1280={2}
                    minSize={2}
                />
            </div>

            {/* Our exceptional standards */}
            <div className='my-container mt-12'>
                <Card19Carousel1
                    cards={card19Carousel1Data1}
                    title="Our exceptional standards"
                    description="You can rest assured that every hotel you visit on a Travelgate tour meets our exceptional standards."
                    size0={1}
                    size768={2}
                    size1024={3}
                    size1280={3}
                    minSize={3}
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>

            {/* Trending tours featuring Stays with Tales */}
            <div className='w-full mt-12 bg-[#EBE7EB]'>
                <div className='my-container py-12 '>
                    <TourCardCarousel1
                        data={tourCardCarousel1Data1}
                        title="Trending tours featuring Stays with Tales"
                        description=""
                        button="See More Trips"
                        classNameButton=""
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>
            </div>

            {/* Trusted Partners */}
            <div className='my-container z-10 relative mt-12'>
                <Section20
                    data={section20Data}
                    partner1="Partner 1"
                    partner2="Partner 2"
                    partner3="Partner 3"
                    partner4="Partner 4"
                    partner1Logo="assets/images/trusted-partners/partner1.svg"
                    partner2Logo="assets/images/trusted-partners/partner2.svg"
                    partner3Logo="assets/images/trusted-partners/partner3.svg"
                    partner4Logo="assets/images/trusted-partners/partner4.svg"
                    title="A few of our trusted partners"
                    description="We're proud to collaborate with some of the world's most popular hotel brands to provide luxurious accommodations throughout your trip. Please see your chosen tour for a list of our trusted partners from around everywhere, including the ones listed below."
                    descriptionClassName=""
                    titleClassName=""
                />
            </div>

            {/* More one-of-a kind experiences */}
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
