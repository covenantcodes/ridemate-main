import React, {useRef, useEffect} from "react";
import {StyleSheet, View} from "react-native";
import MapViewComponent, {
  PROVIDER_GOOGLE,
  Polyline,
  Region,
} from "react-native-maps";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";

interface MapViewProps {
  latitude?: number;
  longitude?: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
  children?: React.ReactNode;
  routeCoordinates?: {latitude: number; longitude: number}[];
  onRegionChange?: (region: Region) => void;
}

const MapView: React.FC<MapViewProps> = ({
  latitude = 7.4419,
  longitude = 3.9003,
  latitudeDelta = 0.015,
  longitudeDelta = 0.015,
  children,
  routeCoordinates = [],
  onRegionChange,
}) => {
  const mapRef = useRef<MapViewComponent>(null);

  useEffect(() => {
    if (routeCoordinates.length >= 2 && mapRef.current) {
      mapRef.current.fitToCoordinates(routeCoordinates, {
        edgePadding: {top: 100, right: 50, bottom: 300, left: 50},
        animated: true,
      });
    } else if (latitude && longitude && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta,
        },
        1000,
      );
    }
  }, [routeCoordinates, latitude, longitude]);

  return (
    <View style={[globalStyles.flex]}>
      <MapViewComponent
        ref={mapRef}
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
        onRegionChangeComplete={onRegionChange}>
        {children}

        {routeCoordinates.length >= 2 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor={colors.primary}
            strokeWidth={4}
            lineDashPattern={[0]}
          />
        )}
      </MapViewComponent>
    </View>
  );
};

export default MapView;
