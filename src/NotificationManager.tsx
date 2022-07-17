import { EventEmitter } from 'events';
import { useState } from 'react';
import { INotificationType } from './INotificationType';

interface NotifyType {
  type: string;
  message: string;
  title: string;
  timeOut: number;
  onClick: () => void;
  priority: boolean;
}

const createUUID = () => {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const Constants = {
  CHANGE: 'change',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

const NotificationManager: EventEmitter = () => {
  const [listNotify, setListNotify] = useState<NotifyType[]>([]);

  const create = (notify: NotifyType) => {
    const defaultNotify = {
      id: createUUID(),
      type: 'info',
      title: null,
      message: null,
      timeOut: 5000,
    };
    if (notify.priority) {
      listNotify.unshift(Object.assign(defaultNotify, notify));
    } else {
      listNotify.push(Object.assign(defaultNotify, notify));
    }
    emitChange();
  };

  const emitChange = () => {
    emit(Constants.CHANGE, this.listNotify);
  };
};

export default NotificationManager;
export { NotificationManager };
