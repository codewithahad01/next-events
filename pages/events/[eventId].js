import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLigistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/ErrorAlert";

function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return (
        <ErrorAlert>
            <p>No event found!</p>
        </ErrorAlert>
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

export default EventDetailPage;
