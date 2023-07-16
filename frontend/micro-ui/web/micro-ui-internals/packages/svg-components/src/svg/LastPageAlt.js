import React from "react";

export const LastPageAlt = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2583_7)">
        <path d="M5.58984 7.41L10.1798 12L5.58984 16.59L6.99984 18L12.9998 12L6.99984 6L5.58984 7.41ZM15.9998 6H17.9998V18H15.9998V6Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_2583_7">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
