import React, {FC, ReactNode} from "react";
import {Keyboard, StyleProp, ViewStyle} from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from "react-native-keyboard-aware-scroll-view";

interface InputViewProps extends KeyboardAwareScrollViewProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}
const InputView: FC<InputViewProps> = ({children, style, ...rest}) => {
  return (
    <KeyboardAwareScrollView
      extraScrollHeight={50}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[style]}
      onScrollBeginDrag={Keyboard.dismiss}
      keyboardShouldPersistTaps="handled"
      {...rest}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default InputView;
