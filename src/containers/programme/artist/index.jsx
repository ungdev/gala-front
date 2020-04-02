import React from 'react';

import './artist.css';

/**
 * props : {
 * 	 name: String,
 *   image: String,
 *   hour: String,
 *   place: String,
 *   link: String,
 *   number: Integer
 * }
 */

const Artist = (props) => {
  let artist;
  if(props.number%2 === 0){
    artist = <div className="artist">
              <div className="artist-container">
                <div className="artist-image">
                  <img src={props.image} alt="" />
                </div>
                <div className="artist-infos">
                  <div className="artist-name">{props.name}</div>

                  {(props.hour || props.place || props.link) && <div className="artist-divider"></div>}

                  {props.hour && (
                    <div className="artist-hour">
                      <i className="far fa-clock icon" title="Horaire"></i>
                      {props.hour}
                    </div>
                  )}
                  {props.place && (
                    <div className="artist-place">
                      <i className="fas fa-map-marker-alt icon" title="Emplacement"></i>
                      {props.place}
                    </div>
                  )}
                  {!props.hour && !props.place && (
                    <div className="artist-no-informations">(L'horaire sera bientôt disponible)</div>
                  )}

                  {props.link && (
                    <a href={props.link} className="artist-link" target="_blank" rel="noopener noreferrer">
                      Page de l'artiste <i className="fas fa-external-link-alt icon"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>;
  }
  else {
    artist = <div className="artist">
              <div className="artist-container">
                <div className="artist-infos">
                  <div className="artist-name">{props.name}</div>

                  {(props.hour || props.place || props.link) && <div className="artist-divider"></div>}

                  {props.hour && (
                    <div className="artist-hour">
                      <i className="far fa-clock icon" title="Horaire"></i>
                      {props.hour}
                    </div>
                  )}
                  {props.place && (
                    <div className="artist-place">
                      <i className="fas fa-map-marker-alt icon" title="Emplacement"></i>
                      {props.place}
                    </div>
                  )}
                  {!props.hour && !props.place && (
                    <div className="artist-no-informations">(L'horaire sera bientôt disponible)</div>
                  )}

                  {props.link && (
                    <a href={props.link} className="artist-link" target="_blank" rel="noopener noreferrer">
                      Page de l'artiste <i className="fas fa-external-link-alt icon"></i>
                    </a>
                  )}
                </div>
                <div className="artist-image">
                  <img src={props.image} alt="" />
                </div>
              </div>
            </div>;
  }
  return artist;
}

export default Artist;
