import React, { useState } from 'react';

import './submitButton.scss';

export type SubmitButtonState = 'loading' | 'success' | null;

function SubmitButton({
  className,
  status: initialStatus,
  onClick,
}: {
  className?: string;
  onClick: () => void;
  status: SubmitButtonState;
}) {
  const [status] = useState(initialStatus);
  const [lastUsed, setLastUsed] = useState(Date.now());

  const click = () => {
    // 500ms button cooldown
    if (status !== null || Date.now() - lastUsed < 500) return;
    setLastUsed(Date.now());
    onClick();
  };

  return (
    <div className={className}>
      <button className={`submit-button ${status !== null ? status : 'icon'}`} onClick={click}>
        <i className="far fa-paper-plane submit-button-icon" />
        <i className="fas fa-spinner fa-spin submit-button-loading" />
        <i className="fas fa-check submit-button-success" />
        Envoyer
      </button>
    </div>
  );
}

SubmitButton.defaultProps = {
  className: null,
};

export default SubmitButton;
