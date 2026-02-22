import React from 'react'
import RenderStar from '@/components/RenderStar'

export default function Card20({ title, rating, content, feedbackAuthor,link ,linkText, classNameTitle, classNameDescription, classNameAuthor, classNameLink }: { title: string, rating: number, content: string, feedbackAuthor: string,link: string,linkText: string, classNameTitle: string, classNameDescription: string, classNameAuthor: string, classNameLink: string }) {
  return (
    <div className='w-full'>
      <div className="min-w-full md:min-w-[50%] p-4">
        <div className="p-6 h-full text-center text-textcolor1">
          <h3 className={`font-bold text-2xl ${classNameTitle}`}>{title}</h3>
          <div className="flex items-center justify-center my-4">
            <RenderStar rating={rating} ratingClassName="hidden" />
          </div>
          <p className={`text-sm mb-6 line-clamp-3 ${classNameDescription}`}>{content}</p>
          <p className={`text-sm font-bold ${classNameAuthor}`}>-{feedbackAuthor}., <a href={link} className={`underline-1 ${classNameLink}`}>{linkText}</a></p>
        </div>
      </div>
    </div>
  )
}
