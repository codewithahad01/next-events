import { get } from "http"

export async function getAllEvents() {
    const response = await fetch('https://nextjs-course-1110d-default-rtdb.firebaseio.com/events.json')
    const data = await response.json()

    const events = []

    for(const key in data) {
        events.push({
            ...data[key],
            id: key
        })
    }
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents()
    return allEvents.filter((event) => event.isFeatured);
}

