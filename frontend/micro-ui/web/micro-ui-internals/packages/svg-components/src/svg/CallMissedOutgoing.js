import React from "react";

export const CallMissedOutgoing = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_2005)">
        <path d="M3 8.41L12 17.41L19 10.41V15H21V7H13V9H17.59L12 14.59L4.41 7L3 8.41Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_2005">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
