import React from "react";

export const NotificationsPaused = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_176_778)">
        <path
          d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.93 6 11V16L4 18V19H20V18L18 16ZM14.5 9.8L11.7 13.2H14.5V15H9.5V13.2L12.3 9.8H9.5V8H14.5V9.8Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_176_778">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
