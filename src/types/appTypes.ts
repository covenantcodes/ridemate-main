// import {ReactNode} from "react";
// import {
//   ImageSourcePropType,
//   StyleProp,
//   TextInputProps,
//   TextStyle,
//   ViewStyle,
// } from "react-native";

export type textSizes =
  | "THIN"
  | "SEMI_THIN"
  | "XXXXS"
  | "XXXS"
  | "XXS"
  | "XS"
  | "S"
  | "L"
  | "XL"
  | "XXL"
  | "XXXL"
  | "XXXXL";

export type fontType =
  | "grotesk"
  | "creato"
  | "sans"
  | "jakarta"
  | "frauces"
  | "dm_sans";

export type fontWeightType =
  | "bold"
  | "semiBold"
  | "extraBold"
  | "medium"
  | "regular"
  | "black"
  | "header";

// FONT FAMILY
export type fontFamily = {
  [key in fontType]: fontWeightType;
};

export type iconType =
  | "MaterialCommunityIcons"
  | "MaterialIcons"
  | "Ionicons"
  | "Feather"
  | "FontAwesome"
  | "FontAwesome5"
  | "AntDesign"
  | "Entypo"
  | "SimpleLineIcons"
  | "Octicons"
  | "Foundation"
  | "EvilIcons"
  | "Fontisto"
  | "FontAwesome6";

export interface BottomTabIconProps {
  color: string;
  focused: boolean | undefined;
  size?: number;
}

export interface ISuccessModalValues {
  modal: boolean;
  title: string;
  subtitle: string;
  coinAmount?: string;
  earningText?: string;
  buttonText: string;
  buttonPosition?: "default" | "bottom";
  showConfetti?: boolean;
  status?: "success" | "error" | "pending";
  returnScreen?: string;
  isGame?: boolean;
}
