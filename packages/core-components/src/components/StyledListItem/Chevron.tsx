import Svg, { Path } from "react-native-svg";

import React from "react";
import { microColors } from "../../colors";

export const ChevronRight = () => (
  <Svg
    height="28px"
    viewBox="0 -960 960 960"
    width="28px"
    fill={microColors.black}
  >
    <Path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
  </Svg>
);
