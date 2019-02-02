import React from 'react';

import './submitButton.css';

// Available status : 'loading', 'success', 'error'

class SubmitButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			status: this.props.status
		};
	}

	componentDidUpdate(prevProps) {
		if(prevProps !== this.props) {
			this.setState({
				status: this.props.status
			});
		}
	}

	click = () => {
		// Prevent from spamming
		if(this.state.status === 'loading') {
			return;
		}

		this.props.onClick();
	}

	render() {
		return (
			<div className={this.props.className}>
				<div className="submit-button-container">
					<button className={"submit-button " + this.state.status} onClick={this.click}>
						<i className="far fa-paper-plane submit-button-icon"></i>
						<i className="fas fa-spinner fa-spin submit-button-load"></i>
						Envoyer
					</button>
				</div>
			</div>
		);
	}
}

export default SubmitButton;