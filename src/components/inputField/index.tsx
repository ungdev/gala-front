import React from 'react';

import './inputField.scss';

let lastGeneratedId = 0;

const InputField = ({
  className,
  value,
  onChange,
  error,
  placeholder,
}: {
  className: string;
  value: any;
  onChange: (value: any) => void;
  placeholder?: string;
  error?: string;
}) => {
  const id = lastGeneratedId++;

  return (
    <span className={`input-field ${className || ''}`}>
      <input type="text" onChange={(e) => onChange(e.target.value)} value={value} id={`input-field-${id}`} />

      <label htmlFor={`input-field-${id}`} className="input-field-placeholder">
        {placeholder}
      </label>

      <div className={`input-field-error${error ? ' active' : ''}`}>
        <i className="fas fa-exclamation-triangle error-icon" />
        <div className="error-content">{error}</div>
      </div>
    </span>
  );
};

export default InputField;
