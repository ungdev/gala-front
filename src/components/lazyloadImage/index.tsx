import React from 'react';
import FadeIn from 'react-lazyload-fadein';

import './lazyloadimage.css';

interface LazyLoadImageProperties {
  className: string;
  src: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLImageElement>;
}

const LazyloadImage = (props: LazyLoadImageProperties) => (
  <div className={`lazyloadimage ${props.className || ''}`}>
    <div className="lazyloadimage-placeholder" />

    <FadeIn duration={300}>
      {(onload) => (
        <img
          src={props.src}
          onLoad={(e) => {
            // TODO: refactor types
            ((e.target as HTMLElement).parentNode!.parentNode!.childNodes[0] as HTMLElement).classList.add('disabled'); // disable placeholder
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
