import React from "react";
import {Circle, Path, Svg} from "react-native-svg";

const NetworkStatusIcon = () => {
  return (
    <Svg width="101" height="100" viewBox="0 0 101 100" fill="none">
      <Circle cx="50.5" cy="50" r="50" fill="#FEE4E2" />
      <Path
        d="M50.5 50V70"
        stroke="#B42318"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M49.25 37.6575C49.6495 37.5547 50.0685 37.5 50.5 37.5C53.2615 37.5 55.5 39.7386 55.5 42.5C55.5 42.9316 55.4453 43.3505 55.3425 43.75"
        stroke="#B42318"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M25.5 25L75.5 75"
        stroke="#B42318"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M62.897 35C64.5465 37.174 65.5 39.745 65.5 42.5C65.5 45.255 64.5465 47.826 62.897 50M38.1029 50C36.4536 47.826 35.5 45.255 35.5 42.5C35.5 40.7397 35.8893 39.0545 36.6007 37.5"
        stroke="#B42318"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M71.2898 30C73.949 33.5752 75.5 37.8746 75.5 42.5C75.5 47.1255 73.949 51.4248 71.2898 55M29.7102 30C27.0509 33.5752 25.5 37.8746 25.5 42.5C25.5 47.1255 27.0509 51.4248 29.7102 55"
        stroke="#B42318"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default NetworkStatusIcon;
