import React from "react";

export const Topic = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_2483)">
        <path
          d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM14 16H6V14H14V16ZM18 12H6V10H18V12Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_2483">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
