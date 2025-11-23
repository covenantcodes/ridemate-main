import React from "react";
import {View} from "react-native";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {appStyles} from "styles/appStyles";

interface PickupDestinationBarProps {
  pickup: {
    name: string;
    address: string;
  } | null;
  destination: {
    name: string;
    address: string;
  } | null;
  onPickupPress: () => void;
  onDestinationPress: () => void;
  onSwapPress: () => void;
}

const PickupDestinationBar: React.FC<PickupDestinationBarProps> = ({
  pickup,
  destination,
  onPickupPress,
  onDestinationPress,
  onSwapPress,
}) => {
  return (
    <View
      style={[
        globalStyles.absolute,

        {width: "91%", top: getSize(20), left: getSize(15), right: getSize(80)},
      ]}>
      <View
        style={[
          globalStyles.px2,
          globalStyles.py2,

          {
            backgroundColor: colors.white,
            borderRadius: getSize(16),
          },
        ]}>
        <TouchableComponent bounce onPress={onPickupPress}>
          <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
            <View
              style={[
                globalStyles.flexCenter,
                {
                  width: getSize(32),
                  height: getSize(32),
                  borderRadius: getSize(16),
                  backgroundColor: colors.primary + "20",
                },
              ]}>
              <MainIcon
                type="MaterialIcons"
                name="my-location"
                size={getSize(18)}
                color={colors.primary}
              />
            </View>
            <View style={[globalStyles.flex, globalStyles.ml1]}>
              <Text
                font={FONT_WEIGHTS.medium}
                size={FONTS_SIZES.XS}
                color="gray600">
                Pickup Location
              </Text>
              <Text
                font={FONT_WEIGHTS.semiBold}
                size={FONTS_SIZES.S}
                numberOfLines={1}>
                {pickup?.name || "Select pickup location"}
              </Text>
            </View>
          </View>
        </TouchableComponent>

        {/* Divider with Swap Button */}
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.alignItemsCenter,
            globalStyles.my1,
          ]}>
          <View
            style={[
              globalStyles.flex,
              {height: 1, backgroundColor: colors.gray200},
            ]}
          />
          {pickup && destination && (
            <TouchableComponent bounce onPress={onSwapPress}>
              <View
                style={[
                  globalStyles.flexCenter,
                  globalStyles.mx1,
                  {
                    width: getSize(32),
                    height: getSize(32),
                    borderRadius: getSize(16),
                    backgroundColor: colors.gray100,
                  },
                ]}>
                <MainIcon
                  type="MaterialCommunityIcons"
                  name="swap-vertical"
                  size={getSize(18)}
                  color={colors.gray600}
                />
              </View>
            </TouchableComponent>
          )}
          <View
            style={[
              globalStyles.flex,
              {height: 1, backgroundColor: colors.gray200},
            ]}
          />
        </View>

        {/* Destination Location */}
        <TouchableComponent bounce onPress={onDestinationPress}>
          <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
            <View
              style={[
                globalStyles.flexCenter,
                {
                  width: getSize(32),
                  height: getSize(32),
                  borderRadius: getSize(16),
                  backgroundColor: colors.success + "20",
                },
              ]}>
              <MainIcon
                type="MaterialIcons"
                name="place"
                size={getSize(18)}
                color={colors.success}
              />
            </View>
            <View style={[globalStyles.flex, globalStyles.ml1]}>
              <Text
                font={FONT_WEIGHTS.medium}
                size={FONTS_SIZES.XS}
                color="gray600">
                Destination
              </Text>
              <Text
                font={FONT_WEIGHTS.semiBold}
                size={FONTS_SIZES.S}
                numberOfLines={1}>
                {destination?.name || "Where to?"}
              </Text>
            </View>
          </View>
        </TouchableComponent>
      </View>
    </View>
  );
};

export default PickupDestinationBar;
