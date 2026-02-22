import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/comen/button'
import Breadcrumb from '@/components/BreadCrumb'
import Title2 from '@/components/comen/title/Title2'
// hero
import Hero1 from '@/components/comen/hero/Hero1'

// section
import Section1 from '@/components/comen/section/Section1'
import Section2 from '@/components/comen/section/Section2'

// card
import Card10 from '@/components/comen/card/Card10'
import Card9 from '@/components/comen/card/Card9'
import Card2 from '@/components/comen/card/Card2'

// carousel
import Card10Carousel1 from '@/components/comen/carousel/Card10Carousel1'
import Hero2 from '@/components/comen/hero/Hero2'


// demo data 
const heroData = {
    image: "assets/images/ways-to-travel/hero.png",
    title: "Ways To Travel",
    description: "Ways to explore and make your travel dreams come true"
}

const holidayStyleData = [
    {
        image: "assets/images/ways-to-travel/holiday-style-1.png",
        title: "Luxury",
        description: "Experience pure elegance in which every element whispers uniqueness and sophistication",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/holiday-style-2.png",
        title: "Signature",
        description: "Experience travel uniquely yours, crafted with a touch of signature charm",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/holiday-style-3.png",
        title: "Premium",
        description: "Take your trip to the next level with top notch comforts that change the way you vacation",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/holiday-style-3.png",
        title: "Nature",
        description: "Experience the natural beauty of Sri Lanka",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/holiday-style-3.png",
        title: "Nature",
        description: "Experience the natural beauty of Sri Lanka",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    }
]

const toursByThemes = [
    {
        image: "assets/images/ways-to-travel/tours-by-themes-1.png",
        title: "Nature & Wildlife Holidays",
        description: "Natural beauty & animal encounters",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/tours-by-themes-2.png",
        title: "Classic Holidays",
        description: "The combination of immersion and discovery",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/tours-by-themes-3.png",
        title: "Family Holidays",
        description: "For those who go further, together",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/tours-by-themes-4.png",
        title: "Adventure Holidays",
        description: "Seize the moment of serendipity",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/tours-by-themes-5.png",
        title: "Luxury Holidays",
        description: "For those extra-curious travellers",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    }

]

const experiences = [
    {
        image: "assets/images/ways-to-travel/experience-1.png",
        title: "Be My Guest",
        description: "Experience pure elegance in which every element whispers uniqueness and sophistication",
        link: "#",
        classNameTitle: "lg:!text-[30px]",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/experience-2.png",
        title: "MAKE TRAVEL RESPONSIBLE® Experiences",
        description: "Discover thrilling experiences that push your boundaries",
        link: "#",
        classNameTitle: "lg:!text-[30px]",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/experience-3.png",
        title: "Outdoor & Nature",
        description: "Immerse yourself in rich traditions and local heritage",
        link: "#",
        classNameTitle: "lg:!text-[30px]",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/experience-4.png",
        title: "Chronicles of Culture",
        description: "Connect with breathtaking natural landscapes",
        link: "#",
        classNameTitle: "lg:!text-[30px]",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/experience-5.png",
        title: "Wild Frontiers",
        description: "Connect with breathtaking natural landscapes",
        link: "#",
        classNameTitle: "lg:!text-[30px]",
        classNameDescription: ""
    }

]

const staysWithTales = [
    {
        image: "assets/images/ways-to-travel/stays-with-tales-1.png",
        title: "Ultimate Luxury",
        description: "Experience elegant boutique stays where luxury meets remarkable beauty",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/stays-with-tales-2.png",
        title: "Boutique Luxury",
        description: "Find intimate escapes boutique hotels and exquisitely crafted villas",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/stays-with-tales-3.png",
        title: "Premium",
        description: "Unload in premium comfort where every time quality meets extraordinary hospitality",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/ways-to-travel/stays-with-tales-4.png",
        title: "Comfort",
        description: "Feel at home, simple stays with warmth and thoughtful touches throughout",
        link: "#",
        classNameTitle: "",
        classNameDescription: ""
    }
]

const tailorYourTour = [
    {
        id: 1,
        image: "assets/images/ways-to-travel/tailor-your-tour-1.png",
        title: "Personalise Your Tour",
        description: "TravelGate provides flexible itineraries, allowing you to tailor group size, tour style, and experiences to your preferences.",
        linkText: "FIND OUT MORE>"
    },
    {
        id: 2,
        image: "assets/images/ways-to-travel/tailor-your-tour-2.png",
        title: "Everything taken care of",
        description: "TravelGate simplifies travel by handling all logistics, allowing you to relax and enjoy moments with ease.",
        linkText: "FIND OUT MORE>"
    }
]

const offers = [
    {
        id: 1,
        image: "assets/images/ways-to-travel/offers-1.png",
        title: "Sri Lanka Travel Deals",
        description: "Our guided tours to Sri Lanka offer great savings and discounts year-round",
        button: "Search Offers"
    },
    {
        id: 2,
        image: "assets/images/ways-to-travel/offers-2.png",
        title: "Money Off Your First Trip",
        description: "Sign up for our newsletter and save EUR€250 per couple on your first trip.",
        button: "Sign-Up Now"
    },
    {
        id: 3,
        image: "assets/images/ways-to-travel/offers-3.png",
        title: "Special Offers",
        description: "Experience The TravelGate Difference at cheaper rates with our current special offers",
        button: "Search Offers"
    },
]

export default function page() {
    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='py-2 w-full'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Ways To Travel" },
                ]} />
            </div>

            {/* hero 1 */}
            <div className='mx-auto w-full'>
                <Hero2
                    image="assets/images/tour-images/boutique-sri-lanka1.png"
                    title="How We Regreen"
                    description="Our Sustainability Strategy"
                    type={2}
                    button="See Our Impact Report"
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName=""
                />
            </div>

            {/* section 1 */}
            <div className='mt-12 w-full'>
                <div className='w-full md:grid md:grid-cols-12 px-4'>
                    <div className={`col-span-8 col-start-3 `}>
                        {/* title */}
                        <Title2 title="How We Regreen" className={`text-center mb-4 `} />


                        <p className={`description text-center font-sourceSerif whitespace-pre-line `}>
                            We want to help make the world a better place, which is why we started our sustainability strategy in 2022 called <Link href="#" className="underline-1">"How We Regreen"</Link> (HWR),
                            <br />
                            <br />
                            Consider it our plan for the next five years to make a real difference. We're working on sustainable travel, lowering our carbon footprint, and helping communities through our nonprofit arm, the <Link href="#" className="underline-1">AmityGate Foundation</Link>. Our HWR goals are not just our own; they are also in line with the United Nations Sustainable Development Goals. We really care about wildlife, people, and the planet we all share, and that's what drives everything we do.
                            <br />
                            <br />
                            We're happy to tell you that our second and last Impact Report is now out, and we couldn't be more proud. We really did reach all the goals we set for ourselves five years ago. The report shows exactly how we kept our promises in some very important areas, such as taking action on climate change, supporting sustainable food production, encouraging responsible consumption, making travel experiences that matter, promoting diversity and inclusion, and protecting animal welfare.
                            <br />
                            <br />
                            It's amazing to look back and see that we didn't just talk about these promises; we actually kept them.
                        </p>
                        {/* button */}
                        <div className='w-full flex justify-center mt-4'>

                            <Link href={'#'} className='no-underline'>
                                <Button variant="default" size={"lg"} className={` `} >
                                    See Our Impact Report
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
