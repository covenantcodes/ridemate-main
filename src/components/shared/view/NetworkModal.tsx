import Text from "components/shared/text/Text";
import GlobalView from "components/shared/view/GlobalView";
import {CREATO, FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import React from "react";
import {View} from "react-native";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";

import NetworkStatusIcon from "../icons/appIcons/NetworkStatusIcon";

const NetworkModal = () => {
  return (
    <GlobalView
      bg={colors.white}
      style={[globalStyles.w10, globalStyles.flexCol]}>
      <NetworkStatusIcon />
      <View
        style={[
          globalStyles.w10,
          globalStyles.mt2,
          globalStyles.flexCol,
          globalStyles.w7,
        ]}>
        <Text
          font={FONT_WEIGHTS.semiBold}
          fontType={CREATO}
          size={FONTS_SIZES.XL}>
          Network Error
        </Text>
        <Text
          font={FONT_WEIGHTS.regular}
          size={FONTS_SIZES.S}
          style={[globalStyles.textCenter, globalStyles.mt2]}>
          Please check your internet connection and try again
        </Text>
      </View>
    </GlobalView>
  );
};

export default NetworkModal;
