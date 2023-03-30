import React from 'react';

import './title.scss';

export type TitleAlignment = 'center' | 'left' | 'center';

interface TitleProps {
  children: string;
  alignment?: TitleAlignment;
}

function Title({ children, alignment }: TitleProps) {
  return (
    <div className={`title ${alignment}`}>
      <h2>{children}</h2>
    </div>
  );
}

Title.defaultProps = {
  alignment: 'left',
};

export default Title;
