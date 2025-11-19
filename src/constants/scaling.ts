import {fontWeightType, textSizes} from "/types/appTypes";

// FONTS
export const FONTS_SIZES = {
  THIN: "THIN" as textSizes,
  SEMI_THIN: "SEMI_THIN" as textSizes,
  XXXXS: "XXXXS" as textSizes,
  XXXS: "XXXS" as textSizes,
  XXS: "XXS" as textSizes,
  XS: "XS" as textSizes,
  S: "S" as textSizes,
  L: "L" as textSizes,
  XL: "XL" as textSizes,
  XXL: "XXL" as textSizes,
  XXXL: "XXXL" as textSizes,
  XXXXL: "XXXXL" as textSizes,
};

export const FONT_WEIGHTS = {
  bold: "bold" as fontWeightType,
  semiBold: "semiBold" as fontWeightType,
  extraBold: "extraBold" as fontWeightType,
  medium: "medium" as fontWeightType,
  regular: "regular" as fontWeightType,
  black: "black" as fontWeightType,
};

export const FONT_FAMILY = {
  grotesk: {
    black: "SchibstedGrotesk-Black",
    bold: "SchibstedGrotesk-Bold",
    extraBold: "SchibstedGrotesk-ExtraBold",
    medium: "SchibstedGrotesk-Medium",
    regular: "SchibstedGrotesk-Regular",
    semiBold: "SchibstedGrotesk-SemiBold",
  },
  creato: {
    black: "CreatoDisplay-Black",
    bold: "CreatoDisplay-Bold",
    extraBold: "CreatoDisplay-ExtraBold",
    medium: "CreatoDisplay-Medium",
    regular: "CreatoDisplay-Regular",
    semiBold: "CreatoDisplay-Bold",
  },
  sans: {
    black: "WorkSans-Black",
    bold: "WorkSans-Bold",
    extraBold: "WorkSans-ExtraBold",
    medium: "WorkSans-Medium",
    regular: "WorkSans-Regular",
    semiBold: "WorkSans-SemiBold",
  },
  frauces: {
    black: "Fraunces9pt-Black",
    bold: "Fraunces9pt-Bold",
    extraBold: "Fraunces9pt-ExtraBold",
    medium: "Fraunces9pt-Regular",
    regular: "Fraunces9pt-Regular",
    semiBold: "Fraunces9pt-SemiBold",
  },
  jakarta: {
    black: "PlusJakartaSans-ExtraBold",
    bold: "PlusJakartaSans-Bold",
    extraBold: "PlusJakartaSans-ExtraBold",
    medium: "PlusJakartaSans-Medium",
    regular: "PlusJakartaSans-Regular",
    semiBold: "PlusJakartaSans-SemiBold",
  },
  dm_sans: {
    black: "DMSansBlack",
    bold: "DMSansBold",
    extraBold: "DMSansExtraBold",
    medium: "DMSansMedium",
    regular: "DMSansRegular",
    semiBold: "DMSansSemiBold",
    header: "DMSans36ptBold",
  },
} as const;

export const APP_FONT = {
  grotesk: "grotesk",
  creato: "creato",
  sans: "sans",
  jakarta: "jakarta",
  frauces: "frauces",
  dm_sans: "dm_sans",
};

export const CREATO = "creato";
export const SANS = "sans";
export const GROTESTK = "grotesk";
export const FRAUCES = "frauces";
export const JAKARTA = "jakarta";
export const DM_SANS = "dm_sans";

// TEXT UNITS
export const SEMI_THIN = "SEMI_THIN";
export const THIN = "THIN";
export const XXXXS = "XXXXS";
export const XXXS = "XXXS";
export const XXS = "XXS";
export const XS = "XS";
export const S = "S";
export const L = "L";
export const XL = "XL";
export const XXL = "XXL";
export const XXXL = "XXXL";

// FONTS
export const MEDIUM = "medium";
export const BOLD = "bold";
export const EXTRA_BOLD = "extraBold";
export const SEMI_BOLD = "semiBold";
export const REGULAR = "regular";
export const BLACK = "black";
