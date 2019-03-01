import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import './textarea.css';

class Textarea extends React.Component {
	constructor(props) {
		super(props);

		this.labelRef = React.createRef();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.value !== this.props.value) {
			this.onBlur();
		}
	}

	onFocus = () => {
		this.labelRef.current.classList.add('active');
	}

	onBlur = () => {
		if(this.textareaRef.value === '') {
			this.labelRef.current.classList.remove('active');
		}
	}

	labelClick = () => {
		this.textareaRef.focus();
	}

	render() {
		return (
			<div className={this.props.className} style={this.props.style}>
				<div className="textarea">
					<div
						className="textarea-placeholder"
						onClick={this.labelClick}
						ref={this.labelRef}
					>
						{this.props.placeholder}
					</div>

					<TextareaAutosize
						onFocus={this.onFocus}
						onBlur={this.onBlur}
						innerRef={(ref) => { this.textareaRef = ref; }}
						onChange={(e) => this.props.onChange(e.target.value)}
						value={this.props.value}
					/>
				</div>
			</div>
		);
	}
}

export default Textarea;