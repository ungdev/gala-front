import React from 'react';
import FadeIn from 'react-lazyload-fadein';

import './lazyloadimage.css';

const LazyloadImage = (props) => (
	<div style={{ position: 'relative' }}>
		<div className="lazyloadimage-placeholder"></div>

		<FadeIn duration={300}>
			{(onload) => (
				<img
					src={props.src}
					onLoad={(e) => {
						e.target.parentNode.parentNode.childNodes[0].classList.add('disabled'); // disable placeholder
						onload();
					}}
					alt={props.alt || ''}
					onClick={props.onClick}
				/>
			)}
		</FadeIn>
	</div>
);

export default LazyloadImage;
