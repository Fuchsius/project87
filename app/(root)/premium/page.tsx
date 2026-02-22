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
            image: "assets/images/premium/galle-1.png",
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
            image: "assets/images/premium/galle-2.png",
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
            image: "assets/images/premium/galle-3.png",
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
            image: "assets/images/premium/galle-2.png",
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
            image: "assets/images/premium/bentota-1.png",
            title: "NH Bentota Ceysands Resort",
            title2: "Bentota Beach, Sri Lanka",
            description: "This beachfront haven combines contemporary luxury with traditional Sri Lankan design, offering spacious rooms and suites with ocean or river views. The resort's multiple restaurants, extensive spa facilities, and water sports center cater to every desire. The property's prime location where the Bentota River meets the ocean creates a unique setting for both relaxation and adventure. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/bentota-2.png",
            title: "Cinnamon Bentota Beach",
            title2: "Bentota Beach, Sri Lanka",
            description: "A sophisticated beachfront resort that seamlessly blends modern amenities with tropical elegance, featuring rooms and suites with private balconies overlooking the ocean or lush gardens. The property offers multiple dining options, a world-class spa, and direct access to pristine beaches. The warm hospitality and attention to detail make every guest feel genuinely welcomed and cared for. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/bentota-3.png",
            title: "Taj Bentota Resort",
            title2: "Bentota, Sri Lanka",
            description: "This elegant beachfront resort combines timeless luxury with modern comfort, featuring beautifully appointed rooms and suites with spectacular ocean views. The property's colonial-inspired architecture creates an atmosphere of refined elegance, while multiple restaurants and bars offer diverse dining experiences. The extensive spa and recreational facilities cater to every guest's desire for relaxation or adventure. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/bentota-2.png",
            title: "Cinnamon Bentota Beach",
            title2: "Bentota Beach, Sri Lanka",
            description: "A sophisticated beachfront resort that seamlessly blends modern amenities with tropical elegance, featuring rooms and suites with private balconies overlooking the ocean or lush gardens. The property offers multiple dining options, a world-class spa, and direct access to pristine beaches. The warm hospitality and attention to detail make every guest feel genuinely welcomed and cared for. Stay here on",
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
            image: "assets/images/premium/kandy-1.png",
            title: "Santani Wellness",
            title2: "Werapitiya Village, Kandy, Sri Lanka",
            description: "The Kandy hills host this award winning wellness retreat with minimalist luxury accommodations, panoramic mountain views, and world class spa facilities. The property's design emphasizes nature and offers cutting edge wellness programs and healthy food. Pavilion style rooms are private retreats where guests can reconnect with nature. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/kandy-2.png",
            title: "Earl's Regency Hotel",
            title2: "Tennekumbura Village, Kandy, Sri Lanka",
            description: "This elegant property provides modern luxury and Sri Lankan hospitality on a hilltop overlooking Kandy Lake and the mountains. The spacious rooms and suites have private balconies with stunning views, and multiple restaurants offer diverse dining. While near Kandy's cultural attractions, the property's elevated location offers peace and quiet. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/kandy-1.png",
            title: "Santani Wellness",
            title2: "Werapitiya Village, Kandy, Sri Lanka",
            description: "The Kandy hills host this award winning wellness retreat with minimalist luxury accommodations, panoramic mountain views, and world class spa facilities. The property's design emphasizes nature and offers cutting edge wellness programs and healthy food. Pavilion style rooms are private retreats where guests can reconnect with nature. Stay here on",
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
            image: "assets/images/premium/negombo-1.png",
            title: "Jetwing Lagoon",
            title2: "Palangaththivu Village, Negombo, Sri Lanka",
            description: "An award winning 18 bedroom boutique hotel set in an 18th century manor house amidst tropical gardens, where colonial grandeur meets contemporary luxury. This intimate sanctuary offers sophisticated accommodations with personalized butler service, world class dining, and unparalleled privacy just minutes from Colombo Airport, defining the pinnacle of boutique hospitality excellence. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/negombo-2.png",
            title: "Heritance Negombo",
            title2: "Ethukala Village, Negombo, Sri Lanka.",
            description: "A sophisticated beachfront resort that combines contemporary architecture with tropical elegance, featuring spacious rooms and suites with ocean views and modern amenities. The property's multiple restaurants, extensive spa facilities, and beachfront location create the perfect setting for both relaxation and recreation. The warm hospitality and attention to detail ensure every aspect of your stay exceeds expectationsStay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/negombo-3.png",
            title: "Club Hotel Dolphin",
            title2: "Waikkal Village, Negombo, Sri Lanka",
            description: "Set on a pristine stretch of beach north of Negombo, this boutique resort offers comfortable accommodations with ocean views and direct beach access. The property's restaurants serve fresh seafood and local specialties, while the spa provides relaxing treatments. The peaceful beachfront location and friendly service make it perfect for travelers seeking a relaxed coastal experience before or after international flights. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/negombo-2.png",
            title: "Heritance Negombo",
            title2: "Ethukala Village, Negombo, Sri Lanka.",
            description: "A sophisticated beachfront resort that combines contemporary architecture with tropical elegance, featuring spacious rooms and suites with ocean views and modern amenities. The property's multiple restaurants, extensive spa facilities, and beachfront location create the perfect setting for both relaxation and recreation. The warm hospitality and attention to detail ensure every aspect of your stay exceeds expectationsStay here on",
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
            image: "assets/images/premium/colombo-1.png",
            title: "The Kingsbury Hotel",
            title2: "Galle Face Green, Colombo, Sri Lanka",
            description: "This iconic waterfront hotel offers sophisticated accommodations with stunning views of the Indian Ocean and Galle Face Green, combining contemporary elegance with warm Sri Lankan hospitality. The property's restaurants showcase international cuisine and local specialties, while the spa provides unique treatments. The prime location puts guests at the heart of Colombo's business and cultural districts with easy access to shopping and entertainment. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/colombo-2.png",
            title: "Shangri La Hotel Colombo",
            title2: "Galle Face Green, Colombo, Sri Lanka",
            description: "A luxury landmark that defines elegance in the heart of Colombo, featuring spacious rooms and suites with ocean or city views and contemporary furnishings. The hotel's multiple restaurants offer diverse culinary experiences, while the spa and fitness facilities provide comprehensive wellness amenities. The sophisticated atmosphere and impeccable service make it the preferred choice for discerning travelers and business executives. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/colombo-3.png",
            title: "Cinnamon Grand Colombo",
            title2: "Colombo, Sri Lanka",
            description: "This premier city hotel combines luxury accommodations with convenient access to Colombo's business and shopping districts, offering elegantly appointed rooms with modern amenities and city views. The property's restaurants showcase international cuisine and local flavors, while extensive conference facilities cater to business travelers. The central location and professional service make it ideal for both leisure and corporate guests. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/colombo-2.png",
            title: "Shangri La Hotel Colombo",
            title2: "Galle Face Green, Colombo, Sri Lanka",
            description: "A luxury landmark that defines elegance in the heart of Colombo, featuring spacious rooms and suites with ocean or city views and contemporary furnishings. The hotel's multiple restaurants offer diverse culinary experiences, while the spa and fitness facilities provide comprehensive wellness amenities. The sophisticated atmosphere and impeccable service make it the preferred choice for discerning travelers and business executives. Stay here on",
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
            image: "assets/images/premium/nuwara-eliya-1.png",
            title: "Jetwing St. Andrew's",
            title2: "St. Andrew's Drive, Nuwara Eliya, Sri Lanka",
            description: "Since 1875, this colonial-era hotel has offered elegant rooms with views of manicured gardens and distant mountains. Tudor-style architecture, antique furnishings, and afternoon tea service recreate old Ceylon. The cool mountain climate and heritage atmosphere transport guests to a bygone era of gracious hospitality. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/nuwara-eliya-2.png",
            title: "Heritance Tea Factory",
            title2: "Kandapola Village, Nuwara Eliya, Sri Lanka",
            description: "This unique property is a converted tea factory that offers luxury accommodations with mountain views on a working tea plantation. Each room exhibits factory machinery and modern comfort to honour the property's industrial heritage. The mountain setting offers cool respite and scenic beauty, while the on-site tea factory tours and tastings impart authentic Ceylon tea knowledge. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/premium/nuwara-eliya-1.png",
            title: "Jetwing St. Andrew's",
            title2: "St. Andrew's Drive, Nuwara Eliya, Sri Lanka",
            description: "Since 1875, this colonial-era hotel has offered elegant rooms with views of manicured gardens and distant mountains. Tudor-style architecture, antique furnishings, and afternoon tea service recreate old Ceylon. The cool mountain climate and heritage atmosphere transport guests to a bygone era of gracious hospitality. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card19Carousel1Data1 = [
        {
            image: "assets/images/premium/exceptional-1.png",
            title: "HANDPICKED",
            subTitle: "Hotels",
            description: "Whether in a chic city boutique hotel or a quiet villa, discover the best in hospitality. Every stay promises flawless service, opulent rooms, and an unforgettable ambiance, so combining comfort with elegance for the ideal vacation. Savish simple elegance.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/premium/exceptional-2.png",
            title: "EXCELLENT",
            subTitle: "Service",
            description: "Relax and enjoy a smooth journey with expert coordination from your Travel Director, coach driver, and hotel staff. Enjoy easy check ins, quick service, and the convenience of having your luggage delivered right to your door. Luxury travel made simple.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/premium/exceptional-3.png",
            title: "RELAXED",
            subTitle: "Starts",
            description: "Enjoy leisurely mornings with Relaxed Start days, giving you extra time to sleep in or explore at your own pace. Every itinerary includes this feature, ensuring a stress free experience with flexibility to make the most of your journey.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/premium/exceptional-2.png",
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
            image: "assets/images/premium/experiences-1.png",
            title: "Oceanic Adventures",
            description: "Let the ocean set you free ",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/premium/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/premium/experiences-3.png",
            title: "Outdoor & Nature",
            description: "Adventure awaits, just step outside",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/premium/experiences-2.png",
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
                    { label: "Premium" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='w-full mx-auto'>
                <Hero2
                    image="assets/images/premium/hero.png"
                    title="Premium"
                    description="Relax in luxury with top tier service, every time."
                    type={2}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="font-figtree font-semibold"
                />
            </div>

            {/* Slip into Serenity */}
            <div className='w-full mt-12'>
                <Section3
                    title={'"Slip into Serenity"'}
                    description1=""
                    description2={`Explore the best modern luxury stays in Sri Lanka, where every property tells a tale. Selected for distinctive appeal, first rate comfort, and real world experiences in stunning locations island wide.`}
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
                    description="Ancient ramparts embrace contemporary elegance where colonial mansions become boutique retreats. From clifftop villas to heritage hotels within UNESCO walls, Galle offers luxury steeped in maritime history. Cobblestone streets lead to oceanfront sanctuaries where Portuguese, Dutch, and British influences create uniquely Sri Lankan hospitality experiences."
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
                    description="Golden beaches stretch endlessly while coconut palms sway over luxury resorts. This coastal paradise offers everything from clifftop villas to beachfront elegance. River safari adventures complement beach relaxation, creating the perfect balance of tropical luxury and natural exploration for discerning travelers seeking coastal sophistication."
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
                    description="Ancient temples meet colonial elegance where sacred lakes reflect mountain mists. Traditional Kandyan culture comes alive through luxury properties nestled in spice gardens and tea estates. From wellness retreats to heritage hotels, each stay offers authentic experiences where spiritual heritage and natural beauty create unforgettable mountain luxury."
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
                    description="Traditional fishing villages meet contemporary resort elegance along golden beaches. Catamaran sails dot lagoons while luxury properties offer everything from overwater experiences to colonial charm. Perfect for airport convenience with authentic coastal culture, creating the ideal beginning or end to any Sri Lankan luxury journey through beachfront sophistication."
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
                    description="Colonial grandeur blends with contemporary luxury in Sri Lanka's vibrant capital. From iconic waterfront hotels to boutique heritage properties, the city offers world class dining, shopping, and cultural experiences. Business meets leisure where modern skyscrapers frame historic neighborhoods, creating sophisticated urban luxury with authentic local character."
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
                    description="Colonial heritage meets misty highland charm where tea plantations carpet rolling hills. Historic hotels preserve British Raj elegance, while converted tea factories offer unique luxury experiences. Cool climate and manicured gardens create perfect retreats where afternoon tea traditions and mountain walks define refined hill station luxury."
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
