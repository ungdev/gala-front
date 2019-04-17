import React from 'react';

import './appBanner.css';

class AppBanner extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			display: false
		};
	}

	componentDidMount() {
		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();

			this.setState({
				display: true
			});

			alert('beforeinstallprompt');
		});
	}

	render() {
		if(!this.state.display) {
			return null;
		}

		return (
			<div className="app-banner">
				App Banner
			</div>
		);
	}
}

export default AppBanner;