"use client"

import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Title2 from '@/components/comen/title/Title2'
import { Button } from '@/components/comen/button'
import Hero2 from '@/components/comen/hero/Hero2'
import Card36 from '@/components/comen/card/Card36'
import Card34Carousel1 from '@/components/comen/carousel/Card34Carousel1'
import Section10 from '@/components/comen/section/Section10'
import Section12 from '@/components/comen/section/Section12'

export default function page() {

    const card36Data = [
        {
            image: "assets/images/climate-action/targets-1.png",
            title: "Near-term targets (2030)",
            description: [
                'Reduce the absolute GHG from scope 1 and scope 2 by 34.3% by the year 2030, starting from the base year of 2018',
                'Reduce absolute scope 3 GHG emissions from bought goods and services, business travel, and using sold goods by 29.5% in the same time frame'
            ],
            classNameTitle: "",
            classNameDescription: "",
        },
        {
            image: "assets/images/climate-action/targets-2.png",
            title: "Long-term targets (2050)",
            description: [
                'Reduce absolute scope 1, 2, and 3 GHG emissions by 93% by 2050 compared to a 2018 base year',
            ],
            classNameTitle: "",
            classNameDescription: "",
        },
        {
            image: "assets/images/climate-action/targets-3.png",
            title: "Net zero target",
            description: [
                'Reach net zero GHG emissions across the value chain by 2050 from a 2018 baseline year',
            ],
            classNameTitle: "",
            classNameDescription: "",
        }
    ]

    const card34Carousel1Data = [
        {
            bgColor: "!bg-white",
            image: "",
            title: "Measure",
            description: "Keeping a close eye on the emissions that come from our trips and other business activities.",
            icon: "assets/icons/document-red.svg",
            linkText: "",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: "",
        },
        {
            bgColor: "!bg-white",
            image: "",
            title: "Reduce",
            description: "We have set up a Carbon Fund to help us put our money where our mouth is, and it is based on science-based targets.",
            icon: "assets/icons/reduce-red.svg",
            linkText: "",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: "",
        },
        {
            bgColor: "!bg-white",
            image: "",
            title: "Restore",
            description: "Putting money into carbon removal solutions based on nature and conservation projects that work to restore our planet.",
            icon: "assets/icons/restore-red.svg",
            linkText: "",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: "",
        },
        {
            bgColor: "!bg-white",
            image: "",
            title: "Evolve",
            description: "We will continue to learn from others, invest in new technology, and support our industry's transition to a low (or zero) carbon future.",
            icon: "assets/icons/evolve-red.svg",
            linkText: "",
            link: "#",
            classNameTitle: "",
            classNameDescription: "",
            classNameLink: "",
        }
    ]

    const faq = [
        {
            question: 'What is a definite departure?',
            answer: 'A departure is shown as \'Definite Departure\' once it has reached a minimum number of guests. That particular departure will definitely run, barring any extraordinary circumstances.\n\nWe update these regularly, and you can book any departure. While it is highly unlikely a departure doesn\'t meet the minimum number of guests, you will be offered the best alternative dates or a full refund of any payment made if this is the case.\n\nIf there are ever any changes to your departure, we will contact you.'
        },
        {
            question: 'How can I book flights for my tour? What about extra hotel nights?',
            answer: 'Details about booking flights and extra hotel nights would be explained here.'
        },
        {
            question: 'How much is the deposit for a Trafalgar tour?',
            answer: 'Information about the tour deposit would be provided in this section.'
        },
        {
            question: 'What are the different kinds of experiences available?',
            answer: 'Each Trafalgar tour has a carefully-selected range of included experiences to help immerse yourself in a destination. But did you know that every tour also has a Be My Guest and MAKE TRAVEL MATTER® Experience?'
        },
        {
            question: 'Can I join a Trafalgar tour as a solo traveller?',
            answer: 'Details for solo travellers would be explained in this section.'
        },
        {
            question: 'Where can I find room options?',
            answer: 'Information about room options would be provided here.'
        }
    ];

    return (

        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full  py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/" },
                    { label: "Make Travel Responsible", href: "/" },
                    { label: "Climate Action" },
                ]} />
            </div>

            {/* hero 2 */}
            <div className='mx-auto w-full'>
                <Hero2
                    image="assets/images/climate-action/hero.jpg"
                    title="Climate Action"
                    description="Our Journey to Net Zero"
                    type={2}
                    button=""
                    buttonLink=""
                    imageClassName=""
                    titleClassName=""
                    descriptionClassName="lg:!text-[24px] md:!text-[20px] !text-[16px] font-semibold font-figtree "
                />
            </div>

            {/* Travelgate's climate action plan */}
            <div className='w-full'>
                <div className='w-full md:grid md:grid-cols-12 px-4 mt-12'>
                    <div className={`col-span-8 col-start-3 `}>
                        <Title2 title="Travelgate's climate action plan" className={`text-center mb-4 `} />

                        <p className={`mt-2 description text-center !font-semibold whitespace-pre-line lg:text-[24px] md:text-[20px] text-lg`} dangerouslySetInnerHTML={{ __html: "Our aim: Net Zero emissions by 2050. And here's how we plan to get there." }}></p>

                        <p className={`mt-2 description text-center font-sourceSerif whitespace-pre-line`} dangerouslySetInnerHTML={{ __html: "Our main goal is to take action against climate change. We have promised to measure our impact, lower our emissions, fix damaged environments. and keep getting better at what we do. Some of these are helping innovative projects that use natural resources to store carbon and teaming up with people who share our vision for a better future." }}></p>
                    </div>
                </div>

                <div className='w-full flex items-center justify-center mt-4'>
                    <Button variant="default" size={"lg"} className={`font-bold`}>Read More</Button>
                </div>
            </div>

            <div className='my-container mt-12'>
                <Title2 title="Our science-based targets" className='text-center' />
                <p className='mt-2 description-2 !font-normal text-center'>
                    We know how to act on climate change. The Science Based Target initiative (SBTI) has confirmed our company's targets for the near term, long term, and net zero periods. We are the first tour operator in Asia to do this. By reaching these goals, we are helping the world reach its goal of keeping the temperature rise below 1.5 degrees Celsius by the middle of the century.
                </p>
                <div className='mt-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                    {card36Data.map((card, index) => (
                        <Card36
                            key={index}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                            classNameTitle={card.classNameTitle}
                            classNameDescription={card.classNameDescription}
                        />
                    ))}
                </div>
            </div>

            <div className='w-full mt-12'>
                <div className='my-container py-12 bg-mygreen'>
                    <Card34Carousel1
                        cards={card34Carousel1Data}
                        title="4 steps to Climate Action"
                        description="Progress takes time, but we're in it for the long haul. We're dedicated to learning and adapting as human behavior, technology, and innovation continue to evolve alongside us."
                        size0={1}
                        size768={3}
                        size1024={4}
                        size1280={4}
                        minSize={4}
                        classNameTitle="text-white"
                        classNameDescription="text-white"
                    />
                </div>
            </div>

            <div className='w-full bg-[#E2EBE6] py-12'>
                <div className='my-container'>

                    <Title2 className='text-center' title='What do we mean by science-based targets?'></Title2>
                    <p className='description !text-sm text-center mt-2'>So basically, science-based goals are like a reality check for us. They help us make sure we're doing the right things, working hard enough, and really doing what we say we're going to do</p>

                    <p className='description !text-sm text-center mt-2'>The Science Based Targets initiative (SBTI) checks these goals very carefully to make sure they really match the emission cuts we need to keep the planet from getting too hot. SBTI is pretty much the name everyone trusts when it comes to cutting down on carbon emissions. In 2023. we at TGT became the first tour company in Sri Lanka to support science-based Net Zero goals that had passed their strict review.</p>

                    <p className=' md:!text-lg text-base text-center mt-4 italic font-bold font-sourceSerif text-textcolor1'>Travelling while cutting your emissions</p>

                    <p className='description !text-sm text-center mt-2'>Want to help out? We had a feeling you would, and that's why we think you're so great. While we're out exploring, here's how we can all work together to lower our carbon footprint.</p>
                </div>
            </div>

            <div className='my-container mt-12'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center'>
                    <div className='order-2 md:order-1 w-full lg:pr-24 md:pr-12 pr-0 md:mt-0 mt-8'>
                        <div className='w-full'>
                            <Title2 title="A brave step towards putting the planet first" className=''></Title2>

                            <div className=''>
                                <p
                                    className={`mt-2 description-2 !font-normal whitespace-pre-line`}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            "In 2023, we started a Carbon Fund to show how serious we are about decarbonising. The goal of the fund is to pay for projects that will lower our business's carbon emissions. This fund is a big step towards putting the planet first. It will only be used for projects that help us reach net zero and heal the planet. Future Impact Reports will talk about how this fund has helped.<br><br>To help us reach our goal of net zero, the AmityGate Foundation will focus on and fund nature-based solutions that have been created to fight climate change and the rapid loss of biodiversity. Find out more about AmityGate and the work we do.<br><br>We suggest that you read about how we measure carbon, find out more about our Climate Action efforts, and look at our most recent Impact Report at our <a href='' class='underline-1'>Impact Hub.</a>"
                                    }}
                                ></p>
                            </div>

                        </div>

                    </div>
                    <div className='w-full order-1 md:order-2'>
                        <img src="assets/images/climate-action/planet.jpg" alt="" className='w-full aspect-video object-cover rounded-md' />
                    </div>
                </div>
            </div>

            <div className='my-container mt-12'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center'>
                    <div className='order-2 md:order-2 w-full lg:pl-24 md:pl-12 pl-0 md:mt-0 mt-8'>
                        <div className='w-full'>
                            <Title2 title="The AmityGate Foundation Projects" className=''></Title2>

                            <div className=''>
                                <p
                                    className={`mt-2 description-2 !font-normal whitespace-pre-line`}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            "But that's not all there is. The AmityGate Foundation goes above and beyond by putting money into nature-based solutions that fight climate change and protect our valuable biodiversity. <br><br> One of their newest projects helps Trees For Life Sri Lanka, which is working to bring back Sri Lanka's globally important rainforest ecosystems and native wildlife and make the Central Highlands wild again."
                                    }}
                                ></p>
                                <a href='' className='mt-4 flex description-2 !font-normal whitespace-pre-line underline-1'>Look at all the projects that AmityGate helps.</a>
                            </div>

                        </div>

                    </div>
                    <div className='w-full order-1 md:order-1'>
                        <img src="assets/images/climate-action/amitygate.jpg" alt="" className='w-full aspect-video object-cover rounded-md' />
                    </div>
                </div>
            </div>

            <div className='my-container mt-12'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center'>
                    <div className='order-2 md:order-1 w-full lg:pr-24 md:pr-12 pr-0 md:mt-0 mt-8'>
                        <div className='w-full'>
                            <Title2 title="Try more veggie options" className=''></Title2>

                            <div className=''>
                                <p
                                    className={`mt-2 description-2 !font-normal whitespace-pre-line`}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            "Do you know what's surprisingly strong? Your plate for lunch. Meat production is the biggest source of methane, a greenhouse gas that is 86 times more powerful than CO, Isn't that crazy? But here's the cool part, when you choose veggie or vegan meals, you're giving the world a little high five.<br><br>And you know what? There are a lot of really tasty choices out there right now. Try a new plant-based dish next time. Each tasty bite makes a difference. You might find your new favourite meal and some superpowers that will save the world!</a>"
                                    }}
                                ></p>
                            </div>

                        </div>

                    </div>
                    <div className='w-full order-1 md:order-2'>
                        <img src="assets/images/climate-action/veggie.jpg" alt="" className='w-full aspect-video object-cover rounded-md' />
                    </div>
                </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className='w-full mt-12'>
                <div className='my-container'>
                    <Section10
                        data={faq}
                        classNameTitle="text-center"
                    />
                </div>
            </div>

            <div className='mt-12 w-full'>
                <Section12 />
            </div>


        </div>

    )
}
