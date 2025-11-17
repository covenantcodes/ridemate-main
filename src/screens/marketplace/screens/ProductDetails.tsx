import React from "react";
import {View} from "react-native";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";

const ProductDetails = () => {
  return (
    <View>
      <Text font={FONT_WEIGHTS.medium} size={FONTS_SIZES.S}>
        ProductDetails
      </Text>
    </View>
  );
};

export default ProductDetails;
