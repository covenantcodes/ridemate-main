import React from "react";
import {View} from "react-native";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {appStyles} from "styles/appStyles";

interface LocationButtonProps {
  onPress: () => void;
}

const LocationButton: React.FC<LocationButtonProps> = ({onPress}) => {
  return (
    <View
      style={[globalStyles.absolute, {top: getSize(20), right: getSize(20)}]}>
      <TouchableComponent
        bounce
        onPress={onPress}
        style={[
          globalStyles.flexCenter,
          //   appStyles.shadow,
          {
            width: getSize(50),
            height: getSize(50),
            borderRadius: getSize(25),
            borderColor: colors.white,
            borderWidth: 2,
            backgroundColor: colors.background,
          },
        ]}>
        <MainIcon
          type="MaterialIcons"
          name="my-location"
          size={getSize(22)}
          color={colors.primary}
        />
      </TouchableComponent>
    </View>
  );
};

export default LocationButton;
