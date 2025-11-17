import {L, SEMI_BOLD} from "constants/scaling";
import React, {ReactNode} from "react";
import {
  ActivityIndicator,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {moderateVerticalScale} from "react-native-size-matters";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {iconType} from "types/appTypes";
import {getSize} from "utils/unitScaling";

// App Imports
import Text from "../text/Text";
import TouchableComponent from "../touchable/Touchable";

type btnVariant =
  | "primaryOutline"
  | "disabled"
  | "primary"
  | "transparent"
  | "danger"
  | "dangerOutline"
  | "outline"
  | "transparentWithoutBorder"
  | "transparentOnboard"
  | "yardModal"
  | "transparentBorder"
  | "blackBg"
  | "blackOutline"
  | "secondary"
  | "secondaryLight"
  | "white";
export interface ButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  icon?: iconType;
  name?: string;
  variant?: btnVariant;
  children: ReactNode;
  loaderColor?: string;
  rightIcon?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  bounce?: boolean;
  shadow?: boolean;
  withGradient?: boolean;
  gradientColors?: string[];
  end?: {
    x: number;
    y: number;
  };
  start?: {
    x: number;
    y: number;
  };
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  loading,
  leftIcon,

  variant,
  children,
  loaderColor,
  disabled,
  rightIcon,
  textStyle,
  bounce,
  shadow,
  withGradient,
  gradientColors,
  end,
  start,
  ...rest
}) => {
  const press = () => {
    if (disabled) return;
    if (onPress) {
      onPress();
      return;
    }
  };

  return (
    <TouchableComponent
      bounce={bounce}
      onPress={press}
      disabled={disabled}
      style={[
        globalStyles.w10,
        globalStyles.flexCenter,
        styles.button,
        shadow && styles.shadow,
        variant === "transparent" && styles.transparent,
        variant === "blackBg" && styles.blackBg,
        variant === "blackOutline" && styles.blackOutline,
        variant === "secondary" && styles.secondary,
        variant === "secondaryLight" && styles.secondaryLight,
        variant === "transparentOnboard" && styles.transparentOnboard,
        variant === "transparentBorder" && styles.transparentBorder,
        variant === "disabled" && styles.disabled,
        variant === "primaryOutline" && styles.primaryOutline,
        variant === "danger" && styles.danger,
        variant === "dangerOutline" && styles.dangerOutline,
        variant === "outline" && styles.outline,
        variant === "white" && styles.white,
        variant === "yardModal" && styles.yardModal,
        variant === "transparentWithoutBorder" &&
          styles.transparentWithoutBorder,
        disabled && styles.disabled,
        style,
        {...rest},
      ]}
      accessibilityRole="button">
      {withGradient ? (
        <LinearGradient
          end={end}
          start={start}
          style={[styles.gradient]}
          colors={gradientColors ?? ["#9C4ADB", "#6B3B90"]}>
          <>
            {loading ? (
              <ActivityIndicator
                size={20}
                color={loaderColor ? loaderColor : colors.white}
              />
            ) : (
              <View
                style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
                {leftIcon && <View style={[globalStyles.mr1]}>{leftIcon}</View>}

                <Text
                  fontType="dm_sans"
                  size={L}
                  font={SEMI_BOLD}
                  style={[
                    {color: colors.white},
                    variant === "transparent" && {color: colors.black},
                    variant === "transparentWithoutBorder" && {
                      color: colors.primary,
                    },
                    variant === "primaryOutline" && {color: colors.primary},
                    variant === "transparentBorder" && {color: colors.primary},
                    variant === "danger" && {color: colors.white},
                    variant === "blackBg" && {color: colors.white},
                    variant === "white" && {color: colors.black},
                    variant === "blackOutline" && {color: colors.black},
                    variant === "secondary" && {color: colors.white},
                    variant === "secondaryLight" && {color: colors.secondary},
                    variant === "dangerOutline" && {color: colors.pink700},
                    variant === "outline" && {color: colors.gray700},
                    variant === "yardModal" && {color: colors.primary},
                    variant === "transparentOnboard" && {color: colors.white},
                    textStyle,
                  ]}>
                  {children}
                </Text>
                {rightIcon && (
                  <View style={[globalStyles.ml1]}>{rightIcon}</View>
                )}
              </View>
            )}
          </>
        </LinearGradient>
      ) : (
        <>
          {loading ? (
            <ActivityIndicator
              size={20}
              color={loaderColor ? loaderColor : colors.white}
            />
          ) : (
            <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
              {leftIcon && <View style={[globalStyles.mr1]}>{leftIcon}</View>}

              <Text
                fontType="dm_sans"
                size={L}
                font={SEMI_BOLD}
                style={[
                  {color: colors.white},
                  variant === "transparent" && {color: colors.black},
                  variant === "transparentWithoutBorder" && {
                    color: colors.primary,
                  },
                  variant === "primaryOutline" && {color: colors.primary},
                  variant === "transparentBorder" && {color: colors.primary},
                  variant === "danger" && {color: colors.white},
                  variant === "blackBg" && {color: colors.white},
                  variant === "white" && {color: colors.black},
                  variant === "blackOutline" && {color: colors.black},
                  variant === "secondary" && {color: colors.white},
                  variant === "secondaryLight" && {color: colors.secondary},
                  variant === "dangerOutline" && {color: colors.pink700},
                  variant === "outline" && {color: colors.gray700},
                  variant === "yardModal" && {color: colors.primary},
                  variant === "transparentOnboard" && {color: colors.white},
                  textStyle,
                ]}>
                {children}
              </Text>
              {rightIcon && <View style={[globalStyles.ml1]}>{rightIcon}</View>}
            </View>
          )}
        </>
      )}
    </TouchableComponent>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: moderateVerticalScale(50, 0.1),
    backgroundColor: colors.primary,
    borderRadius: getSize(40),
  },
  transparent: {
    backgroundColor: "#F4F4F4",
    height: moderateVerticalScale(50, 0.1),
  },
  transparentOnboard: {
    backgroundColor: "transparent",
    height: moderateVerticalScale(50, 0.1),
    borderWidth: 1,
    borderColor: "rgba(253, 251, 254, 0.2)",
  },

  //   authBtn: {
  //     backgroundColor: colors.authBg,
  //     borderWidth: 1,
  //     borderColor: colors.authBg,
  //     height: moderateVerticalScale(50),
  //   },
  disabled: {
    // backgroundColor: colors.disabled,
    height: moderateVerticalScale(50, 0.1),
    opacity: 0.6,
  },
  primaryOutline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
    height: moderateVerticalScale(50, 0.1),
  },
  blackBg: {
    backgroundColor: colors.black,
    height: moderateVerticalScale(50, 0.1),
  },
  white: {
    backgroundColor: colors.white,
    height: moderateVerticalScale(50, 0.1),
  },
  blackOutline: {
    backgroundColor: colors.transparent,
    height: moderateVerticalScale(50, 0.1),
    borderWidth: 1,
    borderColor: colors.black,
  },
  secondary: {
    backgroundColor: colors.secondary100,
    height: moderateVerticalScale(50, 0.1),
  },
  secondaryLight: {
    backgroundColor: "rgba(220, 86, 149, 0.08)",
    height: moderateVerticalScale(50, 0.1),
    borderWidth: 1,
    borderColor: "rgba(220, 86, 149, 0.08)",
  },
  danger: {
    backgroundColor: colors.danger300,
    borderWidth: 1,
    borderColor: colors.danger300,
    height: moderateVerticalScale(50, 0.1),
  },
  dangerOutline: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.pink700,
    height: moderateVerticalScale(50, 0.1),
  },
  outline: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.gray800,
    height: moderateVerticalScale(50, 0.1),
  },
  yardModal: {
    backgroundColor: colors.white,
    height: moderateVerticalScale(50, 0.1),
  },
  transparentWithoutBorder: {
    backgroundColor: "#f0ebf5",
    height: moderateVerticalScale(50, 0.1),
  },
  transparentBorder: {
    backgroundColor: "#6B3B900A",
    borderWidth: 1,
    borderColor: "#6B3B9014",
    height: moderateVerticalScale(50, 0.1),
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 50,
  },
  gradient: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
