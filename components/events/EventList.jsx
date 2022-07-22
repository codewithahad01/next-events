import React from "react";
import EventItem from "./EventItem";

function EventList(props) {
    const { items } = props;
    return (
        <div className="flex justify-center items-center pt-20 ">
        <ul>
            {items.map((event) => (
            <EventItem
                id={event.id}
                title={event.title}
                location={event.location}
                date={event.date}
                image={event.image}
                key={event.id}
            />
            ))}
        </ul>
        </div>
    );
}

export default EventList;
