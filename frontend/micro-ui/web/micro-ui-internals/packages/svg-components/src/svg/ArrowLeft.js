import React from "react";

export const ArrowLeft = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_1479)">
        <path d="M14 7L9 12L14 17V7Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_1479">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
