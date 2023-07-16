import React from "react";

export const HomeFilled = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_499)">
        <path d="M12 3L4 9V21H9V14H15V21H20V9L12 3Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_499">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
