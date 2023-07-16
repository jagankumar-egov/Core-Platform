import React from "react";

export const AddChart = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_39)">
        <path
          d="M22 5V7H19V10H17V7H14V5H17V2H19V5H22ZM19 19H5V5H11V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13H19V19ZM15 13V17H17V13H15ZM11 17H13V9H11V17ZM9 17V11H7V17H9Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_39">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
