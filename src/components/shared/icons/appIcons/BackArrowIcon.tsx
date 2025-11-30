import TouchableComponent from "components/shared/touchable/Touchable";
import React from "react";
import Svg, {Path} from "react-native-svg";

const BackArrowIcon = ({
  onPress,
  color = "#191B1F",
}: {
  onPress: () => void;
  color?: string;
}) => {
  return (
    <TouchableComponent onPress={onPress}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeWidth="1.5"
        />
        <Path
          d="M13.5 9L10.5 12L13.5 15"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </TouchableComponent>
  );
};

export default BackArrowIcon;
