import React from "react";

export const SentimentDissatisfied = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_176_894)">
        <path
          d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
          fill={fill}
        />
        <path
          d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
          fill={fill}
        />
        <path
          d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 16.5C12.73 16.5 13.39 16.69 13.97 17.03C14.09 16.89 14.83 16.05 14.98 15.89C14.13 15.33 13.11 15 12 15C10.89 15 9.87 15.33 9.01 15.88C9.98 16.97 9.02 15.9 10.02 17.02C10.61 16.69 11.27 16.5 12 16.5Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_176_894">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
