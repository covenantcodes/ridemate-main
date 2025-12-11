// src/navigation/navigation.types.ts
import {NavigationProp, RouteProp} from "@react-navigation/native";
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import * as ROUTES from "./navigation.constants";

export type MainStackParams = {
  [ROUTES.HOME_TAB]: {screen?: keyof TabNavigationParams};
  [ROUTES.LOGIN]: undefined;
  [ROUTES.PRODUCT_DETAILS]: {packageId: string};
  [ROUTES.VEHICLE_TYPE_SELECTION]: {
    rideOption: any;
    pickup: any;
    destination: any;
  };
  [ROUTES.FINDING_ROUTE]: {
    rideOption: any;
    pickup: any;
    destination: any;
    vehicleType: any;
  };
};

export type TabNavigationParams = {
  [ROUTES.HOME]: undefined;
  [ROUTES.HISTORY]: undefined;
  [ROUTES.RIDES]: undefined;
  [ROUTES.PROFILE]: undefined;
  [ROUTES.WALLET]: undefined;
};

export type AuthStackParams = {
  [ROUTES.ONBOARDING]: undefined;
  [ROUTES.LOGIN]: undefined;
  [ROUTES.REGISTER]: undefined;
  [ROUTES.EMAIL_VERIFICATION]: {
    userType?: "rider" | "driver";
    userId: string;
    email: string;
  };
  [ROUTES.DRIVER_DOCUMENT_UPLOAD]: {email: string; userId: string};
};

export type ScreenProps = NativeStackScreenProps<MainStackParams, "homeTab">;

export type BottomTabStackNavigationProp = NativeStackNavigationProp<
  TabNavigationParams,
  "home"
>;
export type AuthStackNavigationProp = NativeStackNavigationProp<
  AuthStackParams,
  "login"
>;

export type MainStackNavigationProp = NativeStackNavigationProp<
  MainStackParams,
  "homeTab"
>;

export type AuthScreenNavigationProps<T extends keyof AuthStackParams> =
  NativeStackScreenProps<AuthStackParams, T>;
export type AuthScreenNavigationRouteProps<T extends keyof AuthStackParams> =
  RouteProp<AuthStackParams, T>;
export type ScreenNavigationProps<T extends keyof MainStackParams> =
  NativeStackScreenProps<MainStackParams, T>;
export type ScreenNavigationRouteProps<T extends keyof MainStackParams> =
  RouteProp<MainStackParams, T>;

export type TabScreenNavigationProps<T extends keyof TabNavigationParams> =
  NativeStackScreenProps<TabNavigationParams, T>;

export interface RootStackParamsList extends TabNavigationParams {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}
