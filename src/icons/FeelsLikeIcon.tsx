import * as React from "react";

export const FeelsLikeIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 11 12"
  >
    <path
      fill={props.fill}
      fillOpacity={props.opacity}
      d="M1.5 0v5.734C.625 6.37 0 7.338 0 8.5 0 10.428 1.573 12 3.5 12S7 10.428 7 8.5c0-1.162-.625-2.131-1.5-2.766V5h1V4h-1V3h1V2h-1V1h1V0zm7.75 0C8.285 0 7.5.785 7.5 1.75S8.285 3.5 9.25 3.5 11 2.715 11 1.75 10.215 0 9.25 0M2.5 1h2v5.203l.25.14A2.48 2.48 0 0 1 6 8.5C6 9.886 4.886 11 3.5 11A2.493 2.493 0 0 1 1 8.5c0-.926.502-1.722 1.25-2.156l.25-.14zm6.75 0a.75.75 0 0 1 0 1.5.75.75 0 0 1 0-1.5M3 2v5.094C2.42 7.3 2 7.85 2 8.5a1.5 1.5 0 0 0 3 0c0-.65-.42-1.2-1-1.407V2z"
    ></path>
  </svg>
);


