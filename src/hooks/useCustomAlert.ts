import {useAlert} from "contexts/AlertContext";
import {AlertOptions} from "types/alertTypes";

export const useCustomAlert = () => {
  const {showAlert, hideAlert} = useAlert();

  const alert = (
    title: string,
    message?: string,
    buttons?: AlertOptions["buttons"],
  ) => {
    showAlert({
      type: "info",
      title,
      message,
      buttons: buttons || [{text: "OK"}],
    });
  };

  const success = (title: string, message?: string, onOk?: () => void) => {
    showAlert({
      type: "success",
      title,
      message,
      buttons: [{text: "OK", onPress: onOk}],
    });
  };

  const error = (title: string, message?: string, onOk?: () => void) => {
    showAlert({
      type: "error",
      title,
      message,
      buttons: [{text: "OK", onPress: onOk}],
    });
  };

  const warning = (title: string, message?: string, onOk?: () => void) => {
    showAlert({
      type: "warning",
      title,
      message,
      buttons: [{text: "OK", onPress: onOk}],
    });
  };

  const confirm = (
    title: string,
    message?: string,
    onConfirm?: () => void,
    onCancel?: () => void,
  ) => {
    showAlert({
      type: "confirm",
      title,
      message,
      buttons: [
        {text: "Cancel", style: "cancel", onPress: onCancel},
        {text: "Confirm", onPress: onConfirm},
      ],
    });
  };

  return {
    alert,
    success,
    error,
    warning,
    confirm,
    showAlert,
    hideAlert,
  };
};
