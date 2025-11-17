import {
  HOME,
  HOME_TAB,
  EXPLORE,
  FAVORITES,
  PROFILE,
} from "navigation/navigation.constants";
import {useAppNavigation} from "./useAppNavigation";

export const useBottomNavigate = () => {
  const {navigation} = useAppNavigation();

  const navigateToHome = () => {
    navigation.navigate(HOME_TAB, {screen: HOME});
  };

  const navigateToExplore = () => {
    navigation.navigate(HOME_TAB, {screen: EXPLORE});
  };

  const navigateToFavorites = () => {
    navigation.navigate(HOME_TAB, {screen: FAVORITES});
  };

  const navigateToProfile = () => {
    navigation.navigate(HOME_TAB, {screen: PROFILE});
  };

  return {
    navigateToHome,
    navigateToExplore,
    navigateToFavorites,
    navigateToProfile,
  };
};
