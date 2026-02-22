import React from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero1 from '@/components/comen/hero/Hero1'
import Section1 from '@/components/comen/section/Section1'
import Section24 from '@/components/comen/section/Section24'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import { TOUR_DATA } from '@/data/tours.data'
import Section25 from '@/components/comen/section/Section25'
import Card30 from '@/components/comen/card/Card30'
import Title2 from '@/components/comen/title/Title2'
import Section6 from '@/components/comen/section/Section6'

export default function page() {

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

    return (
        <div className='w-full'>
            {/* Bread crumb */}
            <div className='w-full  py-2'>
                <Breadcrumb items={[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/" },
                    { label: "Tour Differently" },
                ]} />
            </div>

            <div className='w-full md:grid md:grid-cols-12 px-4 mt-12'>
                <div className={`col-span-8 col-start-3 `}>
                    <Title2 title="Request a brochure" className={`text-center mb-4 `} />

                    <p className={`mt-2 description text-center !font-bold whitespace-pre-line`} dangerouslySetInnerHTML={{ __html: "Explore our family of brands, from budget to luxe and everything in between, we have the perfect tour brand for you." }}></p>

                    <p className={`mt-6 description text-center font-sourceSerif whitespace-pre-line`} dangerouslySetInnerHTML={{ __html: "To get a brochure in the mail, just ask for one. You can also view a digital brochure online and help us make fewer printed brochures, which will help us reach United Nations Sustainable Development Goal 12: Responsible Consumption and Production" }}></p>


                    <p className='description text-center font-bold mt-8'>
                        Are you a travel agent?{' '}
                        <Link href='#' className='underline-1 font-bold text-textcolor1'>
                            Click here
                        </Link>{' '}
                        to order your brochures.
                    </p>

                </div>
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


        </div>

    )
}
