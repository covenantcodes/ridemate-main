import React, {useRef, useEffect} from "react";
import {View, Modal, TouchableWithoutFeedback, Keyboard} from "react-native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import Text from "components/shared/text/Text";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";

interface LocationSearchModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectLocation: (location: {
    latitude: number;
    longitude: number;
    address: string;
    name: string;
  }) => void;
  placeholder?: string;
  searchType?: "pickup" | "destination";
}

const GOOGLE_PLACES_API_KEY = "AIzaSyBe-E5Chhe9sjZodUcWHvlIjTLzArGG_T0";

const LocationSearchModal: React.FC<LocationSearchModalProps> = ({
  visible,
  onClose,
  onSelectLocation,
  placeholder = "Where to?",
  searchType = "destination",
}) => {
  const autocompleteRef = useRef<any>(null);

  useEffect(() => {
    if (visible && autocompleteRef.current) {
      autocompleteRef.current.setAddressText("");
      setTimeout(() => {
        autocompleteRef.current?.focus();
      }, 100);
    }
  }, [visible, searchType]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}>
      <View style={[globalStyles.flex, {backgroundColor: colors.background}]}>
        {/* Header */}
        <View
          style={[
            globalStyles.flexRow,
            globalStyles.alignItemsCenter,
            globalStyles.justifyBetween,
            globalStyles.px2,
            globalStyles.py2,
            {
              paddingTop: getSize(60),
              backgroundColor: colors.white,
              borderBottomWidth: 1,
              borderBottomColor: colors.gray200,
            },
          ]}>
          <TouchableComponent bounce onPress={onClose}>
            <MainIcon
              type="Ionicons"
              name="arrow-back"
              size={getSize(24)}
              color={colors.text}
            />
          </TouchableComponent>
          <Text font={FONT_WEIGHTS.semiBold} size={FONTS_SIZES.L}>
            {searchType === "pickup"
              ? "Choose Pickup Location"
              : "Choose Destination"}
          </Text>
          <View style={{width: getSize(24)}} />
        </View>

        <View style={[globalStyles.px2, globalStyles.py2]}>
          <GooglePlacesAutocomplete
            ref={autocompleteRef}
            placeholder={placeholder}
            minLength={2}
            fetchDetails={true}
            onPress={(data, details = null) => {
              if (details && details.geometry && details.geometry.location) {
                onSelectLocation({
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  address: data.description,
                  name:
                    data.structured_formatting?.main_text || data.description,
                });
                onClose();
              }
            }}
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: "en",
              components: "country:ng",
              location: "7.3775,3.9470",
              radius: 15000,
              strictbounds: true,
            }}
            textInputProps={{
              autoFocus: true,
              placeholderTextColor: colors.gray500,
              autoCorrect: false,
              autoCapitalize: "none",
            }}
            styles={{
              container: {
                flex: 0,
              },
              textInputContainer: {
                backgroundColor: colors.white,
                borderRadius: getSize(8),
                borderWidth: 1,
                borderColor: colors.gray300,
              },
              textInput: {
                height: getSize(50),
                backgroundColor: colors.gray200,
                fontSize: getSize(16),
                borderRadius: getSize(8),
                color: colors.black100,
                paddingHorizontal: getSize(12),
                fontFamily: "DMSans-Regular",
              },
              listView: {
                position: "absolute",
                top: getSize(55),
                left: 0,
                right: 0,
                backgroundColor: colors.white,
                borderRadius: getSize(8),
                borderWidth: 1,
                borderColor: colors.gray200,
                zIndex: 1000,
                elevation: 5,
              },
              row: {
                backgroundColor: colors.white,
                padding: getSize(13),
                minHeight: getSize(50),
              },
              separator: {
                height: 1,
                backgroundColor: colors.gray200,
              },
              description: {
                fontFamily: "DMSans-Regular",
                fontSize: getSize(14),
                color: colors.text,
              },
              loader: {
                flexDirection: "row",
                justifyContent: "flex-end",
                height: getSize(20),
              },
            }}
            enablePoweredByContainer={false}
            debounce={300}
            keyboardShouldPersistTaps="handled"
            listViewDisplayed="auto"
            filterReverseGeocodingByTypes={[
              "locality",
              "administrative_area_level_3",
            ]}
            predefinedPlaces={[]}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LocationSearchModal;
