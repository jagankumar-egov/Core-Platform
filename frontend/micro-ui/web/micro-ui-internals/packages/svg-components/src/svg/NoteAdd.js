import React from "react";

export const NoteAdd = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_653)">
        <path
          d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 16H13V19H11V16H8V14H11V11H13V14H16V16ZM13 9V3.5L18.5 9H13Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_653">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
