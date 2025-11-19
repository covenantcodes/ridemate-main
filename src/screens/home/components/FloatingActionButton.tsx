import React from "react";
import {View} from "react-native";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";
import {appStyles} from "styles/appStyles";

interface FloatingActionButtonProps {
  onPress: () => void;
  iconType?: "MaterialIcons" | "MaterialCommunityIcons" | "Ionicons" | "Feather";
  iconName: string;
  bottom?: number;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onPress,
  iconType = "MaterialIcons",
  iconName = "search",
  bottom = 40,
}) => {
  return (
    <View
      style={[
        globalStyles.absolute,
        globalStyles.alignSelfCenter,
        {bottom},
      ]}>
      <TouchableComponent
        bounce
        onPress={onPress}
        style={[
          globalStyles.flexCenter,
          appStyles.shadow,
          {
            width: getSize(60),
            height: getSize(60),
            borderRadius: getSize(30),
            backgroundColor: colors.primary,
          },
        ]}>
        <MainIcon
          type={iconType}
          name={iconName}
          size={getSize(28)}
          color={colors.white}
        />
      </TouchableComponent>
    </View>
  );
};

export default FloatingActionButton;