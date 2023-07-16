import React from "react";

export const PlusOne = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_176_847)">
        <path d="M10 8H8V12H4V14H8V18H10V14H14V12H10V8ZM14.5 6.08V7.9L17 7.4V18H19V5L14.5 6.08Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_176_847">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
