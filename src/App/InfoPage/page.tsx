import { Component } from "solid-js";
import styles from "./style.module.css";
import { CardProps } from "@/types";

const InfoPage: Component<CardProps> = (props) => {
  if (!props.data || !props.weather) {
    return <div>Loading...</div>;
  }

  return (
    <div class={`${styles.page}`}>
      <h1>About</h1>
      <p>
        This is my first project, and although it is small, I feel like I have spent a lot of time on it.  
        In this project, I created a weather application using{" "}
        <a href="https://www.typescriptlang.org/" target="_blank">
          TypeScript
        </a>{" "}
        and{" "}
        <a href="https://www.solidjs.com/" target="_blank">
          SolidJS
        </a>
        , and I also applied the folder structure approach based on{" "}
        <a href="https://feature-sliced.design/" target="_blank">FSD</a>.
      </p>
      <p>
        The project is hosted on the Cloudflare platform at{" "}
        <a href="https://weather.neoilu.space" target="_blank">
          weather.neoilu.space
        </a>
        . I use two APIs:{" "}
        <a href="https://ipwhois.io/" target="_blank">ipwhois</a> for  
        location detection and{" "}
        <a href="https://open-meteo.com/" target="_blank">Open Meteo</a> for  
        weather forecasts.
      </p>
      <p>
        I designed the application's UI myself, inspired by the weather interface on iOS.  
        However, my main goal was to improve my programming skills rather than create a perfect design.
      </p>
      <p>
        This project has been a great experience for me, and I continue to improve it,  
        following the principles of clean code and proper commit structuring.
      </p>
    </div>
  );
};

export default InfoPage;

