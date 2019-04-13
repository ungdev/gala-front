import React from 'react';

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