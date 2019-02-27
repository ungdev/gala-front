import React from 'react';

/*
import Artist from './artist';

import kavinskyImg from '../../assets/kavinsky.jpg';
import guettaImg from '../../assets/guetta.jpg';
import theweekndImg from '../../assets/theweeknd.jpg';
*/

class Artists extends React.Component {
	render() {
		return (
			<div id="artists">
				<h1 className="centered">Artistes</h1>
				<hr />

				<p className="centered">Coming soon...</p>

				{/*
				<Artist
					name="Kavinsky"
					image={kavinskyImg}
					hour="20:30- 21:30"
					place="Grand chapiteau"
					description="Kavinsky (parfois stylisé KΔVINϟKY), de son vrai nom Vincent Belorgey, né le 31 juillet 1975 en Seine-Saint-Denis, est un artiste de musique électronique et un acteur français."
				/>
				<Artist name="David Guetta" image={guettaImg} />
				<Artist name="The Weeknd" image={theweekndImg} />
				*/}
			</div>
		);
	}
}

export default Artists;