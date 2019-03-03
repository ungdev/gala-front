import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import './textarea.css';

let lastGeneratedId = 0;

const Textarea = (props) => {
	const id = lastGeneratedId++;

	return (
		<div className={props.className}>
			<div className="textarea">
				<TextareaAutosize
					onChange={(e) => props.onChange(e.target.value)}
					value={props.value}
					id={`textarea-${id}`}
				/>

				<div className="textarea-placeholder">
					<label htmlFor={`textarea-${id}`}>
						{props.placeholder}
					</label>
				</div>
			</div>
		</div>
	);
}

export default Textarea;