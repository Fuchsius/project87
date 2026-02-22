import React from 'react'

export default function CompareBasicInfo({ basicInfo, compare }: { basicInfo: boolean; compare: boolean }) {
    return (
        <div className={`w-full bg-white overflow-hidden ${basicInfo ? 'block' : 'h-0'} ${compare ? 'block' : 'h-0'} relative z-10`}>
            <div className="w-full mt-[45px]">
                <div className="flex items-center w-full p-[13px] bg-bggray1">
                    <div className="">
                        <img src="assets/icons/calender-dark.svg" alt="" className='w-[16px] h-[16px]' />
                    </div>
                    <div className="">
                        <p className="font-figtree font-medium text-base ml-[7px] text-textcolor1">9 days</p>
                    </div>
                </div>

                <div className="flex items-center w-full p-[13px] pt-[10px] pb-[10px]">
                    <div className="">
                        <img src="assets/icons/locations-dark.svg" alt="" className='w-[16px] h-[16px]' />
                    </div>
                    <div className="">
                        <p className="font-figtree font-medium text-base ml-[7px] text-textcolor1">5 Locations</p>
                    </div>
                </div>

                <div className="flex w-full p-[13px] pt-[10px] pb-[66px] bg-bggray1">
                    <div className="mt-1">
                        <img src="assets/icons/flag-dark.svg" alt="" className='w-[16px] h-[16px]' />
                    </div>
                    <div className="">
                        <p className="font-figtree font-medium text-base ml-[7px] text-textcolor1">1 Country</p>
                        <p className="font-figtree font-medium text-base ml-[7px] text-textcolor1">Sri Lanka</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
