import React from "react";
import {StyleSheet, View} from "react-native";
import MapViewComponent, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {globalStyles} from "styles/globalStyles";

interface MapViewProps {
  latitude?: number;
  longitude?: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
}

const MapView: React.FC<MapViewProps> = ({
  latitude = 7.4419,
  longitude = 3.9003,
  latitudeDelta = 0.015,
  longitudeDelta = 0.015,
}) => {
  return (
    <View style={[globalStyles.flex]}>
      <MapViewComponent
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        }}
        showsUserLocation
        showsMyLocationButton={false}
        showsCompass={false}
        showsBuildings
        showsTraffic={false}
        loadingEnabled
        mapType="standard"
      />
    </View>
  );
};

export default MapView;
