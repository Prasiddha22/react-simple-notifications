import React, { useEffect } from 'react';
import { INotificationType } from './INotificationType';

export const Notification = ({
  type = 'info',
  message,
  title,
  timeOut = 5000,
  onClick,
  onRequestHide,
}: INotificationType) => {
  useEffect(() => {
    var timer: NodeJS.Timeout | null = null;
    if (timeOut !== 0) {
      timer = setTimeout(requestHide, timeOut);
    }

    return () => {
      timer && clearTimeout(timer);
    };
  }, []);

  const requestHide = () => {
    if (onRequestHide) {
      onRequestHide();
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    requestHide();
  };

  const className = `notification notification-${type}`;
  title = title ? <h4 className="title">{title}</h4> : null;

  return (
    <div className={className} onClick={handleClick}>
      <div className="notification-message" role="alert">
        {title}
        <div className="message">{message}</div>
      </div>
    </div>
  );
};
