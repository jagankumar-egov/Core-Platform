import React from "react";

export const HorizontalSplit = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_502)">
        <path d="M3 19H21V13H3V19ZM3 11H21V9H3V11ZM3 5V7H21V5H3Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_502">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
