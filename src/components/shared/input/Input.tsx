import React from "react";
import {View, TextInput, TextInputProps} from "react-native";
import Text from "components/shared/text/Text";
import {FONT_WEIGHTS, FONTS_SIZES} from "constants/scaling";
import {globalStyles} from "styles/globalStyles";
import {colors} from "theme/themes";
import {appStyles} from "styles/appStyles";
import MainIcon from "components/shared/icons/icon";
import TouchableComponent from "components/shared/touchable/Touchable";

interface InputProps extends TextInputProps {
  label: string;
  iconType?: "MaterialIcons" | "MaterialCommunityIcons" | "Ionicons" | "Feather";
  iconName: string;
  error?: string;
  rightIcon?: {
    name: string;
    onPress: () => void;
  };
}

const Input: React.FC<InputProps> = ({
  label,
  iconType = "MaterialIcons",
  iconName,
  error,
  rightIcon,
  ...textInputProps
}) => {
  return (
    <View style={[globalStyles.mb2]}>
      <Text
        font={FONT_WEIGHTS.medium}
        size={FONTS_SIZES.S}
        lineHeight={20}
        color="text"
        style={[globalStyles.mb05]}>
        {label}
      </Text>
      <View
        style={[
          appStyles.inputContainer,
          globalStyles.flexRow,
          globalStyles.alignItemsCenter,
          globalStyles.px2,
          error && {borderColor: colors.error},
        ]}>
        <MainIcon
          type={iconType}
          name={iconName}
          size={20}
          color={colors.gray500}
        />
        <TextInput
          placeholderTextColor={colors.gray500}
          style={[
            globalStyles.flex,
            globalStyles.ml1,
            appStyles.input,
            {color: colors.text},
          ]}
          {...textInputProps}
        />
        {rightIcon && (
          <TouchableComponent onPress={rightIcon.onPress} bounce>
            <MainIcon
              type="Ionicons"
              name={rightIcon.name}
              size={20}
              color={colors.gray500}
            />
          </TouchableComponent>
        )}
      </View>
      {error && (
        <Text
          font={FONT_WEIGHTS.regular}
          size={FONTS_SIZES.XS}
          color="error"
          style={[globalStyles.mt05]}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;