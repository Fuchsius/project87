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
            image: "assets/images/comfort/galle-1.png",
            title: "Cantaloupe Levels",
            title2: "Upper Dickson, Galle, Sri Lanka",
            description: "A contemporary hillside retreat offering elevated views over Galle's historic landscape, modern rooms feature floor to ceiling windows, private terraces, and minimalist design. The infinity pool provides the perfect spot to watch sunset colors paint the sky while enjoying cocktails and local cuisine. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/galle-2.png",
            title: "The Sun House",
            title2: "Upper Dickson, Galle, Sri Lanka",
            description: "There are only four suites available in this restored colonial mansion, which is located in tropical gardens and offers intimate luxury. There is a seamless integration of traditional elements such as wooden floors and high ceilings with contemporary conveniences. Even though it is located in close proximity to Galle's most popular tourist destinations and beaches, the tranquil setting offers a peaceful escape. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/galle-3.png",
            title: "Thaproban Pavilion",
            title2: "Unawatuna, Galle, Sri Lanka",
            description: "This resort, which is perched on a cliff overlooking the golden Unawatuna Bay, provides guests with breathtaking views of the ocean from each and every room. The hotel features a combination of traditional Sri Lankan architecture and contemporary conveniences, including an infinity pool that appears to blend in with the surrounding landscape. The ideal destination for couples who are looking for romance and excitement along the southern coast. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/galle-2.png",
            title: "The Sun House",
            title2: "Upper Dickson, Galle, Sri Lanka",
            description: "There are only four suites available in this restored colonial mansion, which is located in tropical gardens and offers intimate luxury. There is a seamless integration of traditional elements such as wooden floors and high ceilings with contemporary conveniences. Even though it is located in close proximity to Galle's most popular tourist destinations and beaches, the tranquil setting offers a peaceful escape. Stay here on",
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
            image: "assets/images/comfort/bentota-1.png",
            title: "Lagoon Bentota",
            title2: "Bentota, Sri Lanka",
            description: "Where river meets ocean, this resort offers the best of both worlds with lagoon and beach access. Comfortable rooms feature pool views, while guests enjoy private beach areas, water sports, and sunset river cruises. The perfect base for exploring Bentota's natural beauty and coastal attractions. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/bentota-2.png",
            title: "Villa Modarawattha",
            title2: "River Avenue, Bentota, Sri Lanka",
            description: "A luxurious riverside villa that provides a tranquil setting away from the hustle and bustle of the beaches. The rooms are spacious and offer a view of the tranquil Bentota River and tropical gardens. Additionally, guests have access to private boats and can participate in water activities. The peaceful location offers the ideal opportunity for relaxation while still being in close proximity to beach attractions and other local experiences. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/bentota-3.png",
            title: "Club Villa",
            title2: "Bentota, Sri Lanka",
            description: "A boutique beachfront property offering personalized luxury with just fourteen rooms. Each suite features private gardens or ocean views, while the infinity pool stretches toward the horizon. Exceptional service and attention to detail create an intimate atmosphere perfect for romantic escapes and peaceful retreats. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/bentota-2.png",
            title: "Villa Modarawattha",
            title2: "River Avenue, Bentota, Sri Lanka",
            description: "A luxurious riverside villa that provides a tranquil setting away from the hustle and bustle of the beaches. The rooms are spacious and offer a view of the tranquil Bentota River and tropical gardens. Additionally, guests have access to private boats and can participate in water activities. The peaceful location offers the ideal opportunity for relaxation while still being in close proximity to beach attractions and other local experiences. Stay here on",
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
            image: "assets/images/comfort/kandy-1.png",
            title: "Topaz Hotel",
            title2: "Anniewatta, Kandy, Sri Lanka",
            description: "A hilltop hotel offering comfortable accommodation with panoramic views over Kandy and surrounding mountains. Well-appointed rooms feature modern amenities and private balconies, while the elevated location provides spectacular sunrise and sunset views. Perfect for couples and travelers seeking scenic beauty with cultural access. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/kandy-2.png",
            title: "Hotel Suisse",
            title2: "Tennekumbura Village, Kandy, Sri Lanka",
            description: "A boutique hotel combining Swiss precision with Sri Lankan warmth, offering comfortable accommodation in a peaceful garden setting. Well-appointed rooms feature modern amenities and mountain views, while the restaurant serves excellent local and international cuisine. The quiet location provides relaxation while remaining centrally accessible. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/kandy-1.png",
            title: "Topaz Hotel",
            title2: "Anniewatta, Kandy, Sri Lanka",
            description: "A hilltop hotel offering comfortable accommodation with panoramic views over Kandy and surrounding mountains. Well-appointed rooms feature modern amenities and private balconies, while the elevated location provides spectacular sunrise and sunset views. Perfect for couples and travelers seeking scenic beauty with cultural access. Stay here on",
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
            image: "assets/images/comfort/negombo-1.png",
            title: "Jetwing Sea Hotel",
            title2: "Palangathura Village, Negombo, Sri Lanka",
            description: "A contemporary beachfront hotel offering modern comfort with ocean views from every room. The minimalist design emphasizes natural light and sea breezes, while the infinity pool seems to merge with the horizon. Perfect for travelers seeking modern luxury with direct beach access and stunning sunset views. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/negombo-2.png",
            title: "Pledge 3",
            title2: "Carron Place, Negombo, Sri Lanka",
            description: "The boutique hotel is a stylish establishment that combines modern design with friendly hospitality. Comfortable rooms are equipped with contemporary conveniences and artistic touches, and the rooftop terrace provides breathtaking views of the surrounding area. The tranquil atmosphere is preserved despite the fact that the location is in the heart of the city, making it convenient to reach beaches, restaurants, and other local attractions. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/negombo-3.png",
            title: "Camellia Resort & Spa",
            title2: "Poruthota, Negombo, Sri Lanka",
            description: "A garden resort offering comfortable accommodation surrounded by tropical landscaping. Spacious rooms feature modern amenities and garden or pool views, while the peaceful setting provides relaxation close to beaches and attractions. The resort's comprehensive facilities and serene atmosphere cater to all vacation preferences. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/negombo-2.png",
            title: "Pledge 3",
            title2: "Carron Place, Negombo, Sri Lanka",
            description: "The boutique hotel is a stylish establishment that combines modern design with friendly hospitality. Comfortable rooms are equipped with contemporary conveniences and artistic touches, and the rooftop terrace provides breathtaking views of the surrounding area. The tranquil atmosphere is preserved despite the fact that the location is in the heart of the city, making it convenient to reach beaches, restaurants, and other local attractions. Stay here on",
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
            image: "assets/images/comfort/colombo-1.png",
            title: "Fairway Colombo",
            title2: "Galle Face Green, Colombo, Sri Lanka",
            description: "Located in the heart of Colombo's commercial district, this hotel provides comfortable accommodations through its central location. In addition to providing easy access to shopping centers, restaurants, and corporate offices, the location of this hotel includes contemporary rooms that offer views of the city and business amenities. This is the perfect place for urban explorers as well as business travelers. Stay here on",
            link: "#",
            linkText: "Explore Ceylon.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/colombo-2.png",
            title: "Berjaya Hotel Colombo",
            title2: "Galle Face Green, Colombo, Sri Lanka",
            description: "A beachfront hotel offering comfortable accommodation with ocean views and modern amenities. The prime Galle Road location provides easy access to beaches, shopping, and restaurants, while the established facilities cater to both business and leisure needs. Perfect for travelers seeking urban comfort with coastal access. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/colombo-3.png",
            title: "The Steuart by Citrus",
            title2: "Colombo, Sri Lanka",
            description: "An establishment that is located on the water's edge and provides comfortable accommodations, harbour views, and contemporary amenities. Additionally, the location provides convenient access to the port area as well as the attractions of the city. The rooms are well-appointed and feature a contemporary design as well as business amenities. Ideally suited for business travelers as well as those who wish to explore the commercial district of Colombo. Stay here on",
            link: "#",
            linkText: "Classic Sri Lankan Delights.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/colombo-2.png",
            title: "Berjaya Hotel Colombo",
            title2: "Galle Face Green, Colombo, Sri Lanka",
            description: "A beachfront hotel offering comfortable accommodation with ocean views and modern amenities. The prime Galle Road location provides easy access to beaches, shopping, and restaurants, while the established facilities cater to both business and leisure needs. Perfect for travelers seeking urban comfort with coastal access. Stay here on",
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
            image: "assets/images/comfort/nuwara-eliya-1.png",
            title: "Blackpool Hotel",
            title2: "St. Andrew's Drive, Nuwara Eliya, Sri Lanka",
            description: "A charming colonial hotel offering comfortable accommodation with English country house atmosphere. Traditional rooms feature mountain views and classic furnishings, while the peaceful gardens provide relaxation away from town bustle. The intimate setting and personalized service create authentic hill station experiences. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/nuwara-eliya-2.png",
            title: "The Hill Club",
            title2: "Kandapola Village, Nuwara Eliya, Sri Lanka",
            description: "A members' club offering guest accommodation with traditional British colonial atmosphere and mountain views. Classic rooms feature period furnishings and modern comforts, while the club facilities include dining, recreation, and social areas. The exclusive setting provides authentic hill station experiences with historical character. Stay here on",
            link: "#",
            linkText: "Ceylon Soul.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
        {
            type: "3",
            image: "assets/images/comfort/nuwara-eliya-1.png",
            title: "Blackpool Hotel",
            title2: "St. Andrew's Drive, Nuwara Eliya, Sri Lanka",
            description: "A charming colonial hotel offering comfortable accommodation with English country house atmosphere. Traditional rooms feature mountain views and classic furnishings, while the peaceful gardens provide relaxation away from town bustle. The intimate setting and personalized service create authentic hill station experiences. Stay here on",
            link: "#",
            linkText: "Essence of Sri Lanka.",
            classNameTitle: "",
            classNameDescription: "",
            linkClassName: ""
        },
    ]

    const card19Carousel1Data1 = [
        {
            image: "assets/images/comfort/exceptional-1.png",
            title: "HANDPICKED",
            subTitle: "Hotels",
            description: "Whether in a chic city boutique hotel or a quiet villa, discover the best in hospitality. Every stay promises flawless service, opulent rooms, and an unforgettable ambiance, so combining comfort with elegance for the ideal vacation. Savish simple elegance.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/comfort/exceptional-2.png",
            title: "EXCELLENT",
            subTitle: "Service",
            description: "Relax and enjoy a smooth journey with expert coordination from your Travel Director, coach driver, and hotel staff. Enjoy easy check ins, quick service, and the convenience of having your luggage delivered right to your door. Luxury travel made simple.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/comfort/exceptional-3.png",
            title: "RELAXED",
            subTitle: "Starts",
            description: "Enjoy leisurely mornings with Relaxed Start days, giving you extra time to sleep in or explore at your own pace. Every itinerary includes this feature, ensuring a stress free experience with flexibility to make the most of your journey.",
            classNameTitle: "",
            classNameSubTitle: "",
            classNameDescription: ""
        },
        {
            image: "assets/images/comfort/exceptional-2.png",
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
            image: "assets/images/comfort/experiences-1.png",
            title: "Oceanic Adventures",
            description: "Let the ocean set you free ",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/comfort/experiences-2.png",
            title: "MAKE TRAVEL RESPONSIBLE®Experiences",
            description: "Do good, feel good",
            button: "Find Out More",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/comfort/experiences-3.png",
            title: "Outdoor & Nature",
            description: "Adventure awaits, just step outside",
            button: "Search Offers",
            classNameTitle: "",
            classNameDescription: "",
            classNameButton: ""
        },
        {
            image: "assets/images/comfort/experiences-2.png",
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
                    { label: "Comfort" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='w-full mx-auto'>
                <Hero2
                    image="assets/images/comfort/hero.jpg"
                    title="Comfort"
                    description="Thoughtful Simplicity, Feels Like Home"
                    type={2}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="font-figtree font-semibold"
                />
            </div>

            {/* Where Serenity Feels Like Home */}
            <div className='w-full mt-12'>
                <Section3
                    title={'"Where Serenity Feels Like Home"'}
                    description1=""
                    description2={`Discover boutique comfort where modern luxury meets authentic Sri Lankan charm. These handpicked 3-star retreats offer refined experiences, personalized service, and stories waiting to unfold in each corner of the island's most captivating destinations.`}
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
                    description="Where colonial fortresses meet endless ocean horizons, Galle offers boutique comfort within ancient stone walls. These handpicked retreats blend Dutch heritage with contemporary luxury, providing intimate escapes overlooking the Indian Ocean. Each property tells stories of spice traders and maritime adventures while delivering modern amenities and personalized service."
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
                    description="Where golden beaches meet tranquil lagoons, Bentota offers the perfect blend of coastal luxury and river serenity. These boutique retreats provide intimate comfort between palm fringed shores and peaceful waterways. Each property delivers personalized service with water sports, sunset cruises, and beachfront dining, creating unforgettable tropical experiences."
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
                    description="Hidden in misty mountains around the holy Temple of the Tooth, Kandy offers boutique comfort with cultural diversity. Each property combines heritage appeal with modern luxury for unforgettable cultural experiences. Cool mountain air, panoramic valley views, and easy access to ancient temples and spice gardens define each property."
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
                    description="Gateway to paradise with golden beaches stretching to endless horizons, Negombo offers boutique comfort near the international airport. These beachfront retreats provide convenient luxury with fresh seafood, traditional fishing boats, and stunning sunsets. Each property delivers personalized service, combining coastal relaxation with authentic fishing village culture."
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
                    description="The vibrant capital where modern skyscrapers meet colonial heritage, Colombo offers boutique comfort in the heart of urban energy. These city retreats provide luxury shopping, diverse dining, and cultural attractions within walking distance. Each property combines business convenience with leisure amenities for the perfect urban Sri Lankan experience."
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
