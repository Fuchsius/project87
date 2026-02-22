import { countries } from "./Countries"
import { TOUR_DATA } from '@/data/tours.data'
import { uneditedReviews } from "./UneditedReviews"

export const Cities = [
    {
        id: 1,
        name: "Colombo",
        slug: "colombo",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Colombo/hero.avif",
            title: "The pulse of Ceylon",
            subTitle: "Colombo",
            rating: 4.9,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "People usually only talk about Colombo as a busy stop on the way to the coast and the business capital. But to us, it's a city that reveals itself in layers to those who look closely. It's a place where colonial grandeur and shiny towers live side by side, and the smell of kottu from the street mixes with the smell of high tea at heritage hotels. The call to prayer, temple bells, and church chimes all mix together to make a sound that is truly Ceylon.\n\n The welcome here is as warm as the island itself. We love watching kites fly over Galle Face Green at sunset while families gather on the promenade. Pettah's bazaars are full of bright colours and noise, but you can find peace at the Gangaramaya Temple or in the tropical modernist courtyards that Geoffrey Bawa designed. Colombo is more than just a way to get somewhere. You can break open coconuts with a local host in their kitchen or sleep in a historical place at Paradise Road Tintagel. People who are curious will really enjoy it there.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'Destinations', name: "Destinations" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Colombo?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Colombo the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘WHERE OLD MEETS NEW’",
                    description: "“Colombo's energy catches you off guard. Colonial buildings stand beside glass towers, street markets spill into boutique cafes, and every corner tells a different story.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY COLOMBO IS YOUR PERFECT STARTING POINT?",
                    description: "“This city layers centuries in a single walk. Morning Buddhist chants, afternoon spice markets, sunset by the ocean. It's Sri Lanka in miniature.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Colombo experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Colombo.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Colombo/Simply My Guest - Mohara.avif",
                    title: "Meet Mohara, form Colombo, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Mohara Dole doesn't just teach cooking. She plays with it, worships through it, expresses herself in rice and curries that differ by taste, aroma, colour, flavour. In her Colombo, Rajagiriya home, you'll join her at the stove for three unhurried hours, preparing a meal you'll actually want to recreate. Experience on",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri_lanka/Colombo/Paradise Road Tintagel .avif",
                    title: "Stay at Paradise Road Tintagel Colombo, Sri Lanka",
                    title2: "Stays with Tales",
                    description: "Ten suites in a 1930s residence that housed three prime ministers. Boutique luxury without fuss. Each suite different, high ceilings, Egyptian cotton, balconies. Art everywhere. Courtyard pool quiet. Monochrome dining. Cinnamon Gardens. Diplomats choose it. Always have. Understated, exceptional, truly intimate. Stay here on",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "2",
                    image: "/assets/images/sri_lanka/Colombo/Selyn_s flagship store.avif",
                    title: "See How Fair Trade Weaving Empowers Rural Women",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "At Selyn's flagship store and workshop, traditional handloom weaving becomes something more. Rural women receive looms for their own homes, earning livelihoods without leaving their villages. You'll learn the craft, understand the impact, see how each purchase supports artisans in Kurunegala. Experience on",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        whatToEat: {
            title: "What to Eat in Colombo",
            description: "Colombo dining happens at serious height. Revolving restaurants 350 metres above ground, rooftop venues where fusion meets panoramic views, suspended experiences making occasions genuinely memorable.\n\nHeritage hotels do seasonal menus properly. February brings Valentine culinary weeks worth booking early, December means gala dinners worth dressing for. Monsoon fish appears when it should, summer mangoes in everything worth eating. Multi course Indian tastings run nine to thirteen plates deep. Cantonese specialists serve proper Peking duck. Japanese buffets happen last week monthly. Lagoon oysters when they're right, mud crab reaching two kilos, aged steaks with live jazz nearby.\n\nSome venues seat you beneath 200 year banyan trees, rural recipes elevated far beyond origin. Others do poolside with butlers managing five courses. Colonial properties offer intimate dinners under creeper walls, high tea on silver between seasonal promotions.\n\nWood fire replaced deep frying. Ingredients sourced daily, plated carefully. Gourmet breakfast means eggs benedict with artisan coffee, dinner brings pan seared salmon or grilled options. Luxury is precision, seasonal perfection, monthly specials that matter. ",
            image: "/assets/images/sri_lanka/Colombo/What to Eat in Colombo 2.avif"
        },
        thingsToDo: {
            title: "Things to Do in Colombo",
            description: "Colombo is a city that rewards those who take the time to explore. It has a rich colonial history, modern culture, sacred temples, and lively street markets. These experiences show you the city's many sides.",
            data: [
                {
                    id: 1,
                    name: "Vintage Colombo by Classic Car",
                    description: "Sink into leather seats of a vintage car. Let your host show you Colombo's colonial corners and stories guidebooks miss.",
                    image: "/assets/images/sri_lanka/Colombo/Vintage Colombo by Classic Car 1.avif"
                },
                {
                    id: 2,
                    name: "Bawa's Colombo Legacy",
                    description: "Trace Geoffrey Bawa's architectural vision through his museum-home, Gallery Cafe, and that impossible floating temple on Beira Lake's surface.",
                    image: "/assets/images/sri_lanka/Colombo/Geoffrey Bawa Architecture Walk 1.avif"
                },
                {
                    id: 3,
                    name: "Tuk-Tuk Through Hidden Colombo",
                    description: "Take a three-wheeler through neighbourhoods. Your local guide knows which temple to visit when and where the best stalls in Pettah are.",
                    image: "/assets/images/sri_lanka/Colombo/Tuk-Tuk Through Hidden Colombo 3.avif"
                },
                {
                    id: 4,
                    name: "Sacred Colombo Walking",
                    description: "Move between Buddhist temples, Hindu kovils, Catholic shrines. Pause for street food in Pettah. End at the pomegranate mosque.",
                    image: "/assets/images/sri_lanka/Colombo/Sacred Colombo Walking.avif"
                },
                {
                    id: 5,
                    name: "Colombo After Dark Eating",
                    description: "Wait for dusk, then follow the crowds to Hulfsdorp for curries. Finish at Galle Face where street vendors face the ocean.",
                    image: "/assets/images/sri_lanka/Colombo/Pettah Market Immersion.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Colombo Stays with Tales",
            description: "Beyond standard accommodation, our stays in Colombo include boutique hotels where history and hospitality come together. Each stay is chosen for the story it helps you write, from heritage mansions with a political past to designer retreats that show off the best of Sri Lankan creativity.\n\nStays with Tales in Colombo show a world of class, history, and soul.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Colombo/Galle Face Hotel.avif",
                    title: "Galle Face Hotel",
                    title2: "Colombo, Sri Lanka",
                    description: "The sea is the first thing you see when you arrive at the Galle Face Hotel, and the sunset rituals are the last. The building is proud of its age, with wide hallways, ocean air, and stories in every room. Modern comforts sit gently inside colonial bones. Evenings bring people together and quietly remind you that this place has always seen Colombo change. Stay here on",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "3",
                    image: "/assets/images/sri_lanka/Colombo/Maniumpathy.avif",
                    title: "Maniumpathy",
                    title2: "Colombo, Sri Lanka",
                    description: "The family home has been turned into a high-end boutique hotel. Eight rooms combine colonial architecture with Jaffna culture. Quiet courtyard, plunge pool, and beautiful gardens. Master, Ultra, and Deluxe suites with antique furniture and roll-top baths. Dining that is tailored to you, from the grand room to the garden patio. Stay here on",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "3",
                    image: "/assets/images/sri_lanka/Colombo/Ishq Colombo.avif",
                    title: "Ishq Colombo",
                    title2: "Colombo 7, Sri Lanka",
                    description: "Luxury villa with four suites. A private home setting for ten guests. There are Sri Lankan antiques and Moroccan art all over the place. Ready for butler service, private chefs, and a rooftop hot tub. The garden in the middle courtyard is quiet at dawn. By design, no alcohol. Careful maintenance. A quiet neighbourhood with lots of trees. Stay here on",
                    link: "#",
                    linkText: "Canvas Of Ceylon.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        learnMoreAbout: {
            title: "Learn More About Colombo",
            subTitle: "Did You Know?",
            description: "Colombo gave the world its most valuable spice.\n\nThe Sinhalese word 'Kola-amba-thota,' which means 'harbour with leafy mango trees,' is probably where the city's name comes from. However, it was cinnamon that made this port famous. For hundreds of years, Sri Lankan cinnamon was so valuable that the Portuguese, Dutch, and British fought over who would control these shores. Sri Lanka still makes 90% of the world's true cinnamon (Ceylon cinnamon), and a lot of it still goes through Colombo's old port. The spice that used to support empires now gives your morning coffee and evening desserts a nice taste.",
            image: "/assets/images/sri_lanka/Colombo/Learn More About Colombo.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of our travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Colombo?',
                answer: 'A three wheeled tuk-tuk dash is a fun and crazy way to get around for short trips, but your trip with us will be easy. With a Travelgate personalised tour, you get to ride in a private luxury vehicle with your own chauffeur guide and enjoy the peace and quiet. You don\'t have to haggle over prices or look at maps; just sit back and let the city unfold while we drive.'
            },
            {
                id: 2,
                question: 'Is Colombo safe for tourists?',
                answer: 'Colombo is generally safe for visitors. Like in any big city, you should always be aware of your surroundings, especially in busy places like Pettah Market. The main tourist spots, like Fort, Galle Face, and Cinnamon Gardens, are safe and friendly. Your Travelgate guide will make sure you feel safe while you explore by sharing local knowledge that will help you get around the city easily.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Colombo?',
                answer: 'Most tourists don\'t stay in Colombo long enough. We suggest spending at least two days in the city to get a feel for it. This gives you time to take a Geoffrey Bawa architecture walk, explore in the markets in Pettah, eat street food at Galle Face Green, and experience the dining scene. Colombo is a great place to start or end a longer trip to Sri Lanka because it lets you relax.'
            },
            {
                id: 4,
                question: 'What should I wear when visiting temples in Colombo?',
                answer: 'You must dress modestly when you go to religious sites. Before going into temples, you must take off your shoes and cover your knees and shoulders. A light scarf is useful for quick cover ups. You might also be asked to take off your hat at Gangaramaya Temple and other Buddhist sites. Your Travelgate guide will tell you what to wear for each visit.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Colombo?',
                answer: 'You can go to Colombo any time of year, but the driest months are December through April. From May to October the southwest monsoon brings afternoon showers, but they don\'t usually get in the way of a full day of sightseeing. Activities in the morning and dinner in the evening are always nice. The city\'s indoor attractions, boutique hotels, and covered markets make it fun no matter what the weather is like.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            }
        ]
    },
    {
        id: 2,
        name: "Anuradhapura",
        slug: "anuradhapura",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Anuradhapura/HERO SECTION - Anuradhapura.avif",
            title: "Ancient Capital of Sri Lanka",
            subTitle: "Anuradhapura",
            rating: 4.8,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Anuradhapura is the first capital of Sri Lanka, a UNESCO World Heritage Site with ancient stupas, temples, and reservoirs. It's a place of historical significance and spiritual importance.\n\nExplore the sacred city, see the Sri Maha Bodhi tree, and experience the ancient ruins that date back over 2,000 years. The city offers a glimpse into Sri Lanka's rich Buddhist heritage.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Anuradhapura?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Anuradhapura the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘WHERE HISTORY COMES ALIVE’",
                    description: "“Anuradhapura's ancient ruins are a testament to Sri Lanka's glorious past. Walking among the stupas and reservoirs, you feel the weight of history and the serenity of the sacred sites.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY ANURADHAPURA IS YOUR PERFECT STARTING POINT?",
                    description: "“This ancient capital is where Sri Lanka's story begins. From the Bodhi tree to the massive stupas, every stone tells a tale of kings, monks, and miracles.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Anuradhapura experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Anuradhapura.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Anuradhapura/Simply My Guest - Anuradhapura Aruni.avif",
                    title: "Meet Aruni, from Anuradhapura, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Aruni shares the traditional cuisine of Anuradhapura, cooking local dishes in her home.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri_lanka/Anuradhapura/Restoring Frescoes with Monks.avif",
                    title: "Restoring Frescoes with Monks",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Join monks in restoring ancient frescoes, contributing to the preservation of cultural heritage.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        whatToEat: {
            title: "What to Eat in Anuradhapura",
            description: "Anuradhapura's cuisine is simple and traditional, centered around rice and curry. Try kiribath, a milk rice dish, and local fruits. The food reflects the monastic influence with vegetarian options.",
            image: "/assets/images/sri_lanka/Anuradhapura/What to Eat in Anuradhapura.avif"
        },
        thingsToDo: {
            title: "Things to Do in Anuradhapura",
            description: "Anuradhapura is all about history and spirituality. Explore the ancient city, visit the Bodhi tree, and see the architectural marvels.",
            data: [
                {
                    id: 1,
                    name: "Cycling the Sacred City",
                    description: "Rent a bike and cycle around the ancient city to explore the sites at your own pace.",
                    image: "/assets/images/sri_lanka/Anuradhapura/Cycling the Sacred City.avif"
                },
                {
                    id: 2,
                    name: "Dawn at Sri Maha Bodhi",
                    description: "Witness the sunrise at the sacred Bodhi tree, a place of pilgrimage.",
                    image: "/assets/images/sri_lanka/Anuradhapura/Dawn at Sri Maha Bodhi.avif"
                },
                {
                    id: 3,
                    name: "Stay at Forest Rock Garden Resort",
                    description: "Relax at a resort that blends nature with comfort.",
                    image: "/assets/images/sri_lanka/Anuradhapura/Forest Rock Garden Resort.avif"
                },
                {
                    id: 4,
                    name: "Restoring Frescoes with Monks",
                    description: "Participate in a responsible experience restoring ancient art.",
                    image: "/assets/images/sri_lanka/Anuradhapura/Restoring Frescoes with Monks.avif"
                },
                {
                    id: 5,
                    name: "Lovers Carved in Stone",
                    description: "See the ancient stone carvings depicting lovers.",
                    image: "/assets/images/sri_lanka/Anuradhapura/Lovers Carved in Stone.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Anuradhapura Stays with Tales",
            description: "Beyond standard accommodation, our stays in Anuradhapura include boutique hotels where history and hospitality come together.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Anuradhapura/Maho Boutique Hotel.avif",
                    title: "Maho Boutique Hotel",
                    title2: "Anuradhapura, Sri Lanka",
                    description: "A boutique hotel offering modern amenities in the heart of the ancient city.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "3",
                    image: "/assets/images/sri_lanka/Anuradhapura/The Sanctuary at Tissawewa.avif",
                    title: "The Sanctuary at Tissawewa",
                    title2: "Anuradhapura, Sri Lanka",
                    description: "A sanctuary hotel located near the Tissawewa tank, offering peace and nature.",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "3",
                    image: "/assets/images/sri_lanka/Anuradhapura/Stay at Uga Ulagalla.avif",
                    title: "Uga Ulagalla",
                    title2: "Anuradhapura, Sri Lanka",
                    description: "A unique stay with a story, blending history and luxury.",
                    link: "#",
                    linkText: "Canvas Of Ceylon.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        learnMoreAbout: {
            title: "Learn More About Anuradhapura",
            subTitle: "Did You Know?",
            description: "Anuradhapura was the capital of Sri Lanka for over 1,000 years, from the 4th century BC to the 11th century AD. It is home to some of the oldest Buddhist monuments in the world, including the Sri Maha Bodhi, the oldest living tree in the world with a recorded history.",
            image: "/assets/images/sri_lanka/Anuradhapura/Learn More About Anuradhapura.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of our travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Anuradhapura?',
                answer: 'The best way to explore Anuradhapura is by bicycle or tuk-tuk. Rent a bike at your hotel to cycle around the ancient city and visit the sites at your own pace. Tuk-tuks are also available for hire if you prefer not to cycle.'
            },
            {
                id: 2,
                question: 'Is Anuradhapura safe for tourists?',
                answer: 'Anuradhapura is generally safe for tourists. The area is peaceful and the locals are friendly. However, as with any place, it\'s advisable to stay aware of your surroundings and follow local guidelines.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Anuradhapura?',
                answer: 'We recommend spending at least one full day in Anuradhapura to explore the main sites. If you\'re interested in history and spirituality, you might want to stay longer to visit the less crowded areas and participate in cultural activities.'
            },
            {
                id: 4,
                question: 'What should I wear when visiting temples in Anuradhapura?',
                answer: 'Dress modestly when visiting temples. Cover your shoulders and knees. Some sites require you to remove shoes, so comfortable footwear is recommended.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Anuradhapura?',
                answer: 'The best time to visit Anuradhapura is during the dry season from May to September. The weather is pleasant, and the sites are less crowded. Avoid the rainy season from October to January.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            },
            {
                id: 5,
                destinations: "Polonnaruwa",
            },
            {
                id: 6,
                destinations: "Sigiriya",
            }
        ]
    },
    {
        id: 3,
        name: "Arugam Bay",
        slug: "arugam-bay",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Arugam Bay/HERO SECTION - ARUGAMBAY.avif",
            title: "Surf Paradise in Sri Lanka",
            subTitle: "Arugam Bay",
            rating: 4.7,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Arugam Bay is Sri Lanka's premier surfing destination, known for its long beaches, consistent waves, and laid-back vibe. It's a place for adventure seekers and those looking to relax in a tropical paradise.\n\nEnjoy world-class surfing, explore mangrove forests, and witness wildlife like elephants and crocodiles. The bay offers a mix of excitement and tranquility.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Arugam Bay?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Arugam Bay the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘WHERE WAVES MEET WONDER’",
                    description: "“Arugam Bay's waves are legendary, drawing surfers from everywhere. Beyond the surf, the mangroves and wildlife create an adventure that's both thrilling and serene.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY ARUGAM BAY IS YOUR PERFECT STARTING POINT?",
                    description: "“This east coast gem offers surfing, sunsets, and stories. From ancient temples to elephant herds, Arugam Bay is Sri Lanka's hidden adventure hub.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Arugam Bay experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Arugam Bay.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Arugam Bay/Simply My Guest - Arugam Bay.avif",
                    title: "Meet a local surfer in Arugam Bay, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Join a local surfer for a home-cooked meal and stories of the waves.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri_lanka/Arugam Bay/The Spice Trail.avif",
                    title: "Explore The Spice Trail",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Learn about sustainable spice farming and its impact on local communities.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "2",
                    image: "/assets/images/sri_lanka/Arugam Bay/Mangroves for Tomorrow.avif",
                    title: "Mangroves for Tomorrow",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Participate in mangrove restoration efforts to protect the coast.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        whatToEat: {
            title: "What to Eat in Arugam Bay",
            description: "Arugam Bay's cuisine reflects the coastal influences with fresh seafood and spices. Try grilled fish, curries, and tropical fruits. The food is simple, fresh, and flavorful.",
            image: "/assets/images/sri_lanka/Arugam Bay/What to Eat in Arugam Bay.avif"
        },
        thingsToDo: {
            title: "Things to Do in Arugam Bay",
            description: "Arugam Bay is all about surfing and nature. Ride the waves, explore mangroves, and spot wildlife.",
            data: [
                {
                    id: 1,
                    name: "Surf at Main Point",
                    description: "Catch the first sets before sunrise for an epic surf session.",
                    image: "/assets/images/sri_lanka/Arugam Bay/Catch the first sets at Main Point before sunrise.avif"
                },
                {
                    id: 2,
                    name: "Paddle Mangrove Channels",
                    description: "Kayak through the beautiful mangrove channels of Pottuvil Lagoon.",
                    image: "/assets/images/sri_lanka/Arugam Bay/Paddle through Pottuvil Lagoon’s mangrove channels.avif"
                },
                {
                    id: 3,
                    name: "Visit Temple Ruins",
                    description: "Explore the ancient temple ruins rising from Pottuvil Point.",
                    image: "/assets/images/sri_lanka/Arugam Bay/Visit the temple ruins rising from Pottuvil Point.avif"
                },
                {
                    id: 4,
                    name: "Watch Elephants at Crocodile Rock",
                    description: "Observe wild elephants drinking at the famous Crocodile Rock.",
                    image: "/assets/images/sri_lanka/Arugam Bay/Watch wild elephants drink at Crocodile Rock.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Arugam Bay Stays with Tales",
            description: "Beyond standard accommodation, our stays in Arugam Bay include boutique villas and hotels that blend beach life with luxury.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Arugam Bay/Aprota Villas.avif",
                    title: "Aprota Villas",
                    title2: "Arugam Bay, Sri Lanka",
                    description: "Beachfront villas offering privacy and stunning views.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "3",
                    image: "/assets/images/sri_lanka/Arugam Bay/Niketh Villa Komari.avif",
                    title: "Niketh Villa Komari",
                    title2: "Arugam Bay, Sri Lanka",
                    description: "A charming villa with garden views and local hospitality.",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "3",
                    image: "/assets/images/sri_lanka/Arugam Bay/Odyssey Boutique Hotel.avif",
                    title: "Odyssey Boutique Hotel",
                    title2: "Arugam Bay, Sri Lanka",
                    description: "A boutique hotel with a story of adventure and relaxation.",
                    link: "#",
                    linkText: "Canvas Of Ceylon.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        learnMoreAbout: {
            title: "Learn More About Arugam Bay",
            subTitle: "Did You Know?",
            description: "Arugam Bay is known as Sri Lanka's surfing capital, with waves that attract international surfers. It's also home to diverse wildlife and ancient sites.",
            image: "/assets/images/sri_lanka/Arugam Bay/Learn More About Arugam Bay.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of our travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Arugam Bay?',
                answer: 'Rent a scooter or tuk-tuk to explore the area. The roads are good, and it\'s easy to get around independently.'
            },
            {
                id: 2,
                question: 'Is Arugam Bay safe for tourists?',
                answer: 'Arugam Bay is generally safe. Stick to well-lit areas at night and be cautious with valuables on the beach.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Arugam Bay?',
                answer: 'Spend 3-5 days to enjoy surfing, relaxing, and exploring nearby attractions.'
            },
            {
                id: 4,
                question: 'What should I wear when visiting Arugam Bay?',
                answer: 'Casual beachwear is fine, but cover up when visiting temples or local areas.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Arugam Bay?',
                answer: 'April to September is the best time for surfing with consistent waves and dry weather.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            },
            {
                id: 5,
                destinations: "Polonnaruwa",
            },
            {
                id: 6,
                destinations: "Sigiriya",
            }
        ]
    },
    {
        id: 4,
        name: "Batticaloa",
        slug: "batticaloa",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/batticaloa /HERO SECTION - Batticaloa.avif",
            title: "Lagoons and Beaches of the East",
            subTitle: "Batticaloa",
            rating: 4.6,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Batticaloa, known as the 'City of Lagoons', is a coastal city with beautiful beaches, lagoons, and a rich cultural heritage. It's a place for relaxation, water sports, and exploring the east coast of Sri Lanka.\n\nEnjoy the serene lagoons, visit ancient temples, and experience the local Tamil culture. The city offers a peaceful retreat with opportunities for adventure.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Batticaloa?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Batticaloa the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘SERENE EAST COAST GEM’",
                    description: "“Batticaloa's lagoons are mesmerizing, with a calm that soothes the soul. The beaches are pristine, and the local culture is warm and inviting.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY BATTICALOA IS YOUR PERFECT STARTING POINT?",
                    description: "“This east coast paradise offers lagoons for kayaking, beaches for sunbathing, and a culture that's rich and welcoming. It's Sri Lanka's hidden east.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Batticaloa experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Batticaloa.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/batticaloa /Simply My Guest - Batticaloa 1.1.avif",
                    title: "Meet a local fisherman in Batticaloa, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Join a local fisherman for a traditional meal by the lagoon.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri_lanka/batticaloa /Weavers, Prayers, and Palamunai_s Colours 1.1.avif",
                    title: "Explore Weavers and Prayers",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Learn about traditional weaving and its cultural significance.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        whatToEat: {
            title: "What to Eat in Batticaloa",
            description: "Batticaloa's cuisine features fresh seafood, rice dishes, and Tamil influences. Try appam, pittu, and local curries. The food is flavorful and reflects the coastal location.",
            image: "/assets/images/sri_lanka/batticaloa /What to Eat in Batticaloa.avif"
        },
        thingsToDo: {
            title: "Things to Do in Batticaloa",
            description: "Batticaloa is about lagoons, beaches, and culture. Explore the water, visit historical sites, and enjoy the local scene.",
            data: [
                {
                    id: 1,
                    name: "Cross to Buffalo Island",
                    description: "Take a fishing boat to Buffalo Island for a unique experience.",
                    image: "/assets/images/sri_lanka/batticaloa /Cross to Buffalo Island by Fishing Boat.avif"
                },
                {
                    id: 2,
                    name: "Listen to the Lagoon",
                    description: "Enjoy the full moon by the lagoon.",
                    image: "/assets/images/sri_lanka/batticaloa /Listen to the Lagoon Sing at Full Moon.avif"
                },
                {
                    id: 3,
                    name: "Walk Kallady Bridge",
                    description: "Walk the bridge at golden hour for beautiful views.",
                    image: "/assets/images/sri_lanka/batticaloa /Walk Kallady Bridge at Golden Hour.avif"
                },
                {
                    id: 4,
                    name: "Watch Dawn from Dutch Ramparts",
                    description: "See the sunrise from the Dutch ramparts.",
                    image: "/assets/images/sri_lanka/batticaloa /Watch Dawn Break from Dutch Ramparts.avif"
                },
                {
                    id: 5,
                    name: "Explore Weavers and Prayers",
                    description: "Visit local weavers and prayer sites.",
                    image: "/assets/images/sri_lanka/batticaloa /Weavers, Prayers, and Palamunai_s Colours 1.1.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Batticaloa Stays with Tales",
            description: "Beyond standard accommodation, our stays in Batticaloa include beach resorts and spas that offer luxury by the lagoon.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/batticaloa /Amaya Beach.avif",
                    title: "Amaya Beach",
                    title2: "Batticaloa, Sri Lanka",
                    description: "A beach resort with modern amenities and ocean views.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "3",
                    image: "/assets/images/sri_lanka/batticaloa /Anantaya Resort & Spa.avif",
                    title: "Anantaya Resort & Spa",
                    title2: "Batticaloa, Sri Lanka",
                    description: "A luxury resort and spa with lagoon access.",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "3",
                    image: "/assets/images/sri_lanka/batticaloa /Laya Waves.avif",
                    title: "Laya Waves",
                    title2: "Batticaloa, Sri Lanka",
                    description: "A resort with waves and relaxation.",
                    link: "#",
                    linkText: "Canvas Of Ceylon.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        learnMoreAbout: {
            title: "Learn More About Batticaloa",
            subTitle: "Did You Know?",
            description: "Batticaloa has the largest lagoon in Sri Lanka and is known for its Dutch fort and colonial architecture.",
            image: "/assets/images/sri_lanka/batticaloa /Learn More About Batticaloa.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Batticaloa?',
                answer: 'Rent a bicycle or tuk-tuk to explore the lagoons and beaches. Boat rides are also popular for the islands.'
            },
            {
                id: 2,
                question: 'Is Batticaloa safe for tourists?',
                answer: 'Batticaloa is safe for tourists. It\'s a peaceful area with friendly locals.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Batticaloa?',
                answer: 'Spend 2-3 days to enjoy the beaches, lagoons, and cultural sites.'
            },
            {
                id: 4,
                question: 'What should I wear when visiting Batticaloa?',
                answer: 'Casual clothes for the beach, but modest attire for temples.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Batticaloa?',
                answer: 'April to September is the dry season, ideal for outdoor activities.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            },
            {
                id: 5,
                destinations: "Polonnaruwa",
            },
            {
                id: 6,
                destinations: "Sigiriya",
            }
        ]
    },
    {
        id: 5,
        name: "Dambulla",
        slug: "dambulla",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Dambulla/HERO SECTION - Dambulla.avif",
            title: "Cave Temples and Ancient Wonders",
            subTitle: "Dambulla",
            rating: 4.8,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Dambulla is famous for its UNESCO-listed cave temples, filled with ancient Buddhist murals and statues. It's a gateway to Sigiriya and offers a mix of history, nature, and spirituality.\n\nExplore the golden rock fortress nearby, cycle through hamlets, and experience traditional crafts. Dambulla provides a serene escape with rich cultural experiences.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Dambulla?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Dambulla the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘GATEWAY TO ANCIENT WONDERS’",
                    description: "“Dambulla's cave temples are a masterpiece of ancient art. The surrounding landscapes offer tranquility and adventure in equal measure.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY DAMBULLA IS YOUR PERFECT STARTING POINT?",
                    description: "“From the cave temples to Sigiriya's rock, Dambulla is where Sri Lanka's history comes alive. Experience the crafts and the calm of the countryside.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Dambulla experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Dambulla.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Dambulla/Simply My Guest - Dambulla.avif",
                    title: "Meet a local craftsman in Dambulla, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Join a local craftsman for a traditional meal and stories of the cave temples.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri_lanka/Dambulla/Learn Wood Carving from Kandyan Masters.avif",
                    title: "Learn Wood Carving from Kandyan Masters",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Learn traditional wood carving and support local artisans.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "2",
                    image: "/assets/images/sri_lanka/Dambulla/Shape Clay with Dambulla_s Potter Families.jpg",
                    title: "Shape Clay with Dambulla's Potter Families",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Participate in pottery making with local families.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        whatToEat: {
            title: "What to Eat in Dambulla",
            description: "Dambulla's cuisine includes rice and curry, fresh fruits, and traditional Sri Lankan dishes. Try local specialties like buffalo curd and seasonal vegetables.",
            image: "/assets/images/sri_lanka/Dambulla/What to Eat in Dambulla.avif"
        },
        thingsToDo: {
            title: "Things to Do in Dambulla",
            description: "Dambulla is about ancient temples, nature, and crafts. Visit the caves, cycle through villages, and learn traditional skills.",
            data: [
                {
                    id: 1,
                    name: "Float Over Dambulla",
                    description: "Take a hot air balloon ride at first light for stunning views.",
                    image: "/assets/images/sri_lanka/Dambulla/Float Over Dambulla at First Light.avif"
                },
                {
                    id: 2,
                    name: "Witness the Cave Temple",
                    description: "Visit the cave temple before the crowds arrive.",
                    image: "/assets/images/sri_lanka/Dambulla/Witness the Cave Temple Before Crowds Arrive.avif"
                },
                {
                    id: 3,
                    name: "Cycle Through Hamlets",
                    description: "Cycle through peaceful hamlets where time moves slower.",
                    image: "/assets/images/sri_lanka/Dambulla/Cycle Through Hamlets Where Time Moves Slower 2.avif"
                },
                {
                    id: 4,
                    name: "Learn Wood Carving",
                    description: "Learn wood carving from Kandyan masters.",
                    image: "/assets/images/sri_lanka/Dambulla/Learn Wood Carving from Kandyan Masters.avif"
                },
                {
                    id: 5,
                    name: "Shape Clay with Potters",
                    description: "Shape clay with local potter families.",
                    image: "/assets/images/sri_lanka/Dambulla/Shape Clay with Dambulla_s Potter Families.jpg"
                },
            ]
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
        experiences: {
            title: "A few of your Dambulla Stays with Tales",
            description: "Beyond standard accommodation, our stays in Dambulla include resorts and hideaways that blend history with luxury.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Dambulla/Amaya Lake Dambulla.avif",
                    title: "Amaya Lake Dambulla",
                    title2: "Dambulla, Sri Lanka",
                    description: "A lake resort with modern amenities and scenic views.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "3",
                    image: "/assets/images/sri_lanka/Dambulla/Diyabubula, the Barberyn Art & Jungle Hideaway.avif",
                    title: "Diyabubula, the Barberyn Art & Jungle Hideaway",
                    title2: "Dambulla, Sri Lanka",
                    description: "An art and jungle hideaway with unique accommodations.",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "3",
                    image: "/assets/images/sri_lanka/Dambulla/Kalundewa Retreat.avif",
                    title: "Kalundewa Retreat",
                    title2: "Dambulla, Sri Lanka",
                    description: "A retreat offering peace and nature.",
                    link: "#",
                    linkText: "Canvas Of Ceylon.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        learnMoreAbout: {
            title: "Learn More About Dambulla",
            subTitle: "Did You Know?",
            description: "Dambulla Cave Temple is one of the largest and best-preserved cave temple complexes in Sri Lanka, with over 80 documented caves.",
            image: "/assets/images/sri_lanka/Dambulla/Learn More About Dambulla.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Dambulla?',
                answer: 'Rent a tuk-tuk or bicycle to explore the area. It\'s easy to get around independently.'
            },
            {
                id: 2,
                question: 'Is Dambulla safe for tourists?',
                answer: 'Dambulla is safe for tourists. It\'s a popular area with good infrastructure.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Dambulla?',
                answer: 'Spend 1-2 days to visit the cave temples and nearby Sigiriya.'
            },
            {
                id: 4,
                question: 'What should I wear when visiting the cave temples?',
                answer: 'Dress modestly, covering shoulders and knees, and remove shoes inside the caves.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Dambulla?',
                answer: 'April to September is the dry season, best for outdoor activities.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            },
            {
                id: 5,
                destinations: "Polonnaruwa",
            },
            {
                id: 6,
                destinations: "Sigiriya",
            }
        ]
    },
    {
        id: 6,
        name: "Ella",
        slug: "ella",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Ella/HERO SECTION - ELLA.avif",
            title: "Hill Country Paradise",
            subTitle: "Ella",
            rating: 4.9,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Ella is a charming hill station in Sri Lanka's central highlands, known for its breathtaking views, waterfalls, and tea plantations. It's a haven for hikers, nature lovers, and those seeking tranquility.\n\nExplore the Nine Arches Bridge, hike to Little Adam's Peak, and enjoy the cool climate. Ella offers a perfect blend of adventure and relaxation.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Ella?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Ella the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘SERENE HILL STATION CHARM’",
                    description: "“Ella's misty hills and waterfalls create a magical escape. The hikes are rewarding, and the local culture is warm and inviting.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY ELLA IS YOUR PERFECT STARTING POINT?",
                    description: "“From the Nine Arches to tea estates, Ella is where Sri Lanka's beauty unfolds. Hike, relax, and immerse in the highlands.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Ella experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Ella.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Ella/Simply My Guest - Ella 1.avif",
                    title: "Meet a local farmer in Ella, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Join a local farmer for a traditional meal and stories of the hills.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri_lanka/Ella/Private Tea Estate Walk with Master Taster.avif",
                    title: "Private Tea Estate Walk with Master Taster",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Walk through a tea estate and learn about tea tasting from experts.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "2",
                    image: "/assets/images/sri_lanka/Ella/Amba_s Living Farm Experience.avif",
                    title: "Amba's Living Farm Experience",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Experience farm life and sustainable agriculture.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        whatToEat: {
            title: "What to Eat in Ella",
            description: "Ella's cuisine features fresh produce from the hills, including tea, fruits, and local dishes. Try vegetable curries, hoppers, and fresh juices.",
            image: "/assets/images/sri_lanka/Ella/What to Eat in Ella.avif"
        },
        thingsToDo: {
            title: "Things to Do in Ella",
            description: "Ella is about hiking, views, and nature. Climb peaks, watch trains, and explore waterfalls.",
            data: [
                {
                    id: 1,
                    name: "Climb Little Adam's Peak",
                    description: "Hike to Little Adam's Peak for panoramic views.",
                    image: "/assets/images/sri_lanka/Ella/Climb to Little Adam_s in the dark.avif"
                },
                {
                    id: 2,
                    name: "Swim at Ravana Falls",
                    description: "Swim in the waterfall where legends say Ravana hid his princess.",
                    image: "/assets/images/sri_lanka/Ella/Swim where Ravana hid his princess.avif"
                },
                {
                    id: 3,
                    name: "Watch Trains at Nine Arches",
                    description: "See trains threading through the famous Nine Arches Bridge.",
                    image: "/assets/images/sri_lanka/Ella/Watch trains thread through Nine Arches.avif"
                },
                {
                    id: 4,
                    name: "Tea Estate Walk",
                    description: "Walk through private tea estates with a master taster.",
                    image: "/assets/images/sri_lanka/Ella/Private Tea Estate Walk with Master Taster.avif"
                },
                {
                    id: 5,
                    name: "Farm Experience",
                    description: "Experience living on a farm.",
                    image: "/assets/images/sri_lanka/Ella/Amba_s Living Farm Experience.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Ella Stays with Tales",
            description: "Beyond standard accommodation, our stays in Ella include resorts and spas that offer luxury in the hills.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Ella/98 Acres Resort & Spa.avif",
                    title: "98 Acres Resort & Spa",
                    title2: "Ella, Sri Lanka",
                    description: "A luxury resort with spa facilities and hill views.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "3",
                    image: "/assets/images/sri_lanka/Ella/Anasa Wellness Resort.avif",
                    title: "Anasa Wellness Resort",
                    title2: "Ella, Sri Lanka",
                    description: "A wellness resort focused on health and relaxation.",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "3",
                    image: "/assets/images/sri_lanka/Ella/EKHO Ella.avif",
                    title: "EKHO Ella",
                    title2: "Ella, Sri Lanka",
                    description: "A boutique hotel with modern design.",
                    link: "#",
                    linkText: "Canvas Of Ceylon.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        learnMoreAbout: {
            title: "Learn More About Ella",
            subTitle: "Did You Know?",
            description: "Ella is famous for the Nine Arches Bridge, a colonial-era railway bridge that has become an iconic symbol of Sri Lanka.",
            image: "/assets/images/sri_lanka/Ella/Learn More About Ella (1).avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Ella?',
                answer: 'Rent a tuk-tuk or walk, as the area is small and scenic.'
            },
            {
                id: 2,
                question: 'Is Ella safe for tourists?',
                answer: 'Ella is safe and popular with tourists. The locals are friendly.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Ella?',
                answer: 'Spend 2-3 days to enjoy hiking and relaxation.'
            },
            {
                id: 4,
                question: 'What should I wear when hiking in Ella?',
                answer: 'Comfortable hiking shoes, light clothing, and rain gear if needed.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Ella?',
                answer: 'April to September is the dry season, ideal for outdoor activities.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            },
            {
                id: 5,
                destinations: "Polonnaruwa",
            },
            {
                id: 6,
                destinations: "Sigiriya",
            }
        ]
    },
    {
        id: 7,
        name: "Galle",
        slug: "galle",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Galle/GALLE  - Hero TGT.avif",
            title: "Fortress City by the Sea",
            subTitle: "Galle",
            rating: 4.8,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Galle is a historic coastal city known for its UNESCO-listed fort, beautiful beaches, and colonial architecture. It's a blend of history, culture, and relaxation.\n\nExplore the fort, enjoy the beaches, and experience the local culture. Galle offers a charming escape with opportunities for adventure and leisure.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Galle?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Galle the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘COLONIAL CHARM BY THE SEA’",
                    description: "“Galle's fort and beaches offer a perfect mix of history and relaxation. The Dutch architecture and Indian Ocean views are unforgettable.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY GALLE IS YOUR PERFECT STARTING POINT?",
                    description: "“From the fort walls to the palm-fringed beaches, Galle is where Sri Lanka's coastal beauty shines. Explore, relax, and dive into the culture.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Galle experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Galle.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Galle/Simply My Guest - Galle.avif",
                    title: "Meet a local in Galle, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Join a local for a traditional meal and stories of the fort.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri_lanka/Galle/Weaving Cotton by Hand.avif",
                    title: "Weaving Cotton by Hand",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Learn traditional cotton weaving and support local artisans.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "2",
                    image: "/assets/images/sri_lanka/Galle/Paddies and Plantations.avif",
                    title: "Explore Paddies and Plantations",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Visit rice paddies and plantations to learn about sustainable farming.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        whatToEat: {
            title: "What to Eat in Galle",
            description: "Galle's cuisine includes seafood, curries, and fresh produce. Try fish dishes, hoppers, and tropical fruits.",
            image: "/assets/images/sri_lanka/Galle/What to Eat in Galle.avif"
        },
        thingsToDo: {
            title: "Things to Do in Galle",
            description: "Galle is about history, beaches, and culture. Explore the fort, relax on beaches, and enjoy local experiences.",
            data: [
                {
                    id: 1,
                    name: "Explore Galle Fort",
                    description: "Walk through the historic fort and its Dutch architecture.",
                    image: "/assets/images/sri_lanka/Galle/Fort with a Local.avif"
                },
                {
                    id: 2,
                    name: "Visit Fort Bazaar",
                    description: "Shop at the local bazaar inside the fort.",
                    image: "/assets/images/sri_lanka/Galle/Fort Bazaar.avif"
                },
                {
                    id: 3,
                    name: "Relax at KK Beach",
                    description: "Enjoy the beach and water activities.",
                    image: "/assets/images/sri_lanka/Galle/KK-Beach.avif"
                },
                {
                    id: 4,
                    name: "Hike Kahanda Kanda",
                    description: "Hike to the viewpoint for stunning views.",
                    image: "/assets/images/sri_lanka/Galle/Kahanda Kanda.avif"
                },
                {
                    id: 5,
                    name: "Canopy Walk",
                    description: "Walk through the forest canopy.",
                    image: "/assets/images/sri_lanka/Galle/Kanneliya_s Canopy Walk.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Galle Stays with Tales",
            description: "Beyond standard accommodation, our stays in Galle include historic hotels and resorts that offer luxury by the sea.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Galle/Amangalla.avif",
                    title: "Amangalla",
                    title2: "Galle, Sri Lanka",
                    description: "A historic hotel with colonial charm.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "3",
                    image: "/assets/images/sri_lanka/Galle/Pedal, Paddle, Explore.avif",
                    title: "Pedal, Paddle, Explore",
                    title2: "Galle, Sri Lanka",
                    description: "An adventure resort for water and land activities.",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        learnMoreAbout: {
            title: "Learn More About Galle",
            subTitle: "Did You Know?",
            description: "Galle Fort is a UNESCO World Heritage Site, built by the Dutch in the 17th century, and is one of the best-preserved fortifications in South Asia.",
            image: "/assets/images/sri_lanka/Galle/Learn More About Galle.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Galle?',
                answer: 'Rent a bicycle or tuk-tuk to explore the fort and beaches.'
            },
            {
                id: 2,
                question: 'Is Galle safe for tourists?',
                answer: 'Galle is safe and welcoming to tourists.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Galle?',
                answer: 'Spend 1-2 days to explore the fort and relax.'
            },
            {
                id: 4,
                question: 'What should I wear when visiting the fort?',
                answer: 'Casual clothes, but cover up when visiting temples.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Galle?',
                answer: 'December to April is the dry season, ideal for beach activities.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            },
            {
                id: 5,
                destinations: "Polonnaruwa",
            },
            {
                id: 6,
                destinations: "Sigiriya",
            }
        ]
    },
    {
        id: 8,
        name: "Jaffna",
        slug: "jaffna",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/jaffna/HERO SECTION - Jaffna.avif",
            title: "Northern Cultural Hub",
            subTitle: "Jaffna",
            rating: 4.7,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Jaffna is the cultural capital of Sri Lanka's north, known for its Tamil heritage, ancient temples, and colonial history. It's a place for exploring traditions, beaches, and resilience.\n\nVisit the Nallur Temple, explore the Dutch fort, and experience the local cuisine. Jaffna offers a unique blend of history and modernity.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Jaffna?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Jaffna the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘NORTHERN RICHES’",
                    description: "“Jaffna's temples and fort tell stories of a vibrant culture. The beaches and lagoons add a serene touch to the historical depth.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY JAFFNA IS YOUR PERFECT STARTING POINT?",
                    description: "“This northern gem is where Sri Lanka's Tamil roots shine. From ancient temples to colonial forts, Jaffna is a journey into heritage and harmony.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Jaffna experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Jaffna.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/jaffna/Simply My Guest Jaffna.avif",
                    title: "Meet a local in Jaffna, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Join a local for a traditional meal and stories of the north.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri_lanka/jaffna/Palmyrah weavers keeping traditions alive.avif",
                    title: "Palmyrah Weavers Keeping Traditions Alive",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Learn about traditional palmyrah weaving and support local artisans.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        whatToEat: {
            title: "What to Eat in Jaffna",
            description: "Jaffna's cuisine features Tamil dishes with spices, seafood, and local ingredients. Try kottu, fish curry, and sweets.",
            image: "/assets/images/sri_lanka/jaffna/What to Eat in Jaffna.avif"
        },
        thingsToDo: {
            title: "Things to Do in Jaffna",
            description: "Jaffna is about culture, history, and nature. Visit temples, explore the fort, and enjoy the beaches.",
            data: [
                {
                    id: 1,
                    name: "Visit Nallur Temple",
                    description: "See the grand Nallur Kovil at first light.",
                    image: "/assets/images/sri_lanka/jaffna/Nallur Temple at first light.avif"
                },
                {
                    id: 2,
                    name: "Explore Dutch Fort",
                    description: "Walk the ramparts of the Dutch fort.",
                    image: "/assets/images/sri_lanka/jaffna/The Dutch Fort ramparts.avif"
                },
                {
                    id: 3,
                    name: "Island Hopping to Delft",
                    description: "Take a boat to Delft Island.",
                    image: "/assets/images/sri_lanka/jaffna/Island hopping to Delft.avif"
                },
                {
                    id: 4,
                    name: "Casuarina Beach",
                    description: "Relax at Casuarina Beach by the causeway.",
                    image: "/assets/images/sri_lanka/jaffna/Casuarina Beach by causeway.avif"
                },
                {
                    id: 5,
                    name: "The Thinnais",
                    description: "Experience the local Thinnai culture.",
                    image: "/assets/images/sri_lanka/jaffna/The Thinnais.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Jaffna Stays with Tales",
            description: "Beyond standard accommodation, our stays in Jaffna include resorts and homes that reflect the northern heritage.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/jaffna/Fort Hammenhiel Resort.avif",
                    title: "Fort Hammenhiel Resort",
                    title2: "Jaffna, Sri Lanka",
                    description: "A resort with views of the fort.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "3",
                    image: "/assets/images/sri_lanka/jaffna/Stay with Tales Jaffna - Fox, Jaffna.avif",
                    title: "Fox, Jaffna",
                    title2: "Jaffna, Sri Lanka",
                    description: "A stay with tales in Jaffna.",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "3",
                    image: "/assets/images/sri_lanka/jaffna/Thambu Illam.avif",
                    title: "Thambu Illam",
                    title2: "Jaffna, Sri Lanka",
                    description: "A traditional home experience.",
                    link: "#",
                    linkText: "Canvas Of Ceylon.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        learnMoreAbout: {
            title: "Learn More About Jaffna",
            subTitle: "Did You Know?",
            description: "Jaffna is known for its palmyrah trees, which are used for various products like jaggery and fiber.",
            image: "/assets/images/sri_lanka/jaffna/Learn More About Jaffna.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Jaffna?',
                answer: 'Rent a tuk-tuk or bicycle to explore the peninsula.'
            },
            {
                id: 2,
                question: 'Is Jaffna safe for tourists?',
                answer: 'Jaffna is safe and welcoming to tourists.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Jaffna?',
                answer: 'Spend 2-3 days to explore the temples and islands.'
            },
            {
                id: 4,
                question: 'What should I wear when visiting temples?',
                answer: 'Dress modestly, covering shoulders and knees.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Jaffna?',
                answer: 'December to March is the dry season.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            },
            {
                id: 5,
                destinations: "Polonnaruwa",
            },
            {
                id: 6,
                destinations: "Sigiriya",
            }
        ]
    },
    {
        id: 9,
        name: "Kandy",
        slug: "kandy",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/kandy /KANDY  - Hero TGT.avif",
            title: "Sacred City of the Hills",
            subTitle: "Kandy",
            rating: 4.8,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Kandy is a bright spot of colour in a sea of emerald green. It is surrounded by the jungle and seems to be cut off from the rest of the country. This city, which is often called the cultural capital, was the last Sinhalese kingdom to fall. It fought European colonisers for three hundred years. Every morning, fog rolls down from the hills around. Over a lake built by a king, temple bells ring. For more than 500 years, the holy Tooth Relic of Buddha has brought pilgrims here.\n\nKandy's streets are very easy to walk on, and visitors can see homes with verandas, balconies full of bougainvillaea and frangipani, and busy restaurants. There are mountain views at Kings Pavilion. Orchids bloom in colours that don't seem possible in the botanical gardens. Visit the famous Temple of the Tooth, which is full of worshippers during evening puja ceremonies. See pilgrims pay their respects to the golden casket that holds the tooth of Buddha. You will see why some places become sacred when the Esala Perahera parade goes through these streets in August with elephants, dancers, drummers, and firelight. Kandy doesn't try to impress. It just is.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Kandy?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Kandy the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Nimal, Travel Director",
                    title2: "‘LIVING HISTORY’",
                    description: "“Kandy shows the heart of Sri Lanka, from the misty mornings over the lake to the temple ceremonies at night. I love seeing guests find the Three Temple Loop, which most tourists never go to..“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Buddhima, Local Expert",
                    title2: "WHY KANDY STAYS WITH YOU",
                    description: "“Kandy was free for 300 years. That spirit is in every temple, every dancer, and every cup of tea from the hills. The Royal Botanical Gardens are home to 4,000 different kinds of plants.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/kandy /KANDY  - Hero TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/kandy /Learn More About Kandy.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/kandy /Sacred Tooth, Living Faith.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Kandy experiences with Travelgate",
            description: "Travelgate opens doors you didn't know were there. Simply My Guest lets you see inside the homes and kitchens of local families. Experiences from MAKE TRAVEL RESPONSIBLE® help you connect with communities in meaningful ways. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Take a look at what you can expect on a trip with Travelgate Kandy.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/kandy /Simply My Guest - Kandy 2.avif",
                    title: "Meet Chitra , form Kandy, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Chitra doesn't only teach how to cook. She shares kitchen tips that have been passed down through the years and aren't in cookbooks. She knows how to make Sri Lankan classics with her hands, and they move with practiced confidence. You'll have a different understanding of flavours by the end. More deeply.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri_lanka/kandy /SANTANI.avif",
                    title: "Stays with Tales",
                    title2: "Stay at Santani Wellness , Kandy, Sri Lanka",
                    description: "This boutique retreat sits where a tea estate used to be, forty eight acres of mountain silence. Instead of walls, there are glass walls, and instead of air conditioning, there are breezes. Your meals are tailored to your body type, just like in Ayurveda, but without the strictness. Thermal pools, meditation in the morning, and walks to waterfalls. People come here broken. They leave whole.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "2",
                    image: "/assets/images/sri_lanka/kandy /Wax, Dye, Create.avif",
                    title: "Wax, Dye, Create",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Three hours with a batik artist who has been working on this ancient art form for decades. You'll learn wax resist techniques that need patience and accuracy, pick colours that you like, and make patterns that are all your own. The thing you take home won't be a keepsake. It will be proof that you made something pretty.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        whatToEat: {
            title: "What to Eat in Kandy",
            description: "The best meals in Kandy happen where mountain views meet proper attention to detail. One hilltop property does Japanese cuisine from a chef people travel for. Another serves international buffets with two hundred dishes when the festive season arrives, turkey and beef wellington alongside proper sashimi bars.\n\nThe boutique hotels understand what altitude does to flavour. Garden dining by the lake, colonial lawns set for evening drinks and fusion menus, riverside tables when the weather cooperates. Some places do Ayurvedic menus tailored to your body, others focus on healthy Asian with valley views that make you forget your phone exists.\n\nSundays bring seafood feasts. May has Mother's Day specials with high tea and grand buffets. The summer months offer multi night packages with meals included, which makes sense when the dining is this considered.\n\nThere's a place done up like a surrealist painting if you want quirky with your Sri Lankan food. And hilltop quiet luxury where service feels effortless, ranked top for good reason.",
            image: "/assets/images/sri_lanka/kandy /What to Eat in Kandy.avif"
        },
        thingsToDo: {
            title: "Things to Do in Kandy",
            description: "Kandy rewards those who look beyond the obvious. It's a city of sacred temples and hidden gardens, of centuries old dance traditions and quiet lake walks at dawn. These experiences show you why the last kingdom held its ground for so long.",
            data: [
                {
                    id: 1,
                    name: "Dawn Yoga, Mountain Stillness",
                    description: "Breathe with the mountains at first light. Your body knows what it needs. Let a private session show you.",
                    image: "/assets/images/sri_lanka/kandy /Dawn Yoga, Mountain Stillness.avif"
                },
                {
                    id: 2,
                    name: "Ancient Warriors, Living Art",
                    description: "Get lessons in Angampora from someone who has been doing it for decades. An ancient martial art that is still practised today and is surprisingly graceful.",
                    image: "/assets/images/sri_lanka/kandy /Ancient Warriors, Living Art.avif"
                },
                {
                    id: 3,
                    name: "Colonial Kandy, Timeless Stories",
                    description: "Walk Victorian era Kandy with guides who know which stories matter. The Queen's Hotel alone could fill an afternoon.",
                    image: "/assets/images/sri_lanka/kandy /Colonial Kandy, Timeless Stories.avif"
                },
                {
                    id: 4,
                    name: "Resin, Color, Tradition",
                    description: "Spend time with lacquerware artisans. You'll craft something small but yours, learning techniques centuries old, still perfected.",
                    image: "/assets/images/sri_lanka/kandy /Resin, Color, Tradition.avif"
                },
                {
                    id: 5,
                    name: "Lake to Temple Walk",
                    description: "Let Kandy unfold at walking pace. Lake light, market sounds, temple bells. The city reveals itself between morning and lunch",
                    image: "/assets/images/sri_lanka/kandy /Lake to Temple Walk.avif"
                },
                {
                    id: 6,
                    name: "Sacred Tooth, Living Faith",
                    description: "Stand with other worshippers during evening prayers. This isn't a museum at the temple. It's alive, fragrant, and has a lot of history behind it.",
                    image: "/assets/images/sri_lanka/kandy /Sacred Tooth, Living Faith.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Kandy Stays with Tales",
            description: "Beyond standard accommodation, our stays in Kandy include historic hotels and bungalows that offer charm and views.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/kandy /Kings Pavilion.avif",
                    title: "Kings Pavilion",
                    title2: "Kandy, Sri Lanka",
                    description: "A pavilion with royal views.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "3",
                    image: "/assets/images/sri_lanka/kandy /Adigar_s Manor.avif",
                    title: "Adigar's Manor",
                    title2: "Kandy, Sri Lanka",
                    description: "A historic manor with colonial charm.",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "3",
                    image: "/assets/images/sri_lanka/kandy /Coffee Bungalow.avif",
                    title: "Coffee Bungalow",
                    title2: "Kandy, Sri Lanka",
                    description: "A bungalow amidst coffee plantations.",
                    link: "#",
                    linkText: "Canvas Of Ceylon.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        learnMoreAbout: {
            title: "Learn More About Kandy",
            subTitle: "Did You Know?",
            description: "Kandy was the last capital of the Sinhalese kings and is home to the Temple of the Sacred Tooth, which houses a tooth relic of Buddha.",
            image: "/assets/images/sri_lanka/kandy /Learn More About Kandy.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Kandy?',
                answer: 'Walk or take a tuk-tuk around the city center.'
            },
            {
                id: 2,
                question: 'Is Kandy safe for tourists?',
                answer: 'Kandy is safe and tourist-friendly.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Kandy?',
                answer: 'Spend 1-2 days to explore the sites.'
            },
            {
                id: 4,
                question: 'What should I wear when visiting the temple?',
                answer: 'Dress modestly, covering shoulders and knees.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Kandy?',
                answer: 'April to September is the dry season.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            },
            {
                id: 5,
                destinations: "Polonnaruwa",
            },
            {
                id: 6,
                destinations: "Sigiriya",
            }
        ]
    },
    {
        id: 10,
        name: "Negombo",
        slug: "negombo",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/negombo/HERO - NEGOMBO 2.avif",
            title: "Coastal Gateway to Sri Lanka",
            subTitle: "Negombo",
            rating: 4.7,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Negombo is a coastal town near Colombo, known for its beaches, lagoons, and Dutch colonial history. It's a great starting point for exploring Sri Lanka, with fishing villages and canals.\n\nEnjoy the beach, visit the fish market, and explore the historic sites. Negombo offers a relaxed introduction to the island's west coast.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Negombo?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Negombo the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘COASTAL CHARM AND CULTURE’",
                    description: "“Negombo's beaches and lagoons offer a peaceful start to your Sri Lankan adventure. The local culture and Dutch heritage are fascinating.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY NEGOMBO IS YOUR PERFECT STARTING POINT?",
                    description: "“Negombo is the gateway to Sri Lanka. Relax on the beach, explore the canals, and immerse in the coastal life.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Negombo experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Negombo.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/negombo/Simply My Guest - Negombo.avif",
                    title: "Meet a local fisherman in Negombo, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Join a local fisherman for a traditional meal and stories of the sea.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri_lanka/negombo/Kadadasi Papermaking Workshop.avif",
                    title: "Kadadasi Papermaking Workshop",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Learn about traditional papermaking and support local artisans.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        whatToEat: {
            title: "What to Eat in Negombo",
            description: "Negombo's cuisine features fresh seafood, rice dishes, and local flavors. Try fish curries, hoppers, and tropical fruits.",
            image: "/assets/images/sri_lanka/negombo/What to Eat in Negombo.avif"
        },
        thingsToDo: {
            title: "Things to Do in Negombo",
            description: "Negombo is about beaches, canals, and culture. Relax on the beach, explore the lagoons, and visit historic sites.",
            data: [
                {
                    id: 1,
                    name: "Explore Dutch Canal",
                    description: "Walk along the historic Dutch canal.",
                    image: "/assets/images/sri_lanka/negombo/Dutch Canal Discovery.avif"
                },
                {
                    id: 2,
                    name: "Visit Angurukaramulla Temple",
                    description: "See the reclining Buddha at the temple.",
                    image: "/assets/images/sri_lanka/negombo/Inside the Buddha at Angurukaramulla.avif"
                },
                {
                    id: 3,
                    name: "Wetland Safari",
                    description: "Take a safari through Muthurajawela Wetlands.",
                    image: "/assets/images/sri_lanka/negombo/Muthurajawela Wetland Safari.avif"
                },
                {
                    id: 4,
                    name: "Sailing on Catamaran",
                    description: "Sail on a traditional catamaran.",
                    image: "/assets/images/sri_lanka/negombo/Sailing on a Traditional Catamaran.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Negombo Stays with Tales",
            description: "Beyond standard accommodation, our stays in Negombo include beach villas and historic homes that offer coastal charm.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/negombo/The Notary_s House.avif",
                    title: "The Notary's House",
                    title2: "Negombo, Sri Lanka",
                    description: "A historic house with colonial architecture.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "3",
                    image: "/assets/images/sri_lanka/negombo/Uga Riva 1.avif",
                    title: "Uga Riva",
                    title2: "Negombo, Sri Lanka",
                    description: "A riverside villa with modern amenities.",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 3,
                    type: "3",
                    image: "/assets/images/sri_lanka/negombo/Villa Hundira.avif",
                    title: "Villa Hundira",
                    title2: "Negombo, Sri Lanka",
                    description: "A villa with garden and pool.",
                    link: "#",
                    linkText: "Canvas Of Ceylon.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },

            ]
        },
        learnMoreAbout: {
            title: "Learn More About Negombo",
            subTitle: "Did You Know?",
            description: "Negombo was an important trading port during the Dutch colonial period and has many Dutch forts and canals.",
            image: "/assets/images/sri_lanka/negombo/Learn More About Negombo.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Negombo?',
                answer: 'Rent a tuk-tuk or bicycle to explore the town and canals.'
            },
            {
                id: 2,
                question: 'Is Negombo safe for tourists?',
                answer: 'Negombo is safe and welcoming to tourists.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Negombo?',
                answer: 'Spend 1-2 days to relax and explore.'
            },
            {
                id: 4,
                question: 'What should I wear when visiting temples?',
                answer: 'Dress modestly, covering shoulders and knees.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Negombo?',
                answer: 'November to April is the dry season, ideal for beach activities.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            },
            {
                id: 5,
                destinations: "Polonnaruwa",
            },
            {
                id: 6,
                destinations: "Sigiriya",
            }
        ]
    },
    {
        id: 21,
        name: "Arugam Bay",
        slug: "arugam-bay",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Arugam Bay/HERO SECTION - ARUGAMBAY.avif",
            title: "Surfing Paradise",
            subTitle: "Arugam Bay",
            rating: 4.7,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Arugam Bay is a coastal town in Sri Lanka known for its surfing beaches and laid-back atmosphere. It's a popular destination for water sports and relaxation.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Arugam Bay?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Arugam Bay the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘BEACH PARADISE’",
                    description: "“Arugam Bay offers stunning beaches and excellent surfing. It's a great place to relax and enjoy the coastal beauty.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY ARUGAM BAY IS YOUR PERFECT STARTING POINT?",
                    description: "“This coastal town is ideal for water sports and beach relaxation. Experience the best of Sri Lanka's east coast.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Arugam Bay experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Arugam Bay.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Arugam Bay/Simply My Guest - Arugambay.avif",
                    title: "Meet a local host in Arugam Bay, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Experience local cuisine and hospitality in Arugam Bay.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "2",
                    image: "/assets/images/sri_lanka/Arugam Bay/Odyssey Boutique Hotel.avif",
                    title: "Stay at a boutique hotel in Arugam Bay, Sri Lanka",
                    title2: "Stays with Tales",
                    description: "Relax in a hotel with tales in Arugam Bay.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        whatToEat: {
            title: "What to Eat in Arugam Bay",
            description: "Arugam Bay offers fresh seafood and local dishes like curries and hoppers.",
            image: "/assets/images/sri_lanka/Arugam Bay/What to Eat in Arugam Bay.avif"
        },
        thingsToDo: {
            title: "Things to Do in Arugam Bay",
            description: "Arugam Bay is perfect for surfing, beach activities, and exploring the coast.",
            data: [
                {
                    id: 1,
                    name: "Surfing at Main Point",
                    description: "Catch waves at the famous surfing spot.",
                    image: "/assets/images/sri_lanka/Arugam Bay/Catch the first sets at Main Point before sunrise.avif"
                },
                {
                    id: 2,
                    name: "Lagoon Exploration",
                    description: "Explore the mangrove channels by paddle.",
                    image: "/assets/images/sri_lanka/Arugam Bay/Paddle through Pottuvil Lagoon’s mangrove channels.avif"
                },
                {
                    id: 3,
                    name: "Elephant Watching",
                    description: "Watch wild elephants at Crocodile Rock.",
                    image: "/assets/images/sri_lanka/Arugam Bay/Watch wild elephants drink at Crocodile Rock.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Arugam Bay Stays with Tales",
            description: "Beyond standard accommodation, our stays in Arugam Bay include beach resorts and villas.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Arugam Bay/Aprota Villas.avif",
                    title: "Aprota Villas",
                    title2: "Arugam Bay, Sri Lanka",
                    description: "A beach villa with modern comforts.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
                {
                    id: 2,
                    type: "3",
                    image: "/assets/images/sri_lanka/Arugam Bay/Niketh Villa Komari.avif",
                    title: "Niketh Villa Komari",
                    title2: "Arugam Bay, Sri Lanka",
                    description: "A villa with lagoon views.",
                    link: "#",
                    linkText: "Boutique Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        learnMoreAbout: {
            title: "Learn More About Arugam Bay",
            subTitle: "Did You Know?",
            description: "Arugam Bay is one of Sri Lanka's top surfing destinations, attracting surfers from around the world.",
            image: "/assets/images/sri_lanka/Arugam Bay/Learn More About Arugam Bay.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of our travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Arugam Bay?',
                answer: 'Rent a scooter or tuk-tuk to explore the area.'
            },
            {
                id: 2,
                question: 'Is Arugam Bay safe for tourists?',
                answer: 'Arugam Bay is generally safe, but be cautious with water activities.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Arugam Bay?',
                answer: 'Spend 2-3 days for surfing and relaxation.'
            },
            {
                id: 4,
                question: 'What should I wear when visiting?',
                answer: 'Light clothing for the beach and modest for temples.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Arugam Bay?',
                answer: 'April to October for surfing.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            }
        ]
    },
    {
        id: 22,
        name: "Batticaloa",
        slug: "batticaloa",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Batticaloa /HERO SECTION - Batticaloa.avif",
            title: "Coastal Charm",
            subTitle: "Batticaloa",
            rating: 4.6,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Batticaloa is a coastal city in Sri Lanka known for its lagoons, beaches, and cultural heritage.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Batticaloa?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Batticaloa the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘LAGOON BEAUTY’",
                    description: "“Batticaloa's lagoons and beaches offer a serene escape. Explore the cultural sites and enjoy the coastal lifestyle.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY BATTICALOA IS YOUR PERFECT STARTING POINT?",
                    description: "“This eastern city is rich in history and nature. Experience the lagoons and beaches of Sri Lanka's east.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Batticaloa experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Batticaloa.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Batticaloa /Simply My Guest - Batticaloa 1.1.avif",
                    title: "Meet a local host in Batticaloa, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Experience local cuisine and hospitality in Batticaloa.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        whatToEat: {
            title: "What to Eat in Batticaloa",
            description: "Batticaloa offers seafood and local specialties like pittu and hoppers.",
            image: "/assets/images/sri_lanka/Batticaloa /What to Eat in Batticaloa.avif"
        },
        thingsToDo: {
            title: "Things to Do in Batticaloa",
            description: "Batticaloa features lagoons, beaches, and historical sites.",
            data: [
                {
                    id: 1,
                    name: "Lagoon Cruise",
                    description: "Enjoy a boat ride on the Batticaloa lagoon.",
                    image: "/assets/images/sri_lanka/Batticaloa /Listen to the Lagoon Sing at Full Moon.avif"
                },
                {
                    id: 2,
                    name: "Beach Exploration",
                    description: "Relax on the beaches and explore the coast.",
                    image: "/assets/images/sri_lanka/Batticaloa /Amaya Beach.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Batticaloa Stays with Tales",
            description: "Beyond standard accommodation, our stays in Batticaloa include beach resorts.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Batticaloa /Amaya Beach.avif",
                    title: "Amaya Beach",
                    title2: "Batticaloa, Sri Lanka",
                    description: "A beach resort with lagoon views.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        learnMoreAbout: {
            title: "Learn More About Batticaloa",
            subTitle: "Did You Know?",
            description: "Batticaloa is known for its Dutch fort and lagoon.",
            image: "/assets/images/sri_lanka/Batticaloa /Learn More About Batticaloa.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Batticaloa?',
                answer: 'Use tuk-tuks or rent a bicycle.'
            },
            {
                id: 2,
                question: 'Is Batticaloa safe for tourists?',
                answer: 'Batticaloa is safe and welcoming.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Batticaloa?',
                answer: 'Spend 1-2 days exploring the lagoon and beaches.'
            },
            {
                id: 4,
                question: 'What should I wear?',
                answer: 'Casual clothing for the beach.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Batticaloa?',
                answer: 'April to September for dry weather.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            }
        ]
    },
    {
        id: 23,
        name: "Bentota",
        slug: "bentota",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Bentota/BENTOTA  - Hero TGT.avif",
            title: "Beach Paradise",
            subTitle: "Bentota",
            rating: 4.8,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Bentota is a beach resort town in Sri Lanka famous for its golden beaches, water sports, and ayurvedic spas.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Bentota?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Bentota the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘BEACH BLISS’",
                    description: "“Bentota's beaches are perfect for relaxation and water sports. Enjoy the sun and sea in this tropical paradise.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY BENTOTA IS YOUR PERFECT STARTING POINT?",
                    description: "“This coastal town offers luxury resorts and adventure. Ideal for a relaxing beach holiday in Sri Lanka.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Bentota experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Bentota.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Bentota/Bevis Bawa_s Brief Garden.avif",
                    title: "Explore Bevis Bawa's Brief Garden",
                    title2: "MAKE TRAVEL RESPONSIBLE® Experiences",
                    description: "Visit the beautiful garden designed by Bevis Bawa.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        whatToEat: {
            title: "What to Eat in Bentota",
            description: "Bentota offers fresh seafood and Sri Lankan curries.",
            image: "/assets/images/sri_lanka/Bentota/What to Eat in Bentota.avif"
        },
        thingsToDo: {
            title: "Things to Do in Bentota",
            description: "Bentota is known for water sports, river safaris, and beach activities.",
            data: [
                {
                    id: 1,
                    name: "River Safari",
                    description: "Take a boat safari on the Bentota River.",
                    image: "/assets/images/sri_lanka/Bentota/Lagoon Fishing at Dusk.avif"
                },
                {
                    id: 2,
                    name: "Water Sports",
                    description: "Enjoy surfing, jet skiing, and more.",
                    image: "/assets/images/sri_lanka/Bentota/Wind Surfing Bentota Bay.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Bentota Stays with Tales",
            description: "Beyond standard accommodation, our stays in Bentota include luxury resorts and villas.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Bentota/Ahu Bay.avif",
                    title: "Ahu Bay",
                    title2: "Bentota, Sri Lanka",
                    description: "A luxury resort with beach access.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        learnMoreAbout: {
            title: "Learn More About Bentota",
            subTitle: "Did You Know?",
            description: "Bentota is famous for its ayurvedic spas and water sports.",
            image: "/assets/images/sri_lanka/Bentota/Learn More About Bentota.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Bentota?',
                answer: 'Tuk-tuks and hotel shuttles are common.'
            },
            {
                id: 2,
                question: 'Is Bentota safe for tourists?',
                answer: 'Bentota is safe and tourist-friendly.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Bentota?',
                answer: 'Spend 2-3 days for beach and water activities.'
            },
            {
                id: 4,
                question: 'What should I wear?',
                answer: 'Swimwear for the beach, casual clothes.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Bentota?',
                answer: 'December to April for dry weather.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            }
        ]
    },
    {
        id: 24,
        name: "Dambulla",
        slug: "dambulla",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Dambulla /HERO SECTION - Dambulla.avif",
            title: "Cave Temples",
            subTitle: "Dambulla",
            rating: 4.8,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Dambulla is home to the famous Dambulla Cave Temple, a UNESCO World Heritage Site with ancient Buddhist murals and statues.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Dambulla?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Dambulla the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘ANCIENT WONDERS’",
                    description: "“Dambulla's cave temples are a marvel of ancient art. Explore the murals and statues in this sacred site.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY DAMBULLA IS YOUR PERFECT STARTING POINT?",
                    description: "“The cave temples offer a glimpse into Sri Lanka's Buddhist heritage. A must-visit for history lovers.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Dambulla experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Dambulla.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Dambulla /Simply My Guest - Dambulla.avif",
                    title: "Meet a local host in Dambulla, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Experience local cuisine in Dambulla.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        whatToEat: {
            title: "What to Eat in Dambulla",
            description: "Dambulla offers traditional Sri Lankan food like rice and curry.",
            image: "/assets/images/sri_lanka/Dambulla /What to Eat in Dambulla.avif"
        },
        thingsToDo: {
            title: "Things to Do in Dambulla",
            description: "Dambulla is famous for its cave temples and nearby Sigiriya.",
            data: [
                {
                    id: 1,
                    name: "Dambulla Cave Temple",
                    description: "Explore the ancient cave temples with murals.",
                    image: "/assets/images/sri_lanka/Dambulla /Witness the Cave Temple Before Crowds Arrive.avif"
                },
                {
                    id: 2,
                    name: "Cycling",
                    description: "Cycle through the hamlets around Dambulla.",
                    image: "/assets/images/sri_lanka/Dambulla /Cycle Through Hamlets Where Time Moves Slower 2.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Dambulla Stays with Tales",
            description: "Beyond standard accommodation, our stays in Dambulla include jungle retreats.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Dambulla /Amaya Lake Dambulla.avif",
                    title: "Amaya Lake Dambulla",
                    title2: "Dambulla, Sri Lanka",
                    description: "A resort with lake views.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        learnMoreAbout: {
            title: "Learn More About Dambulla",
            subTitle: "Did You Know?",
            description: "Dambulla Cave Temple has over 150 Buddha statues.",
            image: "/assets/images/sri_lanka/Dambulla /Learn More About Dambulla.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of our travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Dambulla?',
                answer: 'Tuk-tuks or private vehicles.'
            },
            {
                id: 2,
                question: 'Is Dambulla safe for tourists?',
                answer: 'Dambulla is safe and popular with tourists.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Dambulla?',
                answer: 'Spend 1-2 days to see the temples.'
            },
            {
                id: 4,
                question: 'What should I wear when visiting temples?',
                answer: 'Modest clothing, shoulders and knees covered.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Dambulla?',
                answer: 'December to April for clear weather.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            }
        ]
    },
    {
        id: 25,
        name: "Ella",
        slug: "ella",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Ella/HERO SECTION - ELLA.avif",
            title: "Hill Country Paradise",
            subTitle: "Ella",
            rating: 4.9,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Ella is a charming hill station in Sri Lanka known for its scenic views, tea plantations, and hiking trails.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Ella?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Ella the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘SCENIC BEAUTY’",
                    description: "“Ella's landscapes are breathtaking. Hike to Little Adam's Peak and enjoy the tea estates.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY ELLA IS YOUR PERFECT STARTING POINT?",
                    description: "“This hill station offers adventure and relaxation. Perfect for nature lovers visiting Sri Lanka.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Ella experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Ella.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Ella/Simply My Guest - Ella 1.avif",
                    title: "Meet a local host in Ella, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Experience farm-to-table meals in Ella.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        whatToEat: {
            title: "What to Eat in Ella",
            description: "Ella offers fresh produce and tea-inspired dishes.",
            image: "/assets/images/sri_lanka/Ella/What to Eat in Ella.avif"
        },
        thingsToDo: {
            title: "Things to Do in Ella",
            description: "Ella is known for hiking, train rides, and scenic views.",
            data: [
                {
                    id: 1,
                    name: "Little Adam's Peak",
                    description: "Hike to the viewpoint at dawn.",
                    image: "/assets/images/sri_lanka/Ella/Climb to Little Adam_s in the dark.avif"
                },
                {
                    id: 2,
                    name: "Nine Arches Bridge",
                    description: "Watch trains cross the bridge.",
                    image: "/assets/images/sri_lanka/Ella/Watch trains thread through Nine Arches.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Ella Stays with Tales",
            description: "Beyond standard accommodation, our stays in Ella include boutique resorts.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Ella/98 Acres Resort & Spa.avif",
                    title: "98 Acres Resort & Spa",
                    title2: "Ella, Sri Lanka",
                    description: "A luxury resort with mountain views.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        learnMoreAbout: {
            title: "Learn More About Ella",
            subTitle: "Did You Know?",
            description: "Ella is famous for its tea estates and railway views.",
            image: "/assets/images/sri_lanka/Ella/Learn More About Ella (1).avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Ella?',
                answer: 'Tuk-tuks or walking for short distances.'
            },
            {
                id: 2,
                question: 'Is Ella safe for tourists?',
                answer: 'Ella is safe and peaceful.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Ella?',
                answer: 'Spend 2-3 days for hiking and sightseeing.'
            },
            {
                id: 4,
                question: 'What should I wear?',
                answer: 'Comfortable clothing for hiking.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Ella?',
                answer: 'December to April for clear skies.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            }
        ]
    },
    {
        id: 30,
        name: "Pasikudah",
        slug: "pasikudah",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Pasikudah/HERO SECTION - PASIKUDAH.avif",
            title: "Beach Paradise",
            subTitle: "Pasikudah",
            rating: 4.7,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Pasikudah is a coastal town known for its pristine beaches, coral reefs, and snorkeling.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Pasikudah?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Pasikudah the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘CORAL REEFS’",
                    description: "“Pasikudah's beaches and reefs offer excellent snorkeling and relaxation.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY PASIKUDAH IS YOUR PERFECT STARTING POINT?",
                    description: "“Experience pristine beaches and marine life in this eastern coastal gem.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Pasikudah experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Pasikudah.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Pasikudah/Simply My Guest - Pasikudah.avif",
                    title: "Meet a local host in Pasikudah, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Experience local cuisine and hospitality in Pasikudah.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        whatToEat: {
            title: "What to Eat in Pasikudah",
            description: "Pasikudah offers fresh seafood and local dishes.",
            image: "/assets/images/sri_lanka/Pasikudah/What to Eat in Pasikudah.avif"
        },
        thingsToDo: {
            title: "Things to Do in Pasikudah",
            description: "Pasikudah is perfect for snorkeling, diving, and beach relaxation.",
            data: [
                {
                    id: 1,
                    name: "Snorkeling",
                    description: "Explore the coral reefs and marine life.",
                    image: "/assets/images/sri_lanka/Pasikudah/Snorkel Pasikudah_s Coral Gardens.avif"
                },
                {
                    id: 2,
                    name: "Beach Time",
                    description: "Relax on the golden sands.",
                    image: "/assets/images/sri_lanka/Pasikudah/Uga Bay.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Pasikudah Stays with Tales",
            description: "Beyond standard accommodation, our stays in Pasikudah include beach resorts.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Pasikudah/Sun Siyam Pasikudah.avif",
                    title: "Sun Siyam Pasikudah",
                    title2: "Pasikudah, Sri Lanka",
                    description: "A resort with beach access and luxury.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        learnMoreAbout: {
            title: "Learn More About Pasikudah",
            subTitle: "Did You Know?",
            description: "Pasikudah has some of Sri Lanka's best coral reefs for snorkeling.",
            image: "/assets/images/sri_lanka/Pasikudah/Learn More About Pasikudah.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Pasikudah?',
                answer: 'Tuk-tuks or private vehicles.'
            },
            {
                id: 2,
                question: 'Is Pasikudah safe for tourists?',
                answer: 'Pasikudah is safe and peaceful.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Pasikudah?',
                answer: 'Spend 2-3 days for water activities.'
            },
            {
                id: 4,
                question: 'What should I wear?',
                answer: 'Swimwear for the beach.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Pasikudah?',
                answer: 'April to September for dry weather.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            }
        ]
    },
    {
        id: 31,
        name: "Polonnaruwa",
        slug: "polonnaruwa",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Polonnaruwa/HERO SECTION - Pollonaruwa.avif",
            title: "Ancient Capital",
            subTitle: "Polonnaruwa",
            rating: 4.8,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Polonnaruwa is an ancient city with UNESCO World Heritage Site ruins, temples, and reservoirs.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Polonnaruwa?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Polonnaruwa the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘ROYAL RUINS’",
                    description: "“Polonnaruwa's ancient city showcases Sri Lanka's medieval history with stunning sculptures.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY POLONNARUWA IS YOUR PERFECT STARTING POINT?",
                    description: "“Explore the ruins and reservoirs of this ancient capital.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Polonnaruwa experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Polonnaruwa.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Polonnaruwa/Meet Devapriya Family.avif",
                    title: "Meet the Devapriya family in Polonnaruwa, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Experience traditional Sri Lankan hospitality.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        whatToEat: {
            title: "What to Eat in Polonnaruwa",
            description: "Polonnaruwa offers rice and curry with local flavors.",
            image: "/assets/images/sri_lanka/Polonnaruwa/What to Eat in Polonnaruwa.avif"
        },
        thingsToDo: {
            title: "Things to Do in Polonnaruwa",
            description: "Polonnaruwa is known for its ancient ruins and cycling tours.",
            data: [
                {
                    id: 1,
                    name: "Explore Ancient City",
                    description: "Visit the temples and statues.",
                    image: "/assets/images/sri_lanka/Polonnaruwa/Gal Vihara When Light Turns Stone to Gold.avif"
                },
                {
                    id: 2,
                    name: "Cycling Tour",
                    description: "Cycle around the ancient sites.",
                    image: "/assets/images/sri_lanka/Polonnaruwa/Cycling the Ancient City at First Light.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Polonnaruwa Stays with Tales",
            description: "Beyond standard accommodation, our stays in Polonnaruwa include heritage properties.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Polonnaruwa/Deer Park Hotel.avif",
                    title: "Deer Park Hotel",
                    title2: "Polonnaruwa, Sri Lanka",
                    description: "A hotel with views of the ancient city.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        learnMoreAbout: {
            title: "Learn More About Polonnaruwa",
            subTitle: "Did You Know?",
            description: "Polonnaruwa was Sri Lanka's capital from 1070 to 1236.",
            image: "/assets/images/sri_lanka/Polonnaruwa/Learn More About Polonnaruwa.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Polonnaruwa?',
                answer: 'Rent a bicycle or tuk-tuk.'
            },
            {
                id: 2,
                question: 'Is Polonnaruwa safe for tourists?',
                answer: 'Polonnaruwa is safe and popular with tourists.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Polonnaruwa?',
                answer: 'Spend 1 day to explore the ruins.'
            },
            {
                id: 4,
                question: 'What should I wear?',
                answer: 'Modest clothing for temples.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Polonnaruwa?',
                answer: 'December to April for clear weather.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            }
        ]
    },
    {
        id: 32,
        name: "Sigiriya",
        slug: "sigiriya",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Sigiriya/HERO SECTION - Sigiriya.avif",
            title: "Lion Rock",
            subTitle: "Sigiriya",
            rating: 4.9,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Sigiriya is famous for its ancient rock fortress, frescoes, and gardens, a UNESCO World Heritage Site.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Sigiriya?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Sigiriya the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘ROCK FORTRESS’",
                    description: "“Sigiriya's rock citadel is an engineering marvel with breathtaking views and ancient art.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY SIGIRIYA IS YOUR PERFECT STARTING POINT?",
                    description: "“Climb the lion rock and explore the gardens of this iconic site.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Sigiriya experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Sigiriya.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Sigiriya/Simply My Guest - Sigiriya.avif",
                    title: "Meet a local host in Sigiriya, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Experience authentic Sri Lankan meals.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        whatToEat: {
            title: "What to Eat in Sigiriya",
            description: "Sigiriya offers curries, hoppers, and local specialties.",
            image: "/assets/images/sri_lanka/Sigiriya/What to Eat in Sigiriya.avif"
        },
        thingsToDo: {
            title: "Things to Do in Sigiriya",
            description: "Sigiriya is known for climbing the rock, frescoes, and village tours.",
            data: [
                {
                    id: 1,
                    name: "Climb Sigiriya Rock",
                    description: "Ascend the ancient fortress at dawn.",
                    image: "/assets/images/sri_lanka/Sigiriya/Climb Sigiriya Before Dawn.avif"
                },
                {
                    id: 2,
                    name: "Explore Gardens",
                    description: "Walk through the water gardens.",
                    image: "/assets/images/sri_lanka/Sigiriya/Seerock The King_s Domain.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Sigiriya Stays with Tales",
            description: "Beyond standard accommodation, our stays in Sigiriya include resorts with views.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Sigiriya/Aliya Resort & Spa.avif",
                    title: "Aliya Resort & Spa",
                    title2: "Sigiriya, Sri Lanka",
                    description: "A luxury resort with Sigiriya views.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        learnMoreAbout: {
            title: "Learn More About Sigiriya",
            subTitle: "Did You Know?",
            description: "Sigiriya was built by King Kashyapa in the 5th century.",
            image: "/assets/images/sri_lanka/Sigiriya/Learn More About Sigiriya.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Sigiriya?',
                answer: 'Tuk-tuks or jeeps for the climb.'
            },
            {
                id: 2,
                question: 'Is Sigiriya safe for tourists?',
                answer: 'Sigiriya is safe and well-visited.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Sigiriya?',
                answer: 'Spend 1-2 days for the rock and surroundings.'
            },
            {
                id: 4,
                question: 'What should I wear?',
                answer: 'Comfortable clothing for climbing.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Sigiriya?',
                answer: 'December to April for cooler weather.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            }
        ]
    },
    {
        id: 33,
        name: "Trincomalee",
        slug: "trincomalee",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Trincomalee/HERO SECTION - Trincomalee.avif",
            title: "Eastern Coast",
            subTitle: "Trincomalee",
            rating: 4.7,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Trincomalee is a coastal city known for its natural harbor, beaches, and whale watching.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Trincomalee?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Trincomalee the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘WHALE WATCHING’",
                    description: "“Trincomalee's harbor and beaches offer excellent whale watching and coastal relaxation.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY TRINCOMALEE IS YOUR PERFECT STARTING POINT?",
                    description: "“Explore the natural harbor and enjoy water sports in this eastern paradise.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Trincomalee experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Trincomalee.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Trincomalee/Simply My Guest - Trincomalee 1.avif",
                    title: "Meet a local host in Trincomalee, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Experience coastal cuisine.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        whatToEat: {
            title: "What to Eat in Trincomalee",
            description: "Trincomalee offers seafood and Tamil dishes.",
            image: "/assets/images/sri_lanka/Trincomalee/What to Eat in Trincomalee.avif"
        },
        thingsToDo: {
            title: "Things to Do in Trincomalee",
            description: "Trincomalee is known for whale watching, snorkeling, and temples.",
            data: [
                {
                    id: 1,
                    name: "Whale Watching",
                    description: "Spot blue whales and dolphins.",
                    image: "/assets/images/sri_lanka/Trincomalee/Where Blue Whales Pass Close.avif"
                },
                {
                    id: 2,
                    name: "Pigeon Island",
                    description: "Snorkel at the national park.",
                    image: "/assets/images/sri_lanka/Trincomalee/Pigeon Island Reef Watch.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Trincomalee Stays with Tales",
            description: "Beyond standard accommodation, our stays in Trincomalee include beach resorts.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Trincomalee/Anilana Nilaveli.avif",
                    title: "Anilana Nilaveli",
                    title2: "Trincomalee, Sri Lanka",
                    description: "A resort with ocean views.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        learnMoreAbout: {
            title: "Learn More About Trincomalee",
            subTitle: "Did You Know?",
            description: "Trincomalee has one of the world's finest natural harbors.",
            image: "/assets/images/sri_lanka/Trincomalee/Learn More About Trincomalee.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Trincomalee?',
                answer: 'Tuk-tuks or boats.'
            },
            {
                id: 2,
                question: 'Is Trincomalee safe for tourists?',
                answer: 'Trincomalee is safe and welcoming.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Trincomalee?',
                answer: 'Spend 2-3 days for water activities.'
            },
            {
                id: 4,
                question: 'What should I wear?',
                answer: 'Swimwear and light clothes.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Trincomalee?',
                answer: 'April to September for whale watching.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            }
        ]
    },
    {
        id: 34,
        name: "Yala",
        slug: "yala",
        countryId: countries[0],
        hero: {
            image: "/assets/images/sri_lanka/Yala/HERO SECTION - YALA.avif",
            title: "Wildlife Safari",
            subTitle: "Yala",
            rating: 4.8,
            button: {
                buttonTitle: "See All Tours",
                buttonLink: "/"
            }
        },
        description: "Yala is famous for its national park, leopards, elephants, and wildlife safaris.",
        jumpSection: [
            { id: 'trending-trips', name: "Trending Trips" },
            { id: 'reviews', name: "Reviews" },
            { id: 'why-visit', name: "Why Visit" },
            { id: 'premium-touring', name: "Premium Touring" },
            { id: 'experiences', name: "Experiences" },
            { id: 'things-to-do', name: "Things to Do" },
            { id: 'faqs', name: "FAQs" },
        ],
        trendingTours: {
            title: "Trending Sri Lanka Tours",
            tours: TOUR_DATA
        },
        uneditedReviews,
        yourBestTourStartsHere: {
            title: "Your best Sri Lanka tour starts here",
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
                    title: "Responsible travel",
                },
            ]
        },
        whyVisit: {
            title: "Why Visit Yala?",
            subTitle: "Hear from our passionate Travel Directors and TGT Blog Authors on what makes Yala the perfect place to start your guided tour.",
            data: [
                {
                    id: 1,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Pavani, Travel Director",
                    title2: "‘LEOPARD COUNTRY’",
                    description: "“Yala's national park is home to leopards, elephants, and birds. A safari adventure awaits.“",
                    experience: "Canvas of Ceylon",
                    buttonText: "Meet Our Travel Directors",
                    darkLight: "dark",
                    backgroundColor: "bg-mygreen3"
                },
                {
                    id: 2,
                    image: "/assets/images/tour-images/boutique-sri-lanka.png",
                    title: "Dulshan, Local Expert",
                    title2: "WHY YALA IS YOUR PERFECT STARTING POINT?",
                    description: "“Experience wildlife safaris and beach relaxation in this southern wilderness.“",
                    experience: "Essence of Sri Lanka",
                    buttonText: "Read the Article",
                    darkLight: "light",
                    backgroundColor: "bg-[#F7FAFF]"
                }
            ]
        },
        welcomeToPremiumTouring: {
            title: "Welcome to Premium Touring",
            data: [
                {
                    id: 1,
                    image: "/assets/images/sri-lanka/premium-touring-1.png",
                    title: "MAKE TRAVEL RESPONSIBLE ®",
                    description: "Travel with purpose. Choose experiences that protect our wildlife and uplift the communities you visit.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 2,
                    image: "/assets/images/sri-lanka/premium-touring-2.png",
                    title: "SIMPLY MY GUEST",
                    description: "Connect with local hosts over home-cooked meals and discover the real stories behind every dish.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 3,
                    image: "/assets/images/sri-lanka/premium-touring-3.png",
                    title: "PERSONALISE YOUR TOUR",
                    description: "Your journey, shaped around you. Every detail considered, every moment crafted to feel unmistakably yours",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
                {
                    id: 4,
                    image: "/assets/images/sri-lanka/premium-touring-4.png",
                    title: "STAYS WITH TALES",
                    description: "Hotels with soul, not just stars. Each property chosen for the story it helps you write.",
                    linkLabel: "Find out more",
                    linkHref: "#",
                },
            ]
        },
        travelDeals: [
            {
                id: 1,
                image: "/assets/images/sri_lanka/Colombo/SRILANKA-TRAVEL-DEALS TGT.avif",
                title: "Sri Lanka Travel Deals",
                description: "Find exceptional value on our bespoke Sri Lanka journeys with exclusive savings year round.",
                button: "Search Offers"
            },
            {
                id: 2,
                image: "/assets/images/sri_lanka/Colombo/money off your first trip.avif",
                title: "Money Off Your First Trip",
                description: "Join our inner circle for travel inspiration and save €250 on your first journey.",
                button: "Sign-Up Now"
            },
            {
                id: 3,
                image: "/assets/images/sri_lanka/Colombo/Special Offers.avif",
                title: "Special Offers",
                description: "Enjoy the Travelgate difference for less with our curated seasonal special offers.",
                button: "Search Offers"
            },
        ],
        experiencesHotels: {
            title: "Yala experiences with Travelgate",
            description: "Travelgate lets you into places you didn't know about. Simply My Guest takes you into the kitchens and homes of local families. MAKE TRAVEL RESPONSIBLE® Experiences help people connect with each other in real life. And with Stays with Tales, you'll sleep in places where the walls have stories to tell. Here's a look at what you can expect on a trip with Travelgate Yala.",
            data: [
                {
                    id: 1,
                    type: "2",
                    image: "/assets/images/sri_lanka/Yala/Meet Noel - Yala.avif",
                    title: "Meet Noel in Yala, Sri Lanka",
                    title2: "Simply My Guest",
                    description: "Experience village life and local food.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        whatToEat: {
            title: "What to Eat in Yala",
            description: "Yala offers curries and fresh produce.",
            image: "/assets/images/sri_lanka/Yala/What to Eat in Yala.avif"
        },
        thingsToDo: {
            title: "Things to Do in Yala",
            description: "Yala is known for wildlife safaris and beach relaxation.",
            data: [
                {
                    id: 1,
                    name: "Safari in Yala National Park",
                    description: "Spot leopards and elephants.",
                    image: "/assets/images/sri_lanka/Yala/Block One Leopard Dawn.avif"
                },
                {
                    id: 2,
                    name: "Beach Time",
                    description: "Relax on the southern beaches.",
                    image: "/assets/images/sri_lanka/Yala/Leopard Trails Yala.avif"
                },
            ]
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
        experiences: {
            title: "A few of your Yala Stays with Tales",
            description: "Beyond standard accommodation, our stays in Yala include safari lodges.",
            data: [
                {
                    id: 1,
                    type: "3",
                    image: "/assets/images/sri_lanka/Yala/Wild Coast Tented Lodge.avif",
                    title: "Wild Coast Tented Lodge",
                    title2: "Yala, Sri Lanka",
                    description: "A lodge with wildlife views.",
                    link: "#",
                    linkText: "Discover Sri Lanka.",
                    classNameTitle: "",
                    classNameDescription: "",
                    linkClassName: ""
                },
            ]
        },
        learnMoreAbout: {
            title: "Learn More About Yala",
            subTitle: "Did You Know?",
            description: "Yala has the highest density of leopards in the world.",
            image: "/assets/images/sri_lanka/Yala/Learn More About Yala.avif"
        },
        inquire: {
            title: "Ready to Plan Your Perfect Trip?",
            description: "It's easy to plan your own trip. Check out our carefully chosen tours today to find out about immersive culture, private dining, and stays with tales. You can also ask for a quote to get personalised help from one of your travel experts.",
            buttonLink1: "/search",
            buttonLink2: "/quote"
        },
        faqs: [
            {
                id: 1,
                question: 'What is the best way to get around Yala?',
                answer: 'Jeeps for safaris, tuk-tuks elsewhere.'
            },
            {
                id: 2,
                question: 'Is Yala safe for tourists?',
                answer: 'Yala is safe with guided tours.'
            },
            {
                id: 3,
                question: 'How much time should I spend in Yala?',
                answer: 'Spend 2 days for safaris and relaxation.'
            },
            {
                id: 4,
                question: 'What should I wear?',
                answer: 'Neutral colors for safaris.'
            },
            {
                id: 5,
                question: 'When is the best time to visit Yala?',
                answer: 'February to July for wildlife.'
            },
        ],
        destinationsList: [
            {
                id: 1,
                destinations: "Kandy",
            },
            {
                id: 2,
                destinations: "Negombo",
            },
            {
                id: 3,
                destinations: "Galle",
            },
            {
                id: 4,
                destinations: "Anuradhapura",
            }
        ]
    }

]