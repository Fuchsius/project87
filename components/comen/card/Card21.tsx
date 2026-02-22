"use client"

import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


export default function Card21({ title1, title2, description, image, videoId, classNameTitle1, classNameDescription, classNameTitle2 }: { title1: string, title2: string, description: string, image: string, videoId: string, classNameTitle1: string, classNameDescription: string, classNameTitle2: string }) {

    return (
        <div className='w-full h-full'>
            <div className='w-full relative'>
                <div className='w-full aspect-video group cursor-pointer'>
                    {/* <LiteYouTubeEmbed
                        id="nxWNyTiE7J0"
                        title=""
                        poster={"/assets/images/tour-images/boutique-sri-lanka.png" as any}
                        style={{ backgroundImage: 'url("/assets/images/tour-images/boutique-sri-lanka.png")' }}
                        playerClass="lty-playbtn"
                        params="controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&fs=0&autohide=1&playsinline=1&enablejsapi=1"
                    /> */}
                    <div className='relative w-full h-full'>
                        <img src={image} alt="" className='w-full h-full object-cover' />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full w-[50px] h-[50px] flex items-center justify-center group-hover:bg-black/50 transition-all duration-300'>
                            <img src="/assets/icons/play-1.svg" alt="" />
                        </div>
                    </div>

                </div>
                {/* <div className='absolute bottom-0 left-0 px-4 py-4'>
                    <h1 className='text-white font-sourceSerif text-[26px]'>{title1}</h1>
                    <p className='text-white font-sourceSerif text-[10px] bg-myred p-[1px]'>{description}</p>
                </div> */}
            </div>
            <div className='w-full bg-white p-4 h-[120px] flex '>
                <h1 className='font-sourceSerif lg:text-[20px] md:text-lg text-base text-mygreen3 font-bold line-clamp-3'>{title2}</h1>
            </div>
            <div className='w-full mt-8'>
                <h4 className='font-base font-bold text-white'>See trips</h4>
            </div>
        </div>
    )
}
