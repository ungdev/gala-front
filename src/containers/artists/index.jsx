import React from 'react';
import moment from 'moment';

import axios from '../../utils/axios';
import Artist from './artist';
import VideoContainer from '../../components/videoContainer';

import './artists.css';

class Artists extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			artists: null,
		};

		this.fetchArtists();
	}

	fetchArtists = async () => {
		let artists = await axios.get('artists');

		artists = artists.data.map((artist, i) => (
			<Artist
				name={artist.name}
				image={`${process.env.REACT_APP_API}${artist.image}`}
				link={artist.link}
				hour={artist.eventDate ? moment(artist.eventDate, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').format('HH[h]mm') : ''}
				place={artist.eventPlace}
				key={i}
			/>
		));

		this.setState({
			artists,
		});
	};

	render() {
		return (
			<div className="page-container" id="artists">
				<h1 className="centered">Artistes</h1>
				<hr />

				{this.state.artists && this.state.artists.length ? (
					<div className="artists-container">{this.state.artists}</div>
				) : this.state.artists === null ? (
					<div className="artists-loader">
						<i className="fas fa-spinner fa-spin"></i>
					</div>
				) : (
					<div className="no-artists">(Les artistes seront bientôt disponibles)</div>
				)}

				<VideoContainer
					title="Annonce des artistes 2019"
					src="https://www.youtube.com/embed/OqdO92_fBJM"
					style={{ maxWidth: 700, margin: '40px auto 20px auto' }}
				/>
			</div>
		);
	}
}

export default Artists;
