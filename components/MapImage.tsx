"use client"
import React, { useState } from 'react'
import { CgMaximizeAlt } from 'react-icons/cg'
import ImageZoomViewer from './comen/ImageZoomViewer'
import Image from 'next/image'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

type MapImageProps = {
  imageSrc: string
  alt?: string
  width?: string
  height?: string
  zoomIn?: boolean
  zoomOut?: boolean
  drag?: boolean
  initialScale?: number
}

export default function MapImage({ imageSrc, alt = 'image', width, height, zoomIn, zoomOut, drag, initialScale }: MapImageProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const imgClass = width || height
    ? `${width ?? ''} ${height ?? ''} object-contain object-center`
    : 'max-w-none max-h-none'

  return (
    <>
      <div className="w-full h-full relative bg-white overflow-auto flex items-center justify-center">
        <TransformWrapper initialScale={initialScale} centerOnInit wheel={{ disabled: true }} panning={{ disabled: !drag }}>
          {({ zoomIn: zi, zoomOut: zo }) => (
            <>
              <TransformComponent>
                <img
                  src={imageSrc}
                  alt={alt}
                  className={imgClass}
                />
              </TransformComponent>
              <div className="absolute right-4 top-4 flex flex-col gap-2">
                {zoomIn && (
                  <button
                    onClick={() => zi()}
                    aria-label="Zoom in"
                    className=" bg-white border border-border2 flex items-center justify-center w-8 h-8"
                  >
                    <img src="/assets/icons/plus.svg" alt="" />
                  </button>
                )}
                {zoomOut && (
                  <button
                    onClick={() => zo()}
                    aria-label="Zoom out"
                    className="bg-white border border-border2 flex items-center justify-center w-8 h-8"
                  >
                    <img src="/assets/icons/minus.svg" alt="" />
                  </button>
                )}
                <button
                  onClick={() => setIsViewerOpen(true)}
                  aria-label="Open fullscreen"
                  className="bg-white border border-border2 flex items-center justify-center w-8 h-8"
                >
                  <img src="/assets/icons/expand.svg" alt="" />
                </button>
              </div>
            </>
          )}
        </TransformWrapper>
      </div>

      {isViewerOpen && (
        <ImageZoomViewer
          imageSrc={imageSrc}
          onClose={() => setIsViewerOpen(false)}
          opend={isViewerOpen}
        />
      )}
    </>
  )
}
