import React from 'react'

import { Button } from '@/components/comen/button'
import Breadcrumb from '@/components/BreadCrumb'
import Title2 from '@/components/comen/title/Title2'
// hero
import Hero1 from '@/components/comen/hero/Hero1'

// section
import Section1 from '@/components/comen/section/Section1'
import Section2 from '@/components/comen/section/Section2'

// card
import Card10 from '@/components/comen/card/Card10'
import Card9 from '@/components/comen/card/Card9'
import Card2 from '@/components/comen/card/Card2'

// carousel
import Card10Carousel1 from '@/components/comen/carousel/Card10Carousel1'

// demo data 
const heroData = {
  image: "assets/images/ways-to-travel/hero.png",
  title: "Ways To Travel",
  description: "Ways to explore and make your travel dreams come true"
}

const holidayStyleData = [
  {
    image: "assets/images/ways-to-travel/holiday-style-1.png",
    title: "Luxury",
    description: "Experience pure elegance in which every element whispers uniqueness and sophistication",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/holiday-style-2.png",
    title: "Signature",
    description: "Experience travel uniquely yours, crafted with a touch of signature charm",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/holiday-style-3.png",
    title: "Premium",
    description: "Take your trip to the next level with top notch comforts that change the way you vacation",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/holiday-style-3.png",
    title: "Nature",
    description: "Experience the natural beauty of Sri Lanka",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/holiday-style-3.png",
    title: "Nature",
    description: "Experience the natural beauty of Sri Lanka",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  }
]

const toursByThemes = [
  {
    image: "assets/images/ways-to-travel/tours-by-themes-1.png",
    title: "Nature & Wildlife Holidays",
    description: "Natural beauty & animal encounters",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/tours-by-themes-2.png",
    title: "Classic Holidays",
    description: "The combination of immersion and discovery",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/tours-by-themes-3.png",
    title: "Family Holidays",
    description: "For those who go further, together",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/tours-by-themes-4.png",
    title: "Adventure Holidays",
    description: "Seize the moment of serendipity",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/tours-by-themes-5.png",
    title: "Luxury Holidays",
    description: "For those extra-curious travellers",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  }

]

const experiences = [
  {
    image: "assets/images/ways-to-travel/experience-1.png",
    title: "Be My Guest",
    description: "Experience pure elegance in which every element whispers uniqueness and sophistication",
    link: "#",
    classNameTitle: "lg:!text-[30px]",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/experience-2.png",
    title: "MAKE TRAVEL RESPONSIBLE® Experiences",
    description: "Discover thrilling experiences that push your boundaries",
    link: "#",
    classNameTitle: "lg:!text-[30px]",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/experience-3.png",
    title: "Outdoor & Nature",
    description: "Immerse yourself in rich traditions and local heritage",
    link: "#",
    classNameTitle: "lg:!text-[30px]",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/experience-4.png",
    title: "Chronicles of Culture",
    description: "Connect with breathtaking natural landscapes",
    link: "#",
    classNameTitle: "lg:!text-[30px]",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/experience-5.png",
    title: "Wild Frontiers",
    description: "Connect with breathtaking natural landscapes",
    link: "#",
    classNameTitle: "lg:!text-[30px]",
    classNameDescription: ""
  }

]

const staysWithTales = [
  {
    image: "assets/images/ways-to-travel/stays-with-tales-1.png",
    title: "Ultimate Luxury",
    description: "Experience elegant boutique stays where luxury meets remarkable beauty",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/stays-with-tales-2.png",
    title: "Boutique Luxury",
    description: "Find intimate escapes boutique hotels and exquisitely crafted villas",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/stays-with-tales-3.png",
    title: "Premium",
    description: "Unload in premium comfort where every time quality meets extraordinary hospitality",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  },
  {
    image: "assets/images/ways-to-travel/stays-with-tales-4.png",
    title: "Comfort",
    description: "Feel at home, simple stays with warmth and thoughtful touches throughout",
    link: "#",
    classNameTitle: "",
    classNameDescription: ""
  }
]

const tailorYourTour = [
  {
    id: 1,
    image: "assets/images/ways-to-travel/tailor-your-tour-1.png",
    title: "Personalise Your Tour",
    description: "TravelGate provides flexible itineraries, allowing you to tailor group size, tour style, and experiences to your preferences.",
    linkText: "FIND OUT MORE>"
  },
  {
    id: 2,
    image: "assets/images/ways-to-travel/tailor-your-tour-2.png",
    title: "Everything taken care of",
    description: "TravelGate simplifies travel by handling all logistics, allowing you to relax and enjoy moments with ease.",
    linkText: "FIND OUT MORE>"
  }
]

const offers = [
  {
    id: 1,
    image: "assets/images/ways-to-travel/offers-1.png",
    title: "Sri Lanka Travel Deals",
    description: "Our guided tours to Sri Lanka offer great savings and discounts year-round",
    button: "Search Offers"
  },
  {
    id: 2,
    image: "assets/images/ways-to-travel/offers-2.png",
    title: "Money Off Your First Trip",
    description: "Sign up for our newsletter and save EUR€250 per couple on your first trip.",
    button: "Sign-Up Now"
  },
  {
    id: 3,
    image: "assets/images/ways-to-travel/offers-3.png",
    title: "Special Offers",
    description: "Experience The TravelGate Difference at cheaper rates with our current special offers",
    button: "Search Offers"
  },
]

export default function page() {
  return (
    <div className='w-full'>
      {/* Bread crumb */}
      <div className='py-2 w-full'>
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Ways To Travel" },
        ]} />
      </div>

      {/* hero 1 */}
      <div className='mx-auto w-full'>
        <Hero1
          image={heroData.image}
          title={heroData.title}
          description={heroData.description}
          imageClassName=""
          titleClassName=""
          descriptionClassName=""
        />
      </div>

      {/* section 1 */}
      <div className='mt-12 w-full'>
        <Section1
          title="Find your ideal trip"
          description="
                        TravelGate will help you find your ideal trip whether your travel is family exploring Sri Lanka or an adventurous solo trip. With more than 50 all-inclusive excursions, your choices span the misty heights of Ella to visiting historic towns like Anuradhapura
                        
                        <br/>
                        <br/>
                        
                        TravelGate enjoys all kinds of travel, thus we will find the ideal trip plan for you whether your preferred destination is a thrilling safari in Yala National Park or a laid-back golden beach in Mirissa. Enjoy hiking? Explore the picturesque paths found on Adam's Peak or Horton Plains. Dreaming of a celebration escape? Celebrate with our unique holiday trips highlighting the rich culture and verdant scenery of Sri Lanka. Your travel theme will not matter; you will find real connections to the people and locations that define Sri Lanka as unforgettable. Of course, you will also always travel effortlessly—because we handle everything."
          button="Search Tours"
          buttonLink="/search"
          titleClassName=""
          descriptionClassName=""
          buttonClassName=""
        />
      </div>

      {/* Holiday Style */}
      <div className='mx-auto mt-12 my-container'>
        <Card10Carousel1 cards={holidayStyleData} />
      </div>

      {/* Tours by Themes */}
      <div className='mx-auto mt-12 my-container'>
        <Title2 title="Tours by Themes" className='text-center' />
        <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
          {toursByThemes.map((tour, index) => (
            <div
              key={index}
              className="w-full lg:w-[calc(((100%-(16px*2))/3))] md:w-[calc(((100%-(16px*1))/2))]"
            >
              <Card10
                image={tour.image}
                title={tour.title}
                description={tour.description}
                link={tour.link}
                classNameTitle={tour.classNameTitle}
                classNameDescription={tour.classNameDescription} />
            </div>
          ))}
        </div>
      </div>

      {/* Experiences */}
      <div className='mx-auto mt-12 my-container'>
        <Title2 title="Experiences" className='text-center' />
        <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
          {experiences.map((tour, index) => (
            <div
              key={index}
              className="w-full lg:w-[calc(((100%-(16px*4))/5))] md:w-[calc(((100%-(16px*2))/2))]"
            >
              <Card10
                image={tour.image}
                title={tour.title}
                description={tour.description}
                link={tour.link}
                classNameTitle={tour.classNameTitle}
                classNameDescription={tour.classNameDescription} />
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center mt-8 w-full'>
          <Button variant="default" size={"lg"} className="" >Search Experiences</Button>
        </div>
      </div>

      {/* Stays with Tales */}
      <div className='mx-auto mt-12 my-container'>
        <Title2 title="Stays with Tales" className='text-center' />
        <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
          {staysWithTales.map((tour, index) => (
            <div
              key={index}
              className="w-full lg:w-[calc(((100%-(16px*2))/3))] md:w-[calc(((100%-(16px*1))/2))]"
            >
              <Card10
                image={tour.image}
                title={tour.title}
                description={tour.description}
                link={tour.link}
                classNameTitle={tour.classNameTitle}
                classNameDescription={tour.classNameDescription} />
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center mt-8 w-full'>
          <Button variant="default" size={"lg"} className="" >Search Accommodation</Button>
        </div>
      </div>

      {/* Tailor Your Tour */}
      <div className='mx-auto mt-12 my-container'>
        <Title2 title="Tailor Your Tour" className='text-center' />
        <p className="text-center description">When you travel with TravelGate, our itineraries are just the starting point. We make it easy to tailor your vacation to your preferences. Whether it's the size of the group you travel with, the tour style, or the optional experiences you add to reflect your own interests, an Insight Vacations tour can be whatever you want it to be.</p>

        <div className='mt-12 w-full'>
          <div className='grid grid-cols-1 gap-4 w-full md:grid-cols-2'>
            {tailorYourTour.slice(0, 2).map((card) => (
              <Card9
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                linkText={card.linkText}
                classNameTitle="md:!text-[24px] !text-[20px] !italic !font-sourceSerif !font-semibold"
                classNameDescription="md:!text-[16px] !text-[14px] !font-normal"
                linkClassName=""
                backgroundColor="bg-bggray1"
              />
            ))}
          </div>
        </div>
      </div>

      {/* offers */}
      <div className='mx-auto mt-12 my-container'>
        <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
          {offers.map((offer) => (
            <div key={offer.id} className="w-full lg:w-[calc(((100%-(16px*2))/3))] md:w-[calc(((100%-(16px*1))/2))]">
              <Card2
                image={offer.image}
                title={offer.title}
                description={offer.description}
                button={offer.button}
                classNameTitle=""
                classNameDescription=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* Interested in One of Our Trips? */}
      <div className='mx-auto mt-12 w-full'>
        <Section2
          title="Interested in One of Our Trips?"
          description="Booking your 'Business Class' tour is easy. Find your perfect tour today to discover Premium Experiences, Premium Dining and Premium Service. Or request a quote to receive more information from one of our Travel Experts."
          buttonLink1="/search"
          buttonLink2="/quote"
          titleClassName=""
          descriptionClassName=""
          classNameButton1=""
          classNameButton2=""
        />
      </div>
    </div>
  )
}
