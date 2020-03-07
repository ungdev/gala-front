import React from 'react';

class ScrollToTop extends React.Component {
	componentDidMount() {
		document.getElementsByTagName('html')[0].scrollTop = 0;
	}

	componentDidUpdate() {
		document.getElementsByTagName('html')[0].scrollTop = 0;
	}

	render() {
		return this.props.children || null;
	}
}

export default ScrollToTop;
