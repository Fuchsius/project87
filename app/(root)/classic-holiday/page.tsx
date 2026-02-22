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
      image: "assets/images/classic-holiday/inspiration-1.png",
      title: "See the real thing",
      description: "Through our well designed sacred trips, let Sri Lanka's spiritual legacy envelop you. See the revered Temple of the Tooth in Kandy housing Buddha's holy relic, enjoy the peace of old cave temples at Dambulla, or take part in a traditional puja celebration at a nearby Buddhist temple. These deep events gently, contemplatively link you to the island's rich spiritual legacy.",
      linkLabel: "Discover Sri Lanka.",
      linkHref: "#",
    },
    {
      image: "assets/images/classic-holiday/inspiration-2.png",
      title: "Witness powerful cultural rituals",
      description: "which range from rhythmic Kandyan dance performances to temple Poya Day ceremonies. Witness the Esala Perahera festival's elephant and dancer procession, or interact with village elders who are preserving ancient Sinhalese rituals. Combine cultural exploration with exciting wildlife safaris in Yala or Udawalawe, led by knowledgeable guides.",
      linkLabel: "Discover Sri Lanka.",
      linkHref: "#",
    },
    {
      image: "assets/images/classic-holiday/inspiration-3.png",
      title: "Connect with locals",
      description: "craftspeople from Sri Lanka. See master mask carvers in Ambalangoda honing their centuries old craft, learn the delicate batik textile making technique in coastal villages, find ancient pottery techniques passed dowr through generations, or visit Ceylon tea estates where seasoned tea pluckers show their exacting skills while sharing stories of island life.",
      linkHref: "#",
    },
  ]

  const localCultureData = [
    {
      title1: "Unlock the best...",
      title2: "Why is Sri Lanka ideal for spiritual journeys?",
      description: "Of Sri Lanka’s heritage by exploring sacred templates",
      image: "assets/images/classic-holiday/video-thumbnail-1.png",
      videoId: "",
      classNameTitle1: "",
      classNameDescription: "",
      classNameTitle2: ""
    },
    {
      title1: "Unlock the best...",
      title2: "How can you experience Sri Lanka's cultural traditions?",
      description: "Of Sri Lanka’s heritage by exploring sacred templates",
      image: "assets/images/classic-holiday/video-thumbnail-2.png",
      videoId: "",
      classNameTitle1: "",
      classNameDescription: "",
      classNameTitle2: ""
    },
    {
      title1: "Unlock the best...",
      title2: "Why is relaxation key in Classic Tours?",
      description: "Of Sri Lanka’s heritage by exploring sacred templates",
      image: "assets/images/classic-holiday/video-thumbnail-3.png",
      videoId: "",
      classNameTitle1: "",
      classNameDescription: "",
      classNameTitle2: ""
    }
  ]

  const aboutClassicToursData = [
    {
      title: "What makes Classic Holidays unique?",
      description: "Perfect fusion of culture, wildlife, and leisure is offered by Classic Holidays. Discover local customs, colourful celebrations, and historic temples at leisurely pace. Every schedule is meticulously designed to provide significant events and enough of time to fully appreciate the beauties of Sri Lanka. Classic Holidays guarantees unique experiences catered to your interests and needs whether your travel is for leisure on immaculate beaches, guided safaris, or exploration of famous sites.",
    },
    {
      title: "What cultural experiences are offered?",
      description: "Classic Holidays fully transports you to the rich cultural legacy of Sri Lanka. Discover holy sites like the Temple of the Tooth, see amazing Kandyan dance performances, and participate in customs. See neighbourhood artists creating masterfully carved masks or batik fabrics. Every encounter links you to the core of Sri Lankan society and provides a greater respect of the island's ancient customs and contemporary creativity",
    },
    {
      title: "Can I customize my tour for relaxation?",
      description: "Absolutely! Classic Holidays strikes a balance between exploration and relaxation, resulting in a refreshing getaway. After exploring Sri Lanka's cultural landmarks and wildlife, relax on golden beaches with breathtaking coastal views. Experience the tranquil atmosphere of tea estates or indulge in spa treatments inspired by traditional Ayurveda. Whether you prefer calm beaches or tranquil hill country, relaxation is an essential part of your journey",
    },
    {
      title: "How does Classic Tours promote sustainability?",
      description: "Classic Holidays encourages ethical and sustainable travel by means of eco friendly practices. We promise eco friendly accommodation, help nearby towns, and back initiatives for the protection of animals. Our travels help to preserve cultural legacy and natural surroundings, so enhancing the communities and surroundings of Sri Lanka. Travellers have great experiences while helping to protect the unique ecosystems and traditions of the island for next generations.",
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
      <div className='w-full  py-2'>
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Classic Holiday" },
        ]} />
      </div>

      {/* hero 2 */}
      <div className='w-full mx-auto'>
        <Hero1
          image="assets/images/classic-holiday/hero.png"
          title="Classic Holidays"
          description="Immersion & discovery"
          imageClassName=""
          titleClassName=""
          descriptionClassName=""
        />
      </div>

      {/* section 1 */}
      <div className='w-full mt-12'>
        <div className='my-container'>
          <p className='description-2 !font-normal !tracking-[.5px] !text-sm text-center'>So you want to find the best 'rice and curry' restaurant? Let us show you the location. Want to see some wild wildlife? You can rest assured that we will provide you with the best safari and a wonderful wildlife guide. Are you interested in going to the tea country, seeing the historical and cultural sites, and spending a few days at the beach, but at a pace that is laid back and forgiving?</p>
        </div>
      </div>

      {/* Trending Sri Lanka Tours */}
      <div className='w-full mt-12'>
        <div className='my-container'>
          <TourCardCarousel1
            data={tourData}
            title="Trending Sri Lanka Tours"
            description=""
            button="See More Trips"
            classNameButton=""
            classNameTitle=""
            classNameDescription=""
          />
        </div>
      </div>

      {/* Classic holidays inspiration */}
      <div className='w-full mt-12'>
        <Section14
          data={inspirationData}
          title1="Classic holidays inspiration"
          title2="Sacred experiences, ancient traditions & local artisans"
          description="Explore Sri Lanka's sacred temples, rich traditions, and skilled artisans. Enjoy immersive experiences designed to connect you with the island's enchanting heritage, ranging from spiritual serenity to cultural wonders."
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
          title="The best local culture unlocked for you"
          description="Explore the timeless allure of Sri Lanka, a destination brimming with traditions, breathtaking landscapes, and unforgettable experiences."
          classNameTitle=""
          classNameDescription=""
        />
      </div>

      <div className='w-full mt-12'>
        <Section16
          data={aboutClassicToursData}
          title="All you need to know about Classic Tours"
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
