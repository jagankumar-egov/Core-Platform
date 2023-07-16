import React from "react";

export const Hardware = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_11049)">
        <path d="M18 3L15 6V3H9C6.24 3 4 5.24 4 8H9V11H15V8L18 11H20V3H18Z" fill={fill} />
        <path d="M9 13V20C9 20.55 9.45 21 10 21H14C14.55 21 15 20.55 15 20V13H9Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_1974_11049">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
