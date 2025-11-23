import Text from "components/shared/text/Text";
import GlobalView from "components/shared/view/GlobalView";
import {CREATO, FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import React from "react";
import {View, StyleSheet} from "react-native";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";

import NetworkStatusIcon from "../icons/appIcons/NetworkStatusIcon";

const NetworkModal = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.overlay]}>
      <GlobalView
        bg={colors.white}
        style={[
          globalStyles.flex,
          globalStyles.px3,
          globalStyles.py3,
          {
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            borderRadius: getSize(16),
          },
        ]}>
        <NetworkStatusIcon />
        <View
          style={[
            globalStyles.w10,
            globalStyles.mt2,
            globalStyles.flexCol,
            globalStyles.alignItemsCenter,
          ]}>
          <Text
            font={FONT_WEIGHTS.semiBold}
            fontType={CREATO}
            size={FONTS_SIZES.XL}
            style={[globalStyles.textCenter]}>
            Network Error
          </Text>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            color="gray600"
            style={[globalStyles.textCenter, globalStyles.mt2]}>
            Please check your internet connection and try again
          </Text>
        </View>
      </GlobalView>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
});

export default NetworkModal;
