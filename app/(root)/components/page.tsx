'use client'
import { TOUR_DATA } from '@/data/tours.data'
import { usePublicStore } from '@/stores/publicStores'
import { Fragment, useState, useEffect } from 'react'

// Filter search results
import SearchFilter from '@/components/SearchFilter'

// selector dropdown
import SelectorDropdown from '@/components/SelectorDropdown'
import ReviewSlider from '../tours1/[tourname]/ReviewSlider'
import BackButton from '@/components/comen/BackButton'
import Breadcrumb from '@/components/BreadCrumb'
import Header from '@/components/comen/header'
import MobileNav from '@/components/comen/MobileNav'
import { Toggle } from '@/components/comen/Toggle'
import MapImage from '@/components/MapImage'
import Pagination from '@/components/Pagination'
import PriceRangeSelector from '@/components/PriceRangeSelector'
import TourCard from '@/components/comen/card/TourCard'
import TourCardList from '@/components/comen/card/TourCardList'
import ComparePage from '../compare/page'

 
export default function page() {
  const {
    gridLayout,
    setGridLayout,
  } = usePublicStore()

  const [currentPage, setCurrentPage] = useState(1)
  const [isDesktop, setIsDesktop] = useState(true)

  const totalResults = 45 // TODO: replace with your real total count
  const resultsPerPage = 10 // TODO: replace with your real page size
  const totalPages = Math.ceil(totalResults / resultsPerPage)
  const handlePageChange = (page: number) => {
    const clamped = Math.max(1, Math.min(page, totalPages))
    setCurrentPage(clamped)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024) // lg breakpoint (1024px and above)
    }

    handleResize() // Check on initial render
    window.addEventListener('resize', handleResize) // Listen for window resize

    return () => window.removeEventListener('resize', handleResize) // Cleanup event listener
  }, [])

  const tour = TOUR_DATA[0]; // Using the first tour as sample data

  return (
    <>
      <div className='my-container mt-10'>
        <SearchFilter />
      </div>

      <div className='my-container mt-10'>
        <BackButton />
      </div>

      <div className='w-full mt-10'>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Compare', href: '/' }
        ]} />
      </div>

      <div className='my-container mt-10'>
        <MapImage imageSrc='/assets/images/tour-images/maps/1.jpg' />
      </div>

      <div className='my-container mt-10'>
        <Pagination
          totalResults={totalResults}
          resultsPerPage={resultsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      <div className='my-container mt-10'>
        <TourCard tour={tour} />
      </div>

      <div className='my-container mt-10'>
        <TourCardList tour={tour} />
      </div>

      <div className='my-container mt-10'>

      </div>

      <div className='my-container mt-10'>
        {/* <ReviewSlider /> */}
      </div>

      <div className='my-container mt-10'>
        <ComparePage />
      </div>
    </>
  )
}
