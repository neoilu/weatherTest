import * as React from "react";

export const WindIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 12 12"
  >
    <path
      fill={props.fill}
      fillOpacity={props.opacity}
      d="M6.6 2.1C6.6.942 5.658 0 4.5 0 3.28 0 2.55.915 2.55 1.8h1.2c0-.249.233-.6.75-.6a.901.901 0 0 1 0 1.8H0v1.2h4.5c1.158 0 2.1-.942 2.1-2.1m1.5 5.7H3.6V9h4.5a.901.901 0 0 1 0 1.8c-.517 0-.75-.351-.75-.6h-1.2c0 .885.73 1.8 1.95 1.8 1.158 0 2.1-.942 2.1-2.1s-.942-2.1-2.1-2.1"
    ></path>
    <path
      fill={props.fill}
      fillOpacity={props.opacity}
      d="M9.6 1.8a2.4 2.4 0 0 0-2.4 2.4h1.2a1.201 1.201 0 0 1 2.4 0c0 .662-.538 1.2-1.2 1.2H0v1.2h9.6c1.324 0 2.4-1.076 2.4-2.4s-1.076-2.4-2.4-2.4M0 7.8h2.4V9H0z"
    ></path>
  </svg>
);

