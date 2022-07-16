import React from 'react';

type Props = {
  type: string;
  message: string;
  title: React.ReactNode;
};

export const Notification = ({ type, message, title }: Props) => {
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
