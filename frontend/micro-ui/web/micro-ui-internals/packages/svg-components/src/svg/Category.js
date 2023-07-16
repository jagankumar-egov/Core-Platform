import React from "react";

export const Category = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_10879)">
        <path d="M12 2L6.5 11H17.5L12 2Z" fill={fill} />
        <path
          d="M17.5 22C19.9853 22 22 19.9853 22 17.5C22 15.0147 19.9853 13 17.5 13C15.0147 13 13 15.0147 13 17.5C13 19.9853 15.0147 22 17.5 22Z"
          fill={fill}
        />
        <path d="M3 13.5H11V21.5H3V13.5Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_1974_10879">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
