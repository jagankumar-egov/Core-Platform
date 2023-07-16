import React from "react";

export const CloseFullscreen = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_227)">
        <path d="M22 3.41L16.71 8.7L20 12H12V4L15.29 7.29L20.59 2L22 3.41ZM3.41 22L8.7 16.71L12 20V12H4L7.29 15.29L2 20.59L3.41 22Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_227">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
