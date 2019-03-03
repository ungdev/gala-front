import React from 'react';

import './inputField.css';

let lastGeneratedId = 0;

const InputField = (props) => {
	const id = lastGeneratedId++;

	return (
		<div
			className={props.className}
			style={{ display: 'inline-block' }}
		>
			<div className="input-field">
				<input
					type="text"
					onChange={(e) => props.onChange(e.target.value)}
					value={props.value}
					id={`input-field-${id}`}
				/>

				<label htmlFor={`input-field-${id}`} className="input-field-placeholder">
					{props.placeholder}
				</label>

				{props.error && <div className="input-field-error">{props.error}</div>}
			</div>
		</div>
	);
};

export default InputField;