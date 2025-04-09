import * as React from "react";

export const LocationIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      fill={props.fill}
      fillOpacity={props.opacity}
      d="M17.897 1.908a1.38 1.38 0 0 0-.303-1.502 1.38 1.38 0 0 0-1.502-.303L.861 6.333c-.615.252-.96.9-.835 1.55a1.38 1.38 0 0 0 1.358 1.116H9v7.615a1.385 1.385 0 0 0 2.666.524z"
    ></path>
  </svg>
);

