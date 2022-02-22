import React from 'react';

import './heading.scss';

function Heading({ title }: { title: string }) {
  return (
    <div className="heading">
      <h1>{title}</h1>

      <div className="stripe" />
      <div className="stripe" />
      <div className="stripe" />
      <div className="stripe" />
      <div className="stripe" />
      <div className="stripe" />
    </div>
  );
}

export default Heading;
