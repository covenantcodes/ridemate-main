import * as React from "react";
import Svg, {Path} from "react-native-svg";

import {IIconProps} from "../icons.types";

function FaceEmojiIcon({width, height}: IIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#FFCC4D"
      />
      <Path
        d="M7.01 15.747c.03.12.779 2.92 4.99 2.92 4.212 0 4.96-2.8 4.99-2.92a.332.332 0 00-.158-.37.337.337 0 00-.4.052c-.013.013-1.303 1.237-4.432 1.237-3.13 0-4.42-1.224-4.432-1.236a.334.334 0 00-.558.317zM8 11.334c.92 0 1.667-1.045 1.667-2.334 0-1.288-.746-2.333-1.667-2.333-.92 0-1.667 1.045-1.667 2.333 0 1.289.747 2.334 1.667 2.334zM16 11.334c.92 0 1.666-1.045 1.666-2.334 0-1.288-.746-2.333-1.666-2.333-.92 0-1.667 1.045-1.667 2.333 0 1.289.746 2.334 1.667 2.334z"
        fill="#664500"
      />
    </Svg>
  );
}

export default FaceEmojiIcon;
