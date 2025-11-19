import React, {FC, PropsWithChildren} from "react";
import {ScrollView, ScrollViewProps} from "react-native";

interface ScrollableViewProps extends ScrollViewProps, PropsWithChildren {}
const ScrollableView: FC<ScrollableViewProps> = ({
  children,
  contentContainerStyle,
  ...rest
}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[contentContainerStyle]}
      {...rest}>
      {children}
    </ScrollView>
  );
};

export default ScrollableView;
