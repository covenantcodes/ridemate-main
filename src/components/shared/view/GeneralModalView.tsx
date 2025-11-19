import Text from "components/shared/text/Text";
import TouchableComponent from "components/shared/touchable/Touchable";
import GlobalView from "components/shared/view/GlobalView";
import {DM_SANS, FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import React from "react";
import {StyleProp, View, ViewProps, ViewStyle} from "react-native";
import {appStyles} from "styles/appStyles";
// App Imports
// import {colors} from 'styles/colors';
// import TouchableComponent from 'components/common/touchable/TouchableComponent';
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";

import MainIcon from "../icons/icon";

interface TransactionModalViewsProps extends ViewProps {
  closeModal: () => void;
  style?: StyleProp<ViewStyle>;
  hideIcon?: boolean;
  title?: string;
  hideHeader?: boolean;
  showRectangle?: boolean;
  isKeyboardVisible?: boolean;
  centerTitle?: boolean;
}

const GeneralModalViews: React.FC<TransactionModalViewsProps> = ({
  closeModal,
  style,
  children,
  hideIcon,
  title,
  hideHeader,
  showRectangle,
  isKeyboardVisible,
  centerTitle,
}) => {
  return (
    <View
      style={[
        appStyles.generalBottomModalViewStyle,
        globalStyles.absolute,
        globalStyles.px3,
        !hideHeader && globalStyles.py25,
        globalStyles.pb2,
        style,
        isKeyboardVisible && {
          bottom: 180,
        },
      ]}>
      {showRectangle && (
        <GlobalView
          bg={colors.gray300}
          style={[
            globalStyles.flexCenter,
            globalStyles.alignSelfCenter,
            globalStyles.flexZero,
            globalStyles.br8,
            hideHeader && globalStyles.mt25,
            {width: 100, height: 6},
          ]}
        />
      )}
      {!hideHeader && (
        <View
          style={[
            globalStyles.w10,
            globalStyles.flexRow,
            globalStyles.alignItemsCenter,
            globalStyles.justifyBetween,
            globalStyles.mt2,
          ]}>
          {title && (
            <Text
              style={[centerTitle && globalStyles.textCenter]}
              font={FONT_WEIGHTS.bold}
              fontType={DM_SANS}
              size={FONTS_SIZES.L}
              lineHeight={18}>
              {title}
            </Text>
          )}

          {!hideIcon && (
            <TouchableComponent
              onPress={closeModal}
              style={[globalStyles.alignItemsFlexEnd]}>
              <MainIcon
                type="MaterialCommunityIcons"
                name="close"
                size={getSize(24)}
                color={colors.gray600}
              />
            </TouchableComponent>
          )}
        </View>
      )}

      {/* Content */}
      <View style={[globalStyles.w10]}>{children}</View>
    </View>
  );
};

export default GeneralModalViews;
