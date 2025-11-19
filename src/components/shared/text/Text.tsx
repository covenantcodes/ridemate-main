import {DM_SANS} from "constants/scaling";
import React, {FC, PropsWithChildren} from "react";
import {StyleProp, Text as RNText, TextProps, TextStyle} from "react-native";
import {colorType} from "theme/themes";
import {fontType, fontWeightType, textSizes} from "types/appTypes";
import {getTextColor, getTextFont, getTextSize} from "utils/unitScaling";

interface MainTextProps extends TextProps, PropsWithChildren {
  color?: colorType;
  style?: StyleProp<TextStyle>;
  size?: textSizes;
  font: fontWeightType;
  fontType?: fontType;
  children: React.ReactNode;
  lineHeight?: number;
  letterSpacing?: number;
}
const Text: FC<MainTextProps> = ({
  children,
  style,
  size,
  color = "text",
  font,
  fontType = DM_SANS,
  lineHeight,
  letterSpacing,

  ...rest
}) => {
  return (
    <RNText
      selectionColor="#303235"
      style={[
        {
          fontFamily: getTextFont(fontType, font),
          fontSize: size ? getTextSize(size) : undefined,
          color: getTextColor(color),
          lineHeight,
          letterSpacing,
        },
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
