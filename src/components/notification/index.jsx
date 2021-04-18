import React from 'react';

import './notification.css';

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.status !== prevProps.status) {
      this.setState({
        status: this.props.status,
      });

      // Clear previous timeout
      clearTimeout(this.timeout);

      // Set new timeout
      this.timeout = setTimeout(() => {
        this.setState({
          status: null,
        });
      }, 3000);
    }
  }

  render() {
    return (
      <div onClick={() => this.setState({ status: null })} className={`notification ${this.state.status || ''}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Notification;
