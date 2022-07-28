import React, { Fragment } from "react";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLigistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Spinner from '../../public/spinner.gif'
import Image from 'next/image'
// import ErrorAlert from "../../components/ui/ErrorAlert";

function EventDetailPage(props) {
    const event = props.selectedEvent;

    if (!event) {
        return (
        <div className="m-auto text-center mt-44">
            {/* <p>Loading...</p> */}
            <Image src={Spinner} alt="Loading..." width={150} height={150} />
        </div>
        )
    }
    return (
        <Fragment>
        <EventSummary title={event.title} />
        <EventLigistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
        />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId

    const event = await getEventById(eventId)
    
    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents()

    const paths = events.map(event => ({ params: { eventId: event.id } }))

    return {
        paths: paths,
        fallback: 'blocking'  
    }
}

export default EventDetailPage;
