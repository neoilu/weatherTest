import * as React from "react";

export const NextWeekIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 11 14"
  >
    <path
      fill={props.fill}
      fillOpacity={props.opacity}
      d="M2.444 6.389h1.223V7.61H2.444zM11 3.333v8.556c0 .672-.55 1.222-1.222 1.222H1.222A1.22 1.22 0 0 1 0 11.89l.006-8.556c0-.672.538-1.222 1.216-1.222h.611V.89h1.223V2.11h4.888V.89h1.223V2.11h.61c.673 0 1.223.55 1.223 1.222M1.222 4.556h8.556V3.333H1.222zm8.556 7.333V5.778H1.222v6.11zM7.333 7.61h1.223V6.39H7.333zm-2.444 0H6.11V6.39H4.89z"
    ></path>
  </svg>
);


