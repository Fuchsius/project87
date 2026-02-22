import React from 'react'
import Title2 from '../title/Title2'

export default function Section9({data, title, classNameTitle}: {data: any, title: string, classNameTitle: string}) {
    return (
        <div className="w-full bg-mylightblue3">
            <div className="my-container py-10 text-center">
                <Title2 title={title} className={`text-textcolor1 ${classNameTitle}`} />
                <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-textcolor1 md:text-base text-sm font-semibold">
                    <p>&gt; Population: {data[0].population}</p>
                    <p>&gt; Language: {data[0].languages}</p>
                    <p>&gt; Calling Code: {data[0].callingCode}</p>
                    <p>&gt; Time Zone: {data[0].timeZone}</p>
                    <p>&gt; Currency: {data[0].currency}</p>
                    <p>&gt; Capital City: {data[0].capital}</p>
                    <p>&gt; Electricity: {data[0].electricity}</p>
                </div>
            </div>
        </div>
    )
}
