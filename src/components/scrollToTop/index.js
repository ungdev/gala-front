import React from 'react';

class ScrollToTop extends React.Component {
  componentDidUpdate() {
		document.getElementsByTagName('body')[0].scrollTop = 0;
  }

  render() {
    return this.props.children || null;
  }
}

export default ScrollToTop;