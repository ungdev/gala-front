import React from 'react';

import img from '../../../assets/artists/frenchFuse.jpg';

import './events.css';

class Events extends React.Component {
	constructor(props) {
		super(props);

		let events = [{
			name: "Nom de l'événement 1",
			start: "2019-05-18 20:00:00",
			end: "2019-05-18 22:00:00",
			place: "Emplacement de l'événement",
			description: "Description de l'événement"
		},
		{
			name: "Nom de l'événement 2",
			start: "2019-05-18 21:00:00",
			end: "2019-05-18 23:00:00",
			place: "Emplacement de l'événement",
			description: "Description de l'événement"
		}];

		events.sort((event1, event2) => {
			const date1 = new Date(event1.start);
			const date2 = new Date(event2.start);

			return date1 === date2 ? 0 : (date1 < date2 ? -1 : 1);
		});

		events = events.map(event => {
			const startDate = new Date(event.start);
			const endDate = new Date(event.end);

			return {
				...event,
				start: this.getDateFormat(startDate),
				end: this.getDateFormat(endDate)
			};
		});

		this.events = events.map((event, i) => (
			<div className="event" key={i}>
				<div className="event-dates">
					<div className="event-start">{event.start}</div>
					<div className="event-date-line"></div>
					<div className="event-end">{event.end}</div>
				</div>
				<div className="event-image"><img src={img} alt="" /></div>
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
				{ this.events }
			</div>
		);
	}
}

export default Events;