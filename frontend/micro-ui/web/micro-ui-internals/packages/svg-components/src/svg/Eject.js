import React from "react";

export const Eject = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_340)">
        <path d="M5 17H19V19H5V17ZM12 5L5.33 15H18.67L12 5Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_340">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
