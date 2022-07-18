import React, { useEffect, useLayoutEffect } from 'react';
import { INotificationType } from './INotificationType';

const useCallbackRef = (callback: any) => {
  const callbackRef = React.useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return callbackRef;
};

export const Notification = ({
  type = 'info',
  message,
  title,
  timeOut = 5000,
  onClick,
  onRequestHide,
}: INotificationType) => {
  const requestHide = () => {
    if (onRequestHide) {
      onRequestHide();
    }
  };

  const requestHideRef = useCallbackRef(requestHide);
  useEffect(() => {
    var timer: NodeJS.Timeout | null = null;
    if (timeOut !== 0) {
      timer = setTimeout(requestHideRef.current, timeOut);
    }

    return () => {
      timer && clearTimeout(timer);
    };
  }, [timeOut, requestHideRef]);

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
