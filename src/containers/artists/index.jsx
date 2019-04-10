import React from 'react';
import Axios from 'axios';

import Artist from './artist';
import VideoContainer from '../../components/videoContainer';

import './artists.css';

const axios = Axios.create({ baseURL: process.env.REACT_APP_API });

class Artists extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			artists: null
		};

		this.artists = null;
		this.events = null;

		this.fetchArtists();
		this.fetchEvents();
	}

	fetchArtists = async () => {
		const artists = await axios.get('artists');
		this.artists = artists.data;

		this.updateArtists();
	}

	fetchEvents = async () => {
		const events = await axios.get('events');
		this.events = events.data;

		this.updateArtists();
	}

	updateArtists = () => {
		if(this.artists === null) {
			return;
		}

		const artists = this.artists.map((artist, i) => {
			// Get corresponding events
			let events = null;

			if(this.events) {
				events = this.events
					.filter(event => event.artistId === artist.id)
					.map(event => {
						const date = new Date(event.start);
						const hours = date.getHours();
						const minutes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;

						return {
							...event,
							start: `${hours}h${minutes}`
						}
					});
			}

			return (
				<Artist
					name={artist.name}
					image={`${process.env.REACT_APP_API}${artist.image}`}
					link={artist.link}
					hour={(events && events.length) ? events[0].start : ''}
					place={(events && events.length) ? events[0].place : ''}
					key={i}
				/>
			);
		}	);

		this.setState({
			artists
		});
	}

	render() {
		return (
			<div className="page-container" id="artists">
				<h1 className="centered">Artistes</h1>
				<hr />

				{ this.artists ? (
					this.state.artists
				) : (
					<div className="loader"><i className="fas fa-spinner fa-spin"></i></div>
				)}

				<VideoContainer
					title="Annonce des artistes 2019"
					src="https://www.youtube.com/embed/jNQAr9TnaA4"
					style={{ maxWidth: 700, margin: '40px auto 20px auto' }}
				/>
			</div>
		);
	}
}

export default Artists;