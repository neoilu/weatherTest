import { getWeatherState, normalizeTime } from "@/utils"
import styles from "./styles.module.css"
import { WeatherState } from "@/types"
import { useUnit } from "effector-react"
import { $weatherData } from "@/api"

interface HourCardProps {
    timeIndex: number
    isNow?: boolean
}

const resolveWeatherState = (weatherCode: number, timeIndex: number): WeatherState => {
    const adjustedTime = timeIndex % 24
    const isNight = adjustedTime >= 21 || adjustedTime <= 5

    if (isNight) {
        if (weatherCode === 0 || weatherCode === 1) return getWeatherState(105) // clear night
        if (weatherCode === 2) return getWeatherState(106) // partly cloudy night
    }

    return getWeatherState(weatherCode)
}

export const HourCard = (props: HourCardProps) => {
    const weatherData = useUnit($weatherData)

    const time = weatherData?.hourly.time[props.timeIndex]
    const weatherCode = weatherData?.hourly.weathercode[props.timeIndex]

    if (!time || weatherCode === undefined) {
        return <div>Invalid data</div>
    }

    const weather = resolveWeatherState(weatherCode, props.timeIndex)
    const temperature = Math.round(weatherData.hourly.temperature_2m[props.timeIndex])

    return (
        <div className={styles.hourlyCard}>
            <p className={styles.timeLabel}>{props.isNow ? "Now" : normalizeTime(time)}</p>
            <img className={styles.weatherIcon} src={weather.icon} alt={weather.name} />
            <p className={styles.hourlyTemperature}>{temperature}°</p>
        </div>
    )
}
