import React from "react";
import {View} from "react-native";
import Text from "components/shared/text/Text";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";

interface Transaction {
  id: string;
  type: "credit" | "debit";
  amount: number;
  description: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

interface TransactionCardProps {
  item: Transaction;
}

const TransactionCard: React.FC<TransactionCardProps> = ({item}) => {
  const getStatusColor = () => {
    switch (item.status) {
      case "completed":
        return colors.success;
      case "pending":
        return colors.warning;
      case "failed":
        return colors.error;
      default:
        return colors.gray600;
    }
  };

  const getStatusBgColor = () => {
    switch (item.status) {
      case "completed":
        return colors.success + "20";
      case "pending":
        return colors.warning + "20";
      case "failed":
        return colors.error + "20";
      default:
        return colors.gray200;
    }
  };

  return (
    <View
      style={[
        globalStyles.flexRow,
        globalStyles.alignItemsCenter,
        globalStyles.justifyBetween,
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
      <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
        {/* Icon */}
        <View
          style={[
            globalStyles.flexCenter,
            {
              width: getSize(40),
              height: getSize(40),
              borderRadius: getSize(20),
              backgroundColor:
                item.type === "credit"
                  ? colors.success + "20"
                  : colors.error + "20",
            },
          ]}>
          <MainIcon
            type="MaterialIcons"
            name={item.type === "credit" ? "arrow-downward" : "arrow-upward"}
            size={getSize(20)}
            color={item.type === "credit" ? colors.success : colors.error}
          />
        </View>

        {/* Transaction Details */}
        <View style={[globalStyles.ml2, {width: "60%"}]}>
          <Text
            font={FONT_WEIGHTS.semiBold}
            size={FONTS_SIZES.S}
            numberOfLines={1}>
            {item.description}
          </Text>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.XS}
            color="gray600">
            {item.date}
          </Text>
        </View>
      </View>

      {/* Amount and Status */}
      <View style={[globalStyles.alignItemsFlexEnd]}>
        <Text
          font={FONT_WEIGHTS.bold}
          size={FONTS_SIZES.S}
          color={item.type === "credit" ? "success" : "error"}>
          {item.type === "credit" ? "+" : "-"}₦{item.amount.toLocaleString()}
        </Text>
        <View
          style={[
            globalStyles.px1,
            globalStyles.py05,
            {
              backgroundColor: getStatusBgColor(),
              borderRadius: getSize(6),
              marginTop: getSize(4),
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
    </View>
  );
};

export default TransactionCard;
