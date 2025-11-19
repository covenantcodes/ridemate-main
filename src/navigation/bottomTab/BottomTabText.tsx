import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import React from "react";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";

const BottomTabText = ({
  // color,
  focused,
  title,
}: {
  color: string;
  focused: boolean;
  title: string;
}) => {
  if (focused) {
    return (
      <Text
        letterSpacing={-0.2}
        size={FONTS_SIZES.XS}
        font={FONT_WEIGHTS.medium}
        lineHeight={16}
        style={[
          {color: colors.primary, top: -10},
          globalStyles.textCapitalize,
          globalStyles.textCenter,
        ]}>
        {title}
      </Text>
    );
  }
  return (
    <Text
      letterSpacing={-0.2}
      size={FONTS_SIZES.XS}
      font={FONT_WEIGHTS.medium}
      lineHeight={16}
      color="gray400"
      style={[
        globalStyles.textCapitalize,
        globalStyles.textCenter,
        {top: -10},
      ]}>
      {title}
    </Text>
  );
};

export default BottomTabText;
