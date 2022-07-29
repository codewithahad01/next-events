import React, { Fragment } from 'react'
import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'
import { useRouter } from 'next/router'
import Head from 'next/head'


function AllEventsPage(props) {
    const router = useRouter()
    const { events } = props 
    

    function findEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return (
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta name="description" content="Find lots of great events that allow you to evolve..." />
                <link rel="icon" href="/favicon.ico" />
                <body className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></body>
            </Head>

            <EventSearch onSearch={findEventsHandler}  />
            <EventList items={events} />
        </Fragment>
    )
}

export async function getStaticProps() {
    const events = await getAllEvents()

    return {
        props: {
            events: events
        },
        revalidate: 60
    }
}

export default AllEventsPage