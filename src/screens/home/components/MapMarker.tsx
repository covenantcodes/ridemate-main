import React from "react";
import {View} from "react-native";
import {Marker} from "react-native-maps";
import MainIcon from "components/shared/icons/icon";
import CarIcon from "components/shared/icons/appIcons/CarIcon";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";

interface MapMarkerProps {
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
  type?: "pickup" | "destination";
}

const MapMarker: React.FC<MapMarkerProps> = ({
  latitude,
  longitude,
  title,
  description,
  type = "destination",
}) => {
  return (
    <Marker
      coordinate={{latitude, longitude}}
      title={title}
      description={description}
      anchor={{x: 0.5, y: 0.5}}>
      {type === "pickup" ? (
        // Car icon for pickup location
        <View
          style={{
            width: getSize(50),
            height: getSize(50),
            borderRadius: getSize(25),
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 3,
            borderColor: colors.white,
            shadowColor: "#000",
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <CarIcon width={28} height={28} color={colors.white} />
        </View>
      ) : (
        // Pin icon for destination
        <View
          style={{
            width: getSize(40),
            height: getSize(40),
            borderRadius: getSize(20),
            backgroundColor: colors.success,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 3,
            borderColor: colors.white,
            shadowColor: "#000",
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <MainIcon
            type="MaterialIcons"
            name="place"
            size={getSize(24)}
            color={colors.white}
          />
        </View>
      )}
    </Marker>
  );
};

export default MapMarker;
