import React from 'react'

export default function Important({ title }: { title: string }) {
    return (
        <div className='w-fit pl-4 pr-8 py-2 bg-mygreen relative flex after-trangle !important'>
            <p className="text-white font-bold text-sm">{title}</p>
        </div>
    )
}
