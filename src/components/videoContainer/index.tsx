import React from 'react';

import './videoContainer.scss';

function VideoContainer(props: { title: string; src: string; style: React.CSSProperties }) {
  return (
    <div className="video-container" style={props.style}>
      <div className="video-container-ratio">
        <div className="video-container-full">
          <iframe
            title={props.title}
            src={props.src}
            frameBorder="0"
            allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
