import React from "react";
import {View} from "react-native";
import TouchableComponent from "components/shared/touchable/Touchable";
import MainIcon from "components/shared/icons/icon";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {getSize} from "utils/unitScaling";

interface SearchBarProps {
  onPress: () => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onPress,
  placeholder = "Where to?",
}) => {
  return (
    <View
      style={[
        globalStyles.absolute,
        {top: getSize(20), left: getSize(20), right: getSize(80)},
      ]}>
      <TouchableComponent
        bounce
        onPress={onPress}
        style={[
          globalStyles.flexRow,
          globalStyles.alignItemsCenter,
          globalStyles.px2,
          //   appStyles.shadow,
          {
            height: getSize(50),
            borderColor: colors.white,
            borderWidth: 2,
            backgroundColor: colors.background,
            borderRadius: getSize(25),
          },
        ]}>
        <MainIcon
          type="Ionicons"
          name="search"
          size={getSize(20)}
          color={colors.gray500}
        />
        <Text
          font={FONT_WEIGHTS.regular}
          size={FONTS_SIZES.S}
          color="gray600"
          style={[globalStyles.ml1]}>
          {placeholder}
        </Text>
      </TouchableComponent>
    </View>
  );
};

export default SearchBar;
