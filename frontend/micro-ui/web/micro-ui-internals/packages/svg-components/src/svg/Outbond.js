import React from "react";

export const Outbond = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_693)">
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.88 11.54L8.92 16.5L7.51 15.09L12.47 10.13L10.34 8L15.99 8.01L16 13.66L13.88 11.54Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_693">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
