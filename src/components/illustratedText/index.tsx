import React from 'react';
import Title, { TitleAlignment } from '../title';

import './illustratedText.scss';

type IllustratedTextAlignment = 'left' | 'right';

interface IllustratedTextProps {
  imageSrc: string;
  imageAlt?: string;
  children: React.ReactNode;
  title?: string | null;
  titleAlignment?: TitleAlignment;
  alignment?: IllustratedTextAlignment;
}

function IllustratedText({ imageSrc, children, title, imageAlt, alignment, titleAlignment }: IllustratedTextProps) {
  return (
    <div className={`illustrated-text ${alignment}`}>
      {title && <Title alignment={titleAlignment}>{title}</Title>}
      <div className="side">{children}</div>

      <img src={imageSrc} alt={imageAlt} />
      <div className="shadow" />
    </div>
  );
}

IllustratedText.defaultProps = {
  title: null,
  imageAlt: 'Illustration',
  titleAlignment: 'center',
  alignment: 'right',
};

export default IllustratedText;
