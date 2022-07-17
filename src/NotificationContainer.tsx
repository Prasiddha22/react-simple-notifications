import React, { useState } from 'react';
import { INotificationType } from './INotificationType';

type Props = {
  enterTimeout: number;
  leaveTimeout: number;
};

export const NotificationContainer = ({
  enterTimeout = 400,
  leaveTimeout = 400,
}: Props) => {
  const [notifications, setNotifications] = useState<INotificationType[]>([]);

  return <></>;
};
