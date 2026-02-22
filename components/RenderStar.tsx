import Image from "next/image";
import React from "react";

type RenderStarProps = {
  rating: number;
  fontSize?: string;
  ratingClassName?: string;
};

export default function RenderStar({ rating, fontSize = "14px", ratingClassName = "" }: RenderStarProps) {

  const safe = Number.isFinite(rating) ? Math.max(0, Math.min(5, rating)) : 0;
  const fullStars = Math.floor(safe);
  const hasHalfStar = safe % 1 !== 0;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div className="flex items-center text-[#FFCD05] gap-[5px]">
      {Array.from({ length: fullStars }).map((_, i) => (
        // <FaStar size={20} key={`full-${i}`} />
        <Image
          key={`full-${i}`}
          src="/assets/icons/fullstart.svg"
          alt="Half Star"
          width={16}
          height={16}
          className=""
        />
      ))}
      {/* {hasHalfStar && <FaStarHalfAlt size={20} key="half" className="" />} */}
      {hasHalfStar && (
        <Image
          src="/assets/icons/halfstart.svg"
          alt="Half Star"
          width={16}
          height={16}
          className=""
        />
      )}
      {/* {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar size={20} key={`empty-${i}`} />
      ))} */}
      <span
        className={`font-bold text-textcolor1 mt-auto ${ratingClassName}`}
        style={{ fontSize }}
      >
        {safe}
      </span>
    </div>
  )
}
