import React from "react";
import Image from "next/image";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";


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
        <li className=" p-6 border my-6 bg-cyan-600 text-white rounded-lg shadow-xl md:flex md:m-10">
        <div className="h-64 w-96 relative mb-4 md:h-80 md:flex md:justify-center md:mt-6">
            <Image
            src={"/" + image}
            alt={title}
            // width="350"
            // height="250"
            layout="fill"
            objectFit="cover"
            ></Image>
        </div>
        <div className="text-gray-300 md:p-4 md:my-4">
            <div>
            <h2 className="text-xl font-bold md:text-3xl">{title}</h2>
            </div>
            <div className="flex my-2 md:my-4">
                <DateIcon className='' />
                <time className="font-bold mx-3">{humanReadableDate}</time>
            </div>
            <div className="flex">
                <AddressIcon />
            <address className="mx-3">{location}</address>
            </div>
            <Button
                link={exploreLink}>
                <div className="flex justify-center">
                    <span className="mx-4 ">
                        Explore Event
                    </span>
                    <span>
                        <ArrowRightIcon />
                    </span>
                </div>
            </Button>
        </div>
        </li>
    )
}

export default EventItem;
