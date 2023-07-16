import React from "react";

export const EditRoad = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_10967)">
        <path d="M18 4H16V11.9L18 9.9V4Z" fill={fill} />
        <path d="M6 4H4V20H6V4Z" fill={fill} />
        <path d="M12 4H10V8H12V4Z" fill={fill} />
        <path d="M12 10H10V14H12V10Z" fill={fill} />
        <path d="M12 16H10V20H12V16Z" fill={fill} />
        <path
          d="M22.56 12.5901L21.41 11.4401C20.82 10.8501 19.87 10.8501 19.29 11.4401L14 16.7301V20.0001H17.27L22.56 14.7101C23.15 14.1201 23.15 13.1701 22.56 12.5901ZM16.58 18.4501H15.55V17.4201L19 13.9701L20.03 15.0001L16.58 18.4501Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1974_10967">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
