import React from 'react';
import moment from 'moment';

import axios from '../../../utils/axios';

import './events.scss';

interface RawEvent {
  start: number;
  end: number;
  image: string;
  name: string;
  place: string;
  description: string;
}

interface EventsState {
  events: JSX.Element[] | null;
}

class Events extends React.Component<{}, EventsState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      events: null,
    };

    this.fetchEvents();
  }

  fetchEvents = async () => {
    const apiEvents = await axios.get<RawEvent[]>('events');

    const events = apiEvents.data
      .sort((event1, event2) => {
        const date1 = new Date(event1.start);
        const date2 = new Date(event2.start);

        return date1 === date2 ? 0 : date1 < date2 ? -1 : 1;
      })
      .map((event) => ({
        ...event,
        start: moment(event.start).format('HH[h ]mm'),
        end: moment(event.end).format('HH[h ]mm'),
        image: `${import.meta.env.VITE_API_URL}${event.image}`,
      }));

    const eventElements = events.map((event, i) => (
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
          <div className="event-place">{event.place}</div>
          <div className="event-description">{event.description}</div>
        </div>
      </div>
    ));

    this.setState({
      events: eventElements,
    });
  };

  render() {
    return (
      <div id="events">
        {this.state.events && this.state.events.length ? (
          this.state.events
        ) : this.state.events === null ? (
          <div className="events-loader">
            <i className="fas fa-spinner fa-spin" />
          </div>
        ) : (
          <div className="no-events">(Les événements seront bientôt disponibles)</div>
        )}
      </div>
    );
  }
}

export default Events;
