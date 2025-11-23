import React from "react";
import {View, ScrollView} from "react-native";
import Text from "components/shared/text/Text";
import TouchableComponent from "components/shared/touchable/Touchable";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {appStyles} from "styles/appStyles";

interface RideType {
  id: string;
  name: string;
  description: string;
  Icon: React.ComponentType<{width?: number; height?: number; color?: string}>;
}

interface RideOptionsSheetProps {
  options: RideType[];
  onSelectOption: (option: RideType) => void;
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
          maxHeight: "44%",
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
                backgroundColor: colors.primary550,
              },
            ]}>
            <View
              style={[
                globalStyles.flexRow,
                globalStyles.alignItemsCenter,
                globalStyles.flex,
              ]}>
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
                {/* Render the icon component */}
                <option.Icon width={28} height={28} color={colors.primary} />
              </View>
              <View style={[globalStyles.ml1, globalStyles.flex]}>
                <Text font={FONT_WEIGHTS.semiBold} size={FONTS_SIZES.S}>
                  {option.name}
                </Text>
                <Text
                  font={FONT_WEIGHTS.regular}
                  size={FONTS_SIZES.XS}
                  color="gray600"
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {option.description}
                </Text>
              </View>
            </View>
          </TouchableComponent>
        ))}
      </ScrollView>
    </View>
  );
};

export default RideOptionsSheet;
