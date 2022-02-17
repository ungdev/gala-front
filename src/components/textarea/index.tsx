import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import './textarea.scss';

let lastGeneratedId = 0;

interface TextAreaProps {
  className?: string;
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  error?: string;
}

const Textarea = (props: TextAreaProps) => {
  const id = lastGeneratedId++;

  return (
    <div className={props.className}>
      <div className="textarea">
        <TextareaAutosize
          onChange={(e) => props.onChange((e.target as EventTarget & { value: string }).value)}
          value={props.value}
          id={`textarea-${id}`}
        />

        <label htmlFor={`textarea-${id}`} className="textarea-placeholder">
          {props.placeholder}
        </label>

        <div className={`textarea-error${props.error ? ' active' : ''}`}>
          <i className="fas fa-exclamation-triangle error-icon" />
          <div className="error-content">{props.error}</div>
        </div>
      </div>
    </div>
  );
};

export default Textarea;
