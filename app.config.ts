import {ConfigContext, ExpoConfig} from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.covenantcodes.RideMate.dev";
  }

  if (IS_PREVIEW) {
    return "com.covenantcodes.RideMate.preview";
  }

  return "com.covenantcodes.RideMate";
};

const getAppName = () => {
  if (IS_DEV) {
    return "RideMate (Dev)";
  }

  if (IS_PREVIEW) {
    return "RideMate (Preview)";
  }

  return "RideMate: Emoji Stickers";
};

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: "RideMate",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
      NSLocationWhenInUseUsageDescription:
        "This app needs access to your location to show your position on the map and find rides near you.",
      NSLocationAlwaysAndWhenInUseUsageDescription:
        "This app needs access to your location to show your position on the map and find rides near you.",
    },
    config: {
      googleMapsApiKey: "AIzaSyBe-E5Chhe9sjZodUcWHvlIjTLzArGG_T0",
    },
  },
  android: {
    permissions: ["ACCESS_COARSE_LOCATION", "ACCESS_FINE_LOCATION"],
    config: {
      googleMaps: {
        apiKey: "AIzaSyBe-E5Chhe9sjZodUcWHvlIjTLzArGG_T0",
      },
    },
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
    package: getUniqueIdentifier(),
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    eas: {
      projectId: "0ea05a2a-1a5d-4410-aefe-679ce803e015",
    },
  },
  owner: "covenantcodes",
});
