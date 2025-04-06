import { Component } from "solid-js"
import styles from "./style.module.css"
import { WeatherDataResponse } from "@/types"
import { getWeatherState } from "@/utils"

interface DayCardProps {
    weather: WeatherDataResponse
    index: number
    isToday?: boolean
}

const DayCard: Component<DayCardProps> = props => {
    const weatherState = getWeatherState(
        props.weather.daily.weathercode[props.index],
    )

    const day = new Date(props.weather.daily.time[props.index])
    const dayName = day.toLocaleDateString("en-US", { weekday: "short" })

    return (
        <div class={styles.card}>
            <p class={styles.dayLabel}>{props.isToday ? "Today" : dayName}</p>
            <img src={weatherState.icon} alt={weatherState.name} />
            <div class={styles.right}>
                <p class={styles.temperature}>
                    {Math.round(
                        props.weather.daily.temperature_2m_min[props.index],
                    )}
                </p>
                <span class={styles.separator}></span>
                <p>
                    {Math.round(
                        props.weather.daily.temperature_2m_max[props.index],
                    )}
                </p>
            </div>
        </div>
    )
}

export default DayCard
