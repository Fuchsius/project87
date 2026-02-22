"use client";

import Breadcrumb from "@/components/comen/Breadcrumb";
import { Button } from "@/components/comen/button";
import RenderStar from "@/components/RenderStar";
import { ChevronRight } from "lucide-react";
import { CiCircleQuestion } from "react-icons/ci";
import Link from "next/link";
import { FaInfoCircle, FaTag } from "react-icons/fa";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import TabNavigation from "@/components/TabNavigation";
// import Itinerary from "@/components/pages/itinerary";
import SeasonRates from "./SeasonRates";
import TravelResponsibleCarousel from "./TravelResponsibelCarousel";

const page = () => {
  const tabs = [
    { name: "itinerary", label: "Your itinerary" },
    { name: "season-rates", label: "Season & Rates" },
    { name: "highlights", label: "Tour Highlights" },
    { name: "reviews", label: "Reviews" },
  ];

  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "itinerary"; // Default to 'itinerary'

  // Render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "itinerary":
        // return <Itinerary />;
      case "season-rates":
        return <SeasonRates />;
      case "highlights":
        return <TravelResponsibleCarousel />;
      case "reviews":
        return <div>Here are the reviews...</div>;
      default:
        return <div>Invalid tab selected.</div>;
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="w-full flex flex-col items-center lg:items-start pt-4 pb-11">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Tours" },
              { label: "Tour Name" },
            ]}
          />

          <div className=" mt-8 grid grid-cols-1 md:grid-cols-2 w-full">
            <div className=" flex flex-col">
              <div className="flex items-center">
                <RenderStar rating={4.2} />
                <span className="text-sm ml-3 text-textcolor2 underline decoration-dotted underline-offset-2 decoration-myred hover:decoration-solid cursor-pointer">
                  22 reviews
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] text-textcolor1 font-bold font-sourceSerif w-full mt-5">
                Canvas of Ceylon
              </h2>

              <div className="bg-[url(/assets/images/bg/savelable2.svg)] bg-cover bg-right text-white flex items-center justify-center ps-2 pe-6 py-1 cursor-default mt-5 mr-auto">
                <span className="text-sm text-start font-bold">
                  Private Customizable Trip
                </span>
              </div>

              <h3 className=" text-xl md:text-[22px] text-textcolor2 font-semibold font-sourceSerif w-full mt-2">
                Immersion & discovery
              </h3>
            </div>
            <div className="flex flex-col items-end justify-center w-full gap-4">
              <div className="flex w-full gap-5">
                <div className="flex flex-col w-full items-end justify-center gap-2">
                  <div className="flex items-center gap-1 text-xs text-textcolor1">
                    Last Minute Deal
                    <CiCircleQuestion size={18} className=" cursor-pointer" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-bold text-textcolor1">From</span>
                    <span className="text-2xl font-bold text-seletedred">
                      US$ 6958
                    </span>
                  </div>

                  <div className=" flex items-center gap-2">
                    <span className=" text-textcolor3 line-through ms-2 font-light">
                      was US$ 9,470
                    </span>
                    <div className=" flex items-center gap-2 py-[6px] px-[10px] bg-seletedred text-white text-sm font-semibold rounded-md">
                      <FaTag size={12} />
                      Save up to US$ 663
                    </div>
                  </div>

                  <div className="text-sm text-textcolor1 font-semibold underline decoration-dotted underline-offset-2 decoration-myred hover:decoration-solid cursor-pointer">
                    Find this price
                  </div>
                </div>
                <div className=" flex flex-col gap-4 justify-center">
                  <Button className=" px-5 text-nowrap h-11 w-40">
                    See Dates
                  </Button>
                  <Button
                    variant={"outline"}
                    className=" px-5 text-nowrap h-11 w-40"
                  >
                    Easy Quote
                  </Button>
                </div>
              </div>
              <div className=" bg-bggray1 py-2 px-6 text-[10px] text-textcolor1 max-w-[570px] flex">
                <FaInfoCircle className=" my-auto mr-2" size={20} />
                To enquire in local currency, call or click the Easy Quote
                button and enter your preferred currency in the Additional
                Information box.
              </div>
            </div>
          </div>
        </div>

        <TabNavigation tabs={tabs} defaultTab="itinerary" />

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </>
  );
};

export default page;
