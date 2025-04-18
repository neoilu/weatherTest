import * as React from "react";

export const PrecipitationIcon: React.FC<React.SVGProps<SVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.height}
    height={props.width}
    fill="none"
    viewBox="0 0 12 12"
  >
    <path
      fill={props.fill}
      fillOpacity={props.opacity}
      fillRule="evenodd"
      d="M6 0a.375.375 0 0 1 .375.375V.76C9.469.929 12 3.165 12 6c0 0 0 .375-.375.375-.112 0-.264-.109-.264-.109l-.003-.003-.019-.017a2.6 2.6 0 0 0-.416-.296 2.4 2.4 0 0 0-1.173-.325c-.479 0-.883.16-1.173.325a2.6 2.6 0 0 0-.416.296l-.019.017-.002.003s-.153.109-.265.109-.264-.109-.264-.109l-.003-.003-.019-.017a2.6 2.6 0 0 0-.416-.296 2.5 2.5 0 0 0-.798-.292v4.497l-.004.062a2.3 2.3 0 0 1-.223.826c-.13.266-.327.494-.572.66-.281.185-.636.297-1.076.297s-.796-.111-1.075-.297a1.7 1.7 0 0 1-.573-.66 2.25 2.25 0 0 1-.226-.889v-.018l-.001-.007v-.002s0-.002.375-.002h-.375V9.75a.375.375 0 0 1 .75 0v.38l.002.032a1.5 1.5 0 0 0 .147.545.93.93 0 0 0 .317.371c.142.096.35.172.659.172s.517-.076.66-.172a.94.94 0 0 0 .317-.371 1.5 1.5 0 0 0 .148-.578V5.659c-.28.05-.55.15-.798.292q-.233.135-.435.313l-.003.003s-.152.109-.264.109-.264-.109-.264-.109l-.003-.003a2.6 2.6 0 0 0-.435-.312 2.4 2.4 0 0 0-1.173-.326c-.478 0-.883.16-1.173.325q-.233.135-.435.313l-.003.003s-.152.109-.264.109C0 6.375 0 6 0 6 0 3.165 2.531.929 5.625.76V.376A.375.375 0 0 1 6 0"
      clipRule="evenodd"
    ></path>
  </svg>
);

