"use client"

import React from 'react'
import Title2 from '../title/Title2'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Section17({ title, description, videoId }: { title: string, description: string, videoId: string }) {
    return (
        <div className='w-full'>
            {(title || description) &&
                <div className='w-full px-4 md:grid grid-cols-12 mb-6'>
                    <div className='col-span-8 col-start-3'>
                        {title && <Title2 title={title} className='text-center' />}
                        {description && <p className=' description-2 text-center !font-normal'>{description}</p>}
                    </div>
                </div>
            }
            <div className='lg:my-container md:w-full my-container lg:grid grid-cols-12 lg:!px-[10%] '>
                <div className='col-span-10 col-start-2 aspect-video rounded-sm overflow-hidden'>
                    <LiteYouTubeEmbed
                        id={videoId}
                        title=""
                        params="controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&fs=0&autohide=1&playsinline=1&enablejsapi=1"
                    />
                </div>
            </div>
        </div>
    )
}
