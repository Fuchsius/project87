"use client"
import React from 'react'
import Image from 'next/image'

import TripMap from '@/components/itinerary/TripMap';
import Advantages from '@/components/itinerary/Advantages';
import Title2 from '@/components/comen/title/Title2';
import Title3 from '@/components/comen/title/Title4';
import DayByDayItinerary from "@/components/itinerary/DayByDayItinerary";
import HandPickedHotel from '@/components/itinerary/HandPickedHotel';
import AboutThisTrip from '@/components/itinerary/AboutThisTrip';
import IncludedInYourTour from '@/components/itinerary/IncludedInYourTour';
import FrequentlyAskedQuestions from '@/components/itinerary/FrequentlyAskedQuestions';
import WeMakeTravelResponsible from '@/components/itinerary/WeMakeTravelResponsible';
import UneditedReviews from '@/components/itinerary/UneditedReviews';


export default function Youritinerary({ advantages, MAPICONS }: { advantages: any; MAPICONS: { icon: string; name: string }[] }) {
    const [showCalendar, setShowCalendar] = React.useState(false)
    const [calendarYear, setCalendarYear] = React.useState<number>(new Date().getFullYear())

    const openCalendarForYear = (year: number) => {
        setCalendarYear(year)
        setShowCalendar(true)
    }

    const closeCalendar = () => setShowCalendar(false)
    const prevYear = () => {
        setCalendarYear((y) => {
            const idx = tripYears.indexOf(y)
            return idx > 0 ? tripYears[idx - 1] : y
        })
    }
    const nextYear = () => {
        setCalendarYear((y) => {
            const idx = tripYears.indexOf(y)
            return idx >= 0 && idx < tripYears.length - 1 ? tripYears[idx + 1] : y
        })
    }

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]

    const tripYears = [2025, 2026, 2027];
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() // 0-based index
    const atFirstYear = calendarYear === tripYears[0]
    const atLastYear = calendarYear === tripYears[tripYears.length - 1]
    const [selected, setSelected] = React.useState<{ year: number; month: number } | null>(null)
    const calendarRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (!showCalendar) return

        const onDocClick = (e: MouseEvent) => {
            if (!calendarRef.current) return
            const target = e.target as Node
            if (!calendarRef.current.contains(target)) {
                setShowCalendar(false)
            }
        }

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setShowCalendar(false)
        }

        document.addEventListener('mousedown', onDocClick)
        document.addEventListener('keydown', onKeyDown)
        return () => {
            document.removeEventListener('mousedown', onDocClick)
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [showCalendar])

    return (
        <div className=" w-full">
            <div className=" w-full grid grid-cols-1 md:grid-cols-2">
                <div className="w-full relative aspect-[4/3] md:h-full">
                    <Image
                        src={"/assets/images/tour-images/itinerary1.png"}
                        alt="image"
                        fill
                        className=" w-full h-full object-cover object-center"
                    />
                </div>
                <div className="md:px-12 px-4 py-5">
                    <div className=" w-full">
                        <div className='flex items-center gap-2.5 relative'>
                            <div className='flex items-center gap-2.5'>
                                <img src="/assets/icons/calender-dark.svg" alt="" />
                                <p className='sub-title'>Trip Year</p>
                            </div>
                            <div className='flex items-center gap-2.5 relative'>
                                <div className='flex items-center border border-e6 rounded-md overflow-hidden'>
                                    {tripYears.map((year) => (
                                        <button
                                            key={year}
                                            onClick={() => openCalendarForYear(year)}
                                            className={`font-medium py-1 w-[70px] ${calendarYear === year ? 'bg-myblue text-white' : 'text-textcolor1'}`}
                                            aria-controls='itinerary-calendar'
                                            aria-expanded={showCalendar}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* calender month picker */}
                            <div
                                ref={calendarRef}
                                className={`absolute lg:left-[100px] left-[20px] top-0 w-[calc(70px*4)] transition-all duration-300 ease-out 
                                    ${showCalendar ? 'opacity-100 translate-y-9 pointer-events-auto' : 'opacity-0 -translate-y-0 pointer-events-none'}`}
                            >
                                <div
                                    id='itinerary-calendar'
                                    className='w-full max-w-md rounded-md bg-white shadow-lg'
                                    role='dialog'
                                    aria-label='Select trip year and month'
                                >
                                    <div className='flex items-center justify-between p-6'>
                                        <button
                                            type='button'
                                            onClick={prevYear}
                                            aria-label='Previous year'
                                            disabled={atFirstYear}
                                            className={`w-8 h-8 flex justify-center items-center rounded-full bg-bggray1 p-2
                                                    ${atFirstYear ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <img src='/assets/icons/right-arrow.svg' alt='' className='w-full h-full rotate-180 opacity-60' />
                                        </button>
                                        <div className=''>
                                            <span className="text-lg font-figtree font-bold text-myblue text-center">{calendarYear}</span>
                                        </div>
                                        <button
                                            type='button'
                                            onClick={nextYear}
                                            aria-label='Next year'
                                            disabled={atLastYear}
                                            className={`w-8 h-8 flex justify-center items-center rounded-full bg-bggray1 p-2
                                                    ${atLastYear ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <img src='/assets/icons/right-arrow.svg' alt='' className='w-full h-full opacity-60' />
                                        </button>
                                    </div>
                                    <div className='grid grid-cols-4 p-6 pt-0'>
                                        {months.map((m, idx) => {
                                            const isPastInCurrentYear = calendarYear === currentYear && idx < currentMonth
                                            const isBeforeCurrentYear = calendarYear < currentYear
                                            const disabled = isBeforeCurrentYear || isPastInCurrentYear
                                            const isCurrentMonth = calendarYear === currentYear && idx === currentMonth
                                            const isSelected = selected && selected.year === calendarYear && selected.month === idx
                                            const showTodayHighlight = !selected && isCurrentMonth
                                            return (
                                                <button
                                                    key={m}
                                                    type='button'
                                                    disabled={disabled}
                                                    onClick={() => { setSelected({ year: calendarYear, month: idx }); setShowCalendar(false); }}
                                                    aria-current={isSelected ? 'date' : undefined}
                                                    className={`text-base py-4 rounded-md text-myblue font-bold ${disabled
                                                        ? 'opacity-50 cursor-not-allowed'
                                                        : isSelected || showTodayHighlight
                                                            ? 'bg-myblue text-white'
                                                            : 'hover:bg-mylightblue2 hover:text-white'
                                                        }`}
                                                >
                                                    {m}
                                                </button>
                                            )
                                        })}
                                    </div>
                                    <div className='flex items-center justify-center p-6 pt-2'>
                                        <button
                                            type='button'
                                            onClick={closeCalendar}
                                            className='text-myblue text-sm font-semibold hover:opacity-90 '
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Title2 title="10 Day Exploring Sri Lanka’s Rich Culture and Stunning Natural Beauty" />
                        </div>


                        <p className="mt-2 max-w-[594px] description">
                            Lorem Ipsum isfass simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesLorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        <div className=" grid grid-cols-2 mt-9 mb-5 gap-10">
                            <div className=" w-full flex flex-1 items-start">
                                <div className=" flex flex-col">
                                    <div className=" flex items-center gap-2.5">
                                        <img src="/assets/icons/calender-dark.svg" alt="" />
                                        <h2 className='sub-title'>Travel & Accommodation</h2>
                                    </div>
                                    <p className=" description mt-3">
                                        <span className="flex">
                                            14 days, 2 countries and 7 cities{" "}
                                            <img src="/assets/icons/question-mark.svg" alt="" className='w-6 h-6' />
                                        </span>
                                        <span className='description'> 13 nights accommodation</span>
                                    </p>
                                </div>
                            </div>

                            <div className=" w-full flex flex-1 items-start">
                                <div className=" flex flex-col">
                                    <div className=" flex items-center gap-2.5">
                                        <img src="/assets/icons/meals.svg" alt="" />
                                        <h2 className='sub-title'>Meals</h2>
                                    </div>
                                    <p className="description mt-3">
                                        9 Breakfasts, 2Lunches, 6 Dinners
                                    </p>
                                </div>
                            </div>

                            <div className=" w-full flex flex-1 items-start">
                                <div className=" flex flex-col">
                                    <div className=" flex items-center gap-2.5">
                                        <img src="/assets/icons/walking-man.svg" alt="" />
                                        <h2 className='sub-title'>Activity Level</h2>
                                    </div>
                                    <p className=" description mt-3 flex">
                                        Balanced{" "}
                                        <img src="/assets/icons/question-mark.svg" alt="" className='w-6 h-6' />
                                    </p>
                                </div>
                            </div>

                            <div className=" w-full flex flex-1 items-start">
                                <div className=" flex flex-col">
                                    <div className=" flex items-center gap-2.5">
                                        <img src="/assets/icons/map-pin.svg" alt="" />
                                        <h2 className='sub-title'>Itinerary</h2>
                                    </div>
                                    <p className=" description mt-3 underline underline-offset-4 decoration-myred decoration-dotted hover:decoration-solid cursor-pointer">
                                        View day-by-day trip itinerary
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className=" w-full rounded-md border border-e6 p-4 flex items-center">
                            <div className=" w-full">
                                <div className=" flex items-center justify-between ">
                                    <Title3 title="Looking to book in a group of 15 or more?" />
                                </div>
                                <p className="description-2 mt-2">
                                    Deals, savings, and special private holiday choices are also available plus if you require a different date or itinerary change we can create a custom trip. Get in touch to get further information.
                                </p>
                            </div>
                            <div className="w-auto ml-4">
                                <img src="/assets/icons/right-arrow.svg" alt="" className='w-6 h-6' />
                            </div>
                        </div>

                        <div className="mt-5 sub-title">
                            Trip code: <span className="text-base font-medium text-textcolor3">CCTG- P</span>
                        </div>
                    </div>
                </div>
            </div>

            < div className="my-container mt-12" >
                <div className="text-center">
                    <Title2 title="Your advantages of booking with Travel Gate" />
                </div>

                <div className="mt-6">
                    <Advantages advantages={advantages} />
                </div>
            </div >

            {/* WE MAKE TRAVEL RESPONSIBLE */}
            <div className=" my-container mt-12">
                <div className=" w-full flex p-4 relative bg-mygreen rounded-md overflow-hidden items-center justify-between">
                    <div className="w-full h-full flex items-center justify-center relative">
                        <span className="text-white text-2xl font-medium font-oswald tracking-wide uppercase">
                            WE MAKE TRAVEL RESPONSIBLE <sup>®</sup>
                        </span>
                    </div>

                    <button className="px-7 py-3 bg-white inline-flex justify-center items-center  my-auto text-nowrap rounded-full text-textcolor1 font-bold">
                        Find Out More
                    </button>
                </div>
            </div>

            <TripMap />

            {/* <Itinerary /> */}
            <DayByDayItinerary />

            {/* Hand-picked Hotels */}
            <HandPickedHotel />

            {/* About This Trip */}
            <AboutThisTrip />

            {/* Included In Your Tour */}
            <IncludedInYourTour />

            {/* Frequently Asked Questions */}
            <FrequentlyAskedQuestions />

            {/* We Make Travel Responsible */}
            <WeMakeTravelResponsible />

            {/* Unedited Reviews */}
            <UneditedReviews />

        </div>
    )
}
