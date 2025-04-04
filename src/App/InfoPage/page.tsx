import { Component } from "solid-js";
import styles from "./style.module.css";
import { CardProps } from "@/types";

const InfoPage: Component<CardProps> = (props) => {
  if (!props.data || !props.weather) {
    return <div>Loading...</div>;
  }

  return (
    <div class={`${styles.page} ${styles[props.theme()]}`}>
      <h1>О проекте</h1>
      <p>
        Это мой первый проект, и хотя он небольшой, я потратил (как мне кажется)
        много времени на него. В этом проекте я создал приложение погоды,
        используя{" "}
        <a href="https://www.typescriptlang.org/" target="_blank">
          TypeScript
        </a>{" "}
        и{" "}
        <a href="https://www.solidjs.com/" target="_blank">
          SolidJS
        </a>
        , а также применил структуру папок по подходу{" "}
        <a href="https://feature-sliced.design/" target="_blank">FSD</a>.
      </p>
      <p>
        Проект размещен на платформе Cloudflare по адресу{" "}
        <a href="https://weather.neoilu.space" target="_blank">
          weather.neoilu.space
        </a>
        . Я использую два API:{" "}
        <a href="https://ipwhois.io/" target="_blank">ipwhois</a> для
        определения местоположения и{" "}
        <a href="https://open-meteo.com/" target="_blank">Open Meteo</a> для
        получения прогноза погоды.
      </p>
      <p>
        Дизайн приложения я разрабатывал сам, ориентируясь на стиль интерфейса
        погоды в iOS. Хотя для меня главной целью было улучшение навыков
        программирования, а не создание идеального дизайна.
      </p>
      <p>
        Этот проект стал для меня отличным опытом, и я продолжаю его улучшать,
        придерживаясь принципов качественного кода и правильного оформления
        коммитов.
      </p>
    </div>
  );
};

export default InfoPage;
