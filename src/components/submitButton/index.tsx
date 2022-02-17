import React from 'react';

import './submitButton.scss';

export interface SubmitState {
  status: 'loading' | 'success' | null;
}

interface SubmitProps extends SubmitState {
  className?: string;
  onClick: () => void;
}

class SubmitButton extends React.Component<SubmitProps, SubmitState> {
  constructor(props: SubmitProps) {
    super(props);

    this.state = {
      status: this.props.status,
    };
  }

  componentDidUpdate(prevProps: SubmitProps) {
    if (prevProps !== this.props) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  click = () => {
    // Prevent from spamming
    if (this.state.status !== null) {
      return;
    }

    this.props.onClick();
  };

  render() {
    return (
      <div className={this.props.className}>
        <button
          className={`submit-button ${this.state.status !== null ? this.state.status : 'icon'}`}
          onClick={this.click}>
          <i className="far fa-paper-plane submit-button-icon" />
          <i className="fas fa-spinner fa-spin submit-button-loading" />
          <i className="fas fa-check submit-button-success" />
          Envoyer
        </button>
      </div>
    );
  }
}

export default SubmitButton;
