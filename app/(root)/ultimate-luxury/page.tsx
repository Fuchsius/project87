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
            image: "assets/images/ultimate-luxury/galle-1.png",
            title: "Amangalla",
            title2: "Galle Dutch Fort, Sri Lanka",
            description: "This legendary colonial residence within Galle Fort's ancient walls offers twenty nine lofty ceilinged suites adorned with period antiques and contemporary artworks. Guests experience refined dining at The Dining Room, rejuvenating treatments at the tranquil Aman Spa, and evening cocktails on the historic verandah, where timeless Dutch colonial elegance seamlessly blends with Aman's signature luxury hospitality standards. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/galle-2.png",
            title: "Fort Bazaar",
            title2: "Fort Bazaar, Sri Lanka",
            description: "A meticulously restored 17th-century Dutch merchant's townhouse transformed into an intimate, seventeen-room boutique sanctuary within Galle Fort's cobblestone streets. This architectural gem features sophisticated guest accommodations with original lime-washed walls, contemporary Sri Lankan artworks, an acclaimed restaurant serving modern European cuisine, and an atmospheric rooftop bar offering panoramic fort and ocean vistas. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/galle-3.png",
            title: "The Postcard Galle",
            title2: "Old Colombo Main Rd Galle, Sri Lanka",
            description: "Dramatically perched on stilts above Koggala Lake's crystalline waters, this intimate six suite property offers unparalleled privacy and breathtaking Indian Ocean panoramas. Each elegantly appointed suite features floor to ceiling windows, private terraces, and bespoke furnishings, while guests enjoy personalized service, gourmet dining experiences, and direct access to pristine beaches where tropical luxury meets sophisticated architectural design. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/galle-2.png",
            title: "Fort Bazaar",
            title2: "Fort Bazaar, Sri Lanka",
            description: "A meticulously restored 17th-century Dutch merchant's townhouse transformed into an intimate, seventeen-room boutique sanctuary within Galle Fort's cobblestone streets. This architectural gem features sophisticated guest accommodations with original lime-washed walls, contemporary Sri Lankan artworks, an acclaimed restaurant serving modern European cuisine, and an atmospheric rooftop bar offering panoramic fort and ocean vistas. Stay here on",
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
            image: "assets/images/ultimate-luxury/bentota-1.png",
            title: "Club Villa",
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
            image: "assets/images/ultimate-luxury/bentota-2.png",
            title: "Taru Villas The Long House",
            title2: "Induruwa Beach, Bentota, Sri Lanka",
            description: "Occupying a sliver of land leading to the Indian Ocean, offering tropical luxury in linear form with contemporary style, fine dining and attentive service. This 5-star luxury hotel and Small Luxury Hotels of the World member features exclusive villa accommodations with direct beachfront access and world-class amenities. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/bentota-3.png",
            title: "Jetwing Saman Villas",
            title2: "Aturuwella, Bentota, Sri Lanka",
            description: "Perched dramatically on a clifftop overlooking the Indian Ocean, this architectural masterpiece offers twenty seven exclusive suites and villas with infinity pools carved into rocky outcrops. Each accommodation features private terraces, panoramic ocean views, personalized butler service, and direct beach access, where contemporary design meets natural grandeur in ultimate coastal luxury perfection. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/bentota-2.png",
            title: "Taru Villas The Long House",
            title2: "Induruwa Beach, Bentota, Sri Lanka",
            description: "Occupying a sliver of land leading to the Indian Ocean, offering tropical luxury in linear form with contemporary style, fine dining and attentive service. This 5-star luxury hotel and Small Luxury Hotels of the World member features exclusive villa accommodations with direct beachfront access and world-class amenities. Stay here on",
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
            image: "assets/images/ultimate-luxury/kandy-1.png",
            title: "Kings Pavilion Kandy",
            title2: "Aniwatta, Kandy, Sri Lanka",
            description: "An intimate 9 room boutique sanctuary overlooking Kandy's hill capital, where traditional Sri Lankan hospitality meets resplendent luxury. This 5 star retreat offers personalized service, contemporary elegance, and breathtaking panoramic views, creating an exclusive haven for discerning travelers seeking unparalleled sophistication. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/kandy-2.png",
            title: "Cinnamon Citadel Kandy",
            title2: "Kandy, Sri Lanka",
            description: "Majestically positioned 1,640 feet above sea level against the Knuckles Mountain Range and Mahaweli River, this luxury citadel combines spectacular natural beauty with world class amenities. Experience refined elegance through exceptional dining, luxurious accommodations, and breathtaking vistas that define Sri Lankan hospitality excellence. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/kandy-1.png",
            title: "Kings Pavilion Kandy",
            title2: "Aniwatta, Kandy, Sri Lanka",
            description: "An intimate 9 room boutique sanctuary overlooking Kandy's hill capital, where traditional Sri Lankan hospitality meets resplendent luxury. This 5 star retreat offers personalized service, contemporary elegance, and breathtaking panoramic views, creating an exclusive haven for discerning travelers seeking unparalleled sophistication. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/kandy-2.png",
            title: "Cinnamon Citadel Kandy",
            title2: "Kandy, Sri Lanka",
            description: "Majestically positioned 1,640 feet above sea level against the Knuckles Mountain Range and Mahaweli River, this luxury citadel combines spectacular natural beauty with world class amenities. Experience refined elegance through exceptional dining, luxurious accommodations, and breathtaking vistas that define Sri Lankan hospitality excellence. Stay here on",
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
            image: "assets/images/ultimate-luxury/negombo-1.png",
            title: "Wallawwa",
            title2: "Kotugoda, Negombo, Sri Lanka",
            description: "An award winning 18 bedroom boutique hotel set in an 18th century manor house amidst tropical gardens, where colonial grandeur meets contemporary luxury. This intimate sanctuary offers sophisticated accommodations with personalized butler service, world class dining, and unparalleled privacy just minutes from Colombo Airport, defining the pinnacle of boutique hospitality excellence. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/negombo-2.png",
            title: "Uga Riva",
            title2: "Thoppuwa, Negombo, Sri Lanka",
            description: "A renovated 180 year old manor house with seven individually designed guestrooms carved from a fine 19th century wallawwa, offering exclusive luxury with original architectural features and garden views. This distinguished boutique retreat combines historical heritage with modern sophistication, providing intimate accommodations and bespoke experiences that transcend conventional hospitality standards in an exceptional lagoon side setting. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/negombo-3.png",
            title: "Agandau House",
            title2: "Negombo Lagoon, Sri Lanka",
            description: "A privately owned luxury villa overlooking the breathtaking lagoon, positioned as an oasis of sophistication offering exceptional amenities and personalized service. This exclusive boutique property epitomizes intimate luxury with panoramic lagoon vistas, world class hospitality, and refined accommodations that provide discerning travelers with an unparalleled escape in Sri Lanka's coastal paradise. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/negombo-2.png",
            title: "Uga Riva",
            title2: "Thoppuwa, Negombo, Sri Lanka",
            description: "A renovated 180 year old manor house with seven individually designed guestrooms carved from a fine 19th century wallawwa, offering exclusive luxury with original architectural features and garden views. This distinguished boutique retreat combines historical heritage with modern sophistication, providing intimate accommodations and bespoke experiences that transcend conventional hospitality standards in an exceptional lagoon side setting. Stay here on",
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
            image: "assets/images/ultimate-luxury/colombo-1.png",
            title: "Paradise Road Tintagel",
            title2: "Rosmead Place, Colombo, Sri Lanka",
            description: "This world renowned boutique hotel occupies a stunning heritage mansion that once housed three Prime Ministers, featuring ten individually designed suites with Egyptian cotton linens, contemporary art, and modern amenities. Nestled in Colombo's most elite Cinnamon Gardens neighborhood, it offers an intimate sanctuary of sophisticated elegance. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/colombo-2.png",
            title: "55TG Boutique Suites",
            title2: "Colombo, Sri Lanka",
            description: "This authentic boutique experience unfolds in a meticulously restored 1920s period house featuring unique, individually designed rooms, private garden pavilion, and personalized homestay atmosphere. Each suite tells its own story through distinctive décor, offering guests an exclusive residential luxury experience beyond conventional hotel standards. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/colombo-3.png",
            title: "Jetwing Colombo Seven",
            title2: "Ward Place, Colombo, Sri Lanka",
            description: "The Ward7 rooftop bar, which features panoramic views of the city and an infinity pool, is the crowning feature of this contemporary interpretation of boutique luxury, which features a minimalist design philosophy. Creating an exclusive urban retreat that redefines the standards of sophisticated hospitality, this contemporary sanctuary combines the sleek architectural elegance of its architecture with the personalized service of its individuals. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/colombo-2.png",
            title: "55TG Boutique Suites",
            title2: "Colombo, Sri Lanka",
            description: "This authentic boutique experience unfolds in a meticulously restored 1920s period house featuring unique, individually designed rooms, private garden pavilion, and personalized homestay atmosphere. Each suite tells its own story through distinctive décor, offering guests an exclusive residential luxury experience beyond conventional hotel standards. Stay here on",
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
            image: "assets/images/ultimate-luxury/nuwara-eliya-1.png",
            title: "The Bellwood Manor",
            title2: "Lake Gregory, Nuwara Eliya, Sri Lanka",
            description: "This intimate eight room luxury hotel offers a personalized, indulgent experience with British colonial architecture, modern luxury, and Sri Lankan hospitality. In the heart of Nuwara Eliya, the century old building exudes English manor charm and offers modern travelers elegant boutique comforts. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/nuwara-eliya-2.png",
            title: "Oliphant Boutique Villa By Amaya",
            title2: "Tea Estate, Nuwara Eliya, Sri Lanka",
            description: "At this luxurious villa in a lush tea estate in Nuwara Eliya, cosy up to the misty mountains. This boutique sanctuary in Sri Lanka's highlands offers intimate luxury and pristine natural beauty in a tea country experience with free bikes, garden views, restaurant, 24 hour concierge service, and full day security. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/ultimate-luxury/nuwara-eliya-1.png",
            title: "The Bellwood Manor",
            title2: "Lake Gregory, Nuwara Eliya, Sri Lanka",
            description: "This intimate eight room luxury hotel offers a personalized, indulgent experience with British colonial architecture, modern luxury, and Sri Lankan hospitality. In the heart of Nuwara Eliya, the century old building exudes English manor charm and offers modern travelers elegant boutique comforts. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card19Carousel1Data1 = [
        {
            image: "assets/images/ultimate-luxury/exceptional-1.png",
            title: "HANDPICKED",
            subTitle: "Hotels",
            description: "Whether in a chic city boutique hotel or a quiet villa, discover the best in hospitality. Every stay promises flawless service, opulent rooms, and an unforgettable ambiance, so combining comfort with elegance for the ideal vacation. Savish simple elegance.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/ultimate-luxury/exceptional-2.png",
            title: "EXCELLENT",
            subTitle: "Service",
            description: "Relax and enjoy a smooth journey with expert coordination from your Travel Director, coach driver, and hotel staff. Enjoy easy check ins, quick service, and the convenience of having your luggage delivered right to your door. Luxury travel made simple.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/ultimate-luxury/exceptional-3.png",
            title: "RELAXED",
            subTitle: "Starts",
            description: "Enjoy leisurely mornings with Relaxed Start days, giving you extra time to sleep in or explore at your own pace. Every itinerary includes this feature, ensuring a stress free experience with flexibility to make the most of your journey.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/ultimate-luxury/exceptional-2.png",
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
                    { label: "Ultimate Luxury" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='w-full mx-auto'>
                <Hero2
                    image="assets/images/ultimate-luxury/hero.jpg"
                    title="Ultimate Luxury"
                    description="Experience elegant boutique stays where luxury meets remarkable beauty"
                    type={2}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="font-figtree font-semibold"
                />
            </div>

            {/* Connect with locals */}
            <div className='w-full mt-12'>
                <Section3
                    title={'"Put your feet up, let your hair down"'}
                    description1=""
                    description2={`Experience elegant boutique stays in Sri Lanka, where ultimate luxury meets remarkable beauty. Each unique property blends premium amenities with authentic charm for an immersive and unforgettable escape.`}
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
                    description="Our collection of exceptional accommodation partners showcase the best of Sri Lanka's southern coast. Whether it's a historic colonial residence, a fort side boutique retreat, or a dramatic oceanfront escape, each destination blends luxury, culture, and heritage. Here's a few that you could look forward to across our vacations in Galle, Sri Lanka."
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
                    description="Experience elegant boutique stays where luxury meets remarkable beauty along Sri Lanka's most pristine golden coastline. Discover our hand picked collection of Ultimate Luxury accommodations featuring multiple luxury boutique collections and exclusive properties that make Bentota a premier coastal destination."
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
                    description="Experience elegant boutique stays where luxury meets remarkable beauty in Sri Lanka's cultural heart amid misty mountains and sacred temples. Discover our hand picked collection of Ultimate Luxury accommodations featuring multiple luxury boutique collections and exclusive properties that make Kandy a premier hill country destination."
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
                    description="Discover refined boutique accommodations where opulence intertwines with coastal elegance along the pristine shores of Sri Lanka's golden gateway. Explore our carefully curated selection of ultimate luxury accommodations, showcasing exclusive boutique properties that elevate Negombo to a top tier coastal destination."
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
                    description="Discover Colombo's most exclusive boutique sanctuaries where colonial grandeur meets contemporary sophistication, offering intimate luxury experiences that transcend traditional five star hospitality through personalized service, bespoke design, and unparalleled privacy in prestigious heritage settings."
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
                    description="Escape to the most exclusive highland retreats in Nuwara Eliya, where colonial elegance and mountain mystique come together. These sanctuaries offer intimate luxury accommodations that go beyond the traditional concept of hospitality by providing personalized service, breathtaking hill country vistas, and heritage charm."
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
