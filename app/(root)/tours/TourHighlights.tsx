import React from 'react'
import Card13Carousel1 from '@/components/comen/carousel/Card13Carousel1'
import Card14Carousel1 from '@/components/comen/carousel/Card14Carousel1'
import Card7Carousel1 from '@/components/comen/carousel/Card7Carousel1'

const card13Carousel1Data = [
    {
        image: "assets/images/tour-images/boutique-sri-lanka.png",
        title: "Heritage Drum Craft",
        description: "Drum making in Sri Lanka is a fascinating craft deeply rooted in the country's culture and traditions, this cultural heritage is passed down through generations. The drums are produced by skilled artisans and are not only musical instruments, but they also play a vital role in religious ceremonies, traditional performances, and cultural events throughout the country. Each drum tells a story, connecting the present with the rich history and traditions of Sri Lanka.<br /><br />Your visit supports United Nations Sustainable Development Goal 11: Cities and Communities.",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/tour-images/image01.png",
        title: "Sustainable Wildlife Conservation",
        description: "Join us in efforts to protect Sri Lanka's diverse wildlife. Our experiences focus on responsible tourism that supports local conservation projects and educates visitors about the importance of biodiversity.<br /><br />Your visit supports United Nations Sustainable Development Goal 15: Life on Land.",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/tour-images/maps/1.jpg",
        title: "Community-Based Tourism",
        description: "Experience authentic Sri Lankan culture through community-led initiatives that empower local people while preserving traditional practices. Learn about local crafts, cuisine, and ways of life.<br /><br />Your visit supports United Nations Sustainable Development Goal 8: Decent Work and Economic Growth.",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/tour-images/boutique-sri-lanka1.png",
        title: "Eco-Friendly Adventures",
        description: "Explore Sri Lanka's natural beauty with minimal environmental impact. Our guided tours use sustainable transportation and promote conservation awareness.<br /><br />Your visit supports United Nations Sustainable Development Goal 13: Climate Action.",
        classNameTitle: "",
        classNameDescription: ""
    }
];

const card7Carousel1Data = [
    {
        image: "assets/images/tour-images/boutique-sri-lanka.png",
        title: "Heritage Drum Craft",
        description: "Drum making in Sri Lanka is a fascinating craft deeply rooted in the country's culture and traditions, this cultural heritage is passed down through generations. The drums are produced by skilled artisans and are not only musical instruments, but they also play a vital role in religious ceremonies, traditional performances, and cultural events throughout the country. Each drum tells a story, connecting the present with the rich history and traditions of Sri Lanka.<br /><br />Your visit supports United Nations Sustainable Development Goal 11: Cities and Communities.",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/tour-images/image01.png",
        title: "Sustainable Wildlife Conservation",
        description: "Join us in efforts to protect Sri Lanka's diverse wildlife. Our experiences focus on responsible tourism that supports local conservation projects and educates visitors about the importance of biodiversity.<br /><br />Your visit supports United Nations Sustainable Development Goal 15: Life on Land.",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/tour-images/maps/1.jpg",
        title: "Community-Based Tourism",
        description: "Experience authentic Sri Lankan culture through community-led initiatives that empower local people while preserving traditional practices. Learn about local crafts, cuisine, and ways of life.<br /><br />Your visit supports United Nations Sustainable Development Goal 8: Decent Work and Economic Growth.",
        classNameTitle: "",
        classNameDescription: ""
    },
    {
        image: "assets/images/tour-images/boutique-sri-lanka1.png",
        title: "Eco-Friendly Adventures",
        description: "Explore Sri Lanka's natural beauty with minimal environmental impact. Our guided tours use sustainable transportation and promote conservation awareness.<br /><br />Your visit supports United Nations Sustainable Development Goal 13: Climate Action.",
        classNameTitle: "",
        classNameDescription: ""
    }
];

export default function TourHighlights() {
    return (
        <>
            <div className='my-container mt-12'>
                <Card13Carousel1 cards={card13Carousel1Data} />
            </div>

            <div className='my-container mt-12'>
                <Card14Carousel1 cards={card13Carousel1Data} />
            </div>

            <div className='my-container mt-12'>
                <Card7Carousel1
                    cards={card7Carousel1Data}
                    title="All Hotels in Nuwara Eliya"
                    description="Stay in very esteemed hotels with first rate comfort and service. Discover under cover of clouds the energetic cities, historic sites and lush tea estates of Hill Country. Like minded fine hotels ensure your perfect holiday."
                    classNameTitle=""
                    classNameDescription=""
                />
            </div>
        </>
    )
}
