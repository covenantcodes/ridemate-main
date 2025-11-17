import React from "react";
import {ActivityIndicator, Dimensions, StyleSheet, View} from "react-native";
import {width} from "styles/globalStyles";
import {colors} from "theme/themes";

const {height} = Dimensions.get("window");

const ScreenLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.peach400} />
    </View>
  );
};

export default ScreenLoader;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height,
    zIndex: 900,
    backgroundColor: "#000",
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    position: "absolute",
    top: 0,
  },
});
