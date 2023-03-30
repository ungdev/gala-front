import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Artist from './artist';
import Heading from '../../components/heading';
import TopFloatingActionButton from '../../components/TopFloatingActionButton';
import { fetchArtists, Artist as ApiArtist } from '../../utils/api';

import './program.scss';

function Program() {
  const [artists, setArtists] = useState<ApiArtist[] | null>(null);

  const fetch = async () => {
    const apiArtists = await fetchArtists();
    setArtists(apiArtists.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="page-container" id="program">
      <Heading title="Les Artistes" />
      <TopFloatingActionButton />

      <div id="artists">
        {artists?.length ? (
          <div className="artists-container">
            {artists.map((artist, i) => (
              <Artist
                name={artist.name}
                image={`${import.meta.env.VITE_API_URL}${artist.image}`}
                link={artist.Links[0]}
                hour={artist.eventDate ? moment(artist.eventDate, 'YYYY-MM-DDTHH:mm:ss.SSSSZ').format('HH[h]mm') : ''}
                place={artist.eventPlace}
                description={artist.description}
                // description="testetsetetesgsdfds"
                key={i}
              />
            ))}
          </div>
        ) : artists === null ? (
          <div className="artists-loader">
            <i className="fas fa-spinner fa-spin" />
          </div>
        ) : (
          <div className="no-artists">Les artistes seront bientôt disponibles</div>
        )}
      </div>
    </div>
  );
}

export default Program;
