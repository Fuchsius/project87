import React from 'react'

export default function Title4({ title , className }: { title: string , className?: string }) {
    return (
        <h2 className={`text-textcolor1 font-bold md:text-lg text-base font-sourceSerif ${className}`}>{title}</h2>
    )
}
