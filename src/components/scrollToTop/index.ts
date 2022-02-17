import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

class ScrollToTop extends React.Component<RouteComponentProps> {
  private unlisten: () => void;

  constructor(props: RouteComponentProps) {
    super(props);

    this.unlisten = () => {};
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      document.getElementsByTagName('body')[0].scrollTop = 0;
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return this.props.children || null;
  }
}

export default withRouter(ScrollToTop);
