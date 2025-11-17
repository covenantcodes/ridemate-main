// src/utils/networkHandler.ts
import Toast from "react-native-toast-message";

export const mainErrorHandler = (error: any) => {
  let message = "An error occurred";

  if (error.data && error.data.message) {
    message = error.data.message;
  } else if (error.message) {
    message = error.message;
  }

  Toast.show({
    type: "error",
    text1: "Error",
    text2: message,
  });
};

export const successHandler = (message: string) => {
  Toast.show({
    type: "success",
    text1: "Success",
    text2: message,
  });
};
