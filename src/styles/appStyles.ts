import {getStatusBarHeight} from "@freakycoder/react-native-helpers";
import {Platform, StyleSheet} from "react-native";
import {ifIphoneX} from "react-native-iphone-x-helper";
import {moderateVerticalScale} from "react-native-size-matters";

import {colors} from "/theme/themes";
import {getSize} from "/utils/unitScaling";

export const appStyles = StyleSheet.create({
  statusBarHeight: {
    paddingTop: getStatusBarHeight(),
  },
  errorColor: {
    color: colors.danger,
  },
  screenHorizontalPadding: {
    paddingHorizontal: getSize(20),
  },
  appButtonStyle: {
    height: moderateVerticalScale(55, 0.3),
    backgroundColor: colors.primary,
    borderRadius: getSize(40),
  },
  errorBackground: {
    borderBottomColor: colors.danger,
    borderBottomWidth: 1,
  },
  inputContainer: {
    height: getSize(50),
    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 40,
    color: colors.gray700,
  },
  transparentContainer: {
    height: getSize(50),
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 16,
    color: colors.gray700,
  },
  hotInputContainer: {
    height: getSize(64),
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 16,
    color: colors.gray700,
  },
  userLogoStyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: colors.primary,
    marginTop: 30,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  input: {
    fontFamily: "WorkSans-Regular",
  },
  lineHeight1: {
    lineHeight: 10,
  },
  lineHeight2: {
    lineHeight: 20,
  },
  whiteBackground: {
    backgroundColor: colors.white,
  },
  inset: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  dotStyle: {
    backgroundColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.white,
  },
  activeDotStyle: {
    width: 40,
    backgroundColor: colors.primary,
  },
  generalBottomModalViewStyle: {
    bottom: 0,
    backgroundColor: colors.white,
    width: "100%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  generalZoomModalViewStyle: {
    top: "35%",
    backgroundColor: colors.white,
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
  },
  loginBiometricModalViewStyle: {
    bottom: "0%",
    backgroundColor: colors.white,
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
  },
  containerShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  border: {
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  modalRadius: {
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
  kycBtn: {
    backgroundColor: colors.white,
  },
  grid: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  singleProfileContainer: {
    width: getSize(45),
    height: getSize(45),
    borderRadius: getSize(45),
    borderWidth: 1.5,
    borderColor: colors.white,
    backgroundColor: "#F1F1F1",
  },

  btnBottom: {
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            paddingBottom: 10,
          },
          {
            paddingBottom: 20,
          },
        ),
      },
      android: {
        paddingBottom: 20,
      },
    }),
  },
  modalBottom: {
    ...Platform.select({
      ios: {
        ...ifIphoneX(
          {
            paddingBottom: 20,
          },
          {
            paddingBottom: 5,
          },
        ),
      },
      android: {
        paddingBottom: 10,
      },
    }),
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 16,
    marginTop: 20,
  },
  smallImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  headerBackArrow: {
    borderColor: colors.gray500,
    borderWidth: 1,
    borderRadius: 30,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#00000033",
    shadowOffset: {
      width: -2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
    elevation: 4,
  },
  divider: {
    height: 2,
    backgroundColor: "#F8F8F8",
  },
  shadowAndWithBorderEffect: {
    borderWidth: 3,
    borderColor: "white",
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  cardShadow: {
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "#000000",
    elevation: 5,

    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
});
