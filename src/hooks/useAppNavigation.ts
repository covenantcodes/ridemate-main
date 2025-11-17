import {useNavigation} from "@react-navigation/native";
import {
  AuthStackNavigationProp,
  BottomTabStackNavigationProp,
  MainStackNavigationProp,
} from "navigation/navigation.types";

export const useAppNavigation = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const authNavigation = useNavigation<AuthStackNavigationProp>();
  const tabNavigation = useNavigation<BottomTabStackNavigationProp>();

  return {navigation, tabNavigation, authNavigation};
};
