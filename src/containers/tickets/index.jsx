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

        <br />
        {Conditions}

        <br />

        {/* <a className="tickets-button button" href="https://www.billetweb.fr/cassiopee-gala-utt" target="_blank" rel="noopener noreferrer">
          Achetez vos billets
    </a>*/}

      </div>
    );
  }
}

export default Tickets;
