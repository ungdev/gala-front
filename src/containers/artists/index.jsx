import React from 'react';

import Artist from './artist';
import VideoContainer from '../../components/videoContainer';

import salutCestCoolImg from '../../assets/artists/salutCestCool.jpg';
import frenchFuseImg from '../../assets/artists/frenchFuse.jpg';
import tezCadeyImg from '../../assets/artists/tezCadey.jpg';
import jayStyleImg from '../../assets/artists/jayStyle.jpg';

class Artists extends React.Component {
	render() {
		return (
			<div className="page-container" id="artists">
				<h1 className="centered">Artistes</h1>
				<hr />

				<Artist
					name="Salut c'est cool"
					image={salutCestCoolImg}
					description=""
					link="https://www.facebook.com/salutcestcool/"
					hour=""
					place="Grande scène"
				/>

				<Artist
					name="French Fuse"
					image={frenchFuseImg}
					description=""
					link="https://www.facebook.com/FrenchFuse/"
					hour=""
					place="Grande scène"
				/>

				<Artist
					name="Tez Cadey"
					image={tezCadeyImg}
					description=""
					link="https://www.facebook.com/125292844188815"
					hour=""
					place="Grande scène"
				/>

				<Artist
					name="NRJ extravadance mixé par Jay Style"
					image={jayStyleImg}
					description=""
					link="https://www.facebook.com/JayStyleOfficiel/"
					hour=""
					place="Grande scène"
				/>

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