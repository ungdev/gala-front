import React from 'react';

import './videoContainer.css';

export default (props) => (
	<div className="video-container">
		<div>
			<iframe
				title={props.title}
				src={props.src}
				frameBorder="0"
				allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	</div>
);