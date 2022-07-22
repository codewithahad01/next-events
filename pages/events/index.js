import React, { Fragment } from 'react'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'
import { useRouter } from 'next/router'


function AllEventsPage() {
    const events = getAllEvents() 
    const router = useRouter()

    function findEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventsHandler}  />
            <EventList items={events} />
        </Fragment>
    )
}

export default AllEventsPage