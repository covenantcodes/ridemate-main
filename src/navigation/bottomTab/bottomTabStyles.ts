import {Platform, StyleSheet} from "react-native";
import {ifIphoneX} from "react-native-iphone-x-helper";
import {colors} from "theme/themes";
import {getVerticalSize} from "utils/unitScaling";

export const bottomTabStyles = StyleSheet.create({
  tabStyle: {
    backgroundColor: colors.white,
    borderTopColor: colors.black10,
    borderTopWidth: 1,
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            paddingBottom: 20,
          },
          {
            paddingBottom: 20,
          },
        ),
      },
      android: {
        paddingBottom: 10,
      },
    }),
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            height: getVerticalSize(98),
          },
          {
            height: getVerticalSize(98),
          },
        ),
      },
      android: {
        height: getVerticalSize(100),
      },
    }),
  },
  tabBarIconStyle: {
    marginBottom: 18,
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            bottom: 0,
          },
          {
            bottom: 0,
          },
        ),
      },
      android: {
        bottom: 0,
      },
    }),
  },
});
