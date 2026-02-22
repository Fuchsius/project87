import React from 'react'
import Title2 from '@/components/comen/title/Title2'
import { ChevronDown, ChevronUp } from 'lucide-react';

const TripAdvisorLogo = () => <div className="text-sm font-bold"><img src="/assets/icons/tripAdvisor.svg" alt="" /></div>;

const RatingDots = ({ count }: { count: number }) => {
    const circles = Array.from({ length: 5 }, (_, i) => {
        const isFull = count >= i + 1;
        const isHalf = count >= i + 0.5 && count < i + 1;
        const isEmpty = count < i + 0.5;
        return (
            <div key={i} className="w-4 h-4 rounded-full border border-[#00AA6C] relative overflow-hidden">
                {isFull && <div className="absolute inset-0 bg-[#00AA6C] rounded-full"></div>}
                {isHalf && <div className="absolute inset-0  rounded-full half-circle"></div>}
                {isEmpty && <div className="absolute inset-0 border-[#00AA6C] rounded-full"></div>}
            </div>
        );
    });
    return (
        <>
            <style>{`
                .half-circle::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: #00AA6C;
                    border-radius: 50%;
                    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
                }
            `}</style>
            <div className="flex gap-1">{circles}</div>
        </>
    );
};

const RatingBar = ({ label, count, total }: { label: string, count: number, total: number }) => {
    const percentage = (count / total) * 100;
    return (
        <tr className="pb-4">
            <td className="text-textcolor1 text-xs text-left">{label}</td>
            <td className="text-center px-1 py-1">
                <div className="border-[1px] border-textcolor1 w-32 bg-transparent">
                    <div className="bg-textcolor1 h-[14px]" style={{ width: `${percentage}%` }}></div>
                </div>
            </td>
            <td className="text-textcolor1 text-xs text-left">{count}</td>
        </tr>
    );
};

interface Section29Props {
    reviews: any[];
    ratingData: any[];
    expandedReviews: Record<number, boolean>;
    setExpandedReviews: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}

export default function Section29({ reviews, ratingData, expandedReviews, setExpandedReviews }: Section29Props) {
    return (
        <div className="w-full mt-12 bg-[#E4ECEC] py-16 px-4 text-gray-800">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <Title2 title="Guest Reviews" className='text-center' />

                {/* Summary Section */}
                <div className="w-full mt-12 mb-20 sm:block flex justify-center">
                    <div className='max-w-3xl mx-auto flex flex-col sm:flex-row justify-center items-start gap-1'>
                        {/* Column 1: Overall Rating */}
                        <div className="flex sm:justify-start justify-center flex-col items-start w-full md:w-1/3 text-center">
                            <div className="sm:w-auto w-full ">
                                <TripAdvisorLogo />
                                <div className="text-[#00AA6C] text-6xl font-bold mb-1 font-sourceSerif text-center">4.9</div>
                                <div className="font-bold text-textcolor1 text-center">Average Rating</div>
                                <div className="text-xs text-textcolor1 text-center">Based on 173 reviews</div>
                            </div>
                        </div>

                        {/* Column 2: Category Ratings */}
                        <div className="sm:mt-0 mt-8 flex justify-center w-full md:w-1/3 text-center">
                            <table className="m-0 p-0 border-spacing-y-4">
                                <tbody>
                                    {[
                                        { label: "Location", score: 3.5 },
                                        { label: "Cleanliness", score: 5 },
                                        { label: "Services", score: 5 },
                                        { label: "Services", score: 4.5 }, // Replicated typo/duplicate from image
                                    ].map((cat, idx) => (
                                        <tr key={idx}>
                                            <td className="p-0 min-w-16"><RatingDots count={cat.score} /></td>
                                            <td className="pl-3 min-w-20 text-left"><span className="text-xs text-textcolor1">{cat.label}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Column 3: Rating Distribution */}
                        <div className="sm:mt-0 mt-8 flex sm:justify-end justify-center w-full md:w-1/3 text-center">
                            <table className="border-spacing-y-4">
                                <tbody>
                                    {ratingData.map((item, index) => (
                                        <RatingBar key={index} label={item.label} count={item.count} total={173} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-8">
                    {reviews.map((review, index) => (
                        <div key={review.id}>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-12">

                                {/* Left: User Info */}
                                <div className="md:w-1/4 shrink-0">
                                    <div className="mb-2">
                                        <RatingDots count={review.rating} />
                                    </div>
                                    <div className="text-sm text-textcolor1 mb-1">
                                        by <span className="font-medium">{review.author}</span>
                                    </div>
                                    <div className="text-sm text-[#6B6B6B]">
                                        {review.location} <span className="text-textcolor1">{review.date}</span>
                                    </div>
                                </div>

                                {/* Right: Review Content */}
                                <div className="flex-1">
                                    <h3 className="font-bold text-textcolor1 text-lg mb-2">
                                        {review.title}
                                    </h3>
                                    <div className={`overflow-hidden transition-all duration-500 ${expandedReviews[review.id] ? 'max-h-96' : 'max-h-20'}`}>
                                        <p className="text-textcolor1 leading-relaxed mb-3">
                                            {review.content}
                                        </p>
                                    </div>
                                    <button className="mt-1 flex items-center text-sm text-textcolor1 hover:text-textcolor1 transition-colors" onClick={() => setExpandedReviews(prev => ({ ...prev, [review.id]: !prev[review.id] }))}>
                                        {expandedReviews[review.id] ? 'Read less' : 'Read more'} {expandedReviews[review.id] ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                                    </button>
                                </div>

                            </div>

                            {/* Separator (don't show on last item) */}
                            {/* {index < reviews.length - 1 && ( */}
                            <hr className="border-[#D3D4D5] my-8" />
                            {/* )} */}
                        </div>
                    ))}
                </div>

                {/* Footer Disclaimer */}
                <div className="mt-12 text-center text-sm text-textcolor1">
                    These reviews are the subjective opinions of individual travelers and not of TripAdvisor LLC nor of its partners.
                </div>

            </div>
        </div>
    )
}
