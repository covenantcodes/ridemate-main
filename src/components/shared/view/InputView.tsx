import React, { FC, ReactNode } from "react";
import {
  Keyboard,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";

interface InputViewProps extends KeyboardAwareScrollViewProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}
const InputView: FC<InputViewProps> = ({ children, style, ...rest }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAwareScrollView
        extraScrollHeight={50}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[style]}
        {...rest}>
        {children}
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default InputView;
