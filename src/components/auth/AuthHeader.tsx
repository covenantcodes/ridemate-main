import React from "react";
import {View} from "react-native";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({title, subtitle}) => {
  return (
    <View style={[globalStyles.mt5, globalStyles.mb3]}>
      <Text font={FONT_WEIGHTS.bold} size={FONTS_SIZES.XXXL} lineHeight={32}>
        {title}
      </Text>
      <Text
        font={FONT_WEIGHTS.regular}
        size={FONTS_SIZES.S}
        lineHeight={20}
        color="black60"
        style={[globalStyles.mt1]}>
        {subtitle}
      </Text>
    </View>
  );
};

export default AuthHeader;
