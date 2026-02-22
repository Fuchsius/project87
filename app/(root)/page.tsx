import { Button } from "@/components/comen/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" my-container">
      <h1 className=" my-24 text-4xl font-sourceSerif">Home for testing</h1>
      <img src="./colombo-host-1.avif" alt="" />
      {/* <div className="flex gap-5 bg-white py-12 px-5">
        <p className="relative text-lg font-medium text-gray-800 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2">
          Hover me
        </p>
        <p className="relative text-lg font-medium text-gray-800 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 after:origin-center hover:after:w-full after:-translate-x-1/2">
          Hover me
        </p>
      </div> */}

      {/* <div className=" flex w-[500px] gap-3">
        <Button variant="outline" size={"lg"} className=" w-full">
          Easy Quote
        </Button>
        <Button variant="default" size={"lg"} className=" w-full">
          View Trip
        </Button>
      </div> */}
      {/* <div className=" min-h-dvh bg-fuchsia-500" /> */}
      {/* <div className=" min-h-dvh bg-cyan-500" /> */}
    </div>
  );
}
