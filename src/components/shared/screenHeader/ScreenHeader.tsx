import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {useAppNavigation} from "hooks/useAppNavigation";
import React, {ReactNode} from "react";
import {StyleProp, View, ViewStyle} from "react-native";
import {globalStyles} from "styles/globalStyles";
import {colorType} from "theme/themes";
import {fontWeightType} from "types/appTypes";

import BackArrowIcon from "../icons/appIcons/BackArrowIcon";
import Text from "../text/Text";
import TouchableComponent from "../touchable/Touchable";

interface IScreenHeader {
  onPress?: () => void;
  header?: string;
  headerColor?: colorType;
  subHeader?: string | ReactNode;
  suhHeaderOnPress?: () => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  subHeaderTextWeight?: fontWeightType;
  rightIcon?: ReactNode;
  otherIcon?: ReactNode;
  hideBackIcon?: boolean;
  backIconColor?: colorType;
}
const ScreenHeader = ({
  onPress,
  suhHeaderOnPress,
  header,
  headerColor,
  subHeader,
  style,
  containerStyle,
  subHeaderTextWeight,
  rightIcon,
  otherIcon,
  hideBackIcon,
  backIconColor,
}: IScreenHeader) => {
  const {navigation} = useAppNavigation();

  return (
    <View style={[containerStyle]}>
      <View
        style={[
          globalStyles.flexBetween,
          globalStyles.alignItemsCenter,
          style,
        ]}>
        <TouchableComponent
          bounce
          onPress={() => {
            if (onPress) {
              onPress();
            } else {
              navigation.goBack();
            }
          }}
          style={[
            globalStyles.flexRow,
            globalStyles.gap15,
            globalStyles.alignItemsCenter,
          ]}>
          {!hideBackIcon && (
            <BackArrowIcon
              color={backIconColor}
              onPress={() => {
                if (onPress) {
                  onPress();
                } else {
                  navigation.goBack();
                }
              }}
            />
          )}
          <Text
            style={[globalStyles.textCapitalize]}
            font={FONT_WEIGHTS.bold}
            letterSpacing={-0.5}
            lineHeight={24}
            size={FONTS_SIZES.XL}
            color={headerColor}>
            {header}
          </Text>
        </TouchableComponent>

        {subHeader && (
          <TouchableComponent onPress={suhHeaderOnPress}>
            {typeof subHeader === "string" ? (
              <Text
                style={[]}
                font={subHeaderTextWeight ?? FONT_WEIGHTS.bold}
                letterSpacing={-0.5}
                lineHeight={26}
                color="primary"
                size={FONTS_SIZES.L}>
                {subHeader}
              </Text>
            ) : (
              subHeader
            )}
          </TouchableComponent>
        )}
        {rightIcon && <View style={[globalStyles.ml2]}>{rightIcon}</View>}
        {otherIcon && <View style={[globalStyles.ml2]}>{otherIcon}</View>}
      </View>
    </View>
  );
};

export default ScreenHeader;
