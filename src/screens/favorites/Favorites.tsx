import React from "react";
import {View} from "react-native";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";

const Favorites = () => {
  return (
    <View>
      <Text font={FONT_WEIGHTS.medium} size={FONTS_SIZES.S}>
        Favorites
      </Text>
    </View>
  );
};

export default Favorites;
