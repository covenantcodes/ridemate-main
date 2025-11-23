import React, {useState, useEffect} from "react";
import {View, Alert} from "react-native";
import * as Location from "expo-location";
import Layout from "components/shared/view/Layout";
import {globalStyles} from "styles/globalStyles";
import MapView from "./components/MapView";
import FloatingActionButton from "./components/FloatingActionButton";
import RideOptionsSheet from "./components/RideOptionsSheet";
import LocationSearchModal from "./components/LocationSearchModal";
import MapMarker from "./components/MapMarker";
import PickupDestinationBar from "./components/PickupDestinationBar";
import CarIcon from "components/shared/icons/appIcons/CarIcon";
import SoloIcon from "components/shared/icons/appIcons/SoloIcon";
import PairIcon from "components/shared/icons/appIcons/PairIcon";
import GroupIcon from "components/shared/icons/appIcons/GroupIcon";
import {useAppNavigation} from "hooks/useAppNavigation";
import {VEHICLE_TYPE_SELECTION} from "navigation/navigation.constants";

const RIDE_OPTIONS = [
  {
    id: "1",
    name: "RideMate Solo",
    description: "Get a solo drop ride",
    Icon: SoloIcon,
  },
  {
    id: "2",
    name: "RideMate PalShare",
    description: "Share with your friends going to the same destination",
    Icon: PairIcon,
  },
  {
    id: "3",
    name: "RideMate Share",
    description: "Take a shared ride with others going your way",
    Icon: GroupIcon,
  },
];

type LocationType = {
  latitude: number;
  longitude: number;
  address: string;
  name: string;
};

const GOOGLE_MAPS_API_KEY = "AIzaSyBe-E5Chhe9sjZodUcWHvlIjTLzArGG_T0";

const Home = () => {
  const {navigation} = useAppNavigation();
  const [showRideOptions, setShowRideOptions] = useState(false);
  const [showLocationSearch, setShowLocationSearch] = useState(false);
  const [searchType, setSearchType] = useState<"pickup" | "destination">(
    "destination",
  );
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [pickup, setPickup] = useState<LocationType | null>(null);
  const [destination, setDestination] = useState<LocationType | null>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<
    {latitude: number; longitude: number}[]
  >([]);

  useEffect(() => {
    getUserLocation();
  }, []);

  // Calculate route when both pickup and destination are set
  useEffect(() => {
    if (pickup && destination) {
      getDirections(pickup, destination);
    } else {
      setRouteCoordinates([]);
    }
  }, [pickup, destination]);

  const getUserLocation = async () => {
    try {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Location permission is required to show the map",
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setCurrentLocation(coords);

      const address = await Location.reverseGeocodeAsync(coords);
      if (address[0]) {
        setPickup({
          ...coords,
          address: `${address[0].street}, ${address[0].city}`,
          name: address[0].name || "Current Location",
        });
      }
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  const getDirections = async (origin: LocationType, dest: LocationType) => {
    try {
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${dest.latitude},${dest.longitude}&key=${GOOGLE_MAPS_API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.routes.length > 0) {
        const points = decodePolyline(data.routes[0].overview_polyline.points);
        setRouteCoordinates(points);
      }
    } catch (error) {
      console.error("Error getting directions:", error);
      // Fallback to straight line if API fails
      setRouteCoordinates([
        {latitude: origin.latitude, longitude: origin.longitude},
        {latitude: dest.latitude, longitude: dest.longitude},
      ]);
    }
  };

  // Decode Google's encoded polyline
  const decodePolyline = (encoded: string) => {
    const points: {latitude: number; longitude: number}[] = [];
    let index = 0,
      len = encoded.length;
    let lat = 0,
      lng = 0;

    while (index < len) {
      let b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({
        latitude: lat / 1e5,
        longitude: lng / 1e5,
      });
    }

    return points;
  };

  const handlePickupPress = () => {
    setSearchType("pickup");
    setShowLocationSearch(true);
  };

  const handleDestinationPress = () => {
    setSearchType("destination");
    setShowLocationSearch(true);
  };

  const handleFABPress = () => {
    if (pickup && destination) {
      setShowRideOptions(!showRideOptions);
    } else if (!pickup) {
      Alert.alert("Select Pickup", "Please select a pickup location first");
      handlePickupPress();
    } else {
      Alert.alert("Select Destination", "Please select a destination");
      handleDestinationPress();
    }
  };

  const handleSelectRideOption = (option: any) => {
    console.log("Selected ride option:", option);
    navigation.navigate(VEHICLE_TYPE_SELECTION, {
      rideOption: option,
      pickup: pickup,
      destination: destination,
    });

    setShowRideOptions(false);
  };

  const handleSelectLocation = (selectedLocation: LocationType) => {
    if (searchType === "pickup") {
      setPickup(selectedLocation);

      if (!destination) {
        setTimeout(() => {
          setSearchType("destination");
          setShowLocationSearch(true);
        }, 500);
      }
    } else {
      setDestination(selectedLocation);
      setShowRideOptions(true);
    }
  };

  const handleSwapLocations = () => {
    const temp = pickup;
    setPickup(destination);
    setDestination(temp);
  };

  return (
    <Layout noPadding hideBg>
      <View style={[globalStyles.flex]}>
        <MapView
          latitude={currentLocation?.latitude}
          longitude={currentLocation?.longitude}
          routeCoordinates={routeCoordinates}>
          {pickup && (
            <MapMarker
              latitude={pickup.latitude}
              longitude={pickup.longitude}
              title={pickup.name}
              description={pickup.address}
              type="pickup"
            />
          )}
          {destination && (
            <MapMarker
              latitude={destination.latitude}
              longitude={destination.longitude}
              title={destination.name}
              description={destination.address}
              type="destination"
            />
          )}
        </MapView>

        <PickupDestinationBar
          pickup={pickup}
          destination={destination}
          onPickupPress={handlePickupPress}
          onDestinationPress={handleDestinationPress}
          onSwapPress={handleSwapLocations}
        />

        <FloatingActionButton
          onPress={handleFABPress}
          customIcon={showRideOptions ? undefined : <CarIcon />}
          iconType="Ionicons"
          iconName="close"
          bottom={showRideOptions ? 320 : 40}
        />

        {showRideOptions && pickup && destination && (
          <RideOptionsSheet
            options={RIDE_OPTIONS}
            onSelectOption={handleSelectRideOption}
          />
        )}

        <LocationSearchModal
          visible={showLocationSearch}
          onClose={() => setShowLocationSearch(false)}
          onSelectLocation={handleSelectLocation}
          placeholder={
            searchType === "pickup"
              ? "Enter pickup location"
              : "Enter destination"
          }
          searchType={searchType}
        />
      </View>
    </Layout>
  );
};

export default Home;
