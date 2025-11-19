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
};

export type TabNavigationParams = {
  [ROUTES.HOME]: undefined;
  [ROUTES.HISTORY]: undefined;
  [ROUTES.PROFILE]: undefined;
  [ROUTES.WALLET]: undefined;
};

export type AuthStackParams = {
  [ROUTES.ONBOARDING]: undefined;
  [ROUTES.LOGIN]: undefined;
  [ROUTES.REGISTER]: undefined;
  // [ROUTES.FORGOT_PASSWORD]: undefined;
  // [ROUTES.RESET_PASSWORD]: {token: string};
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

/**
 * Typing for screen navigation and route props
 */

/**
 * NAVIGATION
 */
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

/**
 * @Usage Global typing the navigation hook
 */
export interface RootStackParamsList
  //   AuthStackParams,
  extends TabNavigationParams {}

declare global {
  // eslint-disable-next-line  @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}
