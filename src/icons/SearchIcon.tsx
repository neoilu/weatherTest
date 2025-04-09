import * as React from "react"

export const SearchIcon: React.FC<React.SVGProps<SVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill={props.fill}
      fillOpacity={props.opacity}
      d="M6.383 12.877a6.36 6.36 0 0 0 3.71-1.196l3.935 3.935a.95.95 0 0 0 .681.274c.54 0 .921-.415.921-.946a.9.9 0 0 0-.265-.665l-3.91-3.917a6.36 6.36 0 0 0 1.312-3.869c0-3.51-2.872-6.383-6.384-6.383C2.88.11 0 2.974 0 6.493c0 3.512 2.872 6.384 6.383 6.384m0-1.378c-2.739 0-5.005-2.266-5.005-5.006 0-2.739 2.266-5.005 5.005-5.005 2.74 0 5.006 2.266 5.006 5.005 0 2.74-2.266 5.006-5.006 5.006"
    />
  </svg>
);
