import React from 'react';

import Conditions from './conditions';

import './tickets.css';

class Tickets extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ticketsWindowActive: false,
		};
	}

	componentDidMount() {
		window.addEventListener('keydown', this.keydownHandle, { passive: true });
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.keydownHandle, {
			passive: true,
		});
	}

	keydownHandle = (e) => {
		if (this.state.ticketsWindowActive) {
			if (e.keyCode === 27) {
				// Escape key
				this.closeTicketsWindow();
			}
		}
	};

	openTicketsWindow = () => {
		document.getElementsByTagName('html')[0].style.overflow = 'hidden';

		this.setState({
			ticketsWindowActive: true,
		});
	};

	closeTicketsWindow = () => {
		document.getElementsByTagName('html')[0].style.overflow = '';

		this.setState({
			ticketsWindowActive: false,
		});
	};

	render() {
		return (
			<div className="page-container" id="tickets">
				<h1 className="centered">Billetterie</h1>
				<hr />

				<br />
				{Conditions}

				<br />
				{/*<button
					className="tickets-button button"
					// onClick={this.openTicketsWindow}
				>
					{ //<i className="fas fa-ticket-alt icon"></i>  }
					La billetterie est fermée
				</button>
				*/}

				<div id="ticketsButton">
					<a
						href="https://www.billetweb.fr/shop.php?event=cassiopee-gala-utt"
						onClick="var w=window.open('https://www.billetweb.fr/shop.php?event=cassiopee-gala-utt', 'Reserver', 'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no'); w.focus(); return false;">
						<img
							width="200px"
							src="https://www.billetweb.fr/images/buttons/acheter_blanc.png"
							alt="bouton billetterie"
						/>
					</a>
				</div>

				{/*
				<div
					className={'tickets-window' + (this.state.ticketsWindowActive ? ' active' : '')}
					onClick={this.closeTicketsWindow}
				>
					<button className="tickets-close-button" title="Fermer">
						<i className="fas fa-times"></i>
					</button>

					<div className="tickets-window-spinner">
						<i className="fas fa-spinner fa-spin"></i>
					</div>

					<iframe
						title="Billetterie Cassiopée - Gala UTT"
						src="https://www.billetweb.fr/shop.php?event=cassiopee-gala-utt"
					/>
				</div>
				*/}
			</div>
		);
	}
}

export default Tickets;
