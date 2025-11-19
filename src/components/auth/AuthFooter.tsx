import React from "react";
import {View} from "react-native";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import TouchableComponent from "components/shared/touchable/Touchable";

interface AuthFooterProps {
  text: string;
  linkText: string;
  onPress: () => void;
}

const AuthFooter: React.FC<AuthFooterProps> = ({text, linkText, onPress}) => {
  return (
    <View
      style={[
        globalStyles.flexRow,
        globalStyles.alignItemsCenter,
        globalStyles.justifyCenter,
      ]}>
      <Text font={FONT_WEIGHTS.regular} size={FONTS_SIZES.S} color="gray600">
        {text}{" "}
      </Text>
      <TouchableComponent bounce onPress={onPress}>
        <Text font={FONT_WEIGHTS.semiBold} size={FONTS_SIZES.S} color="primary">
          {linkText}
        </Text>
      </TouchableComponent>
    </View>
  );
};

export default AuthFooter;
