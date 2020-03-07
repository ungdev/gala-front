import React from 'react';

import axios from '../../utils/axios';

import './partners.css';

class Partners extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			partners: null,
		};

		this.fetchPartners();
	}

	fetchPartners = async () => {
		let partners = await axios.get('partners');

		partners = partners.data.map((partner, i) => (
			<a href={partner.url} className="partner-link" key={i}>
				<div className="partner" data-name={partner.name}>
					<div className="partner-image">
						<img src={`${process.env.REACT_APP_API}${partner.image}`} alt={partner.name} />
					</div>
				</div>
			</a>
		));

		this.setState({
			partners,
		});
	};

	render() {
		return (
			<div className="page-container" id="partners">
				<h1 className="centered">Partenaires</h1>
				<hr />

				{this.state.partners && this.state.partners.length ? (
					<div className="partners-list">{this.state.partners}</div>
				) : this.state.partners === null ? (
					<div className="partners-loader">
						<i className="fas fa-spinner fa-spin"></i>
					</div>
				) : (
					<div className="no-partners">(Les partenaires seront bientôt disponibles)</div>
				)}
			</div>
		);
	}
}

export default Partners;
