import React, {FC} from "react";
import {View as RNView, ViewProps} from "react-native";
import {globalStyles} from "styles/globalStyles";

interface CustomViewProps extends ViewProps {
  bg?: string;
  height?: number;
}
const GlobalView: FC<CustomViewProps> = ({
  children,
  style,
  height,
  bg,
  ...rest
}) => {
  return (
    <RNView
      style={[
        globalStyles.flex,
        globalStyles.relative,
        {backgroundColor: bg, height},
        style,
      ]}
      {...rest}>
      {children}
    </RNView>
  );
};

export default GlobalView;
