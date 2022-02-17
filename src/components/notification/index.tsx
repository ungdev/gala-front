import React from 'react';

import './notification.css';

type NotificationProps = { status: string | null };
class Notification extends React.Component<NotificationProps, NotificationProps> {
  private timeout?: number;

  constructor(props: NotificationProps) {
    super(props);

    this.state = {
      status: null,
    };
  }

  componentDidUpdate(prevProps: NotificationProps) {
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
