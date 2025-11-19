import React from "react";
import { View } from "react-native";
import Text from "components/shared/text/Text";
import { FONT_WEIGHTS, FONTS_SIZES } from "constants/scaling";

const Profile = () => {
  return (
    <View>
      <Text font={FONT_WEIGHTS.medium} size={FONTS_SIZES.S}>
        Profile
      </Text>
    </View>
  );
};

export default Profile;
