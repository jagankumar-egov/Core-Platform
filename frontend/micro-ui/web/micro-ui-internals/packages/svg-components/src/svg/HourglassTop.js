import React from "react";

export const HourglassTop = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_2088)">
        <path d="M6 2L6.01 8L10 12L6.01 16.01L6 22H18V16L14 12L18 8.01V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_2088">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
