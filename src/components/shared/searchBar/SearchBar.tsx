import React, { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { globalStyles } from "styles/globalStyles";
import { colors } from "theme/themes";

import SearchIcon from "../icons/appIcons/SearchIcon";
import MainIcon from "../icons/icon";
import TouchableComponent from "../touchable/Touchable";

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
  iconColor?: keyof typeof colors;
  bgColor?: keyof typeof colors;
  onSearch?: (text: string) => void;
  showBorder?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search products & brands",
  onSearch,
  iconColor = "black",
  bgColor = "background",
  showBorder = true,

  ...restProps
}) => {
  const [value, setValue] = useState("");

  const handleChange = (text: string) => {
    setValue(text);
    if (onSearch) onSearch(text);
  };

  const handleClear = () => {
    setValue("");
    if (onSearch) onSearch("");
  };

  return (
    <View
      style={[
        globalStyles.flexRow,
        globalStyles.alignItemsCenter,
        globalStyles.my1,
        globalStyles.px2,
        globalStyles.py1,
        globalStyles.br40,

        {
          backgroundColor: colors[bgColor],
          ...(showBorder
            ? { borderWidth: 1, borderColor: colors.white }
            : { borderWidth: 0 }),
        },
      ]}
    >
      <SearchIcon width={22} height={22} color={colors[iconColor]} />
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.black60}
        onChangeText={handleChange}
        autoFocus
        style={[
          globalStyles.py1,
          globalStyles.w9,
          globalStyles.ml1,
          globalStyles.alignItemsCenter,
          {
            fontSize: 16,
            fontFamily: "DMSans-Regular",
            color: colors.gray900,
            textAlign: "left",
          },
        ]}
        {...restProps}
      />
      {value.length > 0 && (
        <TouchableComponent
          onPress={handleClear}
          bounce
          style={[
            globalStyles.flexCenter,
            globalStyles.br10,

            {
              marginLeft: -20,
              width: 20,
              height: 20,
              backgroundColor: colors.gray600,
            },
          ]}
        >
          <MainIcon
            type="Ionicons"
            name="close"
            size={18}
            color={colors.white}
          />
        </TouchableComponent>
      )}
    </View>
  );
};

export default SearchBar;
