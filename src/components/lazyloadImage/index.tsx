import React from 'react';
import FadeIn from 'react-lazyload-fadein';

import './lazyloadimage.scss';

interface LazyLoadImageProperties {
  className?: string;
  src: string;
  alt?: string;
  onClick: React.MouseEventHandler<HTMLImageElement>;
}

function LazyloadImage({ className, alt, src, onClick }: LazyLoadImageProperties) {
  return (
    <div className={`lazyloadimage ${className || ''}`}>
      <div className="lazyloadimage-placeholder" />

      <FadeIn duration={300}>
        {(onload) => (
          <img
            src={src}
            onLoad={(e) => {
              // disable placeholder
              (e.target as HTMLElement).parentNode?.parentNode?.firstElementChild?.classList?.add('disabled');
              onload();
            }}
            alt={alt || ''}
            onClick={onClick}
          />
        )}
      </FadeIn>
    </div>
  );
}

LazyloadImage.defaultProps = {
  className: null,
  alt: null,
};

export default LazyloadImage;
