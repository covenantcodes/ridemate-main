import {DEFAULT_IMAGE_URI} from "constants/constants";
import React from "react";
import {Image, StyleSheet, View} from "react-native";
import Config from "react-native-config";
import {useAppSelector} from "store/hooks";
import {appStyles} from "styles/appStyles";
import {colors} from "theme/themes";

const BottomTabProfileImage = () => {
  const {user} = useAppSelector(state => state.login);
  return (
    <View style={[styles.container, appStyles.shadow]}>
      <Image
        style={styles.image}
        source={{
          uri: user?.appAvatar
            ? `${Config.API_BASE_URL}/images/${user.appAvatar}`
            : DEFAULT_IMAGE_URI,
        }}
      />
    </View>
  );
};

export default BottomTabProfileImage;

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    width: 24,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
});
