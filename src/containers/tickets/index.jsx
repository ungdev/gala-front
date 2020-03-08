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
        <button className="tickets-button button" onClick={this.openTicketsWindow}>
          Achetez vos billets
        </button>

        <div
          className={'tickets-window' + (this.state.ticketsWindowActive ? ' active' : '')}
          onClick={this.closeTicketsWindow}>
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
      </div>
    );
  }
}

export default Tickets;
