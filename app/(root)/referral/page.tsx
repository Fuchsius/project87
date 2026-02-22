import React from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Title2 from '@/components/comen/title/Title2'
import Card31 from '@/components/comen/card/Card31'
import Section6 from '@/components/comen/section/Section6'
import Section2 from '@/components/comen/section/Section2'
import Card18Carousel1 from '@/components/comen/carousel/Card18Carousel1'
import Section23 from '@/components/comen/section/Section23'
import Section19 from '@/components/comen/section/Section19'

export default function page() {

    const howItWorks = [
        {
            number: "1",
            title: 'You refer',
            description: "Through the use of the following form, you can recommend TravelGate tours to members of your family and friends who have not yet experienced them. The number of times that you can make a reference is not limited in any way.",
            classNameTitle: "",
            classNameDescription: ""
        },
        {
            number: "2",
            title: 'They receive',
            description: "Your friends and family will be emailed with a special $100 Referee Savings promo code. Depending on the situation, any new or partially paid Travelgate bookings can be covered by this code.",
            classNameTitle: "",
            classNameDescription: ""
        },
        {
            number: "3",
            title: 'You get rewarded',
            description: "You will get an email with your earned $100 travel credit when your family and friends book their first trip using their unique code and pay in full. Your next trip might be free since there is no cap on the number of credits you can accumulate. Start spreading the love today.",
            classNameTitle: "",
            classNameDescription: ""
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

    const card18Carousel1Data = [
        {
            image: "assets/images/by-destination.png",
            title: "Get your free brochure",
            description: "Find your next escape with the Asia's leading travel brand",
            buttonText: "Request A Brochure",
            bgColor: "",
            linkLabel: "Classic Sri Lankan Delights.",
            linkHref: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        },
        {
            image: "assets/images/by-destination.png",
            title: "Award winning tours ",
            description: "From the TripAdvisor to the SLTDA Agent's Choice Awards",
            buttonText: "Search Our Tours",
            bgColor: "[#315A7A]",
            linkHref: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: ""
        }

    ]

    const section23Data1 = [
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const section23Data2 = [
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const section23Data3 = [
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const section23Data4 = [
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    const section23Data5 = [
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
        {
            question: '*Note on our hotels',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.<br><br>We update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.<br><br>If there are ever any changes to your departure, we will contact you. '
        },
    ];

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "Referral" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='w-full '>
                {/* image */}
                <div className='w-full relative'>
                    <img src="assets/images/referral/hero.png" alt="" className={`w-full md:h-[450px] h-[330px] object-cover object-bottom `} />
                    {/* title and description */}
                    <div className='absolute w-full h-full flex items-center justify-center top-0 left-0 md:px-[6.5rem] py-8 px-4'>
                        <div className='h-full w-full flex justify-center'>
                            <img src="assets/images/referral/reward-vector.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className='w-full bg-[#503454] '>
                    <div className='my-container py-4 pb-12 md:px-8'>
                        <Title2 title="Welcome to our Referral Program, only for Elite Tour Rewards members" className={` text-center text-white`} />
                        <p className={`mt-2 description lg:!text-[18px] !text-[16px] text-center font-medium whitespace-pre-line !text-white`}>Do you enjoy our trips and wish to introduce to your family and friends the passion of travel?</p>
                        <p className={`mt-8 mb-2 description lg:!text-[18px] !text-[16px] text-center font-medium whitespace-pre-line !text-white`}>For friends or relatives who have never used Travelgate, you can send $100 savings. We will give you a $100* travel credit when they book and pay in full. Win-win</p>
                    </div>
                </div>
            </div>

            {/* How it works */}
            <div className='w-full mt-12'>
                <Title2 title='How it works' className='text-center'></Title2>
                <h2 className='font-sourceSerif lg:text-[22px] md:text-[20px] text-lg text-textcolor2 text-center mt-1'>It’s as simple as 1, 2, 3...</h2>

                <div className='mt-8 my-container'>
                    <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
                        {howItWorks.map((data) => (
                            <div key={data.number} className="w-full lg:w-[calc(((100%-(16px*2))/3))] md:w-[calc(((100%-(16px*1))/2))]">
                                <Card31
                                    number={data.number}
                                    title={data.title}
                                    description={data.description}
                                    classNameTitle={data.classNameTitle}
                                    classNameDescription={data.classNameDescription}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className='w-full mt-12 bg-[#FFF9F9] py-12'>
                <div className='my-container'>
                    <Section6
                        data={wayToTravel}
                        title="Simply the best and most relevant way to travel"
                        titleClassName=""
                    />
                </div>
            </div>

            {/* Interested in One of Our Trips? */}
            <div className='w-full'>
                <Section2
                    title="Interested in One of Our Trips?"
                    description="Booking your 'Business Class' tour is easy. Find your perfect tour today to discover Premium Experiences, Premium Dining and Premium Service. Or request a quote to receive more information from one of our Travel Experts."
                    buttonLink1="/search"
                    buttonLink2="/quote"
                    bgColor='bg-[#503454]'
                    button1Icon="assets/icons/search-dark-purple.svg"
                    titleClassName=""
                    descriptionClassName=""
                    classNameButton1="text-[#503454] hover:shadow-[#503454]/50"
                    classNameButton2="hover:shadow-[#503454]/50"
                />
            </div>

            <div className='mt-12 w-full'>
                <div className='my-container'>
                    <Card18Carousel1
                        cards={card18Carousel1Data}
                        title=""
                        description=""
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>
            </div>

            <div className='my-container mt-12'>
                <Title2 title="Still have concerns? See our FAQs below:" className='text-center' />
                <div className='w-full mt-12'>
                    <h1 className={`lg:text-[24px] md:text-[20px] text-lg font-bold text-textcolor1 font-sourceSerif`}>Key terms</h1>
                    <Section23 data={section23Data1} search={false} />
                </div>
            </div>

            <div className='my-container mt-12'>
                <h1 className={`lg:text-[24px] md:text-[20px] text-lg font-bold text-textcolor1 font-sourceSerif `}>Overview</h1>
                <Section23 data={section23Data2} search={false} />
            </div>

            <div className='my-container mt-12'>
                <h1 className={`lg:text-[24px] md:text-[20px] text-lg font-bold text-textcolor1 font-sourceSerif`}>Earning advocate credits</h1>
                <Section23 data={section23Data3} search={false} />
            </div>

            <div className='my-container mt-12'>
                <h1 className={`lg:text-[24px] md:text-[20px] text-lg font-bold text-textcolor1 font-sourceSerif`}>Redeeming advocate credits</h1>
                <Section23 data={section23Data4} search={false} />
            </div>

            <div className='my-container mt-12'>
                <h1 className={`lg:text-[24px] md:text-[20px] text-lg font-bold text-textcolor1 font-sourceSerif`}>Terms and conditions</h1>
                <Section23 data={section23Data5} search={false} />
            </div>

            <div className='w-full mt-12'>
                <Section19 />
            </div>
        </div>
    )
}
