import type { CollectionEntry } from "astro:content";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import frLocale from '@fullcalendar/core/locales/fr';

interface IEventsListCalendar {
    communities: CollectionEntry<"communities">[];
}

export const EventsListCalendar = ({ communities }: IEventsListCalendar) => {
    const events = communities.flatMap(community =>
        community.data.events.map(event => ({
            id: event.id, // Identifiant unique
            title: `${community.data.name} - ${event.title}`,
            start: event.date,
            url: event.link,
        }))
    );

    console.log(events);

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            locale={frLocale}
            dayHeaderFormat={{ weekday: 'long' }}
            firstDay={1}
        />
    );
};
