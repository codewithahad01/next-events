import React from 'react'
import EventItem from './EventItem'

function EventList(props) {
    const { items } = props
    return (
        <div>
            <ul>
                {items.map(event => <EventItem date='' key={EventItem.id} /> )}
            </ul>
        </div>
    )
}

export default EventList