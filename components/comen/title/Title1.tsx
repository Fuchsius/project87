import React from 'react'

export default function Title1({title}: {title: string}) {
  return (
    <h1 className="font-sourceSerif text-[28px] md:text-[32px] lg:text-[42px] font-bold text-textcolor1">{title}</h1>
  )
}
