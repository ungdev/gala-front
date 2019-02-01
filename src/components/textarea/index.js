import React from 'react';

import './textarea.css';

class Textarea extends React.Component {
	constructor(props) {
		super(props);

		this.labelRef = React.createRef();
		this.textareaRef = React.createRef();
	}

	onFocus = () => {
		this.labelRef.current.classList.add('active');
	}

	onBlur = () => {
		if(this.textareaRef.current.value === '') {
			this.labelRef.current.classList.remove('active');
		}
	}

	labelClick = () => {
		this.textareaRef.current.focus();
	}

	render() {
		return (
			<span style={this.props.style}>
				<div className="textarea">
					<div
						className="textarea-placeholder"
						onClick={this.labelClick}
						ref={this.labelRef}
					>
						{this.props.placeholder}
					</div>

					<textarea
						type="text"
						onFocus={this.onFocus}
						onBlur={this.onBlur}
						ref={this.textareaRef}
					/>
				</div>
			</span>
		);
	}
}

export default Textarea;