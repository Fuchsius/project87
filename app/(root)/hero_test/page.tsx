import React from 'react'
import Hero1 from '@/components/comen/hero/Hero1'
import Hero2 from '@/components/comen/hero/Hero2'
import Hero3 from '@/components/comen/hero/Hero3'

export default function page() {
  return (
    <div className='w-full py-[100px]'>

      <div className='w-full mx-auto'>
        <h1 className='text-center mb-4'>Hero 1</h1>
        <Hero1
          image="assets/images/tour-images/boutique-sri-lanka1.png"
          title="Ways To Travel"
          description="Ways to explore and make your travel dreams come true"
          imageClassName=""
          titleClassName=""
          descriptionClassName=""
        />
      </div>

      <div className='w-full mx-auto mt-12'>
        <h1 className='text-center mb-4'>Hero 2</h1>
        <Hero2
          image="assets/images/tour-images/boutique-sri-lanka1.png"
          title="Sri Lanka Holidays"
          description="Travel guide"
          rating={4.5}
          type={2}
          button="See All Tours"
          buttonLink=""
          imageClassName=""
          titleClassName=""
          descriptionClassName=""
        />
      </div>

      <div className='w-full mx-auto mt-12'>
        <h1 className='text-center mb-4'>Hero 3</h1>
        <Hero3
          image="assets/images/tour-images/boutique-sri-lanka1.png"
          title1="The Vibrant Metropolis of Sri  Lanka"
          title2="Colombo"
          description="Colombo"
          rating={4.5}
          imageClassName=""
          title1ClassName=""
          title2ClassName=""
          descriptionClassName=""
        />
      </div>

    </div>
  )
}
