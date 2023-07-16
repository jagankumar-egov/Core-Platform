import React from "react";

export const EditLocation = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_10964)">
        <path
          d="M12 2C8.14 2 5 5.14 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.14 15.86 2 12 2ZM10.44 12H9V10.56L12.35 7.22L13.78 8.65L10.44 12ZM14.89 7.55L14.19 8.25L12.75 6.81L13.45 6.11C13.6 5.96 13.84 5.96 13.99 6.11L14.89 7.01C15.04 7.16 15.04 7.4 14.89 7.55V7.55Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1974_10964">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
