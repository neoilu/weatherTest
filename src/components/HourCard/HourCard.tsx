import { WeatherDataResponse } from "@/types"
import { getWeatherState, normalizeTime } from "@/utils"
import { Component } from "solid-js"
import styles from "./style.module.css"

interface HourCardProps {
    timeIndex: number | null
    weather: WeatherDataResponse | undefined
    isNow?: boolean 
}

const HourCard: Component<HourCardProps> = (props) => {
    if (!props.weather || props.timeIndex === null) {
        return <div>Loading...</div>
    }

    const time = props.weather?.hourly.time[props.timeIndex]
    const weatherCode = props.weather?.hourly.weathercode[props.timeIndex]

    if (!time || weatherCode === undefined) {
        return <div>Invalid data</div>
    }

    const weatherState = getWeatherState(weatherCode);
    console.log("styles.card =", styles.card)


    return (
        <div class={styles.card}>
            {props.isNow ? (
                <p>Now</p>  
            ) : (
                <p>{normalizeTime(time)}</p>
            )}
            <img src={weatherState.icon} alt={weatherState.name} />
            <p>{Math.round(props.weather.hourly.temperature_2m[props.timeIndex])}°</p>
        </div>
    );
};

export default HourCard;
