import React from "react";

export const StayCurrentLandscape = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_2260)">
        <path
          d="M1.01 7L1 17C1 18.1 1.9 19 3 19H21C22.1 19 23 18.1 23 17V7C23 5.9 22.1 5 21 5H3C1.9 5 1.01 5.9 1.01 7ZM19 7V17H5V7H19Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_2260">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
