import { Component } from "solid-js";
import { IconProps } from "../icons";


const Arrow: Component<IconProps> = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 505 75"
    style={props.style}
  >
    <path
      fill={props.color}
      fill-opacity={props.opacity}
      d="M38.466 37.233c0 10.622-8.611 19.233-19.233 19.233S0 47.855 0 37.233 8.61 18 19.233 18c10.622 0 19.233 8.61 19.233 19.233"
    ></path>
    <path
      fill={props.color}
      opacity={props.opacity}
      d="M503.535 40.768a5 5 0 0 0 0-7.07l-31.819-31.82a5 5 0 1 0-7.071 7.07l28.284 28.285-28.284 28.284a5 5 0 1 0 7.071 7.071zM19.179 42.233H500v-10H19.18z"
    ></path>
  </svg>
);

export default Arrow;