import React from 'react';

import './submitButton.css';

class SubmitButton extends React.Component {
	constructor(props) {
		super(props);

		this.buttonRef = React.createRef();
	}

	click = () => {
		this.buttonRef.current.classList.add('loading');

		setTimeout(() => {
			this.buttonRef.current.classList.add('active');
			this.buttonRef.current.classList.remove('loading');

			setTimeout(() => {
				this.buttonRef.current.classList.remove('active');
			}, 3000);
		}, 2000);
	}

	render() {
		return (
			<div className="submit-button-container">
				<div className="submit-button" ref={this.buttonRef} onClick={this.click}>
					<i class="far fa-paper-plane submit-button-icon"></i>
					<i class="fas fa-spinner fa-spin submit-button-load"></i>
					Envoyer
				</div>
			</div>
		);
	}
}

export default SubmitButton;