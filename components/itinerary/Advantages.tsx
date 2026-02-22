import React from "react";
import Image from "next/image";

interface Advantage {
  image: string;
  title: string;
  description: string;
}

interface AdvantagesProps {
  advantages: Advantage[];
}

const Advantages: React.FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-16 gap-y-8">
        {advantages.map((advantage, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Image
              src={advantage.image}
              alt={advantage.title}
              width={100}
              height={100}
              className="max-h-14"
            />
            <div className="flex flex-col">
              <h2 className="sub-title">
                {advantage.title}
              </h2>
              <p className="!text-textcolor3 description">{advantage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Advantages;
