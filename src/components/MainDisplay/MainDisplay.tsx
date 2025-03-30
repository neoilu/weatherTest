import { Component } from "solid-js"
import styles from "./style.module.css"
import type { MainDataResponse, WeatherDataResponse } from "@/types"
import { getWeatherState } from "@/functions"

interface MainDisplayProps {
    data: MainDataResponse
    weather: WeatherDataResponse
}

const MainDisplay: Component<MainDisplayProps> = ({ data, weather }: MainDisplayProps) => {
    return (
        <div class={styles.card}>
            <div>
                <p>MY LOCATION</p>
                <p>{data.city}</p>
            </div>
            <div>
                <p>{Math.round(weather.current_weather.temperature)}°</p>
            </div>
            <div>
                <p>{getWeatherState(weather.current_weather.weathercode)}</p>
                <p>H:{Math.round(weather.daily.temperature_2m_max[0])} L:{Math.round(weather.daily.temperature_2m_min[0])} </p>
            </div>
        </div>
    )
}

export default MainDisplay
