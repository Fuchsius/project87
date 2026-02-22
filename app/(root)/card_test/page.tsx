import React from 'react'
import Card1 from '@/components/comen/card/Card1'
import Card2 from '@/components/comen/card/Card2'
import Card3 from '@/components/comen/card/Card3'
import Card4 from '@/components/comen/card/Card4'
import Card5 from '@/components/comen/card/Card5'
import Card6 from '@/components/comen/card/Card6'
import Card7 from '@/components/comen/card/Card7'
import Card8 from '@/components/comen/card/Card8'
import TourCard from '@/components/comen/card/TourCard'
import { TOUR_DATA } from '@/data/tours.data'
import TourCardList from '@/components/comen/card/TourCardList'
import Card9 from '@/components/comen/card/Card9'
import Card10 from '@/components/comen/card/Card10'
import Card11 from '@/components/comen/card/Card11'
import Card12 from '@/components/comen/card/Card12'
import Card13 from '@/components/comen/card/Card13'
import Card14 from '@/components/comen/card/Card14'
import Card15 from '@/components/comen/card/Card15'
import Card16 from '@/components/comen/card/Card16'
import Card17 from '@/components/comen/card/Card17'
import Card18 from '@/components/comen/card/Card18'
import Card19 from '@/components/comen/card/Card19'
import Card20 from '@/components/comen/card/Card20'
import Card21 from '@/components/comen/card/Card21'
import Card22 from '@/components/comen/card/Card22'
import Card23 from '@/components/comen/card/Card23'
import Card24 from '@/components/comen/card/Card24'
import Card25 from '@/components/comen/card/Card25'
import Card26 from '@/components/comen/card/Card26'
import Card27 from '@/components/comen/card/Card27'
import Card28 from '@/components/comen/card/Card28'
import Card29 from '@/components/comen/card/Card29'
import Card30 from '@/components/comen/card/Card30'
import Card31 from '@/components/comen/card/Card31'
import Card32 from '@/components/comen/card/Card32'
import Card33 from '@/components/comen/card/Card33'
import Card34 from '@/components/comen/card/Card34'
import Card35 from '@/components/comen/card/Card35'
import Card36 from '@/components/comen/card/Card36'
import Card37 from '@/components/comen/card/Card37'
import Card38 from '@/components/comen/card/Card38'

export default function page() {
    return (
        <>
            <div className='w-full py-[100px]'>
                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 1</h1>
                    <Card1
                        image="assets/images/by-destination.png"
                        title="Be My Guest"
                        description="The original local travel experience"
                        button="Search Offers"
                        classNameTitle=""
                        classNameDescription=""
                        classNameButton=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 2</h1>
                    <Card2
                        image="assets/images/by-destination.png"
                        title="Be My Guest"
                        description="The original local travel experience"
                        button="Search Offers"
                        classNameTitle=""
                        classNameDescription=""
                        classNameButton=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 3</h1>
                    <Card3
                        type="1"
                        image="assets/images/by-destination.png"
                        title="Be My Guest"
                        title2="Be My Guest"
                        description="With Mohara Dole in her immersive three-hour cooking class in Rajagiriya, explore the rich tastes of Sri Lanka. Cooking is her art; it combines self-expression with play and worship. She leads foodies on a vibrant tour of rices and curries, each bursting with taste and scent. Come cook with her at the stove, make real food, and leave equipped to replicate it at home. Experience on "
                        link="#"
                        linkText="Classic Sri Lankan Delights."
                        classNameTitle=""
                        classNameDescription=""
                        linkClassName="" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 4</h1>
                    <Card4
                        image="assets/images/by-destination.png"
                        title="Be My Guest"
                        description="Travel knowing you're helping to advance 17 of the United Nations' Sustainable Development Goals, which serve as a global blueprint for sustainable development. Each MAKE TRAVEL RESPONSIBLE® Experience contributes to up to two United Nations Sustainable Development Goals."
                        link="#"
                        linkText="Learn more"
                        classNameTitle=""
                        classNameDescription=""
                        classNameLink="" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 5</h1>
                    <Card5 image="assets/images/by-destination.png"
                        title="Ancient Rice Revival Movement"
                        description="Sustainable travel experiences enhance your understanding of the world and support local communities, making your tour more meaningful and purposeful."
                        experience="Classic Sri Lankan Delights."
                        classNameTitle=""
                        classNameDescription="" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 6</h1>
                    <Card6
                        image="assets/images/by-destination.png"
                        title="Colombo City Tour with Photographer Mark Forbes"
                        day="Day 2"
                        description="Follow the Slea Head route, a dramatic coastal drive around the Dingle Peninsula, where sheer cliffs, secluded beaches, and ancient ruins reflect centuries of settlement. Pass prehistoric ring forts, beehive huts and Ogham stones, evidence of early Gaelic communities. Offshore, see the Blasket Islands, once home to a resilient Irish-speaking population who, facing isolation and hardship, relocated to the mainland in 1953."
                        classNameTitle=""
                        classNameDescription=""
                        hoverColor="bg-mygreenhover"
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 7</h1>
                    <Card7 image="assets/images/by-destination.png"
                        title="Grand Hotel"
                        title2="Colombo City Tour with Photographer Mark Forbes"
                        description="The luxurious Mahoora Safari Camp is located on the border of Wilpattu National Park, known for its leopards. A quintessential glamping experience and satisfying blend of comfort and nature,"
                        facilities={["Bar", "Room", "Service", "Laundry", "Gym", "Swimming Pool", "24-hour Front Desk"]}
                        classNameTitle=""
                        classNameTitle2=""
                        classNameDescription=""
                        hoverColor="bg-mygreenhover" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 8</h1>
                    <Card8
                        image="assets/images/by-destination.png"
                        title="Grand Hotel"
                        description="The luxurious Mahoora Safari Camp is located on the border of Wilpattu National Park, known for its leopards. A quintessential glamping experience and satisfying blend of comfort and nature,"
                        classNameTitle=""
                        classNameDescription="" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Tour Card</h1>
                    <TourCard tour={TOUR_DATA[0]} />
                </div>

                <div className='w-full mt-20 px-10'>
                    <h1 className='text-center mb-4'>Tour Card List</h1>
                    <TourCardList tour={TOUR_DATA[0]} isShowMap={true} isPricePerDay={true} />
                </div>

                <div className='w-[50%] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 9</h1>
                    <Card9
                        image="assets/images/by-destination.png"
                        title="Late Night Wilderness Walk"
                        description="This guided walk along tea estate routes is  a special experience for wildlife enthusiasts."
                        classNameTitle=""
                        classNameDescription=""
                        linkClassName=""
                        backgroundColor="bg-bggray1" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 10</h1>
                    <Card10
                        image="assets/images/by-destination.png"
                        title="Luxury"
                        description="Experience pure elegance in which every element whispers uniqueness and sophistication"
                        link="#"
                        classNameTitle=""
                        classNameDescription="" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 11</h1>
                    <Card11
                        image="assets/images/by-destination.png"
                        title="See the real thing"
                        description="Through our well designed sacred trips, let Sri Lanka's spiritual legacy envelop you. See the revered Temple of the Tooth in Kandy housing Buddha's holy relic, enjoy the peace of old cave temples at Dambulla, or take part in a traditional puja celebration at a nearby Buddhist temple. These deep events gently, contemplatively link you to the island's rich spiritual legacy."
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 12</h1>
                    <Card12
                        image="assets/images/by-destination.png"
                        title="Leisurely"
                        description="Experience pure elegance in which every element whispers uniqueness and sophistication"
                        icon="assets/icons/diamond-1.png"
                        linkText="Read More"
                        link="#"
                        classNameTitle=""
                        classNameDescription=""
                        classNameLink="" />
                </div>

                <div className='w-[100%] mx-auto mt-20 px-10'>
                    <h1 className='text-center mb-4'>Card 13</h1>
                    <Card13
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="Heritage Drum Craft"
                        description="Drum making in Sri Lanka is a fascinating craft deeply rooted in the country's culture and traditions, this cultural heritage is passed down through generations. The drums are produced by skilled artisans and are not only musical instruments, but they also play a vital role in religious ceremonies, traditional performances, and cultural events throughout the country. Each drum tells a story, connecting the present with the rich history and traditions of Sri Lanka.
                    <br />
                    <br />
                    Your visit supports United Nations Sustainable Development Goal 11: Cities and Communities."
                        classNameTitle=""
                        classNameDescription="" />
                </div>

                <div className='w-[100%] mx-auto mt-20 px-10'>
                    <h1 className='text-center mb-4'>Card 14</h1>
                    <Card14
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="Meet a Practicing Buddhist for a Walk through Ritigala Jungle"
                        description="Meet a practising Buddhist and embark on a guided walking tour through Ritigala Jungle and hear tales of the forest dwelling monks, a monastic community, who once inhabited the monastic reserve, devoting their lives to living simply in the forest."
                        classNameTitle=""
                        classNameDescription=""
                        classNameImage=""
                    />
                </div>

                <div className='w-[100%] mx-auto mt-20 px-10'>
                    <h1 className='text-center mb-4'>Card 15</h1>
                    <Card15
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="COLOMBO"
                        description="The commercial capital of Sri Lanka; Colombo is a bustling city with a rich history, packed with a plethora of things to do and mesmerizing attractions from city temples to skyrise buildings, verdant parks and national monuments. The city is a potpourri of cultures, religions and races making it the most diverse on the island. "
                        button="Discover Colombo"
                        buttonVariant="outline"
                        locations="Pettah, Gangarama, Galle face Green"
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>

                <div className='w-[100%] mx-auto mt-20 px-10'>
                    <h1 className='text-center mb-4'>Card 16</h1>
                    <Card16
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="KANDY"
                        description="Discover some of the top things to do in Kandy as you explore the stunning. charms of the city nestled between towering mountains"
                        button="Discover Kandy"
                        buttonVariant="outline"
                        locations="Kandy Lake, Gadaladeniya, Bahirawakanda"
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20 '>
                    <h1 className='text-center mb-4'>Card 17</h1>
                    <Card17
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="Leslie Pallas, Travel Director"
                        title2="‘HUGE VARIETY’"
                        description="“From golden beaches down the coast to misty tea farms hidden in the mountains, I truly enjoy showing visitors Sri Lanka's rich tapestry. One is delighted to find ancient cities alive and vibrant, then to marvel at lush jungles full of life.“"
                        experience="Canvas of Ceylon"
                        buttonText="Meet Our Travel Directors"
                        darkLight="dark"
                        classNameTitle=""
                        classNameTitle2=""
                        classNameDescription=""
                        classNameExperience=""
                        classNameButton="hover:shadow-white"
                        backgroundColor="bg-mygreen3"
                    />
                </div>

                <div className='w-[100%] mx-auto mt-20 px-10'>
                    <h1 className='text-center mb-4'>Card 18</h1>
                    <Card18
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="Get your free brochure"
                        description="Find your next escape with the Asia's leading travel brand"
                        buttonText="Request A Brochure"
                        classNameTitle=""
                        classNameDescription=""
                        classNameButton=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20 '>
                    <h1 className='text-center mb-4'>Card 19</h1>
                    <Card19
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="HANDPICKED"
                        subTitle="Hotels"
                        description="Whether in a chic city boutique hotel or a quiet villa, discover the best in hospitality. Every stay promises flawless service, opulent rooms, and an unforgettable ambiance, so combining comfort with elegance for the ideal vacation. Savish simple elegance."
                        classNameTitle=""
                        classNameSubTitle=""
                        classNameDescription=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20 '>
                    <h1 className='text-center mb-4'>Card 20</h1>
                    <Card20
                        title="Sri Lanka - Paradise Found!"
                        rating={5}
                        content="“From golden beaches down the coast to misty tea farms hidden in the mountains, I truly enjoy showing visitors Sri Lanka's rich tapestry. One is delighted to find ancient cities alive and vibrant, then to marvel at lush jungles full of life.“"
                        feedbackAuthor="Franziska Dietrich"
                        link="#"
                        linkText="Classic Sri Lanka"
                        classNameTitle=""
                        classNameDescription=""
                        classNameAuthor=""
                        classNameLink=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20 '>
                    <h1 className='text-center mb-4'>Card 21</h1>
                    <Card21
                        title1="Unlock the best..."
                        title2="Why is Sri Lanka ideal for spiritual journeys?"
                        description="Of Sri Lanka’s heritage by exploring sacred templates"
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        videoId=""
                        classNameTitle1=""
                        classNameDescription=""
                        classNameTitle2=""
                    />
                </div>

                <div className='w-[100%] mx-auto mt-20 px-10'>
                    <h1 className='text-center mb-4'>Card 22</h1>
                    <Card22
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="“Unforgettable”"
                        feedback="We started an amazing trip through Sri Lanka in 2024, personally feeling its warmth and beauty. The touching “Be My Guest” event in Kandy was among the most treasured memories. We were invited into the hillside house of a local family, where the air smelt of spices and laughter abound. My son struck up a conversation with our host's young daughter as we were gathering to eat a traditional meal—only to learn their names matched! We shall treasure this experience always because of the delight, the connection, and the one perfect serendipitous moment."
                        feedbackAuthor="Generva Hertig"
                        city="Kandy"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>

                <div className='w-[100%] mx-auto mt-20 px-10'>
                    <h1 className='text-center mb-4'>Card 23</h1>
                    <Card23
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="“Unforgettable”"
                        feedback="We started an amazing trip through Sri Lanka in 2024, personally feeling its warmth and beauty. The touching “Be My Guest” event in Kandy was among the most treasured memories. We were invited into the hillside house of a local family, where the air smelt of spices and laughter abound. My son struck up a conversation with our host's young daughter as we were gathering to eat a traditional meal—only to learn their names matched! We shall treasure this experience always because of the delight, the connection, and the one perfect serendipitous moment."
                        feedbackAuthor="Generva Hertig"
                        city="Kandy"
                        classNameTitle=""
                        classNameFeedback=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20 px-10 bg-red-400'>
                    <h1 className='text-center mb-4'>Card 24</h1>
                    <Card24
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="“Unforgettable”"
                        description="itous moment."
                        linkLabel="Find out more"
                        linkHref="#"
                        classNameTitle=""
                        classNameDescription=""
                        classNameLink=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 25</h1>
                    <Card25
                        image="assets/images/by-destination.png"
                        title="Luxury"
                        description="Experience pure elegance in which every element whispers uniqueness and sophistication"
                        classNameTitle=""
                        classNameDescription="" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 26</h1>
                    <Card26
                        title="Leisurely"
                        description="Experience pure elegance in which every element whispers uniqueness and sophistication"
                        icon="assets/icons/diamond-1.png"
                        classNameTitle=""
                        classNameDescription="" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 27</h1>
                    <Card27
                        image="assets/images/by-destination.png"
                        title="Be My Guest"
                        title2="Culinary & Community Expert"
                        description={"'From Jaffna's curry pots to Galle's cinnamon gardens, I connect you with flavors and stories. Your joy tasting a hopper fresh off the fire? That's my why'."}
                        button="Search Offers"
                        classNameTitle=""
                        classNameDescription=""
                        classNameButton=""
                    />
                </div>


                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 28</h1>
                    <Card28
                        title="Step 01"
                        description="Choose your dream location, dates, preferences, and any other requests for your ideal vacation to submit your request."
                        icon="assets/icons/diamond-1.png"
                        classNameTitle=""
                        classNameDescription="" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 29</h1>
                    <Card29
                        image="assets/images/by-destination.png"
                        title="Be My Guest"
                        description={"'From Jaffna's curry pots to Galle's cinnamon gardens, I connect you with flavors and stories. Your joy tasting a hopper fresh off the fire? That's my why'."}
                        link="#"
                        linkText="Find out more"
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 30</h1>
                    <Card30
                        image="assets/images/by-destination.png"
                        title="Multi tour Discount"
                        title2="Save 2.5%"
                        description={"Save money by booking two Travelgate tours that last seven days or more. Take three tours and save two."}
                        button="Contact Us"
                        classNameTitle=""
                        classNameTitle2=""
                        classNameDescription=""
                        classNameButton=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 31</h1>
                    <Card31
                        number="1"
                        title='You refer'
                        description={"Through the use of the following form, you can recommend TravelGate tours to members of your family and friends who have not yet experienced them. The number of times that you can make a reference is not limited in any way."}
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>

                <div className='w-[100%] mx-auto mt-20 px-10'>
                    <h1 className='text-center mb-4'>Card 32</h1>
                    <Card32
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="Why choose us?"
                        description="Meet our lively makers and creators, as well as the local storytellers who love to tell you about the best things about these one of a kind places. Enjoy unique food experiences that will delight your senses, and let your expert guide show you the famous sights that will leave you in awe. Your trip will be expertly planned, with every detail taken care of, so that your adventure goes smoothly, without stress, and at the right time. We have more than 10 years of experience showcasing these amazing places, and we've learned a lot and developed a lot of passion that lets us make your trip unforgettable."
                        button="Find Your Trip"
                        buttonVariant="default"
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>

                <div className='w-[100%] mx-auto mt-20 px-10'>
                    <h1 className='text-center mb-4'>Card 33</h1>
                    <Card33
                        image="assets/images/tour-images/boutique-sri-lanka.png"
                        title="Making the world a better place"
                        description="We are all about responsible travel because being mindful on a trip changes both the traveller and the destination. For TGT, it means creating unique experiences that respect places, give communities power, and protect wildlife through our sustainability strategy, Amity Gate. We don't just leave smaller footprints; we also leave positive legacies. Every itinerary is made to help travellers connect with each other, not to consume. This planned approach makes sure that your trips help protect fragile cultures and ecosystems while also making memories that last. Because journeys that change you, like those we craft, should make the world a better place, not take advantage of it. Travel with purpose. Return changed."
                        button="Learn More"
                        buttonVariant="default"
                        classNameTitle=""
                        classNameDescription=""
                    />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 34</h1>
                    <Card34
                        image="assets/images/by-destination.png"
                        title="Magnificent Stays"
                        description="High end hotels that take care of all your needs. Great places with glamorous properties. To find excellence, you need great service. Partner hotels and one of a kind boutique hotels for luxurious stays."
                        icon="assets/icons/diamond-1.png"
                        linkText="Find Out More"
                        link="#"
                        classNameTitle=""
                        classNameDescription=""
                        classNameLink="" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 35</h1>
                    <Card35
                        title="100% Financial Protection"
                        description="Book in the confidence your money is 100% safe. All Travelgate holidays are fully bonded by Sri Lanka's top tourism authority (SLTDA). So go ahead and plan that unmatched, once in a lifetime trip. We are here for you."
                        icon="assets/icons/diamond-1.png"
                        classNameTitle=""
                        classNameDescription="" />
                </div>

                <div className='w-[400px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 36</h1>
                    <Card36 image="assets/images/by-destination.png"
                        title="Near-term targets (2030)"
                        description={[
                            'Sustainable travel experiences enhance your understanding of the world.',
                            'Support local communities to make your tour more meaningful and purposeful.'
                        ]}
                        classNameTitle=""
                        classNameDescription="" />
                </div>

                <div className='w-[800px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 37</h1>
                    <Card37 image="assets/images/by-destination.png"
                        title="Nutrition"
                        description="Does the animal have access to a diet that is both healthy and balanced, and where it is similar to what it would consume in the wild? Of course, in addition to clean water?"
                        icon="assets/icons/nutrition.svg"
                        classNameTitle=""
                        classNameDescription="" />
                </div>

                 <div className='w-[800px] mx-auto mt-20'>
                    <h1 className='text-center mb-4'>Card 38</h1>
                    <Card38
                        title="Find out more"
                        description="Take a look at our comprehensive Animal Welfare Policy."
                        icon="assets/icons/plus-3.svg"
                        classNameTitle=""
                        classNameDescription="" />
                </div>

            </div>
        </>
    )
}
