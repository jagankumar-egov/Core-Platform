import React from "react";

export const FilePresent = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_390)">
        <path
          d="M15 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V7L15 2ZM6 20V4H14V8H18V20H6ZM16 10V15C16 17.21 14.21 19 12 19C9.79 19 8 17.21 8 15V8.5C8 7.03 9.26 5.86 10.76 6.01C12.06 6.14 13 7.33 13 8.64V15H11V8.5C11 8.22 10.78 8 10.5 8C10.22 8 10 8.22 10 8.5V15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15V10H16Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_390">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
