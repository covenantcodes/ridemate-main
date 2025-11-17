import * as React from "react";
import Svg, {Path} from "react-native-svg";

import {IIconProps} from "../icons.types";

function SearchIcon({width = 16, height = 16, color}: IIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M7.667 14a6.333 6.333 0 100-12.667 6.333 6.333 0 000 12.667z"
        stroke={color}
      />
      <Path
        d="M13.333 13.333l1.334 1.334"
        stroke={color}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SearchIcon;
