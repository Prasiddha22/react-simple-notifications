import React from 'react';
import { Notification } from './Notification';

type Props = {
  notifications: Notification[];
  onRequestHide: () => void;
  enterTimeout: number;
  leaveTimeout: number;
};

export const Notifications = ({
  notifications = [],
  onRequestHide,
  enterTimeout = 400,
  leaveTimeout = 400,
}: Props) => {
  return <></>;
};
