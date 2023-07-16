import React from "react";

export const PermDeviceInformation = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_740)">
        <path
          d="M13 7H11V9H13V7ZM13 11H11V17H13V11ZM17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01V1.01ZM17 19H7V5H17V19Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_740">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
