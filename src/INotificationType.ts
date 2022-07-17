export interface INotificationType {
  id?: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  title: React.ReactNode;
  timeOut: number;
  onClick: () => void;
  onRequestHide: () => void;
}
