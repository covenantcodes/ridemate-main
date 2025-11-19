import React from "react";
import {View, ScrollView} from "react-native";
import Text from "components/shared/text/Text";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {appStyles} from "styles/appStyles";

interface RideOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: string;
  time: string;
}

interface RideOptionsSheetProps {
  options: RideOption[];
  onSelectOption: (option: RideOption) => void;
}

const RideOptionsSheet: React.FC<RideOptionsSheetProps> = ({
  options,
  onSelectOption,
}) => {
  return (
    <View
      style={[
        globalStyles.absolute,
        {
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: colors.white,
          borderTopLeftRadius: getSize(24),
          borderTopRightRadius: getSize(24),
          paddingHorizontal: getSize(20),
          paddingTop: getSize(20),
          paddingBottom: getSize(30),
          maxHeight: "40%",
        },
        appStyles.shadow,
      ]}>
      {/* Handle Bar */}
      <View
        style={[
          globalStyles.alignSelfCenter,
          globalStyles.mb2,
          {
            width: getSize(40),
            height: getSize(4),
            backgroundColor: colors.gray300,
            borderRadius: getSize(2),
          },
        ]}
      />

      <Text
        font={FONT_WEIGHTS.bold}
        size={FONTS_SIZES.L}
        style={[globalStyles.mb2]}>
        Choose a ride
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {options.map(option => (
          <TouchableComponent
            key={option.id}
            bounce
            onPress={() => onSelectOption(option)}
            style={[
              globalStyles.flexRow,
              globalStyles.alignItemsCenter,
              globalStyles.justifyBetween,
              globalStyles.py2,
              globalStyles.px2,
              globalStyles.mb1,
              {
                borderRadius: getSize(12),
                backgroundColor: colors.gray500,
              },
            ]}>
            <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
              <View
                style={[
                  globalStyles.flexCenter,
                  {
                    width: getSize(40),
                    height: getSize(40),
                    borderRadius: getSize(20),
                    backgroundColor: colors.white,
                  },
                ]}>
                <MainIcon
                  type="MaterialCommunityIcons"
                  name={option.icon}
                  size={getSize(24)}
                  color={colors.primary}
                />
              </View>
              <View style={[globalStyles.ml1]}>
                <Text font={FONT_WEIGHTS.semiBold} size={FONTS_SIZES.S}>
                  {option.name}
                </Text>
                <Text
                  font={FONT_WEIGHTS.regular}
                  size={FONTS_SIZES.XS}
                  color="gray600">
                  {option.time} • {option.description}
                </Text>
              </View>
            </View>
            <Text font={FONT_WEIGHTS.bold} size={FONTS_SIZES.S}>
              {option.price}
            </Text>
          </TouchableComponent>
        ))}
      </ScrollView>
    </View>
  );
};

export default RideOptionsSheet;
