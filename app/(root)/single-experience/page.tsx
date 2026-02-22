import TourCard from '@/components/comen/card/TourCard'
import Hero3 from '@/components/comen/hero/Hero3'
import Section3 from '@/components/comen/section/Section3'
import Section4 from '@/components/comen/section/Section4'
import { TOUR_DATA } from '@/data/tours.data'
import { Button } from '@/components/comen/button'
import React from 'react'
import Title2 from '@/components/comen/title/Title2'
import Card9Carousel1 from '@/components/comen/carousel/Card9Carousel1'
import Card7Carousel1 from '@/components/comen/carousel/Card7Carousel1'
import Section6 from '@/components/comen/section/Section6'
import Card1Carousel1 from '@/components/comen/carousel/Card1Carousel1'
import Section5 from '@/components/comen/section/Section5'
import Section19 from '@/components/comen/section/Section19'
import Breadcrumb from '@/components/BreadCrumb'
import Card20Carousel1 from '@/components/comen/carousel/Card20Carousel1'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'

export default function page() {

  const whyWeLove = [

    "Discover the creative path, inspirations, and great influence Sri Lanka's most eminent architect made on sustainable architecture all around by walking through his life and works.",
    "Encounter the artistic genius of Bawa's closest friends, Barbara Sansoni, Minette de Silva, and Ena de Silva, who used batik, textiles, and innovative architecture to help to define Sri Lanka's landscape. Their contributions deepen this immersive trip.",
    "Find out Bawa's personal haven where tropical modernism exists everywhere. Discover the house where his great architectural ideas came to life from its peaceful courtyard to well chosen interior design.",
    "Look at how Bawa combined architecture with environment in Colombo's famous sites. Discover sustainability at its best in every design element from the calm Seema Malaka Temple to the vibrant Gallery Café."

  ]

  const tourData = TOUR_DATA;

  const card9Carousel1Data = [
    {
      image: "assets/images/single-experience/Top-Things-to-Do-Nearby-1.png",
      title: "Colombo's Street Food",
      description: "From Dutch spices to Malaysian tastes, Colombo's cuisine combines worldwide influences shaped by centuries of trade to produce distinctive dishes",
      linkText: "Find Out More >",
      linkClassName: "",
      classNameTitle: "!italic",
      classNameDescription: "",
      backgroundColor: "bg-bggray1"
    },
    {
      image: "assets/images/single-experience/Top-Things-to-Do-Nearby-2.png",
      title: "Colombo by Tuk Tuk",
      description: "Explore Colombo's charm through tuk-tuks, heritage, and warm hospitality.",
      linkText: "Find Out More",
      linkClassName: "",
      classNameTitle: "!italic",
      classNameDescription: "",
      backgroundColor: "bg-bggray1"
    },
  ];

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

  const experiences = [
    {
      image: "assets/images/single-experience/experiences-1.png",
      title: "Be My Guest",
      description: "The original local travel experience",
      button: "Find Out More",
      classNameTitle: "",
      classNameDescription: "",
      classNameButton: ""
    },
    {
      image: "assets/images/single-experience/experiences-2.png",
      title: "MAKE TRAVEL RESPONSIBLE®Experiences",
      description: "Do good, feel good",
      button: "Find Out More",
      classNameTitle: "",
      classNameDescription: "",
      classNameButton: ""
    },
    {
      image: "assets/images/single-experience/experiences-3.png",
      title: "Wild Frontiers",
      description: "Experience the thrill of wildlife up close",
      button: "Find Out More",
      classNameTitle: "",
      classNameDescription: "",
      classNameButton: ""
    },
    {
      image: "assets/images/single-experience/experiences-1.png",
      title: "Grand Hotel4",
      description: "The luxurious Mahoora Safari Camp is located on the.",
      button: "Find Out More",
      classNameTitle: "",
      classNameDescription: "",
      classNameButton: ""
    }
  ]

  const card20Carousel1Data = [
    {
      title: "The places we visited were well chosen",
      rating: 4.2,
      content: "“You can really see Sri Lanka's beauty with Travelgate's Ultimate Luxury boutique hotels. We picked each stay with a focus on elegance and comfort. 'The service was exceptional, everything was organized seamlessly, and the experiences were unforgettable, making this journey truly remarkable.'",
      feedbackAuthor: "Franziska Dietrich",
      link: "#",
      linkText: "Classic Sri Lanka",
      classNameTitle: "",
      classNameDescription: "",
      classNameAuthor: "",
      classNameLink: ""
    },
    {
      title: "An experience of a lifetime",
      rating: 5,
      content: "'Staying in TGT's fantastic boutique hotels while exploring rich culture was an unforgettable experience. Every retreat had a touch of luxury, great locations, and excellent service. The guides and staff were fantastic, making this adventure feel luxurious and something I'll never forget.'",
      feedbackAuthor: "Grace Campbell",
      link: "#",
      linkText: "Boutique Sri Lanka",
      classNameTitle: "",
      classNameDescription: "",
      classNameAuthor: "",
      classNameLink: ""
    },
    {
      title: "The places we visited were well chosen",
      rating: 4.2,
      content: "“You can really see Sri Lanka's beauty with Travelgate's Ultimate Luxury boutique hotels. We picked each stay with a focus on elegance and comfort. 'The service was exceptional, everything was organized seamlessly, and the experiences were unforgettable, making this journey truly remarkable.'",
      feedbackAuthor: "Franziska Dietrich",
      link: "#",
      linkText: "Classic Sri Lanka",
      classNameTitle: "",
      classNameDescription: "",
      classNameAuthor: "",
      classNameLink: ""
    },
    {
      title: "An experience of a lifetime",
      rating: 5,
      content: "'Staying in TGT's fantastic boutique hotels while exploring rich culture was an unforgettable experience. Every retreat had a touch of luxury, great locations, and excellent service. The guides and staff were fantastic, making this adventure feel luxurious and something I'll never forget.'",
      feedbackAuthor: "Grace Campbell",
      link: "#",
      linkText: "Boutique Sri Lanka",
      classNameTitle: "",
      classNameDescription: "",
      classNameAuthor: "",
      classNameLink: ""
    },
  ]

  return (
    <>
      {/* Bread crumb */}
      <div className='w-full py-2'>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Single Experience" },
          ]}
        />
      </div>

      {/* hero section */}
      <div className='w-full'>
        <Hero3
          image="assets/images/single-experience/hero.png"
          title1=""
          title2="Bawa in Colombo"
          description="Colombo, Sri Lanka"
        />
      </div>

      {/* A brew with a view */}
      <div className='w-full mt-12'>
        <Section3
          title={'Feel Bawa\'s Vision Come to Life'}
          description1="Enter the world of Geoffrey Bawa, where design blends naturally with architecture, creativity blossoms, and architecture itself breaths. Wander about his house, investigate his city life, and see the creative genius of his closest friends. Get personal experience with tropical modernism."
          description2="Long before it became a trendy trend, Geoffrey Bawa presented Sri Lanka and the world with sustainable architecture. Leading proponent of tropical modernism, a worldwide design movement emphasising a variety of natural elements used to their best advantage, he was Through his work and creations of eminent friends on the art, architecture, and textile scene, including Barbara (Barefoot), Minette (1st female architect) and Ena (batik), this tour transports you through Bawa's life. 
          <br/><br/>
          Start with looking at Number 11, the centre of Bawa's city life, then hear some fascinating tales about his life and work. The next stop is Gallery Café, another one of Bawa's outstanding creations, where one can enjoy the surrounds over a drink. After that, visit the Seema Malaka Temple on Beira Lake, a temple rebuilt in the 1970s by Bawa, and finish your journey either with an exhibition (should one exist) or a visit to Barefoot."
        />

      </div>

      {/* Why we love */}
      <div className='w-full mt-12'>
        <Section4
          title="Why you will love it"
          data={whyWeLove}
          colsLg="2"
          colsMd="2"
          colsSm="1"
          titleClassName=""
        />
      </div>

      {/* View gallery */}
      {/* Rooms */}
      {/* Facilities */}
      {/* Guest Reviews */}


      {/* Tours Featuring This Experience */}
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

      {/* Top Things to Do Nearby */}
      <div className='w-full mt-12'>
        <div className='my-container'>
          <Card9Carousel1
            cards={card9Carousel1Data}
            title="Top Things to Do Nearby"
            description="The bungalow sits amidst acres of lush green tea bushes, and a drive through the tea plantations to a colonial-era tea factory, where. you can observe the age old art of tea production, is included in your stay."
            classNameTitle=""
            classNameDescription=""
          />
        </div>
      </div>

      {/* More one-of-a kind experiences */}
      <div className='w-full mt-12'>
        <div className='w-full'>
          <Card1Carousel1
            cards={experiences}
            title="More one-of-a kind experiences"
            description="You will also enjoy a Be My Guest experience and MAKE TRAVEL RESPONSIBLE Experience on every tour in addition to Stays with Tales experiences on some"
            bgColor1="bg-[#125A55]"
            bgColor2="bg-[#C3CCCB]"
            classNameTitle=""
            classNameDescription=""
          />
        </div>
      </div>

      {/* Simply the best and most relevant way to travel */}
      <div className='w-full mt-12 py-12 bg-[#EAE6EA]'>
        <div className='my-container'>
          <Section6
            data={wayToTravel}
            title="Simply the best and most relevant way to travel"
            titleClassName=""
          />
        </div>
      </div>

      <div className='w-full mt-12 '>
        <div className='my-container'>
          <Card20Carousel1
            cards={card20Carousel1Data}
            title="Unedited reviews"
            button="Read All Reviews"
            classNameTitle=""
            classNameButton=""
            classNameDescription=""
          />
        </div>
      </div>


      {/* Search Accommodation */}
      <div className='w-full mt-12'>
        <div className='w-full'>
          <Section5
            image="assets/images/by-destination.png"
            description="Experience the finest in TGT’s Collection! ranging from Ultimate Luxury to Comfort. Discover carefully selected boutique hotels, villas, and luxurious accommodations throughout Asia, designed for unforgettable experiences of luxury."
            button='Search Accommodation'
            searchIcon="assets/icons/search-white.svg"
            descriptionClassName=""
          />
        </div>
      </div>

      {/* back to top */}
      <div className='w-full mt-12'>
        <Section19 />
      </div>

    </>
  )
}
