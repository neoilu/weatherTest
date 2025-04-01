import { Component } from "solid-js"
import styles from "./style.module.css"
import type { CardProps } from "@/types"
import { getWeatherState } from "@/utils"

const MainCard: Component<CardProps> = props => {
    if (!props.data || !props.weather) {
        return <div>Loading...</div>
    }

    return (
        <div class={`${styles.card} ${styles[props.theme()]}`}>
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
                    High:{" "}
                    {Math.round(props.weather.daily.temperature_2m_max[0])}°
                    Low: {Math.round(props.weather.daily.temperature_2m_min[0])}
                    °
                </p>
            </div>
        </div>
    )
}

export default MainCard
