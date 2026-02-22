import React from 'react'
import MapImage from '@/components/MapImage'

export default function OverviewMap({ trip, compare }: { trip: any; compare: boolean }) {
    return (
        <div className={`w-full bg-white overflow-hidden ${compare ? '' : 'h-0'}`}>
            {/* map */}
            <div className="w-full ">
                <div className="w-full h-[200px]  p-[13px] bg-bggray1">
                    <MapImage imageSrc={trip.mapImageSrc} alt={trip.title} width="100%" height="100%" drag={false} initialScale={.5} />
                </div>
            </div>
        </div>
    )
}
