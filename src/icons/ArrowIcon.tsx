import * as React from "react";

export const ArrowIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 386 74"
    style={props.style}
  >
    <path
      fill={props.fill}
      fillOpacity={props.opacity}
      fillRule="evenodd"
      d="M383.553 33.462 351.765 1.61a5 5 0 1 0-7.078 7.064l23.261 23.308-339.571-.337c-2.037-5.612-7.414-9.624-13.73-9.63C6.572 22.006.022 28.545.014 36.617.007 44.69 6.545 51.241 14.617 51.25c6.317.006 11.702-3.995 13.75-9.604l339.571.337-23.307 23.26a5 5 0 1 0 7.064 7.079l31.851-31.788a5 5 0 0 0 .007-7.071"
      clipRule="evenodd"
    ></path>
  </svg>
);
