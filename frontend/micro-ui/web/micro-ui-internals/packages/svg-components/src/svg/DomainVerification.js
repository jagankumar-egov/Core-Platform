import React from "react";

export const DomainVerification = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_2063)">
        <path d="M16.6004 10.88L15.1804 9.45996L10.9404 13.71L8.82039 11.58L7.40039 13L10.9404 16.54L16.6004 10.88Z" fill={fill} />
        <path d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.11 4 19 4ZM19 18H5V8H19V18Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_2063">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
