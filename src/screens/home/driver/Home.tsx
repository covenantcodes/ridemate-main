import React, {useState, useEffect} from "react";
import {View, ScrollView, Switch} from "react-native";
import * as Location from "expo-location";
import Layout from "components/shared/view/Layout";
import Text from "components/shared/text/Text";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import MapView from "../components/MapView";
import {useAppSelector} from "store/hooks";

const DriverHome = () => {
  const {user} = useAppSelector(state => state.login);
  const [isOnline, setIsOnline] = useState(false);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [currentRide, setCurrentRide] = useState<any>(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = async () => {
    try {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);
    console.log("Driver status:", !isOnline ? "Online" : "Offline");
  };

  return (
    <Layout noPadding>
      <View style={[globalStyles.flex]}>
        {/* Map */}
        <MapView
          latitude={location?.latitude}
          longitude={location?.longitude}
        />

        {/* Status Bar */}
        <View
          style={[
            globalStyles.absolute,
            globalStyles.px2,
            globalStyles.py2,
            {
              top: getSize(60),
              left: 0,
              right: 0,
              backgroundColor: isOnline
                ? colors.success + "F0"
                : colors.gray600 + "F0",
              borderRadius: getSize(12),
              marginHorizontal: getSize(16),
            },
          ]}>
          <View
            style={[
              globalStyles.flexRow,
              globalStyles.alignItemsCenter,
              globalStyles.justifyBetween,
            ]}>
            <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
              <View
                style={[
                  {
                    width: getSize(12),
                    height: getSize(12),
                    borderRadius: getSize(6),
                    backgroundColor: isOnline ? colors.white : colors.gray300,
                    marginRight: getSize(8),
                  },
                ]}
              />
              <Text
                font={FONT_WEIGHTS.bold}
                size={FONTS_SIZES.S}
                style={{color: colors.white}}>
                {isOnline ? "You're Online" : "You're Offline"}
              </Text>
            </View>
            <Switch
              value={isOnline}
              onValueChange={toggleOnlineStatus}
              trackColor={{false: colors.gray400, true: colors.white}}
              thumbColor={isOnline ? colors.success : colors.gray200}
            />
          </View>
        </View>

        {/* Stats Card */}
        <View
          style={[
            globalStyles.absolute,
            globalStyles.px2,
            {
              bottom: currentRide ? getSize(220) : getSize(20),
              left: 0,
              right: 0,
            },
          ]}>
          <View
            style={[
              globalStyles.px2,
              globalStyles.py2,
              {
                backgroundColor: colors.white,
                borderRadius: getSize(16),
                shadowColor: "#000",
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 5,
              },
            ]}>
            <Text
              font={FONT_WEIGHTS.bold}
              size={FONTS_SIZES.S}
              style={[globalStyles.mb2]}>
              Today's Summary
            </Text>
            <View
              style={[
                globalStyles.flexRow,
                globalStyles.justifyBetween,
                {gap: getSize(12)},
              ]}>
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
                  size={getSize(20)}
                  color={colors.primary}
                />
                <Text
                  font={FONT_WEIGHTS.bold}
                  size={FONTS_SIZES.S}
                  style={[globalStyles.mt1]}>
                  {user?.totalTrips || 0}
                </Text>
                <Text
                  font={FONT_WEIGHTS.medium}
                  size={FONTS_SIZES.XS}
                  color="gray600">
                  Trips
                </Text>
              </View>

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
                  size={getSize(20)}
                  color={colors.success}
                />
                <Text
                  font={FONT_WEIGHTS.bold}
                  size={FONTS_SIZES.S}
                  style={[globalStyles.mt1]}>
                  ₦12,500
                </Text>
                <Text
                  font={FONT_WEIGHTS.medium}
                  size={FONTS_SIZES.XS}
                  color="gray600">
                  Earnings
                </Text>
              </View>

              <View
                style={[
                  globalStyles.flex,
                  globalStyles.px2,
                  globalStyles.py1,
                  {
                    backgroundColor: colors.warning + "20",
                    borderRadius: getSize(12),
                  },
                ]}>
                <View
                  style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
                  <MainIcon
                    type="Ionicons"
                    name="star"
                    size={getSize(20)}
                    color={colors.warning}
                  />
                </View>
                <Text
                  font={FONT_WEIGHTS.bold}
                  size={FONTS_SIZES.S}
                  style={[globalStyles.mt1]}>
                  {user?.rating || 4.8}
                </Text>
                <Text
                  font={FONT_WEIGHTS.medium}
                  size={FONTS_SIZES.XS}
                  color="gray600">
                  Rating
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Current Ride Card (when there's an active ride) */}
        {currentRide && (
          <View
            style={[
              globalStyles.absolute,
              globalStyles.px2,
              {
                bottom: getSize(20),
                left: 0,
                right: 0,
              },
            ]}>
            <View
              style={[
                globalStyles.px2,
                globalStyles.py2,
                {
                  backgroundColor: colors.white,
                  borderRadius: getSize(16),
                  shadowColor: "#000",
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 5,
                },
              ]}>
              <Text
                font={FONT_WEIGHTS.bold}
                size={FONTS_SIZES.S}
                style={[globalStyles.mb2]}>
                Current Ride
              </Text>
              {/* Ride details here */}
            </View>
          </View>
        )}
      </View>
    </Layout>
  );
};

export default DriverHome;
