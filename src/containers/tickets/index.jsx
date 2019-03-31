import React from 'react';

import Conditions from './conditions';

import './tickets.css';

class Tickets extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ticketsWindowActive: false
		};
	}

	componentDidMount() {
		window.addEventListener('keydown', this.keydownHandle, { passive: true });
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.keydownHandle, { passive: true });
	}

	keydownHandle = (e) => {
		if(this.state.ticketsWindowActive) {
			if(e.keyCode === 27) { // Escape key
				this.closeTicketsWindow();
			}
		}
	}

	openTicketsWindow = () => {
		document.getElementsByTagName('html')[0].style.overflow = 'hidden';

		this.setState({
			ticketsWindowActive: true
		});
	}

	closeTicketsWindow = () => {
		document.getElementsByTagName('html')[0].style.overflow = '';

		this.setState({
			ticketsWindowActive: false
		});
	}

  render() {
    return (
			<div className="page-container" id="tickets">
				<h1 className="centered">Billetterie</h1>
				<hr />

				<br />
				{ Conditions }

				<button
					className="tickets-button button"
					onClick={this.openTicketsWindow}
				>
					<i className="fas fa-ticket-alt icon"></i>
					Accéder à la billetterie
				</button>

				<div
					className={'tickets-window' + (this.state.ticketsWindowActive ? ' active' : '')}
					onClick={this.closeTicketsWindow}
				>
					<div className="tickets-close-button" title="Fermer">
						<i className="fas fa-times"></i>
					</div>

					<div className="tickets-window-spinner">
						<i className="fas fa-spinner fa-spin"></i>
					</div>

					<iframe
						title="Billetterie Gala UTT"
						src="https://www.billetweb.fr/shop.php?event=gala-utt-2019"
					/>
				</div>
			</div>
		);
  }
};

export default Tickets;