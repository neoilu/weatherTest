import { Component, createSignal, createEffect } from "solid-js";
import { CardProps } from "@/types";
import styles from "./style.module.css";
import {
    MainCard,
    FeelsLikeCard,
    PrecipitationCard,
    NextHoursCard,
    NextWeekCard,
    WindCard,
} from "./cards";

const MainPage: Component<CardProps> = (props) => {
    const [data, setData] = createSignal(props.data);
    const [weather, setWeather] = createSignal(props.weather);

    createEffect(() => {
        if (props.data) setData(props.data);
        if (props.weather) setWeather(props.weather);
    });

    // Проверка наличия всех нужных данных
    const currentData = data();
    const currentWeather = weather();

    if (!currentData || !currentWeather || !currentWeather.current_weather) {
        console.warn("Data or weather is undefined:", {
            data: currentData,
            weather: currentWeather,
        });
        return <div>Loading...</div>;
    }

    return (
        <div class={`${styles.gridContainer} grid-container`}>
            <div class={styles.main}>
                <MainCard data={currentData} weather={currentWeather} />
            </div>
            <div class={styles.feelsLike}>
                <FeelsLikeCard data={currentData} weather={currentWeather} />
            </div>
            <div class={styles.precipitation}>
                <PrecipitationCard data={currentData} weather={currentWeather} />
            </div>
            <div class={styles.nextHours}>
                <NextHoursCard data={currentData} weather={currentWeather} />
            </div>
            <div class={styles.wind}>
                <WindCard data={currentData} weather={currentWeather} />
            </div>
            <div class={styles.nextWeek}>
                <NextWeekCard data={currentData} weather={currentWeather} />
            </div>
        </div>
    );
};

export default MainPage;
