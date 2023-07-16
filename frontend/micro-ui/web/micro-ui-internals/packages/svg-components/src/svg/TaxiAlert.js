import React from "react";

export const TaxiAlert = ({ className, height = "24", width = "24", style = {}, fill = "#F47738" }) => {
  return (
    <svg width={width} height={height} className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1974_11382)">
        <path
          d="M23 8.0002C22.9978 6.4126 22.456 4.87289 21.4636 3.63376C20.4711 2.39462 19.0869 1.52966 17.5381 1.18083C15.9893 0.832004 14.3679 1.02002 12.94 1.71403C11.5121 2.40805 10.3626 3.56682 9.68 5.0002H7V7.0002H4.5C4.18761 6.99973 3.88286 7.09679 3.6283 7.27786C3.37373 7.45892 3.18205 7.71495 3.08 8.0102L1 14.0002V22.0002C1 22.2654 1.10536 22.5198 1.29289 22.7073C1.48043 22.8948 1.73478 23.0002 2 23.0002H3C3.26522 23.0002 3.51957 22.8948 3.70711 22.7073C3.89464 22.5198 4 22.2654 4 22.0002V21.0002H16V22.0002C16 22.2654 16.1054 22.5198 16.2929 22.7073C16.4804 22.8948 16.7348 23.0002 17 23.0002H18C18.2652 23.0002 18.5196 22.8948 18.7071 22.7073C18.8946 22.5198 19 22.2654 19 22.0002V14.3202C20.1954 13.7519 21.2055 12.8567 21.9133 11.7383C22.6212 10.6198 22.9979 9.32382 23 8.0002V8.0002ZM4.5 8.5002H9.03C9.14474 10.2054 9.88551 11.808 11.11 13.0002H3L4.5 8.5002ZM4.5 18.0002C4.10218 18.0002 3.72064 17.8422 3.43934 17.5609C3.15804 17.2796 3 16.898 3 16.5002C3 16.1024 3.15804 15.7208 3.43934 15.4395C3.72064 15.1582 4.10218 15.0002 4.5 15.0002C4.89782 15.0002 5.27936 15.1582 5.56066 15.4395C5.84196 15.7208 6 16.1024 6 16.5002C6 16.898 5.84196 17.2796 5.56066 17.5609C5.27936 17.8422 4.89782 18.0002 4.5 18.0002ZM15.5 18.0002C15.1022 18.0002 14.7206 17.8422 14.4393 17.5609C14.158 17.2796 14 16.898 14 16.5002C14 16.1024 14.158 15.7208 14.4393 15.4395C14.7206 15.1582 15.1022 15.0002 15.5 15.0002C15.8978 15.0002 16.2794 15.1582 16.5607 15.4395C16.842 15.7208 17 16.1024 17 16.5002C17 16.898 16.842 17.2796 16.5607 17.5609C16.2794 17.8422 15.8978 18.0002 15.5 18.0002V18.0002ZM18.43 12.3702L18.22 12.4802L18.04 12.5702C17.9025 12.6298 17.7623 12.6832 17.62 12.7302L17.4 12.8002L17.17 12.8602L16.97 12.9102C16.2866 13.0446 15.5826 13.0347 14.9032 12.8812C14.2239 12.7277 13.5841 12.4339 13.0248 12.0187C12.4656 11.6035 11.9993 11.0761 11.6558 10.4702C11.3122 9.86426 11.0991 9.19327 11.03 8.5002C11.0097 8.33431 10.9997 8.16733 11 8.0002L11.02 7.5302L11.04 7.3602L11.08 7.0802L11.12 6.8702L11.17 6.6602L11.24 6.4202L11.29 6.2902C11.6857 5.18065 12.4612 4.24687 13.4792 3.65412C14.4972 3.06137 15.6921 2.84789 16.8523 3.05144C18.0126 3.255 19.0635 3.86248 19.8189 4.76635C20.5743 5.67023 20.9856 6.81222 20.98 7.9902C20.988 8.8821 20.7554 9.75967 20.3067 10.5305C19.8579 11.3013 19.2096 11.9369 18.43 12.3702V12.3702ZM15 4.0002H17V9.0002H15V4.0002ZM15 10.0002H17V12.0002H15V10.0002Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1974_11382">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
