import React from "react";

export const OpenInBrowser = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_681)">
        <path
          d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H9V18H5V8H19V18H15V20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.11 4 19 4ZM12 10L8 14H11V20H13V14H16L12 10Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_681">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
