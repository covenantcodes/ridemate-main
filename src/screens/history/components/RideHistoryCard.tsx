import React from "react";
import {View} from "react-native";
import Text from "components/shared/text/Text";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import TouchableComponent from "components/shared/touchable/Touchable";

interface RideHistory {
  id: string;
  rideType: "solo" | "palshare" | "share";
  vehicleType: "car" | "keke" | "bus";
  pickup: string;
  destination: string;
  date: string;
  time: string;
  amount: number;
  status: "completed" | "cancelled" | "ongoing";
  driverName?: string;
  rating?: number;
}

interface RideHistoryCardProps {
  item: RideHistory;
  onPress?: () => void;
}

const RideHistoryCard: React.FC<RideHistoryCardProps> = ({item, onPress}) => {
  const getRideTypeLabel = () => {
    switch (item.rideType) {
      case "solo":
        return "RideMate Solo";
      case "palshare":
        return "RideMate PalShare";
      case "share":
        return "RideMate Share";
      default:
        return "RideMate";
    }
  };

  const getVehicleIcon = () => {
    switch (item.vehicleType) {
      case "car":
        return "car-sport";
      case "keke":
        return "car";
      case "bus":
        return "bus";
      default:
        return "car";
    }
  };

  const getStatusColor = () => {
    switch (item.status) {
      case "completed":
        return colors.success;
      case "cancelled":
        return colors.error;
      case "ongoing":
        return colors.warning;
      default:
        return colors.gray600;
    }
  };

  const getStatusBgColor = () => {
    switch (item.status) {
      case "completed":
        return colors.success + "20";
      case "cancelled":
        return colors.error + "20";
      case "ongoing":
        return colors.warning + "20";
      default:
        return colors.gray200;
    }
  };

  return (
    <TouchableComponent
      bounce
      onPress={onPress}
      style={[
        globalStyles.px2,
        globalStyles.py2,
        globalStyles.mb2,
        {
          backgroundColor: colors.white,
          borderRadius: getSize(12),
          borderWidth: 1,
          borderColor: colors.gray200,
        },
      ]}>
      {/* Header */}
      <View
        style={[
          globalStyles.flexRow,
          globalStyles.justifyBetween,
          globalStyles.alignItemsCenter,
          globalStyles.mb2,
        ]}>
        <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
          <View
            style={[
              globalStyles.flexCenter,
              {
                width: getSize(40),
                height: getSize(40),
                borderRadius: getSize(20),
                backgroundColor: colors.primary + "20",
              },
            ]}>
            <MainIcon
              type="Ionicons"
              name={getVehicleIcon()}
              size={getSize(20)}
              color={colors.primary}
            />
          </View>
          <View style={[globalStyles.ml2]}>
            <Text font={FONT_WEIGHTS.semiBold} size={FONTS_SIZES.S}>
              {getRideTypeLabel()}
            </Text>
            <Text
              font={FONT_WEIGHTS.regular}
              size={FONTS_SIZES.XS}
              color="gray600">
              {item.vehicleType.charAt(0).toUpperCase() +
                item.vehicleType.slice(1)}
            </Text>
          </View>
        </View>
        <View
          style={[
            globalStyles.px1,
            globalStyles.py05,
            {
              backgroundColor: getStatusBgColor(),
              borderRadius: getSize(6),
            },
          ]}>
          <Text
            font={FONT_WEIGHTS.medium}
            size={FONTS_SIZES.XXS}
            style={{color: getStatusColor()}}>
            {item.status}
          </Text>
        </View>
      </View>

      {/* Route */}
      <View style={[globalStyles.mb2]}>
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
              {item.pickup}
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
              {item.destination}
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View
        style={[
          globalStyles.flexRow,
          globalStyles.justifyBetween,
          globalStyles.alignItemsCenter,
          {
            paddingTop: getSize(12),
            borderTopWidth: 1,
            borderTopColor: colors.gray200,
          },
        ]}>
        <View>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.XS}
            color="gray600">
            {item.date} • {item.time}
          </Text>
          {item.driverName && (
            <Text
              font={FONT_WEIGHTS.medium}
              size={FONTS_SIZES.XS}
              color="gray600">
              Driver: {item.driverName}
            </Text>
          )}
        </View>
        <View style={[globalStyles.alignItemsFlexEnd]}>
          <Text font={FONT_WEIGHTS.bold} size={FONTS_SIZES.S} color="primary">
            ₦{item.amount.toLocaleString()}
          </Text>
          {item.rating && (
            <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
              <MainIcon
                type="Ionicons"
                name="star"
                size={getSize(12)}
                color={colors.warning}
              />
              <Text
                font={FONT_WEIGHTS.medium}
                size={FONTS_SIZES.XS}
                style={[globalStyles.ml05]}>
                {item.rating.toFixed(1)}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableComponent>
  );
};

export default RideHistoryCard;
