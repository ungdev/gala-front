import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import './textarea.css';

let lastGeneratedId = 0;

const Textarea = (props) => {
	const id = lastGeneratedId++;

	return (
		<div className={props.className}>
			<div className="textarea">
				<TextareaAutosize onChange={(e) => props.onChange(e.target.value)} value={props.value} id={`textarea-${id}`} />

				<label htmlFor={`textarea-${id}`} className="textarea-placeholder">
					{props.placeholder}
				</label>

				<div className={'textarea-error' + (props.error ? ' active' : '')}>
					<i className="fas fa-exclamation-triangle error-icon"></i>
					<div className="error-content">{props.error}</div>
				</div>
			</div>
		</div>
	);
};

export default Textarea;
