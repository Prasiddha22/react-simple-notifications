import React from 'react';
import INotificationType from './INotificationType';

type Props = {
  notifications: INotificationType[];
  onRequestHide: (notification: INotificationType) => void;
  enterTimeout: number;
  leaveTimeout: number;
};

export const Notifications = ({
  notifications = [],
  onRequestHide,
  enterTimeout = 400,
  leaveTimeout = 400,
}: Props) => {
  const handleRequestHide = (notification: INotificationType) => () => {
    if (onRequestHide) {
      onRequestHide(notification);
    }
  };

  const className = classnames('notification-container', {
    'notification-container-empty': notifications.length === 0,
  });

  const items = notifications.map((notification, i) => {
    const key = notification.id || new Date().getTime();
    return (
      <CSSTransition
        key={i}
        classNames="notification"
        timeout={{ enter: enterTimeout, exit: leaveTimeout }}
      >
        <Notification
          key={key}
          type={notification.type}
          title={notification.title}
          message={notification.message}
          timeOut={notification.timeOut}
          onClick={notification.onClick}
          onRequestHide={this.handleRequestHide(notification)}
        />
      </CSSTransition>
    );
  });
  return (
    <div className={className}>
      <TransitionGroup>{items}</TransitionGroup>
    </div>
  );
};
