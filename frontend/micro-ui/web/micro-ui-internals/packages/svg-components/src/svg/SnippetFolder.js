import React from "react";

export const SnippetFolder = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_2475)">
        <path
          d="M15.88 10.5L17.5 12.12V15.5H14.5V10.5H15.88ZM22 8V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18L2.01 6C2.01 4.9 2.9 4 4 4H10L12 6H20C21.1 6 22 6.9 22 8ZM19 11.5L16.5 9H13V17H19V11.5Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_2475">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
