import React from "react";

export const ChangeHistory = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_209)">
        <path d="M12 7.77L18.39 18H5.61L12 7.77ZM12 4L2 20H22L12 4Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_105_209">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
