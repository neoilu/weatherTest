import { Component } from "solid-js";
import styles from "./style.module.css";
import type { MainDataResponse, WeatherDataResponse } from "@/types";
import { getWeatherState } from "@/functions";

interface MainDisplayProps {
    data: MainDataResponse;
    weather: WeatherDataResponse;
    theme: string | null;
}

const MainDisplay: Component<MainDisplayProps> = (props) => {
    return (
        <div class={`${styles.card} ${props.theme ? styles[props.theme] : ""}`}>
            <div class={styles.top}>
                <p class={styles.location}>MY LOCATION</p>
                <p class={styles.city}>{props.data.city}</p>
            </div>
            <div class={styles.middle}>
                <p class={styles.temperature}>
                    {Math.round(props.weather.current_weather.temperature)}°
                </p>
            </div>
            <div class={styles.bottom}>
                <p class={styles.weatherState}>
                    {getWeatherState(props.weather.current_weather.weathercode)}
                </p>
                <p class={styles.dailyTemperature}>
                    H:{Math.round(props.weather.daily.temperature_2m_max[0])}° L:
                    {Math.round(props.weather.daily.temperature_2m_min[0])}°
                </p>
            </div>
        </div>
    );
};

export default MainDisplay;