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

function Model() {
  return (
    <div className="model">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z"></path>
      </svg>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"></path>
      </svg>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
      </svg>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"></path>
      </svg>
    </div>
  );
}

function IllustratedText({ imageSrc, children, title, imageAlt, alignment, titleAlignment }: IllustratedTextProps) {
  const repeatModel = (count: number) => {
    const models = [];
    for (let i = 0; i < count; i++) {
      models.push(<Model key={i} />);
    }
    return models;
  };

  return (
    <div className={`illustrated-text ${alignment}`}>
      {title && <Title alignment={titleAlignment}>{title}</Title>}
      <div className="side">{children}</div>

      <img src={imageSrc} alt={imageAlt} />
      <div className="shadow">
        {repeatModel(100)}
      </div>
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
