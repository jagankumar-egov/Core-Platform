import React from "react";

export const CompassCalibration = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_10899)">
        <path d="M12 21C14.2091 21 16 19.2091 16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17C8 19.2091 9.79086 21 12 21Z" fill={fill} />
        <path
          d="M12 10.07C13.95 10.07 15.72 10.86 17 12.14L22 7.14C19.44 4.59 15.9 3 12 3C8.1 3 4.56 4.59 2 7.15L7 12.15C8.28 10.87 10.05 10.07 12 10.07Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1974_10899">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
