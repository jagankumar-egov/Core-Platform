import React from "react";

export const ForwardToInbox = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_2079)">
        <path
          d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H13V18H4V8L12 13L20 8V13H22V6C22 4.9 21.1 4 20 4ZM12 11L4 6H20L12 11ZM19 15L23 19L19 23V20H15V18H19V15Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_2079">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
