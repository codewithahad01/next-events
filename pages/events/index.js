import React, { Fragment } from 'react'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'


function AllEventsPage() {
    const events = getAllEvents() 
    return (
        <Fragment>
            <EventSearch  />
            <EventList items={events} />
        </Fragment>
    )
}

export default AllEventsPage