import {
  HOME,
  HOME_TAB,
  WALLET,
  HISTORY,
  PROFILE,
} from "navigation/navigation.constants";
import {useAppNavigation} from "./useAppNavigation";

export const useBottomNavigate = () => {
  const {navigation} = useAppNavigation();

  const navigateToHome = () => {
    navigation.navigate(HOME_TAB, {screen: HOME});
  };

  const navigateToWallet = () => {
    navigation.navigate(HOME_TAB, {screen: WALLET});
  };

  const navigateToHistory = () => {
    navigation.navigate(HOME_TAB, {screen: HISTORY});
  };

  const navigateToProfile = () => {
    navigation.navigate(HOME_TAB, {screen: PROFILE});
  };

  return {
    navigateToHome,
    navigateToWallet,
    navigateToHistory,
    navigateToProfile,
  };
};
