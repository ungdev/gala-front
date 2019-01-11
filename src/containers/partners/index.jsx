import React from 'react';

import partners from '../../variables/partners';

import './partners.css';

class Partners extends React.Component {
	constructor(props) {
		super(props);

		this.partners = [];

		partners.forEach((partner, i) => {
			const img = require(`../../assets/partners/${partner.image}`);

			this.partners.push(
				<a href={partner.url} className="partner-link" key={i}>
					<div className="partner" data-name={partner.name}>
						<div className="partner-image" style={{ backgroundImage: `url(${img})` }} />
					</div>
				</a>
			);
		});
	}

  render() {
    return (
			<div id="partners">
				<h1 className="centered">Partenaires</h1>
				<hr />

				<div className="partners-list">
					{ this.partners }
				</div>
			</div>
		);
  }
};

export default Partners;