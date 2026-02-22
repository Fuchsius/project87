import { Button } from "@/components/comen/button";
import React, { useState } from "react";

const InsterPhotoSection = () => {
  // Initial set of images to display
  const [visibleImages, setVisibleImages] = useState(12);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "/assets/images/srilanka.png",
      alt: "Palm trees on a beach in Sri Lanka",
    },
    {
      id: 2,
      src: "/assets/images/by-destination.png",
      alt: "Traditional stilt fisherman in Sri Lanka",
    },
    {
      id: 3,
      src: "/assets/images/themes.png",
      alt: "Lotus Tower in Colombo",
    },
    {
      id: 4,
      src: "/assets/images/tour-images/image01.png",
      alt: "Pristine beach in Sri Lanka",
    },
    {
      id: 5,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "View of Kandy city and lake",
    },
    {
      id: 6,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "White Buddhist stupa with visitor",
    },
    {
      id: 7,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Deer in natural habitat in Sri Lanka",
    },
    {
      id: 8,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Tea plantations in hill country",
    },
    {
      id: 9,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Scenic coastal view of Sri Lanka",
    },
    {
      id: 10,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Traditional tuk-tuk with mural art background",
    },
    {
      id: 11,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Train tracks through Ella mountains",
    },
    {
      id: 12,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Aerial view of turquoise ocean waters",
    },
    {
      id: 13,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Sigiriya rock fortress",
    },
    {
      id: 14,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Colorful local market in Sri Lanka",
    },
    {
      id: 15,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Elephants in Yala National Park",
    },
    {
      id: 16,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Traditional Ayurvedic spa treatments",
    },
    {
      id: 17,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Surfing at Arugam Bay",
    },
    {
      id: 18,
      src: "https://api.algobook.info/v1/randomimage?category=nature",
      alt: "Scenic train journey through tea country",
    },
  ];

  // Load more images
  const handleLoadMore = () => {
    setVisibleImages((prev) => Math.min(prev + 6, galleryImages.length));
  };

  return (
    <div className=" w-full py-24">
      <div className="my-container">
        <div className="text-center mb-8">
          <h2 className="font-sourceSerif font-bold text-3xl mb-2 text-textcolor1">
            #TGTCanvasofCeylon
          </h2>
          <p className="text-textcolor1 mb-8 font-sourceSerif font-semibold text-sm mx-auto">
            Authentic experiences from genuine travelers create the most
            memorable travel stories they will ever share
          </p>
        </div>

        {/* Image Gallery Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
          {galleryImages.slice(0, visibleImages).map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="mb-4 hover:scale-105 transition-all rounded-md"
            />
          ))}
        </div>

        {/* Load More Button - only show if there are more images to load */}
        {visibleImages < galleryImages.length && (
          <div className="text-center mt-8">
            <Button onClick={handleLoadMore} size={"lg"}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InsterPhotoSection;
