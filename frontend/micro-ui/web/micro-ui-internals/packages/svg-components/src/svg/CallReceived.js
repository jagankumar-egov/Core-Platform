import React from "react";

export const CallReceived = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_2012)">
        <path d="M20 5.41L18.59 4L7 15.59V9H5V19H15V17H8.41L20 5.41Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_2012">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
