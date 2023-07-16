import React from "react";

export const Museum = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_11257)">
        <path d="M22 11V9L12 2L2 9V11H4V20H2V22H22V20H20V11H22ZM16 18H14V14L12 17L10 14V18H8V11H10L12 14L14 11H16V18Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_1974_11257">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
