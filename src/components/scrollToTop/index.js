import React from 'react';

class ScrollToTop extends React.Component {
  componentDidUpdate() {
		document.getElementsByTagName('body')[0].scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export default ScrollToTop;