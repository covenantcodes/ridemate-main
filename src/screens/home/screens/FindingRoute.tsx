import React, {useEffect, useRef} from "react";
import {View, Dimensions} from "react-native";
import LottieView from "lottie-react-native";
import Layout from "components/shared/view/Layout";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {useRoute, useNavigation} from "@react-navigation/native";

const {width, height} = Dimensions.get("window");

const FindingRoute = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const {rideOption, pickup, destination, vehicleType} = route.params || {};
  const lottieRef = useRef<LottieView>(null);

  useEffect(() => {
    // Play animation
    lottieRef.current?.play();

    // Simulate finding route (3-5 seconds)
    const timer = setTimeout(() => {
      // Navigate to next screen (e.g., driver matching or booking confirmation)
      console.log("Route found! Booking details:", {
        rideOption,
        pickup,
        destination,
        vehicleType,
      });

      // TODO: Navigate to next screen
      // navigation.replace("DriverMatching", {
      //   rideOption,
      //   pickup,
      //   destination,
      //   vehicleType,
      // });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout bgColor="white" noPadding>
      <View
        style={[
          globalStyles.flex,
          globalStyles.flexCenter,
          {backgroundColor: colors.white},
        ]}>
        {/* Animation */}
        <View
          style={{
            width: width * 0.8,
            height: height * 0.4,
            marginBottom: getSize(40),
          }}>
          <LottieView
            ref={lottieRef}
            source={require("../../../assets/images/search.json")}
            autoPlay
            loop
            speed={1}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>

        {/* Text Content */}
        <View
          style={[
            globalStyles.alignItemsCenter,
            globalStyles.px3,
            {maxWidth: width * 0.85},
          ]}>
          <Text
            font={FONT_WEIGHTS.bold}
            size={FONTS_SIZES.XXL}
            style={[globalStyles.textCenter, globalStyles.mb2]}>
            Finding Best Route
          </Text>
          <Text
            font={FONT_WEIGHTS.regular}
            size={FONTS_SIZES.S}
            color="gray600"
            lineHeight={24}
            style={[globalStyles.textCenter, globalStyles.mb3]}>
            We're calculating the best route for your journey...
          </Text>

          {/* Route Details */}
          <View
            style={[
              globalStyles.w10,
              globalStyles.px2,
              globalStyles.py2,
              {
                backgroundColor: colors.primary4,
                borderRadius: getSize(12),
                borderWidth: 1,
                borderColor: colors.gray200,
              },
            ]}>
            <View style={[globalStyles.flexRow, globalStyles.mb1]}>
              <Text
                font={FONT_WEIGHTS.medium}
                size={FONTS_SIZES.S}
                color="gray600"
                style={{flex: 1}}>
                Ride Type:
              </Text>
              <Text font={FONT_WEIGHTS.semiBold} size={FONTS_SIZES.S}>
                {rideOption?.name}
              </Text>
            </View>

            <View style={[globalStyles.flexRow, globalStyles.mb1]}>
              <Text
                font={FONT_WEIGHTS.medium}
                size={FONTS_SIZES.S}
                color="gray600"
                style={{flex: 1}}>
                Vehicle:
              </Text>
              <Text font={FONT_WEIGHTS.semiBold} size={FONTS_SIZES.S}>
                {vehicleType?.name}
              </Text>
            </View>

            <View style={[globalStyles.flexRow]}>
              <Text
                font={FONT_WEIGHTS.medium}
                size={FONTS_SIZES.S}
                color="gray600"
                style={{flex: 1}}>
                From:
              </Text>
              <Text
                font={FONT_WEIGHTS.semiBold}
                size={FONTS_SIZES.S}
                numberOfLines={1}
                style={{flex: 1, textAlign: "right"}}>
                {pickup?.name}
              </Text>
            </View>

            <View style={[globalStyles.flexRow, globalStyles.mt1]}>
              <Text
                font={FONT_WEIGHTS.medium}
                size={FONTS_SIZES.S}
                color="gray600"
                style={{flex: 1}}>
                To:
              </Text>
              <Text
                font={FONT_WEIGHTS.semiBold}
                size={FONTS_SIZES.S}
                numberOfLines={1}
                style={{flex: 1, textAlign: "right"}}>
                {destination?.name}
              </Text>
            </View>
          </View>
        </View>

        {/* Loading Dots */}
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.justifyCenter,
            globalStyles.mt3,
            {gap: getSize(8)},
          ]}>
          {[0, 1, 2].map(index => (
            <View
              key={index}
              style={{
                width: getSize(8),
                height: getSize(8),
                borderRadius: getSize(4),
                backgroundColor: colors.primary,
                opacity: 0.6,
              }}
            />
          ))}
        </View>
      </View>
    </Layout>
  );
};

export default FindingRoute;
