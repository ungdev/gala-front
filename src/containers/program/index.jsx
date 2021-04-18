import React from 'react';
import moment from 'moment';

import axios from '../../utils/axios';
import Artist from './artist';
import Events from './events';

import './program.css';

class Program extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: null,
    };

    this.fetchArtists();
  }

  fetchArtists = async () => {
    let artists = await axios.get('artists');

    artists = artists.data.map((artist, i) => (
      <Artist
        name={artist.name}
        image={`${import.meta.env.VITE_API_URL}${artist.image}`}
        link={artist.link}
        hour={artist.eventDate ? moment(artist.eventDate, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').format('HH[h]mm') : ''}
        place={artist.eventPlace}
        key={i}
        number={i}
      />
    ));

    this.setState({
      artists,
    });
  };

  render() {
    return (
      <div className="page-container" id="program">
        <div id="artists">
          <h1>Artistes</h1>
          <hr />

          {this.state.artists && this.state.artists.length ? (
            <div className="artists-container">{this.state.artists}</div>
          ) : this.state.artists === null ? (
            <div className="artists-loader">
              <i className="fas fa-spinner fa-spin"></i>
            </div>
          ) : (
            <div className="no-artists">(Les artistes seront bientôt disponibles)</div>
          )}
        </div>

        <br />
        <div id="eat">
          <h1>Espaces à thème</h1>
          <hr />
          <div className="centered">A venir</div>
        </div>

        <br />
        <div id="animations">
          <h1>Animations</h1>
          <hr />
          <Events />
        </div>

        <br />
        <div id="restauration">
          <h1>Restauration</h1>
          <hr />
          <div className="centered">A venir</div>
        </div>
      </div>
    );
  }
}

export default Program;
