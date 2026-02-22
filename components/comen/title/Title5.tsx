import React from 'react'

export default function Title5({ title, className }: { title: string, className?: string }) {
  return (
    <h2 className={`text-textcolor1 font-bold md:text-base text-sm font-sourceSerif ${className}`}>{title}</h2>
  )
}
