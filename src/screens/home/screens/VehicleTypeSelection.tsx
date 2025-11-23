import React, {useState} from "react";
import {View, ScrollView} from "react-native";
import Layout from "components/shared/view/Layout";
import Text from "components/shared/text/Text";
import TouchableComponent from "components/shared/touchable/Touchable";
import Button from "components/shared/button/Button";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";

import {useRoute} from "@react-navigation/native";
import CarsIcon from "components/shared/icons/appIcons/CarsIcon";
import KekeIcon from "components/shared/icons/appIcons/KekeIcon";
import BusIcon from "components/shared/icons/appIcons/BusIcon";
import {FINDING_ROUTE} from "navigation/navigation.constants";
import {useAppNavigation} from "hooks/useAppNavigation";
import {ScreenNavigationRouteProps} from "navigation/navigation.types";

interface VehicleType {
  id: string;
  name: string;
  description: string;
  Icon: React.ComponentType<{width?: number; height?: number; color?: string}>;
  estimatedPrice?: string;
}

const VehicleTypeSelection = () => {
  const route = useRoute<ScreenNavigationRouteProps<"vehicleTypeSelection">>();
  const {navigation} = useAppNavigation();
  const {rideOption, pickup, destination} = route.params;

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(
    null,
  );

  const getAvailableVehicles = (): VehicleType[] => {
    const baseVehicles: VehicleType[] = [
      {
        id: "car",
        name: "Car",
        description: "Comfortable and spacious",
        Icon: CarsIcon,
        estimatedPrice: "₦1,500 - ₦2,500",
      },
      {
        id: "keke",
        name: "Keke",
        description: "Fast and affordable",
        Icon: KekeIcon,
        estimatedPrice: "₦800 - ₦1,200",
      },
    ];

    if (rideOption?.id === "3") {
      return [
        ...baseVehicles,
        {
          id: "bus",
          name: "Bus",
          description: "Spacious for groups",
          Icon: BusIcon,
          estimatedPrice: "₦600 - ₦1,000",
        },
      ];
    }

    return baseVehicles;
  };

  const availableVehicles = getAvailableVehicles();

  const handleContinue = () => {
    if (!selectedVehicle) return;

    navigation.navigate(FINDING_ROUTE, {
      rideOption,
      pickup,
      destination,
      vehicleType: selectedVehicle,
    });
  };

  return (
    <Layout>
      {/* Header */}
      <View
        style={[
          globalStyles.flexRow,
          globalStyles.alignItemsCenter,
          globalStyles.mb3,
        ]}>
        <TouchableComponent bounce onPress={() => navigation.goBack()}>
          <MainIcon
            type="Ionicons"
            name="arrow-back"
            size={getSize(24)}
            color={colors.text}
          />
        </TouchableComponent>
        <View style={[globalStyles.ml2, globalStyles.flex]}>
          <Text font={FONT_WEIGHTS.bold} size={FONTS_SIZES.XL}>
            Choose Vehicle Type
          </Text>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            color="gray600">
            {rideOption?.name}
          </Text>
        </View>
      </View>

      <View
        style={[
          globalStyles.px2,
          globalStyles.py2,
          globalStyles.mb2,
          {
            backgroundColor: colors.primary4,
            borderRadius: getSize(12),
            borderWidth: 1,
            borderColor: colors.gray200,
          },
        ]}>
        <View style={[globalStyles.flexRow, globalStyles.mb1]}>
          <View
            style={[
              {
                width: getSize(8),
                height: getSize(8),
                borderRadius: getSize(4),
                backgroundColor: colors.primary,
                marginTop: getSize(6),
                marginRight: getSize(8),
              },
            ]}
          />
          <View style={[globalStyles.flex]}>
            <Text
              font={FONT_WEIGHTS.medium}
              size={FONTS_SIZES.XS}
              color="gray600">
              Pickup
            </Text>
            <Text
              font={FONT_WEIGHTS.semiBold}
              size={FONTS_SIZES.S}
              numberOfLines={1}>
              {pickup?.name || "Not set"}
            </Text>
          </View>
        </View>

        <View
          style={[
            {
              width: 1,
              height: getSize(20),
              backgroundColor: colors.gray300,
              marginLeft: getSize(4),
              marginVertical: getSize(4),
            },
          ]}
        />

        <View style={[globalStyles.flexRow]}>
          <View
            style={[
              {
                width: getSize(8),
                height: getSize(8),
                borderRadius: getSize(4),
                backgroundColor: colors.success,
                marginTop: getSize(6),
                marginRight: getSize(8),
              },
            ]}
          />
          <View style={[globalStyles.flex]}>
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
              {destination?.name || "Not set"}
            </Text>
          </View>
        </View>
      </View>

      {/* Vehicle Options */}
      <Text
        font={FONT_WEIGHTS.semiBold}
        size={FONTS_SIZES.S}
        style={[globalStyles.mb2]}>
        Select a vehicle
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {availableVehicles.map(vehicle => (
          <TouchableComponent
            key={vehicle.id}
            bounce
            onPress={() => setSelectedVehicle(vehicle)}
            style={[
              globalStyles.flexRow,
              globalStyles.alignItemsCenter,
              globalStyles.justifyBetween,
              globalStyles.px2,
              globalStyles.py2,
              globalStyles.mb2,
              {
                borderRadius: getSize(12),
                backgroundColor:
                  selectedVehicle?.id === vehicle.id
                    ? colors.primary + "20"
                    : colors.primary4,
                borderWidth: 2,
                borderColor:
                  selectedVehicle?.id === vehicle.id
                    ? colors.primary
                    : colors.gray200,
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
                    width: getSize(50),
                    height: getSize(50),
                    borderRadius: getSize(25),
                    backgroundColor: colors.white,
                  },
                ]}>
                <vehicle.Icon
                  width={32}
                  height={32}
                  color={
                    selectedVehicle?.id === vehicle.id
                      ? colors.primary
                      : colors.gray600
                  }
                />
              </View>
              <View style={[globalStyles.ml2, globalStyles.flex]}>
                <Text font={FONT_WEIGHTS.semiBold} size={FONTS_SIZES.S}>
                  {vehicle.name}
                </Text>
                <Text
                  font={FONT_WEIGHTS.regular}
                  size={FONTS_SIZES.XS}
                  color="gray600"
                  numberOfLines={1}>
                  {vehicle.description}
                </Text>
              </View>
            </View>

            <View style={[globalStyles.alignItemsFlexEnd]}>
              <Text
                font={FONT_WEIGHTS.bold}
                size={FONTS_SIZES.XS}
                style={[globalStyles.textRight]}>
                {vehicle.estimatedPrice}
              </Text>
              {selectedVehicle?.id === vehicle.id && (
                <View
                  style={[
                    globalStyles.flexCenter,
                    {
                      width: getSize(20),
                      height: getSize(20),
                      borderRadius: getSize(10),
                      backgroundColor: colors.primary,
                      marginTop: getSize(4),
                    },
                  ]}>
                  <MainIcon
                    type="Ionicons"
                    name="checkmark"
                    size={getSize(14)}
                    color={colors.white}
                  />
                </View>
              )}
            </View>
          </TouchableComponent>
        ))}
      </ScrollView>

      <View style={[globalStyles.mt2, {marginBottom: 40}]}>
        <Button onPress={handleContinue} disabled={!selectedVehicle}>
          Continue to Book
        </Button>
      </View>
    </Layout>
  );
};

export default VehicleTypeSelection;
