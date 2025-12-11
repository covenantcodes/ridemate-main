export type AlertType = "success" | "error" | "warning" | "info" | "confirm";

export interface AlertButton {
  text: string;
  onPress?: () => void;
  style?: "default" | "cancel" | "destructive";
}

export interface AlertOptions {
  type?: AlertType;
  title: string;
  message?: string;
  buttons?: AlertButton[];
  cancelable?: boolean;
  icon?: string;
  iconType?: any;
}

export interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
  hideAlert: () => void;
}
