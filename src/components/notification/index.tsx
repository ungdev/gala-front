import React, { useEffect, useState } from 'react';

import './notification.scss';

export type NotificationStatus = 'success' | 'error' | string | null;

function Notification({ status: initialStatus, children }: { status?: NotificationStatus; children: React.ReactNode }) {
  const [status, setStatus] = useState<NotificationStatus>(initialStatus ?? null);
  let timeout: number | null = null;

  useEffect(() => {
    // Clear previous timeout
    if (timeout) clearTimeout(timeout);

    // Set new timeout
    timeout = setTimeout(() => setStatus(null), 3000);
  }, [status]);

  return (
    <div onClick={() => setStatus(null)} className={`notification ${status}`}>
      {children}
    </div>
  );
}

Notification.defaultProps = {
  status: null,
};

export default Notification;
