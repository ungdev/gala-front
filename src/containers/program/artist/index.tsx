import React from 'react';
import { Artist } from '../../../utils/api';

import './artist.scss';

interface ArtistProps {
  name: string;
  image: string;
  hour: string;
  place: string;
  description: string;
  link: Artist['Links'][0];
}

function Artist(props: ArtistProps) {
  return (
    <div className="artist">
      <div className="artist-container">
        <div className="artist-image">
          <img src={props.image} alt="" />
        </div>
        <div className="artist-infos">
          <div className="artist-name">{props.name}</div>
          {(props.hour || props.place || props.link) && <div className="artist-divider" />}
          {props.hour && (
            <div className="artist-hour">
              <i className="far fa-clock icon" title="Horaire" />
              {props.hour}
            </div>
          )}
          {props.place && (
            <div className="artist-place">
              <i className="fas fa-map-marker-alt icon" title="Emplacement" />
              {props.place}
            </div>
          )}
          {!props.hour && !props.place && <div className="artist-no-informations">L'horaire n'est pas disponible</div>}
          {props.description && <div className="artist-description">{props.description}</div>}
          {props.link && (
            <a href={props.link.uri} className="artist-link" target="_blank" rel="noopener noreferrer">
              Page de l'artiste <i className="fas fa-external-link-alt icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Artist;
