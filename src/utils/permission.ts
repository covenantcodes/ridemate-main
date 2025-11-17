// src/utils/permissions.ts
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";
import { Platform } from "react-native";

export const requestForLocationPermissions = async () => {
  const permission =
    Platform.OS === "ios"
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

  const result = await check(permission);

  if (result === RESULTS.DENIED) {
    const requestResult = await request(permission);
    return requestResult === RESULTS.GRANTED;
  }

  return result === RESULTS.GRANTED;
};
