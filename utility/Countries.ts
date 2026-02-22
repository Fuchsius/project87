import { TOUR_DATA } from '@/data/tours.data'
import { uneditedReviews } from "./UneditedReviews"

export const countries = [
    {
        id: 1,
        name: "Sri Lanka",
        slug: "sri-lanka",
        hero: {
            image: "/assets/images/sri-lanka/hero.png",
            title: "Sri Lanka Holidays",
            description: "Travel guide",
            rating: 4.5,
            type: 2,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "",
            },
        },
        description: "Sri Lanka is an off-the-beaten-path destination that will become one of your favourite vacation spots. Our \"Business Class\" Sri Lanka guided tours show you stunning art galleries, fortresses, and jungle wildlife. Your experienced travel agent guides you through Colombo and Kandy while teaching you about Sri Lankan history and culture. Enjoy a private viewing in Rahju's Contemporary Art Gallery, eat at Pettah Market, and watch the Indian Ocean sunset. Sri Lanka has many outdoor attractions. Visit the Sacred Tooth Temple, hike to the World's End, tour a tea plantation and watch for Sri Lankan leopards in Wilpattu National Park. Insight Vacations Sri Lanka offers luxury dining experiences like a Nuwara Eliya cooking demonstration and dinner, as well as the island's rich culture and landscape.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'destinations', name: "Destinations" },
            { id: 'signature-experiences', name: "Signature Experiences" },
            { id: 'stays-with-tales', name: "Stays with Tales" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your Sri Lanka journey begins here",
            description: "Your place to thoughtfully plan and book Sri Lanka holidays.",
            data: [
                {
                    id: 1,
                    image: "/assets/icons/hand-shake-1.svg",
                    title: "Must-sees to local secrets",
                },
                {
                    id: 2,
                    image: "/assets/icons/hand-sustainable-1.svg",
                    title: "One-of-a-kind experiences",
                },
                {
                    id: 3,
                    image: "/assets/icons/scope-1.svg",
                    title: "Everything taken care of",
                },
                {
                    id: 4,
                    image: "/assets/icons/hand-shake-1.svg",
                    title: "Responsible  travel",
                },
            ],
        },
        whyVisit: {
            title: "Why Visit Sri Lanka?",
            subTitle: "Hear from our passionate Travel Directors and <a href='' className='text-[#374BA2] underline underline-offset-4 decoration-[1px]'>TGL Blog</a> Authors on what makes Sri Lanka the perfect place for your next guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Leslie Pallas, Travel Director",
                    title2: "‘HUGE VARIETY’",
                    description: "“From golden beaches down the coast to misty tea farms hidden in the mountains, I truly enjoy showing visitors Sri Lanka's rich tapestry. One is delighted to find ancient cities alive and vibrant, then to marvel at lush jungles full of life.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Hema, Local Expert",
                    title2: "WHAT MAKES SRI LANKA A MUST VISIT DESTINATION?",
                    description: "“Sri Lanka is a masterwork of natural beauty, with golden beaches, emerald forests, and historic ruins. Its unique species and delectable cuisine make for an unforgettable experience.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                },

            ]
        },
        destinations: [
            {
                id: 1,
                destination: "Colombo",
                location: "Pettah, Gangarama, Galle face Green",
                image: "/assets/images/sri-lanka/colombo.png",
                description: "The commercial capital of Sri Lanka; Colombo is a bustling city with a rich history, packed with a plethora of things to do and mesmerizing attractions from city temples to skyrise buildings, verdant parks and national monuments. The city is a potpourri of cultures, religions and races making it the most diverse on the island.",
                button: {
                    buttonTitle: "Discover Colombo",
                    buttonLink: "/destinations/sri-lanka/colombo"
                }
            },
            {
                id: 2,
                destination: "Kandy",
                location: "Kandy Lake, Gadaladeniya, Bahirawakanda",
                image: "/assets/images/sri-lanka/kandy.png",
                description: "Discover some of the top things to do in Kandy as you explore the stunning charms of the city nestled between towering mountains",
                button: {
                    buttonTitle: "Discover Kandy",
                    buttonLink: ""
                }
            },
            {
                id: 3,
                destination: "Anuradhapura",
                location: "Ruwanwelisaya, Jetavanaramaya, Abhayagiri",
                image: "/assets/images/sri-lanka/anuradhapura.png",
                description: "Anuradhapura is an ancient city and former capital of Sri Lanka, known for its well-preserved ruins of an ancient Sinhala civilization.",
                button: {
                    buttonTitle: "Discover Anuradhapura",
                    buttonLink: ""
                }
            },
        ],
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Connecting you with and supporting local communities.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "BE MY GUEST",
                    description: "Dining is an experience on our tours, with great food at the heart of every journey.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Connecting you with and supporting local communities.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Connecting you with and supporting local communities.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/ways-to-travel/offers-1.png",
                title: "Sri Lanka Travel Deals",
                description: "Our guided tours to Sri Lanka offer great savings and discounts year-round",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/ways-to-travel/offers-2.png",
                title: "Money Off Your First Trip",
                description: "Sign up for our newsletter and save EUR€250 per couple on your first trip.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/ways-to-travel/offers-3.png",
                title: "Special Offers",
                description: "Experience The TravelGate Difference at cheaper rates with our current special offers",
                button: "Search Offers"
            },
        ],
        experiences: {
            title: "",
            description: "",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri-lanka/experience-1.png",
                    title: "Meet your host Sheril in at Colombo, Sri Lanka",
                    title2: "Be My Guest",
                    description: "Explore Sri Lankan food with a Colombo hands-on cooking class. Learn classic methods like fried papadum and coconut cracking, then enjoy your works presented on a banana leaf, the real way Get a recipe card to replicate the tastes right at home Experience on ",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri-lanka/experience-2.png",
                    title: "Stay at Ceylon Tea Trails, Hatton, Sri Lanka",
                    title2: "Stays with Tales",
                    description: "Embodying the spirit of hospitality and heritage, Ceylon Tea Trail's five historic tea bungalows are set in the verdant UNESCO World Heritage Central Highlands. Here, Sri Lanka's rich history is brought to life surrounded by rolling tea fields and undulating mountains. Stay here on",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "2",
                    image: "/assets/images/sri-lanka/experience-3.png",
                    title: "Meet Locals, an Ethical Village Experience",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "See Galle's amazing countryside and meet friendly people to truly enjoy rural life. Boat cruise the quiet river, then cycle over lush paddy fields to enjoy the surrounds. Take a moment to appreciate the warmth of the village with a cup of tea and some freshly baked hoppers. Experience on",
                    link: "#",
                    linkText: "Canvas Of Ceylon.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        whatToEat: {
            title: "What to Eat in Sri Lanka",
            subTitle: "",
            description: "The beloved combination of rice and curry is the cornerstone of Sri Lanka cuisine and inescapable around the island, but that doesn't mean it's your only option. Sri Lanka food has hints of Southern India mixed with spices, vegetables, and fruits from the gardens. \n\nA hopper is a staple Sri Lanka food similar to a pancake. it's often served as an egg hopper shaped into a bowl with the egg in the center. \n\nYou'll smell this Sri Lanka food before you see it the wood apple has a funky aroma described as a combination of blue cheese and raisins. Its pulp is often mixed with milk and sugar then drunk \n\nWatalappam is a treat to end your day of exploring. A sweet staple of Sri Lanka cuisine, made from a creamy coconut custard with a dash of spices.",
            image: "/assets/images/sri-lanka/what-to-eat.png",
        },
        thingsToDo: {
            title: "",
            description: "",
            data: [
                {
                    id: 1,
                    name: "Wilpattu National Park Safari",
                    description: "Hop in a Jeep and take a safari in search of leopards, elephants, and more.",
                    image: "/assets/images/sri-lanka/things-to-do-1.png"
                },
                {
                    id: 2,
                    name: "Sigiriya Fortress Visit",
                    description: "Learn about Sigiriya's ancient kingdom with a trip to this fortress on a rocky outcrop.",
                    image: "/assets/images/sri-lanka/things-to-do-2.png"
                },
                {
                    id: 3,
                    name: "Wilpattu National Park Safari",
                    description: "Hop in a Jeep and take a safari in search of leopards, elephants, and more.",
                    image: "/assets/images/sri-lanka/things-to-do-1.png"
                },
                {
                    id: 4,
                    name: "Sigiriya Fortress Visit",
                    description: "Learn about Sigiriya's ancient kingdom with a trip to this fortress on a rocky outcrop.",
                    image: "/assets/images/sri-lanka/things-to-do-2.png"
                },
            ],
        },
        convenience: [
            {
                id: 1,
                image: "/assets/icons/tour01.svg",
                title: "Access travel knowledge",
                description: "of selected local experts",
            },
            {
                id: 2,
                image: "/assets/icons/tour02.svg",
                title: "Save time & money",
                description: "let a local expert plan",
            },
            {
                id: 3,
                image: "/assets/icons/tour03.svg",
                title: "Tailor your private holiday",
                description: "to your preferences",
            },
            {
                id: 4,
                image: "/assets/icons/tour04.svg",
                title: "Book & travel securely",
                description: "money back guarantee & 24/7 support",
            },
        ],
        experiencesHotels: {
            title: "Sri Lanka experiences with Travelgate",
            description: "Travelgate takes you deep into the heart of each destination. Be My Guest allows you to interact with locals, whereas MAKE TRAVEL RESPONSIBLE® Experiences allow you to positively impact communities. Plus, on many tours, you will spend the night in Stays with Stories accommodations, which have stories just as fascinating as the locations you visit. Here are a few of the unforgettable experiences on a Travelgate Sri Lanka tour.",
            button: {
                buttonTitle: "Learn More About Experiences",
                buttonLink: ""
            },
            data: [
                {
                    type: "3",
                    image: "/assets/images/sri-lanka/experience-4.png",
                    title: "Hotel Taj Samudra",
                    title2: "Colombo, Sri Lanka",
                    description: "With a view of the azure waters of the Indian Ocean, the Taj Samudra Colombo is situated in the very centre of the city of Colombo. Guests are provided with a luxurious and comfortable retreat that is designed to be bright and airy, elegant, and stylishly designed with classic wood furnishings. Stay here on",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    type: "3",
                    image: "/assets/images/sri-lanka/experience-5.png",
                    title: "Mahaweli Reach Hotel",
                    title2: "Kandy, Sri Lanka",
                    description: "Mahaweli Reach Hotel, tucked next to the great Mahaweli River, is stacked with elegant luxury and old-world appeal of an ancient kingdom. The property provides large rooms combining luxury conveniences. with traditional Sri Lankan design. Stay here on",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    type: "3",
                    image: "/assets/images/sri-lanka/experience-6.png",
                    title: "Mahoora Safari Camp",
                    title2: "Wilpattu National Park, Sri Lanka",
                    description: "Luxury Mahoora Safari Camp borders leopard-rich Wilpattu National Park. This classic glamping experience lets you relax in your spacious living room with jungle views steps away. Mahoora Safari Camp, Sri Lanka's first carbon-neutral safari camp, offers ethical, responsible, and sustainable luxury tented holidays. Stay here on",
                    link: "#",
                    linkText: "Canvas Of Ceylon.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ],
        },
        learnMoreAbout: {
            title: "Learn More About Sri Lanka",
            subTitle: "Did You Know?",
            description: "The secluded island of Sri Lanka offers a one-of-a-kind opportunity to observe wildlife \n\nIt is common for people to overlook Sri Lanka as a potential destination for ecotourism despite the country's remarkable biodiversity. As well as on the island itself, there are hundreds of different species of mammals, reptiles, birds, amphibians, and plants that thrive. Elephants, leopards, crocodiles, pythons, junglefowl, and sloth bears are some of the majestic animals that can be seen during a safari through Wilpattu National Park. However, these particular animals can be difficult to spot at times. Some of the largest populations of blue whales and sperm whales can be found in the waters off the coast of Sri Lanka.",
            image: "/assets/images/sri-lanka/what-to-eat.png",
        },
        whatToKnowBeforeYouTravel: {
            title: "",
            data: [
                {
                    population: "22 million",
                    languages: "Sinhala, Tamil, English",
                    callingCode: "+94",
                    timeZone: "(GMT+05:30) Sri Jayawardenepura",
                    currency: "Rupee (LKR)",
                    capital: "Colombo",
                    electricity: "Type D (Old British 3-pin) Type G (British 3-pin)"
                }
            ],
        },
        inquire: {
            title: "Interested in One of Our Trips?",
            description: "Booking your 'Business Class' tour is easy. Find your perfect tour today to discover Premium Experiences, Premium Dining and Premium Service. Or request a quote to receive more information from one of our Travel Experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote",
            button1Icon: "/assets/icons/search-red.svg"
        },
        faqs: [
            {
                id: 1,
                question: 'What is a definite departure?',
                answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.\n\nWe update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.\n\nIf there are ever any changes to your departure, we will contact you.'
            },
            {
                id: 2,
                question: 'How can I book flights for my tour? What about extra hotel nights?',
                answer: 'Details about booking flights and extra hotel nights would be explained here.'
            },
            {
                id: 3,
                question: 'How much is the deposit for a Trafalgar tour?',
                answer: 'Information about the tour deposit would be provided in this section.'
            },
            {
                id: 4,
                question: 'What are the different kinds of experiences available?',
                answer: 'Each Trafalgar tour has a carefully-selected range of included experiences to help immerse yourself in a destination. But did you know that every tour also has a Be My Guest and MAKE TRAVEL MATTER® Experience?'
            },
            {
                id: 5,
                question: 'Can I join a Trafalgar tour as a solo traveller?',
                answer: 'Details for solo travellers would be explained in this section.'
            },
            {
                id: 6,
                question: 'Where can I find room options?',
                answer: 'Information about room options would be provided here.'
            }
        ],
        destinationsList: [
            {
                destinations: "Nepal",
            },
            {
                destinations: "India",
            },
            {
                destinations: "Bhutan",
            },
            {
                destinations: "Sri Lanka",
            },
            {
                destinations: "Maldives",
            }
        ],
        stayswithTales: {
            title: "",
            description: "",
            stayswithTales: [
                {
                    title: "",
                    description: "",
                }
            ]
        },
    }
]