import React from "react";
import Image from 'next/image'
import Link from "next/link"
import Button from "../ui/button";

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
            <Button link={exploreLink}>Explore Event</Button>
            
        </div>
        </li>
    );
}

export default EventItem;
