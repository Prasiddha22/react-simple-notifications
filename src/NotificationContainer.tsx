import React, { useState, useEffect } from 'react';
import { INotificationType } from './INotificationType';
import NotificationManager from './NotificationManager';

type Props = {
  enterTimeout: number;
  leaveTimeout: number;
};

export const NotificationContainer = ({
  enterTimeout = 400,
  leaveTimeout = 400,
}: Props) => {
  const [notifications, setNotifications] = useState<INotificationType[]>([]);

  useEffect(() => {
    NotificationManager.addChangeListener(handleStoreChange);

    return () => {
      NotificationManager.removeChangeListener(handleStoreChange);
    };
  }, []);

  const handleStoreChange = (notifications: INotificationType[]) => {
    setNotifications(notifications);
  };

  const handleRequestHide = (notification: INotificationType) => {
    NotificationManager.remove(notification);
  };

  return <></>;
};
