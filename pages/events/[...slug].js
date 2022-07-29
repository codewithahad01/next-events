import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { getFilteredEvents } from "../../helpers/api-util";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/ErrorAlert";
import spinner from "../../public/spinner.gif";
import Image from "next/image";
import Head from "next/head";


function FliteredEventsPage(props) {
    const [loadedEvents, setLoadedEvents] = useState();
    const router = useRouter();

    const filterData = router.query.slug;

    const { data, error } = useSWR(
        "https://nextjs-course-1110d-default-rtdb.firebaseio.com/events.json"
    );

    useEffect(() => {
        if (data) {
        const events = [];
        for (const key in data) {
            events.push({
            id: key,
            ...data[key],
            });
        }
        setLoadedEvents(events);
        }
    }, [data]);

    let pageHeadData = <Head>
            <title>Filtered Events</title>
            <meta name="description" content={`A list of filtered events.`} />
            <link rel="icon" href="/favicon.ico" />
            <body className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></body>
        </Head>

    if (!loadedEvents) {
        return (
            <Fragment className="flex justify-center items-center mt-44">
                    {pageHeadData}
                <Image className="" src={spinner} alt="spinner" width={150} height={150} />
                {/* <p className="text-xl">Loading...</p> */}
            </Fragment>
        )
        
    }

    
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth; 

    
    pageHeadData = ( 
        <Head>
            <title>Filtered Events</title>
            <meta name="description" content={`All Events for ${numMonth}/${numYear}`} />
            <link rel="icon" href="/favicon.ico" />
            <body className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></body>
        </Head> 
    )

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12 ||
        error

    )  {
        return (
        <Fragment>
            {pageHeadData}
            <ErrorAlert>
            <p>Invalid Filter. Please Adjust your values!</p>
            </ErrorAlert>
            <div className="flex justify-center items-center ">
            <Button link="/events">Back</Button>
            </div>
        </Fragment>
        );
    }

    const filteredEvents = loadedEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
        eventDate.getFullYear() === numYear &&
        eventDate.getMonth() === numMonth - 1
        );
    });
    if (!filteredEvents || filteredEvents.length === 0) {
        return (
        <Fragment>  
            {pageHeadData}
            <ErrorAlert>
            <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <div className="flex justify-center items-center">
            <Button link="/events">Show All Events</Button>
            </div>
        </Fragment>
        );
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <Fragment>
            {pageHeadData}
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
    }

//     export async function getServerSideProps(context) {
//     const { params } = context;

//     const filterData = params.slug;

//     const filteredYear = filterData[0];
//     const filteredMonth = filterData[1];

//     const numYear = +filteredYear;
//     const numMonth = +filteredMonth;

//     if (
//         isNaN(numYear) ||
//         isNaN(numMonth) ||
//         numYear > 2030 ||
//         numYear < 2021 ||
//         numMonth < 1 ||
//         numMonth > 12
//     ) {
//         return {
//         props: { hasError: true },
        // notFound: true,
        // redirect: {
        //     destination: '/error'
        // }
//         };
//     }

//     const filteredEvents = await getFilteredEvents({
//         year: numYear,
//         month: numMonth,
//     });

//     return {
//         props: {
//         events: filteredEvents,
//         date: {
//             year: numYear,
//             month: numMonth,
//         },
//         },
//     };
// }

export default FliteredEventsPage;
