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

export interface IIconProps {
  size?: number;
  color?: string;
  bg1?: string;
  bg2?: string;
  focused?: boolean;
  onPress?: () => void;
  count?: number;
  text?: string;
  width?: number;
  height?: number;
}
