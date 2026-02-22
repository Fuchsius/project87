import { Button } from "@/components/comen/button";

export function ContactSidebar() {
  return (
    <div className="w-full">
      {/* Contact Center Card */}
      <div className="w-full shadow-lg">
        <div className="bg-card rounded-t-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-base md:text-lg lg:text-2xl font-bold text-foreground font-sourceSerif">Contact Center</h3>
            <span className="inline-block bg-[#2E9544] text-white text-xs font-semibold px-2 py-1 rounded">Open</span>
          </div>
          <p className=" text-base lg:text-lg text-textcolor1 mb-6">
            Have questions? Not sure which trip is right for you? Our friendly and expert Travel Advisors are here and
            ready to help. Simply give us a call and we'll make your travel dreams real.
          </p>
          <div className="flex items-center gap-3 text-lg font-semibold text-foreground font-sourceSerif">
            <img src="/assets/icons/phone-dark.svg" alt="phone" className="w-5 h-5" />
            <span className="text-textcolor1 text-base md:text-lg lg:text-2xl font-bold">65 6922 5950</span>
          </div>
        </div>

        {/* Opening Hours Card */}
        <div className="bg-e6 rounded-b-sm p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Opening hours</h3>
          <div className="flex justify-between items-center text-sm ">
            <span className="text-textcolor1">Monday-Sunday</span>
            <span className="text-foreground font-medium">00:00 - 23:59 SGT</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full mt-8">
        <div className="w-full flex items-center justify-center">
          <Button
            variant={"outline"}
            className=" px-5 text-nowrap h-11 w-auto font-bold"
          >
            Request a Brochure
          </Button>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <Button
            variant={"outline"}
            className=" px-5 text-nowrap h-11 w-auto font-bold"
          >
            Login to My Travelgate
          </Button>
        </div>
      </div>
    </div>
  )
}
