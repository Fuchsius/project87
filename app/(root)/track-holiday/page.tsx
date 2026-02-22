import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero1 from '@/components/comen/hero/Hero1'
import React from 'react'
import { TOUR_DATA } from '@/data/tours.data'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import Section14 from '@/components/comen/section/Section14'
import Card21Carousel1 from '@/components/comen/carousel/Card21Carousel1'
import Section16 from '@/components/comen/section/Section16'
import Section6 from '@/components/comen/section/Section6'
import Card24Carousel1 from '@/components/comen/carousel/Card24Carousel1'
import Section7 from '@/components/comen/section/Section7'
import Card2 from '@/components/comen/card/Card2'
import Section19 from '@/components/comen/section/Section19'
import Section18 from '@/components/comen/section/Section18'
import Card18Carousel1 from '@/components/comen/carousel/Card18Carousel1'

export default function page() {


  const tourData = TOUR_DATA;

  const inspirationData = [
    {
      image: "assets/images/track-holiday/inspiration-1.png",
      title: "Discover authentic hidden gems",
      description: "Give up the tourist traps and welcome genuine discovery. Our off the beaten track holidays allow you to experience your destination like a local, going beyond the typical attractions. Explore secret locations, wander secret alleyways, and get to know a place's heart in ways that few visitors do. If you enjoy adventure and discovery, this is the trip for you.",
      linkLabel: "Discover Sri Lanka.",
      linkHref: "#",
    },
    {
      image: "assets/images/track-holiday/inspiration-2.png",
      title: "Savor true local flavors",
      description: "Savour the true nature of your destination through the flavours that it offers. From bustling street markets to farm fresh dining, authentic regional cuisine is where flavour and tradition come together. With each mouthful, you embark on a journey that brings you closer to the heart of the culture in the most mouthwatering way possible.",
      linkLabel: "Discover Sri Lanka.",
      linkHref: "#",
    },
    {
      image: "assets/images/track-holiday/inspiration-3.png",
      title: "See a fresh perspective",
      description: "Has anyone visited this place before? Once more, consider. Our off the beaten track excursions reveal a whole different perspective, from secret viewpoints to unseen neighbourhoods to unique cultural interactions. Explore with fresh eyes away from the usual sites. There is always more to discover even in places you would have thought you knew. Let us show you a different side of your destination.",
      linkHref: "#",
    },
  ]

  const localCultureData = [
    {
      title1: "Unlock the best...",
      title2: "What makes the Knuckles Trek special?",
      description: "Of Sri Lanka’s heritage by exploring sacred templates",
      image: "assets/images/track-holiday/video-thumbnail-1.png",
      videoId: "",
      classNameTitle1: "",
      classNameDescription: "",
      classNameTitle2: ""
    },
    {
      title1: "Unlock the best...",
      title2: "How does cycling through plantations reveal rural life?",
      description: "Of Sri Lanka’s heritage by exploring sacred templates",
      image: "assets/images/track-holiday/video-thumbnail-2.png",
      videoId: "",
      classNameTitle1: "",
      classNameDescription: "",
      classNameTitle2: ""
    },
    {
      title1: "Unlock the best...",
      title2: "What cultural gems do TGT experiences uncover?",
      description: "Of Sri Lanka’s heritage by exploring sacred templates",
      image: "assets/images/track-holiday/video-thumbnail-3.png",
      videoId: "",
      classNameTitle1: "",
      classNameDescription: "",
      classNameTitle2: ""
    }
  ]

  const aboutClassicToursData = [
    {
      title: "What makes slow holidays unique?",
      description: "TravelGate's Slow Holidays redefine leisure by focussing on immersive, deliberate experiences rather than rushed itineraries. Our guests will enjoy peaceful escapes to verdant tea farms, calm beaches and cultural treasures. These holidays encourage guests to fully enjoy every moment by emphasising awareness and quality. They are ideal for relaxation and allow you to truly connect with your surroundings, history, environment and society.",
    },
    {
      title: "What relaxed 'happy accidents' experiences are offered?",
      description: "TGT's Slow Holidays offer incredible surprises right along the road. You might come upon vibrant village celebrations, have unplanned meetings with surrounding artists, or discover secret waterfalls. These unplanned activities improve your experience and provide daily delight and beauty. Whether they involve seeing rare species or chance taste of regional cuisine, these happy accidents make your Sri Lankan trip unforgettable.",
    },
    {
      title: "Can I customise my tour for relaxation?",
      description: "Surely! TGT's Slow Holidays let you customise your trip to exactly suit your tastes. We could arrange some leisurely trips to historical sites, perhaps some soothing spa treatments, or even some peaceful yoga resorts. Sounds fantastic, then. Choose activities that speak to you, such as spending a peaceful evening by the sea or following a guided meditation in a breathtaking surroundings. We have paid great attention to every element to ensure your total ease and relaxation.",
    },
    {
      title: "How does slow holidays promote sustainability?",
      description: "Our goal is sustainable tourism by means of eco friendly approaches. Our Slow Holidays respect cultural legacy, support local businesses and urge guests to stay in eco-friendly lodging. Visitors engage in events including community based projects and organic farming tours, so safeguarding the local livelihoods and the environment. This kind of conscious travel guarantees that your vacation helps the Local community as well as the environment.",
    },
  ]

  const wayToTravel = [
    {
      image: "/assets/icons/tour01.svg",
      title: "Access travel knowledge",
      description: "of selected local experts",
    },
    {
      image: "/assets/icons/tour02.svg",
      title: "Save time & money",
      description: "let a local expert plan",
    },
    {
      image: "/assets/icons/tour03.svg",
      title: "Tailor your private holiday",
      description: "to your preferences",
    },
    {
      image: "/assets/icons/tour04.svg",
      title: "Book & travel securely",
      description: "money back guarantee & 24/7 support",
    },
  ];

  const premiumTouring = [
    {
      image: "assets/images/sri-lanka/premium-touring-1.png",
      title: "MAKE TRAVEL RESPONSIBLE ®",
      description: "Connecting you with and supporting local communities.",
      linkLabel: "Find out more",
      linkHref: "#",
    },
    {
      image: "assets/images/sri-lanka/premium-touring-2.png",
      title: "BE MY GUEST",
      description: "Dining is an experience on our tours, with great food at the heart of every journey.",
      linkLabel: "Find out more",
      linkHref: "#",
    },
    {
      image: "assets/images/sri-lanka/premium-touring-3.png",
      title: "PERSONALISE YOUR TOUR",
      description: "Connecting you with and supporting local communities.",
      linkLabel: "Find out more",
      linkHref: "#",
    },
    {
      image: "assets/images/sri-lanka/premium-touring-4.png",
      title: "STAYS WITH TALES",
      description: "Connecting you with and supporting local communities.",
      linkLabel: "Find out more",
      linkHref: "#",
    },
  ];

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

  const card18Carousel1Data = [
    {
      image: "assets/images/classic-holiday/free-brochure.png",
      title: "Get your free brochure",
      description: "Find your next escape with the Asia's leading travel brand",
      buttonText: "Request A Brochure",
      bgColor: "",
      linkLabel: "Classic Sri Lankan Delights.",
      linkHref: "#",
      classNameTitle: "",
      classNameDescription: "",
      classNameLink: ""
    },
    {
      image: "assets/images/classic-holiday/award-winning.png",
      title: "Award winning tours ",
      description: "From the TripAdvisor to the SLTDA Agent's Choice Awards",
      buttonText: "Search Our Tours",
      bgColor: "[#315A7A]",
      linkHref: "#",
      classNameTitle: "",
      classNameDescription: "",
      classNameLink: ""
    }

  ]

  return (
    <div className='w-full'>

      {/* Bread crumb */}
      <div className='w-full py-2'>
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Track Holidays" },
        ]} />
      </div>

      {/* hero 2 */}
      <div className='w-full mx-auto'>
        <Hero1
          image="assets/images/track-holiday/hero.png"
          title="Off the Beaten Track Holidays"
          description="For those extra-curious traellers"
          imageClassName=""
          titleClassName=""
          descriptionClassName=""
        />
      </div>

      {/* section 1 */}
      <div className='w-full mt-12'>
        <div className='my-container'>
          <p className='description-2 !font-normal !tracking-[.5px] !text-sm text-center'>Travel far into Sri Lanka to find its unspoiled, erratic, completely unforgettable hidden corners. Let's get you to there. The island boasts a rather interesting past and present. We plan immersive holidays fit for a range of particular interests using our local contacts, in depth knowledge and access to professional guides.</p>
        </div>
      </div>

      {/* Off the beaten track tours */}
      <div className='w-full mt-12'>
        <div className='my-container'>
          <TourCardCarousel1
            data={tourData}
            title="Off the beaten track tours"
            description=""
            button="See More Trips"
            classNameButton=""
            classNameTitle=""
            classNameDescription=""
          />
        </div>
      </div>

      {/* Off the beaten track holidays inspiration */}
      <div className='w-full mt-12'>
        <Section14
          data={inspirationData}
          title1="Off the beaten track holidays inspiration"
          title2="Uncover hidden gems, eat locally & enjoy fresh views."
          description="Get away from the hustle and bustle and discover some hidden treasures On our Off the Beaten Track Holidays, you'll swap the usual tourist spots for stunning views, real connections and memories that will last a lifetime. Explore new places and enjoy an amazing travel experience"
          bgColor1="bg-myred"
          bgColor2="bg-[#F4D6DA]"
          button=""
          classNameTitle1=""
          classNameTitle2=""
          classNameDescription=""
          classNameButton=""
        />
      </div>

      {/* The best local culture unlocked for you */}
      <div className='w-full mt-12'>
        <Card21Carousel1
          cards={localCultureData}
          title="The best off the beaten track holidays unlocked for you"
          description="Find out the best off the beaten track holidays where secret paths, unspoiled environment, and real cultural interactions await. Experience travel beyond the usual, re connecting with adventure, peace and discovery from amazing treks to quiet towns and immersive traditions"
          classNameTitle=""
          classNameDescription=""
        />
      </div>

      <div className='w-full mt-12'>
        <Section16
          data={aboutClassicToursData}
          title="All you need to know about Off the Beaten Track Holidays"
        />
      </div>

      {/*  Your advantages of booking with Travel Gate  */}
      <div className='w-full mt-12 py-12 bg-[#EAE6EA]'>
        <div className='my-container'>
          <Section6
            data={wayToTravel}
            title="Simply the best and most relevant way to travel"
            titleClassName=""
          />
        </div>
      </div>

      {/* Welcome to Premium Touring */}
      <div className='w-full mt-12'>
        <div className='my-container'>
          <div className='w-full md:block hidden'>
            <Section7
              data={premiumTouring}
              title="Welcome to Premium Touring"
              description=""
              bgColor=""
              classNameTitle=""
              classNameDescription=""
            />
          </div>
          <div className='w-full md:hidden block'>
            <Card24Carousel1
              cards={premiumTouring}
              title="Welcome to Premium Touring"
              description=""
              bgColor=""
              classNameTitle=""
              classNameDescription=""
            />
          </div>
        </div>
      </div>

      <div className='w-full mt-12'>
        <Section18
          title="Looking for inspiration?"
          button="View All Ways to Travel"
          classNameButton=""
        />
      </div>

      {/* offers */}
      <div className='w-full mt-12'>
        <div className='my-container'>
          <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
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
      </div>

      <div className='w-full mt-12'>
        <div className='my-container'>
          <Card18Carousel1
            cards={card18Carousel1Data}
            title=""
            description=""
            classNameTitle=""
            classNameDescription=""
          />
        </div>
      </div>

      <div className='w-full mt-12'>
        <Section19 />
      </div>

    </div>
  )
}
