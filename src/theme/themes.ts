// import {DefaultTheme, ExtendedTheme} from "@react-navigation/native";

export type colorType =
  | "primary"
  | "primary4"
  | "primary5"
  | "primary6"
  | "primary7"
  | "primary8"
  | "primary9"
  | "primary10"
  | "primary150"
  | "primary400"
  | "primary900"
  | "secondary"
  | "primaryLight"
  | "purple700"
  | "purple800"
  | "white"
  | "white40"
  | "white50"
  | "white60"
  | "black20"
  | "black60"
  | "black40"
  | "black50"
  | "black70"
  | "black80"
  | "black90"
  | "black100"
  | "black10"
  | "gray10"
  | "error"
  | "error100"
  | "error500"
  | "secondary10"
  | "secondary60"
  | "secondary100"
  | "secondary200"
  | "secondary300"
  | "secondary400"
  | "gray2"
  | "gray3"
  | "gray4"
  | "gray5"
  | "gray11"
  | "placeholder"
  | "tertiary100"
  | "tertiary200"
  | "tertiary300"
  | "tertiary400"
  | "tertiary500"
  | "tertiary700"
  | "tertiary600"
  | "tertiary800"
  | "teal100"
  | "white60"
  | "white80"
  | "success200"
  | "success300"
  | "orange10"
  | "orange20"
  | "paragraph2"
  | "teal300"
  | "orange30"
  | "brown10"
  | "green10"
  | "gray12"

  // old version
  | "black"
  | "black40"
  | "danger"
  | "danger100"
  | "danger300"
  | "danger400"
  | "danger700"
  | "success"
  | "success100"
  | "success600"
  | "transparent"
  | "text"
  | "background"
  | "gray"
  | "gray100"
  | "gray200"
  | "gray300"
  | "gray400"
  | "gray500"
  | "gray600"
  | "gray700"
  | "gray800"
  | "gray900"
  | "brown20"
  | "secondary100"
  | "warning600"
  | "blue700"
  | "success700"
  | "success400"
  | "successbg"
  | "primary80"
  | "primary100"
  | "primary500"
  | "primary700"
  | "warning"
  | "peach400"
  | "peach600"
  | "teal600"
  | "teal400"
  | "overlay"
  | "pink100"
  | "blue10"
  | "blue100"
  | "blue200"
  | "error600"
  | "pink700"
  | "pink900"
  | "teal800"
  | "teal200"
  | "pink600"
  | "disabled"
  | "purpleText"
  | "primary700"
  | "primaryThin"
  | "purpleBg"
  | "amountSuccess"
  | "blue"
  | "pink50"
  | "teal100"
  | "peach100"
  | "purple100"
  | "paragraph2";

export const colors = {
  primary: "#0d4af2ff",
  primary4: "#0D80F20A",
  primary5: "#4DA6F7",
  primary6: "#0D80F21A",
  primary8: "#0D80F214",
  primary7: "#0A5FB4",
  primary9: "#0B6ECF",
  primary10: "#0071D9",
  primary900: "rgba(13, 128, 242, 0.9)",
  primary400: "#7CB9F8",

  error: "#FC585A",
  error100: "#FEE4E2",
  error500: "#F04438",
  secondary60: "#DC569599",
  secondary100: "#DC5695",
  secondary10: "#DC56951A",
  secondary200: "#DC569533",
  secondary300: "#DC56951A",
  secondary400: "#FC585A33",
  black: "#191B1F",
  black10: "#E8E8E9",
  black20: "#191B1F33",
  black60: "#191B1F99",
  black40: "#191B1F66",
  black50: "#E4E5E7",
  black70: "#191B1FB2",
  black80: "#191B1FCC",
  black90: "#191B1F1A",
  black100: "#191B1F",
  brown20: "#7A2E0E",

  gray10: "#848A95",
  gray11: "#F9F9F999",
  gray12: "#A3A4A5",
  white40: "#FFFFFF80",
  white50: "#FFFFFF1A",
  white60: "#FFFFFF99",

  purple700: "rgba(2, 31, 89, 1)",
  blue: "#755FFE",
  placeholder: "#BDBDBD",
  tertiary100: "#FC9B1C",
  tertiary200: "#9A3BE2",
  tertiary300: "#FCF0E7",
  tertiary400: "#FFCE51",
  tertiary500: "#FFCE5133",
  tertiary600: "#FF7324",
  tertiary700: "#027A48",
  tertiary800: "#FEF0C7",
  teal100: "#DAFBF3",
  teal200: "#23CE6B14",
  teal300: "#23CE6B",
  teal400: "#A6F4C5",
  orange10: "#FC9B1C14",
  orange20: "#FC9B1C1A",
  orange30: "#FC9B1C",
  peach100: "#FDE3D7",
  purple100: "#F2EBFE",
  brown10: "#93370D",
  green10: "#0D5142",

  // old version

  primaryLight: "rgba(107, 59, 144, 0.4)",
  primaryThin: "rgba(4, 2, 5, 0.2)",
  disabled: "#c4b1d3",
  primary80: "#6B3B90CC",
  primary100: "#f1ecf5",
  primary150: "#FCEFF5",
  primary500: "#67799B",
  primary700: "#361E48",
  primary800: "#6B3B9014",
  purpleText: "#2E1442",
  purpleBg: "#361E48",
  secondary: "#ED4895",
  background: "#F9F9F9",
  white: "#fff",
  text: "#30363b",
  gray: "#E6E6E6",
  danger: "#F04438",
  danger100: "rgba(217, 45, 32, 0.08)",
  danger300: "#D92D20",
  danger400: "#B42318",
  danger700: "rgba(180, 35, 24, 1)",
  success: "#008000",
  success100: "rgba(239, 255, 239, 0.95)",
  success300: "#23CE6B1A",
  amountSuccess: "#3CCA2B",
  success700: "#07B44C",
  transparent: "transparent",
  gray100: "#F8F8F8",
  gray200: "#F1F1F1",
  gray300: "#D1D1D2",
  gray400: "#BABBBC",
  gray500: "#BDBDBD",
  gray600: "#757679",
  gray700: "#47494C",
  gray800: "#303235",
  gray900: "#191B1F",
  gray2: "#F9F9F9",
  gray3: "#F1F1F10F",
  gray4: "#F7F7F733",
  gray5: "#F7F7F7",
  purple800: "#090000",
  warning600: "#DC6803",
  warning: "#FFA500",
  blue10: "#5E6EFF",
  blue700: "#325FC9",
  blue100: "#EFF3FC",
  blue200: "#5E6EFF1A",
  blue400: "#4C79E2",
  peach400: "#F8A279",
  teal600: "#34A28B",
  teal800: "#1A5146",
  overlay: "rgba(0,0,0,0.5)",
  pink100: "#FFEBF1",
  pink700: "#E03E89",
  pink600: "#DC5695",
  pink900: "#DC56950F",
  peach600: "#B5582C",
  error600: "#D92D20",
  pink50: "#edaaca",
  success400: "#054F31",
  success200: "#23CE6B",
  success600: "#039855",
  successbg: "#E5FEEF",
  white80: "#FFFFFFCC",
  paragraph2: "#667085",
};

// export const LightTheme: ExtendedTheme = {
//   dark: false,
//   colors: {
//     ...DefaultTheme.colors,
//     ...palette,
//   },
// };

// export const DarkTheme: ExtendedTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...LightTheme.colors,
//     background: palette.black,
//     foreground: palette.white,
//     text: palette.white,
//     tabBar: palette.black,
//     iconWhite: palette.black,
//     iconBlack: palette.white,
//     dynamicBackground: palette.dynamicBlack,
//     shadow: palette.transparent,
//     borderColor: palette.borderColorDark,
//   },
// };
