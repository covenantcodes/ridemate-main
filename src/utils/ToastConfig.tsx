import React from "react";
import {
  BaseToast,
  ErrorToast,
  InfoToast,
  ToastProps,
} from "react-native-toast-message";

import {getSize} from "./unitScaling";

import {colors} from "/theme/themes";

export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: colors.success,
        zIndex: 100,
        marginTop: 10,
        flexWrap: "wrap",
      }}
      contentContainerStyle={{paddingHorizontal: 10, flexWrap: "wrap"}}
      text1Style={{
        fontSize: getSize(12),
        fontWeight: "700",
        fontFamily: "CreatoDisplay-Bold",
      }}
      text2Style={{
        fontSize: getSize(11),
        fontFamily: "WorkSans-Medium",
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: colors.danger, marginTop: 10}}
      contentContainerStyle={{paddingHorizontal: 10}}
      text1Style={{
        fontSize: getSize(12),
        fontFamily: "CreatoDisplay-Bold",
      }}
      text2Style={{
        fontSize: getSize(11),
        fontFamily: "WorkSans-Medium",
      }}
    />
  ),
  info: (props: ToastProps) => (
    <InfoToast
      {...props}
      style={{borderLeftColor: colors.warning, marginTop: 10}}
      contentContainerStyle={{paddingHorizontal: 10, flexWrap: "wrap"}}
      text1Style={{
        fontSize: getSize(12),
        fontFamily: "CreatoDisplay-Bold",
      }}
      text2Style={{
        fontSize: getSize(11),
        fontFamily: "WorkSans-Medium",
      }}
    />
  ),
};
