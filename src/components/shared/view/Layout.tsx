import React, { FC } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { globalStyles } from "styles/globalStyles";
import { colors } from "theme/themes";

interface LayoutProps extends ViewProps {
  noPadding?: boolean;
  hideBg?: boolean;
  bgColor?: string;
}

const Layout: FC<LayoutProps> = ({
  children,
  style,
  noPadding,
  hideBg,
  bgColor,
}) => {
  // Get actual insets
  const insets = useSafeAreaInsets();

  const backgroundStyle = {
    backgroundColor: bgColor ?? colors.background,
  };

  return (
    <View
      style={[
        styles.container,
        !hideBg && backgroundStyle,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={[globalStyles.flex, !noPadding && globalStyles.px2, style,]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

export default Layout;
