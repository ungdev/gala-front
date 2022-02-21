import React from 'react';
import Title from '../title';

import bookmark from '../../assets/bookmark-content.png';
import './bookmarkedSection.scss';

interface BookmarkedSectionProps {
  readonly title: string;
  readonly children: React.ReactNode;
}

function BookmarkedSection({ title, children }: BookmarkedSectionProps) {
  return (
    <div className="bookmarked-section">
      <div className="content">
        <div className="wrapper">
          <Title alignment="left">{title}</Title>

          <div className="bookmark">
            <div className="overlay" />
            <img src={bookmark} alt="Logo Cassiopée" />
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

export default BookmarkedSection;
