import React from 'react'

export default function Title2({title, className}: {title: string, className?: string}) {
  return (
    <h2 className={`font-sourceSerif text-[22px] md:text-[28px] lg:text-[32px] font-bold text-textcolor1 ${className || ''}`}>{title}</h2>
  )
}
