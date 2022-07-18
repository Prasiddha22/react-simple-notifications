import { EventEmitter } from 'events';
import { INotificationType } from './INotificationType';

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

interface NotifyType {
  id?: string;
  type: string;
  message: string;
  title: string;
  timeOut: number;
  onClick: () => void;
  priority: boolean;
}

class NotificationManager extends EventEmitter {
  listNotify: NotifyType[];
  constructor() {
    super();
    this.listNotify = [];
  }

  create(notify: NotifyType) {
    const defaultNotify = {
      id: createUUID(),
      type: 'info',
      title: null,
      message: null,
      timeOut: 5000,
    };
    if (notify.priority) {
      this.listNotify.unshift(Object.assign(defaultNotify, notify));
    } else {
      this.listNotify.push(Object.assign(defaultNotify, notify));
    }
    this.emitChange();
  }

  info({ message, title, timeOut, onClick, priority }: NotifyType) {
    this.create({
      type: Constants.INFO,
      message,
      title,
      timeOut,
      onClick,
      priority,
    });
  }

  success({ message, title, timeOut, onClick, priority }: NotifyType) {
    this.create({
      type: Constants.SUCCESS,
      message,
      title,
      timeOut,
      onClick,
      priority,
    });
  }

  warning({ message, title, timeOut, onClick, priority }: NotifyType) {
    this.create({
      type: Constants.WARNING,
      message,
      title,
      timeOut,
      onClick,
      priority,
    });
  }

  error({ message, title, timeOut, onClick, priority }: NotifyType) {
    this.create({
      type: Constants.ERROR,
      message,
      title,
      timeOut,
      onClick,
      priority,
    });
  }

  remove(notification: INotificationType) {
    this.listNotify = this.listNotify.filter(n => notification.id !== n.id);
    this.emitChange();
  }

  emitChange() {
    this.emit(Constants.CHANGE, this.listNotify);
  }

  addChangeListener(callback: (listNotify: INotificationType[]) => void) {
    this.addListener(Constants.CHANGE, callback);
  }

  removeChangeListener(callback: (listNotify: INotificationType[]) => void) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new NotificationManager();
