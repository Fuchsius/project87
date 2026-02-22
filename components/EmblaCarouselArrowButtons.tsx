"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

type PropType = {
  children: React.ReactNode
  onClick: () => void
  disabled: boolean
  className?: string
}

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, onClick, disabled, className } = props

  return (
    <button
      className={`cursor-pointer touch-manipulation rounded-full border-0 bg-white p-3 text-black shadow-highlight transition-all duration-200 hover:bg-white hover:shadow-lg hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-90 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, onClick, disabled, className } = props

  return (
    <button
      className={`cursor-pointer touch-manipulation rounded-full border-0 bg-white p-3 text-black shadow-highlight transition-all duration-200 hover:bg-white hover:shadow-lg hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-90 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  )
}
