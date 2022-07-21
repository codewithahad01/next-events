import React from "react";
import Image from 'next/image'
import Link from "next/link"

function EventItem(props) {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formatAddress = location.replace(", ", "\n");
    const exploreLink = `/events/${id}`;


    return (
        <li className=' p-6 border my-6 bg-cyan-600 text-white rounded-lg shadow-xl md:flex md:m-10'>
        <div className="my-10">   
            <Image src={"/" + image} alt={title} width="350" height="200" layout="fixed"></Image>
        </div>
        <div className="text-gray-300 md:p-4 md:my-4">
            <div>
            <h2 className="text-xl font-bold md:text-3xl">{title}</h2>
            </div>
            <div>
            <time className="font-bold">{humanReadableDate}</time>
            </div>
            <div>
            <address>{location}</address>
            </div>
            <div className="md:mt-28 md:float-right my-2 text-purple-700 bg-yellow-400 rounded-lg p-2 shadow-xl">
            <Link href={exploreLink}>Explor Event</Link>
            </div>
        </div>
        </li>
    );
}

export default EventItem;
