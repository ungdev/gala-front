import React from 'react';

import './inputField.css';

class InputField extends React.Component {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef();
		this.labelRef = React.createRef();
	}

	onFocus = () => {
		this.labelRef.current.classList.add('active');
	}

	onBlur = () => {
		if(this.inputRef.current.value === '') {
			this.labelRef.current.classList.remove('active');
		}
	}

	labelClick = () => {
		this.inputRef.current.focus();
	}

	render() {
		return (
			<div className={this.props.className} style={{ display: 'inline-block', ...this.props.style }}>
				<div className="input-field">
					<div
						className="input-field-placeholder"
						onClick={this.labelClick}
						ref={this.labelRef}
					>
						{this.props.placeholder}
					</div>

					<input
						type="text"
						onFocus={this.onFocus}
						onBlur={this.onBlur}
						ref={this.inputRef}
					/>
				</div>
			</div>
		);
	}
}

export default InputField;