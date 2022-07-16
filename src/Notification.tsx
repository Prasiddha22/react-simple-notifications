import React from 'react';

type Props = {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  title: React.ReactNode;
  timeOut: number;
  onClick: () => void;
  onRequestHide: () => void;
};

export const Notification = ({
  type = 'info',
  message,
  title,
  timeOut = 5000,
  onClick,
  onRequestHide,
}: Props) => {
  // const className = classnames(['notification', `notification-${type}`]);
  const className = `notification notification-${type}`;
  title = title ? <h4 className="title">{title}</h4> : null;

  const handleClick = () => {};
  return (
    <div className={className} onClick={handleClick}>
      <div className="notification-message" role="alert">
        {title}
        <div className="message">{message}</div>
      </div>
    </div>
  );
};
