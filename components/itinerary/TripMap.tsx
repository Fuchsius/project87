import React from 'react'
import MapImage from '@/components/MapImage';
import { IoIosArrowDown } from "react-icons/io";
import Title2 from '@/components/comen/title/Title2';

export default function TripMap() {

    const [showLegend, setShowLegend] = React.useState(false)
    const legendItems = [
        { icon: "/assets/icons/dot.svg", label: "Placed visited" },
        { icon: "/assets/icons/dot.svg", label: "Optional place visited" },
        { icon: "/assets/icons/one-light.svg", label: "Central Hotels + Nights" },
        { icon: "/assets/icons/one-dark.svg", label: "Scenic Hotels + Nights" },
        { icon: "/assets/icons/house-1.svg", label: "UNESCO Heritage Site" },
        { icon: "/assets/icons/flight-light.svg", label: "Join/Leave Options" },
        { icon: "/assets/icons/flight-dark.svg", label: "Internal Flight" },
        { icon: "/assets/icons/ship-light.svg", label: "Cruise" },
        { icon: "/assets/icons/train-light.svg", label: "Train Route" },
    ]

    return (
        < div className="w-full md:my-container mt-12" >
            <div className="text-center">
                <Title2 title="Trip map & itinerary" />
            </div>
            <div className="w-full shadow-primary md:grid md:grid-cols-8 md:gap-4 flex flex-col rounded-md mt-8">

                <div className="lg:col-span-6 md:col-span-5">
                    <MapImage
                        imageSrc="/assets/images/srilankamap.png"
                        alt="Trip map & itinerary"
                        width='w-full'
                        height='max-h-[600px]'
                        zoomIn={true}
                        zoomOut={true}
                        drag={true}
                        initialScale={1}
                    />
                </div>
                <div className="md:col-span-3 lg:col-span-2 flex items-center justify-center">
                    <div className="w-full">
                        <div className={`w-full md:pointer-events-none px-4 py-2 md:p-0 relative border-border2 flex items-center justify-between cursor-pointer ${showLegend ? '' : 'md:shadow-none shadow-sm'}`} onClick={() => setShowLegend(!showLegend)}>
                            <p className="text-textcolor1 !text-base md:font-light font-bold">Legend</p>
                            <IoIosArrowDown className={`w-6 h-6 block md:hidden transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] text-textcolor1 ${showLegend ? 'rotate-180' : ''}`} />
                            {/* border bottom */}
                            <div className={`md:hidden absolute bottom-0 left-0 flex items-center justify-center w-full ${showLegend ? '' : 'hidden'}`}>
                                <div className='border-b w-[calc(100%-2rem)] h-px bg-border2'></div>
                            </div>
                        </div>
                        <div className="w-full px-4 py-2 md:p-0 ">
                            <ul className={` md:block grid grid-cols-2 gap-x-4 transition-all duration-300 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] overflow-hidden ${showLegend ? 'h-auto' : 'h-0 md:h-auto'}`}>
                                {legendItems.map((item, idx) => (
                                    <li key={idx} className='flex items-center gap-2 py-2'>
                                        <img src={item.icon} alt="" />
                                        <span className='sub-title !text-base'>{item.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
