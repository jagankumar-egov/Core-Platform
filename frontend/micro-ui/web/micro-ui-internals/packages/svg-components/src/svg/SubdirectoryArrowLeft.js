import React from "react";

export const SubdirectoryArrowLeft = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_1592)">
        <path d="M11 9L12.42 10.42L8.83 14H18V4H20V16H8.83L12.42 19.58L11 21L5 15L11 9Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_1592">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
