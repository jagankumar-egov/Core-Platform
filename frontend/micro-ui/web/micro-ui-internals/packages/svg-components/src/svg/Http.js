import React from "react";

export const Http = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_518)">
        <path
          d="M4.5 11H2.5V9H1V15H2.5V12.5H4.5V15H6V9H4.5V11ZM7 10.5H8.5V15H10V10.5H11.5V9H7V10.5ZM12.5 10.5H14V15H15.5V10.5H17V9H12.5V10.5ZM21.5 9H18V15H19.5V13H21.5C22.3 13 23 12.3 23 11.5V10.5C23 9.7 22.3 9 21.5 9ZM21.5 11.5H19.5V10.5H21.5V11.5Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_518">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
