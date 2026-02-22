import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type BreadcrumbItem = {
  href?: string
  label: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className='my-container'>
      <div className='flex items-center gap-2 font-light text-xs text-textcolor1 w-full'>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.href ? (
              <Link href={item.href} className='underline'>
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && <ChevronRight size={16} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
