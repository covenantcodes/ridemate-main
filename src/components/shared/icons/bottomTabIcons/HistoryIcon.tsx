import * as React from "react";
import Svg, {Path} from "react-native-svg";
import {IIconProps} from "../icons.types";
import {colors} from "theme/themes";

function HistoryIcon({focused}: IIconProps) {
  return (
    <Svg width={19} height={18} viewBox="0 0 19 18">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 4.5v4.075l3.386 2.032a.75.75 0 11-.772 1.286l-3.75-2.25A.75.75 0 019 9V4.5a.75.75 0 011.5 0zM9.75 0a8.948 8.948 0 00-6.367 2.64A38.696 38.696 0 001.5 4.686V3A.75.75 0 000 3v3.75c0 .414.336.75.75.75H4.5a.75.75 0 000-1.5H2.344c.67-.79 1.338-1.533 2.099-2.303a7.5 7.5 0 11.155 10.757.75.75 0 10-1.03 1.092A9 9 0 109.75 0z"
        fill={focused ? colors.primary : colors.black60}
      />
    </Svg>
  );
}

export default HistoryIcon;
