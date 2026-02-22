import React from 'react'

export default function Title3({title, className}: {title: string, className?: string}) {
  return (
        <h2 className={`font-sourceSerif text-[18px] md:text-[24px] lg:text-[28px] font-bold text-textcolor1 ${className || ''}`}>{title}</h2>
  )
}
