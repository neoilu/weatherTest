import { Component, createSignal } from "solid-js";
import { CardProps } from "@/types";
import styles from "./style.module.css";

const Footer: Component<CardProps> = props => {
    const [path, setPath] = createSignal(window.location.pathname);

  const updatePath = () => setPath(window.location.pathname);

  window.addEventListener("popstate", updatePath);

  const isInfoPage = () => path() === "/info";

  return (
    <div class={`${styles.footer} ${styles[props.theme()]}`}>
      <a href={isInfoPage() ? "/" : "/info"} onClick={() => setTimeout(updatePath, 10)}>
        {isInfoPage() ? "Back" : "About"}
      </a>
    </div>
  );
};

export default Footer;
