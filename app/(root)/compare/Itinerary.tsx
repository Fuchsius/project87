import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { IoIosArrowDown } from 'react-icons/io';

export default function Itinerary({ compare, showAll, onToggle }: { compare: boolean; showAll: boolean; onToggle: () => void }) {
    const days = [
        { label: 'Day 1: Colombo', highlight: true },
        { label: 'Day 2: Colombo' },
        { label: 'Day 3: Wipattu' },
        { label: 'Day 4: Sigiriya' },
        { label: 'Day 5: Colombo' },
        { label: 'Day 6: Colombo' },
    ];
    const visibleDays = showAll ? days : days.slice(0, 4);
    return (
        <div className={`w-full bg-white overflow-hidden ${compare ? '' : 'h-0'}`}>
            {/* map */}
            <div className="w-full mt-[18px] p-[13px] pt-0">
                <ul>
                    {visibleDays.map((d, idx) => (
                        <li key={idx} className="flex items-center mt-2">
                            <GoDotFill size={18} className={`text-textcolor1 ${d.highlight ? " outline outline-1 outline-textcolor1 rounded-full outline-offset-[-2px]" : "rounded-full"}`} />
                            <p className="ml-[7px] font-figtree font-bold text-sm text-textcolor1">{d.label}</p>
                        </li>
                    ))}
                </ul>
                <div className="w-full mt-[15px] flex justify-center items-center active:text-myred cursor-pointer select-none" onClick={onToggle}>
                    <p className="uppercase font-figtree font-bold text-sm underline decoration-dotted decoration-myred hover:decoration-color2 hover:decoration-solid">{showAll ? 'SHOW LESS' : 'SHOW MORE'}</p>
                    <IoIosArrowDown size={18} className={showAll ? 'rotate-180 transition-transform' : 'transition-transform'} />
                </div>
            </div>
        </div>
    )
}
