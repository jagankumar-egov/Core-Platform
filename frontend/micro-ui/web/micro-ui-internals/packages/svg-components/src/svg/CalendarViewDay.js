import React from "react";

export const CalendarViewDay = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_186)">
        <path d="M3 17H21V19H3V17ZM3 10H21V15H3V10ZM3 6H21V8H3V6Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_186">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
