import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        <li className=''>
        <Image src={"/" + image} alt={title} width="350" height="250"></Image>
        <div>
            <div>
            <h2>{title}</h2>
            </div>
            <div>
            <time>{humanReadableDate}</time>
            </div>
            <div>
            <address>{location}</address>
            </div>
            <div>
            <Link href={exploreLink}>Explor Event</Link>
            </div>
        </div>
        </li>
    );
}

export default EventItem;
