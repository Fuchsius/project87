import React from "react";
import { IoClose } from "react-icons/io5";
import RenderStar from "@/components/RenderStar";
import { Button } from "@/components/comen/button";

const MainDetails = ({ trip, compare, onRemove }: { trip: any; compare: boolean; onRemove?: () => void; }) => {
    const inputUid = React.useId();
    return (
        <>
            {compare ? (

                <div className="w-full bg-white rounded-t-md p-[13px] pb-[20px]">
                    {/* remove button */}
                    <div className="w-full flex items-center justify-center">
                        <button className="flex items-center justify-center gap-2" onClick={onRemove}>
                            <div className="w-[14px] h-[14px] flex items-center justify-center rounded-full bg-textcolor1">
                                <IoClose className="text-white" />
                            </div>
                            <p className="text-textcolor1 font-figtree font-bold text-base">Remove</p>
                        </button>
                    </div>
                    {/* image */}
                    <div className="w-full aspect-video overflow-hidden relative rounded-md my-2">
                        <img
                            src={trip?.image}
                            alt="image"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    {/* starts */}
                    <div className="w-full mt-2">
                        <RenderStar rating={trip.rating} />
                    </div>
                    {/* title */}
                    <div className="w-full h-[80px]">
                        <h4 className="uppercase mt-2 font-medium text-xl text-textcolor1 font-figtree">
                            {trip.title}
                        </h4>
                        {/* subtitle */}
                        <p className=" font-semibold mt-4 font-sourceSerif text-textcolor2 text-base">
                            End Colombo
                        </p>
                    </div>
                    {/* price */}
                    <div className="w-full mt-8">
                        <p className=" font-light text-[13px] font-halyard text-textcolor2 line-through">US$ {trip.price}</p>
                        <h4 className="font-bold font-figtree text-sm">From <span className="text-myred font-figtree font-bold text-lg">US$ 6,500</span> pp</h4>
                    </div>
                    {/* button */}
                    <div className="w-full mt-[13px] ">
                        <h2 className="font-bold font-figtree text-base">Request More Info</h2>
                        <Button variant="default" size="lg" className="mt-[13px] w-[calc(50% + 30px)]">View Trip</Button>
                    </div>
                </div>
            ) : (
                <div
                    className="rounded-md"
                >
                    <div className=" flex flex-col flex-1 p-3">
                        <div className=" w-full h-10 border border-border1 bg-bggray3 rounded-full relative">
                            <input
                                type="text"
                                name="searchtrip"
                                id={`${inputUid}-searchtrip`}
                                placeholder="Search Trips"
                                className="px-4 py-1 w-full h-full focus:outline-none bg-transparent placeholder:text-textcolor3 text-textcolor1 text-sm"
                            />
                            {/* <div className="w-[300px] h-[200px] bg-red-500 absolute top-[60px] left-[60px] rounded-md">
                                <div className=""></div>
                            </div> */}
                        </div>

                        <div className=" text-center text-sm text-textcolor1 my-[25px]">
                            To add another trip, use the search feature to find what you're
                            looking for!
                        </div>

                        <div className="text-center font-bold text-textcolor1 cursor-pointer text-base">
                            Search
                        </div>
                    </div>
                </div>
            )}

        </>

    );
};

export default MainDetails;
