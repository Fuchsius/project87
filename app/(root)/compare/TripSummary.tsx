import React from 'react'

export default function TripSummary({ tripDetails, compare }: { tripDetails: boolean; compare: boolean }) {
    return (
        <div className={`w-full mt-[45px] bg-white overflow-hidden ${tripDetails ? '' : 'h-0'} ${compare ? '' : 'h-0'}`}>
            <div className="p-[13px] h-[100px] bg-bggray1">
                <p className="font-figtree font-medium text-base text-textcolor1">9-Days Botique Tour of Kandy,
                    Yala, Galle and Hikkaduwa</p>
            </div>
        </div>
    )
}
