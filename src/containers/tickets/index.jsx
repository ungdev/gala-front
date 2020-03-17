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

  render() {
    return (
      <div className="page-container" id="tickets">
        <h1 className="centered">Billetterie</h1>
        <hr />

        <br />
        {Conditions}

        <br />

        {/* <a className="tickets-button button" href="https://www.billetweb.fr/cassiopee-gala-utt" target="_blank" rel="noopener noreferrer">
          Achetez vos billets
    </a>*/}

        <button
					className="tickets-button button"
					// onClick={this.openTicketsWindow}
				>
					{ /* <i className="fas fa-ticket-alt icon"></i> */ }
					La billetterie est fermée
				</button>

      </div>
    );
  }
}

export default Tickets;
