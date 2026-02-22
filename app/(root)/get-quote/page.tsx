import { QuoteRequestForm } from "./QuoteRequestForm"
import { ContactSidebar } from "./ContactSidebar"
import BreadCrumb from "@/components/BreadCrumb"

export default function Home() {
  return (
    <div className="my-container mb-24">
      {/* Breadcrumb */}

      <div className="mt-2 w-full">
        <BreadCrumb items={[
          { label: "Home", href: "/" },
          { label: "Request a Quote", href: "/get-quote" },
        ]} />
      </div>

      {/* Main Content */}
      <div className="w-full mt-8">
        {/* Header */}
        <div className=" text-center">
          <h1 className="text-4xl font-bold text-textcolor1 font-sourceSerif lg:text-[32px] md:text-[28px] text-[22px]">Request a quote</h1>
          <p className="mt-2 text-textcolor1 text-sm md:text-base  mx-auto">
            Take the first step to finding your perfect Trafagar tour. Complete the form with your requirements and
            questions and one of our friendly travel experts will be in touch soon.
          </p>
          <p className="text-textcolor1 text-sm md:text-base mx-auto">
            Did you know that when you travel with Trafagar, you not only experience life-changing travel you also
            support people, the planet, and wildlife. Together, WE MAKE TRAVEL MATTER®
          </p>
        </div>

        {/* Form and Sidebar */}
        <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-10 gap-8">
          <div className="md:col-span-6">
            <QuoteRequestForm />
          </div>
          <div className="md:col-span-4">
            <ContactSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
