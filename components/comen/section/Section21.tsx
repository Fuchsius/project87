import React from 'react'

export default function Section21({ data }: { data: any[] }) {
    return (
        <div className='w-full'>

            <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-x-4 gap-y-8 '>
                {
                    data?.map((item: any, index: number) => (
                        <div className='flex gap-4'>
                            <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#EBE7EB] rounded-full flex-shrink-0 flex justify-center items-center'>
                                <img src="/assets/icons/checkmark-dark.svg" alt="" className='w-5 h-5 sm:w-6 sm:h-6' />
                            </div>
                            <p className='text-base text-textcolor1 font-semibold font-sourceSerif'>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
