import React from 'react';
import Axios from 'axios';

import './events.css';

const axios = Axios.create({ baseURL: process.env.REACT_APP_API });

class Events extends React.Component {
	constructor(props) {
		super(props);

		this.events = null;

		this.fetchEvents();
	}

	fetchEvents = async () => {
		let events = await axios.get('events');

		events = events.data
			.sort((event1, event2) => {
				const date1 = new Date(event1.start);
				const date2 = new Date(event2.start);

				return date1 === date2 ? 0 : (date1 < date2 ? -1 : 1);
			})
			.map(event => {
				const startDate = new Date(event.start);
				const endDate = new Date(event.end);

				return {
					...event,
					start: this.getDateFormat(startDate),
					end: this.getDateFormat(endDate),
					image: `${process.env.REACT_APP_API}${event.image}`
				};
			});

		this.events = events.map((event, i) => (
			<div className="event" key={i}>
				<div className="event-dates">
					<div className="event-start">{event.start}</div>
					<div className="event-date-line"></div>
					<div className="event-end">{event.end}</div>
				</div>
				<div className="event-image"><img src={event.image} alt="" /></div>
				<div className="event-content">
					<h3 className="event-name">{event.name}</h3>
					<div className="event-place">{event.place}</div>
					<div className="event-description">{event.description}</div>
				</div>
			</div>
		));
	}

	getDateFormat(date) {
		return `${date.getHours()}h ${(date.getMinutes() < 10 ? '0' : '')}${date.getMinutes()}`;
	}

	render() {
		return (
			<div id="events">
				{ (this.events && this.events.length) ? (
					this.events
				 ) : (
					 <div className="no-events">(Les événements seront bientôt disponibles)</div>
				 )}
			</div>
		);
	}
}

export default Events;