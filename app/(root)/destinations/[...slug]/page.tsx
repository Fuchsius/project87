import React from 'react'
import Breadcrumb from '@/components/comen/Breadcrumb'
import Hero2 from '@/components/comen/hero/Hero2'
import TourCardCarousel1 from '@/components/comen/carousel/TourCardCarousel1'
import Card20Carousel1 from '@/components/comen/carousel/Card20Carousel1'
import Section13 from '@/components/comen/section/Section13'
import Card17 from '@/components/comen/card/Card17'
import Title2 from '@/components/comen/title/Title2'
import Card16 from '@/components/comen/card/Card16'
import Card15 from '@/components/comen/card/Card15'
import Section7 from '@/components/comen/section/Section7'
import Card24Carousel1 from '@/components/comen/carousel/Card24Carousel1'
import Card2 from '@/components/comen/card/Card2'
import Card3Carousel2 from '@/components/comen/carousel/Card3Carousel2'
import { Button } from '@/components/comen/button'
import Card14 from '@/components/comen/card/Card14'
import Card9Carousel1 from '@/components/comen/carousel/Card9Carousel1'
import Section6 from '@/components/comen/section/Section6'
import Card13 from '@/components/comen/card/Card13'
import Section9 from '@/components/comen/section/Section9'
import Section2 from '@/components/comen/section/Section2'
import Section10 from '@/components/comen/section/Section10'
import Section11 from '@/components/comen/section/Section11'
import Section19 from '@/components/comen/section/Section19'
import JumpSection from '@/components/comen/JumpSection'
import { countries } from '@/utility/Countries'
import { Cities } from '@/utility/Cities'

export default async function page({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    const countrySlug = slug[0];
    const citySlug = slug.length > 1 ? slug[1] : null;

    const country = countries.find(c => c.slug === countrySlug);

    if (!country) {
        return <div>Country not found</div>;
    }

    let city = null;
    if (citySlug) {
        city = Cities.find(c => c.countryId === country && c.slug === citySlug);
        if (!city) {
            return <div>City not found</div>;
        }
    }

    if (city) {
        // City rendering
        const generateCardData = () => {
            const activities = city.thingsToDo.data;

            const styles = [
                {
                    linkClassName: "!text-white !decoration-white",
                    classNameTitle: "!text-white !italic !font-semibold",
                    classNameDescription: "!text-white",
                    backgroundColor: "bg-[#315A7A]"
                },
                {
                    linkClassName: "",
                    classNameTitle: "!italic !font-semibold",
                    classNameDescription: "",
                    backgroundColor: "bg-[#EDF4F9]"
                }
            ];

            return activities.map((activity, i) => ({
                image: activity.image,
                title: activity.name,
                description: activity.description,
                linkText: "EXPERIENCE ON TOUR>",
                ...styles[i % styles.length]
            }));
        };

        const card9Carousel1Data = generateCardData();

        return (
            <div className='w-full'>
                {/* Bread crumb */}
                <div className='w-full py-2'>
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: country.name, href: `/destinations/${country.slug}` },
                        { label: city.name },
                    ]} />
                </div>

                {/* hero 2 */}
                <div className='w-full mx-auto'>
                    <Hero2
                        image={city.hero.image}
                        title={city.hero.title}
                        description={city.hero.subTitle}
                        type={2}
                        rating={city.hero.rating}
                        button={city.hero.button.buttonTitle}
                        imageClassName=""
                        titleClassName=""
                        descriptionClassName=""
                    />
                </div>

                {/* description */}
                <div className='w-full mt-12'>
                    <div className='my-container'>
                        <p className='description-2 !font-normal !tracking-[.5px] !text-sm text-center' style={{ whiteSpace: 'pre-line' }}>{city.description}</p>
                    </div>
                </div>

                {/* jump section */}
                <div className="w-full mt-12 sticky top-0 z-40">
                    <JumpSection
                        items={city.jumpSection}
                    />
                </div>

                {/* Trending Sri Lanka Tours */}
                <div id="trending-trips" className='w-full mt-12'>
                    <div className='my-container'>
                        <TourCardCarousel1
                            data={city.trendingTours.tours}
                            title={city.trendingTours.title}
                            description=""
                            button="See More Trips"
                            classNameButton=""
                            classNameTitle=""
                            classNameDescription=""
                        />
                    </div>
                </div>

                {/* Unedited reviews */}
                <div id="reviews" className='w-full mt-12 bg-bggray5 py-12'>
                    <div className='my-container'>
                        <Card20Carousel1
                            cards={city.uneditedReviews}
                            title="Unedited reviews"
                            button="Read All Reviews"
                            classNameTitle=""
                            classNameButton=""
                            classNameDescription=""
                        />
                    </div>
                </div>

                {/* Your best Sri Lanka tour starts here */}
                <div className='w-full mt-12'>
                    <div className='my-container'>
                        <Section13
                            data={city.yourBestTourStartsHere.data}
                            title={city.yourBestTourStartsHere.title}
                            description={city.yourBestTourStartsHere.description}
                            classNameTitle=""
                            classNameDescription=""
                        />
                    </div>
                </div>

                {/* Why Visit Sri Lanka? */}
                <div id="why-visit" className='w-full mt-12'>
                    <div className='my-container'>
                        <Title2 title={city.whyVisit.title} className='text-center' />
                        <p className='description text-center'>{city.whyVisit.subTitle}</p>
                    </div>
                    <div className='my-container '>
                        <div className='w-full mt-4 grid md:grid-cols-2 grid-cols-1 gap-4'>
                            {city.whyVisit.data.map((item, index) => (
                                <Card17
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                    title2={item.title2}
                                    description={item.description}
                                    experience={item.experience}
                                    buttonText={item.buttonText}
                                    darkLight={item.darkLight}
                                    classNameTitle=""
                                    classNameTitle2=""
                                    classNameDescription=""
                                    classNameExperience=""
                                    classNameButton="hover:shadow-white"
                                    backgroundColor={item.backgroundColor}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Welcome to Premium Touring */}
                <div id="premium-touring" className='w-full mt-12'>
                    <div className='my-container'>
                        <div className='w-full md:block hidden'>
                            <Section7
                                data={city.welcomeToPremiumTouring.data}
                                title={city.welcomeToPremiumTouring.title}
                                description=""
                                bgColor=""
                                classNameTitle=""
                                classNameDescription=""
                            />
                        </div>
                        <div className='w-full md:hidden block'>
                            <Card24Carousel1
                                cards={city.welcomeToPremiumTouring.data}
                                title={city.welcomeToPremiumTouring.title}
                                description=""
                                bgColor=""
                                classNameTitle=""
                                classNameDescription=""
                            />
                        </div>
                    </div>
                </div>

                {/* offers */}
                <div className='w-full mt-12'>
                    <div className='my-container'>
                        <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
                            {city.travelDeals.map((offer) => (
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

                {/* Sri Lanka experiences with Travelgate   */}
                <div id="experiences" className='w-full mt-12'>
                    <Card3Carousel2
                        cards={city.experiencesHotels.data}
                        title={city.experiencesHotels.title}
                        description={city.experiencesHotels.description}
                        bgColor1="bg-mygreen"
                        bgColor2="bg-[#E4FFFD]"
                        classNameTitle=""
                        classNameDescription=""
                    />
                    <div className='w-full flex items-center justify-center mt-4'>
                        <Button variant="default" size={"lg"} className={``} >Learn More About Experiences</Button>
                    </div>
                </div>

                {/* What to Eat in Sri Lanka */}
                <div className='w-full mt-12'>
                    <Title2 title={city.whatToEat.title} className='text-center' />
                    <div className='my-container mt-8'>
                        <Card14
                            image={city.whatToEat.image}
                            title="Premium Dining on Every Tour"
                            description={city.whatToEat.description}
                            classNameTitle="lg:text-[24px] md:text-[20px] text-[18px] font-sourceSerif italic"
                            classNameDescription=""
                            classNameImage="!h-full"
                        />
                    </div>
                </div>

                {/* Things to Do in Sri Lanka */}
                <div id="things-to-do" className='w-full mt-12'>
                    <div className='my-container mt-4'>
                        <Card9Carousel1
                            cards={card9Carousel1Data}
                            title={city.thingsToDo.title}
                            description={city.thingsToDo.description}
                            classNameTitle=""
                            classNameDescription=""
                        />
                    </div>
                </div>

                {/*  Your advantages of booking with Travel Gate  */}
                <div className='w-full mt-12 py-12 bg-[#EAE6EA]'>
                    <div className='my-container'>
                        <Section6
                            data={city.convenience}
                            title=" Your advantages of booking with Travel Gate "
                            titleClassName=""
                        />
                    </div>
                </div>

                {/* Sri Lanka experiences with Travelgate */}
                <div className='w-full mt-12'>
                    <Card3Carousel2
                        cards={city.experiences.data}
                        title={city.experiences.title}
                        description={city.experiences.description}
                        bgColor1="bg-[#305A7A]"
                        bgColor2="bg-[#CBE8FF]"
                        classNameTitle=""
                        classNameDescription=""
                    />
                    <div className='w-full flex items-center justify-center mt-4'>
                        <Button variant="default" size={"lg"} className={``} >See More Hotels</Button>
                    </div>
                </div>

                {/* Learn More About Sri Lanka */}
                <div className='w-full mt-12'>
                    <Title2 title={city.learnMoreAbout.title} className='text-center' />
                    <div className='my-container mt-8'>
                        <Card13
                            image={city.learnMoreAbout.image}
                            title={city.learnMoreAbout.subTitle}
                            description={city.learnMoreAbout.description}
                            classNameTitle="lg:text-[24px] md:text-[20px] text-[18px] font-sourceSerif italic"
                            classNameDescription=""
                            classNameImage="!h-full"
                        />
                    </div>
                </div>

                {/* Frequently Asked Questions */}
                <div id="faqs" className='w-full mt-12'>
                    <div className='my-container'>
                        <Section10
                            data={city.faqs}
                        />
                    </div>
                </div>

                {/* destinations */}
                <div className='w-full mt-12'>
                    <div className='my-container'>
                        <Section11
                            data={city.destinationsList}
                            title="All Asia Destinations"
                            classNameTitle=""
                        />
                    </div>
                </div>

                {/* back to top */}
                <div className='w-full mt-12'>
                    <Section19 />
                </div>
            </div>
        );
    } else {
        // Country rendering
        const tourData = country.trendingTours.tours;
        const hero = country.hero;

        const reviewData = country.uneditedReviews;

        const bestTourStartsHere = country.yourBestTourStartsHere;

        const whyVisit = country.whyVisit;

        const welcomeToPremiumTouring = country.welcomeToPremiumTouring;

        const offers = country.travelDeals;

        const experiencesHotels = country.experiencesHotels;

        const learnMoreAbout = country.learnMoreAbout;

        const whatToEat = country.whatToEat;

        const thingsToDo = country.thingsToDo;

        const card9Carousel1Data = thingsToDo.data.map((item, index) => {
            const styles = [
                {
                    linkClassName: "!text-white !decoration-white",
                    classNameTitle: "!text-white !italic !font-semibold",
                    classNameDescription: "!text-white",
                    backgroundColor: "bg-[#315A7A]"
                },
                {
                    linkClassName: "",
                    classNameTitle: "!italic !font-semibold",
                    classNameDescription: "",
                    backgroundColor: "bg-[#EDF4F9]"
                }
            ];
            return {
                image: item.image,
                title: item.name,
                description: item.description,
                linkText: "EXPERIENCE ON TOUR>",
                ...styles[index % styles.length]
            };
        });

        const wayToTravel = country.convenience;

        const experiences = experiencesHotels.data;

        const whatToKnowBeforeYouTravel = country.whatToKnowBeforeYouTravel.data;

        const faq = country.faqs;

        const inquire = country.inquire;

        const destinations = country.destinationsList;

        return (
            <div className='w-full'>
                {/* Bread crumb */}
                <div className='w-full py-2'>
                    <Breadcrumb items={[
                        { label: "Home", href: "/" },
                        { label: country.name },
                    ]} />
                </div>

                {/* hero */}
                <div className='w-full mx-auto'>
                    <Hero2
                        image={hero.image}
                        title={hero.title}
                        description={hero.description}
                        rating={hero.rating}
                        type={hero.type}
                        button={hero.button.buttonTitle}
                        buttonLink={hero.button.buttonLink}
                        imageClassName=""
                        titleClassName=""
                        descriptionClassName=""
                    />
                </div>

                {/* description */}
                <div className='w-full mt-12'>
                    <div className='my-container'>
                        <p className='description-2 !font-normal !tracking-[.5px] !text-sm text-center' style={{ whiteSpace: 'pre-line' }}>{country.description}</p>
                    </div>
                </div>

                {/* jump section */}
                <div className="w-full mt-12 sticky top-0 z-40">
                    <JumpSection
                        items={country.jumpSection}
                    />
                </div>

                {/* Trending Sri Lanka Tours */}
                <div id="trending-trips" className='w-full mt-12'>
                    <div className='my-container'>
                        <TourCardCarousel1
                            data={tourData}
                            title={country.trendingTours.title}
                            description=""
                            button="See More Trips"
                            classNameButton=""
                            classNameTitle=""
                            classNameDescription=""
                        />
                    </div>
                </div>

                {/* Unedited reviews */}
                <div className='w-full mt-12 bg-bggray5 py-12'>
                    <div className='my-container'>
                        <Card20Carousel1
                            cards={reviewData}
                            title="Unedited reviews"
                            button="Read All Reviews"
                            classNameTitle=""
                            classNameButton=""
                            classNameDescription=""
                        />
                    </div>
                </div>

                {/* Your best tour starts here */}
                <div className='w-full mt-12'>
                    <div className='my-container'>
                        <Section13
                            data={bestTourStartsHere.data}
                            title={bestTourStartsHere.title}
                            description={bestTourStartsHere.description}
                            classNameTitle=""
                            classNameDescription=""
                        />
                    </div>
                </div>

                {/* Why Visit Sri Lanka? */}
                <div className='w-full mt-12'>
                    <div className='my-container'>
                        <Title2 title={whyVisit.title} className='text-center' />
                        <p className='description text-center'>{whyVisit.subTitle}</p>
                    </div>
                    <div className='my-container '>
                        <div className='w-full mt-4 grid md:grid-cols-2 grid-cols-1 gap-4'>
                            {whyVisit.data.map((item, index) => (
                                <Card17
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                    title2={item.title2}
                                    description={item.description}
                                    experience={item.experience}
                                    buttonText={item.buttonText}
                                    darkLight={item.darkLight}
                                    classNameTitle=""
                                    classNameTitle2=""
                                    classNameDescription=""
                                    classNameExperience={index === 1 ? "!text-[#374BA2] !decoration-[#374BA2]" : ""}
                                    classNameButton="hover:shadow-white"
                                    backgroundColor={index === 0 ? "bg-mygreen3" : "bg-[#F7FAFF]"}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Destinations */}
                <div id="destinations" className='w-full'>
                    {country.destinations.map((dest, index) => (
                        <div key={index} className='w-full mt-12'>
                            <div className='my-container'>
                                {index % 2 === 0 ? (
                                    <Card16
                                        image={dest.image || "/assets/images/sri-lanka/colombo.png"}
                                        title={dest.destination.toUpperCase()}
                                        description={dest.description || "The commercial capital of Sri Lanka; Colombo is a bustling city with a rich history, packed with a plethora of things to do and mesmerizing attractions from city temples to skyrise buildings, verdant parks and national monuments. The city is a potpourri of cultures, religions and races making it the most diverse on the island."}
                                        button={dest.button.buttonTitle || "Discover " + dest.destination}
                                        locations={dest.location || "Pettah, Gangarama, Galle face Green"}
                                        classNameTitle=""
                                        classNameDescription=""
                                    />
                                ) : (
                                    <Card15
                                        image={dest.image || "assets/images/sri-lanka/kandy.png"}
                                        title={dest.destination.toUpperCase()}
                                        description={dest.description || "Discover some of the top things to do in Kandy as you explore the stunning charms of the city nestled between towering mountains"}
                                        button={dest.button.buttonTitle || "Discover " + dest.destination}
                                        locations={dest.location || "Kandy Lake, Gadaladeniya, Bahirawakanda"}
                                        classNameTitle=""
                                        classNameDescription=""
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Welcome to Premium Touring */}
                <div id="stays-with-tales" className='w-full mt-12'>
                    <div className='my-container'>
                        <div className='w-full md:block hidden'>
                            <Section7
                                data={welcomeToPremiumTouring.data}
                                title={welcomeToPremiumTouring.title}
                                description=""
                                bgColor=""
                                classNameTitle=""
                                classNameDescription=""
                            />
                        </div>
                        <div className='w-full md:hidden block'>
                            <Card24Carousel1
                                cards={welcomeToPremiumTouring.data}
                                title={welcomeToPremiumTouring.title}
                                description=""
                                bgColor=""
                                classNameTitle=""
                                classNameDescription=""
                            />
                        </div>
                    </div>
                </div>

                {/* travelDeals */}
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

                {/* experiences with Travelgate   */}
                <div className='w-full mt-12'>
                    <Card3Carousel2
                        cards={experiencesHotels.data}
                        title={experiencesHotels.title || ""}
                        description={experiencesHotels.description || ""}
                        bgColor1="bg-mygreen"
                        bgColor2="bg-[#E4FFFD]"
                        classNameTitle=""
                        classNameDescription=""
                    />
                    <div className='w-full flex items-center justify-center mt-4'>
                        <Button variant="default" size={"lg"} className={``} >{experiencesHotels.button.buttonTitle}</Button>
                    </div>
                </div>

                {/* What to Eat in Sri Lanka */}
                <div className='w-full mt-12'>
                    <Title2 title={whatToEat.title} className='text-center' />
                    <div className='my-container mt-8'>
                        <Card14
                            image={whatToEat.image}
                            title="Premium Dining on Every Tour"
                            description={whatToEat.description}
                            classNameTitle="lg:text-[24px] md:text-[20px] text-[18px] font-sourceSerif italic"
                            classNameDescription=""
                            classNameImage="!h-full"
                        />
                    </div>
                </div>

                {/* Things to Do in Sri Lanka */}
                <div id="signature-experiences" className='w-full mt-12'>
                    <div className='my-container mt-4'>
                        <Card9Carousel1
                            cards={card9Carousel1Data}
                            title={thingsToDo.title || "Things to Do in Sri Lanka"}
                            description={thingsToDo.description || "Venture into caves, temples, and the jungle as you visit Sri Lanka. Watch a traditional dance in Kandy, grab a snack from Colombo's Pettah Market, and take guided tours with a photographer, a Buddhist, and a tuk-tuk driver."}
                            classNameTitle=""
                            classNameDescription=""
                        />
                    </div>
                </div>

                {/*  Convenience  */}
                <div className='w-full mt-12 py-12 bg-[#EAE6EA]'>
                    <div className='my-container'>
                        <Section6
                            data={wayToTravel}
                            title=" Your advantages of booking with Travel Gate "
                            titleClassName=""
                        />
                    </div>
                </div>

                {/* Sri Lanka experiences with Travelgate */}
                <div className='w-full mt-12'>
                    <Card3Carousel2
                        cards={experiences}
                        title={experiencesHotels.title}
                        description={experiencesHotels.description}
                        bgColor1="bg-[#305A7A]"
                        bgColor2="bg-[#CBE8FF]"
                        classNameTitle=""
                        classNameDescription=""
                    />
                    <div className='w-full flex items-center justify-center mt-4'>
                        <Button variant="default" size={"lg"} className={``} >{experiencesHotels.button.buttonTitle}</Button>
                    </div>
                </div>

                {/* Learn More About */}
                <div className='w-full mt-12'>
                    <Title2 title={learnMoreAbout.title} className='text-center' />
                    <div className='my-container mt-8'>
                        <Card13
                            image={learnMoreAbout.image}
                            title={learnMoreAbout.subTitle}
                            description={learnMoreAbout.description}
                            classNameTitle="lg:text-[24px] md:text-[20px] text-[18px] font-sourceSerif italic"
                            classNameDescription=""
                            classNameImage="!h-full"
                        />
                    </div>
                </div>

                {/* What to Know Before You Travel to Sri Lanka */}
                <div className='w-full mt-12'>
                    <Section9
                        data={whatToKnowBeforeYouTravel}
                        title={country.whatToKnowBeforeYouTravel.title || "What to Know Before You Travel to Sri Lanka"}
                        classNameTitle=""
                    />
                </div>

                {/* Interested in One of Our Trips? */}
                <div className='w-full mt-12'>
                    <Section2
                        title={inquire.title}
                        description={inquire.description}
                        buttonLink1={inquire.buttonLink1}
                        buttonLink2={inquire.buttonLink2}
                        button1Icon={inquire.button1Icon}
                        titleClassName=""
                        descriptionClassName=""
                        classNameButton1=""
                        classNameButton2=""
                    />
                </div>

                {/* Frequently Asked Questions */}
                <div id="faqs" className='w-full mt-12'>
                    <div className='my-container'>
                        <Section10
                            data={faq}
                        />
                    </div>
                </div>

                {/* destinations */}
                <div className='w-full mt-12'>
                    <div className='my-container'>
                        <Section11
                            data={destinations}
                            title="All Asia Destinations"
                            classNameTitle=""
                        />
                    </div>
                </div>

                {/* back to top */}
                <div className='w-full mt-12'>
                    <Section19 />
                </div>
            </div>
        );
    }
}
