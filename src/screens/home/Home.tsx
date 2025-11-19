import React, {useState, useEffect} from "react";
import {View, Platform, Alert} from "react-native";
import * as Location from "expo-location";
import Layout from "components/shared/view/Layout";
import {globalStyles} from "styles/globalStyles";
import MapView from "./components/MapView";
import SearchBar from "./components/SearchBar";
import LocationButton from "./components/LocationButton";
import FloatingActionButton from "./components/FloatingActionButton";
import RideOptionsSheet from "./components/RideOptionsSheet";

const RIDE_OPTIONS = [
  {
    id: "1",
    name: "RideMate Go",
    description: "Affordable rides",
    icon: "car-side",
    price: "₦2,500",
    time: "5 min",
  },
  {
    id: "2",
    name: "RideMate Comfort",
    description: "More comfortable",
    icon: "car-estate",
    price: "₦3,800",
    time: "8 min",
  },
  {
    id: "3",
    name: "RideMate XL",
    description: "Extra space",
    icon: "car-multiple",
    price: "₦4,500",
    time: "10 min",
  },
  {
    id: "4",
    name: "RideMate Bike",
    description: "Fast and cheap",
    icon: "motorbike",
    price: "₦1,200",
    time: "3 min",
  },
];

const Home = () => {
  const [showRideOptions, setShowRideOptions] = useState(false);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Location permission is required to show the map",
        );
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    })();
  }, []);

  const handleSearchPress = () => {
    console.log("Search pressed");
    setShowRideOptions(true);
  };

  const handleLocationPress = () => {
    console.log("Location pressed - Center to user location");
  };

  const handleFABPress = () => {
    console.log("FAB pressed - Book a ride");
    setShowRideOptions(!showRideOptions);
  };

  const handleSelectRideOption = (option: any) => {
    console.log("Selected ride option:", option);
    // Navigate to booking confirmation screen
  };

  return (
    <Layout noPadding hideBg>
      <View style={[globalStyles.flex]}>
        {/* Map */}
        <MapView
          latitude={location?.latitude}
          longitude={location?.longitude}
        />

        {/* Search Bar */}
        <SearchBar onPress={handleSearchPress} placeholder="Where to?" />

        {/* Location Button */}
        <LocationButton onPress={handleLocationPress} />

        {/* Floating Action Button */}
        <FloatingActionButton
          onPress={handleFABPress}
          iconName={showRideOptions ? "close" : "search"}
          iconType="MaterialIcons"
          bottom={showRideOptions ? 320 : 40}
        />

        {/* Ride Options Bottom Sheet */}
        {showRideOptions && (
          <RideOptionsSheet
            options={RIDE_OPTIONS}
            onSelectOption={handleSelectRideOption}
          />
        )}
      </View>
    </Layout>
  );
};

export default Home;
