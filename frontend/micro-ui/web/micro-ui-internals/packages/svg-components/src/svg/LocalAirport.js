import React from "react";

export const LocalAirport = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_11106)">
        <path
          d="M22 16V14L13.5 9V3.5C13.5 2.67 12.83 2 12 2C11.17 2 10.5 2.67 10.5 3.5V9L2 14V16L10.5 13.5V19L8 20.5V22L12 21L16 22V20.5L13.5 19V13.5L22 16Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1974_11106">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
