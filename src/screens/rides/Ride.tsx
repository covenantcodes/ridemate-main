import React, {useState} from "react";
import {View, ScrollView, FlatList} from "react-native";
import Layout from "components/shared/view/Layout";
import Text from "components/shared/text/Text";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import RideHistoryCard from "./components/RideHistoryCard";

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

const MOCK_RIDE_HISTORY: RideHistory[] = [
  {
    id: "1",
    rideType: "solo",
    vehicleType: "car",
    pickup: "Jaja Hall",
    destination: "Moremi Hall",
    date: "24 Nov 2025",
    time: "10:30 AM",
    amount: 2500,
    status: "completed",
    driverName: "John Doe",
    rating: 4.8,
  },
  {
    id: "2",
    rideType: "share",
    vehicleType: "keke",
    pickup: "Moremi Hall",
    destination: "Fajuyi Hall",
    date: "23 Nov 2025",
    time: "09:45 AM",
    amount: 1200,
    status: "completed",
    driverName: "Jane Smith",
    rating: 5.0,
  },
  {
    id: "3",
    rideType: "palshare",
    vehicleType: "car",
    pickup: "ETF Building",
    destination: "Library",
    date: "22 Nov 2025",
    time: "02:15 PM",
    amount: 1800,
    status: "cancelled",
    driverName: "Mike Johnson",
  },
  {
    id: "4",
    rideType: "share",
    vehicleType: "bus",
    pickup: "Great Ife",
    destination: "Park Inn",
    date: "21 Nov 2025",
    time: "06:20 PM",
    amount: 800,
    status: "completed",
    driverName: "Sarah Williams",
    rating: 4.5,
  },
];

const Rides = () => {
  const [rideHistory] = useState<RideHistory[]>(MOCK_RIDE_HISTORY);
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "completed" | "cancelled" | "ongoing"
  >("all");

  const filteredHistory =
    selectedFilter === "all"
      ? rideHistory
      : rideHistory.filter(ride => ride.status === selectedFilter);

  const handleRidePress = (ride: RideHistory) => {
    console.log("Ride pressed:", ride);
    // Navigate to ride details screen
  };

  const renderFilterButton = (
    filter: "all" | "completed" | "cancelled" | "ongoing",
    label: string,
  ) => (
    <TouchableComponent
      bounce
      onPress={() => setSelectedFilter(filter)}
      style={[
        globalStyles.px2,
        globalStyles.py1,
        {
          backgroundColor:
            selectedFilter === filter ? colors.primary : colors.primary4,
          borderRadius: getSize(20),
          borderWidth: selectedFilter === filter ? 0 : 1,
          borderColor: colors.gray200,
        },
      ]}>
      <Text
        font={FONT_WEIGHTS.semiBold}
        size={FONTS_SIZES.XS}
        color={selectedFilter === filter ? "white" : "gray600"}>
        {label}
      </Text>
    </TouchableComponent>
  );

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
            My Rides
          </Text>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            color="gray600">
            View your completed and ongoing rides
          </Text>
        </View>

        {/* Stats Cards */}
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.px2,
            globalStyles.mb2,
            {gap: getSize(12)},
          ]}>
          {/* Total Rides */}
          <View
            style={[
              globalStyles.flex,
              globalStyles.px2,
              globalStyles.py1,
              {
                backgroundColor: colors.primary + "20",
                borderRadius: getSize(12),
              },
            ]}>
            <MainIcon
              type="MaterialCommunityIcons"
              name="car-multiple"
              size={getSize(24)}
              color={colors.primary}
            />
            <Text
              font={FONT_WEIGHTS.bold}
              size={FONTS_SIZES.XL}
              style={[globalStyles.mt1]}>
              {rideHistory.filter(ride => ride.status === "completed").length}
            </Text>
            <Text
              font={FONT_WEIGHTS.medium}
              size={FONTS_SIZES.XS}
              color="gray600">
              Completed Rides
            </Text>
          </View>

          {/* Total Earned */}
          <View
            style={[
              globalStyles.flex,
              globalStyles.px2,
              globalStyles.py1,
              {
                backgroundColor: colors.success + "20",
                borderRadius: getSize(12),
              },
            ]}>
            <MainIcon
              type="MaterialIcons"
              name="payments"
              size={getSize(24)}
              color={colors.success}
            />
            <Text
              font={FONT_WEIGHTS.bold}
              size={FONTS_SIZES.XL}
              style={[globalStyles.mt1]}>
              ₦
              {rideHistory
                .filter(ride => ride.status === "completed")
                .reduce((sum, ride) => sum + ride.amount, 0)
                .toLocaleString()}
            </Text>
            <Text
              font={FONT_WEIGHTS.medium}
              size={FONTS_SIZES.XS}
              color="gray600">
              Total Earned
            </Text>
          </View>
        </View>

        {/* Filter Tabs */}
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.px2,
            globalStyles.mb2,
            {gap: getSize(8)},
          ]}>
          {renderFilterButton("all", "All")}
          {renderFilterButton("completed", "Completed")}
          {renderFilterButton("cancelled", "Cancelled")}
          {renderFilterButton("ongoing", "Ongoing")}
        </View>

        {/* Ride History List */}
        <View style={[globalStyles.px2, globalStyles.mb2]}>
          <View
            style={[
              globalStyles.flexRow,
              globalStyles.justifyBetween,
              globalStyles.alignItemsCenter,
              globalStyles.mb2,
            ]}>
            <Text font={FONT_WEIGHTS.bold} size={FONTS_SIZES.L}>
              {selectedFilter === "all"
                ? "All Rides"
                : `${selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)} Rides`}
            </Text>
            <TouchableComponent bounce>
              <MainIcon
                type="MaterialIcons"
                name="filter-list"
                size={getSize(24)}
                color={colors.gray600}
              />
            </TouchableComponent>
          </View>

          {/* Rides List */}
          {filteredHistory.length > 0 ? (
            <FlatList
              data={filteredHistory}
              renderItem={({item}) => (
                <RideHistoryCard
                  item={item}
                  onPress={() => handleRidePress(item)}
                />
              )}
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
                name="car-off"
                size={getSize(48)}
                color={colors.gray400}
              />
              <Text
                font={FONT_WEIGHTS.medium}
                size={FONTS_SIZES.S}
                color="gray600"
                style={[globalStyles.mt2]}>
                No {selectedFilter !== "all" ? selectedFilter : ""} rides yet
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Rides;
