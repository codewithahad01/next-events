import React, { Fragment } from "react";
import dummyData, { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/ErrorAlert";


function FliteredEventsPage() {
    const router = useRouter();

    const filterData = router.query.slug;
    if (!filterData) {
        return (
        <p className="flex justify-center text-center text-xl md:text-3xl font-bold">
            Loading...
        </p>
        );
    }
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return (
        <Fragment>  
            <ErrorAlert>  
                <p>Invalid Filter. Please Adjust your values!</p>
            </ErrorAlert>
            <div className="flex justify-center items-center ">
                <Button link='/events'>Back</Button>
            </div>
        </Fragment>
        
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    })

    if(!filteredEvents || filteredEvents.length === 0) {
        return (
        <Fragment>
            <ErrorAlert>
                <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <div className="flex justify-center items-center">
                <Button link='/events'>Show All Events</Button>
            </div>
            
        </Fragment>
        
        )
    }

    const date = new Date(numYear, numMonth - 1)

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
}

export default FliteredEventsPage;
