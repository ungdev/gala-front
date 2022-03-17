import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { fetchEvents, Event } from '../../../utils/api';

import './events.scss';

function Events() {
  const [events, setEvents] = useState<Event[] | null>(null);

  const fetch = async () => {
    const apiEvents = await fetchEvents();

    const fetchedEvents = apiEvents.data
      .sort((event1, event2) => Date.parse(event1.start) - Date.parse(event2.start))
      .map((event) => ({
        ...event,
        start: moment(event.start).format('HH[h ]mm'),
        end: moment(event.end).format('HH[h ]mm'),
        image: `${import.meta.env.VITE_API_URL}${event.image}`,
      }));

    setEvents(fetchedEvents);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div id="events">
      {events && events.length ? (
        events.map((event, i) => (
          <div className="event" key={i}>
            <div className="event-dates">
              <div className="event-start">{event.start}</div>
              <div className="event-date-line" />
              <div className="event-end">{event.end}</div>
            </div>
            <div className="event-image">
              <img src={event.image} alt="" />
            </div>
            <div className="event-content">
              <h3 className="event-name">{event.name}</h3>
              {event.Place && <div className="event-place">{event.Place.name}</div>}
              <div className="event-description">{event.description}</div>
            </div>
          </div>
        ))
      ) : events === null ? (
        <div className="events-loader">
          <i className="fas fa-spinner fa-spin" />
        </div>
      ) : (
        <div className="no-events">Les événements seront bientôt disponibles</div>
      )}
    </div>
  );
}

export default Events;
