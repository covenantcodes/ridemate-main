import React, {useState} from "react";
import {View, ScrollView, FlatList} from "react-native";
import Layout from "components/shared/view/Layout";
import Text from "components/shared/text/Text";
import Button from "components/shared/button/Button";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {appStyles} from "styles/appStyles";
import {LinearGradient} from "expo-linear-gradient";
import TransactionCard from "./components/TransactionCard";

interface Transaction {
  id: string;
  type: "credit" | "debit";
  amount: number;
  description: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    type: "debit",
    amount: 2500,
    description: "RideMate Solo - Jaja to Moremi",
    date: "2025-11-24 10:30 AM",
    status: "completed",
  },
  {
    id: "2",
    type: "credit",
    amount: 5000,
    description: "Wallet Funding",
    date: "2025-11-23 03:15 PM",
    status: "completed",
  },
  {
    id: "3",
    type: "debit",
    amount: 1200,
    description: "RideMate Share - Moremi to Fajuyi",
    date: "2025-11-23 09:45 AM",
    status: "completed",
  },
  {
    id: "4",
    type: "credit",
    amount: 3000,
    description: "Refund - Cancelled Ride",
    date: "2025-11-22 06:20 PM",
    status: "completed",
  },
];

const Wallet = () => {
  const [balance] = useState(15750.0);
  const [transactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);

  const handleFundWallet = () => {
    console.log("Fund wallet pressed");
    // Navigate to funding screen or show modal
  };

  const handleShareFunds = () => {
    console.log("Share funds pressed");
    // Navigate to share funds screen or show modal
  };

  return (
    <Layout noPadding>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View
          style={[
            globalStyles.px2,
            globalStyles.py2,
            {paddingTop: getSize(10)},
          ]}>
          <Text font={FONT_WEIGHTS.bold} size={FONTS_SIZES.XXL}>
            Wallet
          </Text>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            color="gray600">
            Manage your funds
          </Text>
        </View>

        {/* Wallet Card */}
        <View style={[globalStyles.px2, globalStyles.mb1]}>
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={[
              globalStyles.px2,
              globalStyles.py2,
              appStyles.shadow,
              {
                borderRadius: getSize(20),
                minHeight: getSize(200),
              },
            ]}>
            {/* Card Header */}
            <View
              style={[
                globalStyles.flexRow,
                globalStyles.justifyBetween,
                globalStyles.mb3,
              ]}>
              <View>
                <Text
                  font={FONT_WEIGHTS.medium}
                  size={FONTS_SIZES.S}
                  style={{color: colors.white, opacity: 0.8}}>
                  Available Balance
                </Text>
              </View>
              <MainIcon
                type="MaterialCommunityIcons"
                name="wallet"
                size={getSize(28)}
                color={colors.white}
              />
            </View>

            {/* Balance */}
            <View style={[globalStyles.flexCenter, globalStyles.mb3]}>
              <Text
                font={FONT_WEIGHTS.bold}
                size={FONTS_SIZES.XXXL}
                style={{color: colors.white}}>
                ₦{balance.toLocaleString("en-NG", {minimumFractionDigits: 2})}
              </Text>
            </View>

            {/* Card Number */}
            <View
              style={[
                globalStyles.flexRow,
                globalStyles.justifyBetween,
                globalStyles.alignItemsCenter,
              ]}>
              <Text
                font={FONT_WEIGHTS.medium}
                size={FONTS_SIZES.S}
                style={{color: colors.white, opacity: 0.8}}>
                •••• •••• •••• 5678
              </Text>
              <TouchableComponent bounce>
                <MainIcon
                  type="Ionicons"
                  name="eye-outline"
                  size={getSize(20)}
                  color={colors.white}
                />
              </TouchableComponent>
            </View>
          </LinearGradient>
        </View>

        {/* Action Buttons */}
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.px2,
            globalStyles.mb1,
            {gap: getSize(12)},
          ]}>
          <View style={[globalStyles.flex]}>
            <Button
              onPress={handleFundWallet}
              leftIcon={
                <MainIcon
                  type="MaterialIcons"
                  name="add-circle-outline"
                  size={getSize(20)}
                  color={colors.white}
                />
              }>
              Fund Wallet
            </Button>
          </View>
          <View style={[globalStyles.flex]}>
            <Button
              onPress={handleShareFunds}
              variant="primaryOutline"
              leftIcon={
                <MainIcon
                  type="MaterialCommunityIcons"
                  name="share-variant"
                  size={getSize(20)}
                  color={colors.primary}
                />
              }>
              Share Funds
            </Button>
          </View>
        </View>

        {/* Transaction History */}
        <View style={[globalStyles.px2, globalStyles.mb2]}>
          <View
            style={[
              globalStyles.flexRow,
              globalStyles.justifyBetween,
              globalStyles.alignItemsCenter,
              globalStyles.mb2,
            ]}>
            <Text font={FONT_WEIGHTS.bold} size={FONTS_SIZES.L}>
              Recent Transactions
            </Text>
            <TouchableComponent bounce>
              <Text
                font={FONT_WEIGHTS.semiBold}
                size={FONTS_SIZES.S}
                color="primary">
                See All
              </Text>
            </TouchableComponent>
          </View>

          {/* Transactions List */}
          {transactions.length > 0 ? (
            <FlatList
              data={transactions}
              renderItem={({item}) => <TransactionCard item={item} />}
              keyExtractor={item => item.id}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View
              style={[
                globalStyles.flexCenter,
                globalStyles.py3,
                {
                  backgroundColor: colors.primary4,
                  borderRadius: getSize(12),
                },
              ]}>
              <MainIcon
                type="MaterialCommunityIcons"
                name="history"
                size={getSize(48)}
                color={colors.gray400}
              />
              <Text
                font={FONT_WEIGHTS.medium}
                size={FONTS_SIZES.S}
                color="gray600"
                style={[globalStyles.mt2]}>
                No transactions yet
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Wallet;
