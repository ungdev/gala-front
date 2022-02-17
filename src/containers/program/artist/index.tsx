import React from 'react';

import './artist.scss';

interface ArtistProps {
  name: string;
  image: string;
  hour: string;
  place: string;
  link: string;
  number: number;
}

const Artist = (props: ArtistProps) => {
  let artist;
  if (props.number % 2 === 0) {
    artist = (
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
            {!props.hour && !props.place && (
              <div className="artist-no-informations">(L'horaire n'est pas disponible)</div>
            )}

            {props.link && (
              <a href={props.link} className="artist-link" target="_blank" rel="noopener noreferrer">
                Page de l'artiste <i className="fas fa-external-link-alt icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    artist = (
      <div className="artist">
        <div className="artist-container">
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
            {!props.hour && !props.place && (
              <div className="artist-no-informations">(L'horaire n'est pas disponible)</div>
            )}

            {props.link && (
              <a href={props.link} className="artist-link" target="_blank" rel="noopener noreferrer">
                Page de l'artiste <i className="fas fa-external-link-alt icon" />
              </a>
            )}
          </div>
          <div className="artist-image">
            <img src={props.image} alt="" />
          </div>
        </div>
      </div>
    );
  }
  return artist;
};

export default Artist;
