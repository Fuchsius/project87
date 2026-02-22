import React from 'react'

export default function Facilites({ compare }: { compare: boolean }) {
  return (
    <div className={`w-full bg-white overflow-hidden ${compare ? '' : 'h-0'}`}>
      {/* facilites */}
      <div className="w-full mt-[18px] pt-0 p-[13px]">
        <p className="font-figtree font-medium text-base">8 Breakfasts</p>
        <p className="font-figtree font-medium text-base mt-[6px]">6 Dinner</p>
      </div>
    </div>
  )
}
