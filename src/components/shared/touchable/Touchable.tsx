import RNBounceable from "@freakycoder/react-native-bounceable";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

interface TouchableProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void | undefined;
  children?: React.ReactNode;
  ref?: React.Ref<View> | undefined;
  bounce?: boolean;
}

const TouchableComponent = (props: TouchableProps) => {
  const {style, onPress, children, ref, bounce, ...rest} = props;
  const pressIn = () => {
    onPress && onPress();
  };
  if (bounce) {
    return (
      <RNBounceable
        style={[style]}
        hitSlop={{right: 10, left: 10, bottom: 10, top: 10}}
        onPress={pressIn}>
        {children}
      </RNBounceable>
    );
  }
  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      style={[style]}
      hitSlop={{right: 10, left: 10, bottom: 10, top: 10}}
      {...rest}>
      {children}
    </Pressable>
  );
};

export default TouchableComponent;
