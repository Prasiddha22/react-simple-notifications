import classNames from 'classnames';
import React from 'react';
import { INotificationType } from './INotificationType';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Notification } from './Notification';

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

  const className = classNames('notification-container', {
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
          onRequestHide={handleRequestHide(notification)}
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
