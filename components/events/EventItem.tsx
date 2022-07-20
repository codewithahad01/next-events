import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function EventItem(props) {
    const { title, image, date, location, id } = props 

    const humanReadableDate = new Date(date)

    return (
        <li>
            <Image src='' alt='' width="" height=""></Image>
            <div>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <time>{date}</time>
                </div>
                <div>
                    <address>{location}</address>
                </div>
                <div>
                    <Link href='/' >Explor Event</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem