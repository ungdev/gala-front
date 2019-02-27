import React from 'react';

import './artist.css';

class Artist extends React.Component {
	render() {
		return (
			<div className="artist">
				<div className="artist-container">
					<div className="artist-image">
						<img
							src={this.props.image}
							alt={this.props.name}
						/>
					</div>
					<div className="artist-infos">
						<div className="artist-name">{this.props.name}</div>
						{ this.props.description && <div className="artist-description">{this.props.description}</div> }

						{ (this.props.hour || this.props.place) && <div className="artist-divider"></div> }

						{ this.props.hour && (
							<div className="artist-hour">
								<i className="far fa-clock icon"></i>
								{this.props.hour}
							</div>
						)}
						{ this.props.place && (
							<div className="artist-place">
								<i className="fas fa-map-marker-alt icon"></i>
								{this.props.place}
							</div>
						)}

						{ this.props.link && (
							<a href={this.props.link} className="artist-link">Page de l'artiste <i class="fas fa-external-link-alt icon"></i></a>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Artist;